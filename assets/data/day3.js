/* ============================================================
   DAY 3 · Mon 7 Sep 2026 · Sanxing farm + Qingshui geothermal
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[3] = {
  n: 3,
  date:  { en: "Monday 7 September", zh: "9月7日 · 周一" },
  title: { en: "Sanxing farm, then Qingshui geothermal", zh: "三星农场，再清水地热" },
  intro: {
    en: "A mid-bus through the Xueshan Tunnel — about an hour. Morning with the animals and a scallion pancake you make yourselves; a round-table lunch of Sanxing greens; then Qingshui Geothermal Park — the place English maps call Water Geothermal Square — to boil eggs and corn in the wells and soak your feet while they cook. Home around 18:15. Tuesday is Xiao Wulai, so tonight is a real bedtime.",
    zh: "中巴钻雪山隧道——大约一小时。早上跟小动物玩、自己做一张葱油饼；圆桌吃三星青葱合菜；下午到清水地热公园——英文地图上的 Water Geothermal Square——用井水煮蛋煮玉米，等的时候泡脚。大约18:15回饭店。明天小乌来，今晚认真睡。"
  },
  hero: "sanxing/sanxing-scallion-fields.jpg",
  chips: [
    { en: "中巴 through the tunnel", zh: "中巴钻隧道" },
    { en: "Zhang Mei Ama's Farm", zh: "张美阿嬷农场" },
    { en: "Scallion pancake DIY", zh: "葱油饼手作" },
    { en: "Qingshui geothermal wells", zh: "清水地热煮食" },
    { en: "Home before 19:00", zh: "19:00前回家" }
  ],

  glance: [
    { k: { en: "Leave hotel", zh: "出发" },     v: { en: "08:30 by mid-bus", zh: "8:30 中巴" } },
    { k: { en: "Meals", zh: "三餐" },           v: { en: "Hotel · Sanxing scallion table · geothermal eggs, then nearest at the hotel", zh: "饭店早餐 · 三星葱合菜 · 地热蛋，回饭店就近" } },
    { k: { en: "Cost pp", zh: "每人预估" },     v: { en: "≈ NT$820 excl. mid-bus", zh: "约 NT$820（不含中巴）" } },
    { k: { en: "Walking", zh: "步行强度" },     v: { en: "Light — farm paths, then a valley park", zh: "轻松——农场平路，再山谷公园" } },
    { k: { en: "Book ahead", zh: "需预订" },    v: { en: "Taipei 中巴, farm DIY, lunch table", zh: "台北中巴、农场手作、午餐桌" } }
  ],

  timeline: [
    { time: "07:30", dur: "50 min", type: "rest",
      title: { en: "Breakfast at the hotel", zh: "饭店早餐" },
      note:  { en: "A sit-down breakfast — the bus comes to the door. The tunnel is a highway, not a mountain road, but tablets still help anyone who hates enclosed space. A small towel for wet feet at Qingshui; no swimsuit unless someone wants the optional wooden bathhouse.",
               zh: "可以坐下来吃——车子开到饭店门口。隧道是高速公路，不是山路，但怕密闭的人还是带晕车药。清水地热泡脚带一条小毛巾即可；不必泳衣，除非有人想进木造汤屋。" } },

    { time: "08:30", dur: "90 min", type: "travel",
      title: { en: "Mid-bus: hotel → Sanxing, through the tunnel", zh: "中巴：饭店 → 三星，钻雪山隧道" },
      maps: "https://www.google.com/maps/search/?api=1&query=張美阿嬤農場+三星鄉行健溪一路二段161號",
      note:  { en: "Same 中巴 type as Day 1 — a 19–20 seater, waiting all day, not Kamalan coaches plus taxis. Weekday morning through the Xueshan Tunnel is about seventy to ninety minutes to Sanxing. Tell the driver <b>张美阿嬷农场，行健溪一路二段161号</b> — not the sloth restaurant on 万富七路. That is a different place, and they will try to wave you in.",
               zh: "和第1天同级的中巴——19至20人座，整天等候，不是葛玛兰再加计程车。平日早上钻雪山隧道到三星，大约七十分钟到一个半小时。跟司机说<b>张美阿嬷农场，行健溪一路二段161号</b>——不是万富七路的树懒餐厅。那是另一家，路上会有人拦车。" } },

    { time: "10:00", dur: "1 hr 45 min", type: "sight", img: "sanxing/sanxing-scallion-rows.jpg", cost: 350,
      title: { en: "Zhang Mei Ama's Farm — animals and a scallion pancake", zh: "张美阿嬷农场 —— 小动物和一张葱油饼" },
      placeRef: "Zhang Mei Ama's Farm",
      maps: "https://www.google.com/maps/search/?api=1&query=張美阿嬤農場+三星鄉行健溪一路二段161號",
      note:  { en: "Book the <b>DIY ticket, about NT$350</b> — entry, a handful of feed, and one hands-on: scallion pancake, aiyu jelly, taro balls or bamboo rice, whichever they are running. The 3-year-old is about NT$50 (ages 2–4). Ninety minutes to two hours is the visit: feed the capybara and the deer, make the pancake, sit in the garden. <b>Phone 0935-514-462</b> so twelve are expected. Do not add a second farm afterwards.",
               zh: "请订<b>体验套票，约 NT$350</b>——入园、一把草、再一项手作：葱油饼、爱玉、芋圆或竹筒饭，看当天开哪堂。三岁大约 NT$50（2至4岁）。九十分钟到两小时：喂水豚和梅花鹿、做饼、坐园子里。<b>打 0935-514-462</b>，十二人才不会撞上没位子。不要再加第二座农场。" },
      place: {
        address: { en: "No. 161, Sec. 2, Xingjianxi 1st Rd, Sanxing, Yilan", zh: "宜蘭縣三星鄉行健溪一路二段161號" },
        hours: { en: "09:00–17:00 daily", zh: "每日 09:00–17:00" },
        phone: "0935-514-462",
        rating: "4.4",
        count: { en: "visitor reviews (approx.)", zh: "游客约略" },
        review: { en: "Capybara, deer, a Japanese garden, and a pancake you fold yourselves — the farm Taipei families actually drive to on a weekday.",
                  zh: "水豚、梅花鹿、日式庭园，再自己折一张饼——台北家庭平日真的会开车来的那座农场。" },
        asOf: "2026-08"
      } },

    { time: "11:50", dur: "15 min", type: "travel",
      title: { en: "Short hop to lunch in Sanxing", zh: "短程开去三星吃午餐" },
      maps: "https://www.google.com/maps/search/?api=1&query=田媽媽蔥蒜美食館+三星",
      note:  { en: "Ten to fifteen minutes. The pancake was a snack; this is the meal. Qingshui's eggs and corn come later.",
               zh: "十到十五分钟。刚才那张饼是点心；这才是正餐。清水的蛋和玉米是后面的。" } },

    { time: "12:10", dur: "1 hr 15 min", type: "meal", img: "food-scallion-pancake/food-scallion-pancake-closeup.jpg", cost: 350,
      title: { en: "Lunch — a Sanxing scallion table", zh: "午餐 —— 三星葱合菜" },
      placeRef: "Tian Mama scallion kitchen",
      maps: "https://www.google.com/maps/search/?api=1&query=田媽媽蔥蒜美食館+三星鄉中山路31號",
      note:  { en: "<b>Book a table of twelve at 田妈妈葱蒜美食馆</b> — 03-989-5179 — a round table of Sanxing scallion and garlic dishes, about NT$2,500–5,000 for ten to twelve, so roughly NT$350 a head. 卜肉 if they have it; a plate of the raw scallions as a vegetable, not a garnish. Ask for the bill around 13:15 so you are on the road by 13:30 — Qingshui is fifteen to twenty minutes west. If they cannot seat twelve, 福美田园 is the neighbour with the same round tables.",
               zh: "<b>请订田妈妈葱蒜美食馆十二人桌</b>——03-989-5179——圆桌三星葱蒜合菜，十到十二人约 NT$2,500–5,000，每人大约 NT$350。有卜肉就点；生葱当一道菜，不是点缀。大约13:15买单，13:30上路——清水往西十五到二十分钟。若坐不下十二人，隔壁福美田园也是同样的圆桌。" },
      place: {
        address: { en: "No. 31, Zhongshan Rd, Yide, Sanxing, Yilan", zh: "宜蘭縣三星鄉義德村中山路31號" },
        hours: { en: "Lunch roughly 11:00–14:30", zh: "午餐约 11:00–14:30" },
        phone: "03-989-5179",
        rating: "4.2",
        count: { en: "varies by shop", zh: "各店不一" },
        review: { en: "Scallion as the main event, not a topping — the round table is built for a family of this size.",
                  zh: "葱是主角，不是配料——这种圆桌就是给一家十二口用的。" },
        asOf: "2026-08"
      },
      dishes: ["scallion-pancake", "bu-rou", "sanxing-scallion"] },

    { time: "13:30", dur: "25 min", type: "travel",
      title: { en: "Mid-bus: Sanxing → Qingshui Geothermal Park", zh: "中巴：三星 → 清水地热公园" },
      maps: "https://www.google.com/maps/search/?api=1&query=清水地熱公園+宜蘭縣大同鄉三星路八段501巷150號",
      note:  { en: "Fifteen to twenty minutes west into Datong, plus a few minutes if the last lane is tight. Tell the driver <b>清水地熱公園，三星路八段501巷150號</b>. The last stretch is a narrow valley road — a 中巴 sometimes cannot enter. If it cannot, wait at <b>長埤湖停車場</b> and walk or shuttle the last ten minutes. Monday in September is the kinder version of this problem.",
               zh: "往西进大同十五到二十分钟，最后一段若窄再加几分钟。跟司机说<b>清水地熱公園，三星路八段501巷150號</b>。最后是山谷窄路——中巴有时进不去。进不去就停<b>長埤湖停車場</b>，再走或接驳十分钟。九月周一是这个问题比较客气的版本。" } },

    { time: "13:55", dur: "2 hr", type: "sight", img: "qingshui/qingshui-cooking.jpg", cost: 120,
      title: { en: "Qingshui Geothermal Park — cook in the wells, soak your feet", zh: "清水地热公园 —— 井里煮，脚在泡" },
      placeRef: "Qingshui Geothermal Park",
      maps: "https://www.google.com/maps/search/?api=1&query=清水地熱公園+宜蘭縣大同鄉三星路八段501巷150號",
      note:  { en: "Free entry. Buy eggs, corn and a bamboo basket at the visitor centre — spend about NT$60 per basket and the hire is free (NT$200 deposit, returned). Eggs eight to ten minutes, corn about twenty. Put the baskets in a numbered well, then sit in the <b>free foot pools</b> (about 40°C) while they cook. The wells themselves are 95°C — keep the 3-year-old on the path, not at the rim. This is not a swimsuit spa; 清水泉湯屋 is an optional extra if anyone still wants a body soak. Park closes at 17:00. Leave at 16:00 so the tunnel is still civilised.",
               zh: "免费入园。游客中心买蛋、玉米和竹篓——一篓消费约 NT$60 就免租（押金 NT$200，还篓退）。蛋八到十分钟，玉米大约二十。篓放进有编号的井，再去<b>免费足汤</b>（约40°C）等。井水95°C——三岁的人留在步道上，不要靠井沿。这不是泳衣SPA；清水泉汤屋是有人还想整身泡才加的。园区17:00关门。16:00离开，隧道还从容。" },
      place: {
        address: { en: "No. 150, Ln. 501, Sec. 8, Sanxing Rd, Datong, Yilan", zh: "宜蘭縣大同鄉三星路八段501巷150號" },
        hours: { en: "09:00–17:00 daily (closed Lunar New Year's Eve)", zh: "每日 09:00–17:00（农历除夕休园）" },
        phone: "03-989-4500",
        rating: "4.4",
        count: { en: "visitor reviews (approx.)", zh: "游客约略" },
        review: { en: "Steam, bamboo baskets, eggs you timed yourselves — the geothermal square Taipei families actually drive to on a weekday.",
                  zh: "蒸汽、竹篓、自己计时的蛋——台北家庭平日真的会开车来的那座地热广场。" },
        asOf: "2026-08"
      },
      dishes: ["geothermal-egg"] },

    { time: "16:00", dur: "90 min", type: "travel",
      title: { en: "Mid-bus home through the tunnel", zh: "中巴钻隧道回家" },
      note:  { en: "Further inland than the tunnel mouth, so the ride home is about ninety minutes on a Monday. Leave at 16:00, not 16:45. Wet feet and a highway is fine; a 17:00 closing plus the evening clog is not.",
               zh: "比隧道口更靠山，周一回程大约九十分钟。16:00走，不要16:45。湿脚配高速公路没问题；卡在17:00关门再加傍晚车潮不行。" } },

    { time: "18:15", type: "rest",
      title: { en: "Back to the hotel", zh: "回饭店" },
      note:  { en: "Home at a civilised hour, on purpose. Nearest food, lights out by 22:00 — Xiao Wulai starts early.",
               zh: "早回来，是刻意的。就近吃一点，22:00熄灯——明天小乌来，出发早。" } }
  ],

  places: [
    {
      name: { en: "Zhang Mei Ama's Farm", zh: "张美阿嬷农场" },
      tw: "張美阿嬤農場 · 宜蘭縣三星鄉行健溪一路二段161號",
      maps: "https://www.google.com/maps/search/?api=1&query=張美阿嬤農場+三星鄉行健溪一路二段161號",
      images: [
        "sanxing/sanxing-scallion-rows.jpg",
        "sanxing/sanxing-scallion-fields.jpg",
        "sanxing/sanxing-plain.jpg",
        "food-scallion-pancake/food-scallion-pancake-yilan-booth.jpg"
      ],
      history: {
        en: "Sanxing sits on the western edge of the Lanyang Plain, where the mountains drop into scallion fields. The township's green onions — 三星葱 — are the ones Taiwanese cooks name when they want the sweet, fat stalk, not the thin supermarket kind. Zhang Mei Ama's Farm is a small family operation in that landscape: a Japanese-style garden, a handful of animals you can actually feed, and a DIY bench for the pancake that is this county's signature snack. It is not a theme park. That is why a weekday morning with a three-year-old works.",
        zh: "三星在兰阳平原西缘，山脚落下就是葱田。乡里的三星葱，是台湾厨师要甜、要粗那一种时会点名的葱，不是超市细的那种。张美阿嬷农场是这座风景里的家庭园子：日式庭、几只真的能喂的动物、一张做葱油饼的桌子——那是宜兰的招牌点心。不是主题乐园。所以平日早上带三岁的，才用得上。"
      },
      famous: {
        en: "Capybara, sika deer, alpacas, and the <b>scallion-pancake DIY</b> that turns the visit into something you ate, not only photographed. The garden is the rest of it.",
        zh: "水豚、梅花鹿、草泥马，加上<b>葱油饼手作</b>——这一站变成吃进去的，不只是拍到的。其余就是那座园子。"
      },
      locals: {
        en: "<b>Go to No. 161, Sec. 2, Xingjianxi 1st Road.</b> A restaurant calling itself Zhang Mei Ama 2.0 / 树懒餐厅 sits nearby and will flag cars at the land-god shrine. They are not the farm. Staff in green uniforms at the original gate are the ones you want. Weekends fill the car park by 10:30; a Monday in September will not.",
        zh: "<b>请去行健溪一路二段161号。</b>附近有自称张美阿嬷2.0／树懒餐厅的店，会在土地公庙拦车。那不是农场。原址门口穿军绿色制服的才是。周末10:30前停车场就会满；九月的周一不会。"
      },
      doThis: {
        en: "Feed first, while the animals are still interested. Then the DIY — one pancake each is enough; this is not lunch. Forty minutes in the garden if anyone wants to sit. Back on the bus by 11:50.",
        zh: "先喂，趁动物还有兴致。再做手作——一人一张饼就够，这不是午餐。想坐的人在园子里四十分钟。11:50上车。"
      },
      tip: {
        en: "DIY ticket about NT$350, half-ticket ages 2–4 about NT$50, under two free. Phone <b>0935-514-462</b>. 09:00–17:00. zhangmeiama.weebly.com. The mid-bus fits the car park on a weekday; if it does not, wait on the county road.",
        zh: "体验套票约 NT$350，2至4岁半票约 NT$50，两岁以下免费。电话 <b>0935-514-462</b>。09:00–17:00。zhangmeiama.weebly.com。平日中巴进得了停车场；进不去就停县道上等。"
      }
    },
    {
      name: { en: "Tian Mama scallion kitchen", zh: "田妈妈葱蒜美食馆" },
      tw: "田媽媽蔥蒜美食館 · 宜蘭縣三星鄉義德村中山路31號",
      maps: "https://www.google.com/maps/search/?api=1&query=田媽媽蔥蒜美食館+三星鄉中山路31號",
      images: [
        "food-scallion-pancake/food-scallion-pancake-closeup.jpg",
        "food-scallion-pancake/food-scallion-pancake-flaky.jpg",
        "sanxing/sanxing-scallion-fields.jpg"
      ],
      history: {
        en: "Sanxing lunch is scallion and garlic from the fields you just drove through, served on a round table that is meant for ten or twelve, not for a couple with a side of greens. 田妈妈 is one of the farm-kitchen names the township uses for that table — scallion as a dish, 卜肉 if the kitchen has it, a duck if they have roasted one. A local vegetable-and-meat lunch, eaten dry, before the water.",
        zh: "三星的午餐就是刚开车经过的那些田里的葱和蒜，上的是十人或十二人的圆桌，不是两人配一盘青菜。田妈妈是乡里拿来开这种桌的农厨名字之一——葱当一道菜，有卜肉就点，有烤鸭也行。在地的肉和菜，干着吃，再去碰水。"
      },
      famous: {
        en: "A <b>round table of scallion dishes</b> — stir-fried, in the soup, raw on the side — and Yilan 卜肉, the lightly battered pork strips that belong to this plain.",
        zh: "<b>一桌葱</b>——炒的、汤里的、生的摆旁边——再加宜兰卜肉，这片平原上那道薄浆猪肉。"
      },
      locals: {
        en: "Book. A walk-in twelve on a weekday still waits, or splits. 03-989-5179. If they are full, 福美田园 does the same round-table arithmetic a few minutes away. Eat here — Qingshui sells eggs and corn, not a meal.",
        zh: "请先订。平日十二人现场一样要等，或拆桌。03-989-5179。满了，几分钟外的福美田园算的是同一笔圆桌账。在这里吃——清水卖的是蛋和玉米，不是一餐。"
      },
      doThis: {
        en: "One table, not two. Scallion dishes, 卜肉, rice. Nobody needs a second restaurant today, and nobody should still be hungry for Luodong Night Market.",
        zh: "一桌，不要两桌。葱、卜肉、白饭。今天不必再找第二家餐厅，也不该再饿到要去罗东夜市。"
      },
      tip: {
        en: "No. 31 Zhongshan Road, Yide, Sanxing. Lunch 11:00–14:30. Confirm they can seat twelve at one table. Ask for the bill by 13:15.",
        zh: "三星义德村中山路31号。午餐 11:00–14:30。确认十二人一桌。13:15前买单。"
      }
    },
    {
      name: { en: "Qingshui Geothermal Park", zh: "清水地热公园" },
      tw: "清水地熱公園 · 宜蘭縣大同鄉三星路八段501巷150號",
      maps: "https://www.google.com/maps/search/?api=1&query=清水地熱公園+宜蘭縣大同鄉三星路八段501巷150號",
      images: [
        "qingshui/qingshui-cooking.jpg",
        "qingshui/qingshui-steam.jpg",
        "qingshui/qingshui-park.jpg",
        "qingshui/qingshui-well.jpg"
      ],
      history: {
        en: "English booking sites call this Water Geothermal Square. On the ground it is 清水地熱公園, a valley on the Sanxing–Datong line where CPC drilled Taiwan's first geothermal power plant in 1981. The wells still throw steam; the park turned that heat into cooking pools and foot baths. The water is a sodium-bicarbonate spring, pale and faintly sulphurous, about 95°C at the well and 40°C at your ankles. It is the version of a Yilan soak that a three-year-old can actually do: shoes off, not a swimsuit.",
        zh: "英文订票网站叫它 Water Geothermal Square。实地是清水地热公园，三星与大同交界的山谷，中油1981年在这里打出台湾第一座地热发电厂。井还在喷蒸汽；园区把热拿来做煮食池和足汤。泉水是碳酸氢钠，微黄、略带硫磺，井口约95°C，脚踝约40°C。这是三岁也做得来的宜兰泡法：脱鞋，不是泳衣。"
      },
      famous: {
        en: "Bamboo baskets in the wells — <b>eggs, corn, water bamboo</b> — and the free foot pools while you wait. Steam over the valley is the rest of the photograph.",
        zh: "井里的竹篓——<b>蛋、玉米、茭白笋</b>——等的时候泡免费足汤。山谷上的蒸汽是照片的其余部分。"
      },
      locals: {
        en: "Buy at the visitor centre; do not bring plastic nets. Spend NT$60 per basket and hire is free. Number the basket, then walk away — nobody needs to stand over 95°C water. The 3-year-old stays on the path. 清水泉湯屋 is a wooden bathhouse on site if anyone still wants a full soak; swimsuits and caps, extra ticket. It is not why you came.",
        zh: "在游客中心买；不要自带塑料网。一篓消费 NT$60 就免租。记篓号，走开——没人需要站在95°C水边。三岁的人留在步道。清水泉汤屋是园内木造大众池，有人还想整身泡再买票，泳衣泳帽。不是今天来的理由。"
      },
      doThis: {
        en: "Baskets in first. Corn takes twenty minutes, so start that, then eggs, then the foot pool. Eat at the tables, cool shell eggs in the spring-water trough if they offer one. Two hours is enough. Back on the bus at 16:00.",
        zh: "先下篓。玉米要二十分钟，先下玉米，再下蛋，再去足汤。桌上吃，有冷却池就只放带壳的蛋。两小时够。16:00上车。"
      },
      tip: {
        en: "09:00–17:00. Free entry; parking about NT$50 for a car — ask the driver what a 中巴 pays, and whether it can enter 501巷. If not, 長埤湖停車場. Phone <b>03-989-4500</b>. A named typhoon on the tunnel is the kill switch, not the park calendar.",
        zh: "09:00–17:00。免费入园；小客车停车约 NT$50——问司机中巴怎么算、501巷进不进得去。进不去就長埤湖停车场。电话 <b>03-989-4500</b>。真正会取消的是隧道封了的台风，不是园区月历。"
      }
    }
  ],

  food: [
    { id: "scallion-pancake", name: { en: "Sanxing scallion pancake", zh: "三星葱油饼" }, pinyin: "sān xīng cōng yóu bǐng",
      img: "food-scallion-pancake/food-scallion-pancake-closeup.jpg", price: 60,
      taste: { en: "The farm DIY is a thin, flaky pancake folded around a fist of fat Sanxing scallion — sweet rather than sharp, more vegetable than seasoning. Eat it standing, then save room for the round table. This is the county's snack, not its lunch.",
               zh: "农场手作是薄、分层的饼，包进一把粗的三星葱——甜多于辛，是菜不是香料。站着吃，肚子留给圆桌。这是宜兰的点心，不是午餐。" },
      order: { en: "The DIY ticket includes one. If you want another later, say <b>cōng yóu bǐng</b>. At a stall, hold up fingers.",
               zh: "体验套票已含一张。还想再吃就说「葱油饼」。摊位上比手指。" } },
    { id: "bu-rou", name: { en: "Yilan bu-rou", zh: "宜兰卜肉" }, pinyin: "bǔ ròu",
      img: "food-scallion-pancake/food-scallion-pancake-flaky.jpg", price: 180,
      taste: { en: "Lightly battered strips of pork, fried and then often slipped into a clear soup or eaten with garlic and soy. A Lanyang Plain dish, not a night-market snack — savoury, mild, and the meat course that belongs next to a table of scallions.",
               zh: "薄浆猪肉条，炸过，常再滑进清汤，或蘸蒜和酱油。兰阳平原的菜，不是夜市小吃——咸鲜、不冲，正好配一桌葱。" },
      order: { en: "Ask for <b>bǔ ròu</b> on the table. If they offer 蒜味肉羹 instead, that is the neighbouring soup — also right.",
               zh: "桌上点「卜肉」。若改上蒜味肉羹，那是隔壁那碗汤——也对。" } },
    { id: "sanxing-scallion", name: { en: "Sanxing scallion as a dish", zh: "三星葱当一道菜" }, pinyin: "sān xīng cōng",
      img: "sanxing/sanxing-scallion-fields.jpg", price: 150,
      taste: { en: "Fat, sweet stalks, stir-fried or served raw. The point of coming to Sanxing for lunch is that the onion is the vegetable, not the garnish. Order it the way you would order greens anywhere else.",
               zh: "粗、甜的茎，炒或生吃。来三星吃午餐，就是让葱当青菜，不是点缀。点法跟别处点青菜一样。" },
      order: { en: "Say <b>sān xīng cōng</b> and let them decide fried or raw. One plate for the table.",
               zh: "说「三星葱」，炒或生让他们决定。一桌一盘。" } },
    { id: "geothermal-egg", name: { en: "Geothermal egg and corn", zh: "地热蛋和玉米" }, pinyin: "dì rè dàn",
      img: "qingshui/qingshui-cooking.jpg", price: 80,
      taste: { en: "An egg cooked in 95°C well water, often pulled at eight minutes so the yolk is still soft, and a cob of corn that takes about twenty. A faint sulphur note is the point, not a fault. This is the park's snack, after a proper lunch.",
               zh: "95°C井水煮的蛋，常在八分钟捞起来，蛋黄还软；玉米大约二十分钟。一点点硫磺味是重点，不是缺点。这是园区的点心，正餐已经在三星吃过。" },
      order: { en: "Buy at the visitor centre. Ask for <b>dì rè dàn</b> and <b>yù mǐ</b>. One basket for three or four people is enough.",
               zh: "游客中心买。说「地热蛋」和「玉米」。三四人一篓就够。" } }
  ],

  verify: [
    { title: { en: "Phone Zhang Mei Ama — DIY for twelve, and the right address", zh: "打给张美阿嬷 —— 十二人手作，以及正确地址" },
      body: { en: "Call <b>0935-514-462</b> for twelve DIY tickets around 10:00. Confirm <b>No. 161, Sec. 2, Xingjianxi 1st Road</b> — not 树懒餐厅 / Zhang Mei Ama 2.0 on 万富七路. They will flag cars. Yours is the original gate, green uniforms.",
              zh: "打 <b>0935-514-462</b> 订十二份体验套票，约10:00。确认是<b>行健溪一路二段161号</b>——不是万富七路的树懒餐厅／张美阿嬷2.0。他们会拦车。你们要的是原址门口、军绿色制服。" } },
    { title: { en: "Book the Sanxing lunch table of twelve", zh: "订三星十二人午餐桌" },
      body: { en: "田妈妈葱蒜美食馆, <b>03-989-5179</b>, No. 31 Zhongshan, Yide. One table, not two, 12:10. If they are full, 福美田园. Eat here — Qingshui is eggs and corn, not lunch.",
              zh: "田妈妈葱蒜美食馆，<b>03-989-5179</b>，义德中山路31号。一桌不要两桌，12:10。满了就福美田园。在这里吃——清水是蛋和玉米，不是午餐。" } },
    { title: { en: "Tell the mid-bus driver about Qingshui's last lane", zh: "跟中巴司机说清水最后那段路" },
      body: { en: "清水地熱公園, No. 150 Ln. 501 Sec. 8 Sanxing Rd, Datong. <b>03-989-4500</b>. Ask whether a 19–20 seater can enter 501巷. If not, wait at 長埤湖停車場. No spa booking. Towel for feet; keep the toddler off the 95°C wells.",
              zh: "清水地熱公園，大同鄉三星路八段501巷150號。<b>03-989-4500</b>。问19至20人座进不进得了501巷。进不去就停長埤湖停车场。不用订SPA。泡脚带毛巾；三岁别靠95°C的井。" } },
    { title: { en: "If a typhoon is forecast, cancel the whole excursion", zh: "若预报台风，整天取消" },
      body: { en: "Light rain is fine — the farm has indoor corners, and Qingshui has shelters over the wells and the foot pools. A named storm on the tunnel is not worth gambling on; stay in Taipei and use the indoor list. Do not send twelve people to Tainan instead. TRA along the coast is the fallback only if the tunnel is the sole problem and the farm is already off.",
              zh: "小雨没问题——农场有室内角落，清水的井和足汤有遮棚。隧道碰上有命名的台风不值得赌；留台北走室内清单。不要改把十二人送去台南。只有隧道有事、农场已经取消时，才用得上沿海岸的台铁。" } }
  ],

  logistics: {
    book: [
      { en: "<b>Taipei mid-bus, hotel 08:30 → Sanxing → Qingshui → hotel ~18:15.</b> A 中巴, waiting. Same operator as Days 1, 4, 5, 6 and 7. About NT$9,300–14,000 for ten hours. Ask whether the vehicle can enter 501巷; if not, wait at 長埤湖. Enquiry on the Transport page.",
        zh: "<b>台北中巴，饭店08:30 → 三星 → 清水地热 → 饭店约18:15。</b>中巴，等候。可与第1、4、5、6、7天同一家。十小时约 NT$9,300–14,000。问501巷进不进得去；进不去就停長埤湖。询价见交通页。" },
      { en: "<b>Zhang Mei Ama DIY ×12, 10:00.</b> 0935-514-462. Address: 行健溪一路二段161号.",
        zh: "<b>张美阿嬷体验套票十二份，10:00。</b>0935-514-462。地址：行健溪一路二段161号。" },
      { en: "<b>田妈妈 table ×12, 12:10.</b> 03-989-5179. One table, not two.",
        zh: "<b>田妈妈十二人桌，12:10。</b>03-989-5179。一桌，不要拆两桌。" },
      { en: "<b>Qingshui Geothermal Park needs no ticket.</b> Buy baskets on site. Towel for feet. Toddler off the wells.",
        zh: "<b>清水地热公园不用订票。</b>现场买篓。泡脚带毛巾。小孩离井。" }
    ],
    notes: [
      { en: "Pack a small day bag. A towel for wet feet, tablets, a change of shirt if anyone wants the optional bathhouse. Leave everything else at the hotel.",
        zh: "只带一个随身小包。泡脚毛巾、晕车药；有人要进汤屋再带换洗衣。其他留饭店。" },
      { en: "The bus meets you at the hotel, not at Taipei Bus Station. You do not need Kamalan tickets.",
        zh: "车子在饭店接，不是台北转运站。不必买葛玛兰票。" },
      { en: "Do not add Luodong Night Market. Raohe was Sunday. Tuesday is Xiao Wulai.",
        zh: "不要再加罗东夜市。饶河是周日。周二是小乌来。" },
      { en: "Dinner tonight is whatever is nearest. Lights out by 22:00.",
        zh: "今晚就近吃。22:00熄灯。" }
    ]
  },

  taxi: [
    { tw: "張美阿嬤農場 三星鄉行健溪一路二段161號", say: "Zhang Mei Ama's Farm, No. 161 Xingjianxi, Sanxing" },
    { tw: "田媽媽蔥蒜美食館 三星鄉中山路31號", say: "Tian Mama scallion kitchen, Zhongshan Road, Sanxing" },
    { tw: "清水地熱公園 大同鄉三星路八段501巷150號", say: "Qingshui Geothermal Park, Datong" }
  ]
};
