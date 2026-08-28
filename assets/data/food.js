/* ============================================================
   food.js — the full meal directory for all seven days,
   plus the trip's budget breakdown.
   ============================================================ */
window.TRIP = window.TRIP || {};

window.TRIP.foodDirectory = [
  { day: 1, date: { en: "Sat 5 Sep", zh: "9/5 周六" }, meal: "Breakfast",
    name: { en: "Naka Brunch, Linkou 拿靠早午餐", zh: "拿靠早午餐（林口）" },
    rating: "≈4.1", cost: 150,
    maps: "https://www.google.com/maps/search/?api=1&query=%E6%8B%BF%E9%9D%A0%E6%97%A9%E5%8D%88%E9%A4%90%20%E5%BF%A0%E5%AD%9D%E4%B8%80%E8%B7%AF9%E8%99%9F%E6%9E%97%E5%8F%A3",
    known: { en: "Linkou's beloved local brunch chain — crisp egg crepes, radish cake topped with a fried egg. Call ahead for a table of twelve.",
             zh: "林口在地人气早午餐连锁——香脆蛋饼、萝卜糕配煎蛋。十二人建议先打电话订位。" } },

  { day: 1, date: { en: "Sat 5 Sep", zh: "9/5 周六" }, meal: "Dinner",
    name: { en: "Ningxia Night Market", zh: "宁夏夜市" },
    rating: "4.2", cost: 250,
    maps: "https://www.google.com/maps/search/?api=1&query=寧夏夜市",
    known: { en: "Sizzling oyster omelettes, taro balls and croquettes, clam soup, pork liver soup — several stalls carry a Bib Gourmand nod.",
             zh: "现煎蚵仔煎、芋圆芋饼、蛤蜊汤、猪肝汤——数摊曾获必比登推荐。" } },

  { day: 2, date: { en: "Sun 6 Sep", zh: "9/6 周日" }, meal: "Lunch",
    name: { en: "Mountain Tea House, Maokong", zh: "猫空山景茶馆" },
    rating: "4.5", cost: 350,
    maps: "https://www.google.com/maps/search/?api=1&query=貓空茶館",
    known: { en: "Dishes cooked with tea leaves, set meals sized for six, and a view straight to Taipei 101. Book ahead for twelve — Sundays fill fast.",
             zh: "以茶入菜，套餐以六人份为单位，能远眺101。周日十二人务必提前订位。" } },

  { day: 2, date: { en: "Sun 6 Sep", zh: "9/6 周日" }, meal: "Alt lunch",
    name: { en: "Maokong Tea House (lighter)", zh: "猫空茶屋（轻食）" },
    rating: "4.8", cost: 150,
    maps: "https://www.google.com/maps/search/?api=1&query=貓空茶屋",
    known: { en: "Tieguanyin ice cream, boba, and light snacks — the easy option when nobody's in the mood for a full set meal.",
             zh: "铁观音冰淇淋、珍珠奶茶与点心——不想吃合菜时的轻食选择。" } },

  { day: 2, date: { en: "Sun 6 Sep", zh: "9/6 周日" }, meal: "Dinner",
    name: { en: "Raohe Street Night Market", zh: "饶河街夜市" },
    rating: "4.3", cost: 300,
    maps: "https://www.google.com/maps/search/?api=1&query=饒河街觀光夜市",
    known: { en: "Michelin-listed pepper buns right at the temple gate, medicinal rib soup, and endless variety down the lane. Songshan MRT, exit 5.",
             zh: "庙口的米其林推荐胡椒饼、药炖排骨，一路吃不完。捷运松山站5号出口。" } },

  { day: 6, date: { en: "Thu 10 Sep", zh: "9/10 周四" }, meal: "Lunch",
    name: { en: "Hsu's flowing noodles, Shiding", zh: "石碇许家流水麵" },
    rating: "4.5", cost: 550,
    maps: "https://www.google.com/maps/search/?api=1&query=石碇許家手工麵線",
    known: { en: "DIY handmade noodles plus lunch from a bamboo trough of mountain spring water. Book the 09:30 session — closed Tuesdays. About NT$550, under-sixes free.",
             zh: "手作麵线 DIY，再从山泉竹槽捞午餐。订09:30那场——周二公休。约 NT$550，六岁以下免费。" } },

  { day: 6, date: { en: "Thu 10 Sep", zh: "9/10 周四" }, meal: "Snacks",
    name: { en: "Ximending — Ay-Chung, Lao Tian Lu, then wherever", zh: "西门町 —— 阿宗、老天禄，再随意" },
    rating: null, cost: 300,
    maps: "https://www.google.com/maps/search/?api=1&query=西門町",
    known: { en: "The van drops you here after Hsu's. Ay-Chung and Lao Tian Lu if anyone is still hungry; the farewell hotpot is 18:30, so do not make this a second lunch.",
             zh: "许家之后中巴停在这里。还有肚子再吃阿宗、老天禄；告别火锅18:30，别把这里当第二顿午餐。" } },

  { day: 3, date: { en: "Mon 7 Sep", zh: "9/7 周一" }, meal: "Lunch",
    name: { en: "Da Qancheng jar chicken, Zhuangwei 大嵌城", zh: "大嵌城甕缸鸡（壮围）" },
    rating: "4.3", cost: 380,
    maps: "https://www.google.com/maps/search/?api=1&query=大嵌城甕缸雞+壯圍鄉新南路102-6號",
    known: { en: "Walk-in countryside dining room — jar-roast chicken plus stir-fries you pick. Phone two birds at 11:00 so the kiln is ready, 03-938-7700. Cash. Eat this before Qingshui.",
             zh: "走进去的乡间餐厅——甕缸鸡加自己点的热炒。11:00打两只鸡，窑才赶得上，03-938-7700。现金。去清水地热前吃。" } },

  { day: 3, date: { en: "Mon 7 Sep", zh: "9/7 周一" }, meal: "Alt lunch — seafood",
    name: { en: "Zhuangwei Hai Zhi Wei 壯圍海之味", zh: "壮围海之味" },
    rating: "≈4.0", cost: 450,
    maps: "https://www.google.com/maps/search/?api=1&query=壯圍海之味+中央路二段288號",
    known: { en: "Walk-in seafood and stir-fries on the main road, about ten minutes from the park. Sashimi, clams, greens. Lunch until ~14:00; closed Wednesday. 03-938-8616. Weekday is kinder than a weekend queue.",
             zh: "主路上走进去的海鲜热炒，离园区大约十分钟。生鱼片、蛤蜊、青菜。午餐约到14:00；周三公休。03-938-8616。平日比周末好进。" } },

  { day: 3, date: { en: "Mon 7 Sep", zh: "9/7 周一" }, meal: "Snack",
    name: { en: "Geothermal eggs and corn, Qingshui", zh: "清水地热蛋和玉米" },
    rating: "4.4", cost: 80,
    maps: "https://www.google.com/maps/search/?api=1&query=清水地熱公園+宜蘭縣大同鄉三星路八段501巷150號",
    known: { en: "Buy at the visitor centre, cook in a bamboo basket. Eggs eight minutes, corn twenty. Foot soak while you wait. Not a meal — lunch was in Zhuangwei.",
             zh: "游客中心买，竹篓下井。蛋八分钟，玉米二十。等的时候泡脚。不是正餐——午餐在壮围。" } },

  { day: 3, date: { en: "Mon 7 Sep", zh: "9/7 周一" }, meal: "Alt — if the tunnel is out",
    name: { en: "Stay in Taipei — indoor list", zh: "留台北 —— 室内清单" },
    rating: null, cost: 400,
    maps: "https://www.google.com/maps/search/?api=1&query=華山1914",
    known: { en: "Only if a named typhoon closes the tunnel. Do not send twelve people south instead. Use the weather page indoor list.",
             zh: "只有命名台风封隧道才走这条。不要改把十二人送去南部。用天气页的室内清单。" } },

  { day: 4, date: { en: "Tue 8 Sep", zh: "9/8 周二" }, meal: "Breakfast",
    name: { en: "Fu Hang Soy Milk 阜杭豆漿", zh: "阜杭豆浆" },
    rating: "4.1", cost: 120,
    maps: "https://www.google.com/maps/search/?api=1&query=阜杭豆漿",
    known: { en: "Savoury soy milk, thick shaobing, fresh-fried youtiao — the queue is legendary, so aim for 08:00. <b>Closed Mondays</b> (today's Tuesday, so no problem).",
             zh: "咸豆浆、厚烧饼、现炸油条——排队出了名，八点前到最好。<b>周一公休</b>（今天周二，没问题）。" } },

  { day: 4, date: { en: "Tue 8 Sep", zh: "9/8 周二" }, meal: "Lunch",
    name: { en: "Liou Gou Chicken, Shifen", zh: "刘工鸡翅包饭（十分）" },
    rating: "4.1", cost: 200,
    maps: "https://www.google.com/maps/search/?api=1&query=劉工雞翅包飯+十分",
    known: { en: "Deboned chicken wing stuffed with fried rice — Shifen's signature bite, eaten straight off the stick.",
             zh: "去骨鸡翅包炒饭——十分的招牌美食，串着吃最对味。" } },

  { day: 4, date: { en: "Tue 8 Sep", zh: "9/8 周二" }, meal: "Tea / dinner",
    name: { en: "Jiufen Teahouse 九份茶坊", zh: "九份茶坊" },
    rating: "4.8", cost: 400,
    maps: "https://www.google.com/maps/search/?api=1&query=九份茶坊",
    known: { en: "Interactive tea brewing — they set the pot and teach you as you go — while the mountain falls away to the sea at dusk. A quieter, more authentic pick than the touristy A-Mei. <b>Book a balcony table.</b>",
             zh: "互动式泡茶，师傅摆好茶具、手把手教你冲泡，黄昏时山海景色尽收眼底。比观光化的阿妹茶楼更有味道。<b>请预订阳台桌。</b>" } },

  { day: 5, date: { en: "Wed 9 Sep", zh: "9/9 周三" }, meal: "Lunch",
    name: { en: "Hakka restaurant, Daxi Old Street", zh: "客家餐厅（大溪老街）" },
    rating: "4.2", cost: 300,
    maps: "https://www.google.com/maps/search/?api=1&query=大溪老街+客家",
    known: { en: "Hakka set meals on Daxi Old Street — home-style stir-fries, preserved-greens pork belly, mountain fern shoots.",
             zh: "大溪老街的客家合菜——家常小炒、梅干扣肉、山苏野菜。" } },

  { day: 5, date: { en: "Wed 9 Sep", zh: "9/9 周三" }, meal: "Afternoon snack",
    name: { en: "Daxi Old Street — graze the stalls", zh: "大溪老街（边走边吃）" },
    rating: "4.2", cost: 340,
    maps: "https://www.google.com/maps/search/?api=1&query=大溪老街",
    known: { en: "Dried tofu, douhua, peanut ice cream rolls, Hakka savoury rice dumplings, popped-rice soft serve, dry noodles — no need to sit down, just pick a few stalls and keep strolling.",
             zh: "豆干、豆花、花生卷冰淇淋、客家咸汤圆、爆米香软冰淇淋、乾面——不必特地坐下，挑几摊边走边吃就好。" } },

  { day: 6, date: { en: "Thu 10 Sep", zh: "9/10 周四" }, meal: "Farewell",
    name: { en: "Wulao Hotpot 無老鍋, Zhongshan", zh: "无老锅（中山）" },
    rating: "4.3", cost: 600,
    maps: "https://www.google.com/maps/search/?api=1&query=無老鍋+中山",
    known: { en: "Polished, group-friendly hotpot with split pots for different tastes. <b>Reserve for twelve — this is the dinner that must not fall through.</b>",
             zh: "精致、适合团体聚餐，可选鸳鸯锅。<b>务必订十二人位——这顿绝不能出差错。</b>" } },

  { day: 6, date: { en: "Thu 10 Sep", zh: "9/10 周四" }, meal: "Alt farewell",
    name: { en: "Lujiba Chengdu skewer hotpot", zh: "成都串串香火锅" },
    rating: "4.9", cost: 500,
    maps: "https://www.google.com/maps/search/?api=1&query=滷集吧+串串",
    known: { en: "Chengdu-style skewer hotpot — spicier, livelier, and very highly rated.",
             zh: "成都串串香火锅，更辣更热闹，评价极高。" } },

  { day: 7, date: { en: "Fri 11 Sep", zh: "9/11 周五" }, meal: "Farewell lunch",
    name: { en: "Rice & Shine 稻舍, Dihua St", zh: "稻舍（迪化街）" },
    rating: "4.3", cost: 450,
    maps: "https://www.google.com/maps/search/?api=1&query=稻舍+迪化街",
    known: { en: "Refined Taiwanese cooking in a beautifully restored rice-merchant's shophouse — the rice itself is the point, alongside duck and shrimp rolls. <b>Reserve for twelve.</b>",
             zh: "米商老屋改造的精致台菜——招牌就是那碗白饭，另有鸭肉与虾卷。<b>请订十二人位。</b>" } },

  { day: 7, date: { en: "Fri 11 Sep", zh: "9/11 周五" }, meal: "Casual alt",
    name: { en: "Yongle Market food stalls", zh: "永乐市场小吃" },
    rating: null, cost: 200,
    maps: "https://www.google.com/maps/search/?api=1&query=永樂市場",
    known: { en: "A quick, easy fallback if the restaurant can't seat twelve, or if the morning runs long.",
             zh: "若餐厅订不到十二人位、或上午行程拖太久，这里是快速又方便的备案。" } }
];

window.TRIP.foodNote = {
  en: "Prices are rough per-person estimates, not quotes, and ratings are <b>static snapshots</b> for offline use (not live Google). <b>Reserve ahead for the whole family</b> at Hsu's, the Maokong tea house, Jiufen Teahouse, the hotpot and Rice & Shine. Many night market stalls are <b>cash only</b>. Tap <b>Maps</b> to open Google Maps / reviews on your phone.",
  zh: "价格是每人粗估，并非正式报价；评价为<b>离线用的静态快照</b>（非即时 Google）。<b>请为全家提前订位</b>：许家、猫空茶馆、九份茶坊、火锅与稻舍。夜市摊位多为<b>现金交易</b>。点<b>地图</b>可在手机打开 Google 地图／评价。"
};

/* ---- budget page copy ------------------------------------- */
window.TRIP.budgetNotes = {
  warning: {
    en: "The headline number is <b>food and activities only</b> — no flights, no hotel, no mid-bus, no EasyCard. Cash figures are the stalls, old streets and countryside kitchens that still will not take a card. Everything is a rough per-person estimate in NT$, then converted to Singapore dollars at the foot of the page so you can change money before you fly.",
    zh: "标题上的数字<b>只含餐饮与活动</b>——不含机票、住宿、中巴、悠游卡。现金数字是夜市、老街和乡下餐厅里刷不了卡的那些。全部以新台币每人粗估，页尾再换成新币，方便出发前兑换。"
  },
  included: [
    { en: "Meals as listed in each day's timeline, at rough per-person estimates",
      zh: "各日行程列出的餐食，按每人粗估价格计算" },
    { en: "Tickets and activities with a stated price — Hsu's session, Lanyang Kingdom, Qingshui baskets, Xiao Wulai, the sky lantern",
      zh: "有标价的门票与活动——许家体验、兰阳动植物王国、清水地热煮食、小乌来、天灯" },
    { en: "Likely extra meals that the hourly plan does not price — Zhongshan lunch on Day 1, a quiet dinner after Yilan, Daxi stall grazing, and the Wednesday night near the hotel",
      zh: "行程表没有标价、但几乎一定会吃的几餐——第1天中山午餐、宜兰回来后的晚饭、大溪摊位、周三晚上饭店附近" }
  ],
  excluded: [
    { en: "<b>Flights</b> — not part of this cost breakdown",
      zh: "<b>机票</b>——不计入本表" },
    { en: "<b>Hotel</b> — six nights for twelve people, and the single largest line item",
      zh: "<b>住宿</b>——十二人六晚，是最大的一笔" },
    { en: "<b>All transport</b> — the six mid-bus bookings (about NT$45,000–55,000 for the week), EasyCard top-ups, the Maokong gondola day pass, and short city taxis. See the <b>Transport page</b>",
      zh: "<b>全部交通</b>——六段中巴（全周约NT$45,000–55,000）、悠游卡储值、猫空缆车一日票、市区短程计程车。详见<b>交通页</b>" },
    { en: "<b>Shopping</b> — Daxi tofu and woodwork on Day 5, Ximending on Day 6, and the Dihua Street gift run on the last day",
      zh: "<b>购物</b>——第5天大溪的豆干与木工艺品、第6天的西门町，以及最后一天迪化街的伴手礼" },
    { en: "<b>Travel insurance</b>, which matters more than usual in typhoon season",
      zh: "<b>旅游保险</b>——台风季尤其重要" },
    { en: "Tips (almost never expected) and the extra round of drinks",
      zh: "小费（台湾几乎不给）以及一定会多点的那几杯饮料" }
  ],

  /* Round number on purpose so a family can do the sum in their head.
     Late-August 2026 money changers in Singapore were giving about
     NT$24.8 per Singapore dollar; NT$25 = S$1 is the planning rate. */
  fx: {
    ntdPerSgd: 25,
    changer: 24.8,
    asOf: { en: "late August 2026", zh: "2026年8月下旬" },
    note: {
      en: "Planning rate <b>NT$25 = S$1</b>. Singapore money changers were closer to NT$24.8, so S$100 yields about NT$2,480 — change a little extra rather than a little less.",
      zh: "换算用<b>NT$25 = S$1</b>。新加坡兑换店大约是 NT$24.8，所以 S$100 大约换到 NT$2,480——宁可多换一点，不要少换。"
    }
  },

  /* Meals the hourly plan does not price, but a family of twelve will eat. */
  extras: [
    { day: 1, cost: 250, pay: "card",
      name: { en: "Zhongshan lunch (free & easy afternoon)", zh: "中山午餐（自由下午）" },
      why: { en: "The timeline leaves lunch open. A sit-down café will take a card; a stall will not.",
             zh: "行程没写午餐。坐下来的咖啡馆可以刷卡；摊位不行。" } },
    { day: 3, cost: 200, pay: "card",
      name: { en: "Evening near the hotel after Yilan", zh: "宜兰回来后，饭店附近晚饭" },
      why: { en: "Qingshui eggs are a snack, not dinner. Convenience stores and nearby restaurants take cards.",
             zh: "清水的蛋只是点心，不是晚饭。超商和附近餐厅可刷卡。" } },
    { day: 5, cost: 150, pay: "cash",
      name: { en: "Daxi stall grazing — tofu, douhua, peanut roll", zh: "大溪摊位——豆干、豆花、花生卷" },
      why: { en: "Old-street stalls after the Hakka lunch. Notes only.",
             zh: "客家菜之后的老街摊。只收现金。" } },
    { day: 5, cost: 200, pay: "card",
      name: { en: "Quiet dinner near the hotel", zh: "饭店附近随便吃的晚饭" },
      why: { en: "The farewell hotpot is Thursday. Wednesday night is a noodle shop or Huashan.",
             zh: "告别火锅在周四。周三晚上是麵店或华山。" } }
  ],

  buffer: {
    perPerson: 300,
    note: {
      en: "A small-notes float for drinks, a second lantern, a taxi that will not take EasyCard, and the usual 'go on then' at a stall.",
      zh: "小钞预备金：多一杯饮料、多一盏天灯、碰到不收悠游卡的计程车，以及摊位上那句「那就再来一个」。"
    }
  },

  cashAdvice: {
    en: "Ask the changer for <b>NT$100 and NT$200 notes</b>. A NT$1,000 note is painful at a night-market stall. Split the bundle across two or three people, not one wallet.",
    zh: "兑换时请要<b>NT$100 和 NT$200 的小钞</b>。夜市摊碰到千元钞很为难。现金请分给两三个人带着，不要全放一个钱包。"
  }
};
