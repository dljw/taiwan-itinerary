/* ============================================================
   DAY 6 · Thu 10 Sep 2026 · Hsu's noodles, Ximending, farewell hotpot
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[6] = {
  n: 6,
  date:  { en: "Thursday 10 September", zh: "9月10日 · 周四" },
  title: { en: "Handmade noodles, then farewell hotpot", zh: "手作麵线，再告别火锅" },
  intro: {
    en: "A hands-on morning in the Shiding hills — throw the dough, eat noodles out of a bamboo trough of spring water — then the van drops you in Ximending. Thursday, so the Red House outdoor market should actually be on. Hang through the afternoon, then the farewell hotpot at 18:30. Hsu's is closed Tuesdays, and Monday is the Yilan day, which is why the noodles sit here.",
    zh: "石碇山里的动手早晨——甩麵、从山泉竹槽里捞麵线——中巴送到西门町。今天周四，红楼户外市集应该有开。下午逛，18:30告别火锅。许家周二公休，周一要去宜兰，所以麵线排在这天。"
  },
  hero: "hsu-noodles/hsu-noodles-flowing.jpg",
  chips: [
    { en: "中巴 to Shiding", zh: "中巴上石碇" },
    { en: "Hsu's booked 10:30", zh: "许家 10:30 已订" },
    { en: "Closed Tuesdays", zh: "周二公休" },
    { en: "Van drops at Ximen", zh: "车在西门町下" },
    { en: "Red House market on", zh: "红楼市集有开" },
    { en: "Farewell hotpot 18:30", zh: "告别火锅 18:30" }
  ],

  budget: { min: 1000, max: 2100,
            note: { en: "Hsu's session, Ximending snacks and the farewell hotpot (now a pricier venue than originally planned) — shopping on top, and the mid-bus sits outside this number",
                    zh: "许家体验、西门町点心与告别火锅（比原计划的选项更贵）——购物另计，中巴也不在这个数字里" } },

  glance: [
    { k: { en: "Leave hotel", zh: "出发" },     v: { en: "09:15 by mid-bus", zh: "9:15 中巴" } },
    { k: { en: "Meals", zh: "三餐" },           v: { en: "Hotel · Hsu's noodles · hotpot", zh: "饭店早餐 · 许家流水麵 · 火锅" } },
    { k: { en: "Cost pp", zh: "每人预估" },     v: { en: "≈ NT$1,000–2,100 + shopping", zh: "约 NT$1,000–2,100＋购物" } },
    { k: { en: "Walking", zh: "步行强度" },     v: { en: "Light — workshop, then flat streets", zh: "轻松——工坊，再走平路" } },
    { k: { en: "Book ahead", zh: "需预订" },    v: { en: "Hsu's ×12 + morning mid-bus + hotpot", zh: "许家十二人＋上午中巴＋火锅" } }
  ],

  timeline: [
    { time: "08:15", dur: "45 min", type: "rest",
      title: { en: "Breakfast at the hotel", zh: "饭店吃早餐" },
      note:  { en: "Eat here. The noodles at 10:30 are lunch, and the mountain road is not the moment for an empty stomach. Motion-sickness tablets before you board.",
               zh: "在饭店吃。十点半的麵线就是午餐，空肚子走山路不合适。上车前先吃晕车药。" } },

    { time: "09:15", dur: "1 hr", type: "travel",
      title: { en: "Mid-bus up to Shiding", zh: "中巴上石碇" },
      maps: "https://www.google.com/maps/search/?api=1&query=石碇許家手工麵線",
      note:  { en: "A winding New Taipei mountain road, about an hour from Zhongzheng. <b>This has to be a 中巴, not a nine-seat van</b> — twelve of you still cannot legally fit in one. The driver waits through the session and then drops you in Ximending. Do not take bus 666; it will eat the morning.",
               zh: "新北山路，从中正出发大约一小时。<b>必须是中巴，不能是九人座</b>——十二个人还是坐不下一台。司机在体验时段等候，然后把人送到西门町。别搭666公车，一早上就没了。" } },

    { time: "10:30", dur: "2 hr", type: "meal", img: "hsu-noodles/hsu-noodles-drying.jpg", cost: 550, pay: "card",
      title: { en: "Hsu's handmade noodles — DIY + flowing noodles", zh: "石碇许家手工麵线 —— DIY＋流水麵" },
      placeRef: "Hsu's handmade noodles",
      maps: "https://www.google.com/maps/search/?api=1&query=石碇許家手工麵線",
      note:  { en: "Booked the <b>10:30 session</b> — handmade-noodle DIY plus 流水麵, about NT$550, deposit already paid for twelve. You throw the dough, they walk you through the thirteen steps, then noodles come down a bamboo trough of cold mountain spring water and you catch them with chopsticks. That is lunch. Ages 6 and under are free; the 3-year-old watches the throwing and joins the catching. Closed Tuesdays; Monday is the Yilan day — so this sits on Thursday.",
               zh: "已订<b>10:30那一场</b>——手作麵线 DIY 加流水麵，约 NT$550，十二人订金已付。自己甩麵，师傅带过十三道工序，然后麵线从山泉竹槽流下来，用筷子捞。这就是午餐。六岁以下免费；三岁的看甩麵、一起捞。周二公休；周一要去宜兰——所以排在周四。" },
      place: {
        address: { en: "No. 3, Sifenzi, Wutu Village, Shiding, New Taipei", zh: "新北市石碇區烏塗里四分子3號" },
        hours: { en: "08:30–16:00; closed Tuesdays. DIY sessions 09:30 and 13:00", zh: "08:30–16:00；周二公休。DIY 场次 09:30、13:00" },
        phone: "02-2663-3004",
        rating: "4.5",
        count: { en: "family-workshop reviews (approx.)", zh: "亲子工坊约略" },
        review: { en: "The flowing-noodle trough is the bit kids remember; book ahead, weekday mornings are calmer than weekends.",
                  zh: "小朋友记得住的是流水麵；请先预约，平日早上比周末从容。" },
        asOf: "2026-08"
      },
      dishes: ["flowing-noodles"] },

    { time: "13:15", dur: "50 min", type: "travel",
      title: { en: "Van drops the group in Ximending", zh: "中巴在西门町下车" },
      maps: "https://www.google.com/maps/search/?api=1&query=西門町",
      note:  { en: "<b>Not the hotel.</b> Tell the driver 西門町 / 西門紅樓. Anyone who is actually full can skip the next snack stop; everyone else is two minutes from Ay-Chung. The afternoon is an hour shorter than it used to be, now that Hsu's runs 10:30 instead of 09:30 — keep the browsing brisk.",
               zh: "<b>不是回饭店。</b>跟司机说「西门町」或「西门红楼」。吃饱的人可以跳过下一站点心；没饱的人，阿宗麵线走两分钟就到。许家改到10:30之后，下午比原本少了一小时——逛街要抓紧点。" } },

    { time: "13:30", dur: "45 min", type: "meal", img: "food-mee-sua/food-mee-sua-shopfront-queue.jpg", cost: 80, pay: "cash",
      payNote: { en: "Ay-Chung and Lao Tian Lu are standing stalls.", zh: "阿宗麵线和老天禄是站着吃的摊，收现金。" },
      title: { en: "Extra bites if anyone is still hungry", zh: "还有肚子的人，再补一点" },
      maps: "https://www.google.com/maps/search/?api=1&query=阿宗麵線",
      note:  { en: "Ay-Chung mee sua and Lao Tian Lu braised meats are the two names worth knowing. Standing food, fast queues, no table of twelve required. Skip this entirely if Hsu's filled you up.",
               zh: "阿宗麵线和老天禄卤味是两家值得记住的名字。站着吃、队伍走得快，不必订十二人桌。许家已经吃饱就整段跳过。" },
      dishes: ["mee-sua", "lao-tian-lu"] },

    { time: "14:30", dur: "2.5 hr", type: "sight", img: "ximending/ximending-red-house-facade.jpg",
      title: { en: "Red House and the pedestrian streets", zh: "红楼与徒步区" },
      placeRef: "Ximending",
      maps: "https://www.google.com/maps/search/?api=1&query=西門紅樓",
      note:  { en: "This is the shopping stretch, not a forty-minute pose. The Red House's octagonal hall is full of small designer shops; the streets around it are streetwear, cinemas, and whatever the aunts point at. The outdoor craft market typically runs Thursday to Sunday — <b>today is Thursday, so it should be on</b>.",
               zh: "这段是认真逛街，不是拍四十分钟就走。红楼八角厅里都是小设计师店；外面是潮牌、电影院，阿姨们指到哪逛到哪。户外创意市集多半周四到周日——<b>今天周四，应该有摊</b>。" },
      place: {
        address: { en: "Ximending pedestrian zone, Wanhua", zh: "台北市萬華區西門町徒步區" },
        hours: { en: "Shops ~11:00–22:00; streets always open", zh: "店家约 11:00–22:00；街道随时可逛" },
        rating: "4.3",
        count: { en: "~40k area reviews (approx.)", zh: "商圈约四万则" },
        review: { en: "Youth fashion, cinemas, and street food — flat and easy. Thursday afternoons are calmer than weekends; it swells after 16:00 when school lets out.",
                  zh: "青年时尚、电影院与小吃——平坦好走。周四下午比周末安静；约16:00放学后人会明显变多。" },
        asOf: "2026-08"
      } },

    { time: "17:00", dur: "30 min", type: "sight", img: "longshan-temple/longshan-temple-entrance-facade.jpg", cost: 20, pay: "cash",
      payNote: { en: "Incense and offering boxes at the temple.", zh: "庙里香火与随喜，现金。" },
      title: { en: "Longshan — optional, and now tight", zh: "龙山寺 —— 想看庙再去，但现在时间很紧" },
      placeRef: "Longshan Temple",
      maps: "https://www.google.com/maps/search/?api=1&query=艋舺龍山寺",
      note:  { en: "Three MRT stops south on the blue line. Now that Hsu's runs an hour later, this afternoon lost its slack — <b>this is realistically a skip unless a couple of people peel off fast</b>, since the new hotpot venue is also a longer ride than the old one. A working temple, then the old street next door and Herb Lane for a cooling tea, if you do go. Anyone who would rather keep shopping in Ximen just stays — the group does not have to move as one.",
               zh: "板南线再往南三站。许家改到10:30之后，下午没了缓冲——<b>这一站现实来说该跳过，除非有人愿意快去快回</b>，因为新订的火锅店比原本那家更远。真要去，先看还在运作的庙，再逛隔壁老街，青草巷喝杯退火的茶。想继续逛西门的人留下就好——今天不必全团一起移动。" },
      place: {
        address: { en: "Bangka Longshan Temple, Wanhua", zh: "台北市萬華區艋舺龍山寺" },
        hours: { en: "Usually 06:00–22:00", zh: "通常 06:00–22:00" },
        rating: "4.6",
        count: { en: "~20k Google reviews (approx.)", zh: "Google 约两万则" },
        review: { en: "Taipei's grandest working temple — incense, carving, and a Thursday afternoon that is calmer than the weekend.",
                  zh: "台北最盛的香火庙之一——香烟、雕工，周四下午比周末清静。" },
        asOf: "2026-08"
      } },

    { time: "17:30", dur: "1 hr", type: "travel",
      title: { en: "MRT to Zhongshan Junior High for the hotpot", zh: "捷运到中山國中站吃火锅" },
      note:  { en: "One transfer from Ximen (blue line to green line), about 30–40 min including the change — longer than the old Zhongshan Station pick, since 如嬌 sits by 中山國中站 instead. Leave Ximen by 17:30 at the latest to make an 18:30 table.",
               zh: "从西门出发要转一趟车（板南线转中山線/松山新店線），含转乘约30–40分钟——比原本的中山站选项远，因为如嬌在中山國中站旁。最晚17:30要离开西门，才赶得上18:30的位子。" } },

    { time: "18:30", dur: "1.5 hr", type: "meal", img: "hotpot/hotpot-taiwan-restaurant.jpg", cost: 1400, pay: "card",
      title: { en: "Farewell dinner — fish-maw chicken hotpot", zh: "告别晚餐 —— 花膠雞火锅" },
      maps: "https://www.google.com/maps/search/?api=1&query=如嬌花膠雞．鍋物+民權東路三段60巷9號",
      note:  { en: "如嬌花膠雞．鍋物 (民權一店) — a premium fish-maw chicken soup hotpot, broth simmered about two days. Pricier and more special-occasion than a standard split-pot place. <b>Book for twelve</b>, ideally 3+ days ahead since the broth takes time to prepare, and confirm by phone that the private room genuinely seats twelve at one table.",
               zh: "如嬌花膠雞．鍋物（民權一店）——顶级花膠鸡汤火锅，汤底熬约两天，比一般鸳鸯锅更精致、也更贵，适合当作告别的仪式感晚餐。<b>请订十二人位</b>，最好提前三天以上，因为汤底需要时间熬煮；也务必电话确认包廂真的能十二人同坐一桌。" },
      place: {
        address: { en: "如嬌花膠雞．鍋物 民權一店, 台北市中山區民權東路三段60巷9號1樓", zh: "如嬌花膠雞．鍋物 民權一店，台北市中山區民權東路三段60巷9號1樓" },
        hours: { en: "Mon–Fri 17:00–23:30, Sat–Sun 12:00–23:30 · phone 02-2509-4588 · reserve", zh: "周一至周五17:00–23:30，周六周日12:00–23:30 · 电话 02-2509-4588 · 务必订位" },
        rating: null,
        count: { en: "featured in Taiwan's \"500盤\" guide (approx.)", zh: "台版米其林「500盤」入选（约略）" },
        review: { en: "Rich, slow-simmered fish-maw chicken broth — a step up in price and occasion from a standard hotpot chain. Confirm private-room capacity and per-head cost by phone before the day; neither is published online.",
                  zh: "浓郁慢炖的花膠鸡汤——比一般连锁火锅更贵、也更有仪式感。出发前请电话确认包廂人数和每人大约花费，这两项网上都查不到。" },
        asOf: "2026-09"
      },
      dishes: ["hotpot", "sha-cha"] },

    { time: "20:30", type: "rest",
      title: { en: "Back to the hotel — pack properly tonight", zh: "回饭店 —— 今晚把行李收好" },
      note:  { en: "Tomorrow morning is Dihua, then the 20:00 flight. Bags closed before you leave.",
               zh: "明天早上迪化街，晚上20:00的班机。出门前行李收好。" } }
  ],

  places: [
    {
      name: { en: "Hsu's handmade noodles", zh: "石碇许家手工麵线" },
      tw: "石碇許家手工麵線 · 新北市石碇區烏塗里四分子3號",
      maps: "https://www.google.com/maps/search/?api=1&query=石碇許家手工麵線",
      images: [
        "hsu-noodles/hsu-noodles-drying.jpg",
        "hsu-noodles/hsu-noodles-flowing.jpg",
        "hsu-noodles/hsu-noodles-shiding-hills.jpg",
        "food-flowing-noodles/food-flowing-noodles-bamboo-trough.jpg"
      ],
      history: {
        en: "Master Hsu Ren-ping grew up in a Shiding tea family, walked away from the tea bushes after junior high, apprenticed at a nearby noodle factory, and came home in 1996 to start this workshop. The water is the mountain's; the method is thirteen traditional steps; the twist is that visitors now throw the dough themselves and eat the result out of a bamboo trough. Closed every Tuesday.",
        zh: "许仁评师傅出身石碇茶家，国中毕业后没接茶园，到附近麵厂当学徒，1996年返乡开了这间工坊。水是山上的，工序是古法十三道；现在的转折是游客自己甩麵，再从竹槽里把成果捞来吃。每周二公休。"
      },
      famous: {
        en: "<b>流水麵 — flowing noodles</b> in cold Shiding spring water, plus the DIY where you actually swing the dough into threads. Original, green-tea and red-yeast colours come down the trough. Groups of five or more can often get a trough to themselves.",
        zh: "<b>流水麵</b>——石碇山泉冰着走，加上自己把麵团甩成细丝的 DIY。原味、绿茶、红麴会从槽里流下来。五人以上常常可以要到独立水道。"
      },
      locals: {
        en: "Taipei families treat this as a kids' morning, not a gourmet pilgrimage. The catching is the point; the noodles you take home in a bag are the souvenir. Book online or on LINE — walk-ins with twelve on a Thursday will be turned away.",
        zh: "台北家庭把这里当小朋友的上午，不是美食朝圣。好玩的是捞麵；袋里带回家的麵线才是伴手礼。请官网或 LINE 预约——周四十二人现场上门会被请回。"
      },
      doThis: {
        en: "Arrive ten minutes early, pay the balance (the site takes a deposit), then let them run the demo before you swing anything. Eat from the trough — nothing else is required for lunch. Bags of noodles to take home are sold at the counter.",
        zh: "提早十分钟到、付尾款（网站会收订金），先看师傅示范再自己甩。从槽里吃就够当午餐。要带回家的麵线在柜台买。"
      },
      tip: {
        en: "Booked via their shop2000 storefront — LINE <b>@a26633004</b> or phone <b>02-2663-3004</b> for follow-up. Sessions run through the morning and afternoon; we booked <b>10:30</b>, since 09:30 and 10:00 were already gone by the time we booked. Under-sixes are free; ages 7+ who only watch pay a small companion fee. The road up is twisty — tablets in the van.",
        zh: "已透过 shop2000 官方商城预约——后续联络 LINE <b>@a26633004</b> 或电话 <b>02-2663-3004</b>。场次从早到下午都有；我们订的是<b>10:30</b>，因为订位时09:30和10:00都已经满了。六岁以下免费；七岁以上只旁观会收一点陪同费。上山路弯——车上先吃药。"
      }
    },
    {
      name: { en: "Ximending", zh: "西门町" },
      tw: "西門町 · 台北萬華區",
      maps: "https://www.google.com/maps/search/?api=1&query=西門町",
      images: [
        "ximending/ximending-youth-street-scene.jpg",
        "ximending/ximending-red-house-facade.jpg",
        "ximending/ximending-cinema-signage.jpg"
      ],
      history: {
        en: "Ximending — 'west gate town' — sprang up outside the old west gate of walled Taipei once the Japanese colonial government levelled the city walls in the 1900s and raised the island's first proper entertainment district here: theatres, teahouses, and the octagonal red-brick Red House market hall in 1908. When the city's commercial centre drifted east to Xinyi in the 1990s, Ximending reinvented itself as the pedestrianised heart of Taiwanese youth culture.",
        zh: "西门町——「西门外的街市」——是日本殖民政府1900年代拆掉台北城墙后，在西门外发展起来的全岛第一个正式娱乐区：戏院、茶馆，还有1908年的八角形红砖「红楼」。1990年代商业重心东移信义之后，西门町又一次转型，变成行人徒步区为核心的台湾青年文化中心。"
      },
      famous: {
        en: "<b>Youth fashion and cinemas</b> packed into a small pedestrianised grid, and the <b>Red House (西門紅樓)</b> at the west end: an octagonal 1908 market hall now full of independent designers, with a weekend creative market spilling onto the plaza.",
        zh: "小小一块行人徒步区里挤满了<b>青年时尚与电影院</b>。西端的<b>红楼</b>是地标：1908年八角市场，如今满是独立设计师，外头周末还有创意市集。"
      },
      locals: {
        en: "Young Taipei treats Ximending as its default hangout — after school, after work, on a first date. Older Taipei remembers it as the original cinema street. Both are still true at once.",
        zh: "对年轻台北人来说，西门町是默认的聚会地——放学后、下班后、第一次约会都来这。年长一辈记得它是原本的电影街。两种记忆同时成立。"
      },
      doThis: {
        en: "Walk the pedestrian core first, then duck into the Red House. Eat standing at Ay-Chung if you still have room, pick up braised meats at Lao Tian Lu, catch a film if anyone wants a rest in the air-con.",
        zh: "先逛徒步区，再钻进红楼。还有肚子就站着吃一碗阿宗，去老天禄买卤味，想吹冷气就看场电影。"
      },
      tip: {
        en: "Completely flat. Weekday afternoons are calmer than weekends; the crowds swell once school lets out around 16:00. You have until about 16:30 — then Zhongshan for hotpot.",
        zh: "完全平坦。平日下午比周末安静；大约16:00放学后人潮会明显变多。你们可以待到16:30左右——然后去中山吃火锅。"
      }
    },
    {
      name: { en: "Longshan Temple", zh: "龙山寺" },
      tw: "艋舺龍山寺 · 台北萬華區",
      maps: "https://www.google.com/maps/search/?api=1&query=艋舺龍山寺",
      images: [
        "longshan-temple/longshan-temple-entrance-facade.jpg",
        "longshan-temple/longshan-temple-incense-worship.jpg",
        "longshan-temple/longshan-temple-main-hall.jpg",
        "longshan-temple/longshan-temple-roof-dragon-detail.jpg"
      ],
      history: {
        en: "Raised in 1738 by settlers from Quanzhou, Fujian, in what was then the river port of Bangka — Taipei's oldest settled district, now called Wanhua. The main hall was destroyed by an American bomb in 1945 and rebuilt afterward. Unusually for visitors, and ordinary for Taiwan, it houses Buddhist, Taoist and folk deities together under one roof.",
        zh: "1738年由福建泉州移民建于当时的河港艋舺——台北最早开发的聚落，也就是今天的萬華。1945年主殿被美军炸毁，之后重建。它同时供奉佛、道与民间信仰的神祇于一庙之中，对台湾人很平常，对第一次来的人仍常是惊喜。"
      },
      famous: {
        en: "Being <b>one of Taipei's grandest working temples</b>, not a museum piece — dense stone and wood carving, and a hall permanently thick with incense. Locals come for health, exams and business, not only matchmaking.",
        zh: "它是<b>台北规模最大、香火最盛的庙宇之一</b>，不是博物馆——精细的石雕木雕，殿内终年香烟缭绕。在地人为了健康、考试、生意来拜，不只是姻缘。"
      },
      locals: {
        en: "Watch for people throwing red crescent-shaped <i>poe</i> blocks on the ground to ask a yes-or-no question. It is everyday devotion, not a show.",
        zh: "留意有人把红色新月形的「筊」掷到地上问神明是或不是。这是日常信仰，不是表演。"
      },
      doThis: {
        en: "Walk the courtyard slowly and look up at the roofline before going in. Afterward, wander into <b>Bopiliao Historical Block</b> next door and <b>Herb Lane (青草巷)</b> for a cooling cup of herbal tea.",
        zh: "进殿前先在庭院慢慢走，抬头看屋脊。之后走到隔壁的<b>剥皮寮</b>，再走几分钟到<b>青草巷</b>喝杯青草茶。"
      },
      tip: {
        en: "Optional after Ximending, not required. Modest dress is appreciated. A Thursday afternoon is a gentle time to go; mornings are the crush of worshippers.",
        zh: "西门町之后的选项，不是必去。服装整齐一点较得体。周四下午算清静；早上才是香客最多的时候。"
      }
    }
  ],

  food: [
    { id: "flowing-noodles", name: { en: "Flowing noodles", zh: "流水麵" }, pinyin: "liú shuǐ miàn",
      img: "food-flowing-noodles/food-flowing-noodles-bamboo-trough.jpg", price: 550,
      taste: { en: "Thin wheat vermicelli, spring-cold, caught from a bamboo trough and eaten with a light bonito soy, kimchi and chilli. Chewy, almost sweet from the mountain water, and gone faster than the DIY certificate they hand you on the way out. The session price covers the throwing and this lunch together.",
               zh: "细麵线，山泉冰过，从竹槽捞起来，配清淡柴鱼酱油、泡菜和辣椒。Q弹，水甚至带一点甜，证书还没塞进袋子，麵就已经没了。场次费用含甩麵和这顿午餐。" },
      order: { en: "Already included in the booked 10:30 DIY + 流水麵 package. Nothing to order on the spot except extra chilli if you want it.",
               zh: "已订的 10:30 DIY＋流水麵套餐里就含在里面。现场顶多再要辣椒。" } },

    { id: "mee-sua", name: { en: "Ay-Chung mee sua", zh: "阿宗麵线" }, pinyin: "ā zōng miàn xiàn",
      img: "food-mee-sua/food-mee-sua-shopfront-queue.jpg", price: 65,
      taste: { en: "Thick, starchy vermicelli in a glossy brown broth with braised pork intestine and bonito, topped with coriander, garlic and chilli oil. Ximending's most famous stall — everyone eats standing at the counter, bowl in hand.",
               zh: "浓稠勾芡的面线，褐色汤头配卤大腸与柴鱼高汤，撒香菜、蒜泥与辣油。西门町最有名的摊子——大家都是端着碗站在柜台边吃。" },
      order: { en: "One size. Extra chilli (<b>duō là</b>) or none (<b>bú yào là</b>). No intestine? <b>bú yào dà cháng</b>.",
               zh: "只有一种份量。要多辣说「多辣」，不要辣说「不要辣」。不吃大腸说「不要大肠」。" } },

    { id: "lao-tian-lu", name: { en: "Lao Tian Lu braised meats", zh: "老天祿" }, pinyin: "lǎo tiān lù",
      img: "food-lao-tian-lu/food-lao-tian-lu-shopfront.jpg", price: 150,
      taste: { en: "Braised duck tongues, wings, gizzards and dried meats in a five-spice soy glaze, sold by weight to eat as you walk. <b>More than one Ximending shop trades under the 老天祿 name</b> — good either way.",
               zh: "卤鸭舌、鸭翅、鸭胗与肉干，五香酱油卤汁，秤重卖，边走边吃。<b>西门町不只一家店挂「老天祿」</b>——卤味都不差。" },
      order: { en: "Point at the case and hold up fingers, or ask for a mixed bag — <b>zōng hé</b>.",
               zh: "指着柜子比重量，或说「综合」。" } },

    { id: "hotpot", name: { en: "Fish-maw chicken hotpot", zh: "花膠雞火锅" }, pinyin: "huā jiāo jī huǒ guō",
      img: "hotpot/hotpot-meat-spread.jpg", price: 1400,
      taste: { en: "The right farewell dinner: the whole group of twelve around one table for two hours, but a step up from a standard split-pot night. The broth is the point here — fish maw (a prized dried fish bladder) simmered into a chicken soup for about two days until it's thick, gelatinous and richly savoury. Milder and more delicate than a Sichuan mala pot; you eat it almost like a tonic soup with the hotpot ingredients mixed in.",
               zh: "最适合的告别晚餐：十二个人围着一锅聊两小时，但比一般鸳鸯锅更讲究。这里的重点是汤——花膠（珍贵的鱼鳔干货）炖进鸡汤约两天，炖到浓稠胶质、鲜味十足。比川式麻辣锅温和细腻得多，喝起来近似食补的滋补汤，配着涮进去的食材一起吃。" },
      order: { en: "The soup base is already rich, so a heavy dipping sauce isn't really the point here — a light soy with a little garlic and coriander suits it better than the usual sha-cha-and-egg-yolk combo. Ask about the set packages (綜合鮮蔬盆／肉盤／蝦滑) rather than ordering everything à la carte for twelve.",
               zh: "汤底本身已经很浓郁，不太需要重口味沾酱——配点酱油、蒜末、香菜，会比一般沙茶蛋黄更合适。建议问套餐（综合鲜蔬盆／肉盘／虾滑），别十二人全部单点。" } },

    { id: "sha-cha", name: { en: "Sha cha sauce", zh: "沙茶酱" }, pinyin: "shā chá jiàng",
      img: "hotpot/hotpot-mushroom.jpg", price: null,
      taste: { en: "Worth knowing by name, because it's on every ordinary hotpot table in Taiwan: a brown paste of dried fish, shrimp, garlic, shallot and chilli, brought over from Chaozhou and now more Taiwanese than anything. Savoury rather than hot. At a fish-maw chicken hotpot like 如嬌 it may not be on the table by default — the broth is meant to be tasted on its own — so ask if you want it.",
               zh: "值得记住名字，因为台湾一般火锅桌上都有：扁鱼、虾米、蒜头、红葱与辣椒做成的褐色酱，源自潮州，如今比什么都台。是咸鲜，不是辣。在如嬌这类花膠鸡锅，桌上未必会主动放——汤本身就是要单喝品尝——想要的话可以问服务生要。" } }
  ],

  verify: [
    { title: { en: "Hsu's is closed Tuesday — booked Thursday 10:30", zh: "许家周二公休 —— 已订周四 10:30" },
      body: { en: "The workshop is shut every Tuesday. Monday is Yilan. Booked the Thursday 10:30 DIY + 流水麵 session for twelve (order confirmed, deposit paid) — the original 09:30 slot was gone, so the whole Day 6 morning shifted an hour later. Under-sixes are free. Do not try to combine this with the lantern day — Shiding then Pingxi is two mountain roads before lunch.",
              zh: "工坊每周二公休。周一是宜兰。周四 10:30 的 DIY＋流水麵十二人已订（订单已确认、订金已付）——原本的09:30场没了，所以第6天上午整段往后挪一小时。六岁以下免费。别跟放天灯同一天——石碇再接平溪，午饭前就要走两趟山路。" } },
    { title: { en: "Confirm the hotpot's twelve-seat room by phone — a pricier venue than originally planned", zh: "电话确认火锅十二人包廂——比原计划更贵的选项" },
      body: { en: "The farewell hotpot switched to 如嬌花膠雞．鍋物 (民權一店), 02-2509-4588 — a premium fish-maw chicken soup hotpot (~NT$3,200/pot) rather than a standard split-pot chain. Book online (https://mpea.me/Fgobm) or by phone, ideally 3+ days ahead since the broth takes ~2 days to prepare, and call to confirm the private room genuinely seats twelve at one table plus a total per-head estimate — neither is published online. Ask about a high chair for the littlest.",
              zh: "告别火锅改订如嬌花膠雞．鍋物（民權一店），电话 02-2509-4588——是顶级花膠鸡汤火锅（单锅约NT$3,200），不是一般鸳鸯锅连锁店。可线上订位（https://mpea.me/Fgobm）或电话订，最好提前三天以上，因为汤底要炖约两天；务必电话确认包廂真能十二人同坐一桌，并问清楚每人大约总花费——这两项网上都没有公开数字。也问问能否借儿童高脚椅。" } },
    { title: { en: "If Tuesday's lanterns wash out, this morning can give way", zh: "若周二天灯被雨打掉，这个上午可以让" },
      body: { en: "Thursday is the buffer behind the lantern day. If you push lanterns here, skip Hsu's (or take the 13:00 session if you are back in time — you will not be) and keep the 18:30 hotpot. Xiao Wulai already happened on Wednesday; do not try to restack it.",
              zh: "周四是天灯后面的备案。若把天灯挪到这天，许家就跳过（或赶得及再订13:00——赶不及），18:30火锅留下。小乌来周三已经走完，不要再叠回去。" } }
  ],

  logistics: {
    book: [
      { en: "<b>Hsu's 10:30 ×12 — booked.</b> DIY + flowing noodles, about NT$550. Deposit paid online, balance on arrival. (Moved from the original 09:30 slot, which was gone by the time we booked.)",
        zh: "<b>许家 10:30 ×12 —— 已订。</b>DIY＋流水麵，约 NT$550。已线上付订金，现场付尾款。（原本09:30场已被订走，改到10:30。）" },
      { en: "<b>4–5 hour half-day, hotel → Shiding → Ximending drop.</b> A 中巴, not a nine-seat van, not three taxis. Driver waits through the session. Timing updated to <b>09:15 pickup → Ximending drop ~13:15</b> to match the new 10:30 Hsu's slot — resend this to the operator if not already done. Quote a half-day, not a 10-hour clock. See the Transport page for the enquiry to paste.",
        zh: "<b>4至5小时半天：饭店 → 石碇 → 西门町下车。</b>必须是中巴，不是九人座，也不是三台计程车。体验时段司机等候。时间已更新为<b>09:15出发 → 约13:15西门町下车</b>，配合许家新的10:30场——如还没跟车行确认，请尽快补发。请报半天，不要开10小时。询价见交通页。" },
      { en: "<b>Hotpot for twelve, 18:30 — 如嬌花膠雞．鍋物 (民權一店).</b> 02-2509-4588 or https://mpea.me/Fgobm. Book 3+ days ahead, confirm the private room fits twelve at one table and get a per-head estimate by phone — pricier than a standard hotpot, budget accordingly.",
        zh: "<b>火锅十二人，18:30 —— 如嬌花膠雞．鍋物（民權一店）。</b>02-2509-4588 或 https://mpea.me/Fgobm。请提前三天以上订位，电话确认包廂能十二人同坐一桌并问清楚每人大约花费——比一般火锅贵，预算要抓高一点。" },
      { en: "<b>Nothing else for Ximen.</b> Longshan is free, but realistically skip it this trip — the schedule is tighter now.",
        zh: "<b>西门町不用订。</b>龙山寺免费，但这次行程较紧，现实上建议跳过。" }
    ],
    notes: [
      { en: "Motion-sickness tablets for the Shiding road.",
        zh: "石碇山路请带晕车药。" },
      { en: "The van drops you in Ximending at 13:15 — an hour later than the original plan. Be on the MRT toward 中山國中站 by 17:30 at the latest (one transfer, ~30–40 min). Hotpot is 18:30.",
        zh: "车在西门町下车，时间是13:15——比原计划晚一小时。最晚17:30要搭捷运前往中山國中站（需转乘一次，约30–40分钟）。火锅18:30。" },
      { en: "Share numbers before anyone peels off in Ximen. Pack tonight — tomorrow is Dihua and the flight.",
        zh: "在西门分头前先交换电话。今晚收行李——明天迪化街，然后登机。" }
    ]
  },

  taxi: [
    { tw: "石碇許家手工麵線（烏塗里四分子3號）", say: "Hsu's handmade noodles, Shiding" },
    { tw: "西門紅樓", say: "The Red House, Ximending" },
    { tw: "西門町", say: "Ximending, Wanhua District" },
    { tw: "如嬌花膠雞．鍋物 民權一店（民權東路三段60巷9號）", say: "Ru Jiao Fish-Maw Chicken Hotpot, Zhongshan" }
  ]
};
