/* ============================================================
   DAY 3 · Mon 7 Sep 2026 · Zhuangwei kingdom + Qingshui geothermal
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[3] = {
  n: 3,
  date:  { en: "Monday 7 September", zh: "9月7日 · 周一" },
  title: { en: "Lanyang Kingdom, then Qingshui geothermal", zh: "兰阳动植物王国，再清水地热" },
  intro: {
    en: "A mid-bus through the Xueshan Tunnel — about an hour to the coast. Morning with kangaroos, capybara and teddy sheep at 蘭陽動植物王國, which opens at 10:00 on a weekday; a walk-in jar-chicken table in Zhuangwei, or seafood if the table prefers fish; then across the plain to Qingshui Geothermal Park — the place English maps call Water Geothermal Square — to boil eggs and corn in the wells and soak your feet while they cook. Home around 18:15. Tuesday is the lantern day, so tonight is a real bedtime.",
    zh: "中巴钻雪山隧道——大约一小时到海边。早上在兰阳动植物王国看袋鼠、水豚和泰迪羊，平日10:00才开门；壮围走进去吃甕缸鸡，想吃鱼就改海鲜热炒；再横过平原到清水地热公园——英文地图上的 Water Geothermal Square——用井水煮蛋煮玉米，等的时候泡脚。大约18:15回饭店。明天放天灯，今晚认真睡。"
  },
  hero: "zhuangwei/zhuangwei-dune-swing.jpg",
  chips: [
    { en: "中巴 through the tunnel", zh: "中巴钻隧道" },
    { en: "Lanyang Flora & Fauna Kingdom", zh: "兰阳动植物王国" },
    { en: "Zhuangwei jar chicken or seafood", zh: "壮围甕缸鸡或海鲜" },
    { en: "Qingshui geothermal wells", zh: "清水地热煮食" },
    { en: "Home before 19:00", zh: "19:00前回家" }
  ],

  glance: [
    { k: { en: "Leave hotel", zh: "出发" },     v: { en: "08:30 by mid-bus", zh: "8:30 中巴" } },
    { k: { en: "Meals", zh: "三餐" },           v: { en: "Hotel · Zhuangwei jar chicken or seafood · geothermal eggs, then nearest at the hotel", zh: "饭店早餐 · 壮围甕缸鸡或海鲜 · 地热蛋，回饭店就近" } },
    { k: { en: "Cost pp", zh: "每人预估" },     v: { en: "≈ NT$780 excl. mid-bus", zh: "约 NT$780（不含中巴）" } },
    { k: { en: "Walking", zh: "步行强度" },     v: { en: "Light — indoor-outdoor park paths, then a valley park", zh: "轻松——室内外园区平路，再山谷公园" } },
    { k: { en: "Book ahead", zh: "需预订" },    v: { en: "Taipei 中巴", zh: "台北中巴" } }
  ],

  timeline: [
    { time: "07:30", dur: "50 min", type: "rest",
      title: { en: "Breakfast at the hotel", zh: "饭店早餐" },
      note:  { en: "A sit-down breakfast — the bus comes to the door. The tunnel is a highway, not a mountain road, but tablets still help anyone who hates enclosed space. A small towel for wet feet at Qingshui; no swimsuit unless someone wants the optional wooden bathhouse.",
               zh: "可以坐下来吃——车子开到饭店门口。隧道是高速公路，不是山路，但怕密闭的人还是带晕车药。清水地热泡脚带一条小毛巾即可；不必泳衣，除非有人想进木造汤屋。" } },

    { time: "08:30", dur: "90 min", type: "travel",
      title: { en: "Mid-bus: hotel → Zhuangwei, through the tunnel", zh: "中巴：饭店 → 壮围，钻雪山隧道" },
      maps: "https://www.google.com/maps/search/?api=1&query=蘭陽動植物王國+宜蘭縣壯圍鄉紅葉路62-13號",
      note:  { en: "Same 中巴 type as Day 1 — a 19–20 seater, waiting all day, not Kamalan coaches plus taxis. Weekday morning through the Xueshan Tunnel to Zhuangwei is about seventy to ninety minutes — the coast side of the Lanyang Plain, not Sanxing. Tell the driver <b>兰阳动植物王国，壮围乡红叶路62-13号</b>. Free parking at 壯圍大橋右岸. Arrive at opening: weekdays start at 10:00, not 09:30.",
               zh: "和第1天同级的中巴——19至20人座，整天等候，不是葛玛兰再加计程车。平日早上钻雪山隧道到壮围，大约七十分钟到一个半小时——是兰阳平原靠海这一侧，不是三星。跟司机说<b>兰阳动植物王国，壮围乡红叶路62-13号</b>。免费停车场在壯圍大橋右岸。卡着开门到：平日10:00才开，不是09:30。" } },

    { time: "10:00", dur: "2 hr", type: "sight", img: "lanyang-kingdom/lanyang-kangaroo.jpg", cost: 280, pay: "mixed",
      payNote: { en: "Walk-up is often cash. Skip this cash if you prepaid on Klook.", zh: "现场买票多半要现金。若已用 Klook 预付，就不必再备这笔。" },
      title: { en: "Lanyang Flora & Fauna Kingdom — kangaroos, capybara, teddy sheep", zh: "兰阳动植物王国 —— 袋鼠、水豚、泰迪羊" },
      placeRef: "Lanyang Flora & Fauna Kingdom",
      maps: "https://www.google.com/maps/search/?api=1&query=蘭陽動植物王國+宜蘭縣壯圍鄉紅葉路62-13號",
      note:  { en: "Walk-up tickets: adult about <b>NT$280</b>, ages 12 and under / 65+ about NT$180, under 90 cm or under two free — the 3-year-old is usually free. Feed is extra at each zone. Two hours is the visit: the 10:00 flying-squirrel slot, goat race at 10:30, teddy-sheep feeding at 11:00, then kangaroos, capybara and alpacas outdoors. A large indoor greenhouse means light rain is fine. <b>Skip the plant DIY and the kimono photos</b> — they eat the Qingshui afternoon. Phone <b>0958-507-905</b> if you want twelve expected at the gate.",
               zh: "现场买票即可：全票约 <b>NT$280</b>，12岁以下／65岁以上约 NT$180，身高未满90公分或未满两岁免费——三岁多半免票。各区饲料另计。两小时：赶上10:00鼯鼠飞行、10:30山羊竞走、11:00侏儒绵羊喂食，再到户外袋鼠、水豚、羊驼。室内温室很大，小雨照去。<b>不要加植物手作和浴衣拍照</b>——会吃掉清水的下午。想让门口知道十二人，打 <b>0958-507-905</b>。" },
      place: {
        address: { en: "No. 62-13, Hongye Rd, Zhuangwei, Yilan", zh: "宜蘭縣壯圍鄉紅葉路62-13號" },
        hours: { en: "Weekdays 10:00–17:00; weekends 09:30–17:00", zh: "平日 10:00–17:00；周末 09:30–17:00" },
        phone: "0958-507-905",
        rating: "4.7",
        count: { en: "visitor reviews (approx.)", zh: "游客约略" },
        review: { en: "Kangaroos you can actually stand next to, a rainforest greenhouse, and a weekday morning that is not a scrum — the animal park Taipei families drive to when they want more than a garden.",
                  zh: "真的能站到旁边的袋鼠、一座雨林温室，平日早上不是人挤人——台北家庭想要比园子更多一点时，会开车来的那座动物园。" },
        asOf: "2026-08"
      } },

    { time: "12:00", dur: "15 min", type: "travel",
      title: { en: "Short hop to lunch in Zhuangwei", zh: "短程开去壮围吃午餐" },
      maps: "https://www.google.com/maps/search/?api=1&query=大嵌城甕缸雞+壯圍鄉新南路102-6號",
      note:  { en: "About fifteen minutes southwest to 新南路, on the way toward Yilan City. This is the meal. Qingshui's eggs and corn come later, after a forty-to-fifty-minute crossing of the plain. If the table wants seafood instead, 壮围海之味 on 中央路 is about ten minutes from the park — same lunch window.",
               zh: "往西南大约十五分钟到新南路，顺路朝宜兰市。这才是正餐。清水的蛋和玉米是后面的，还要横过平原四十分钟到五十分钟。想吃海鲜就改中央路的壮围海之味——离园区大约十分钟，同一段午餐。" } },

    { time: "12:15", dur: "1 hr 5 min", type: "meal", img: "food-jar-chicken/food-jar-chicken-barrel.jpg", cost: 380, pay: "cash",
      payNote: { en: "Da Qancheng is cash. The seafood fallback is cash too.", zh: "大嵌城收现金。改吃海鲜也是现金。" },
      title: { en: "Lunch — jar chicken and stir-fries, or seafood", zh: "午餐 —— 甕缸鸡配热炒，或海鲜" },
      placeRef: "Da Qancheng jar chicken",
      maps: "https://www.google.com/maps/search/?api=1&query=大嵌城甕缸雞+壯圍鄉新南路102-6號",
      note:  { en: "<b>Walk in at 大嵌城甕缸鸡</b> — 03-938-7700 — a big countryside dining room with coach parking, open 11:00–20:00, no lunch cutoff. Order à la carte: two jar-roast chickens (about NT$700 each, the kiln needs ~45–60 minutes), clams, greens, a tofu, rice. Roughly NT$350–400 a head. From the park at 11:00, phone the two chickens so they hit the table as you sit; that is an order, not a reservation-only gate. Cash. Ask for the bill around 13:10 so you are on the road by 13:20. <b>Seafood instead:</b> 壮围海之味, 03-938-8616, No. 288 Sec. 2 Zhongyang — sashimi and stir-fries, walk-in on a weekday, lunch until ~14:00, closed Wednesday. Do not go back to the granary.",
               zh: "<b>走进大嵌城甕缸鸡即可</b>——03-938-7700——乡间大餐厅，游览车停得下，11:00–20:00开，没有午餐打烊。单点：两只甕缸鸡（一只约 NT$700，窑要四五十分钟）、蛤蜊、青菜、豆腐、白饭。每人大约 NT$350–400。11:00在园区打两只鸡，入座就上桌；这是点菜，不是预约制门槛。现金。大约13:10买单，13:20上路。<b>改吃海鲜：</b>壮围海之味，03-938-8616，中央路二段288号——生鱼片和热炒，平日走进去，午餐约到14:00，周三公休。不要再回去谷仓。" },
      place: {
        address: { en: "No. 102-6, Xinnan Rd, Zhuangwei, Yilan", zh: "宜蘭縣壯圍鄉新南路102-6號" },
        hours: { en: "11:00–20:00 daily", zh: "每日 11:00–20:00" },
        phone: "03-938-7700",
        rating: "4.3",
        count: { en: "visitor reviews (approx.)", zh: "游客约略" },
        review: { en: "Jar-roast free-range chicken, a courtyard that takes a mid-bus, and a weekday walk-in that actually has a table for twelve.",
                  zh: "放山雞甕烤、中巴进得去的院子，平日走进去十二人真的有桌。" },
        asOf: "2026-08"
      },
      dishes: ["weng-gang-ji", "chao-ge-li", "zi-zhong-shishu"] },

    { time: "13:20", dur: "50 min", type: "travel",
      title: { en: "Mid-bus: Zhuangwei → Qingshui Geothermal Park", zh: "中巴：壮围 → 清水地热公园" },
      maps: "https://www.google.com/maps/search/?api=1&query=清水地熱公園+宜蘭縣大同鄉三星路八段501巷150號",
      note:  { en: "Forty to fifty minutes west across the Lanyang Plain — Yilan City, then Sanxing, then into Datong — plus a few minutes if the last lane is tight. Leave lunch on time. Tell the driver <b>清水地熱公園，三星路八段501巷150號</b>. The last stretch is a narrow valley road — a 中巴 sometimes cannot enter. If it cannot, wait at <b>長埤湖停車場</b> and walk or shuttle the last ten minutes. Monday in September is the kinder version of this problem.",
               zh: "往西横过兰阳平原四十分钟到五十分钟——宜兰市、再三星、再进大同——最后一段若窄再加几分钟。午餐必须准时走。跟司机说<b>清水地熱公園，三星路八段501巷150號</b>。最后是山谷窄路——中巴有时进不去。进不去就停<b>長埤湖停車場</b>，再走或接驳十分钟。九月周一是这个问题比较客气的版本。" } },

    { time: "14:10", dur: "1 hr 50 min", type: "sight", img: "qingshui/qingshui-cooking.jpg", cost: 120, pay: "cash",
      payNote: { en: "Eggs, corn and the basket deposit are at the visitor-centre counter.", zh: "蛋、玉米和竹篓押金都在游客中心柜台，收现金。" },
      title: { en: "Qingshui Geothermal Park — cook in the wells, soak your feet", zh: "清水地热公园 —— 井里煮，脚在泡" },
      placeRef: "Qingshui Geothermal Park",
      maps: "https://www.google.com/maps/search/?api=1&query=清水地熱公園+宜蘭縣大同鄉三星路八段501巷150號",
      note:  { en: "Free entry. Buy eggs, corn and a bamboo basket at the visitor centre — spend about NT$60 per basket and the hire is free (NT$200 deposit, returned). Eggs eight to ten minutes, corn about twenty. Put the baskets in a numbered well, then sit in the <b>free foot pools</b> (about 40°C) while they cook. The wells themselves are 95°C — keep the 3-year-old on the path, not at the rim. This is not a swimsuit spa; 清水泉湯屋 is an optional extra if anyone still wants a body soak. Park closes at 17:00. Leave at 16:00 so the tunnel is still civilised — ninety minutes here is enough if lunch ran long.",
               zh: "免费入园。游客中心买蛋、玉米和竹篓——一篓消费约 NT$60 就免租（押金 NT$200，还篓退）。蛋八到十分钟，玉米大约二十。篓放进有编号的井，再去<b>免费足汤</b>（约40°C）等。井水95°C——三岁的人留在步道上，不要靠井沿。这不是泳衣SPA；清水泉汤屋是有人还想整身泡才加的。园区17:00关门。16:00离开，隧道还从容——午餐若拖了，这里九十分钟也够。" },
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
      note:  { en: "Home at a civilised hour, on purpose. Nearest food, lights out by 22:00 — lanterns tomorrow, bus at 10:00.",
               zh: "早回来，是刻意的。就近吃一点，22:00熄灯——明天放天灯，中巴10:00。" } }
  ],

  places: [
    {
      name: { en: "Lanyang Flora & Fauna Kingdom", zh: "兰阳动植物王国" },
      tw: "蘭陽動植物王國 · 宜蘭縣壯圍鄉紅葉路62-13號",
      maps: "https://www.google.com/maps/search/?api=1&query=蘭陽動植物王國+宜蘭縣壯圍鄉紅葉路62-13號",
      images: [
        "lanyang-kingdom/lanyang-kangaroo.jpg",
        "lanyang-kingdom/lanyang-capybara.jpg",
        "lanyang-kingdom/lanyang-alpaca.jpg",
        "lanyang-kingdom/lanyang-greenhouse.jpg"
      ],
      history: {
        en: "Zhuangwei sits on the Pacific edge of the Lanyang Plain, sand dunes and rice instead of scallion fields. 蘭陽動植物王國 opened in 2024 on 紅葉路: a few thousand ping of indoor greenhouse and outdoor paddocks, billed as Taiwan's first kangaroo park. Capybara, alpacas, teddy sheep, meerkats, sloths, and a rainforest hall you can use when Yilan does what Yilan does. It is a proper animal park, not a farm café. That is why a weekday morning with a three-year-old works — and why two hours, not a whole afternoon, is the right length before Qingshui.",
        zh: "壮围在兰阳平原靠太平洋这一侧，是沙丘和稻田，不是葱田。兰阳动植物王国2024年在红叶路开门：几千坪室内温室加户外牧场，自称全台第一座袋鼠公园。水豚、羊驼、泰迪羊、狐獴、树懒，再加一座宜兰下雨时用得上的雨林馆。是正经的动物园，不是农场咖啡馆。所以平日早上带三岁的，才用得上——也所以去清水之前，两小时正好，不要一下午。"
      },
      famous: {
        en: "Eastern grey and red <b>kangaroos you can feed</b>, capybara, Southdown teddy sheep, and a weekday morning block of short feeding shows — flying squirrels at 10:00, goats at 10:30, sheep at 11:00.",
        zh: "能喂的东灰袋鼠和红袋鼠、水豚、南丘泰迪羊，加上平日上午那几场短喂食——10:00鼯鼠、10:30山羊、11:00绵羊。"
      },
      locals: {
        en: "<b>Weekdays open at 10:00.</b> Weekends start at 09:30. Navigate to the park, then park at 壯圍大橋右岸 if the gate car park is tight. Tickets at the door or on Klook; feed is separate. The on-site CAPY café is a snack, not lunch for twelve.",
        zh: "<b>平日10:00开门。</b>周末09:30。导航到园区，门口车位紧就停壯圍大橋右岸。门票现场或 Klook；饲料另买。园内 CAPY 餐厅是点心，不是十二人的午餐。"
      },
      doThis: {
        en: "Arrive at opening. Feed first, while the animals are still interested, and stand in for the 10:00–11:15 shows. Forty minutes outdoors with the kangaroos if the weather holds. Back on the bus by 12:00. Do not start a 40-minute plant DIY.",
        zh: "卡着开门到。先喂，趁动物还有兴致，再赶上10:00到11:15的场次。天气好就在袋鼠区四十分钟。12:00上车。不要开一场四十分钟的植物手作。"
      },
      tip: {
        en: "Adult about NT$280, concession about NT$180, under 90 cm free. Phone <b>0958-507-905</b>. Weekdays 10:00–17:00. The mid-bus fits the bridge-side car park; if it does not, wait on 紅葉路.",
        zh: "全票约 NT$280，优待约 NT$180，未满90公分免费。电话 <b>0958-507-905</b>。平日 10:00–17:00。中巴进得了桥边停车场；进不去就停红叶路上等。"
      }
    },
    {
      name: { en: "Da Qancheng jar chicken", zh: "大嵌城甕缸鸡" },
      tw: "大嵌城甕缸雞 · 宜蘭縣壯圍鄉新南路102-6號",
      maps: "https://www.google.com/maps/search/?api=1&query=大嵌城甕缸雞+壯圍鄉新南路102-6號",
      images: [
        "food-jar-chicken/food-jar-chicken-barrel.jpg",
        "food-jar-chicken/food-bamboo-chicken-guanziling.jpg",
        "food-hakka/food-hakka-stir-fry.jpg"
      ],
      history: {
        en: "Yilan's countryside lunch is often a kiln, not a set menu. 大嵌城 sits in the Xinnan paddies with a brick chimney and a courtyard that tour buses actually use. The chicken is free-range, roasted over longan wood, about forty-five minutes in the jar; the rest of the table is stir-fries you pick yourselves — clams, the farm's own greens, a tofu, rice. It is not reservation-only. Weekdays take a walk-in twelve. Phone the chickens an hour ahead so you are not waiting on the kiln.",
        zh: "宜兰乡下的午餐常常是一座窑，不是一套餐。大嵌城在新南的稻田里，有砖烟囱，游览车进得去院子。鸡是放山的，龙眼木烤，窑里大约四十五分钟；其余自己点热炒——蛤蜊、自家青菜、豆腐、白饭。不是预约制。平日十二人走进去有桌。提前一小时打电话点鸡，就不必坐等窑。"
      },
      famous: {
        en: "The <b>甕缸鸡, about NT$700 a bird</b> — crisp skin, a bowl of chicken fat, a dish of pepper-salt — and the stir-fries around it. Two birds for twelve.",
        zh: "<b>甕缸鸡，一只约 NT$700</b>——皮脆、一碗鸡油、一碟椒盐——再配一圈热炒。十二人两只。"
      },
      locals: {
        en: "Walk in. 03-938-7700. Cash. Coach parking on site. The chicken is the only thing that needs a head start — call from the park at 11:00. If the table wants fish instead, 壮围海之味 on 中央路 is the seafood walk-in, closed Wednesday. Eat here — Qingshui sells eggs and corn, not a meal.",
        zh: "走进去。03-938-7700。现金。园里停得下中巴。只有鸡要提早——11:00在园区打。想吃鱼就中央路的壮围海之味，周三公休。在这里吃——清水卖的是蛋和玉米，不是一餐。"
      },
      doThis: {
        en: "Two chickens, clams, greens, one tofu, rice. One table, not two. Nobody needs a second restaurant today, and nobody should still be hungry for Luodong Night Market.",
        zh: "两只鸡、蛤蜊、青菜、一盘豆腐、白饭。一桌，不要两桌。今天不必再找第二家餐厅，也不该再饿到要去罗东夜市。"
      },
      tip: {
        en: "No. 102-6 Xinnan Road, Zhuangwei. 11:00–20:00. Phone the chickens at 11:00. Ask for the bill by 13:10.",
        zh: "壮围新南路102-6号。11:00–20:00。11:00打电话点鸡。13:10前买单。"
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
        en: "Baskets in first. Corn takes twenty minutes, so start that, then eggs, then the foot pool. Eat at the tables, cool shell eggs in the spring-water trough if they offer one. Ninety minutes to two hours is enough. Back on the bus at 16:00.",
        zh: "先下篓。玉米要二十分钟，先下玉米，再下蛋，再去足汤。桌上吃，有冷却池就只放带壳的蛋。九十分钟到两小时够。16:00上车。"
      },
      tip: {
        en: "09:00–17:00. Free entry; parking about NT$50 for a car — ask the driver what a 中巴 pays, and whether it can enter 501巷. If not, 長埤湖停車場. Phone <b>03-989-4500</b>. A named typhoon on the tunnel is the kill switch, not the park calendar.",
        zh: "09:00–17:00。免费入园；小客车停车约 NT$50——问司机中巴怎么算、501巷进不进得去。进不去就長埤湖停车场。电话 <b>03-989-4500</b>。真正会取消的是隧道封了的台风，不是园区月历。"
      }
    }
  ],

  food: [
    { id: "weng-gang-ji", name: { en: "Jar-roast chicken", zh: "甕缸鸡" }, pinyin: "wèng gāng jī",
      img: "food-jar-chicken/food-jar-chicken-barrel.jpg", price: 700,
      taste: { en: "A whole free-range bird from a longan-wood kiln — skin that still snaps, meat that is firm rather than fatty, a bowl of chicken fat and a dish of pepper-salt on the side. Tear it by hand. Two birds for twelve is the right amount, not a garnish around a set menu.",
               zh: "龙眼木窑里的整只放山鸡——皮还脆、肉结实不肥，旁边一碗鸡油、一碟椒盐。用手撕。十二人两只刚好，不是套餐边上的点缀。" },
      order: { en: "Phone two <b>wèng gāng jī</b> from the park at 11:00. On the table, ask for the fat and the salt. Cash.",
               zh: "11:00在园区打两只「甕缸鸡」。桌上要鸡油和椒盐。现金。" } },
    { id: "chao-ge-li", name: { en: "Stir-fried clams", zh: "塔香蛤蜊" }, pinyin: "tǎ xiāng gé lí",
      img: "food-clam-soup/food-clam-soup-night-market.jpg", price: 160,
      taste: { en: "A wok of clams with basil, garlic and ginger — the coastal plate that belongs next to a Zhuangwei chicken, not a soup. Order two for twelve.",
               zh: "九层塔、蒜、姜爆的一锅蛤蜊——配壮围烤鸡的海边那盘，不是汤。十二人点两份。" },
      order: { en: "Ask for <b>tǎ xiāng gé lí</b>. Two plates. If they only have garlic clams, that is also right.",
               zh: "点「塔香蛤蜊」。两盘。若只有蒜头蛤蜊，也对。" } },
    { id: "zi-zhong-shishu", name: { en: "The farm's own greens", zh: "自种时蔬" }, pinyin: "zì zhòng shí shū",
      img: "food-hakka/food-hakka-stir-fry.jpg", price: 140,
      taste: { en: "Sweet-potato leaves or whatever they picked that morning, garlic-fried. The point of a countryside table is that the vegetable is a dish, not a garnish.",
               zh: "地瓜叶或当天摘的菜，蒜炒。来乡下吃饭，就是让青菜当一道菜，不是点缀。" },
      order: { en: "Say <b>shí shū</b> and let them decide which green. One plate, or two if the kids will actually eat it.",
               zh: "说「时蔬」，哪一种让他们决定。一盘；小孩真吃再两盘。" } },
    { id: "geothermal-egg", name: { en: "Geothermal egg and corn", zh: "地热蛋和玉米" }, pinyin: "dì rè dàn",
      img: "qingshui/qingshui-cooking.jpg", price: 80,
      taste: { en: "An egg cooked in 95°C well water, often pulled at eight minutes so the yolk is still soft, and a cob of corn that takes about twenty. A faint sulphur note is the point, not a fault. This is the park's snack, after a proper lunch.",
               zh: "95°C井水煮的蛋，常在八分钟捞起来，蛋黄还软；玉米大约二十分钟。一点点硫磺味是重点，不是缺点。这是园区的点心，正餐已经在壮围吃过。" },
      order: { en: "Buy at the visitor centre. Ask for <b>dì rè dàn</b> and <b>yù mǐ</b>. One basket for three or four people is enough.",
               zh: "游客中心买。说「地热蛋」和「玉米」。三四人一篓就够。" } }
  ],

  verify: [
    { title: { en: "Confirm Lanyang Kingdom is open — weekdays 10:00", zh: "确认兰阳动植物王国有开 —— 平日10:00" },
      body: { en: "No. 62-13 Hongye Rd, Zhuangwei. <b>0958-507-905</b>. Weekdays 10:00–17:00; do not arrive at 09:30. Tickets at the door. A Facebook check the night before catches a rare closed day.",
              zh: "壮围红叶路62-13号。<b>0958-507-905</b>。平日 10:00–17:00；不要09:30到。门票现场买。出发前一晚看脸书，偶发公休才不会空跑。" } },
    { title: { en: "Phone two jar chickens at 11:00 — walk-in, not a booking", zh: "11:00打两只甕缸鸡 —— 走进去，不是订位" },
      body: { en: "大嵌城甕缸鸡, <b>03-938-7700</b>, No. 102-6 Xinnan. Call from the park at 11:00 for two birds so they are ready at 12:15. Weekday walk-in; the kiln is the only wait. Seafood instead: 壮围海之味, 03-938-8616. Eat here — Qingshui is eggs and corn, not lunch.",
              zh: "大嵌城甕缸鸡，<b>03-938-7700</b>，新南路102-6号。11:00在园区打两只，12:15上桌。平日走进去；等的只是窑。改吃海鲜：壮围海之味，03-938-8616。在这里吃——清水是蛋和玉米，不是午餐。" } },
    { title: { en: "Tell the mid-bus driver about Qingshui's last lane", zh: "跟中巴司机说清水最后那段路" },
      body: { en: "清水地熱公園, No. 150 Ln. 501 Sec. 8 Sanxing Rd, Datong. <b>03-989-4500</b>. Zhuangwei to Qingshui is forty to fifty minutes — leave lunch at 13:20. Ask whether a 19–20 seater can enter 501巷. If not, wait at 長埤湖停車場. No spa booking. Towel for feet; keep the toddler off the 95°C wells.",
              zh: "清水地熱公園，大同鄉三星路八段501巷150號。<b>03-989-4500</b>。壮围到清水四十分钟到五十分钟——午餐13:20走。问19至20人座进不进得了501巷。进不去就停長埤湖停车场。不用订SPA。泡脚带毛巾；三岁别靠95°C的井。" } },
    { title: { en: "If a typhoon is forecast, cancel the whole excursion", zh: "若预报台风，整天取消" },
      body: { en: "Light rain is fine — the kingdom is mostly greenhouse, and Qingshui has shelters over the wells and the foot pools. A named storm on the tunnel is not worth gambling on; stay in Taipei and use the indoor list. Do not send twelve people to Tainan instead.",
              zh: "小雨没问题——王国多半在温室里，清水的井和足汤有遮棚。隧道碰上有命名的台风不值得赌；留台北走室内清单。不要改把十二人送去台南。" } }
  ],

  logistics: {
    book: [
      { en: "<b>Taipei mid-bus, hotel 08:30 → Zhuangwei → Qingshui → hotel ~18:15.</b> A 中巴, waiting. Same operator as Days 1, 4, 5, 6 and 7. About NT$9,300–14,000 for ten hours. Ask whether the vehicle can enter 501巷; if not, wait at 長埤湖. Enquiry on the Transport page.",
        zh: "<b>台北中巴，饭店08:30 → 壮围 → 清水地热 → 饭店约18:15。</b>中巴，等候。可与第1、4、5、6、7天同一家。十小时约 NT$9,300–14,000。问501巷进不进得去；进不去就停長埤湖。询价见交通页。" },
      { en: "<b>Lanyang Kingdom tickets ×12, 10:00.</b> On site or Klook. Adult ~NT$280, child ~NT$180, under 90 cm free. 0958-507-905. Address: 紅葉路62-13號.",
        zh: "<b>兰阳动植物王国门票十二份，10:00。</b>现场或 Klook。全票约 NT$280，儿童约 NT$180，未满90公分免费。0958-507-905。地址：红叶路62-13号。" },
      { en: "<b>Two jar chickens at 大嵌城, phone 11:00.</b> 03-938-7700. Walk-in. Address: 新南路102-6號. Seafood alt: 壮围海之味, 03-938-8616.",
        zh: "<b>大嵌城两只甕缸鸡，11:00打电话。</b>03-938-7700。走进去。地址：新南路102-6号。海鲜备案：壮围海之味，03-938-8616。" },
      { en: "<b>Qingshui Geothermal Park needs no ticket.</b> Buy baskets on site. Towel for feet. Toddler off the wells.",
        zh: "<b>清水地热公园不用订票。</b>现场买篓。泡脚带毛巾。小孩离井。" }
    ],
    notes: [
      { en: "Pack a small day bag. A towel for wet feet, tablets, a change of shirt if anyone wants the optional bathhouse. Leave everything else at the hotel.",
        zh: "只带一个随身小包。泡脚毛巾、晕车药；有人要进汤屋再带换洗衣。其他留饭店。" },
      { en: "The bus meets you at the hotel, not at Taipei Bus Station. You do not need Kamalan tickets.",
        zh: "车子在饭店接，不是台北转运站。不必买葛玛兰票。" },
      { en: "Do not add Luodong Night Market. Raohe was Sunday. Tuesday is the lantern day.",
        zh: "不要再加罗东夜市。饶河是周日。周二放天灯。" },
      { en: "Dinner tonight is whatever is nearest. Lights out by 22:00.",
        zh: "今晚就近吃。22:00熄灯。" }
    ]
  },

  taxi: [
    { tw: "蘭陽動植物王國 壯圍鄉紅葉路62-13號", say: "Lanyang Flora & Fauna Kingdom, No. 62-13 Hongye Rd, Zhuangwei" },
    { tw: "大嵌城甕缸雞 壯圍鄉新南路102-6號", say: "Da Qancheng jar chicken, No. 102-6 Xinnan Road, Zhuangwei" },
    { tw: "壯圍海之味 壯圍鄉中央路二段288號", say: "Zhuangwei Hai Zhi Wei seafood, No. 288 Sec. 2 Zhongyang, Zhuangwei" },
    { tw: "清水地熱公園 大同鄉三星路八段501巷150號", say: "Qingshui Geothermal Park, Datong" }
  ]
};
