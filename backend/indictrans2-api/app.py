from __future__ import annotations

import os
from functools import lru_cache

import torch
from fastapi import Depends, FastAPI, Header, HTTPException
from pydantic import BaseModel
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

try:
    from IndicTransToolkit.processor import IndicProcessor
except ImportError as exc:
    raise RuntimeError(
        "IndicTransToolkit is required. Install requirements.txt before running."
    ) from exc


MODEL_NAME = os.getenv("INDICTRANS2_MODEL", "ai4bharat/indictrans2-indic-en-dist-200M")
API_KEY = os.getenv("INDICTRANS2_API_KEY", "")
DEVICE = "cuda" if torch.cuda.is_available() else "cpu"


class TranslateRequest(BaseModel):
    text: str
    src_lang: str
    tgt_lang: str = "eng_Latn"
    source_language: str | None = None
    target_language: str | None = None


class TranslateResponse(BaseModel):
    translation: str
    model: str
    src_lang: str
    tgt_lang: str


app = FastAPI(title="IndicTrans2 Translation API")


def require_bearer(authorization: str | None = Header(default=None)) -> None:
    if not API_KEY:
        return
    expected = f"Bearer {API_KEY}"
    if authorization != expected:
        raise HTTPException(status_code=401, detail="Invalid API key")


@lru_cache(maxsize=1)
def load_model():
    tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, trust_remote_code=True)
    model = AutoModelForSeq2SeqLM.from_pretrained(
        MODEL_NAME,
        trust_remote_code=True,
        low_cpu_mem_usage=True,
    )
    model = model.to(DEVICE)
    if DEVICE == "cuda":
        model.half()
    model.eval()
    processor = IndicProcessor(inference=True)
    return tokenizer, model, processor


@app.get("/health")
def health():
    return {"ok": True, "model": MODEL_NAME, "device": DEVICE}


@app.post("/translate", response_model=TranslateResponse)
def translate(request: TranslateRequest, _: None = Depends(require_bearer)):
    text = request.text.strip()
    if not text:
        return TranslateResponse(
            translation="",
            model=MODEL_NAME,
            src_lang=request.src_lang,
            tgt_lang=request.tgt_lang,
        )

    tokenizer, model, processor = load_model()
    batch = processor.preprocess_batch(
        [text],
        src_lang=request.src_lang,
        tgt_lang=request.tgt_lang,
    )
    inputs = tokenizer(
        batch,
        truncation=True,
        padding="longest",
        return_tensors="pt",
        return_attention_mask=True,
    ).to(DEVICE)

    with torch.no_grad():
        generated = model.generate(
            **inputs,
            use_cache=True,
            min_length=0,
            max_length=256,
            num_beams=5,
            num_return_sequences=1,
        )

    decoded = tokenizer.batch_decode(
        generated,
        skip_special_tokens=True,
        clean_up_tokenization_spaces=True,
    )
    translation = processor.postprocess_batch(decoded, lang=request.tgt_lang)[0]

    return TranslateResponse(
        translation=translation.strip(),
        model=MODEL_NAME,
        src_lang=request.src_lang,
        tgt_lang=request.tgt_lang,
    )
