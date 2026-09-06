/* ============================================================
   DAY 2-A · alternate to Day 2 (Maokong) · Zhongshan + CKS Memorial +
   Longshan Temple + Ximending dinner + generic massage/hair wash.
   Built by public transport, no chartered van. See weather.js for
   when to use this instead of the Maokong plan.
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days["2a"] = {
  n: "2a",
  date:  { en: "Alternate for Sunday 6 September", zh: "9月6日替代方案 · 周日" },
  title: { en: "Zhongshan, CKS Memorial at dusk, then Longshan Temple and a slow wind-down", zh: "中山、黄昏中正纪念堂，再龙山寺与慢慢收工" },
  intro: {
    en: "A rain-day (or just-want-a-change-of-pace) alternative to Maokong, built entirely around public transport with almost no backtracking — every stop after lunch sits on the same MRT line, one behind the other. It also makes good on the Zhongshan afternoon that jet lag ate into on Day 1. The day drifts from a genuinely free morning into museum, monument and temple, then eases into pure recovery: dinner in Ximending, and a generic massage or Taiwanese-style hair wash — whichever shop has a short queue — to close the night, a short walk from the hotel.",
    zh: "这是猫空的替代方案——下雨天用，或单纯想换个步调也行。全程搭大众运输，午餐后的每一站都在同一条捷运线上，一站接一站，几乎不用绕路。这天也补回了第一天被时差吃掉的中山下午。整天从真正自由的早晨，滑进博物馆、纪念堂与寺庙，再彻底转入放松模式——西门町晚餐，再找一家排队较短的按摩店或台式洗头店收尾，离饭店也不远。"
  },
  hero: "cks-memorial-hall/cks-memorial-hall-golden-hour.jpg",
  chips: [
    { en: "Public transport only", zh: "全程大众运输" },
    { en: "Makes up missed Zhongshan", zh: "补回中山" },
    { en: "CKS Memorial at golden hour", zh: "黄昏中正纪念堂" },
    { en: "Ends in Ximending, near the hotel", zh: "收尾在西门町，离饭店近" }
  ],

  glance: [
    { k: { en: "Leave hotel", zh: "出发" },       v: { en: "10:30, after a genuinely slow morning", zh: "10:30，早上真正自由" } },
    { k: { en: "Meals", zh: "三餐" },             v: { en: "Hotel · lunch in Zhongshan · dinner in Ximending", zh: "饭店早餐 · 中山午餐 · 西门町晚餐" } },
    { k: { en: "Cost pp", zh: "每人预估" },       v: { en: "≈ NT$1,500 incl. a massage or hair wash", zh: "约 NT$1,500（含按摩或洗头）" } },
    { k: { en: "Walking", zh: "步行强度" },       v: { en: "Light — mostly MRT, short walks between stops", zh: "轻松——多为捷运接驳，站间步行不远" } },
    { k: { en: "Book ahead", zh: "需预订" },      v: { en: "Nothing — walk-ins for dinner and the massage/hair wash", zh: "都不需要——晚餐与按摩／洗头现场排队即可" } }
  ],

  timeline: [
    { time: "08:00", dur: "2 hr", type: "rest",
      title: { en: "Chill morning at the hotel", zh: "饭店悠闲早晨" },
      note:  { en: "No fixed plan — sleep in, slow breakfast, coffee, nothing to catch. Today only really starts at 10:30.",
               zh: "没有固定行程——睡到自然醒、慢慢吃早餐、喝杯咖啡，不用赶什么。这天真正的开始是10:30。" } },

    { time: "10:30", dur: "20 min", type: "travel", cost: 30, pay: "easycard",
      title: { en: "MRT to Zhongshan", zh: "捷运到中山" },
      maps: "https://www.google.com/maps/search/?api=1&query=捷運中山站",
      note:  { en: "A short, direct ride on the Red Line — no transfer.",
               zh: "红线直达，不用换车，车程很短。" } },

    { time: "11:00", dur: "1 hr", type: "meal", cost: 350, pay: "card",
      title: { en: "Lunch in Zhongshan", zh: "中山午餐" },
      maps: "https://www.google.com/maps/search/?api=1&query=中山站+餐廳",
      note:  { en: "No fixed restaurant — the area around the station and Shuangcheng Street is full of easy, casual options. Split up if the group wants different things.",
               zh: "没有指定餐厅——车站与双城街一带小吃、餐厅选择很多，轻松解决。想吃不同东西的话，分头吃也行。" } },

    { time: "12:00", dur: "1.5 hr", type: "sight",
      title: { en: "Zhongshan / Shuangcheng Street — the afternoon Day 1 missed", zh: "中山／双城街——补回第一天的下午" },
      placeRef: "Zhongshan and Shuangcheng Street",
      maps: "https://www.google.com/maps/search/?api=1&query=中山站+雙城街",
      note:  { en: "The free-and-easy shopping block from Day 1 that jet lag ate into. Boutiques, small Japanese-goods stores and cafés, calmer than Ximending — an easy amble rather than a mission.",
               zh: "就是第一天被时差吃掉的那段自由购物时光。小店、日系选物、咖啡馆林立，比西门町安静——不用特地做什么，随意逛逛就好。" } },

    { time: "13:45", dur: "15 min", type: "travel", cost: 30, pay: "easycard",
      title: { en: "MRT to Taipei Main / NTU Hospital", zh: "捷运到台北车站／台大医院站" },
      note:  { en: "Transfer at Taipei Main from the Red Line to the Blue Line — the same transfer point you'll use for the rest of the afternoon.",
               zh: "在台北车站从红线转蓝线——接下来一整个下午都会用到这个转乘点。" } },

    { time: "14:00", dur: "1.25 hr", type: "sight", img: "peace-park-museum/peace-park-museum-ntm-front.jpg",
      title: { en: "228 Peace Memorial Park + National Taiwan Museum", zh: "二二八和平公园＋国立台湾博物馆" },
      placeRef: "228 Peace Memorial Park and the National Taiwan Museum",
      maps: "https://www.google.com/maps/search/?api=1&query=二二八和平公園",
      note:  { en: "Right by Taipei Main — a domed neoclassical museum building set inside a landscaped park with ponds and pavilions. Enough to fill the gap between Zhongshan and CKS Memorial Hall without adding real travel time.",
               zh: "就在台北车站旁——圆顶的新古典主义博物馆建筑，坐落在有池塘与凉亭的公园里。刚好填满中山与中正纪念堂之间的空档，几乎不多花交通时间。" } },

    { time: "15:30", dur: "15 min", type: "travel", cost: 30, pay: "easycard",
      title: { en: "MRT to CKS Memorial Hall", zh: "捷运到中正纪念堂站" },
      note:  { en: "One stop down the same Blue Line.", zh: "同一条蓝线，坐一站就到。" } },

    { time: "15:45", dur: "1.25 hr", type: "sight", img: "cks-memorial-hall/cks-memorial-hall-guard-ceremony.jpg",
      title: { en: "Chiang Kai-shek Memorial Hall, into golden hour", zh: "中正纪念堂，直到金色黄昏" },
      placeRef: "Chiang Kai-shek Memorial Hall",
      maps: "https://www.google.com/maps/search/?api=1&query=中正紀念堂",
      note:  { en: "Browse the free exhibition halls at your own pace, and let the visit run into the 16:00 (or 17:00) changing-of-the-guard ceremony. The exhibition closes at 18:00 and there's no ceremony after 17:00, so this window catches both the ceremony and the sky starting to turn gold over the plaza — without the building being closed and dark.",
               zh: "自由参观免费的展览厅，让行程刚好接到16:00（或17:00）的卫兵交接仪式。展览厅18:00关闭，17:00后也没有交接仪式了，这个时段刚好能同时赶上仪式，又能看到广场上天空开始转金——建筑物还没关、天也还没全黑。" } },

    { time: "17:15", dur: "15 min", type: "travel", cost: 30, pay: "easycard",
      title: { en: "MRT to Longshan Temple", zh: "捷运到龙山寺站" },
      note:  { en: "Two stops further down the same Blue Line, via Ximen.", zh: "同一条蓝线再两站，途经西门。" } },

    { time: "17:30", dur: "45 min", type: "sight", img: "longshan-temple/longshan-temple-incense-worship.jpg",
      title: { en: "Longshan Temple, into blue hour", zh: "龙山寺，转入蓝调时刻" },
      placeRef: "Longshan Temple",
      maps: "https://www.google.com/maps/search/?api=1&query=艋舺龍山寺",
      note:  { en: "By now the light is fading into blue hour — lanterns and incense smoke are at their most atmospheric as evening worshippers arrive. A working temple, not a museum: keep voices down and ask before photographing anyone praying.",
               zh: "此时天色转入蓝调时刻——晚间信众陆续到来，灯笼与香烟的氛围最好看。这是仍在使用的寺庙，不是博物馆：请放低音量，拍摄礼佛的人之前先问过。" } },

    { time: "18:30", dur: "10 min", type: "travel", cost: 30, pay: "easycard",
      title: { en: "MRT or short walk to Ximen", zh: "捷运或步行到西门" },
      note:  { en: "One stop on the same Blue Line, or an easy ~10-minute walk.", zh: "同一条蓝线一站，或步行约十分钟即可。" } },

    { time: "18:45", dur: "1.25 hr", type: "meal", cost: 350, pay: "card",
      title: { en: "Dinner in Ximending", zh: "晚餐在西门町" },
      maps: "https://www.google.com/maps/search/?api=1&query=西門町+美食",
      note:  { en: "No fixed restaurant — Ximending has huge range, from cheap eats to sit-down. Let the group split if people want different things.",
               zh: "没有指定餐厅——西门町选择非常多，从平价小吃到坐下来吃都有。想吃不同东西的话，分头吃也行。" } },

    { time: "20:15", dur: "1.25 hr", type: "rest", img: "taiwan-hairwash/taiwan-hairwash-klook-salon.webp",
      title: { en: "Massage and/or hair wash — Ximending", zh: "按摩／洗头 —— 西门町" },
      placeRef: "Massage and hair wash in Ximending",
      maps: "https://www.google.com/maps/search/?api=1&query=西門町+按摩",
      note:  { en: "No specific venue booked — Ximending is dense with both foot/full-body massage parlors and Taiwanese-style hair-wash salons, many open late. Just walk into whichever has a short queue rather than pre-booking; split up if people want different things.",
               zh: "没有指定店家——西门町按摩店与台式洗头店都很密集，多数营业到很晚。直接找排队较短的店进去即可，不用先预约；想做不同项目的话，分头进行也行。" } },

    { time: "21:45", type: "rest",
      title: { en: "Back to the hotel", zh: "回饭店" },
      note:  { en: "Ximending is a short walk from Zhongzheng, so this ends earlier and closer to home than the Huaxi Street version.",
               zh: "西门町离中正区很近，走回饭店不远——比华西街那版收得更早、离饭店也更近。" } }
  ],

  places: [
    {
      name: { en: "Zhongshan and Shuangcheng Street", zh: "中山与双城街" },
      tw: "中山區雙城街",
      maps: "https://www.google.com/maps/search/?api=1&query=中山站+雙城街",
      images: ["zhongshan-shuangcheng/zhongshan-shuangcheng-lane18-sign.jpg"],
      history: {
        en: "Zhongshan grew up as Taipei's early modern shopping district, and Shuangcheng Street kept its scale small while the avenues around it went vertical — which is why it still reads as a neighbourhood street rather than a shopping mall.",
        zh: "中山是台北较早发展的现代购物区，双城街则一直维持着小尺度，即使周边大道早已高楼林立——这也是它至今仍像社区街道、而不是购物中心的原因。" },
      famous: {
        en: "A dense cluster of small boutiques, Japanese import shops and independent cafés, all at a walkable, unhurried scale.",
        zh: "密集的小型精品店、日系选物店与独立咖啡馆，尺度宜人、走起来不赶。" },
      locals: {
        en: "Locals treat this as everyday shopping rather than a tourist stop — which is exactly why it's calmer than Ximending.",
        zh: "在地人把这里当日常逛街的地方，而不是观光景点——这正是它比西门町安静的原因。" },
      doThis: {
        en: "Split into smaller groups and wander without a fixed target — this street rewards drifting more than a checklist.",
        zh: "分成小队随意逛，不用设定目标——这条街适合闲晃，不适合按表操课。" },
      tip: {
        en: "This is the make-up for the Zhongshan afternoon jet lag ate into on Day 1 — no pressure to see everything, since it was always meant to be free time.",
        zh: "这是补回第一天被时差吃掉的中山下午——不必逛完所有店，反正本来就是自由时间。" }
    },
    {
      name: { en: "228 Peace Memorial Park and the National Taiwan Museum", zh: "二二八和平公园与国立台湾博物馆" },
      tw: "二二八和平公園 · 國立臺灣博物館",
      maps: "https://www.google.com/maps/search/?api=1&query=二二八和平公園",
      images: [
        "peace-park-museum/peace-park-museum-ntm-front.jpg",
        "peace-park-museum/peace-park-museum-ntm-entrance.jpg",
        "peace-park-museum/peace-park-museum-chang-hai-pavilion.jpg",
        "peace-park-museum/peace-park-museum-park-panorama.jpg",
        "peace-park-museum/peace-park-museum-carp-pond.jpg"
      ],
      history: {
        en: "Opened in 1908, the National Taiwan Museum is the island's oldest museum, built by the Japanese colonial government in a neoclassical style meant to project permanence. The park around it was renamed in 1996 to commemorate the February 28, 1947 incident and the era of martial law that followed — a name change that turned a colonial-era leisure park into a site of public memory.",
        zh: "国立台湾博物馆开馆于1908年，是台湾历史最悠久的博物馆，由日本殖民政府以新古典主义风格建造，意在展现权威与永续感。周边的公园在1996年更名，用以纪念1947年二二八事件与其后的戒严时期——一次更名，把殖民时期的休闲公园变成了公共记忆的场所。" },
      famous: {
        en: "The museum's domed rotunda and colonnaded facade, and the park's <b>Chang Hai Pavilion</b> and carp pond with its stone lanterns.",
        zh: "博物馆的圆顶大厅与列柱立面，以及公园里的<b>仓海亭</b>与养着锦鲤、点缀着石灯笼的水池。" },
      locals: {
        en: "Office workers from the surrounding district use the park as a lunchtime escape — it's small enough to feel intimate rather than monumental.",
        zh: "附近上班族常把这座公园当午休的喘息角落——它小巧到让人觉得亲切，而不是宏伟压迫。" },
      doThis: {
        en: "A short loop is enough: the museum's ground-floor galleries, then a stroll past the pond and pavilion before moving on.",
        zh: "简单绕一圈就够：博物馆一楼展厅，接着散步经过水池与凉亭，再继续下一站。" },
      tip: {
        en: "This sits right by Taipei Main Station, exactly on the transfer point between the Red and Blue lines — it costs almost no extra travel time between Zhongshan and CKS Memorial Hall.",
        zh: "这里就在台北车站旁，正好是红线转蓝线的转乘点——安排在中山与中正纪念堂之间，几乎不多花交通时间。" }
    },
    {
      name: { en: "Chiang Kai-shek Memorial Hall", zh: "中正纪念堂" },
      tw: "中正紀念堂",
      maps: "https://www.google.com/maps/search/?api=1&query=中正紀念堂",
      images: [
        "cks-memorial-hall/cks-memorial-hall-exterior.jpg",
        "cks-memorial-hall/cks-memorial-hall-guard-ceremony.jpg",
        "cks-memorial-hall/cks-memorial-hall-golden-hour.jpg",
        "cks-memorial-hall/cks-memorial-hall-theater-concert-dusk.jpg",
        "cks-memorial-hall/cks-memorial-hall-plaza-view.jpg"
      ],
      history: {
        en: "Completed in 1980, the hall's white walls and blue octagonal roof echo classical Chinese temple architecture, sitting at the head of a vast plaza flanked by the National Theater and National Concert Hall. It remains one of Taiwan's most debated monuments — a memorial to a figure the island's own democratic history has grown increasingly complicated about.",
        zh: "纪念堂1980年落成，白墙蓝色八角攒尖顶，呼应中国古典庙宇建筑，坐落在国家戏剧院与国家音乐厅夹峙的广场尽头。它至今仍是台湾最具争议的纪念建筑之一——纪念的这位人物，随着台湾自身民主历程的推进，评价也变得愈加复杂。" },
      famous: {
        en: "The <b>changing-of-the-guard ceremony</b>, on the hour from 09:00 to 17:00, and the view from the top of the 89 steps — one for each year of Chiang's life.",
        zh: "整点的<b>卫兵交接仪式</b>（09:00至17:00），以及站上89级台阶顶端的视野——阶梯数正好对应蒋介石的享年。" },
      locals: {
        en: "Locals mostly come for Liberty Square's open plaza — kite-flying, photography, and simply cutting through on the way somewhere else — more than for the hall itself.",
        zh: "在地人多半是为了自由广场的开阔空间而来——放风筝、拍照，或单纯路过——而不是特地为了纪念堂本身。" },
      doThis: {
        en: "Time your visit to end around the 16:00 or 17:00 guard ceremony, then linger on the plaza as the sky turns gold behind the blue roof.",
        zh: "把行程安排到接近16:00或17:00的交接仪式，接着留在广场上，看蓝色屋顶后方的天空转金。" },
      tip: {
        en: "Exhibition halls close at 18:00 and there's no ceremony after 17:00 — arrive by mid-afternoon rather than trying to catch this at full dusk.",
        zh: "展览厅18:00关闭，17:00后也没有交接仪式了——请在下午中段前抵达，不要等到天全黑才来。" }
    },
    {
      name: { en: "Longshan Temple", zh: "龙山寺" },
      tw: "艋舺龍山寺",
      maps: "https://www.google.com/maps/search/?api=1&query=艋舺龍山寺",
      images: [
        "longshan-temple/longshan-temple-entrance-facade.jpg",
        "longshan-temple/longshan-temple-incense-worship.jpg",
        "longshan-temple/longshan-temple-main-hall.jpg",
        "longshan-temple/longshan-temple-roof-dragon-detail.jpg"
      ],
      history: {
        en: "Founded in 1738 by settlers from Fujian's Jinjiang, Nan'an and Hui'an counties, Longshan Temple has survived an earthquake, fire and WWII bombing, being rebuilt each time — its current form dates mostly from a 1920s reconstruction. It's dedicated primarily to Guanyin, the goddess of mercy, with dozens of other deities sharing the halls behind her.",
        zh: "龙山寺建于1738年，由福建晋江、南安、惠安三邑移民合建，历经地震、火灾与二战轰炸，每次都重建至今——现今样貌主要来自1920年代的重修。主祀观音菩萨，殿内还供奉着数十尊其他神祇。" },
      famous: {
        en: "The intricately carved stone dragon pillars at the entrance, and the roof's dense <b>jiannian</b> (剪粘) cut-porcelain decoration.",
        zh: "入口处雕工精细的石雕蟠龙柱，以及屋顶密布的<b>剪粘</b>装饰。" },
      locals: {
        en: "Evening is when locals actually come to pray — the temple is at its most alive and least touristy after the day-trip crowds thin out.",
        zh: "傍晚才是在地人真正来拜拜的时段——白天的观光人潮散去后，寺庙反而最有生气、最不像观光景点。" },
      doThis: {
        en: "Walk the perimeter to see the roof detail and dragon pillars, then step inside the main hall to watch the incense ritual — quietly, from the side.",
        zh: "先绕一圈看屋顶细节与蟠龙柱，再进主殿静静在旁边看信众上香祭拜。" },
      tip: {
        en: "This is a working place of worship, not a photo backdrop — keep voices down, don't step on threshold beams, and ask before photographing anyone praying.",
        zh: "这是正在使用的信仰场所，不是拍照布景——请放低音量，别踩门槛，拍摄礼佛的人之前先问过。" }
    },
    {
      name: { en: "Massage and hair wash in Ximending", zh: "西门町的按摩与洗头" },
      tw: "西門町",
      maps: "https://www.google.com/maps/search/?api=1&query=西門町+按摩",
      images: [
        "taiwan-hairwash/taiwan-hairwash-klook-salon.webp",
        "taiwan-massage/taiwan-massage-taipei-blind-masseur.jpg",
        "taiwan-hairwash/taiwan-hairwash-salon-sinks.jpg"
      ],
      history: {
        en: "Ximending has been Taipei's youth and entertainment quarter since the Japanese era, and its density of cheap, late-opening personal-care shops — massage, foot reflexology, hair salons — grew up alongside the cinemas and shopping to serve exactly this kind of evening crowd.",
        zh: "西门町自日治时期起就是台北的年轻人与娱乐聚集地，按摩、足体、美发这类平价、营业到很晚的小店，正是伴随着电影院与商圈一起长出来的，服务的就是这种晚间人潮。" },
      famous: {
        en: "No single famous shop — the point is the density: pick a foot/full-body massage parlor or a hair-wash salon on the spot, based on whichever has a short queue.",
        zh: "没有哪一家特别出名——重点是密度高：现场挑一家排队较短的按摩店或洗头店即可。" },
      locals: {
        en: "Locals treat this as an any-night-of-the-week convenience, not a special booking — walk-ins are completely normal here.",
        zh: "在地人把这当成日常方便的选项，不是特别预约的行程——现场排队走进去很正常。" },
      doThis: {
        en: "Split up if people want different things — massage for some, hair wash for others — and regroup afterward for the walk back to the hotel.",
        zh: "想做不同项目就分头进行——有人按摩、有人洗头——结束后再会合，一起走回饭店。" },
      tip: {
        en: "No pre-booking needed for a generic parlor, unlike a specific named venue — but if the group wants to stay together, agree on one shop with enough seats before splitting up to look.",
        zh: "找一般店家不需要先预约，不像指定店家那样——但如果想全员待在一起，建议先讲好一家座位够的店，再分头找位子。" }
    }
  ],

  weather: {
    swaps: [
      { en: "This entire day is the rain-day answer to Maokong — everything here is indoor or covered except the short walks between MRT stops and the temple courtyard, so ordinary rain barely touches it.",
        zh: "这整天本身就是猫空的雨天备案——除了捷运站间的短程步行与寺庙庭院外，几乎全程室内或有遮蔽，普通雨天几乎不受影响。" }
    ]
  },

  taxi: [
    { tw: "艋舺龍山寺", say: "Longshan Temple, Wanhua District" },
    { tw: "西門町", say: "Ximending, Wanhua/Zhongzheng border" }
  ]
};
