/* ============================================================
   trip.js — trip-wide facts, day index, and the home page copy.
   EDIT THIS FILE to change the trip's framing, dates or day list.
   ============================================================ */
window.TRIP = window.TRIP || {};

window.TRIP.meta = {
  title:    { en: "Taiwan, together", zh: "台湾，一家人" },
  subtitle: { en: "Seven days, six nights · 5–11 September 2026 · twelve of us",
              zh: "七天六夜 · 2026年9月5–11日 · 一行十二人" },

  lede: {
    en: "Nine adults, two kids and a toddler — 13, 11 and 3 — and one Taipei base. Mornings out while it's cool: a Sanxing farm and Qingshui geothermal on Monday, lanterns on Tuesday, glass over a waterfall on Wednesday, handmade noodles and the farewell hotpot on Thursday.",
              zh: "九位大人、两个孩子加一个小小孩——13岁、11岁、3岁，一个台北据点。趁凉爽的早晨出门：周一三星农场和清水地热，周二放天灯，周三玻璃步道，周四手作麵线和告别火锅。"
  },

  footer: { en: "Family itinerary · photos are reference images, not our own",
            zh: "家庭行程手册 · 图片为参考示意，非本人拍摄" },

  days: [
    { n: 1, date: { en: "Sat 5 Sep", zh: "9月5日 · 周六" },
      title: { en: "Landing, then a family visit on the way in", zh: "抵达，顺路拜访家人" },
      blurb: { en: "Wheels down 06:55. The van goes straight to Linkou for a proper local breakfast and the family visit, then it's a long free & easy afternoon shopping in Zhongshan before the night market.",
               zh: "清晨6:55落地。车子直接开去林口吃顿在地早餐，完成家族拜访，接着一整个下午留给中山自由购物，晚上再去夜市。" },
      hero: "ningxia-night-market/ningxia-night-market-stalls.jpg",
      transport: { en: "Private mid-bus · airport", zh: "包中巴 · 机场" } },

    { n: 2, date: { en: "Sun 6 Sep", zh: "9月6日 · 周日" },
      title: { en: "Up into the tea hills at Maokong", zh: "猫空茶山半日" },
      blurb: { en: "The gondola does all the climbing. Flat shaded paths, tea-leaf cooking, and Raohe night market after dark.",
               zh: "缆车替你爬山。平缓的林荫步道、茶入菜的料理，入夜后转战饶河街夜市。" },
      hero: "maokong-gondola/maokong-gondola-cabin-over-forest.jpg",
      transport: { en: "MRT + gondola", zh: "捷运＋缆车" } },

    { n: 3, date: { en: "Mon 7 Sep", zh: "9月7日 · 周一" },
      title: { en: "Sanxing farm, then Qingshui geothermal", zh: "三星农场，再清水地热" },
      blurb: { en: "A mid-bus through the tunnel: Zhang Mei Ama's Farm, a Sanxing scallion table, then Qingshui Geothermal Park — cook eggs in the wells, soak your feet. Home around 18:15.",
               zh: "中巴钻隧道：张美阿嬷农场、三星葱合菜，再到清水地热煮蛋泡脚。约18:15回饭店。" },
      hero: "sanxing/sanxing-scallion-fields.jpg",
      transport: { en: "中巴", zh: "中巴" } },

    { n: 4, date: { en: "Tue 8 Sep", zh: "9月8日 · 周二" },
      title: { en: "Sky lanterns, then Jiufen at dusk", zh: "放天灯，黄昏上九份" },
      blurb: { en: "The big one. Waterfall in the morning, your lantern rising at golden hour, and Jiufen's red lanterns lighting as you arrive.",
               zh: "全程最精彩的一天。上午看瀑布，黄昏时分放飞天灯，抵达九份时红灯笼正好亮起。" },
      hero: "sky-lantern/sky-lantern-daytime-release-wishes.jpg",
      transport: { en: "中巴", zh: "中巴" } },

    { n: 5, date: { en: "Wed 9 Sep", zh: "9月9日 · 周三" },
      title: { en: "Standing on glass above a waterfall", zh: "站在瀑布上方的玻璃步道" },
      blurb: { en: "Xiao Wulai's skywalk juts straight out over the falls. Then a full afternoon graze through Daxi Old Street. Quiet dinner — the farewell hotpot is Thursday.",
               zh: "小乌来天空步道悬挑在瀑布正上方。接着一整个下午在大溪老街边走边吃。晚饭随便——告别火锅在周四。" },
      hero: "xiaowulai/xiaowulai-skywalk-glass.jpg",
      transport: { en: "中巴", zh: "中巴" } },

    { n: 6, date: { en: "Thu 10 Sep", zh: "9月10日 · 周四" },
      title: { en: "Handmade noodles, then farewell hotpot", zh: "手作麵线，再告别火锅" },
      blurb: { en: "Throw dough in Shiding, eat noodles from a spring-water trough, Ximending in the afternoon — Red House market should be on — then hotpot at 18:30.",
               zh: "石碇甩麵、山泉流水麵，下午西门町——红楼市集周四该有——18:30火锅。" },
      hero: "hsu-noodles/hsu-noodles-flowing.jpg",
      transport: { en: "中巴 + MRT", zh: "中巴＋捷运" } },

    { n: 7, date: { en: "Fri 11 Sep", zh: "9月11日 · 周五" },
      title: { en: "Dihua Street, and home", zh: "迪化街采买，然后回家" },
      blurb: { en: "Old Taipei's most handsome street for the last of the gift shopping, a proper farewell lunch, then the 20:00 flight.",
               zh: "在老台北最好看的街上买齐伴手礼，好好吃顿告别午餐，赶晚间八点的班机。" },
      hero: "dihua-street/dihua-street-shophouses.jpg",
      transport: { en: "MRT · 中巴 to airport", zh: "捷运 · 中巴送机" } }
  ],

  facts: [
    { k: { en: "Base", zh: "住宿据点" },
      v: { en: "Zhongzheng District — 5 min walk to Shandao Temple MRT, 6 min to Zhongxiao Xinsheng, next to Huashan 1914 Creative Park.",
           zh: "中正区——步行5分钟到善导寺站，6分钟到忠孝新生站，紧邻华山1914文创园区。" } },
    { k: { en: "Getting around", zh: "交通方式" },
      v: { en: "<b>A 中巴 on the days twelve people will not fit anything smaller</b> — Day 1 as an airport transfer with two Linkou stops, Day 3 through the Xueshan Tunnel to Yilan, Day 4 for Shifen, Golden Waterfall and Jiufen, Day 5 to Xiao Wulai and Daxi, Day 6 a half-day to Shiding, and Day 7 back to the airport. Sunday is still the gondola and the MRT. See the <b>Transport page</b>.",
           zh: "<b>十二人塞不进去的日子包中巴</b>——第1天机场接机加林口两站、第3天钻雪山隧道去宜兰、第4天十分、黄金瀑布和九份、第5天小乌来加大溪、第6天石碇半天、第7天送机。周日仍是缆车和捷运。见<b>交通页</b>。" } },
    { k: { en: "Weather", zh: "天气" },
      v: { en: "Hot and humid, 30–34°C, and the tail of typhoon season. Day 6 doubles as the weather buffer.",
           zh: "闷热潮湿，30–34°C，正值台风季尾声。第6天同时是天气备案日。" } },
    { k: { en: "Everyone needs", zh: "人人必备" },
      v: { en: "An EasyCard, a folding umbrella (for sun as much as rain), and shoes you can walk all day in.",
           zh: "悠游卡、折叠伞（遮阳跟挡雨一样重要），以及一双能走一整天的鞋。" } },
    { k: { en: "Book before you fly", zh: "出发前先订" },
      v: { en: "<b>Six mid-bus bookings</b> with one Taipei operator if you can — Days 1 and 7 as airport transfers, Day 6 a 4–5 hour half-day, Days 3–5 as full days. Also Hsu's Thursday 09:30, Zhang Mei Ama DIY, a Sanxing lunch table, the Wednesday skywalk, the Thursday hotpot, and the Day 7 farewell lunch.",
           zh: "<b>六段中巴</b>，能同一家台北业者最好——第1、7天机场接送，第6天4至5小时半天，第3至5天全日。另外还有许家周四09:30、张美阿嬷手作、三星午餐桌、周三天空步道、周四火锅、第7天告别午餐。" } }
  ]
};
