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
    rechargeLabel: "मोबाइल रिचार्ज करने के लिए आपकी पहली पसंद कहाँ होगी?",
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
    rechargeLabel: "আপনার মোবাইল রিচার্জ করার শীর্ষ পছন্দ কোথায়?",
    feedbackLabel: "মোবাইল নেটওয়ার্ক বা রিচার্জ নিয়ে কোনো সমস্যা হয় কি?",
    submit: "জরিপ জমা দিন",
    dormitory: "ডরমিটরি / কক্ষ",
    little_india: "লিটল ইন্ডিয়া",
    geylang: "গেইল্যাং",
    mustafa: "মুস্তাফা সেন্টার",
    parks_beaches: "পার্ক বা সমুদ্র সৈকত",
    malls: "শপিং মল",
    religious_place: "মন্দির / মসজিদ / গির্জা",
    friends_place: "বন্ধুদের বাড়ি",
    sports_facility: "ক্রীড়া সুবিধা",
    food: "খাদ্য",
    transport: "যাতায়াত",
    mobile_bills: "মোবাইল বিল",
    other_bills: "অন্যান্য বিল",
    remittance: "বাড়িতে টাকা পাঠানো",
    health_medicine: "স্বাস্থ্য বা ওষুধ",
    entertainment: "বিনোদন",
    shopping: "কেনাকাটা",
    debt_loan: "ঋণ বা লোন পরিশোধ",
    mobile_data: "অতিরিক্ত মোবাইল ডেটা",
    recharge_discount: "রিচার্জ ছাড়",
    cash_voucher: "ক্যাশ ভাউচার",
    grocery_voucher: "মুদিখানার ভাউচার",
    remittance_discount: "রেমিট্যান্স ছাড়",
    free_calls: "বিনামূল্যের বিদেশী কল",
    lucky_draw: "লাকি ড্র পুরস্কার",
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
    rechargeLabel: "您最想在哪裡为手机充值？",
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
    eyebrow: "தொழிலாளர் மொபைல் கணக்கெடுப்பு",
    title: "மொபைல் தேவைகள் கணக்கெடுப்பு",
    languageLabel: "மொழி",
    sectionPersonal: "உங்கள் விவரம்",
    nameLabel: "முழு பெயர்",
    phoneLabel: "தொலைபேசி எண்",
    phoneHelp: "+91 இல்லாமல் 10 இலக்க மொபைல் எண்ணை மட்டும் எழுதவும்.",
    sectionWork: "வேலை மற்றும் மொபைல் பயன்பாடு",
    originLabel: "நீங்கள் எந்த மாநிலம் அல்லது நாட்டைச் சேர்ந்தவர்?",
    sectorLabel: "நீங்கள் எந்த துறையில் வேலை செய்கிறீர்கள்?",
    telcoLabel: "நீங்கள் இப்போது எந்த சிம் அல்லது மொபைல் நெட்வொர்க் பயன்படுத்துகிறீர்கள்?",
    payerLabel: "உங்கள் மொபைல் ரீசார்ஜை யார் செலுத்துகிறார்கள்?",
    spendLabel: "மாதத்திற்கு மொபைல் ரீசார்ஜுக்கு எவ்வளவு செலவிடுகிறீர்கள்?",
    featuresLabel: "சிம் தேர்வு செய்யும்போது எந்தவொரு அம்சம் முக்கியமானது?",
    featuresHelp: "ஒவ்வொரு நிலைக்கும் ஒரு விருப்பத்தை மட்டும் தேர்வு செய்யவும்.",
    sourceLabel: "புதிய சலுகைகள் அல்லது சிம் ஒப்பந்தங்களை பற்றி எங்கு தெரிகிறது?",
    expenseLabel: "உணவும் குடியிருப்பும் அல்லாமல் நீங்கள் அதிகமாக எதற்கும் பணம் செலவிடுகிறீர்கள்?",
    placesLabel: "வெளியே விடுமுறையில் நீங்கள் சாதாரணமாக எங்கு போகிறீர்கள்?",
    regularSpendLabel: "நீங்கள் எதில் அடிக்கடி செலவு செய்கிறீர்கள்? பொருந்தும் அனைத்தையும் தேர்வு செய்யவும்.",
    incentiveLabel: "உங்களுக்கு மிகவும் பயனுள்ளதாக இருக்கும் பரிசு அல்லது ஊக்கம் எது?",
    messagingLabel: "நீங்கள் அதிகமாக பயன்படுத்தும் மெசேஜிங் பயன்பாடு எது?",
    otherSpecifyLabel: "தயவு செய்து குறிப்பிடவும்",
    rechargeLabel: "உங்கள் மொபைலை ரீசார்ஜ் செய்ய உங்கள் முதல் விருப்ப இடம் எது?",
    submit: "சர்வே சமர்ப்பிக்கவும்",
    dormitory: "டைர்மிடரி / அறை",
    little_india: "லிட்டில் இந்தியா",
    geylang: "கெய்லாங்",
    mustafa: "முஸ்தபா சென்டர்",
    parks_beaches: "பார்க் அல்லது கடற்பகுதி",
    malls: "ஷாப்பிங் மால்கள்",
    religious_place: "கோவில் / பள்ளிவாசல் / தேவாலயம்",
    friends_place: "நண்பர்களிடம்",
    sports_facility: "கായிக சౌகரியம்",
    food: "உணவு",
    transport: "போக்குவரத்து",
    mobile_bills: "மொபைல் பில்கள்",
    other_bills: "மற்ற பில்கள்",
    remittance: "பணம் அனுப்பு",
    health_medicine: "சுகாதாரம் அல்லது மருந்து",
    entertainment: "பொழுதுபோக்கு",
    shopping: "வாங்குதல்",
    debt_loan: "கடன் கட்டணம்",
    mobile_data: "கூடுதல் மொபைல் டேட்டா",
    recharge_discount: "ரீசார்ஜ் தள்ளுபடி",
    cash_voucher: "கடன் வவுசர்",
    grocery_voucher: "கிராசரி வவுசர்",
    remittance_discount: "ரிமிட்டன்ஸ் தள்ளுபடி",
    free_calls: "இலவச வெளிநாட்டு அழைப்புகள்",
    lucky_draw: "லகி டிரா பரிசு"
  },
  te: {
    eyebrow: "కార్మికుల మొబైల్ సర్వే",
    title: "మొబైల్ అవసరాల సర్వే",
    languageLabel: "భాష",
    sectionPersonal: "మీ వివరాలు",
    nameLabel: "పూర్తి పేరు",
    phoneLabel: "ఫోన్ నంబర్",
    phoneHelp: "+91 లేకుండా 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.",
    sectionWork: "పని మరియు మొబైల్ వినియోగం",
    originLabel: "మీరు అసలు ఏ రాష్ట్రం లేదా దేశం నుంచి వచ్చారు?",
    sectorLabel: "మీరు ఏ రంగంలో పనిచేస్తున్నారు?",
    telcoLabel: "మీరు ప్రస్తుతం ఏ SIM లేదా మొబైల్ నెట్‌వర్క్ వినియోగిస్తున్నారు?",
    payerLabel: "మీ మొబైల్ రీచార్జ్‌కి ఎవరు చెల్లిస్తారు?",
    spendLabel: "నెలకు మొబైల్ రీచార్జ్‌పై ఎంత ఖర్చు చేస్తారు?",
    featuresLabel: "SIM ఎంచుకునేటప్పుడు ఏమి ముఖ్యమో దయచేసి చెప్పండి?",
    featuresHelp: "ప్రతి ర్యాంకుకు ఒక్కదానిని మాత్రమే ఎంచుకోండి.",
    sourceLabel: "కొత్త ఆఫర్లు లేదా SIM డీల్‌ల గురించి మీరు ఎక్కడ తెలుసుకుంటారు?",
    expenseLabel: "ఆహారం మరియు నివాసం కాకుండా మీరు ఎక్కువగా ఏ విషయంలో ఖర్చు చేస్తారు?",
    placesLabel: "విరామ దినాల్లో మీరు సాధారణంగా ఎక్కడికి వెళ్తారు?",
    regularSpendLabel: "మీరు తరచుగా ఏవిషయంలో ఖర్చు చేస్తారు? వర్తించే వాటిని ఎంచుకోండి.",
    incentiveLabel: "మీకు అత్యంత ఉపయోగకరమైన బహుమతి లేదా ప్రోత్సాహకం ఏది?",
    messagingLabel: "మీరు ఎక్కువగా ఉపయోగించే మెసెజింగ్ ప్లాట్‌ఫారం ఏది?",
    otherSpecifyLabel: "దయచేసి వివరణ ఇవ్వండి",
    rechargeLabel: "మీ మొబైల్‌ను రీచార్జ్ చేయడానికి మీ మొదటి ఇష్టమైన ప్రదేశం ఎక్కడ?",
    submit: "సర్వే సమర్పించండి",
    dormitory: "డార్మిటరీ / గది",
    little_india: "లిటిల్ ఇండియా",
    geylang: "గేలాంగ్",
    mustafa: "ముస్థఫా కేంద్రం",
    parks_beaches: "పార్కులు లేదా సముద్ర తీరాలు",
    malls: "షాపింగ్ మాల్స్",
    religious_place: "మత స్థలం / మసీదు / చర్చి",
    friends_place: "స్నేహితుల ఇంటి వద్ద",
    sports_facility: "క్రీడా సౌకర్యం",
    food: "ఆహారం",
    transport: "రవాణా",
    mobile_bills: "మొబైల్ బిల్లులు",
    other_bills: "ఇతర బిల్లులు",
    remittance: "ఇంటికి పంపడం",
    health_medicine: "ఆరోగ్యము లేదా మందులు",
    entertainment: "వినోదం",
    shopping: "షాపింగ్",
    debt_loan: "అప్పు లేదా లోన్ చెల్లింపు",
    mobile_data: "అదనపు మొబైల్ డేటా",
    recharge_discount: "రీచార్జ్ డిస్కౌంట్",
    cash_voucher: "నగదు వోచర్",
    grocery_voucher: "క్రోసరీ వోచర్",
    remittance_discount: "రిమిటెన్స్ డిస్కౌంట్",
    free_calls: "ఉచిత విదేశీ కాల్స్",
    lucky_draw: "లక్కీ డ్రా బహుమతి"
  },
  mr: {
    eyebrow: "कामगार मोबाइल सर्वेक्षण",
    title: "मोबाइल गरज सर्वेक्षण",
    languageLabel: "भाषा",
    sectionPersonal: "आपली माहिती",
    nameLabel: "पूर्ण नाव",
    phoneLabel: "फोन नंबर",
    phoneHelp: "+91 शिवाय 10 अंकी मोबाइल नंबर टाका.",
    sectionWork: "काम आणि मोबाइल वापर",
    originLabel: "आपण मूळतः कोणत्या राज्यातून किंवा देशातून आला आहात?",
    sectorLabel: "आपण कोणत्या क्षेत्रात काम करता?",
    telcoLabel: "आपण सध्या कोणता SIM किंवा मोबाइल नेटवर्क वापरत आहात?",
    payerLabel: "आपला मोबाइल रिचार्ज कोण भरतो?",
    spendLabel: "महिन्याला मोबाइल रिचार्जसाठी किती खर्च करता?",
    featuresLabel: "SIM निवडताना काय महत्त्वाचे आहे?",
    featuresHelp: "प्रत्येक रँकसाठी एकच पर्याय निवडा.",
    sourceLabel: "नवीन ऑफर किंवा SIM डील्सबद्दल तुम्हाला कुठून माहिती मिळते?",
    expenseLabel: "भोजन आणि घराबाहेर तुम्ही सर्वाधिक पैसे कुठे खर्च करता?",
    placesLabel: "सुट्टीच्या दिवशी तुम्ही सामान्यतः कुठे जाता?",
    regularSpendLabel: "तुम्ही नियमितपणे कोणत्या गोष्टींवर खर्च करता? लागू असलेले पर्याय निवडा.",
    incentiveLabel: "तुमच्यासाठी कोणता बक्षीस किंवा प्रोत्साहन अधिक उपयुक्त आहे?",
    messagingLabel: "तुम्ही सर्वाधिक कोणता मेसेजिंग प्लॅटफॉर्म वापरता?",
    otherSpecifyLabel: "कृपया नमूद करा",
    rechargeLabel: "तुमचा मोबाइल रिचार्ज करण्यासाठी तुमची प्राथमिक आवडती जागा कोणती आहे?",
    submit: "सर्वे सबमिट करा",
    dormitory: "डॉर्मिटरी / खोली",
    little_india: "लिटिल इंडिया",
    geylang: "गेयलैंग",
    mustafa: "मुस्तफा सेंटर",
    parks_beaches: "उद्यान किंवा समुद्रकिनारा",
    malls: "शॉपिंग मॉल",
    religious_place: "मंदिर / मशिद / चर्च",
    friends_place: "मित्रांचे घर",
    sports_facility: "क्रीडा सुविधा",
    food: "अन्न",
    transport: "वाहतूक",
    mobile_bills: "मोबाईल बिल",
    other_bills: "इतर बिल",
    remittance: "पैसे पाठवणे",
    health_medicine: "आरोग्य किंवा औषध",
    entertainment: "मनोरंजन",
    shopping: "खरेदी",
    debt_loan: "कर्ज भरणे",
    mobile_data: "अतिरिक्त मोबाइल डेटा",
    recharge_discount: "रिचार्ज सूट",
    cash_voucher: "कॅश वाउचर",
    grocery_voucher: "किराणा वाउचर",
    remittance_discount: "रेमिटन्स सूट",
    free_calls: "मुफ्त आंतरराष्ट्रीय कॉल",
    lucky_draw: "लकी ड्रॉ बक्षीस"
  },
  or: {
    eyebrow: "ଶ୍ରମିକ ମୋବାଇଲ ସର୍ଭେ",
    title: "ମୋବାଇଲ ଆବଶ୍ୟକତା ସର୍ଭେ",
    languageLabel: "ଭାଷା",
    sectionPersonal: "ଆପଣଙ୍କ ବିବରଣୀ",
    nameLabel: "ପୂର୍ଣ୍ଣ ନାମ",
    phoneLabel: "ଫୋନ୍ ନମ୍ବର",
    phoneHelp: "+91 ବିନା 10 ଅଙ୍କର ମୋବାଇଲ ନମ୍ବର ଲେଖନ୍ତୁ।",
    sectionWork: "କାମ ଏବଂ ମୋବାଇଲ ବ୍ୟବହାର",
    originLabel: "ଆପଣ ମୂଳତଃ କେଉଁ ରାଜ୍ୟ କିମ୍ବା ଦେଶର?",
    sectorLabel: "ଆପଣ କେଉଁ କ୍ଷେତ୍ରରେ କାମ କରନ୍ତି?",
    telcoLabel: "ଆପଣ ବର୍ତ୍ତମାନ କେଉଁ ସିମ୍ କିମ୍ବା ମୋବାଇଲ ନେଟୱର୍କ ବ୍ୟବହାର କରୁଛନ୍ତି?",
    payerLabel: "ଆପଣଙ୍କ ମୋବାଇଲ ରିଚାର୍ଜ କିଏ କରେ?",
    spendLabel: "ପ୍ରତିମାସରେ ମୋବାଇଲ ରିଚାର୍ଜ ପାଇଁ ଆପଣ କେତେ ଖର୍ଚ୍ଚ କରନ୍ତି?",
    featuresLabel: "SIM ବାଛିବା ସମୟରେ କ’ଣ ସବୁଠାରେ ଜରୁରୀ?",
    featuresHelp: "ପ୍ରତ୍ୟେକ ରଙ୍କ ପାଇଁ ଗୋଟିଏ ବିକଳ୍ପ ଚୟନ କରନ୍ତୁ।",
    sourceLabel: "ନୂତନ ଅଫର ବା SIM ଡିଲ ବିଷୟରେ ଆପଣ କେଉଁଠାରୁ ଜାଣନ୍ତି?",
    expenseLabel: "ଖାଦ୍ୟ ଓ ରହିବା ବ୍ୟତୀତ ଆପଣ ସବୁଠାରୁ ଅଧିକ ଟଙ୍କା କାହାରେ ଖର୍ଚ୍ଚ କରନ୍ତି?",
    placesLabel: "ବିଶ୍ରାମ ଦିନରେ ଆପଣ ସାଧାରଣତଃ କେଉଁଠାକୁ ଯାନ୍ତି?",
    regularSpendLabel: "ଆପଣ ନିୟମିତ ଭାବେ କେଉଁ ସାମଗ୍ରୀ ପାଇଁ ଟଙ୍କା ଖର୍ଚ୍ଚ କରନ୍ତି? ଲାଗୁ ପଡୁଥିବା ବସ୍ତୁଗୁଡ଼ିକୁ ଚୟନ କରନ୍ତୁ।",
    incentiveLabel: "ଆପଣଙ୍କ ପାଇଁ କେଉଁ ପୁରସ୍କାର ବା ପ୍ରୋତ୍ସାହନ ଉପଯୋଗୀ?",
    messagingLabel: "ଆପଣ ସର୍ବାଧିକ ବ୍ୟବହାର କରୁଥିବା ମେସେଜିଂ ପ୍ଲାଟଫର୍ମ କେଉଁଟି?",
    otherSpecifyLabel: "ଦୟାକରି ଉଲ୍ଲେଖ କରନ୍ତୁ",
    rechargeLabel: "ମୋବାଇଲ ରିଚାର୍ଜ କରିବା ପାଇଁ ଆପଣଙ୍କର ପ୍ରଥମ ଏହି ପସନ୍ଦ କେଉଁଠା?",
    submit: "ସର୍ଭେ ଜମା କରନ୍ତୁ"
  },
  bho: {
    eyebrow: "मजदूर मोबाइल सर्वे",
    title: "मोबाइल जरूरत सर्वे",
    languageLabel: "भाषा",
    sectionPersonal: "रउआ जानकारी",
    nameLabel: "पूरा नाम",
    phoneLabel: "फोन नंबर",
    phoneHelp: "+91 बिना 10 अंक के मोबाइल नंबर लिखीं।",
    sectionWork: "काम आ मोबाइल उपयोग",
    originLabel: "रउआ मूल रूप से कवन राज्य या देश से बानी?",
    sectorLabel: "रउआ कवन सेक्टर में काम करेलीं?",
    telcoLabel: "रउआ अभी कवन SIM या मोबाइल नेटवर्क इस्तेमाल कर रहल बानी?",
    payerLabel: "रउआ मोबाइल रिचार्ज के भुगतान केकरा से होला?",
    spendLabel: "रउआ महीना में मोबाइल रिचार्ज पर कितना खर्च करेलीं?",
    featuresLabel: "SIM चुनते समय सबसे जरूरी का होला?",
    featuresHelp: "हर रैंक खातिर एके विकल्प चुनीं।",
    sourceLabel: "नया ऑफर या SIM डील के बारे में रउआ कहाँ से जानत बानी?",
    expenseLabel: "खाना आ रहला के अलावा रउआ सबसे ज्यादा पैसा कहाँ खर्च करेलीं?",
    placesLabel: "आराम के दिन रउआ आमतौर पर कहाँ जात बानी?",
    regularSpendLabel: "रउआ नियमित रूप से कवन-कवन चीज पर पैसा खर्च करेलीं? लागे वाला सब चुन लीं।",
    incentiveLabel: "रउआ खातिर कौन उपहार या प्रोत्साहन सबसे उपयोगी बा?",
    messagingLabel: "रउआ सबसे अधिक कौन संदेश सेवा इस्तेमाल करेलीं?",
    otherSpecifyLabel: "कृपया बताईं",
    rechargeLabel: "मोबाइल रिचार्ज करे खातिर रउआ के पहिला पसंदीदा जगह कहाँ बा?",
    submit: "सर्वे जमा करीं"
  },
  ml: {
    eyebrow: "തൊഴിലാളി മൊബൈൽ സർവേ",
    title: "മൊബൈൽ ആവശ്യ സർവേ",
    languageLabel: "ഭാഷ",
    sectionPersonal: "നിങ്ങളുടെ വിവരങ്ങൾ",
    nameLabel: "പൂർണ്ണ പേര്",
    phoneLabel: "ഫോൺ നമ്പർ",
    phoneHelp: "+91 ഇല്ലാതെ 10 അക്ക മൊബൈൽ നമ്പർ നൽകുക.",
    sectionWork: "ജോലിയും മൊബൈൽ ഉപയോഗവും",
    originLabel: "നിങ്ങൾ ഏത് സംസ്ഥാനത്തോ രാജ്യത്തുനിന്നോ എത്തി?",
    sectorLabel: "നിങ്ങൾ ഏത് മേഖലയിലാണ് ജോലി ചെയ്യുന്നത്?",
    telcoLabel: "നിങ്ങൾ നിലവിൽ ഏത് സിം അല്ലെങ്കിൽ മൊബൈൽ നെറ്റ്‌വർക്ക് ഉപയോഗിക്കുന്നു?",
    payerLabel: "നിങ്ങളുടെ മൊബൈൽ റീചാർജ് ആരാണ് നൽകുന്നത്?",
    spendLabel: "മാസത്തിൽ മൊബൈൽ റീചാർജിന് എത്ര ചെലവ് വരുന്നു?",
    featuresLabel: "SIM തിരഞ്ഞെടുക്കുമ്പോൾ ഏറ്റവും പ്രധാനപ്പെട്ടത് എന്താണ്?",
    featuresHelp: "ഓരോ റാങ്കിനും ഒരു തിരഞ്ഞെടുപ്പ് മാത്രം തിരഞ്ഞെടുക്കുക.",
    sourceLabel: "പുതിയ ഓഫറുകൾ അല്ലെങ്കിൽ SIM ഡീലുകൾ എവിടെ അറിയാം?",
    expenseLabel: "ഭക്ഷണത്തിലും താമസവുമായുള്ളതിനപ്പുറം നിങ്ങൾ പ്രധാനമായും ഏത് കാര്യത്തിന് പണം ചെലവഴിക്കുന്നു?",
    placesLabel: "വിടുമുറ്റ ദിവസങ്ങളിൽ നിങ്ങൾ സാധാരണയായി എവിടെ പോകുന്നു?",
    regularSpendLabel: "നിങ്ങൾ സ്ഥിരമായി ഏത് കാര്യങ്ങളിൽ ചെലവിടുന്നു? ബാധകമാകുന്ന എല്ലാ കാര്യങ്ങളും തിരഞ്ഞെടുത്തു.",
    incentiveLabel: "നിങ്ങൾക്ക് ഏറ്റവും ഉപയോക്താവായ ബഹുമതി അല്ലെങ്കിൽ പ്രോത്സാഹനം ഏത്?",
    messagingLabel: "നിങ്ങൾ കൂടുതലായി ഉപയോഗിക്കുന്ന സന്ദേശവിനിമയ പ്ലാറ്റ്ഫോം ഏത്?",
    otherSpecifyLabel: "ദയവായി വ്യക്തമാക്കുക",
    rechargeLabel: "നിങ്ങളുടെ മൊബൈൽ റീചാർജ് ചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ മുൻഗണനാകേന്ദ്രം എവിടെയാകും?",
    submit: "സർവേ സമർപ്പിക്കുക"
  },
  id: {
    eyebrow: "Survei mobile pekerja",
    title: "Survei kebutuhan seluler",
    languageLabel: "Bahasa",
    sectionPersonal: "Data Anda",
    nameLabel: "Nama lengkap",
    phoneLabel: "Nomor telepon",
    phoneHelp: "Masukkan nomor ponsel 10 digit tanpa kode negara.",
    sectionWork: "Pekerjaan dan penggunaan ponsel",
    originLabel: "Anda berasal dari negara atau daerah mana?",
    sectorLabel: "Anda bekerja di sektor apa?",
    telcoLabel: "SIM atau jaringan seluler apa yang Anda gunakan sekarang?",
    payerLabel: "Siapa yang membayar isi ulang ponsel Anda?",
    spendLabel: "Berapa biaya isi ulang ponsel per bulan?",
    featuresLabel: "Apa yang paling penting saat memilih SIM?",
    featuresHelp: "Pilih satu opsi untuk setiap peringkat.",
    sourceLabel: "Dari mana Anda tahu tentang tawaran atau promo SIM baru?",
    expenseLabel: "Selain makanan dan tempat tinggal, apa yang paling sering Anda belanjakan?",
    placesLabel: "Ke mana Anda biasanya pergi pada hari istirahat?",
    regularSpendLabel: "Apa yang sering Anda belanjakan? Pilih semua yang berlaku.",
    incentiveLabel: "Hadiah atau insentif apa yang paling berguna untuk Anda?",
    messagingLabel: "Platform pesan apa yang paling sering Anda gunakan?",
    otherSpecifyLabel: "Silakan jelaskan",
    rechargeLabel: "Di mana pilihan utama Anda untuk mengisi ulang ponsel?",
    submit: "Kirim survei"
  },
  vi: {
    eyebrow: "Khảo sát người lao động di động",
    title: "Khảo sát nhu cầu di động",
    languageLabel: "Ngôn ngữ",
    sectionPersonal: "Thông tin của bạn",
    nameLabel: "Họ và tên",
    phoneLabel: "Số điện thoại",
    phoneHelp: "Nhập số điện thoại 10 chữ số mà không có mã quốc gia.",
    sectionWork: "Công việc và sử dụng di động",
    originLabel: "Bạn đến từ tỉnh hoặc quốc gia nào?",
    sectorLabel: "Bạn làm việc trong ngành nào?",
    telcoLabel: "Bạn đang sử dụng SIM hoặc mạng nào?",
    payerLabel: "Ai trả tiền cho việc nạp tiền điện thoại của bạn?",
    spendLabel: "Bạn chi bao nhiêu cho nạp tiền điện thoại mỗi tháng?",
    featuresLabel: "Điều gì quan trọng nhất khi chọn SIM?",
    featuresHelp: "Chọn một tùy chọn cho mỗi hạng.",
    sourceLabel: "Bạn biết về ưu đãi hoặc khuyến mại SIM mới từ đâu?",
    expenseLabel: "Ngoài ăn uống và nhà ở, bạn chi nhiều tiền nhất cho gì?",
    placesLabel: "Bạn thường đi đâu vào ngày nghỉ?",
    regularSpendLabel: "Bạn thường tiêu tiền vào gì? Chọn tất cả những gì phù hợp.",
    incentiveLabel: "Phần quà hoặc ưu đãi nào hữu ích nhất với bạn?",
    messagingLabel: "Bạn dùng nền tảng nhắn tin nào nhiều nhất?",
    otherSpecifyLabel: "Vui lòng cho biết",
    rechargeLabel: "Lựa chọn hàng đầu của bạn để nạp tiền điện thoại là ở đâu?",
    submit: "Gửi khảo sát"
  },
  th: {
    eyebrow: "แบบสำรวจมือถือของแรงงาน",
    title: "แบบสำรวจความต้องการมือถือ",
    languageLabel: "ภาษา",
    sectionPersonal: "ข้อมูลของคุณ",
    nameLabel: "ชื่อเต็ม",
    phoneLabel: "หมายเลขโทรศัพท์",
    phoneHelp: "กรอกหมายเลขโทรศัพท์ 10 หลักโดยไม่ต้องใส่รหัสประเทศ",
    sectionWork: "งานและการใช้มือถือ",
    originLabel: "คุณมาจากรัฐหรือประเทศใด?",
    sectorLabel: "คุณทำงานในสาขาใด?",
    telcoLabel: "คุณกำลังใช้ซิมหรือเครือข่ายมือถือใดอยู่?",
    payerLabel: "ใครเป็นผู้จ่ายเงินเติมเงินมือถือของคุณ?",
    spendLabel: "คุณใช้งบเติมเงินมือถือเท่าไรต่อเดือน?",
    featuresLabel: "อะไรสำคัญที่สุดเมื่อเลือกซิม?",
    featuresHelp: "เลือกตัวเลือกเดียวสำหรับแต่ละอันดับ",
    sourceLabel: "คุณทราบข้อเสนอหรือโปรโมชั่นซิมใหม่จากที่ไหน?",
    expenseLabel: "นอกจากอาหารและที่พัก คุณใช้จ่ายมากที่สุดสำหรับอะไร?",
    placesLabel: "คุณมักไปที่ไหนในวันหยุด?",
    regularSpendLabel: "คุณมักใช้จ่ายเงินกับอะไร? เลือกทั้งหมดที่เกี่ยวข้อง",
    incentiveLabel: "ของขวัญหรือสิทธิพิเศษใดที่มีประโยชน์ที่สุดสำหรับคุณ?",
    messagingLabel: "คุณใช้แพลตฟอร์มส่งข้อความใดมากที่สุด?",
    otherSpecifyLabel: "กรุณาระบุ",
    rechargeLabel: "คุณเลือกเติมเงินมือถือที่ไหนเป็นอันดับแรก?",
    submit: "ส่งแบบสำรวจ"
  },
  my: {
    eyebrow: "မိုဘိုင်းလိုအပ်ချက် စစ်တမ်း",
    title: "မိုဘိုင်းလိုအပ်ချက် စစ်တမ်း",
    languageLabel: "ဘာသာစကား",
    sectionPersonal: "သင်၏အချက်အလတ်",
    nameLabel: "အမည်အပြည့်အစုံ",
    phoneLabel: "ဖုန်းနံပါတ်",
    phoneHelp: "နိုင်ငံကုဒ်မပါဘဲ 10 လုံးဖုန်းနံပါတ်ထည့်ပါ",
    sectionWork: "အလုပ်အကိုင်နှင့် မိုဘိုင်းအသုံးပြုမှု",
    originLabel: "သင် မည်သည့် ပြည်နယ် သို့မဟုတ် နိုင်ငံမှ လာပါသလဲ?",
    sectorLabel: "သင် ဘယ်စက်မှုလုပ်ငန်း၌အလုပ်လုပ်ပါသလဲ?",
    telcoLabel: "သင် လက်ရှိ အသုံးပြုနေသော SIM သို့မဟုတ် မိုဘိုင်းကွန်ယက်အဘယ်နည်း?",
    payerLabel: "သင်၏ မိုဘိုင်းထည့်ငွေကို ဘယ်သူ ကုန်ကျစရိတ် ထည့်ပေးသလဲ?",
    spendLabel: "လစဉ် မိုဘိုင်းထည့်ငွေအတွက် မည်မျှ အကုန်ကျသနည်း?",
    featuresLabel: "SIM ကိုရွေးချယ်စဉ် အရေးကြီးဆုံး အချက် မည်သည်နည်း?",
    featuresHelp: "အဆင့်တိုင်းအတွက် တစ်ခုချင်းရွေးချယ်ပါ",
    sourceLabel: "သင် ဗဟိုပြု သတ်ပေါက်သစ်များအကြောင်း မည်သူ့ထံမှ သိခဲ့သနည်း?",
    expenseLabel: "အစားအသောက်နှင့် နေထိုင်ခင်းအပြင် သငျသညျ အများဆုံး ငွေကုန်ကျသည့် အရာ မည်သည်နည်း?",
    placesLabel: "အနားယူရက်များတွင် သင် ပုံမှန်အားဖြင့် ဘယ်နေရာကို သွားလေ့ရှိပါသလဲ?",
    regularSpendLabel: "သင် အမြဲတမ်း ဘာတွင် ငွေကုန်ကျသည်နည်း? သက်ဆိုင်ရာ အားလုံးကို ရွေးချယ်ပါ",
    incentiveLabel: "သင့်အတွက် အထူး ဆုချီးမြှင့်ချက် သည် ဘာလဲ?",
    messagingLabel: "သင့်အကြိုက်ဆုံး မက်ဆေ့ခ်ျ ပလက်ဖောင်း သည် ဘာလဲ?",
    otherSpecifyLabel: "ကျေးဇူးပြု၍ ဖော်ပြပါ",
    rechargeLabel: "သင်၏ မိုဘိုင်းကို ထပ်မံ အားပြန်ထည့်ရန် အခြေခံအရ လူကြိုက်ဆုံးနေရာ ဘယ်မှာလဲ?",
    submit: "စစ်တမ်းတင်သွင်းပါ"
  },
  ms: {
    eyebrow: "Tinjauan mobile pekerja",
    title: "Tinjauan keperluan mudah alih",
    languageLabel: "Bahasa",
    sectionPersonal: "Maklumat anda",
    nameLabel: "Nama penuh",
    phoneLabel: "Nombor telefon",
    phoneHelp: "Masukkan nombor telefon bimbit 10 digit tanpa kod negara.",
    sectionWork: "Pekerjaan dan penggunaan mudah alih",
    originLabel: "Anda berasal dari negeri atau negara mana?",
    sectorLabel: "Anda bekerja dalam sektor apa?",
    telcoLabel: "SIM atau rangkaian mudah alih mana yang anda gunakan sekarang?",
    payerLabel: "Siapa yang membayar tambah nilai telefon mudah alih anda?",
    spendLabel: "Berapa banyak anda belanjakan untuk tambah nilai setiap bulan?",
    featuresLabel: "Apa yang paling penting apabila memilih SIM?",
    featuresHelp: "Pilih satu pilihan untuk setiap kedudukan.",
    sourceLabel: "Anda mengetahui tawaran atau promosi SIM baru dari mana?",
    expenseLabel: "Selain makanan dan tempat tinggal, anda membelanjakan paling banyak untuk apa?",
    placesLabel: "Anda biasanya pergi ke mana pada hari rehat?",
    regularSpendLabel: "Apa yang anda sering belanjakan? Pilih semua yang berkaitan.",
    incentiveLabel: "Hadiah atau insentif mana yang paling berguna untuk anda?",
    messagingLabel: "Platform mesej mana yang anda gunakan paling banyak?",
    otherSpecifyLabel: "Sila nyatakan",
    rechargeLabel: "Di mana pilihan utama anda untuk menambah nilai telefon mudah alih?",
    submit: "Hantar tinjauan"
  },
  tl: {
    eyebrow: "Survey ng pangangailangan sa mobile",
    title: "Survey sa pangangailangan sa mobile",
    languageLabel: "Wika",
    sectionPersonal: "Ang iyong detalye",
    nameLabel: "Buong pangalan",
    phoneLabel: "Numero ng telepono",
    phoneHelp: "Ilagay ang 10-digit na mobile number nang walang country code.",
    sectionWork: "Trabaho at paggamit ng mobile",
    originLabel: "Mula saang lalawigan o bansa ka nagmula?",
    sectorLabel: "Anong sektor ang iyong pinagtatrabahuhan?",
    telcoLabel: "Anong SIM o mobile network ang ginagamit mo ngayon?",
    payerLabel: "Sino ang nagbabayad para sa pag-reload ng iyong mobile?",
    spendLabel: "Magkano ang ginagastos mo para sa pag-reload ng mobile kada buwan?",
    featuresLabel: "Ano ang pinakamahalaga kapag pumipili ng SIM?",
    featuresHelp: "Pumili ng isang opsyon para sa bawat ranggo.",
    sourceLabel: "Saan mo nalalaman ang tungkol sa bagong alok o deal ng SIM?",
    expenseLabel: "Bukod sa pagkain at tirahan, saan ka pinaka-nagastos?",
    placesLabel: "Saan ka karaniwang pumupunta sa araw ng pahinga?",
    regularSpendLabel: "Ano ang regular mong ginagastos? Piliin ang lahat na naaangkop.",
    incentiveLabel: "Anong regalo o insentibo ang pinaka-kapaki-pakinabang para sa iyo?",
    messagingLabel: "Anong messaging platform ang pinakamadalas mong gamitin?",
    otherSpecifyLabel: "Pakisabi",
    rechargeLabel: "Saan ang unang pagpipilian mo upang i-recharge ang iyong mobile?",
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
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
    facebook_social: "Facebook या सोशल मीडिया",
    employer_agent: "मालिक या एजेंट",
    street_poster: "पोस्टर या पर्चा",
    send_money_home: "घर पैसे भेजना",
    transport: "यात्रा / परिवहन",
    mobile_recharge: "मोबाइल रिचार्ज",
    health_medicine: "स्वास्थ्य या दवा",
    entertainment: "मनोरंजन",
    debt_loan: "कर्ज या लोन भुगतान"
    ,
    convenience_store: "कन्वीनियंस स्टोर",
    dorms: "छात्रावास",
    retail_shops: "खुदरा दुकानें",
    agent: "एजेंट",
    roadshows: "रोडशो",
    app: "ऐप",
    atms_axs: "ATM / AXS",
    self_serve: "स्वयं-सेवा",
    in_person: "व्यक्तिगत रूप से"
    ,
    dormitory: "छात्रावास / कमरा",
    little_india: "लिटिल इंडिया",
    geylang: "गेयलैंग",
    mustafa: "मुसतफा सेंटर",
    parks_beaches: "पार्क या समुद्र तट",
    malls: "शॉपिंग मॉल",
    religious_place: "मंदिर / मस्जिद / चर्च",
    friends_place: "मित्रों का घर",
    sports_facility: "खेल सुविधा",
    food: "खाना",
    mobile_bills: "मोबाइल बिल",
    other_bills: "अन्य बिल",
    remittance: "घर को भेजना",
    shopping: "खरीदारी",
    mobile_data: "अतिरिक्त मोबाइल डेटा",
    recharge_discount: "रिचार्ज छूट",
    cash_voucher: "कैश वाउचर",
    grocery_voucher: "किराने का वाउचर",
    remittance_discount: "रिमिटेंस छूट",
    free_calls: "मुफ्त विदेशी कॉल",
    lucky_draw: "लकी ड्रॉ पुरस्कार"
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
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
    facebook_social: "Facebook বা সোশ্যাল মিডিয়া",
    employer_agent: "মালিক বা এজেন্ট",
    street_poster: "পোস্টার বা লিফলেট",
    send_money_home: "বাড়িতে টাকা পাঠানো",
    transport: "যাতায়াত",
    mobile_recharge: "মোবাইল রিচার্জ",
    health_medicine: "স্বাস্থ্য বা ওষুধ",
    entertainment: "বিনোদন",
    debt_loan: "ঋণ বা লোন পরিশোধ"
    ,
    convenience_store: "কনভেনিয়েন্স স্টোর",
    dorms: "ডর্মস",
    retail_shops: "রিটেইল দোকান",
    agent: "এজেন্ট",
    roadshows: "রোডশো",
    app: "অ্যাপ",
    atms_axs: "ATM / AXS",
    self_serve: "সেল্ফ-সার্ভিস",
    in_person: "সশরীরে"
    ,
    dormitory: "ডরমিটরি / কক্ষ",
    little_india: "লিটল ইন্ডিয়া",
    geylang: "গেইল্যাং",
    mustafa: "মুস্তাফা সেন্টার",
    parks_beaches: "পার্ক বা সমুদ্র সৈকত",
    malls: "শপিং মল",
    religious_place: "মন্দির / মসজিদ / গির্জা",
    friends_place: "বন্ধুদের বাড়ি",
    sports_facility: "ক্রীড়া সুবিধা",
    food: "খাদ্য",
    mobile_bills: "মোবাইল বিল",
    other_bills: "অন্যান্য বিল",
    remittance: "বাড়িতে টাকা পাঠানো",
    shopping: "কেনাকাটা",
    mobile_data: "অতিরিক্ত মোবাইল ডাটা",
    recharge_discount: "রিচার্জ ডিসকাউন্ট",
    cash_voucher: "ক্যাশ ভাউচার",
    grocery_voucher: "মুদির ভাউচার",
    remittance_discount: "রেমিট্যান্স ডিসকাউন্ট",
    free_calls: "বিনামূল্যের আন্তর্জাতিক কল",
    lucky_draw: "লাকি ড্র পুরস্কার"
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
    debt_loan: "கடன் கட்டணம்",
    convenience_store: "சலுகை கடை",
    dorms: "தங்கும் இடம் / டார்மிடரி",
    retail_shops: "சில்லறை கடைகள்",
    agent: "ஏஜென்ட்",
    roadshows: "ரோட்ஷோக்கள்",
    app: "அப்",
    atms_axs: "ஏ.டி.எம் / AXS",
    self_serve: "சுய சேவை",
    in_person: "நேருக்கு நேர்",
    dormitory: "டைர்மிடரி / அறை",
    little_india: "லிட்டில் இந்தியா",
    geylang: "கெய்லாங்",
    mustafa: "முஸ்தபா சென்டர்",
    parks_beaches: "பார்க் அல்லது கடற்கரை",
    malls: "ஷாப்பிங் மால்கள்",
    religious_place: "கோவில் / பள்ளிவாசல் / தேவாலயம்",
    friends_place: "நண்பர்கள் வீட்டில்",
    sports_facility: "விளையாட்டு வசதி",
    food: "உணவு",
    mobile_bills: "மொபைல் பில்ல்கள்",
    other_bills: "மற்ற பில்ல்கள்",
    remittance: "வீட்டிற்கு பணம் அனுப்புதல்",
    shopping: "ஷாப்பிங்",
    mobile_data: "மேலும் மொபைல் டேட்டா",
    recharge_discount: "ரீசார்ஜ் தள்ளுபடி",
    cash_voucher: "காசு வவுசர்",
    grocery_voucher: "கிராசரி வவுசர்",
    remittance_discount: "ரிமிட்டன்ஸ் தள்ளுபடி",
    free_calls: "இலவச சர்வதேச அழைப்புகள்",
    lucky_draw: "லகி டிரா பரிசு",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
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
    health_medicine: "ఆరోగ్యము లేదా మందులు",
    entertainment: "వినోదం",
    debt_loan: "అప్పు చెల్లింపు",
    convenience_store: "కన్వీనియన్స్ స్టోర్",
    dorms: "డార్మ్స్",
    retail_shops: "రిటైల్ షాపులు",
    agent: "ఏజెంట్",
    roadshows: "రోడ్ షోల్స్",
    app: "యాప్",
    atms_axs: "ATM / AXS",
    self_serve: "స్వయంగా సేవ",
    in_person: "నేరుగా",
    dormitory: "డార్మిటరీ / గది",
    little_india: "లిటిల్ ఇండియా",
    geylang: "గేలాంగ్",
    mustafa: "ముస్థఫా సెంటర్",
    parks_beaches: "పార్కులు లేదా బీచ్‌లు",
    malls: "షాపింగ్ మాల్స్",
    religious_place: "గుడి / మసీదు / చర్చి",
    friends_place: "స్నేహితుల ఇల్లు",
    sports_facility: "క్రీడా సదుపాయాలు",
    food: "ఆహారం",
    mobile_bills: "మొబైల్ బిల్లులు",
    other_bills: "ఇతర బిల్లులు",
    remittance: "ఇంటికి పంపే డబ్బు",
    shopping: "షాపింగ్",
    mobile_data: "అదనపు మొబైల్ డేటా",
    recharge_discount: "రిచార్జ్ డిస్కౌంట్",
    cash_voucher: "నగదు వోచర్",
    grocery_voucher: "గ్రోసరీ వోచర్",
    remittance_discount: "రీమిటెన్స్ డిస్కౌంట్",
    free_calls: "ఉచిత విదేశీ కాల్స్",
    lucky_draw: "లక్కీ డ్రా బహుమతి",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
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
    debt_loan: "कर्ज भरणे",
    convenience_store: "कन्व्हिनियंस स्टोअर",
    dorms: "डॉर्मिटरी / रूम",
    retail_shops: "खुदरा दुकाने",
    agent: "एजंट",
    roadshows: "रोडशो",
    app: "अ‍ॅप",
    atms_axs: "ATM / AXS",
    self_serve: "सेल्फ-सर्व्ह",
    in_person: "व्यक्तीगतपणे",
    dormitory: "डॉर्मिटरी / खोली",
    little_india: "लिटिल इंडिया",
    geylang: "गेयलैंग",
    mustafa: "मुस्तफा सेंटर",
    parks_beaches: "उद्यान किंवा समुद्रकिनारा",
    malls: "शॉपिंग मॉल",
    religious_place: "मंदिर / मशिद / चर्च",
    friends_place: "मित्रांचे घर",
    sports_facility: "क्रीडा सुविधा",
    food: "अन्न",
    mobile_bills: "मोबाईल बिल",
    other_bills: "इतर बिल",
    remittance: "पैसे पाठवणे",
    shopping: "खरेदी",
    mobile_data: "अतिरिक्त मोबाइल डेटा",
    recharge_discount: "रीचार्ज सूट",
    cash_voucher: "कॅश वाउचर",
    grocery_voucher: "किराणा वाउचर",
    remittance_discount: "रेमिटन्स सूट",
    free_calls: "मुफ्त आंतरराष्ट्रीय कॉल",
    lucky_draw: "लकी ड्रॉ बक्षीस",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  or: {
    convenience_store: "ସୁବିଧା ଦୋକାନ",
    dorms: "ଡର୍ମସ୍",
    retail_shops: "ରିଟେଲ୍ ଦୋକାନ",
    agent: "ଏଜେଣ୍ଟ",
    roadshows: "ରୋଡଶୋ",
    app: "ଆପ୍",
    atms_axs: "ATM / AXS",
    self_serve: "ସ୍ୱୟଂ-ସେବା",
    in_person: "ସାକ୍ଷାତ",
    dormitory: "ଡର୍ମିଟରୀ / ଘର",
    little_india: "ଲିଟିଲ୍ ଇଣ୍ଡିଆ",
    geylang: "ଗେଲାଙ୍ଗ",
    mustafa: "ମୁସ୍ତାଫା ସେଣ୍ଟର",
    parks_beaches: "ପାର୍କ କିମ୍ବା ସମୁଦ୍ରତଟ",
    malls: "ଶପିଂ ମଲ୍",
    religious_place: "ମନ୍ଦିର / ମସଜିଦ / ଚର୍ଚ୍ଚ",
    friends_place: "ମିତ୍ରଙ୍କ ଘର",
    sports_facility: "ଖେଳ ସୁବିଧା",
    other: "ଅନ୍ୟ",
    food: "ଖାଦ୍ୟ",
    transport: "ପରିବହନ",
    mobile_bills: "ମୋବାଇଲ୍ ବିଲ୍",
    other_bills: "ଅନ୍ୟ ବିଲ୍",
    remittance: "ଘରକୁ ଟଙ୍କା ପଠାଇବା",
    health_medicine: "ସ୍ୱାସ୍ଥ୍ୟ କିମ୍ବା ଔଷଧ",
    entertainment: "ବିନୋଦନ",
    shopping: "କ୍ରୟକରଣ",
    debt_loan: "ଋଣ ପରିଶୋଧନ",
    mobile_data: "ଅତିରିକ୍ତ ମୋବାଇଲ୍ ଡେଟା",
    recharge_discount: "ରିଚାର୍ଜ ଛାଡ଼",
    cash_voucher: "କ୍ୟାସ ପଚାର",
    grocery_voucher: "କ୍ରୋసେରୀ ପଚାର",
    remittance_discount: "ରିମିଟାନ୍ସ ଛାଡ଼",
    free_calls: "ମୁକ୍ତ ଜାତୀୟ କଲ୍",
    lucky_draw: "ଲକି ଡ୍ର ଇନାମ",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  bho: {
    convenience_store: "कन्वीनियन्स स्टोअर",
    dorms: "छात्रावास",
    retail_shops: "खुदरा दुकान",
    agent: "एजेंट",
    roadshows: "रोडशो",
    app: "ऐप",
    atms_axs: "ATM / AXS",
    self_serve: "सेल्फ-सर्व",
    in_person: "सामने",
    dormitory: "डॉर्मिटरी / कमरा",
    little_india: "Little India",
    geylang: "गेयलैंग",
    mustafa: "मुस्तफा सेंटर",
    parks_beaches: "पार्क या समुद्र तट",
    malls: "शॉपिंग मॉल",
    religious_place: "मंदिर / मस्जिद / चर्च",
    friends_place: "मितानन के घर",
    sports_facility: "खेल सुविधा",
    other: "अन्य",
    food: "खाद्य",
    transport: "यातायात",
    mobile_bills: "मोबाइल बिल",
    other_bills: "अन्य बिल",
    remittance: "घर भेजे के पैसा",
    health_medicine: "सेहत या दवाई",
    entertainment: "मनोरंजन",
    shopping: "खरीदारी",
    debt_loan: "कर्ज चुकाव",
    mobile_data: "अतिरिक्त मोबाइल डाटा",
    recharge_discount: "रिचार्ज छूट",
    cash_voucher: "कैश वाउचर",
    grocery_voucher: "किराना वाउचर",
    remittance_discount: "रिमिटेंस छूट",
    free_calls: "मुफ्त विदेशी कॉल",
    lucky_draw: "लकी ड्रॉ पुरस्कार",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  ml: {
    convenience_store: "സൗകര്യ കട",
    dorms: "ഡോംസ്",
    retail_shops: "റീട്ടെയിൽ കടകൾ",
    agent: "ഏജന്റ്",
    roadshows: "റോഡ്‌ഷോകൾ",
    app: "ആപ്പ്",
    atms_axs: "ATM / AXS",
    self_serve: "സ്വയം സേവനം",
    in_person: "നേരിട്ട്",
    dormitory: "ഡോർമിറ്ററി / മുറി",
    little_india: "ലിറ്റിൽ ഇന്ത്യ",
    geylang: "ഗെയ്‌ലാങ്",
    mustafa: "മുസ്തഫ സെൻറർ",
    parks_beaches: "പാർക്കുകൾ അല്ലെങ്കിൽ കടൽത്തീരം",
    malls: "ഷോപ്പിംഗ് മാളുകൾ",
    religious_place: "ദേവാലയം / മസ്ജിദ് / ചർച്ച്",
    friends_place: "സുഹൃത്തുകളുടെ വീട്",
    sports_facility: "കായിക സൗകര്യം",
    other: "മറ്റുള്ളവ",
    food: "ഭക്ഷണം",
    transport: "ഗതാഗതം",
    mobile_bills: "മൊബൈൽ ബില്ലുകൾ",
    other_bills: "മറ്റ് ബില്ലുകൾ",
    remittance: "പണം വീട്ടിലേക്ക് അയക്കൽ",
    health_medicine: "ആരോഗ്യത്തിലും മരുന്നിലുമുള്ള ചെലവ്",
    entertainment: "വിനോദം",
    shopping: "ഷോപ്പിംഗ്",
    debt_loan: "കടം അടയ്ക്കൽ",
    mobile_data: "അധിക മൊബൈൽ ഡാറ്റ",
    recharge_discount: "റീചാർജ് ഡിസ്‌കൗണ്ട്",
    cash_voucher: "കാഷ് വോച്ചർ",
    grocery_voucher: "ഗ്രോസ്സറി വോച്ചർ",
    remittance_discount: "റിമിറ്റൻസ് ഡിസ്‌കൗണ്ട്",
    free_calls: "ഫ്രീ അന്താരാഷ്ട്ര കോൾസ്",
    lucky_draw: "ലക്കീ ഡ്രോ സമ്മാനം",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
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
    ,
    convenience_store: "Toko serba ada",
    dorms: "Asrama",
    retail_shops: "Toko ritel",
    agent: "Agen",
    roadshows: "Roadshow",
    app: "Aplikasi",
    atms_axs: "ATM / AXS",
    self_serve: "Layanan mandiri",
    in_person: "Langsung",
    dormitory: "Asrama / kamar",
    little_india: "Little India",
    geylang: "Geylang",
    mustafa: "Mustafa Centre",
    parks_beaches: "Taman atau pantai",
    malls: "Pusat perbelanjaan",
    religious_place: "Kuil / masjid / gereja",
    friends_place: "Rumah teman",
    sports_facility: "Fasilitas olahraga",
    food: "Makanan",
    mobile_bills: "Tagihan ponsel",
    other_bills: "Tagihan lain",
    remittance: "Mengirim uang pulang",
    shopping: "Belanja",
    mobile_data: "Data seluler tambahan",
    recharge_discount: "Diskon isi ulang",
    cash_voucher: "Voucher tunai",
    grocery_voucher: "Voucher toko",
    remittance_discount: "Diskon remitansi",
    free_calls: "Panggilan luar negeri gratis",
    lucky_draw: "Hadiah undian berhadiah",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  vi: {
    convenience_store: "Cửa hàng tiện lợi",
    dorms: "Ký túc xá",
    retail_shops: "Cửa hàng bán lẻ",
    agent: "Đại lý",
    roadshows: "Roadshow",
    app: "Ứng dụng",
    atms_axs: "ATM / AXS",
    self_serve: "Tự phục vụ",
    in_person: "Trực tiếp",
    dormitory: "Ký túc xá",
    little_india: "Little India",
    geylang: "Geylang",
    mustafa: "Mustafa Centre",
    parks_beaches: "Công viên hoặc bãi biển",
    malls: "Trung tâm mua sắm",
    religious_place: "Đền / đền thờ / nhà thờ",
    friends_place: "Nhà bạn bè",
    sports_facility: "Cơ sở thể thao",
    other: "Khác",
    food: "Thức ăn",
    transport: "Vận chuyển",
    mobile_bills: "Hóa đơn di động",
    other_bills: "Hóa đơn khác",
    remittance: "Gửi tiền về nhà",
    health_medicine: "Sức khỏe hoặc thuốc",
    entertainment: "Giải trí",
    shopping: "Mua sắm",
    debt_loan: "Trả nợ",
    mobile_data: "Dữ liệu di động thêm",
    recharge_discount: "Giảm giá nạp tiền",
    cash_voucher: "Phiếu mua hàng tiền mặt",
    grocery_voucher: "Phiếu tạp hóa",
    remittance_discount: "Giảm phí chuyển tiền",
    free_calls: "Gọi quốc tế miễn phí",
    lucky_draw: "Giải thưởng quay thưởng may mắn",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  th: {
    convenience_store: "ร้านสะดวกซื้อ",
    dorms: "หอพัก",
    retail_shops: "ร้านค้าปลีก",
    agent: "เอเจนต์",
    roadshows: "โรดโชว์",
    app: "แอป",
    atms_axs: "ATM / AXS",
    self_serve: "บริการตนเอง",
    in_person: "พบหน้า",
    dormitory: "หอพัก",
    little_india: "ลิตเติ้ล อินเดีย",
    geylang: "เกลัง",
    mustafa: "มุสตาฟา เซ็นเตอร์",
    parks_beaches: "สวนสาธารณะหรือชายหาด",
    malls: "ศูนย์การค้า",
    religious_place: "วัด / มัสยิด / โบสถ์",
    friends_place: "บ้านเพื่อน",
    sports_facility: "สถานที่กีฬา",
    other: "อื่นๆ",
    food: "อาหาร",
    transport: "การขนส่ง",
    mobile_bills: "บิลมือถือ",
    other_bills: "บิลอื่นๆ",
    remittance: "ส่งเงินกลับบ้าน",
    health_medicine: "สุขภาพหรือยา",
    entertainment: "ความบันเทิง",
    shopping: "ช้อปปิ้ง",
    debt_loan: "ชำระหนี้",
    mobile_data: "แพ็กเกจอินเทอร์เน็ตเพิ่มเติม",
    recharge_discount: "ส่วนลดเติมเงิน",
    cash_voucher: "บัตรเงินสด",
    grocery_voucher: "บัตรซื้อของ",
    remittance_discount: "ส่วนลดโอนเงิน",
    free_calls: "โทรต่างประเทศฟรี",
    lucky_draw: "จับรางวัล",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  my: {
    convenience_store: "ဆိုင်အဆင်ပြေ",
    dorms: "တည်းခိုခန်း",
    retail_shops: "လက်လီဆိုင်",
    agent: "ကိုယ်စားလှယ်",
    roadshows: "ရုပ်ရှင်ပွဲ",
    app: "အက်ပလီကေးရှင်း",
    atms_axs: "ATM / AXS",
    self_serve: "ကိုယ်ပိုင်ဝန်ဆောင်မှု",
    in_person: "ကိုယ်တိုင်",
    dormitory: "တည်းခိုခန်း",
    little_india: "Little India",
    geylang: "ဂီးလာင်း",
    mustafa: "Mustafa Centre",
    parks_beaches: "ဥယျာဉ် သို့မဟုတ် သဲကန်",
    malls: "စျေးဝယ်စင်တာများ",
    religious_place: "ဘုရားကျောင်း / မတ်စျစ် / ဘုရားပန်းတိုင်",
    friends_place: "မိတ်ဆွေ့အိမ်",
    sports_facility: "အားကစားဆိုင်ရာအဆောက်အအုံ",
    other: "အခြား",
    food: "အစာ",
    transport: "စီးနင်းရေး",
    mobile_bills: "မိုဘိုင်းဘီလ်",
    other_bills: "အခြားဘီလ်များ",
    remittance: "ငွေပြန်ပို့ခြင်း",
    health_medicine: "ကျန်းမာရေး သို့မဟုတ် ဆေး",
    entertainment: "ဖျော်ဖြေမှု",
    shopping: "စျေးဝယ်ခြင်း",
    debt_loan: "ချေးငွေစာရင်း",
    mobile_data: "အပိုမိုဘိုင်းဒေတာ",
    recharge_discount: "ပြန်လည်သွင်းစျေးလျော့",
    cash_voucher: "ငွေခွက်လက်မှတ်",
    grocery_voucher: "ဆိုင်ပစ္စည်း လက်မှတ်",
    remittance_discount: "ငွေလွှဲလျော့စျေး",
    free_calls: "အခမဲ့ နိုင်ငံခြားခေါ်ဆိုမှု",
    lucky_draw: "ကံစမ်းဆု",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  ms: {
    convenience_store: "Kedai serbaneka",
    dorms: "Asrama",
    retail_shops: "Kedai runcit",
    agent: "Ejen",
    roadshows: "Roadshow",
    app: "Aplikasi",
    atms_axs: "ATM / AXS",
    self_serve: "Layan diri",
    in_person: "Bersemuka",
    dormitory: "Asrama",
    little_india: "Little India",
    geylang: "Geylang",
    mustafa: "Mustafa Centre",
    parks_beaches: "Taman atau pantai",
    malls: "Pusat beli-belah",
    religious_place: "Kuil / masjid / gereja",
    friends_place: "Rumah kawan",
    sports_facility: "Kemudahan sukan",
    other: "Lain-lain",
    food: "Makanan",
    transport: "Pengangkutan",
    mobile_bills: "Bil mudah alih",
    other_bills: "Bil lain",
    remittance: "Mengirim wang pulang",
    health_medicine: "Kesihatan atau ubat",
    entertainment: "Hiburan",
    shopping: "Membeli-belah",
    debt_loan: "Bayaran hutang",
    mobile_data: "Data mudah alih tambahan",
    recharge_discount: "Diskaun tambah nilai",
    cash_voucher: "Baucar tunai",
    grocery_voucher: "Baucar runcit",
    remittance_discount: "Diskaun penghantaran wang",
    free_calls: "Panggilan antarabangsa percuma",
    lucky_draw: "Cabutan bertuah",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },
  tl: {
    convenience_store: "Tindahan ng kaginhawaan",
    dorms: "Dorms",
    retail_shops: "Tindahan",
    agent: "Ahente",
    roadshows: "Roadshow",
    app: "App",
    atms_axs: "ATM / AXS",
    self_serve: "Self-serve",
    in_person: "Personal",
    dormitory: "Dormitoryo / kwarto",
    little_india: "Little India",
    geylang: "Geylang",
    mustafa: "Mustafa Centre",
    parks_beaches: "Mga parke o baybayin",
    malls: "Mall",
    religious_place: "Templo / mosque / simbahan",
    friends_place: "Lugar ng kaibigan",
    sports_facility: "Pasilidad pang-sports",
    other: "Iba pa",
    food: "Pagkain",
    transport: "Transportasyon",
    mobile_bills: "Mga bill ng mobile",
    other_bills: "Ibang bayarin",
    remittance: "Pagpapadala ng pera sa bahay",
    health_medicine: "Kalusugan o gamot",
    entertainment: "Libangan",
    shopping: "Pamimili",
    debt_loan: "Pagbabayad ng utang",
    mobile_data: "Karagdagang mobile data",
    recharge_discount: "Diskuwento sa recharge",
    cash_voucher: "Cash voucher",
    grocery_voucher: "Grocery voucher",
    remittance_discount: "Diskuwento sa remittance",
    free_calls: "Libreng tawag sa ibang bansa",
    lucky_draw: "Lucky draw prize",
    facebook_messenger: "Facebook Messenger",
    telegram: "Telegram",
    wechat: "WeChat",
    imo: "imo",
    viber: "Viber",
    line: "LINE",
    regular_sms: "SMS",
  },

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
  return (
    (localizedOptions[state.language] && localizedOptions[state.language][value]) ||
    (translations[state.language] && translations[state.language][value]) ||
    englishLabel
  );
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
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow) eyebrow.textContent = 'Circles.Life';
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
