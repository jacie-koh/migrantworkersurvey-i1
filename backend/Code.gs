const SHEET_NAME = "Survey Responses";

const HEADERS = [
  "Timestamp",
  "Language",
  "Translation Provider",
  "Phone Number",
  "Name",
  "Origin Original",
  "Origin English",
  "Work Sector Key",
  "Work Sector English",
  "Work Sector Other Original",
  "Work Sector Other English",
  "Current Telco Key",
  "Current Telco English",
  "Current Telco Other Original",
  "Current Telco Other English",
  "Bill Payer Key",
  "Bill Payer English",
  "Bill Payer Other Original",
  "Bill Payer Other English",
  "Monthly Spend Key",
  "Monthly Spend English",
  "SIM Priority Ranking Keys",
  "SIM Priority Ranking English",
  "Marketing Source Key",
  "Marketing Source English",
  "Marketing Source Other Original",
  "Marketing Source Other English",
  "Top Expense Key",
  "Top Expense English",
  "Top Expense Other Original",
  "Top Expense Other English",
  "Rest Day Place Key",
  "Rest Day Place English",
  "Rest Day Place Other Original",
  "Rest Day Place Other English",
  "Regular Spend Category Keys",
  "Regular Spend Categories English",
  "Regular Spend Other Original",
  "Regular Spend Other English",
  "Preferred Incentive Key",
  "Preferred Incentive English",
  "Preferred Incentive Other Original",
  "Preferred Incentive Other English",
  "Messaging Platform Key",
  "Messaging Platform English",
  "Messaging Platform Other Original",
  "Messaging Platform Other English",
  "Feedback Original",
  "Feedback English",
  "Raw JSON"
];

const SEA_LION_LANGUAGES = ["ta", "id", "vi", "th", "my", "ms", "tl", "km", "lo"];
const INDIC_LANGUAGES = ["hi", "bn", "te", "mr", "or", "bho", "ml"];
const INDIC_TRANS2_CODES = {
  as: "asm_Beng",
  bn: "ben_Beng",
  gu: "guj_Gujr",
  hi: "hin_Deva",
  kn: "kan_Knda",
  ml: "mal_Mlym",
  mr: "mar_Deva",
  or: "ory_Orya",
  pa: "pan_Guru",
  ta: "tam_Taml",
  te: "tel_Telu",
  ur: "urd_Arab",
  bho: "bho_Deva"
};

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const sheet = getSheet_();
    const language = payload.language_used || "en";
    const provider = providerForLanguage_(language);
    const originEnglish = translateToEnglish_(payload.origin_state_raw, language, provider);
    const feedbackEnglish = translateToEnglish_(payload.worker_feedback_raw, language, provider);
    const otherEnglish = {
      workSector: translateToEnglish_(payload.work_sector_other_raw, language, provider),
      currentTelco: translateToEnglish_(payload.current_telco_other_raw, language, provider),
      billPayer: translateToEnglish_(payload.bill_payer_other_raw, language, provider),
      marketingSource: translateToEnglish_(payload.marketing_source_other_raw, language, provider),
      topExpense: translateToEnglish_(payload.top_expense_other_raw, language, provider),
      restDayPlace: translateToEnglish_(payload.rest_day_place_other_raw, language, provider),
      regularSpend: translateToEnglish_(payload.regular_spend_other_raw, language, provider),
      preferredIncentive: translateToEnglish_(payload.preferred_incentive_other_raw, language, provider),
      messagingPlatform: translateToEnglish_(payload.messaging_platform_other_raw, language, provider)
    };

    sheet.appendRow([
      new Date(),
      language,
      provider,
      payload.phone_number || "",
      payload.user_name || "",
      payload.origin_state_raw || "",
      originEnglish,
      payload.work_sector || "",
      payload.work_sector_en || "",
      payload.work_sector_other_raw || "",
      otherEnglish.workSector,
      payload.current_telco || "",
      payload.current_telco_en || "",
      payload.current_telco_other_raw || "",
      otherEnglish.currentTelco,
      payload.bill_payer || "",
      payload.bill_payer_en || "",
      payload.bill_payer_other_raw || "",
      otherEnglish.billPayer,
      payload.monthly_spend || "",
      payload.monthly_spend_en || "",
      rankingKeys_(payload.important_features_ranked),
      join_(payload.important_features_ranked_en),
      payload.marketing_source || "",
      payload.marketing_source_en || "",
      payload.marketing_source_other_raw || "",
      otherEnglish.marketingSource,
      payload.top_expense || "",
      payload.top_expense_en || "",
      payload.top_expense_other_raw || "",
      otherEnglish.topExpense,
      payload.rest_day_place || "",
      payload.rest_day_place_en || "",
      payload.rest_day_place_other_raw || "",
      otherEnglish.restDayPlace,
      join_(payload.regular_spend_categories),
      join_(payload.regular_spend_categories_en),
      payload.regular_spend_other_raw || "",
      otherEnglish.regularSpend,
      payload.preferred_incentive || "",
      payload.preferred_incentive_en || "",
      payload.preferred_incentive_other_raw || "",
      otherEnglish.preferredIncentive,
      payload.messaging_platform || "",
      payload.messaging_platform_en || "",
      payload.messaging_platform_other_raw || "",
      otherEnglish.messagingPlatform,
      payload.worker_feedback_raw || "",
      feedbackEnglish,
      JSON.stringify(payload)
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function getSheet_() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  if (!spreadsheetId) {
    throw new Error("Missing SPREADSHEET_ID script property.");
  }

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  } else {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function providerForLanguage_(language) {
  if (SEA_LION_LANGUAGES.indexOf(language) !== -1) return "cloudflare-sealion-or-languageapp";
  if (INDIC_LANGUAGES.indexOf(language) !== -1) return "indictrans2-or-languageapp";
  return "languageapp";
}

function translateToEnglish_(text, language, provider) {
  if (!text) return "";

  const trimmed = String(text).trim();
  if (!trimmed || language === "en") return trimmed;

  const external = translateWithExternalProvider_(trimmed, language, provider);
  if (external) return external;

  try {
    return LanguageApp.translate(trimmed, language, "en");
  } catch (error) {
    return trimmed;
  }
}

function translateWithExternalProvider_(text, language, provider) {
  const properties = PropertiesService.getScriptProperties();
  if (provider.indexOf("cloudflare-sealion") === 0) {
    return translateWithCloudflareSeaLion_(text, language, properties);
  }

  return translateWithIndicTrans2_(text, language, properties);
}

function translateWithCloudflareSeaLion_(text, language, properties) {
  const endpoint = normalizeSeaLionEndpoint_(properties.getProperty("SEA_LION_TRANSLATE_URL"));
  const apiKey = properties.getProperty("SEA_LION_API_KEY");

  if (!endpoint) return "";

  try {
    const response = UrlFetchApp.fetch(endpoint, {
      method: "post",
      contentType: "application/json",
      headers: apiKey ? { Authorization: "Bearer " + apiKey } : {},
      muteHttpExceptions: true,
      payload: JSON.stringify({
        system: [
          "You translate worker survey answers into clean English.",
          "Return only the translated English text.",
          "Do not explain, label, quote, summarize, or add extra details.",
          "Keep names, phone numbers, telecom brands, places, and currency values unchanged."
        ].join(" "),
        prompt: [
          "Source language code: " + language,
          "Text:",
          text
        ].join("\n")
      })
    });

    if (response.getResponseCode() < 200 || response.getResponseCode() >= 300) return "";

    const parsed = JSON.parse(response.getContentText());
    return cleanModelTranslation_(parsed.response || parsed.translation || parsed.translated_text || parsed.text || "");
  } catch (error) {
    return "";
  }
}

function normalizeSeaLionEndpoint_(endpoint) {
  if (!endpoint) return "";
  const trimmed = String(endpoint).trim().replace(/\/+$/, "");
  return /\/chat$/.test(trimmed) ? trimmed : trimmed + "/chat";
}

function cleanModelTranslation_(text) {
  return String(text || "")
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/^English translation:\s*/i, "")
    .trim();
}

function translateWithIndicTrans2_(text, language, properties) {
  const endpoint = properties.getProperty("INDIC_TRANSLATE_URL");
  const apiKey = properties.getProperty("INDIC_API_KEY");
  const sourceLanguage = INDIC_TRANS2_CODES[language] || language;

  if (!endpoint) return "";

  try {
    const response = UrlFetchApp.fetch(endpoint, {
      method: "post",
      contentType: "application/json",
      headers: apiKey ? { Authorization: "Bearer " + apiKey } : {},
      muteHttpExceptions: true,
      payload: JSON.stringify({
        text: text,
        source_language: language,
        target_language: "en",
        src_lang: sourceLanguage,
        tgt_lang: "eng_Latn"
      })
    });

    if (response.getResponseCode() < 200 || response.getResponseCode() >= 300) return "";

    const parsed = JSON.parse(response.getContentText());
    return cleanModelTranslation_(parsed.translation || parsed.translated_text || parsed.text || parsed.response || "");
  } catch (error) {
    return "";
  }
}

function join_(value) {
  return Array.isArray(value) ? value.join(", ") : (value || "");
}

function rankingKeys_(ranking) {
  if (!ranking) return "";
  return Object.keys(ranking)
    .sort(function(a, b) {
      return Number(ranking[a]) - Number(ranking[b]);
    })
    .map(function(feature) {
      return ranking[feature] + ". " + feature;
    })
    .join(", ");
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
