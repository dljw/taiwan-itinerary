/* ============================================================
   DAY 5 · Wed 9 Sep 2026 · Sky lanterns + Jiufen at dusk
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[5] = {
  n: 5,
  date:  { en: "Wednesday 9 September", zh: "9月9日 · 周三" },
  title: { en: "Sky lanterns, then Jiufen at dusk", zh: "放天灯，黄昏上九份" },
  intro: {
    en: "This is the day everything else in the trip leans toward. A waterfall while the morning is still cool, an unhurried afternoon in a railway town where the trains still run down the middle of the street, and then — at golden hour, when it will actually glow against the sky instead of washing out in daylight — your own lantern lifting off. You'll walk into Jiufen just as its red lanterns are being lit. It's a long day, but every hour of it is built to lead here.",
    zh: "这一天，是整趟旅程的重心所在。清晨先趁凉去看瀑布，接着在铁道小镇里从容地耗过一个下午——火车仍旧从街道正中间开过来——再于黄金时刻放出自己的天灯，让它在天色里发亮，而不是消失在白日光里。抵达九份时，红灯笼正好一盏盏亮起。这天很长，但每一个小时都是为了这一刻铺路。"
  },
  hero: "sky-lantern/sky-lantern-daytime-release-wishes.jpg",
  chips: [
    { en: "中巴, waterfall gate to Jiufen", zh: "中巴，瀑布门口到九份" },
    { en: "The big one", zh: "全程重头戏" },
    { en: "Golden-hour lantern release", zh: "黄金时刻放天灯" },
    { en: "Golden Waterfall on the way", zh: "路上停黄金瀑布" },
    { en: "Steep steps at Jiufen", zh: "九份阶梯陡" }
  ],

  glance: [
    { k: { en: "Leave hotel", zh: "出发" },    v: { en: "09:15 by mid-bus", zh: "9:15 中巴" } },
    { k: { en: "Meals", zh: "三餐" },          v: { en: "Fu Hang · Shifen · Jiufen teahouse", zh: "阜杭 · 十分 · 九份茶楼" } },
    { k: { en: "Cost pp", zh: "每人预估" },    v: { en: "≈ NT$970 + bus share", zh: "约 NT$970＋中巴分摊" } },
    { k: { en: "Walking", zh: "步行强度" },    v: { en: "Moderate — Jiufen steps; waterfall is a drop-off", zh: "中等——九份有阶梯；瀑布门口下车" } },
    { k: { en: "Weather risk", zh: "天气风险" }, v: { en: "High — lanterns need dry", zh: "高，天灯需晴" } }
  ],

  timeline: [
    { time: "08:00", dur: "1 hr", type: "meal", img: "food-soy-milk/food-soy-milk-shaobing-closeup.jpg", cost: 120,
      title: { en: "Breakfast — hotel, or Fu Hang Soy Milk", zh: "早餐 —— 饭店，或阜杭豆浆" },
      maps: "https://www.google.com/maps/search/?api=1&query=阜杭豆漿",
      note:  { en: "Fu Hang sits upstairs in the Huashan Market building by Shandao Temple, just minutes from the hotel — savoury soy milk, thick shaobing still warm from the griddle, youtiao fried to order. The queue is the stuff of legend: arrive at 08:00 or skip it entirely. <b>Closed Mondays</b>, so today you're in luck.",
               zh: "阜杭豆浆在善导寺旁华山市场二楼，离饭店只有几分钟路程——咸豆浆、烧饼烤得厚实温热、油条现炸现捞。排队排出了名：八点到，不然就别去了。<b>周一公休</b>，今天正好没问题。" },
      place: {
        address: { en: "2F, Huashan Market, near Shandao Temple", zh: "台北市中正區忠孝東路一段108號2樓（華山市場）" },
        hours: { en: "~05:30–12:30 · closed Mondays", zh: "约 05:30–12:30 · 周一公休" },
        rating: "4.1",
        count: { en: "~10k Google reviews (approx.)", zh: "Google 约一万则" },
        review: { en: "Legendary queue for savoury soy milk and thick shaobing — be there at 08:00 or skip it. Worth it once.",
                  zh: "咸豆浆与厚烧饼的排队传奇——八点到，否则就别去。值得排一次。" },
        asOf: "2026-08"
      },
      dishes: ["soy-milk"] },

    { time: "09:15", dur: "75 min", type: "travel",
      title: { en: "Mid-bus: hotel → Shifen Waterfall gate", zh: "中巴：饭店 → 十分瀑布门口" },
      maps: "https://www.google.com/maps/search/?api=1&query=十分瀑布",
      note:  { en: "Tell the driver <b>十分瀑布</b>, the park gate, not the station. About seventy-five minutes. The 25-minute walk from the station is the bit you just bought out of the day.",
               zh: "跟司机说<b>十分瀑布</b>，停园区门口，不要停车站。大约七十五分钟。从车站走25分钟那一段，今天不用走了。" } },

    { time: "10:30", dur: "1.25 hr", type: "sight", img: "shifen-waterfall/shifen-waterfall-panorama.jpg",
      title: { en: "Shifen Waterfall", zh: "十分瀑布" },
      placeRef: "Shifen Waterfall",
      maps: "https://www.google.com/maps/search/?api=1&query=十分瀑布",
      note:  { en: "Dropped at the gate. Entry is free and the viewing decks are level throughout. Carry water — September heat still finds you on a boardwalk.",
               zh: "门口下车。免门票，观景台全程平坦。记得带水——九月的热，木栈道上还是会碰到。" },
      place: {
        address: { en: "Shifen Waterfall, Pingxi", zh: "新北市平溪區十分瀑布" },
        hours: { en: "Park roughly 09:00–16:30", zh: "园区约 09:00–16:30" },
        rating: "4.4",
        count: { en: "~12k Google reviews (approx.)", zh: "Google 约 1.2 万则" },
        review: { en: "Wide curtain waterfall with flat boardwalk decks — easy for grandparents. Go early before tour buses peak.",
                  zh: "帘幕式大瀑布，木栈道观景台平坦——长辈也好走。赶在游览车高峰前到。" },
        asOf: "2026-08"
      } },

    { time: "11:45", dur: "10 min", type: "travel",
      title: { en: "Short hop to Shifen Old Street", zh: "短程开到十分老街" },
      maps: "https://www.google.com/maps/search/?api=1&query=十分老街",
      note:  { en: "Five to ten minutes. The driver can wait on the street or at the car park while you eat and linger.",
               zh: "五到十分钟。司机可以停老街或停车场，等你们吃完再逛。" } },

    { time: "12:00", dur: "2 hr", type: "meal", img: "shifen-old-street/shifen-old-street-tracks-crowd-lantern.jpg", cost: 200,
      title: { en: "Lunch and the railway street", zh: "午餐与铁道老街" },
      placeRef: "Shifen Old Street and the sky lanterns",
      maps: "https://www.google.com/maps/search/?api=1&query=十分老街",
      note:  { en: "Liou Gou's deboned chicken wing, stuffed with fried rice and grilled to a crackle, is the dish everyone comes here for. Afterwards, browse the stalls, watch a train rumble straight down the middle of the street, and pick out your lantern colours for later.",
               zh: "刘工的去骨鸡翅塞炒饭、烤到外皮焦香，是这里人人必吃的一道。接着逛逛摊子，看火车从街道正中间隆隆开过，再挑好待会要放的天灯颜色。" },
      place: {
        address: { en: "Shifen Old Street, Pingxi", zh: "新北市平溪區十分老街" },
        hours: { en: "Stalls roughly 10:00–18:00", zh: "摊位约 10:00–18:00" },
        rating: "4.2",
        count: { en: "~8k Google reviews (approx.)", zh: "Google 约八千则" },
        review: { en: "Trains still run down the middle of the street — the chicken-wing rice and lantern shops are the reasons people come.",
                  zh: "火车仍从街道正中间开过——鸡翅包饭与天灯店是大家来的理由。" },
        asOf: "2026-08"
      },
      dishes: ["chicken-wing-rice"] },

    { time: "14:15", dur: "1.25 hr", type: "rest",
      title: { en: "Deliberate slow block — tea, shade, sitting", zh: "刻意放空 —— 喝茶、乘凉、坐着" },
      note:  { en: "This gap isn't filler — it's the whole point of a slow afternoon. Air-conditioned cafés line the street, and there's plenty for the kids to browse. <b>Anyone who'd rather sit the whole afternoon out should simply sit.</b>",
               zh: "这段空档不是用来填时间的——它就是悠闲午后的重点。街上有冷气咖啡馆，小朋友也有得逛。<b>想整个下午都坐着的人，就安心坐着吧。</b>" } },

    { time: "14:30", dur: "1 hr", type: "sight", img: "jingtong/jingtong-bamboo-wish-tubes.jpg",
      title: { en: "Optional — a short hop to Jingtong", zh: "可选 —— 短程开到菁桐" },
      placeRef: "Jingtong — the optional hop",
      maps: "https://www.google.com/maps/search/?api=1&query=菁桐車站",
      note:  { en: "If anyone's restless, the bus can run fifteen minutes to the end of the valley. A wooden station from 1929 and thousands of bamboo wish tubes. <b>Be back on the old street by 15:30</b> — the lantern release will not wait.",
               zh: "有人坐不住的话，中巴十五分钟就能开到山谷尽头。1929年的木造车站，铁道旁挂满许愿竹筒。<b>15:30前要回到老街</b>——放天灯不会等人。" },
      place: {
        address: { en: "Jingtong Station, Pingxi", zh: "新北市平溪區菁桐車站" },
        hours: { en: "Daylight; a short mid-bus hop", zh: "白天；中巴短跳" },
        rating: "4.3",
        count: { en: "~4k Google reviews (approx.)", zh: "Google 约四千则" },
        review: { en: "Quieter end-of-line wooden station with bamboo wish tubes — lovely if anyone is restless after lunch.",
                  zh: "支线终点的木造车站与许愿竹筒——午饭后有人坐不住，值得一去。" },
        asOf: "2026-08"
      } },

    { time: "15:30", dur: "1.5 hr", type: "sight", img: "sky-lantern/sky-lantern-wish-closeup-sunset.jpg", cost: 250,
      title: { en: "Sky lantern release — golden hour", zh: "放天灯 —— 黄金时刻" },
      maps: "https://www.google.com/maps/search/?api=1&query=十分老街+天燈",
      note:  { en: "Write your wishes across all four sides with the brush, stand together on the tracks, and let go as one around 16:00–17:00 while the light turns gold. Roughly NT$200 a lantern, shared between two or three — and worth having one grown-up keep a hand on the three-year-old, well clear of the flame, while it lifts. <b>This is the moment the whole trip has been building to.</b>",
               zh: "用毛笔在天灯四面写下心愿，一起站到铁轨上，趁16:00至17:00光线转金黄时同步放手。一盏约NT$200，两三人合放一盏——放的当下，记得安排一位大人牵好三岁的小朋友，让他离火苗远一点。<b>这就是全程一直在等待的那一刻。</b>" },
      place: {
        address: { en: "Shifen Old Street tracks", zh: "十分老街铁道" },
        hours: { en: "Best ~16:00–17:00 in good weather", zh: "天气好时约 16:00–17:00 最佳" },
        rating: "4.5",
        review: { en: "The trip centrepiece — golden-hour releases photograph better than midday. Cancel or swap if rain is heavy.",
                  zh: "全程重心——黄金时刻比中午好拍。大雨就取消或改期。" },
        asOf: "2026-08"
      } },

    { time: "17:00", dur: "15 min", type: "sight", img: "golden-waterfall/golden-waterfall-rust-rock-v2.jpg",
      title: { en: "Golden Waterfall — two minutes from the road", zh: "黄金瀑布 —— 路边两分钟" },
      placeRef: "Golden Waterfall",
      maps: "https://www.google.com/maps/search/?api=1&query=黃金瀑布",
      note:  { en: "The stop the train plan dropped. Photograph from the roadside, do not wade. Then on to Jiufen while the light is still going gold.",
               zh: "火车行程拿掉的那一站。路边拍一张，不要下水。接着趁天色还金，上九份。" } },

    { time: "17:20", dur: "20 min", type: "travel",
      title: { en: "Mid-bus up to Jiufen", zh: "中巴上九份" },
      maps: "https://www.google.com/maps/search/?api=1&query=九份老街",
      note:  { en: "Tell the driver <b>九份老街</b>. About fifteen to twenty minutes. He can wait at the coach park while you climb.",
               zh: "跟司机说<b>九份老街</b>。大约十五到二十分钟。人去爬阶，车可以停游览车停车场。" } },

    { time: "17:40", dur: "2 hr", type: "sight", img: "jiufen/jiufen-amei-teahouse-night.jpg",
      title: { en: "Jiufen Old Street at dusk", zh: "九份老街的黄昏" },
      placeRef: "Jiufen",
      maps: "https://www.google.com/maps/search/?api=1&query=九份老街",
      note:  { en: "You arrive just as the red lanterns are being lit — the one hour this town turns genuinely magical instead of merely crowded. <b>Steep steps everywhere.</b> Settle the grandparents at a view teahouse and let everyone else climb and explore.",
               zh: "抵达时红灯笼正一盏盏亮起——这一小时的九份是真正迷人的时刻，而不只是人多而已。<b>到处都是陡阶梯。</b>让长辈在有景观的茶楼安坐下来，其他人再去爬阶探索。" },
      place: {
        address: { en: "Jiufen Old Street, Ruifang", zh: "新北市瑞芳區九份老街" },
        hours: { en: "Shops ~10:00–20:00; lanes always open", zh: "店家约 10:00–20:00；巷弄随时可走" },
        rating: "4.3",
        count: { en: "~30k Google reviews (approx.)", zh: "Google 约 3 万则" },
        review: { en: "Red lanterns at dusk are the magic hour — steep steps, so park grandparents at a view teahouse early.",
                  zh: "黄昏红灯笼最迷人——阶梯陡，请尽早让长辈在景观茶楼坐下。" },
        asOf: "2026-08"
      } },

    { time: "18:15", dur: "1.5 hr", type: "meal", img: "food-jiufen-taro-balls/food-jiufen-taro-balls-shopfront-v2.jpg", cost: 400,
      title: { en: "Tea and dinner — Jiufen teahouse", zh: "茶与晚餐 —— 九份茶楼" },
      maps: "https://www.google.com/maps/search/?api=1&query=九份茶坊",
      note:  { en: "Jiufen Teahouse (4.8) does interactive brewing — they set the pot in front of you and teach you the whole ritual — while the mountainside drops away to the sea below. Snacks alongside: taro balls, fish ball soup.",
               zh: "九份茶坊（4.8）提供互动式泡茶——师傅摆好茶具，手把手教你整套仪式——窗外山势一路落到海面。搭配小食：芋圆、鱼丸汤。" },
      place: {
        address: { en: "Jiufen Teahouse (九份茶坊)", zh: "新北市瑞芳區九份茶坊" },
        hours: { en: "Roughly 10:00–20:00 · book balcony", zh: "约 10:00–20:00 · 请订阳台" },
        rating: "4.8",
        count: { en: "highly rated teahouse", zh: "高评价茶楼" },
        review: { en: "Interactive brewing with a sea view — quieter and more authentic than the touristy A-Mei. Book a balcony table for twelve.",
                  zh: "互动泡茶加海景——比观光化的阿妹更有味道。十二人请订阳台桌。" },
        asOf: "2026-08"
      },
      dishes: ["tea-brewing", "jiufen-taro-balls", "fishball-soup"] },

    { time: "19:45", dur: "75 min", type: "travel",
      title: { en: "Mid-bus home to the hotel", zh: "中巴回饭店" },
      note:  { en: "About seventy-five minutes. This is the overtime window — confirm the rate when you book. Everyone sits, bags stay in the hold, no Ruifang transfer.",
               zh: "大约七十五分钟。这段可能算超时——订的时候问清楚。人人有位，包放行李厢，不必在瑞芳换车。" } },

    { time: "21:00", type: "rest",
      title: { en: "Back to the hotel", zh: "回饭店" },
      note:  { en: "Tired legs, full hearts, and a phone full of photos of a lantern drifting up into the dark. The big day is done.",
               zh: "腿是酸的，心是满的，手机里存满了天灯升入夜空的照片。最精彩的一天，画下句点。" } }
  ],

  places: [
    {
      name: { en: "Shifen Waterfall", zh: "十分瀑布" },
      tw: "十分瀑布 · 新北市平溪區",
      maps: "https://www.google.com/maps/search/?api=1&query=十分瀑布",
      images: [
        "shifen-waterfall/shifen-waterfall-far-view.jpg",
        "shifen-waterfall/shifen-waterfall-front-view.jpg",
        "shifen-waterfall/shifen-waterfall-full-curtain.jpg"
      ],
      history: {
        en: "Taiwan's broadest curtain waterfall — about twenty metres high and forty wide, wide enough to have earned the nickname 'Little Niagara'. It's a textbook cuesta fall: the river runs against the dip of the rock strata, so instead of sliding down a slope, the water launches off a hard ledge and crashes into a plunge pool below. For decades it sat on private land behind an entry fee; today it's public parkland, laced with proper boardwalks.",
        zh: "台湾最宽的帘幕式瀑布——高约二十公尺、宽约四十公尺，宽到赢得「小尼加拉瓜」的美名。这是典型的逆斜层瀑布：河流逆着岩层倾斜方向流，水不是顺坡滑下，而是从坚硬的岩棚一跃而下，直坠深潭。早年这里是私人土地、要收门票；如今已是铺满完整木栈道的公园。"
      },
      famous: {
        en: "The sheer width. Most of Taiwan's waterfalls are tall ribbons threading through a gorge; this one is a full wall of water, met head-on from a platform built for exactly that view. On a bright morning, a rainbow in the spray is more the rule than the exception.",
        zh: "就是那份宽度。台湾多数瀑布是峡谷里的细长水线，这一座却是一整面迎面而来的水墙，观景台正是为了这个角度而建。晴朗的早晨，水雾里出现彩虹几乎是家常便饭。"
      },
      locals: {
        en: "Everyone will tell you to come in the morning, and they're right — the afternoon brings the tour buses, and in September, the thunderstorms too. The site also closes in the late afternoon, which catches more visitors out than you'd expect.",
        zh: "所有人都会叫你早上来，这话没错——下午来的是游览车，九月的下午还常带来雷阵雨。园区傍晚就打烊，很多人因此扑空。"
      },
      doThis: {
        en: "Head to the lower viewing deck first for the classic head-on shot, then up to the higher deck to look down into the plunge pool. The whole circuit is boardwalk with handrails throughout.",
        zh: "先到下层观景台拍那张经典的正面照，再上到上层俯瞰深潭。全程都是有扶手的木栈道。"
      },
      tip: {
        en: "The driver drops you at the gate — no walk from the station. Genuinely comfortable for grandparents, with railings, benches and shade. Toilets at the entrance. Bring the umbrella; it earns its keep against the spray as much as the sun.",
        zh: "司机停在门口——不必从车站走过来。对长辈来说非常轻松，沿路有扶手、长椅和树荫。入口设有厕所。带把伞，挡水雾和遮阳一样实用。"
      }
    },
    {
      name: { en: "Shifen Old Street and the sky lanterns", zh: "十分老街与天灯" },
      tw: "十分老街 · 平溪線",
      maps: "https://www.google.com/maps/search/?api=1&query=十分老街",
      images: [
        "sky-lantern/sky-lantern-daytime-shop-crowd.jpg",
        "shifen-old-street/shifen-old-street-crowd-lanterns-flying.jpg",
        "sky-lantern/sky-lantern-mass-release-night.jpg",
        "shifen-old-street/shifen-old-street-lantern-shop-facade.jpg"
      ],
      history: {
        en: "The Pingxi railway was laid in 1921 to haul coal out of these valleys, and the little towns strung along it exist because of it. When the mines closed, the line lived on as a tourist branch — which is why shops here open directly onto a working railway, with nothing but a painted line between the customers and the train. The lanterns are older than the tourism: settlers in these hills once sent them up as signals, telling families hiding in the mountains that the bandits had gone and it was safe to come home. The wishes came later; the meaning of a lantern lifting into the sky has always simply been <i>we are all right</i>.",
        zh: "平溪线铺设于1921年，原是为了把煤从这些山谷运出去，沿线的小镇也因此而生。矿场关闭后，铁路以观光支线的姿态留存了下来——所以今天店家门口直接对着仍在营运的铁轨，顾客与火车之间只隔着一条漆线。天灯的历史比观光更悠久：早年山区的移民曾用它当信号，放上天空是要告诉躲进山里的家人，盗匪已经走了、可以回家了。写心愿是后来才有的事；天灯升空的本意，一直都只是<i>我们平安</i>。"
      },
      famous: {
        en: "<b>Releasing a lantern on the tracks.</b> You choose the colours — each one carries a different kind of wish — write across all four faces with a brush, and a shop hand lights the fuel pad and holds it steady until it lifts on its own. Just as famous is the train, which comes rumbling through the middle of the street with a horn, and everyone steps back a metre without even thinking.",
        zh: "<b>在铁轨上放天灯。</b>先挑颜色——每种颜色都代表不同的心愿——用毛笔在四面写字，店家点燃燃料块，扶着直到它自己稳稳升空。同样出名的还有火车：鸣着喇叭从街道正中间隆隆开过，所有人几乎是反射动作地往后退一步。"
      },
      locals: {
        en: "The honest local view is that the lanterns are as much a litter problem as a tradition — the frames come down somewhere in the hills, and volunteers go out to collect them, with operators now encouraged to use biodegradable paper. Nobody will lecture you about it, but it's worth knowing what you're taking part in.",
        zh: "在地人诚实的看法是：天灯既是传统，也是垃圾问题——灯架最后会落在山里某处，得靠志工出去回收，业者现在也被鼓励改用可分解纸材。不会有人为此说教，但知道自己参与的是什么，总是好的。"
      },
      doThis: {
        en: "Two or three of you to a lantern, so everyone gets a turn to write. Give the kids a whole face each, and have one adult keep the three-year-old's hands well back from the flame. Have one person filming and one person <i>not</i> filming — somebody should watch it lift with their own eyes.",
        zh: "两三个人合放一盏，这样每个人都写得到。让小朋友一人写一面，也请一位大人全程牵好三岁孩子的手，离火苗远一点。安排一个人录影，也安排一个人<i>不</i>录影——总该有人只用自己的眼睛看着它升空。"
      },
      tip: {
        en: "Releasing at 16:00–17:00 rather than after dark is deliberate: the lantern still glows against a dimming sky, the crowds are thinner, and nobody is walking mountain roads at 22:00 with tired grandparents in tow. The street here is flat and easy, with plenty of seats.",
        zh: "特意选在16:00至17:00而不是天黑后放天灯：这样它还能在渐暗的天色里发亮，人潮也比较少，也不必让疲惫的长辈在晚上十点还走山路。这里的街道平坦好走，座位也多。"
      }
    },
    {
      name: { en: "Jingtong — the optional hop", zh: "菁桐 —— 可选的一站" },
      tw: "菁桐車站 · 平溪線",
      maps: "https://www.google.com/maps/search/?api=1&query=菁桐車站",
      images: [
        "jingtong/jingtong-station-front.jpg",
        "jingtong/jingtong-bamboo-wish-tubes.jpg"
      ],
      history: {
        en: "The end of the Pingxi Line, and the quietest place on it. The wooden station dates from 1929 and is one of the few original timber stations left in Taiwan; the coal mine it was built to serve shut decades ago, and the village never quite found a replacement. What it has instead is thousands of bamboo tubes strung along the track fences, each one carrying a wish written in marker.",
        zh: "平溪线的终点，也是全线最安静的一站。木造车站建于1929年，是台湾少数留存至今的原始木造站房之一；当年为它而建的煤矿早已停采数十年，村子也始终没找到替代的产业。取而代之的，是沿着铁道栅栏挂满的成千上万个竹筒，每一个都用签字笔写着一个心愿。"
      },
      famous: {
        en: "<b>The wish tubes (許願竹筒)</b> and the sheer quiet — after Shifen's crowds, Jingtong is a village with a station café and little else, which is exactly its charm.",
        zh: "<b>许愿竹筒</b>，还有那份彻底的安静——离开十分的人潮后，菁桐就是一个只有车站咖啡馆、其余什么都没有的小村，而这正是它迷人的地方。"
      },
      doThis: {
        en: "A fifteen-minute hop in the mid-bus if anyone is restless. Write a tube, walk the platform, come back. Half an hour is plenty.",
        zh: "有人坐不住，中巴十五分钟就到。写个竹筒、逛逛月台、回来。半小时绰绰有余。"
      },
      tip: {
        en: "Purely optional and easy to skip — the afternoon at Shifen is deliberately slow so nobody has to do this. Good for anyone (usually the kids) who can't sit still for ninety minutes.",
        zh: "纯属可选，跳过也完全没问题——十分的下午本来就故意排得悠闲，就是为了不必勉强任何人。适合坐不住九十分钟的人，通常是小朋友。"
      }
    },
    {
      name: { en: "Jiufen", zh: "九份" },
      tw: "九份老街 · 新北市瑞芳區",
      maps: "https://www.google.com/maps/search/?api=1&query=九份老街",
      images: [
        "jiufen/jiufen-lantern-alley-steps.jpg",
        "jiufen/jiufen-amei-teahouse-dusk.jpg",
        "jiufen/jiufen-jishan-street-dusk.jpg",
        "jiufen/jiufen-crowded-stairway-night.jpg"
      ],
      history: {
        en: "Gold, discovered here in the 1890s during construction of a railway bridge, turned a hamlet of a few families into a boomtown of theatres and teahouses people called Little Shanghai. The Japanese mined it hard, the seams gave out, and by 1971 it was finished — Jiufen emptied and sat quietly rusting on its hillside for two decades. Then Hou Hsiao-hsien filmed <i>A City of Sadness</i> here in 1989, it won at Venice, and Taiwan rediscovered the place. The name is said to come from the nine households who lived here before the gold, who ordered everything from the coast in nine shares.",
        zh: "1890年代，一座铁路桥施工时在此发现黄金，一个只有几户人家的小村，摇身变成有戏院与茶楼的繁华矿城，人称「小上海」。日本人卖力开采，矿脉终究枯竭，1971年矿场收山——九份从此空了下来，静静在山坡上锈了二十年。直到1989年侯孝贤在此拍摄《悲情城市》，电影在威尼斯影展获奖，台湾才重新发现这个地方。至于地名由来，据说是采金之前住在这里的九户人家，凡事都从海边分「九份」订购。"
      },
      famous: {
        en: "<b>Red lanterns at dusk</b> down a stepped alley, the East China Sea unfolding below. Jiufen is widely believed to have inspired <i>Spirited Away</i>; Miyazaki has said it didn't, and the town has cheerfully kept selling the story ever since regardless.",
        zh: "<b>黄昏时分的红灯笼</b>沿着阶梯巷道一路点亮，脚下是展开的东海。许多人相信九份是《神隐少女》的灵感来源；宫崎骏本人否认过，但小镇至今依然开心地卖着这个说法。"
      },
      locals: {
        en: "Taipei people are blunt about it: come at dusk or don't come. Midday Jiufen is a slow, hot crush of day-trippers in a narrow alley. The hour you have — arriving 17:45, lanterns lighting, most coach tours already pulling out — is the one everyone actually wants.",
        zh: "台北人讲得很直白：要嘛黄昏来，要嘛别来。中午的九份是闷热巷子里挪不动的人潮。你们抓到的这一小时——17:45抵达、灯笼刚亮起、游览车大多已经开走——正是所有人真正想要的那一小时。"
      },
      doThis: {
        en: "Get to a teahouse balcony before the light goes; that view down to the sea with the lanterns coming on is the whole reason to come up here. Shop on the way back down, not on the way up.",
        zh: "赶在天光散尽前上到茶楼的阳台；那幅望向海面、灯笼一盏盏亮起的画面，就是特地上山来的全部理由。买东西留到下山时再买，别在上山时逛。"
      },
      tip: {
        en: "<b>The one genuinely demanding stop of the trip.</b> Jiufen is basically a staircase — Shuqi Road is a long flight of stone steps, uneven and slick if it's been raining. Take the grandparents straight to a seated teahouse with a view and let everyone else explore the steps. The lanes are narrow and one-way in places, so keep the group loosely together rather than spreading out too far.",
        zh: "<b>这是全程唯一真正吃力的一站。</b>九份基本上就是一座楼梯——竖崎路是一长段石阶，高低不平，下过雨还很滑。直接带长辈到有景观的茶楼坐下，其他人再去探索阶梯。巷弄狭窄，部分路段还是单行道，大家最好松松地聚在一起，别散得太开。"
      }
    },
    {
      name: { en: "Golden Waterfall", zh: "黄金瀑布" },
      tw: "黃金瀑布 · 金瓜石",
      maps: "https://www.google.com/maps/search/?api=1&query=黃金瀑布",
      images: [
        "golden-waterfall/golden-waterfall-rust-rock-v2.jpg",
        "golden-waterfall/golden-waterfall-wide-view.jpg",
        "golden-waterfall/golden-waterfall-mineral-stream.jpg"
      ],
      history: {
        en: "Not gold, and not entirely natural. The water here drains through the old Jinguashi copper and gold workings and emerges heavy with iron and copper minerals, which oxidise and stain the entire streambed a vivid ochre. It's a genuinely striking sight and a quiet monument to a century of mining — the colour is the mountain's afterlife.",
        zh: "这不是金子，也不完全是自然现象。水流经金瓜石旧铜金矿坑，带出大量铁与铜的矿物质，氧化后把整片河床染成鲜明的赭黄色。景象确实惊人，也是百年采矿留下的静静纪念——那抹颜色，是这座山的来世。"
      },
      famous: { en: "Being orange. There's nothing else quite like it in Taiwan.",
                zh: "就是那片橙色。台湾找不到第二个地方长这样。" },
      doThis: { en: "Two minutes from the bus stop, photograph, get back on. Don't touch or wade in — this is mineral-laden mine drainage, not a swimming hole.",
                zh: "从公车站走两分钟、拍张照、上车。别碰水或下去踩——这是含重矿物质的矿坑排水，不是可以戏水的溪流。" },
      tip: { en: "On the road between Shifen and Jiufen — a two-minute stop, best seen from the bus. Photograph, do not wade. The lanterns are still what today is for; this is the bonus the train plan could not hold.",
             zh: "就在十分往九份的路边——停两分钟，从车上望出去最合适。拍照，不要下水。今天真正的重点仍是天灯；这一站是火车行程装不下、包车才顺路的。" }
    }
  ],

  food: [
    { id: "chicken-wing-rice", name: { en: "Chicken wing fried rice", zh: "鸡翅包饭" }, pinyin: "jī chì bāo fàn",
      img: "food-chicken-wing-rice/food-chicken-wing-rice-grill-v2.jpg", price: 100,
      taste: { en: "A whole chicken wing, boned out without breaking the skin, packed with fried rice and grilled until the skin crackles. Shifen's signature dish, sold on a stick, and far better eating than the description makes it sound.",
               zh: "整支鸡翅去骨但保留完整外皮，塞满炒饭再烤到外皮焦脆。十分的招牌菜，串在竹签上卖，吃起来比听起来诱人得多。" },
      order: { en: "Liou Gou is the well-known stall for it. Ask for it cut in half so it's easy to share.",
               zh: "刘工是最有名的那一摊。要分着吃就请老板对切。" } },

    { id: "jiufen-taro-balls", name: { en: "Jiufen taro balls", zh: "九份芋圆" }, pinyin: "jiǔ fèn yù yuán",
      img: "food-jiufen-taro-balls/food-jiufen-taro-balls-cup-v2.jpg", price: 70,
      taste: { en: "The same dessert found elsewhere, but this is where it comes from, and the shops here still hand-make it in the window for everyone to watch. Served hot in a ginger sweet soup or cold over shaved ice, with a sea view if you land the right seat.",
               zh: "和别处是同一种甜品，但这里是它的发源地，店家仍在橱窗后现场手作。热的配姜汁糖水，冷的浇在刨冰上；位子挑得好还能望见海。" },
      order: { en: "<b>Bīng</b> for cold over ice, <b>rè</b> for hot in soup. Cold is the right call in September.",
               zh: "「冰」是刨冰，「热」是甜汤。九月请点冰的。" } },

    { id: "fishball-soup", name: { en: "Fish ball soup", zh: "鱼丸汤" }, pinyin: "yú wán tāng",
      img: "food-fishball-soup/food-fishball-soup-bowl-v2.jpg", price: 60,
      taste: { en: "Bouncy, hand-beaten fish balls, often hiding a pork filling inside, in a clear broth scattered with celery and white pepper. The northeast coast makes these better than anywhere, because the fish was landed an hour ago.",
               zh: "手打鱼丸弹牙十足，常常包着猪肉内馅，泡在撒了芹菜末与白胡椒的清汤里。东北角做得格外好，因为鱼一小时前才刚上岸。" } },

    { id: "tea-brewing", name: { en: "Brewed by hand, at the table", zh: "茶楼现泡" }, pinyin: "pào chá",
      img: "food-tea-brewing/food-tea-brewing-maokong-tray-v2.jpg", price: 400,
      taste: { en: "At a Jiufen teahouse you pay for the leaves and the seat, and after that the table is yours for as long as you like — hot water keeps coming, and someone will walk you through the rinse, the timing, the pour. With the sea slowly going dark below, it's the single most civilised hour of the week.",
               zh: "在九份的茶楼，付的是茶叶费与座位费，之后这张桌子就完全是你的——热水一直续，还有人手把手教你温壶、计时、分茶。窗外海面缓缓转暗，这是一整周里最从容优雅的一小时。" },
      order: { en: "Ask for a lighter <b>baozhong</b> if the group isn't used to strong tea, or the roasted local <b>tieguanyin</b> if yesterday at Maokong won anyone over.",
               zh: "大家不习惯浓茶，就点清爽的<b>包种</b>；如果昨天在猫空让谁喝出兴趣，就点焙火的<b>铁观音</b>。" } },

    { id: "soy-milk", name: { en: "Savoury soy milk", zh: "咸豆浆" }, pinyin: "xián dòu jiāng",
      img: "food-soy-milk/food-soy-milk-breakfast.jpg", price: 45,
      taste: { en: "This morning's breakfast, and a genuinely strange first encounter for most: hot soy milk curdled at the table with vinegar into soft, silky clouds, topped with dried shrimp, pickled radish, spring onion, and torn youtiao. Savoury, warm, and utterly addictive by day three.",
               zh: "今天的早餐，也是很多人第一次吃会愣一下的东西：热豆浆在碗里用醋点成柔软的絮状，撒上虾米、菜脯、葱花，再撕入油条。咸香温热，吃到第三天你就会上瘾。" },
      order: { en: "At Fu Hang: order <b>xián dòu jiāng</b> plus a <b>hòu bǐng</b> (thick shaobing) with egg. Join the queue by 08:00.",
               zh: "在阜杭点「咸豆浆」加「厚饼夹蛋」。八点前去排队。" } }
  ],

  verify: [
    { title: { en: "Lanterns will not fly in heavy rain — this is the day most likely to move", zh: "大雨天灯放不了——这天最可能改期" },
      body: { en: "A wet lantern won't lift, and operators stop selling the moment it pours. Check the forecast the night before. <b>If Wednesday looks like rain, swap this whole day with Day 6</b>, which is built in as your buffer. Don't push it to the last day — there's no room left after that.",
              zh: "淋湿的天灯飞不起来，一下大雨业者也会立刻停售。前一晚先看看预报。<b>如果周三天气看起来不妙，就把这一整天和第6天对调</b>，那天本来就是留给你们的备案日。千万别拖到最后一天，之后就再也没有空间调整了。" } },
    { title: { en: "Confirm overtime if Jiufen runs past ten hours", zh: "九份若超过十小时，请确认超时" },
      body: { en: "Hotel 09:15 to hotel ~21:00 is about eleven and a half hours. Ask for the published Jiufen + Shifen + Golden Waterfall package, and how overtime is charged after ten hours. Leaving Jiufen at 19:45 keeps the dusk and still gets you home around 21:00.",
              zh: "饭店09:15到饭店约21:00，大约十一小时半。请问九份＋十分＋黄金瀑布套装，以及超过十小时怎么算超时。19:45离开九份，黄昏还在，大约21:00到家。" } },
    { title: { en: "Jiufen is still the steep bit — park the grandparents at the teahouse", zh: "九份仍是陡的那一段——长辈先坐茶楼" },
      body: { en: "The waterfall walk is gone. What remains is Shuqi Road. Take the grandparents straight to a seated teahouse with a view and let everyone else climb.",
              zh: "瀑布那一段不用走了。剩下的是竖崎路。长辈直接进有景观的茶楼坐下，其他人再去爬阶。" } }
  ],

  logistics: {
    book: [
      { en: "<b>Jiufen + Shifen + Golden Waterfall mid-bus package.</b> Hotel 09:15, waterfall gate, old street, lanterns, Golden Waterfall, Jiufen, hotel ~21:00. Ask for the published package, not a generic 10-hour clock. Confirm overtime. Enquiry on the Transport page.",
        zh: "<b>九份＋十分＋黄金瀑布中巴套装。</b>饭店09:15，瀑布门口、老街、天灯、黄金瀑布、九份，约21:00回饭店。请问套装价，不要开通用10小时。确认超时。询价见交通页。" },
      { en: "<b>Jiufen teahouse, 18:15.</b> Jiufen Teahouse is rated 4.8 and the balcony tables go first — call ahead for twelve. Tell them you're coming by private bus.",
        zh: "<b>九份茶楼，18:15。</b>九份茶坊评价4.8，阳台桌最抢手——请先打电话订十二人的位子。订位时说明是包车前往。" },
      { en: "Make the <b>wet-weather call the night before</b>. A washout still means swapping with Day 6 — and cancelling or moving the mid-bus.",
        zh: "<b>雨天的决定请在前一晚就定案。</b>天气不好仍是跟第6天对调——中巴也要一起改或取消。" }
    ],
    notes: [
      { en: "Lanterns run roughly NT$200 each, paid in cash at the shop on the spot. Bring notes.",
        zh: "天灯一盏约NT$200，现场在店家付现。请带足现钞。" },
      { en: "The Shifen and Jiufen roads wind. Tablets before you board, not after you start feeling it.",
        zh: "十分和九份都是弯路。晕车药请上车前先吃，别等不舒服了才吃。" },
      { en: "Jiufen has serious steps. Plan for the grandparents to sit rather than climb, and settle that before you arrive rather than debating it on the spot.",
        zh: "九份阶梯很陡。事先就决定让长辈坐着、不必爬阶，别等到了现场才临时讨论。" },
      { en: "Sunset in early September falls around 18:10 — exactly why the lantern release is timed for 16:00–17:00.",
        zh: "九月初日落约在18:10——这正是把放天灯排在16:00至17:00的原因。" }
    ]
  },

  taxi: [
    { tw: "十分瀑布", say: "Shifen Waterfall" },
    { tw: "十分老街 · 平溪", say: "Shifen Old Street, Pingxi District" },
    { tw: "黃金瀑布", say: "Golden Waterfall" },
    { tw: "九份老街 · 瑞芳", say: "Jiufen Old Street, Ruifang District" }
  ]
};
