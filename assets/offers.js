/* The 17 October offers, shared by the Tourism pages and the Destinations section.
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
    none: { en: [], ar: [] }
  };

  var CHINA  = { en: "China",     ar: "الصين" };
  var MALAY  = { en: "Malaysia",  ar: "ماليزيا" };
  var MALD   = { en: "Maldives",  ar: "المالديف" };
  var SING   = { en: "Singapore", ar: "سنغافورة" };
  var SRI    = { en: "Sri Lanka", ar: "سريلانكا" };
  var THAI   = { en: "Thailand",  ar: "تايلاند" };
  var VIET   = { en: "Vietnam",   ar: "فيتنام" };

  function o(id, kind, country, title, nights, price, route, inc){
    return {
      id: id, kind: kind, country: country, title: title,
      nights: nights, price: price, route: route, includes: inc
    };
  }

  var SH_GZ = { en: "Shanghai 5 · Guangzhou 3", ar: "شنغهاي 5 · قوانزو 3" };
  var KL    = { en: "Selangor 2 · Langkawi 3 · Kuala Lumpur 3", ar: "سيلانجور 2 · لنكاوي 3 · كوالالمبور 3" };
  var NORTH_DN = { en: "Hanoi 2 · Da Nang 3 · Sapa 3", ar: "هانوي 2 · دا نانغ 3 · سابا 3" };
  var NORTH_PQ = { en: "Hanoi 4 · Phu Quoc 4", ar: "هانوي 4 · فوكوك 4" };

  window.MOT_KIND = KIND;
  window.MOT_OFFERS = [
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
})();
