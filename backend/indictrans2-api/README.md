# IndicTrans2 API Wrapper

This is a small FastAPI wrapper for `ai4bharat/IndicTrans2` so the Google Apps Script backend can call IndicTrans2 over HTTP.

Apps Script sends:

```json
{
  "text": "मेरा नेटवर्क ठीक नहीं चलता",
  "source_language": "hi",
  "target_language": "en",
  "src_lang": "hin_Deva",
  "tgt_lang": "eng_Latn"
}
```

The API returns:

```json
{
  "translation": "My network does not work properly."
}
```

## Why This Exists

Google Apps Script can call APIs, but it cannot host or run IndicTrans2. IndicTrans2 needs a Python runtime and is much happier on GPU hardware. Host this wrapper on a GPU-friendly platform such as RunPod, Modal, Replicate, Hugging Face Spaces, a VM, or your own server.

## Model Choice

The default uses the distilled Indic-to-English model:

```text
ai4bharat/indictrans2-indic-en-dist-200M
```

For better quality, set:

```bash
INDICTRANS2_MODEL=ai4bharat/indictrans2-indic-en-1B
```

## Run Locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000
```

Then test:

```bash
curl -X POST http://localhost:8000/translate \
  -H "Content-Type: application/json" \
  -d '{"text":"मेरा नेटवर्क ठीक नहीं चलता","src_lang":"hin_Deva","tgt_lang":"eng_Latn"}'
```

## Apps Script Config

Set these Apps Script properties:

- `INDIC_TRANSLATE_URL`: `https://your-indictrans2-api.example.com/translate`
- `INDIC_API_KEY`: optional bearer token if you set `INDICTRANS2_API_KEY`

