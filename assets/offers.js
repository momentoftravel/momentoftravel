/* The October offers (17) and November offers (19), shared by the Tourism pages and the Destinations section.
   To change a price, number of nights or an included service, edit it here once and
   every page (English and Arabic) updates. */
(function(){
  var KIND = {
    family:    { en: "Family",    ar: "عائلي" },
    honeymoon: { en: "Honeymoon", ar: "شهر عسل" },
    couple:    { en: "For two",   ar: "شخصان" }
  };

  var INC = {
    breakfast: {
      en: ["Hotels with breakfast", "Welcome with flowers on arrival", "SIM cards", "Reception & farewell"],
      ar: ["فنادق وتشمل الإفطار", "استقبال بالورود", "شرائح اتصال", "استقبال وتوديع"]
    },
    stars4: {
      en: ["4-star hotels", "Welcome with flowers on arrival", "SIM cards", "Reception & farewell"],
      ar: ["فنادق ٤ نجوم", "استقبال بالورود", "شرائح اتصال", "استقبال وتوديع"]
    },
    myHoney: {
      en: ["Welcome with flowers on arrival", "SIM cards", "Reception & farewell", "Honeymoon room decoration"],
      ar: ["استقبال بالورود", "شرائح اتصال", "استقبال وتوديع", "تزيين شهر عسل"]
    },
    thHoney: {
      en: ["Hotels with breakfast", "Welcome with flowers on arrival", "SIM cards", "Reception & farewell", "Honeymoon room decoration"],
      ar: ["فنادق شاملة الإفطار", "استقبال بالورود", "شرائح اتصال", "استقبال وتوديع", "تزيين شهر عسل"]
    },
    chinaTwo: {
      en: ["Welcome with flowers on arrival", "Free internet throughout the trip"],
      ar: ["استقبال بالورود", "إنترنت مجاني طوال الرحلة"]
    },
    nov: {
      en: ["Hotels with breakfast", "Welcome with flowers on arrival", "Reception & farewell", "SIM cards & internet"],
      ar: ["فنادق وإفطار", "استقبال بالورد", "استقبال وتوديع", "شرائح اتصال وإنترنت"]
    },
    none: { en: [], ar: [] }
  };

  var CHINA  = { en: "China",     ar: "الصين" };
  var MALAY  = { en: "Malaysia",  ar: "ماليزيا" };
  var MALD   = { en: "Maldives",  ar: "المالديف" };
  var SING   = { en: "Singapore", ar: "سنغافورة" };
  var SRI    = { en: "Sri Lanka", ar: "سريلانكا" };
  var THAI   = { en: "Thailand",  ar: "تايلاند" };
  var VIET   = { en: "Vietnam",   ar: "فيتنام" };
  var INDO   = { en: "Indonesia", ar: "إندونيسيا" };

  /* Small picture shown on each Tourism card (October offers use one picture per country). */
  var COUNTRY_IMG = { "China": "c-china", "Malaysia": "c-malaysia", "Maldives": "c-maldives", "Singapore": "c-singapore", "Sri Lanka": "c-srilanka", "Thailand": "c-thailand", "Vietnam": "c-vietnam" };

  function o(id, kind, country, title, nights, price, route, inc, extra){
    extra = extra || {};
    return {
      id: id, kind: kind, country: country, title: title,
      nights: nights, price: price, route: route, includes: inc,
      month: extra.month || "oct", stars: extra.stars || 0,
      img: "photos/offers/" + (extra.img || COUNTRY_IMG[country.en]) + ".jpg"
    };
  }

  /* November offers: id, kind, country, title, nights, price (SAR per person), route, includes, {stars, img} */
  function n(num, id, kind, country, nights, price, route, stars){
    return o(id, kind, country, country, nights, price, route, INC.nov,
      { month: "nov", stars: stars, img: "n" + (num < 10 ? "0" : "") + num });
  }
  var HAN_SAPA_DN = { en: "Hanoi 2 · Sapa 3 · Da Nang 3", ar: "هانوي 2 · سابا 3 · دا نانغ 3" };
  var HAN_PQ      = { en: "Hanoi 2 · Phu Quoc 3 · Hanoi 2", ar: "هانوي 2 · فو كوك 3 · هانوي 2" };
  var KL_NOV      = { en: "Selangor 2 · Langkawi 3 · Kuala Lumpur 3", ar: "سيلانجور 2 · لنكاوي 3 · كوالالمبور 3" };
  var TH_NOV      = { en: "Bangkok 2 · Phuket 4 · Bangkok 2", ar: "بانكوك 2 · بوكيت 4 · بانكوك 2" };
  var ID_NOV      = { en: "Puncak 3 · Bali 3 · Jakarta 2", ar: "بونشاك 3 · بالي 3 · جاكرتا 2" };
  var SL_NOV      = { en: "Negombo 1 · Kandy 3 · Colombo 3", ar: "نقمبو 1 · كاندي 3 · كولومبو 3" };


  var SH_GZ = { en: "Shanghai 5 · Guangzhou 3", ar: "شنغهاي 5 · قوانزو 3" };
  var KL    = { en: "Selangor 2 · Langkawi 3 · Kuala Lumpur 3", ar: "سيلانجور 2 · لنكاوي 3 · كوالالمبور 3" };
  var NORTH_DN = { en: "Hanoi 2 · Da Nang 3 · Sapa 3", ar: "هانوي 2 · دا نانغ 3 · سابا 3" };
  var NORTH_PQ = { en: "Hanoi 4 · Phu Quoc 4", ar: "هانوي 4 · فوكوك 4" };

  window.MOT_KIND = KIND;
  var OCT_OFFERS = [
    o("china-2288", "couple", CHINA, CHINA, 4, 2288, { en: "Shanghai 4", ar: "شنغهاي 4" }, INC.chinaTwo),
    o("china-family", "family", CHINA, CHINA, 8, 4225, SH_GZ, INC.breakfast),
    o("china-fortwo", "couple", CHINA, CHINA, 8, 5296, SH_GZ, INC.breakfast),
    o("malaysia", "honeymoon", MALAY, MALAY, 8, 2974, KL, INC.myHoney),
    o("malaysia-family", "family", MALAY, MALAY, 8, 2625, KL, INC.breakfast),
    o("maldives-family", "family", MALD, MALD, 4, 3214, { en: "Malé 4", ar: "مالي 4" }, INC.none),
    o("maldives-honeymoon", "honeymoon", MALD, MALD, 4, 3314, { en: "Malé 4", ar: "مالي 4" }, INC.none),
    o("singapore", "family", SING, SING, 4, 3036, { en: "Singapore 4", ar: "سنغافورة 4" }, INC.stars4),
    o("singapore-honeymoon", "honeymoon", SING, SING, 4, 3910, { en: "Singapore 4", ar: "سنغافورة 4" }, INC.stars4),
    o("srilanka", "family", SRI, SRI, 7, 2089, { en: "Negombo · Kandy · Bentota · Colombo", ar: "نقمبو · كاندي · بنتوتة · كولومبو" }, INC.stars4),
    o("srilanka-honeymoon", "honeymoon", SRI, SRI, 7, 2315, { en: "Negombo 1 · Kandy 2 · Bentota 2 · Colombo 2", ar: "نقمبو 1 · كاندي 2 · بنتوتة 2 · كولومبو 2" }, INC.breakfast),
    o("thailand-family", "family", THAI, THAI, 8, 2486, { en: "Bangkok 3 · Phuket Island 5", ar: "بانكوك 3 · جزيرة بوكيت 5" }, INC.breakfast),
    o("thailand-honeymoon", "honeymoon", THAI, THAI, 8, 2883, { en: "Bangkok 5 · Phuket Island 3", ar: "بانكوك 5 · جزيرة بوكيت 3" }, INC.thHoney),
    o("vietnam-2804", "family", VIET, { en: "Vietnam: North with Da Nang", ar: "فيتنام: شمال مع دانانج" }, 8, 2804, NORTH_DN, INC.breakfast),
    o("vietnam-3000", "honeymoon", VIET, { en: "Vietnam: North with Da Nang", ar: "فيتنام: شمال مع دانانج" }, 8, 3000, NORTH_DN, INC.breakfast),
    o("vietnam-family-phuquoc", "family", VIET, { en: "Vietnam: North with Phu Quoc", ar: "فيتنام: شمال مع فوكوك" }, 8, 2405, NORTH_PQ, INC.stars4),
    o("vietnam-honeymoon-phuquoc", "honeymoon", VIET, { en: "Vietnam: North with Phu Quoc", ar: "فيتنام: شمال مع فوكوك" }, 8, 2837, NORTH_PQ, INC.stars4)
  ];

  var NOV_OFFERS = [
    n(1,  "nov-vietnam-honeymoon-1",  "honeymoon", VIET, 8, 2945, HAN_SAPA_DN, 4),
    n(2,  "nov-vietnam-honeymoon-2",  "honeymoon", VIET, 8, 3900, HAN_SAPA_DN, 5),
    n(3,  "nov-vietnam-family-1",     "family",    VIET, 8, 2457, HAN_SAPA_DN, 4),
    n(12, "nov-vietnam-family-phuquoc","family",   VIET, 8, 3309, HAN_PQ, 4),
    n(4,  "nov-malaysia-honeymoon",   "honeymoon", MALAY, 8, 3451, KL_NOV, 4),
    n(5,  "nov-malaysia-family",      "family",    MALAY, 8, 2739, KL_NOV, 4),
    n(6,  "nov-thailand-honeymoon-1", "honeymoon", THAI, 8, 3330, TH_NOV, 4),
    n(7,  "nov-thailand-honeymoon-2", "honeymoon", THAI, 8, 4218, TH_NOV, 5),
    n(8,  "nov-thailand-family",      "family",    THAI, 8, 2857, TH_NOV, 4),
    n(9,  "nov-indonesia-honeymoon-1","honeymoon", INDO, 8, 3056, ID_NOV, 4),
    n(10, "nov-indonesia-honeymoon-2","honeymoon", INDO, 8, 3562, ID_NOV, 5),
    n(11, "nov-indonesia-family",     "family",    INDO, 8, 2840, ID_NOV, 4),
    n(13, "nov-srilanka-honeymoon",   "honeymoon", SRI, 7, 2534, SL_NOV, 4),
    n(14, "nov-singapore-honeymoon",  "honeymoon", SING, 4, 3488, { en: "Singapore 4", ar: "سنغافورة 4" }, 4),
    n(15, "nov-maldives-honeymoon",   "honeymoon", MALD, 4, 3356, { en: "Malé 4", ar: "مالي 4" }, 4),
    n(16, "nov-maldives-family",      "family",    MALD, 4, 3256, { en: "Malé 4", ar: "مالي 4" }, 4),
    n(17, "nov-china-two-shanghai",   "couple",    CHINA, 4, 2604, { en: "Shanghai 4", ar: "شنغهاي 4" }, 4),
    n(18, "nov-china-two",            "couple",    CHINA, 8, 5553, { en: "Shanghai 4 · Beijing 4", ar: "شنغهاي 4 · بكين 4" }, 4),
    n(19, "nov-china-family",         "family",    CHINA, 8, 3938, { en: "Shanghai 4 · Beijing 4", ar: "شنغهاي 4 · بكين 4" }, 4)
  ];

  window.MOT_OFFERS_OCT = OCT_OFFERS;   /* used by the Home page (unchanged) */
  window.MOT_OFFERS_NOV = NOV_OFFERS;
  /* Tourism pages: 5-star hotel offers first, then the other November offers, then October */
  var FIVE = NOV_OFFERS.filter(function(x){ return x.stars === 5; });
  var REST = NOV_OFFERS.filter(function(x){ return x.stars !== 5; });
  window.MOT_OFFERS = FIVE.concat(REST, OCT_OFFERS);
})();
