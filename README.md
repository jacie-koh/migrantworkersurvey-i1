# Worker Mobile Survey

A lightweight multilingual survey for Indian and Southeast Asian migrant workers. The frontend runs on GitHub Pages and the backend uses Google Apps Script to append clean English-ready rows into Google Sheets.

## What It Does

- Shows the survey in Indian and SEA worker languages.
- Collects name and phone number instead of email.
- Stores multiple-choice answers as clean English keys.
- Preserves raw native-language text for audit.
- Translates open text fields into English before appending to Google Sheets.
- Can route Tamil and SEA languages to SEA-LION, and other Indic languages to a separate Indic provider, when those endpoints are configured.

## Languages Included

English, Hindi, Bengali, Tamil, Telugu, Marathi, Odia, Bhojpuri, Malayalam, Indonesian, Vietnamese, Thai, Burmese, Malay, and Filipino.

## Files

- `index.html` - survey markup
- `styles.css` - responsive survey UI
- `script.js` - language switching, validation, payload creation, submit handling
- `backend/Code.gs` - Google Apps Script backend for Google Sheets
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow

## Google Sheets Setup

1. Create a Google Sheet.
2. Copy the spreadsheet ID from the URL.
3. Go to [script.google.com](https://script.google.com) and create a new Apps Script project.
4. Paste `backend/Code.gs` into the script editor.
5. In Apps Script, open **Project Settings** and add this script property:
   - `SPREADSHEET_ID`: your Google Sheet ID
6. Deploy as **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Copy the web app URL.
8. In `script.js`, replace:

```js
const GOOGLE_SCRIPT_URL = "";
```

with:

```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```

## SEA-LION / Indic Translation Routing

The Apps Script backend already chooses a provider group from `language_used`:

- `ta`, `id`, `vi`, `th`, `my`, `ms`, `tl`, `km`, `lo` route to `SEA_LION_TRANSLATE_URL` if configured.
- `hi`, `bn`, `te`, `mr`, `or`, `bho`, `ml` route to `INDIC_TRANSLATE_URL` if configured.
- If no external endpoint is configured, it falls back to `LanguageApp.translate`.

### Cloudflare SEA-LION

This project is wired for [cloudflare/cf-sealion-api](https://github.com/cloudflare/cf-sealion-api), which exposes SEA-LION through `POST /chat`.

1. Deploy the Cloudflare Worker from `cloudflare/cf-sealion-api`.
2. Copy the Worker URL, for example:

```text
https://your-worker.workers.dev
```

3. Add this Apps Script property:

- `SEA_LION_TRANSLATE_URL`: your Worker base URL or full `/chat` URL

If you protect the Worker with a bearer token, also add:

- `SEA_LION_API_KEY`: your token

The backend sends Cloudflare SEA-LION:

```json
{
  "system": "You translate worker survey answers into clean English...",
  "prompt": "Source language code: ta\nText:\n..."
}
```

and reads:

```json
{ "response": "English text" }
```

### Indic Provider

Optional Apps Script properties for Hindi, Bengali, Telugu, Marathi, Odia, Bhojpuri, and Malayalam:

- `INDIC_TRANSLATE_URL`
- `INDIC_API_KEY`

Expected Indic endpoint response can be any of:

```json
{ "translation": "English text" }
```

```json
{ "translated_text": "English text" }
```

```json
{ "text": "English text" }
```

## GitHub Pages Deployment

1. Create a GitHub repository.
2. Push this folder to the repository.
3. In GitHub, go to **Settings > Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow publishes the site automatically on every push to `main`.

## Local Preview

Run a static server from this folder:

```bash
npx serve .
```

Then open the local URL it prints.
