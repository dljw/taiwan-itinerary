/* ============================================================
   DAY 7 · Fri 11 Sep 2026 · Dihua Street, then the 20:00 flight
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[7] = {
  n: 7,
  date:  { en: "Friday 11 September", zh: "9月11日 · 周五" },
  title: { en: "Dihua Street, and home", zh: "迪化街采买，然后回家" },
  intro: {
    en: "A 20:00 flight means a real last day, not a mad scramble. Check out, hand the bags to the bell desk, and spend the morning on the handsomest street in old Taipei — the one the camphor and tea from Daxi arrived at a century ago, and still the best place in the city to find things worth carrying home. Toast the week with a proper farewell lunch, then head for the airport with time to spare.",
    zh: "晚上八点的班机，换来的是完整的最后一天，而不是匆忙冲刺。退房、把行李交给柜台，把上午留给老台北最好看的一条街——一百年前，大溪的樟脑与茶叶正是运到这里；如今仍是全城最值得寻宝的地方。用一顿像样的告别午餐为这趟旅程干杯，再从容出发去机场。"
  },
  hero: "dihua-street/dihua-street-shophouses.jpg",
  chips: [
    { en: "Flight 20:00", zh: "班机 20:00" },
    { en: "Bags at the hotel", zh: "行李寄饭店" },
    { en: "Gift shopping", zh: "采买伴手礼" },
    { en: "中巴 to airport 14:45", zh: "14:45 中巴送机" }
  ],

  glance: [
    { k: { en: "Check out", zh: "退房" },       v: { en: "10:00, store bags", zh: "10:00，行李寄放" } },
    { k: { en: "Meals", zh: "餐食" },           v: { en: "Hotel · farewell lunch · airport", zh: "饭店 · 告别午餐 · 机场" } },
    { k: { en: "Cost pp", zh: "每人预估" },     v: { en: "≈ NT$450 + gifts + bus share", zh: "约 NT$450＋伴手礼＋送机分摊" } },
    { k: { en: "Walking", zh: "步行强度" },     v: { en: "Light — flat street", zh: "轻松，街道平坦" } },
    { k: { en: "Airport", zh: "机场" },         v: { en: "Leave 14:45 sharp", zh: "14:45 准时出发" } }
  ],

  timeline: [
    { time: "08:30", dur: "1 hr", type: "rest",
      title: { en: "Last hotel breakfast, finish packing", zh: "最后一顿饭店早餐，收尾打包" },
      note:  { en: "Round up everyone's purchases now — six days of night-market hauls add up fast, and someone's suitcase will not close without a fight.",
               zh: "现在就把大家买的战利品集中起来——六天夜市累积下来的成果不容小觑，总有人的行李箱怎么压都关不上。" } },

    { time: "10:00", dur: "30 min", type: "rest",
      title: { en: "Check out, leave the luggage", zh: "退房，行李寄放" },
      note:  { en: "Clear every room and hand it all to the bell desk. Carry only what the morning needs — you'll swing back for the bags at 14:30.",
               zh: "退掉所有房间，行李通通交给柜台。只带上午用得到的东西——14:30再回来取行李。" } },

    { time: "10:30", dur: "15 min", type: "travel",
      title: { en: "Taxi to Dihua Street", zh: "搭车到迪化街" },
      maps: "https://www.google.com/maps/search/?api=1&query=迪化街",
      note:  { en: "Two taxis over to Dadaocheng — ask the driver for the Yongle Market end and stroll north from there.",
               zh: "两台车前往大稻埕——请司机停在永乐市场那端，再悠闲地往北走。" } },

    { time: "10:45", dur: "2 hr", type: "sight", img: "dihua-street/dihua-yongle-market.jpg",
      title: { en: "Dihua Street — gifts and old Taipei", zh: "迪化街 —— 伴手礼与老台北" },
      placeRef: "Dihua Street, Dadaocheng",
      maps: "https://www.google.com/maps/search/?api=1&query=迪化街",
      note:  { en: "Dried goods, tea, nougat, pineapple cakes, and bolts of fabric at Yongle Market — flat underfoot the whole way, arcaded against sun and rain, with cafés whenever the group needs to sit a while.",
               zh: "南北货、茶叶、牛轧糖、凤梨酥，还有永乐市场整卷的布料——全程平坦好走，骑楼遮阳挡雨，想歇脚时沿街都有咖啡馆。" },
      place: {
        address: { en: "Dihua St, Datong District", zh: "台北市大同區迪化街" },
        hours: { en: "Shops roughly 09:00–18:00", zh: "店家约 09:00–18:00" },
        rating: "4.4",
        count: { en: "~15k Google reviews (approx.)", zh: "Google 约 1.5 万则" },
        review: { en: "Taipei's best gift street — dried goods, tea, pineapple cakes under arcades. Flat and café-friendly for a last morning.",
                  zh: "台北最好的伴手礼街——骑楼下南北货、茶叶、凤梨酥。平坦，最后一个上午好走也好坐。" },
        asOf: "2026-08"
      },
      dishes: ["pineapple-cake", "nougat", "dried-goods"] },

    { time: "12:30", dur: "1.25 hr", type: "meal", cost: 450,
      title: { en: "Farewell lunch — Rice & Shine", zh: "告别午餐 —— 稻舍" },
      maps: "https://www.google.com/maps/search/?api=1&query=稻舍+迪化街",
      note:  { en: "Rated 4.3. Refined Taiwanese cooking in a beautifully restored shophouse — the rice is the star here, alongside braised duck and shrimp rolls. <b>Reserve for twelve.</b> Yongle Market's stalls make a good casual fallback.",
               zh: "评价4.3。老屋改造的精致台菜——招牌是那碗饭，还有卤鸭与虾卷。<b>请订十二人位。</b>永乐市场的小吃摊是很棒的备案。" },
      place: {
        address: { en: "Rice & Shine (稻舍), Dihua Street", zh: "台北市大同區迪化街稻舍" },
        hours: { en: "Lunch · reserve for twelve", zh: "午餐 · 请订十二人" },
        rating: "4.3",
        count: { en: "~2k Google reviews (approx.)", zh: "Google 约两千则" },
        review: { en: "Restored rice-merchant shophouse — the rice itself is the point. Book ahead or fall back to Yongle Market stalls.",
                  zh: "米商老屋改造——招牌就是那碗饭。请先订位，订不到就改永乐市场小吃。" },
        asOf: "2026-08"
      },
      dishes: ["refined-taiwanese"] },

    { time: "14:00", dur: "15 min", type: "travel",
      title: { en: "Taxi back to the hotel", zh: "搭车回饭店" } },

    { time: "14:30", type: "rest",
      title: { en: "Collect luggage, final headcount", zh: "取行李，最后清点人数" },
      note:  { en: "Count the bags, then count the people. Passports out and double-checked before anyone moves.",
               zh: "行李数一遍，人也数一遍。出发前把护照拿出来仔细核对。" } },

    { time: "14:45", dur: "50 min", type: "travel", img: "taoyuan-airport/taoyuan-airport-terminal1-interior.jpg",
      title: { en: "Mid-bus to Taoyuan Airport", zh: "中巴前往桃园机场" },
      maps: "https://www.google.com/maps/search/?api=1&query=桃園國際機場",
      note:  { en: "The same 20-seat 中巴 as Day 1, booked as a point-to-point send-off — not an hourly day. About fifty minutes door to door. A van will not fit twelve people and a week of luggage.",
               zh: "跟第1天同一台20人座中巴，订成点对点送机——不要开钟点。门口到航厦约五十分钟。十二人和一周行李，九人座装不下。" } },

    { time: "15:45", type: "travel",
      title: { en: "Arrive Taoyuan Airport", zh: "抵达桃园机场" },
      maps: "https://www.google.com/maps/search/?api=1&query=桃園國際機場",
      note:  { en: "Four hours ahead of an international departure — deliberately generous, clearing the usual three-hour guideline with room to spare for an older group, a three-year-old's pace, and no shortage of bags.",
               zh: "国际航班起飞前四小时抵达——这是刻意安排的宽裕，比一般建议的三小时还多留一些余地，照顾到长辈的步调、三岁孩子的节奏，还有一堆行李。" } },

    { time: "17:00", type: "meal",
      title: { en: "Check in, immigration, last bites", zh: "报到、出境、最后再吃一点" },
      maps: "https://www.google.com/maps/search/?api=1&query=桃園國際機場",
      note:  { en: "Check the bags first, then eat. If anyone forgot a gift for someone back home, the airside pineapple cakes are the perfect way to spend the last of the cash.",
               zh: "先托运行李，再从容吃点东西。如果还有人忘了买礼物，管制区里的凤梨酥正好把最后的现金花掉。" },
      place: {
        address: { en: "Taoyuan International Airport", zh: "桃園國際機場" },
        hours: { en: "Airside shops until departure", zh: "管制区商店至起飞前" },
        review: { en: "Bags first, then food — pineapple cakes airside are the last-chance gift run.",
                  zh: "先托运再吃饭——管制区凤梨酥是最后的伴手礼机会。" },
        asOf: "2026-08"
      } },

    { time: "20:00", type: "travel",
      title: { en: "Depart Taoyuan", zh: "桃园起飞" },
      note:  { en: "Safe travels home, and welcome back with suitcases considerably fuller than they left.",
               zh: "一路平安回家——行李箱肯定比出发时沉了不少。" } }
  ],

  places: [
    {
      name: { en: "Dihua Street, Dadaocheng", zh: "大稻埕迪化街" },
      tw: "迪化街 · 台北大同區",
      maps: "https://www.google.com/maps/search/?api=1&query=迪化街",
      images: [
        "dihua-street/dihua-street-shophouses.jpg",
        "dihua-street/dihua-street-buildings.jpg",
        "dihua-street/dihua-street-facades.jpg",
        "dihua-street/dihua-street-night.jpg"
      ],
      history: {
        en: "Dadaocheng — 'the big drying yard' — filled up in the 1850s with families who'd left Bangka after a feud, then boomed once Tamsui opened to foreign trade in 1860. A Scottish merchant, John Dodd, began exporting Formosa Oolong from right here, and within a generation Dihua Street was handling most of Taiwan's tea, alongside Chinese medicine, cloth and dried goods carried down the river — including the very camphor and tea from Daxi you saw on your first morning. Walk its length and the buildings read like a timeline: low Fujian shophouses at one end, giving way to Western-influenced baroque façades from the 1920s, all of it rescued from the wrecking ball by a long preservation fight and now filled with a new generation of shopkeepers.",
        zh: "大稻埕——「大片晒谷场」之意——在1850年代因艋舺械斗后迁来的家族而聚居起来，1860年淡水开港通商后更是一飞冲天。苏格兰商人陶德（John Dodd）就是从这里把「福尔摩沙乌龙」外销出海，不到一代人的时间，迪化街已掌握台湾大半的茶叶生意，还有沿河运来的中药、布匹与南北货——其中正包括你们第一天早上看到的、来自大溪的樟脑与茶。沿街走去，建筑本身就是一条时间轴：一端是低矮的闽南式店屋，接着是1920年代受西方影响的巴洛克立面；这一切能躲过拆除的命运，靠的是一场漫长的保存运动，如今店里坐镇的多半是新一代年轻店主。"
      },
      famous: {
        en: "<b>The best gift shopping in Taipei</b>, and it isn't close. Dried goods and Chinese medicine spill from open sacks, tea is sold by weight, nougat and pineapple cakes come from bakeries that have been at it for generations, and Yongle Market upstairs sells fabric by the roll. Also here: <b>Xiahai City God Temple</b>, tiny and famous clear across Asia for its matchmaking deity — the Old Man Under the Moon.",
        zh: "<b>台北最好的伴手礼一条街</b>，而且遥遥领先。敞口麻袋里装满南北货与中药材，茶叶秤重卖，牛轧糖与凤梨酥出自传承好几代的老字号，楼上的永乐市场则整卷整卷地卖布。这里还有<b>霞海城隍庙</b>，庙不大，却因月下老人而红遍整个亚洲。"
      },
      locals: {
        en: "Taipei people do their New Year shopping here and treat the rest of the year as the quiet season — good news for you, arriving in September. Their shared tip: buy tea and dried goods from the shop where an older hand is weighing things out for you personally, and buy pineapple cakes wherever the queue has formed — both are reliable signals of the good stuff. The temple is worth ten minutes even if nobody's hunting for a spouse; ask for the red thread anyway, just in case.",
        zh: "台北人在这里办年货，其余时间则被当作淡季——对九月造访的你们来说正是好消息。他们共同的建议是：茶叶和南北货要找那种由长辈亲手秤给你的店，凤梨酥就买排队的那一家——这两个讯号都很准。城隍庙即使没人在求姻缘，也值得进去待上十分钟；不妨顺手求条红线，有备无患。"
      },
      doThis: {
        en: "Walk north up one side of the street and back down the other. Save the heavy, breakable and fragrant purchases for last, so nobody's hauling them the whole morning. Splitting up helps too — the dried-goods shoppers, the tea shoppers, and whoever just wants a café seat will all have a better time apart.",
        zh: "沿街一侧往北走，再从另一侧走回来。重的、易碎的、气味浓的东西留到最后再买，免得提着走一整个上午。分头行动也不错——买南北货的、买茶的、想找咖啡馆坐坐的，各自散开反而更自在。"
      },
      tip: {
        en: "Completely flat, arcaded most of the way, with café seating whenever legs need a break — about as gentle a last morning as it gets. Most shops take cards, though the small dried-goods stalls prefer cash. Vacuum-packed goods travel home just fine; ask before buying anything fresh, since some agricultural products can't cross borders.",
        zh: "全程平坦、大半有骑楼遮荫，累了随时有咖啡馆能坐——最后一个上午再温和不过。多数店家可刷卡，但小型南北货摊偏好现金。真空包装的东西可以安心带回家；生鲜类请先问清楚，有些农产品是无法带出境的。"
      }
    },
    {
      name: { en: "Huashan 1914 Creative Park", zh: "华山1914文创园区" },
      tw: "華山1914文化創意產業園區",
      maps: "https://www.google.com/maps/search/?api=1&query=華山1914文化創意產業園區",
      images: [
        "huashan-1914/huashan-brick-lane.jpg",
        "huashan-1914/huashan-courtyard.jpg"
      ],
      history: {
        en: "A Japanese-era sake and camphor distillery built in 1914, shuttered in 1987, and left derelict until a wave of artists moved in during the 1990s and simply refused to leave. Today it's a park of red-brick warehouses filled with exhibitions, cafés, cinemas and shops — and it's a five-minute walk from your hotel, which is exactly why it keeps turning up as the answer to a spare hour or a rainy afternoon.",
        zh: "1914年建的日治时期酒厂兼樟脑工厂，1987年停产后一度荒废，直到1990年代一批艺术家进驻，索性赖着不走。如今这里是一片红砖仓库组成的园区，满是展览、咖啡馆、电影院与商店——而且离饭店只要走五分钟，难怪它总能成为「多出一小时」或「下雨的下午」的最佳答案。"
      },
      famous: { en: "The most useful spare hour in Taipei — and entirely indoors whenever the sky doesn't cooperate.",
                zh: "台北最实用的一小时空档——天公不作美时，还能完全躲在室内。" },
      tip: { en: "Free to wander; you only pay if you step into an exhibition. Worth keeping in your back pocket all week, not just today.",
             zh: "园区自由逛免费，只有走进展览才要买票。这一周随时用得上，不只今天。" }
    }
  ],

  food: [
    { id: "pineapple-cake", name: { en: "Pineapple cake", zh: "凤梨酥" }, pinyin: "fèng lí sū",
      img: "food-pineapple-cake/food-pineapple-cake-box.jpg", price: 400,
      taste: { en: "Taiwan's go-to gift, for good reason. A short, buttery, faintly salty crust wrapped around a dense jammy centre. The good ones use real pineapple — fibrous, properly tart — while the cheap ones swap in winter melon and taste of little but sugar. Ask which you're buying; the good shops are proud to tell you.",
               zh: "台湾人送礼的第一选择，而且实至名归。奶香酥松、带点咸味的外皮，包着扎实浓郁的果馅。好的用真凤梨，纤维分明、酸度到位；便宜的用冬瓜代替，尝起来就只剩甜味。买之前问一句用的是什么——用心做的店家很乐意告诉你。" },
      order: { en: "<b>Tǔ fèng lí</b> means made with native pineapple — tarter, and the better choice. Boxes of twelve pack well for the trip home.",
               zh: "「土凤梨」代表用本土凤梨制成——比较酸，也是更好的选择。一盒十二入很适合带回家。" } },

    { id: "nougat", name: { en: "Nougat", zh: "牛轧糖" }, pinyin: "niú gá táng",
      img: "food-nougat/food-nougat-taiwan.jpg", price: 300,
      taste: { en: "Milk nougat studded with whole peanuts or almonds — chewier and far less sweet than the European kind. It comes wrapped in edible rice paper, so don't bother peeling it off.",
               zh: "奶香牛轧糖里嵌满整颗花生或杏仁——比欧式的更有嚼劲，也没那么甜。外层包着可以直接吃下肚的糯米纸，不用剥开。" },
      order: { en: "Sold by weight straight from the tin. If you can't decide, just ask for a mixed bag.",
               zh: "从铁罐里现秤现卖。选不出来的话，直接请老板配一包综合口味。" } },

    { id: "dried-goods", name: { en: "Dried goods and medicine", zh: "南北货与中药" }, pinyin: "nán běi huò",
      img: "food-dried-goods/food-dried-goods-sea-cucumbers.jpg", price: null,
      taste: { en: "This is the smell of Dihua Street: dried scallops, mushrooms, longan, goji, red dates, cinnamon bark, all spilling from open sacks along the arcade. Even if you buy nothing at all, walk through it slowly — it's the most sensory ten minutes of the whole trip.",
               zh: "这就是迪化街的味道：干贝、香菇、龙眼干、枸杞、红枣、桂皮，一袋袋敞开在骑楼下。就算什么都不买，也放慢脚步走过去——这是全程最能唤醒感官的十分钟。" },
      order: { en: "Ask before buying anything fresh or agricultural — some items can't cross borders. Vacuum-packed and fully dried goods are almost always fine.",
               zh: "购买生鲜或农产品前请先问清楚——部分品项无法带出境。真空包装与全干货通常没问题。" } },

    { id: "refined-taiwanese", name: { en: "Refined Taiwanese, at the farewell table", zh: "告别餐桌上的精致台菜" }, pinyin: "tái cài",
      img: "dihua-street/dihua-street-scene.jpg", price: 450,
      taste: { en: "Rice & Shine occupies a beautifully restored rice-merchant's shophouse and cooks the food this street was quite literally built on — a bowl of properly cooked rice treated as the main event, alongside braised duck and shrimp rolls. A quieter, more grown-up note to close out a week of night markets.",
               zh: "稻舍坐落在一栋修复得美轮美奂的米商老屋里，做的正是这条街赖以起家的味道——把一碗认真煮好的白饭当作主角，配上卤鸭与虾卷。为一周热闹的夜市之旅，画下比较安静、比较从容的句点。" },
      order: { en: "Reserve for twelve, and ask for the set menu — ordering à la carte for a group this size in a small dining room takes forever.",
               zh: "请订十二人位，并直接问有没有合菜——这么多人在小空间里单点会耗上老半天。" } }
  ],

  verify: [
    { title: { en: "Reserve the farewell lunch, and check the flight", zh: "订好告别午餐，并确认班机" },
      body: { en: "Rice & Shine is a small, beautifully restored shophouse, so a table for twelve at 12:30 on a Friday needs booking well ahead. Also re-check the 20:00 departure time the night before — and if a typhoon is anywhere near Taiwan, check again in the morning.",
              zh: "稻舍是间小巧的老屋餐厅，周五12:30要坐满十二人务必提早订位。另外，请在前一晚再确认一次20:00的起飞时间——若台风逼近，早上请再确认一次。" } },
    { title: { en: "Confirm the 14:45 mid-bus the night before", zh: "前一晚确认14:45那台中巴" },
      body: { en: "Same 20-seat class as Day 1, booked as a point-to-point send-off with that operator. Tell them the terminal once you have the flight details. 14:45 is not the moment to switch to the Airport MRT.",
              zh: "跟第1天同款20人座，跟那家订成点对点送机。航班航厦确定后再告诉司机。14:45可不是改搭机捷的时候。" } }
  ],

  logistics: {
    book: [
      { en: "<b>Rice & Shine, 12:30, twelve people.</b> Rated 4.3. Ask about a set menu.",
        zh: "<b>稻舍，12:30，十二人。</b>评价4.3。顺便问问有没有合菜。" },
      { en: "<b>Mid-bus, hotel 14:45 → Taoyuan Airport.</b> Point-to-point, same 20-seat as Day 1. Enquiry on the Transport page.",
        zh: "<b>中巴，饭店14:45 → 桃园机场。</b>点对点，跟第1天同款20人座。询价见交通页。" },
      { en: "<b>Hotel luggage storage</b> — confirm at check-out that they'll hold everything safely until 14:30.",
        zh: "<b>饭店行李寄放</b>——退房时确认行李会妥善保管到14:30。" }
    ],
    notes: [
      { en: "Passports out and counted twice before you leave the hotel at 14:45.",
        zh: "14:45离开饭店前，护照拿出来清点两遍。" },
      { en: "Spend any leftover NT$ before immigration — airside prices run higher, and loose coins won't convert back home.",
        zh: "出境前把剩下的台币花完——管制区物价较高，零钱回国也换不了。" },
      { en: "Some fresh and agricultural products can't cross borders. Ask before you buy, and hang onto the receipts.",
        zh: "部分生鲜与农产品无法带出境。购买前先问清楚，并留好收据。" },
      { en: "If it's pouring, swap Dihua Street for the underground mall at Taipei Main — right by the hotel — then come back for the 14:45 bus.",
        zh: "如果下起大雨，就把迪化街换成台北车站地下街——就在饭店旁——再回来搭14:45的中巴。" }
    ]
  },

  taxi: [
    { tw: "迪化街 · 永樂市場", say: "Dihua Street, Yongle Market end" },
    { tw: "桃園國際機場 第一航廈", say: "Taoyuan International Airport, Terminal 1" }
  ]
};
