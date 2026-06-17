const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx9HeF4M5XKhViMwtyJd6QvRv26KXhbJXWT728QFGui8tCne1039MCgyWEEw_tM6WpB/exec";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "bn", name: "বাংলা" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "mr", name: "मराठी" },
  { code: "or", name: "ଓଡ଼ିଆ" },
  { code: "bho", name: "भोजपुरी" },
  { code: "ml", name: "മലയാളം" },
  { code: "id", name: "Bahasa Indonesia" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "th", name: "ไทย" },
  { code: "my", name: "မြန်မာ" },
  { code: "ms", name: "Bahasa Melayu" },
  { code: "tl", name: "Filipino" },
  { code: "zh", name: "中文" }
];

const translations = {
  en: {
    eyebrow: "Circles.Life",
    title: "TELECOMMUNICATIONS SURVEY",
    languageLabel: "Language",
    sectionPersonal: "Your details",
    nameLabel: "Full name",
    phoneLabel: "Phone number",
    phoneHelp: "",
    sectionWork: "Work and mobile use",
    originLabel: "Which state or country are you originally from?",
    sectorLabel: "What sector do you work in?",
    telcoLabel: "What SIM or mobile network are you currently using?",
    payerLabel: "Who pays for your mobile recharges?",
    spendLabel: "How much do you spend on mobile recharges per month?",
    featuresLabel: "Rank what is most important when choosing a SIM card.",
    featuresHelp: "Use each rank once. 1 is most important.",
    sourceLabel: "How do you find out about new offers, SIM deals, or updates?",
    expenseLabel: "Besides food and housing, what do you spend the most money on?",
    placesLabel: "Where do you usually go on rest days?",
    regularSpendLabel: "What do you regularly spend money on? Select all that apply.",
    incentiveLabel: "Which gift or incentive would be most useful to you?",
    messagingLabel: "Which messaging platform do you use the most?",
    otherSpecifyLabel: "Please specify",
    rechargeLabel: "Where would your top choice be to recharge your mobile? Select all that apply.",
    feedbackLabel: "Do you face any problem with your mobile network or recharge?",
    submit: "Submit survey",
    requiredError: "Please answer all required questions.",
    phoneError: "Please enter a valid phone number.",
    featureError: "Please rank each SIM card priority once.",
    localSaved: "Saved on this device. Add your Google Apps Script URL to send responses to Sheets.",
    success: "Thank you. Your response has been submitted.",
    submitError: "Could not submit right now. Please try again."
  },
  hi: {
    eyebrow: "Circles.Life",
    title: "दूरसंचार सर्वे",
    languageLabel: "भाषा",
    sectionPersonal: "आपकी जानकारी",
    nameLabel: "पूरा नाम",
    phoneLabel: "फोन नंबर",
    phoneHelp: "",
    sectionWork: "काम और मोबाइल उपयोग",
    originLabel: "आप मूल रूप से किस राज्य या देश से हैं?",
    sectorLabel: "आप किस क्षेत्र में काम करते हैं?",
    telcoLabel: "आप अभी कौन सा सिम या मोबाइल नेटवर्क इस्तेमाल करते हैं?",
    payerLabel: "आपका मोबाइल रिचार्ज कौन करवाता है?",
    spendLabel: "आप हर महीने मोबाइल रिचार्ज पर कितना खर्च करते हैं?",
    featuresLabel: "सिम कार्ड चुनते समय इन बातों को क्रम में रखें।",
    featuresHelp: "हर रैंक एक बार इस्तेमाल करें। 1 सबसे जरूरी है।",
    sourceLabel: "नए ऑफर या सिम डील के बारे में आपको कहाँ से पता चलता है?",
    expenseLabel: "खाने और रहने के अलावा आप सबसे ज्यादा पैसा किस पर खर्च करते हैं?",
    placesLabel: "छुट्टी के दिन आप आमतौर पर कहाँ जाते हैं?",
    regularSpendLabel: "आप किन चीजों पर नियमित रूप से पैसा खर्च करते हैं? जो लागू हों चुनें।",
    incentiveLabel: "कौन सा गिफ्ट या इनाम आपके लिए सबसे उपयोगी होगा?",
    messagingLabel: "आप सबसे ज्यादा कौन सा मैसेजिंग ऐप इस्तेमाल करते हैं?",
    otherSpecifyLabel: "कृपया बताएं",
    feedbackLabel: "क्या मोबाइल नेटवर्क या रिचार्ज में कोई समस्या आती है?",
    submit: "सर्वे जमा करें",
    requiredError: "कृपया सभी जरूरी सवालों के जवाब दें।",
    phoneError: "कृपया सही फोन नंबर लिखें।",
    featureError: "कृपया हर प्राथमिकता को एक बार रैंक करें।",
    localSaved: "इस डिवाइस पर सेव हो गया। Sheets में भेजने के लिए Google Apps Script URL जोड़ें।",
    success: "धन्यवाद। आपका जवाब जमा हो गया।",
    submitError: "अभी जमा नहीं हो पाया। कृपया फिर कोशिश करें।"
  },
  bn: {
    eyebrow: "Circles.Life",
    title: "টেলিকমিউনিকেশন জরিপ",
    languageLabel: "ভাষা",
    sectionPersonal: "আপনার তথ্য",
    nameLabel: "পুরো নাম",
    phoneLabel: "ফোন নম্বর",
    phoneHelp: "",
    sectionWork: "কাজ ও মোবাইল ব্যবহার",
    originLabel: "আপনি মূলত কোন রাজ্য বা দেশ থেকে এসেছেন?",
    sectorLabel: "আপনি কোন ক্ষেত্রে কাজ করেন?",
    telcoLabel: "আপনি এখন কোন সিম বা মোবাইল নেটওয়ার্ক ব্যবহার করছেন?",
    payerLabel: "আপনার মোবাইল রিচার্জ কে করে?",
    spendLabel: "আপনি প্রতি মাসে মোবাইল রিচার্জে কত খরচ করেন?",
    featuresLabel: "সিম কার্ড বেছে নেওয়ার সময় বিষয়গুলো ক্রম অনুযায়ী সাজান।",
    featuresHelp: "প্রতিটি র‍্যাঙ্ক একবার ব্যবহার করুন। ১ সবচেয়ে জরুরি।",
    sourceLabel: "নতুন অফার বা সিম ডিল সম্পর্কে কোথা থেকে জানতে পারেন?",
    expenseLabel: "খাবার ও থাকার বাইরে সবচেয়ে বেশি টাকা কিসে খরচ করেন?",
    placesLabel: "ছুটির দিনে সাধারণত কোথায় যান?",
    regularSpendLabel: "আপনি নিয়মিত কোন জিনিসে টাকা খরচ করেন? সব প্রযোজ্য বেছে নিন।",
    incentiveLabel: "কোন উপহার বা ইনসেনটিভ আপনার কাছে সবচেয়ে কাজে লাগবে?",
    messagingLabel: "আপনি সবচেয়ে বেশি কোন মেসেজিং প্ল্যাটফর্ম ব্যবহার করেন?",
    otherSpecifyLabel: "অনুগ্রহ করে লিখুন",
    feedbackLabel: "মোবাইল নেটওয়ার্ক বা রিচার্জ নিয়ে কোনো সমস্যা হয় কি?",
    submit: "জরিপ জমা দিন",
    requiredError: "অনুগ্রহ করে সব জরুরি প্রশ্নের উত্তর দিন।",
    phoneError: "সঠিক ফোন নম্বর দিন।",
    featureError: "প্রতিটি অগ্রাধিকার একবার করে র‍্যাঙ্ক করুন।",
    localSaved: "এই ডিভাইসে সেভ হয়েছে। Sheets-এ পাঠাতে Google Apps Script URL যোগ করুন।",
    success: "ধন্যবাদ। আপনার উত্তর জমা হয়েছে।",
    submitError: "এখন জমা দেওয়া গেল না। আবার চেষ্টা করুন।"
  },
  zh: {
    eyebrow: "Circles.Life",
    title: "电信服务问卷",
    languageLabel: "语言",
    sectionPersonal: "您的资料",
    nameLabel: "姓名",
    phoneLabel: "电话号码",
    phoneHelp: "",
    sectionWork: "工作与手机使用",
    originLabel: "您原本来自哪个州或国家？",
    sectorLabel: "您从事哪个行业？",
    telcoLabel: "您现在使用哪个 SIM 卡或手机网络？",
    payerLabel: "谁支付您的手机充值或账单？",
    spendLabel: "您每月在手机充值或套餐上花多少钱？",
    featuresLabel: "请选择 SIM 卡时最重要因素的排序。",
    featuresHelp: "每个排名只能使用一次。1 表示最重要。",
    sourceLabel: "您从哪里得知新的优惠、SIM 卡配套或更新？",
    expenseLabel: "除了食物和住宿，您花最多钱在哪方面？",
    placesLabel: "休息日您通常去哪里？",
    regularSpendLabel: "您经常在哪些方面花钱？请选择所有适用项。",
    incentiveLabel: "哪种礼品或奖励对您最有用？",
    messagingLabel: "您最常使用哪个聊天平台？",
    otherSpecifyLabel: "请注明",
    feedbackLabel: "您的手机网络或充值是否遇到任何问题？",
    submit: "提交问卷",
    requiredError: "请回答所有必填问题。",
    phoneError: "请输入有效的电话号码。",
    featureError: "请为每个 SIM 卡因素选择唯一排名。",
    localSaved: "已保存在此设备上。请添加 Google Apps Script URL 以发送到 Sheets。",
    success: "谢谢。您的回复已提交。",
    submitError: "现在无法提交。请稍后再试。"
  }
};

const fallbackPhrases = {
  ta: {
    title: "மொபைல் தேவைகள் கணக்கெடுப்பு",
    nameLabel: "முழு பெயர்",
    phoneLabel: "தொலைபேசி எண்",
    originLabel: "நீங்கள் எந்த மாநிலம் அல்லது நாட்டைச் சேர்ந்தவர்?",
    feedbackLabel: "மொபைல் நெட்வொர்க் அல்லது ரீசார்ஜில் பிரச்சனை உள்ளதா?",
    submit: "சமர்ப்பிக்கவும்"
  },
  te: {
    title: "మొబైల్ అవసరాల సర్వే",
    nameLabel: "పూర్తి పేరు",
    phoneLabel: "ఫోన్ నంబర్",
    originLabel: "మీరు అసలు ఏ రాష్ట్రం లేదా దేశం నుంచి వచ్చారు?",
    feedbackLabel: "మొబైల్ నెట్‌వర్క్ లేదా రీచార్జ్‌లో ఏమైనా సమస్య ఉందా?",
    submit: "సర్వే పంపండి"
  },
  mr: {
    title: "मोबाइल गरज सर्वेक्षण",
    nameLabel: "पूर्ण नाव",
    phoneLabel: "फोन नंबर",
    originLabel: "आपण मूळचे कोणत्या राज्यातून किंवा देशातून आहात?",
    feedbackLabel: "मोबाइल नेटवर्क किंवा रिचार्जबद्दल काही समस्या आहे का?",
    submit: "सर्वे जमा करा"
  },
  or: {
    title: "ମୋବାଇଲ ଆବଶ୍ୟକତା ସର୍ଭେ",
    nameLabel: "ପୂର୍ଣ୍ଣ ନାମ",
    phoneLabel: "ଫୋନ ନମ୍ବର",
    originLabel: "ଆପଣ ମୂଳତଃ କେଉଁ ରାଜ୍ୟ କିମ୍ବା ଦେଶର?",
    feedbackLabel: "ମୋବାଇଲ ନେଟୱର୍କ କିମ୍ବା ରିଚାର୍ଜରେ କିଛି ସମସ୍ୟା ଅଛି କି?",
    submit: "ସର୍ଭେ ଦାଖଲ କରନ୍ତୁ"
  },
  bho: {
    title: "मोबाइल जरूरत सर्वे",
    nameLabel: "पूरा नाव",
    phoneLabel: "फोन नंबर",
    originLabel: "रउआ मूल रूप से कवन राज्य या देश से बानी?",
    feedbackLabel: "मोबाइल नेटवर्क या रिचार्ज में कवनो दिक्कत बा?",
    submit: "सर्वे जमा करीं"
  },
  ml: {
    title: "മൊബൈൽ ആവശ്യ സർവേ",
    nameLabel: "പൂർണ്ണ പേര്",
    phoneLabel: "ഫോൺ നമ്പർ",
    originLabel: "നിങ്ങൾ ആദ്യം ഏത് സംസ്ഥാനമോ രാജ്യത്തുനിന്നോ ആണ്?",
    feedbackLabel: "മൊബൈൽ നെറ്റ്‌വർക്ക് അല്ലെങ്കിൽ റീചാർജിൽ പ്രശ്നമുണ്ടോ?",
    submit: "സർവേ സമർപ്പിക്കുക"
  },
  id: {
    title: "Survei kebutuhan seluler",
    nameLabel: "Nama lengkap",
    phoneLabel: "Nomor telepon",
    originLabel: "Anda berasal dari negara atau daerah mana?",
    feedbackLabel: "Apakah ada masalah dengan jaringan seluler atau isi ulang?",
    submit: "Kirim survei"
  },
  vi: {
    title: "Khảo sát nhu cầu di động",
    nameLabel: "Họ và tên",
    phoneLabel: "Số điện thoại",
    originLabel: "Bạn đến từ tỉnh hoặc quốc gia nào?",
    feedbackLabel: "Bạn có gặp vấn đề với mạng di động hoặc nạp tiền không?",
    submit: "Gửi khảo sát"
  },
  th: {
    title: "แบบสำรวจความต้องการมือถือ",
    nameLabel: "ชื่อเต็ม",
    phoneLabel: "หมายเลขโทรศัพท์",
    originLabel: "คุณมาจากรัฐหรือประเทศใด?",
    feedbackLabel: "คุณมีปัญหาเรื่องเครือข่ายมือถือหรือการเติมเงินไหม?",
    submit: "ส่งแบบสำรวจ"
  },
  my: {
    title: "မိုဘိုင်းလိုအပ်ချက် စစ်တမ်း",
    nameLabel: "အမည်အပြည့်အစုံ",
    phoneLabel: "ဖုန်းနံပါတ်",
    originLabel: "သင် မည်သည့်ပြည်နယ် သို့မဟုတ် နိုင်ငံမှ လာပါသနည်း?",
    feedbackLabel: "မိုဘိုင်းကွန်ရက် သို့မဟုတ် ဖုန်းငွေဖြည့်ရာတွင် ပြဿနာရှိပါသလား?",
    submit: "စစ်တမ်းပေးပို့ရန်"
  },
  ms: {
    title: "Tinjauan keperluan mudah alih",
    nameLabel: "Nama penuh",
    phoneLabel: "Nombor telefon",
    originLabel: "Anda berasal dari negeri atau negara mana?",
    feedbackLabel: "Adakah anda menghadapi masalah rangkaian mudah alih atau tambah nilai?",
    submit: "Hantar tinjauan"
  },
  tl: {
    title: "Survey sa pangangailangan sa mobile",
    nameLabel: "Buong pangalan",
    phoneLabel: "Numero ng telepono",
    originLabel: "Saang lalawigan o bansa ka nagmula?",
    feedbackLabel: "May problema ka ba sa mobile network o load?",
    submit: "Ipasa ang survey"
  }
};

for (const [code, phrases] of Object.entries(fallbackPhrases)) {
  translations[code] = { ...translations.en, ...phrases };
}

Object.assign(translations.ta, {
  eyebrow: "தொழிலாளர் மொபைல் கணக்கெடுப்பு",
  languageLabel: "மொழி",
  sectionPersonal: "உங்கள் விவரம்",
  phoneHelp: "+91 இல்லாமல் 10 இலக்க மொபைல் எண்ணை எழுதவும்.",
  sectionWork: "வேலை மற்றும் மொபைல் பயன்பாடு",
  sectorLabel: "நீங்கள் எந்த துறையில் வேலை செய்கிறீர்கள்?",
  telcoLabel: "நீங்கள் இப்போது எந்த சிம் அல்லது மொபைல் நெட்வொர்க் பயன்படுத்துகிறீர்கள்?",
  payerLabel: "உங்கள் மொபைல் ரீசார்ஜை யார் செலுத்துகிறார்?",
  spendLabel: "மாதத்திற்கு மொபைல் ரீசார்ஜுக்கு எவ்வளவு செலவிடுகிறீர்கள்?",
  featuresLabel: "சிம் தேர்வு செய்யும்போது முக்கியமானது எது? அதிகபட்சம் 2 தேர்வு செய்யவும்.",
  featuresHelp: "மிக முக்கியமான இரண்டு விஷயங்களைத் தேர்வு செய்யவும்.",
  sourceLabel: "புதிய ஆஃபர்கள் அல்லது சிம் டீல்கள் பற்றி எங்கே தெரிகிறது?",
  expenseLabel: "உணவு மற்றும் தங்குமிடம் தவிர அதிகம் எதற்குச் செலவிடுகிறீர்கள்?",
  requiredError: "தேவையான அனைத்து கேள்விகளுக்கும் பதில் அளிக்கவும்.",
  phoneError: "சரியான 10 இலக்க மொபைல் எண்ணை எழுதவும்.",
  featureError: "ஒன்று அல்லது இரண்டு முக்கிய விஷயங்களைத் தேர்வு செய்யவும்.",
  localSaved: "இந்த சாதனத்தில் சேமிக்கப்பட்டது. Sheets-க்கு அனுப்ப Google Apps Script URL சேர்க்கவும்.",
  success: "நன்றி. உங்கள் பதில் சமர்ப்பிக்கப்பட்டது.",
  submitError: "இப்போது சமர்ப்பிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்."
});

Object.assign(translations.te, {
  eyebrow: "కార్మికుల మొబైల్ సర్వే",
  languageLabel: "భాష",
  sectionPersonal: "మీ వివరాలు",
  phoneHelp: "+91 లేకుండా 10 అంకెల మొబైల్ నంబర్ రాయండి.",
  sectionWork: "పని మరియు మొబైల్ వినియోగం",
  sectorLabel: "మీరు ఏ రంగంలో పనిచేస్తున్నారు?",
  telcoLabel: "మీరు ఇప్పుడు ఏ సిమ్ లేదా మొబైల్ నెట్‌వర్క్ ఉపయోగిస్తున్నారు?",
  payerLabel: "మీ మొబైల్ రీచార్జ్‌కు ఎవరు చెల్లిస్తారు?",
  spendLabel: "నెలకు మొబైల్ రీచార్జ్‌పై ఎంత ఖర్చు చేస్తారు?",
  featuresLabel: "సిమ్ ఎంచుకునేటప్పుడు మీకు ముఖ్యమైనది ఏమిటి? గరిష్టంగా 2 ఎంచుకోండి.",
  featuresHelp: "ముఖ్యమైన రెండు విషయాలను ఎంచుకోండి.",
  sourceLabel: "కొత్త ఆఫర్లు లేదా సిమ్ డీల్స్ గురించి ఎక్కడ తెలుసుకుంటారు?",
  expenseLabel: "ఆహారం, నివాసం కాకుండా ఎక్కువ డబ్బు దేనిపై ఖర్చు చేస్తారు?",
  requiredError: "దయచేసి అవసరమైన అన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి.",
  phoneError: "సరైన 10 అంకెల మొబైల్ నంబర్ రాయండి.",
  featureError: "దయచేసి ఒకటి లేదా రెండు ముఖ్యమైన విషయాలు ఎంచుకోండి.",
  localSaved: "ఈ పరికరంలో సేవ్ అయింది. Sheets‌కు పంపాలంటే Google Apps Script URL జోడించండి.",
  success: "ధన్యవాదాలు. మీ సమాధానం సమర్పించబడింది.",
  submitError: "ఇప్పుడు సమర్పించలేకపోయాం. మళ్లీ ప్రయత్నించండి."
});

Object.assign(translations.mr, {
  eyebrow: "कामगार मोबाइल सर्वेक्षण",
  languageLabel: "भाषा",
  sectionPersonal: "आपली माहिती",
  phoneHelp: "+91 शिवाय 10 अंकी मोबाइल नंबर लिहा.",
  sectionWork: "काम आणि मोबाइल वापर",
  sectorLabel: "आपण कोणत्या क्षेत्रात काम करता?",
  telcoLabel: "आपण सध्या कोणते सिम किंवा मोबाइल नेटवर्क वापरता?",
  payerLabel: "आपला मोबाइल रिचार्ज कोण करतो?",
  spendLabel: "दर महिन्याला मोबाइल रिचार्जवर किती खर्च करता?",
  featuresLabel: "सिम निवडताना आपल्यासाठी सर्वात महत्त्वाचे काय आहे? जास्तीत जास्त 2 निवडा.",
  featuresHelp: "सर्वात महत्त्वाच्या दोन गोष्टी निवडा.",
  sourceLabel: "नवीन ऑफर किंवा सिम डील्सबद्दल आपल्याला कुठून कळते?",
  expenseLabel: "जेवण आणि राहणे सोडून आपण सर्वात जास्त पैसा कशावर खर्च करता?",
  requiredError: "कृपया सर्व आवश्यक प्रश्नांची उत्तरे द्या.",
  phoneError: "कृपया योग्य 10 अंकी मोबाइल नंबर लिहा.",
  featureError: "कृपया एक किंवा दोन महत्त्वाच्या गोष्टी निवडा.",
  localSaved: "या डिव्हाइसवर सेव झाले. Sheets मध्ये पाठवण्यासाठी Google Apps Script URL जोडा.",
  success: "धन्यवाद. आपले उत्तर जमा झाले.",
  submitError: "आत्ता जमा करता आले नाही. कृपया पुन्हा प्रयत्न करा."
});

Object.assign(translations.or, {
  eyebrow: "ଶ୍ରମିକ ମୋବାଇଲ ସର୍ଭେ",
  languageLabel: "ଭାଷା",
  sectionPersonal: "ଆପଣଙ୍କ ବିବରଣୀ",
  phoneHelp: "+91 ବିନା 10 ଅଙ୍କର ମୋବାଇଲ ନମ୍ବର ଲେଖନ୍ତୁ।",
  sectionWork: "କାମ ଏବଂ ମୋବାଇଲ ବ୍ୟବହାର",
  sectorLabel: "ଆପଣ କେଉଁ କ୍ଷେତ୍ରରେ କାମ କରନ୍ତି?",
  telcoLabel: "ଆପଣ ବର୍ତ୍ତମାନ କେଉଁ ସିମ କିମ୍ବା ମୋବାଇଲ ନେଟୱର୍କ ବ୍ୟବହାର କରୁଛନ୍ତି?",
  payerLabel: "ଆପଣଙ୍କ ମୋବାଇଲ ରିଚାର୍ଜ କିଏ କରେ?",
  spendLabel: "ପ୍ରତି ମାସେ ମୋବାଇଲ ରିଚାର୍ଜରେ କେତେ ଖର୍ଚ୍ଚ କରନ୍ତି?",
  featuresLabel: "ସିମ ବାଛିବାବେଳେ ସବୁଠାରୁ ଦରକାରୀ କଣ? ସର୍ବାଧିକ 2 ବାଛନ୍ତୁ।",
  featuresHelp: "ସବୁଠାରୁ ଦରକାରୀ ଦୁଇଟି ବାଛନ୍ତୁ।",
  sourceLabel: "ନୂଆ ଅଫର କିମ୍ବା ସିମ ଡିଲ ବିଷୟରେ କେଉଁଠାରୁ ଜାଣନ୍ତି?",
  expenseLabel: "ଖାଦ୍ୟ ଓ ରହିବା ବ୍ୟତୀତ ଆପଣ ସବୁଠାରୁ ଅଧିକ ଟଙ୍କା କାହାରେ ଖର୍ଚ୍ଚ କରନ୍ତି?",
  requiredError: "ଦୟାକରି ସମସ୍ତ ଆବଶ୍ୟକ ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଅନ୍ତୁ।",
  phoneError: "ଦୟାକରି ଠିକ 10 ଅଙ୍କର ମୋବାଇଲ ନମ୍ବର ଲେଖନ୍ତୁ।",
  featureError: "ଦୟାକରି ଗୋଟିଏ କିମ୍ବା ଦୁଇଟି ଦରକାରୀ ବିଷୟ ବାଛନ୍ତୁ।",
  localSaved: "ଏହି ଡିଭାଇସରେ ସେଭ ହେଲା। Sheets କୁ ପଠାଇବାକୁ Google Apps Script URL ଯୋଡନ୍ତୁ।",
  success: "ଧନ୍ୟବାଦ। ଆପଣଙ୍କ ଉତ୍ତର ଦାଖଲ ହେଲା।",
  submitError: "ଏବେ ଦାଖଲ ହେଲା ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।"
});

Object.assign(translations.bho, {
  eyebrow: "मजदूर मोबाइल सर्वे",
  languageLabel: "भाषा",
  sectionPersonal: "रउआ जानकारी",
  phoneHelp: "+91 बिना 10 अंक के मोबाइल नंबर लिखीं।",
  sectionWork: "काम आ मोबाइल इस्तेमाल",
  sectorLabel: "रउआ कवन क्षेत्र में काम करेली?",
  telcoLabel: "रउआ अभी कवन सिम भा मोबाइल नेटवर्क इस्तेमाल करेली?",
  payerLabel: "रउआ मोबाइल रिचार्ज केकरा से होला?",
  spendLabel: "हर महीना मोबाइल रिचार्ज पर कतना खरचा होला?",
  featuresLabel: "सिम चुने में रउआ खातिर सबसे जरूरी का बा? अधिकतम 2 चुनीं।",
  featuresHelp: "सबसे जरूरी दू गो चीज चुनीं।",
  sourceLabel: "नया ऑफर भा सिम डील के बारे में कहाँ से पता चलेला?",
  expenseLabel: "खाना आ रहला छोड़ के सबसे ज्यादा पइसा काहे पर खरचा होला?",
  requiredError: "कृपया सभे जरूरी सवाल के जवाब दीं।",
  phoneError: "कृपया सही 10 अंक के मोबाइल नंबर लिखीं।",
  featureError: "कृपया एक भा दू गो जरूरी चीज चुनीं।",
  localSaved: "एह डिवाइस पर सेव भइल। Sheets में भेजे खातिर Google Apps Script URL जोड़ीं।",
  success: "धन्यवाद। रउआ जवाब जमा हो गइल।",
  submitError: "अभी जमा ना हो पावल। फेर कोशिश करीं।"
});

Object.assign(translations.ml, {
  eyebrow: "തൊഴിലാളി മൊബൈൽ സർവേ",
  languageLabel: "ഭാഷ",
  sectionPersonal: "നിങ്ങളുടെ വിവരങ്ങൾ",
  phoneHelp: "+91 ഇല്ലാതെ 10 അക്ക മൊബൈൽ നമ്പർ എഴുതുക.",
  sectionWork: "ജോലിയും മൊബൈൽ ഉപയോഗവും",
  sectorLabel: "നിങ്ങൾ ഏത് മേഖലയിലാണ് ജോലി ചെയ്യുന്നത്?",
  telcoLabel: "ഇപ്പോൾ ഏത് സിം അല്ലെങ്കിൽ മൊബൈൽ നെറ്റ്‌വർക്ക് ഉപയോഗിക്കുന്നു?",
  payerLabel: "നിങ്ങളുടെ മൊബൈൽ റീചാർജ് ആരാണ് അടയ്ക്കുന്നത്?",
  spendLabel: "മാസത്തിൽ മൊബൈൽ റീചാർജിന് എത്ര ചെലവിടുന്നു?",
  featuresLabel: "സിം തിരഞ്ഞെടുക്കുമ്പോൾ ഏറ്റവും പ്രധാനപ്പെട്ടത് എന്ത്? പരമാവധി 2 തിരഞ്ഞെടുക്കുക.",
  featuresHelp: "ഏറ്റവും പ്രധാനപ്പെട്ട രണ്ട് കാര്യങ്ങൾ തിരഞ്ഞെടുക്കുക.",
  sourceLabel: "പുതിയ ഓഫറുകൾ അല്ലെങ്കിൽ സിം ഡീലുകൾ എവിടെ നിന്നാണ് അറിയുന്നത്?",
  expenseLabel: "ഭക്ഷണവും താമസവും ഒഴികെ ഏറ്റവും കൂടുതൽ പണം എന്തിനാണ് ചെലവിടുന്നത്?",
  requiredError: "ദയവായി ആവശ്യമായ എല്ലാ ചോദ്യങ്ങൾക്കും മറുപടി നൽകുക.",
  phoneError: "ശരിയായ 10 അക്ക മൊബൈൽ നമ്പർ എഴുതുക.",
  featureError: "ഒന്ന് അല്ലെങ്കിൽ രണ്ട് പ്രധാന കാര്യങ്ങൾ തിരഞ്ഞെടുക്കുക.",
  localSaved: "ഈ ഉപകരണത്തിൽ സേവ് ചെയ്തു. Sheets-ലേക്ക് അയയ്ക്കാൻ Google Apps Script URL ചേർക്കുക.",
  success: "നന്ദി. നിങ്ങളുടെ മറുപടി സമർപ്പിച്ചു.",
  submitError: "ഇപ്പോൾ സമർപ്പിക്കാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക."
});

Object.assign(translations.id, {
  eyebrow: "Survei mobile pekerja",
  languageLabel: "Bahasa",
  sectionPersonal: "Data Anda",
  phoneHelp: "Masukkan nomor ponsel 10 digit tanpa kode negara.",
  sectionWork: "Pekerjaan dan penggunaan mobile",
  sectorLabel: "Anda bekerja di sektor apa?",
  telcoLabel: "SIM atau jaringan seluler apa yang Anda gunakan sekarang?",
  payerLabel: "Siapa yang membayar isi ulang ponsel Anda?",
  spendLabel: "Berapa pengeluaran isi ulang ponsel per bulan?",
  featuresLabel: "Apa yang paling penting saat memilih SIM? Pilih maksimal 2.",
  featuresHelp: "Pilih dua hal yang paling penting.",
  sourceLabel: "Dari mana Anda tahu penawaran baru atau promo SIM?",
  expenseLabel: "Selain makanan dan tempat tinggal, untuk apa Anda paling banyak mengeluarkan uang?",
  requiredError: "Harap jawab semua pertanyaan wajib.",
  phoneError: "Masukkan nomor ponsel 10 digit yang valid.",
  featureError: "Pilih satu atau dua hal penting.",
  localSaved: "Tersimpan di perangkat ini. Tambahkan Google Apps Script URL untuk mengirim ke Sheets.",
  success: "Terima kasih. Jawaban Anda sudah dikirim.",
  submitError: "Belum bisa mengirim sekarang. Coba lagi."
});

const optionSets = {
  workSector: [
    ["construction", "Construction"],
    ["factory", "Factory / manufacturing"],
    ["textile_garments", "Textiles / garments"],
    ["marine_shipyard", "Marine / shipyard"],
    ["agriculture", "Agriculture"],
    ["domestic_work", "Domestic work"],
    ["cleaning", "Cleaning / facilities"],
    ["delivery_transport", "Delivery / transport"],
    ["other", "Other"]
  ],
  currentTelco: [
    ["singtel", "Singtel"],
    ["starhub", "StarHub"],
    ["m1", "M1"],
    ["simba", "SIMBA"],
    ["giga", "Giga"],
    ["gomo", "GOMO"],
    ["circles_life", "Circles.Life"],
    ["zero1", "Zero1"],
    ["vivifi", "VIVIFI"],
    ["redone", "redONE"],
    ["eight", "eight"],
    ["heya", "heya"],
    ["changi_mobile", "Changi Mobile"],
    ["zym_mobile", "ZYM Mobile"],
    ["myrepublic", "MyRepublic"],
    ["cmlink", "CMLink"],
    ["other", "Other"]
  ],
  billPayer: [
    ["myself", "Myself"],
    ["employer", "Employer"],
    ["family", "Family"],
    ["friend_agent", "Friend or agent"],
    ["other", "Other"]
  ],
  importantFeatures: [
    ["low_price", "Low price"],
    ["calling_home", "Calling family at home"],
    ["high_data", "More internet data"],
    ["good_network", "Good network coverage"],
    ["easy_recharge", "Easy recharge"]
  ],
  marketingSource: [
    ["friends_coworkers", "Friends or coworkers"],
    ["mobile_shop", "Mobile shop"],
    ["whatsapp", "WhatsApp"],
    ["facebook_social", "Facebook or social media"],
    ["employer_agent", "Employer or agent"],
    ["street_poster", "Poster or flyer"],
    ["other", "Other"]
  ],
  topExpense: [
    ["send_money_home", "Sending money home"],
    ["transport", "Transport"],
    ["mobile_recharge", "Mobile recharge"],
    ["health_medicine", "Health or medicine"],
    ["entertainment", "Entertainment"],
    ["debt_loan", "Debt or loan payment"],
    ["other", "Other"]
  ],
  restDayPlace: [
    ["dormitory", "Dormitory / room"],
    ["little_india", "Little India"],
    ["geylang", "Geylang"],
    ["mustafa", "Mustafa Centre"],
    ["parks_beaches", "Parks or beaches"],
    ["malls", "Shopping malls"],
    ["religious_place", "Temple / mosque / church"],
    ["friends_place", "Friends' place"],
    ["sports_facility", "Sports facility"],
    ["other", "Other"]
  ],
  regularSpendCategories: [
    ["food", "Food"],
    ["transport", "Transport"],
    ["mobile_bills", "Mobile bills"],
    ["other_bills", "Other bills"],
    ["remittance", "Sending money home"],
    ["health_medicine", "Health or medicine"],
    ["entertainment", "Entertainment"],
    ["shopping", "Shopping"],
    ["debt_loan", "Debt or loan payment"],
    ["other", "Other"]
  ],
  rechargeChannels: [
    ["convenience_store", "Convenience store"],
    ["dorms", "Dorms"],
    ["retail_shops", "Retail shops"],
    ["agent", "Agent"],
    ["roadshows", "Roadshows"],
    ["app", "App"],
    ["atms_axs", "ATMs / AXS"],
    ["self_serve", "Self-serve"],
    ["in_person", "In person"],
    ["other", "Other"]
  ],
  preferredIncentive: [
    ["mobile_data", "Extra mobile data"],
    ["recharge_discount", "Recharge discount"],
    ["cash_voucher", "Cash voucher"],
    ["grocery_voucher", "Grocery voucher"],
    ["remittance_discount", "Remittance discount"],
    ["free_calls", "Free overseas calls"],
    ["lucky_draw", "Lucky draw prize"],
    ["other", "Other"]
  ],
  messagingPlatform: [
    ["whatsapp", "WhatsApp"],
    ["facebook_messenger", "Facebook Messenger"],
    ["telegram", "Telegram"],
    ["wechat", "WeChat"],
    ["imo", "imo"],
    ["viber", "Viber"],
    ["line", "LINE"],
    ["regular_sms", "SMS"],
    ["other", "Other"]
  ]
};

const localizedOptions = {
  hi: {
    construction: "निर्माण",
    factory: "फैक्ट्री / उत्पादन",
    textile_garments: "कपड़ा / गारमेंट्स",
    marine_shipyard: "मरीन / शिपयार्ड",
    agriculture: "कृषि",
    domestic_work: "घरेलू काम",
    cleaning: "सफाई / सुविधाएं",
    delivery_transport: "डिलीवरी / परिवहन",
    other: "अन्य",
    myself: "खुद",
    employer: "मालिक",
    family: "परिवार",
    friend_agent: "मित्र या एजेंट",
    under_200_inr: "₹200 से कम / S$5 से कम",
    "200_399_inr": "₹200-399 / S$5-9",
    "400_699_inr": "₹400-699 / S$10-15",
    "700_plus_inr": "₹700 से ज्यादा / S$16 से ज्यादा",
    not_sure: "पता नहीं",
    low_price: "कम कीमत",
    calling_home: "घर पर कॉल करना",
    high_data: "ज्यादा इंटरनेट डेटा",
    good_network: "अच्छा नेटवर्क",
    easy_recharge: "आसान रिचार्ज",
    language_support: "मेरी भाषा में मदद",
    friends_coworkers: "मित्र या साथ काम करने वाले",
    mobile_shop: "मोबाइल दुकान",
    whatsapp: "WhatsApp",
    facebook_social: "Facebook या सोशल मीडिया",
    employer_agent: "मालिक या एजेंट",
    street_poster: "पोस्टर या पर्चा",
    send_money_home: "घर पैसे भेजना",
    transport: "यात्रा / परिवहन",
    mobile_recharge: "मोबाइल रिचार्ज",
    health_medicine: "स्वास्थ्य या दवा",
    entertainment: "मनोरंजन",
    debt_loan: "कर्ज या लोन भुगतान"
  },
  bn: {
    construction: "নির্মাণ কাজ",
    factory: "কারখানা / উৎপাদন",
    textile_garments: "টেক্সটাইল / পোশাক",
    marine_shipyard: "মেরিন / শিপইয়ার্ড",
    agriculture: "কৃষি",
    domestic_work: "গৃহকর্ম",
    cleaning: "পরিষ্কার / সুবিধা সেবা",
    delivery_transport: "ডেলিভারি / পরিবহন",
    other: "অন্যান্য",
    myself: "নিজে",
    employer: "মালিক",
    family: "পরিবার",
    friend_agent: "বন্ধু বা এজেন্ট",
    under_200_inr: "₹২০০-এর কম / S$৫-এর কম",
    "200_399_inr": "₹২০০-৩৯৯ / S$৫-৯",
    "400_699_inr": "₹৪০০-৬৯৯ / S$১০-১৫",
    "700_plus_inr": "₹৭০০-এর বেশি / S$১৬-এর বেশি",
    not_sure: "নিশ্চিত নই",
    low_price: "কম দাম",
    calling_home: "বাড়িতে কল করা",
    high_data: "বেশি ইন্টারনেট ডেটা",
    good_network: "ভালো নেটওয়ার্ক",
    easy_recharge: "সহজ রিচার্জ",
    language_support: "আমার ভাষায় সাহায্য",
    friends_coworkers: "বন্ধু বা সহকর্মী",
    mobile_shop: "মোবাইল দোকান",
    whatsapp: "WhatsApp",
    facebook_social: "Facebook বা সোশ্যাল মিডিয়া",
    employer_agent: "মালিক বা এজেন্ট",
    street_poster: "পোস্টার বা লিফলেট",
    send_money_home: "বাড়িতে টাকা পাঠানো",
    transport: "যাতায়াত",
    mobile_recharge: "মোবাইল রিচার্জ",
    health_medicine: "স্বাস্থ্য বা ওষুধ",
    entertainment: "বিনোদন",
    debt_loan: "ঋণ বা লোন পরিশোধ"
  },
  ta: {
    construction: "கட்டுமானம்",
    factory: "தொழிற்சாலை / உற்பத்தி",
    textile_garments: "நூல் / ஆடை",
    marine_shipyard: "கடல் / கப்பல் தளம்",
    agriculture: "விவசாயம்",
    domestic_work: "வீட்டு வேலை",
    cleaning: "சுத்தம் / வசதி சேவை",
    delivery_transport: "டெலிவரி / போக்குவரத்து",
    other: "மற்றவை",
    myself: "நானே",
    employer: "முதலாளர்",
    family: "குடும்பம்",
    friend_agent: "நண்பர் அல்லது முகவர்",
    not_sure: "தெரியவில்லை",
    low_price: "குறைந்த விலை",
    calling_home: "வீட்டிற்கு அழைப்பது",
    high_data: "அதிக இணைய டேட்டா",
    good_network: "நல்ல நெட்வொர்க்",
    easy_recharge: "எளிதான ரீசார்ஜ்",
    language_support: "என் மொழியில் உதவி",
    friends_coworkers: "நண்பர்கள் அல்லது சக ஊழியர்கள்",
    mobile_shop: "மொபைல் கடை",
    facebook_social: "Facebook அல்லது சமூக ஊடகம்",
    employer_agent: "முதலாளர் அல்லது முகவர்",
    street_poster: "போஸ்டர் அல்லது பிரசுரம்",
    send_money_home: "வீட்டிற்கு பணம் அனுப்புதல்",
    transport: "போக்குவரத்து",
    mobile_recharge: "மொபைல் ரீசார்ஜ்",
    health_medicine: "சுகாதாரம் அல்லது மருந்து",
    entertainment: "பொழுதுபோக்கு",
    debt_loan: "கடன் கட்டணம்"
  },
  te: {
    construction: "నిర్మాణం",
    factory: "ఫ్యాక్టరీ / తయారీ",
    textile_garments: "టెక్స్టైల్ / గార్మెంట్స్",
    marine_shipyard: "మెరైన్ / షిప్‌యార్డ్",
    agriculture: "వ్యవసాయం",
    domestic_work: "ఇంటి పని",
    cleaning: "శుభ్రత / సౌకర్యాల సేవ",
    delivery_transport: "డెలివరీ / రవాణా",
    other: "ఇతర",
    myself: "నేనే",
    employer: "యజమాని",
    family: "కుటుంబం",
    friend_agent: "స్నేహితుడు లేదా ఏజెంట్",
    not_sure: "తెలియదు",
    low_price: "తక్కువ ధర",
    calling_home: "ఇంటికి కాల్ చేయడం",
    high_data: "ఎక్కువ ఇంటర్నెట్ డేటా",
    good_network: "మంచి నెట్‌వర్క్",
    easy_recharge: "సులభ రీచార్జ్",
    language_support: "నా భాషలో సహాయం",
    friends_coworkers: "స్నేహితులు లేదా సహచరులు",
    mobile_shop: "మొబైల్ షాప్",
    facebook_social: "Facebook లేదా సోషల్ మీడియా",
    employer_agent: "యజమాని లేదా ఏజెంట్",
    street_poster: "పోస్టర్ లేదా ఫ్లయర్",
    send_money_home: "ఇంటికి డబ్బు పంపడం",
    transport: "రవాణా",
    mobile_recharge: "మొబైల్ రీచార్జ్",
    health_medicine: "ఆరోగ్యం లేదా మందులు",
    entertainment: "వినోదం",
    debt_loan: "అప్పు లేదా లోన్ చెల్లింపు"
  },
  mr: {
    construction: "बांधकाम",
    factory: "फॅक्टरी / उत्पादन",
    textile_garments: "कापड / कपडे",
    marine_shipyard: "मरीन / शिपयार्ड",
    agriculture: "शेती",
    domestic_work: "घरकाम",
    cleaning: "स्वच्छता / सुविधा सेवा",
    delivery_transport: "डिलिव्हरी / वाहतूक",
    other: "इतर",
    myself: "स्वतः",
    employer: "मालक",
    family: "कुटुंब",
    friend_agent: "मित्र किंवा एजंट",
    not_sure: "माहित नाही",
    low_price: "कमी किंमत",
    calling_home: "घरी फोन करणे",
    high_data: "जास्त इंटरनेट डेटा",
    good_network: "चांगले नेटवर्क",
    easy_recharge: "सोपे रिचार्ज",
    language_support: "माझ्या भाषेत मदत",
    friends_coworkers: "मित्र किंवा सहकारी",
    mobile_shop: "मोबाइल दुकान",
    facebook_social: "Facebook किंवा सोशल मीडिया",
    employer_agent: "मालक किंवा एजंट",
    street_poster: "पोस्टर किंवा पत्रक",
    send_money_home: "घरी पैसे पाठवणे",
    transport: "वाहतूक",
    mobile_recharge: "मोबाइल रिचार्ज",
    health_medicine: "आरोग्य किंवा औषध",
    entertainment: "मनोरंजन",
    debt_loan: "कर्ज भरणे"
  },
  id: {
    construction: "Konstruksi",
    factory: "Pabrik / manufaktur",
    textile_garments: "Tekstil / garmen",
    marine_shipyard: "Kelautan / galangan kapal",
    agriculture: "Pertanian",
    domestic_work: "Pekerjaan rumah tangga",
    cleaning: "Kebersihan / fasilitas",
    delivery_transport: "Pengiriman / transportasi",
    other: "Lainnya",
    myself: "Saya sendiri",
    employer: "Majikan",
    family: "Keluarga",
    friend_agent: "Teman atau agen",
    not_sure: "Tidak yakin",
    low_price: "Harga murah",
    calling_home: "Menelepon keluarga",
    high_data: "Data internet lebih banyak",
    good_network: "Jaringan bagus",
    easy_recharge: "Isi ulang mudah",
    language_support: "Bantuan dalam bahasa saya",
    friends_coworkers: "Teman atau rekan kerja",
    mobile_shop: "Toko ponsel",
    facebook_social: "Facebook atau media sosial",
    employer_agent: "Majikan atau agen",
    street_poster: "Poster atau selebaran",
    send_money_home: "Mengirim uang ke rumah",
    transport: "Transportasi",
    mobile_recharge: "Isi ulang ponsel",
    health_medicine: "Kesehatan atau obat",
    entertainment: "Hiburan",
    debt_loan: "Pembayaran utang atau pinjaman"
  },
  zh: {
    construction: "建筑",
    factory: "工厂 / 制造业",
    textile_garments: "纺织 / 服装",
    marine_shipyard: "海事 / 船厂",
    agriculture: "农业",
    domestic_work: "家政工作",
    cleaning: "清洁 / 设施服务",
    delivery_transport: "配送 / 运输",
    other: "其他",
    myself: "自己",
    employer: "雇主",
    family: "家人",
    friend_agent: "朋友或中介",
    under_10_sgd: "低于 S$10",
    "10_19_sgd": "S$10-19",
    "20_29_sgd": "S$20-29",
    "30_49_sgd": "S$30-49",
    "50_plus_sgd": "S$50 以上",
    not_sure: "不确定",
    low_price: "价格低",
    calling_home: "给家人打电话",
    high_data: "更多上网流量",
    good_network: "网络覆盖好",
    easy_recharge: "充值方便",
    friends_coworkers: "朋友或同事",
    mobile_shop: "手机店",
    whatsapp: "WhatsApp",
    facebook_social: "Facebook 或社交媒体",
    employer_agent: "雇主或中介",
    street_poster: "海报或传单",
    send_money_home: "汇钱回家",
    transport: "交通",
    mobile_recharge: "手机充值",
    health_medicine: "医疗或药品",
    entertainment: "娱乐",
    debt_loan: "还债或贷款",
    dormitory: "宿舍 / 房间",
    little_india: "小印度",
    geylang: "芽笼",
    mustafa: "慕达发中心",
    parks_beaches: "公园或海滩",
    malls: "购物中心",
    religious_place: "寺庙 / 清真寺 / 教堂",
    friends_place: "朋友住处",
    sports_facility: "运动设施",
    food: "食物",
    mobile_bills: "手机账单",
    other_bills: "其他账单",
    remittance: "汇款回家",
    shopping: "购物",
    mobile_data: "额外手机流量",
    recharge_discount: "充值折扣",
    cash_voucher: "现金券",
    grocery_voucher: "超市券",
    remittance_discount: "汇款折扣",
    free_calls: "免费海外通话",
    lucky_draw: "幸运抽奖奖品",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "微信",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "短信"
  }
};

const originSuggestions = [
  "Bihar",
  "Uttar Pradesh",
  "West Bengal",
  "Tamil Nadu",
  "Odisha",
  "Telangana",
  "Andhra Pradesh",
  "Maharashtra",
  "Kerala",
  "Jharkhand",
  "Rajasthan",
  "Assam",
  "Indonesia",
  "Bangladesh",
  "Myanmar",
  "Vietnam",
  "Thailand",
  "Philippines",
  "Malaysia",
  "Cambodia"
];

const state = {
  language: localStorage.getItem("surveyLanguage") || "hi"
};

const otherFieldMap = {
  workSector: "workSectorOther",
  currentTelco: "currentTelcoOther",
  billPayer: "billPayerOther",
  marketingSource: "marketingSourceOther",
  topExpense: "topExpenseOther",
  restDayPlace: "restDayPlaceOther",
  preferredIncentive: "preferredIncentiveOther",
  messagingPlatform: "messagingPlatformOther"
};

const $ = (selector) => document.querySelector(selector);
const t = (key) => (translations[state.language] && translations[state.language][key]) || translations.en[key] || key;

function renderLanguageSelect() {
  const select = $("#languageSelect");
  select.innerHTML = languages
    .map((language) => `<option value="${language.code}">${language.name}</option>`)
    .join("");
  select.value = state.language;
}

function displayOption(value, englishLabel) {
  return (localizedOptions[state.language] && localizedOptions[state.language][value]) || englishLabel;
}

function renderOptions(selectId, options) {
  const select = $(`#${selectId}`);
  const previous = select.value;
  select.innerHTML = options
    .map(([value, label]) => `<option value="${value}">${displayOption(value, label)}</option>`)
    .join("");
  if (previous) select.value = previous;
}

function renderFeatureRankings() {
  const container = $("#importantFeatures");
  const current = getFeatureRanking();
  const rankOptions = ["", "1", "2", "3", "4", "5"]
    .map((rank) => `<option value="${rank}">${rank || "-"}</option>`)
    .join("");
  container.innerHTML = optionSets.importantFeatures
    .map(([value, label]) => `
      <label class="rank-row">
        <span>${displayOption(value, label)}</span>
        <select name="feature_rank_${value}" data-feature="${value}" aria-label="${displayOption(value, label)} rank">
          ${rankOptions}
        </select>
      </label>
    `)
    .join("");
  Object.entries(current).forEach(([feature, rank]) => {
    const select = container.querySelector(`[data-feature="${feature}"]`);
    if (select) select.value = rank;
  });
}

function renderCheckboxGroup(containerId, inputName, options) {
  const container = $(`#${containerId}`);
  const selected = getCheckedValues(inputName);
  container.innerHTML = options
    .map(([value, label]) => `
      <label class="choice">
        <input type="checkbox" name="${inputName}" value="${value}" ${selected.indexOf(value) !== -1 ? "checked" : ""}>
        <span>${displayOption(value, label)}</span>
      </label>
    `)
    .join("");
}

function translatePage() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  renderOptions("workSector", optionSets.workSector);
  renderOptions("currentTelco", optionSets.currentTelco);
  renderOptions("billPayer", optionSets.billPayer);
  renderOptions("marketingSource", optionSets.marketingSource);
  renderOptions("topExpense", optionSets.topExpense);
  renderOptions("restDayPlace", optionSets.restDayPlace);
  renderOptions("preferredIncentive", optionSets.preferredIncentive);
  renderOptions("messagingPlatform", optionSets.messagingPlatform);
  renderFeatureRankings();
  renderCheckboxGroup("regularSpendCategories", "regular_spend_categories", optionSets.regularSpendCategories);
  renderCheckboxGroup("rechargeChannels", "recharge_channels", optionSets.rechargeChannels);
}

function renderStaticData() {
  renderLanguageSelect();
  renderOptions("workSector", optionSets.workSector);
  renderOptions("currentTelco", optionSets.currentTelco);
  renderOptions("billPayer", optionSets.billPayer);
  renderOptions("marketingSource", optionSets.marketingSource);
  renderOptions("topExpense", optionSets.topExpense);
  renderOptions("restDayPlace", optionSets.restDayPlace);
  renderOptions("preferredIncentive", optionSets.preferredIncentive);
  renderOptions("messagingPlatform", optionSets.messagingPlatform);
  renderFeatureRankings();
  renderCheckboxGroup("regularSpendCategories", "regular_spend_categories", optionSets.regularSpendCategories);
  renderCheckboxGroup("rechargeChannels", "recharge_channels", optionSets.rechargeChannels);
  $("#originOptions").innerHTML = originSuggestions.map((item) => `<option value="${item}"></option>`).join("");
  translatePage();
}

function setStatus(message, type) {
  const status = $("#statusMessage");
  status.textContent = message;
  status.className = `status is-visible is-${type}`;
}

function updateOtherFields() {
  Object.entries(otherFieldMap).forEach(([selectId, inputId]) => {
    const select = $(`#${selectId}`);
    const input = $(`#${inputId}`);
    const wrapper = document.querySelector(`[data-other-for="${selectId}"]`);
    if (!select || !input || !wrapper) return;

    const isOther = select.value === "other";
    wrapper.classList.toggle("is-visible", isOther);
    input.required = isOther;
    if (!isOther) input.value = "";
  });

  const regularSpendOther = $("#regularSpendOther");
  const regularSpendOtherField = $("#regularSpendOtherField");
  if (regularSpendOther && regularSpendOtherField) {
    const needsRegularSpendOther = getCheckedValues("regular_spend_categories").indexOf("other") !== -1;
    regularSpendOtherField.classList.toggle("is-visible", needsRegularSpendOther);
    regularSpendOther.required = needsRegularSpendOther;
    if (!needsRegularSpendOther) regularSpendOther.value = "";
  }

  const rechargeChannelOther = $("#rechargeChannelOther");
  const rechargeChannelOtherField = $("#rechargeChannelOtherField");
  if (rechargeChannelOther && rechargeChannelOtherField) {
    const needsRechargeOther = getCheckedValues("recharge_channels").indexOf("other") !== -1;
    rechargeChannelOtherField.classList.toggle("is-visible", needsRechargeOther);
    rechargeChannelOther.required = needsRechargeOther;
    if (!needsRechargeOther) rechargeChannelOther.value = "";
  }
}

function getOtherValue(inputId) {
  const input = $(`#${inputId}`);
  return input ? input.value.trim() : "";
}

function validatePhone(phone) {
  return /^\d{8,15}$/.test(phone.replace(/\D/g, ""));
}

function getCheckedValues(inputName) {
  return [...document.querySelectorAll(`input[name='${inputName}']:checked`)].map((input) => input.value);
}

function getFeatureRanking() {
  const ranking = {};
  document.querySelectorAll("#importantFeatures select[data-feature]").forEach((select) => {
    if (select.value) ranking[select.dataset.feature] = select.value;
  });
  return ranking;
}

function isCompleteRanking(ranking) {
  const ranks = Object.values(ranking);
  return ranks.length === optionSets.importantFeatures.length && new Set(ranks).size === ranks.length;
}

function formatFeatureRanking(ranking) {
  return Object.entries(ranking)
    .sort((a, b) => Number(a[1]) - Number(b[1]))
    .map(([feature, rank]) => `${rank}. ${optionLabel("importantFeatures", feature)}`);
}

function optionLabel(setName, value) {
  const pair = optionSets[setName].find(([key]) => key === value);
  return pair ? pair[1] : value;
}

function buildPayload() {
  const featureRanking = getFeatureRanking();
  const workSector = $("#workSector").value;
  const currentTelco = $("#currentTelco").value;
  const billPayer = $("#billPayer").value;
  const monthlySpend = $("#monthlySpend").value;
  const marketingSource = $("#marketingSource").value;
  const topExpense = $("#topExpense").value;
  const restDayPlace = $("#restDayPlace").value;
  const preferredIncentive = $("#preferredIncentive").value;
  const messagingPlatform = $("#messagingPlatform").value;
  const regularSpendCategories = getCheckedValues("regular_spend_categories");
  const rechargeChannels = getCheckedValues("recharge_channels");

  return {
    submitted_at: new Date().toISOString(),
    language_used: state.language,
    user_name: $("#userName").value.trim(),
    phone_number: $("#phoneNumber").value.replace(/\D/g, ""),
    origin_state_raw: $("#originState").value.trim(),
    work_sector: workSector,
    work_sector_en: optionLabel("workSector", workSector),
    work_sector_other_raw: getOtherValue("workSectorOther"),
    current_telco: currentTelco,
    current_telco_en: optionLabel("currentTelco", currentTelco),
    current_telco_other_raw: getOtherValue("currentTelcoOther"),
    bill_payer: billPayer,
    bill_payer_en: optionLabel("billPayer", billPayer),
    bill_payer_other_raw: getOtherValue("billPayerOther"),
    monthly_spend: monthlySpend,
    monthly_spend_en: monthlySpend,
    important_features_ranked: featureRanking,
    important_features_ranked_en: formatFeatureRanking(featureRanking),
    marketing_source: marketingSource,
    marketing_source_en: optionLabel("marketingSource", marketingSource),
    marketing_source_other_raw: getOtherValue("marketingSourceOther"),
    top_expense: topExpense,
    top_expense_en: optionLabel("topExpense", topExpense),
    top_expense_other_raw: getOtherValue("topExpenseOther"),
    rest_day_place: restDayPlace,
    rest_day_place_en: optionLabel("restDayPlace", restDayPlace),
    rest_day_place_other_raw: getOtherValue("restDayPlaceOther"),
    regular_spend_categories: regularSpendCategories,
    regular_spend_categories_en: regularSpendCategories.map((item) => optionLabel("regularSpendCategories", item)),
    regular_spend_other_raw: regularSpendCategories.indexOf("other") !== -1 ? getOtherValue("regularSpendOther") : "",
    recharge_channels: rechargeChannels,
    recharge_channels_en: rechargeChannels.map((item) => optionLabel("rechargeChannels", item)),
    recharge_channel_other_raw: rechargeChannels.indexOf("other") !== -1 ? getOtherValue("rechargeChannelOther") : "",
    preferred_incentive: preferredIncentive,
    preferred_incentive_en: optionLabel("preferredIncentive", preferredIncentive),
    preferred_incentive_other_raw: getOtherValue("preferredIncentiveOther"),
    messaging_platform: messagingPlatform,
    messaging_platform_en: optionLabel("messagingPlatform", messagingPlatform),
    messaging_platform_other_raw: getOtherValue("messagingPlatformOther"),
    worker_feedback_raw: getOtherValue("rechargeChannelOther")
  };
}

async function submitPayload(payload) {
  if (!GOOGLE_SCRIPT_URL) {
    const existing = JSON.parse(localStorage.getItem("surveyDraftResponses") || "[]");
    existing.push(payload);
    localStorage.setItem("surveyDraftResponses", JSON.stringify(existing));
    return { localOnly: true };
  }

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload)
  });
  return { response };
}

function resetForm() {
  $("#surveyForm").reset();
  state.language = $("#languageSelect").value;
}

function bindEvents() {
  $("#languageSelect").addEventListener("change", (event) => {
    state.language = event.target.value;
    localStorage.setItem("surveyLanguage", state.language);
    translatePage();
    updateOtherFields();
  });

  Object.keys(otherFieldMap).forEach((selectId) => {
    const select = $(`#${selectId}`);
    if (select) select.addEventListener("change", updateOtherFields);
  });

  $("#regularSpendCategories").addEventListener("change", updateOtherFields);
  $("#rechargeChannels").addEventListener("change", updateOtherFields);

  $("#surveyForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = buildPayload();
    const featureRanking = getFeatureRanking();

    if (!form.checkValidity()) {
      setStatus(t("requiredError"), "error");
      return;
    }

    if (!validatePhone(payload.phone_number)) {
      setStatus(t("phoneError"), "error");
      $("#phoneNumber").focus();
      return;
    }

    if (!isCompleteRanking(featureRanking)) {
      setStatus(t("featureError"), "error");
      return;
    }

    const button = $(".submit-button");
    button.disabled = true;

    try {
      const result = await submitPayload(payload);
      setStatus(result.localOnly ? t("localSaved") : t("success"), "success");
      resetForm();
      $("#languageSelect").value = state.language;
      updateOtherFields();
    } catch (error) {
      console.error(error);
      setStatus(t("submitError"), "error");
    } finally {
      button.disabled = false;
    }
  });
}

renderStaticData();
bindEvents();
updateOtherFields();
