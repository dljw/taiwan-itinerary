/* ============================================================
   DAY 2 · Sun 6 Sep 2026 · Maokong tea hills
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[2] = {
  n: 2,
  date:  { en: "Sunday 6 September", zh: "9月6日 · 周日" },
  title: { en: "Up into the tea hills at Maokong", zh: "猫空茶山半日" },
  intro: {
    en: "A whole day among the hills without climbing a single one — the gondola does the work, sweeping you up four kilometres of ridge to a summit trail that's flat, shaded, and cooler than the city below. Lunch arrives cooked with tea leaves picked from the very slope outside the window. The only real effort of the day is queuing at the bottom.",
    zh: "整天泡在山里，却一步山路都不用爬——缆车代劳，沿着山棱把你送高四公里，山顶步道平坦阴凉，气温也比市区凉快几度。午餐端上桌时，用的正是窗外坡地现采的茶叶。这一天唯一要出力气的，只有山下排队那一段。"
  },
  hero: "maokong-gondola/maokong-gondola-cabin-over-forest.jpg",
  chips: [
    { en: "MRT + gondola", zh: "捷运＋缆车" },
    { en: "Flat trails only", zh: "只走平路" },
    { en: "Coolest day of the trip", zh: "全程最凉爽的一天" },
    { en: "Sunday — go early", zh: "周日人多，请早" }
  ],

  glance: [
    { k: { en: "Leave hotel", zh: "出发" },      v: { en: "09:15", zh: "9:15" } },
    { k: { en: "Meals", zh: "三餐" },            v: { en: "Hotel · tea house lunch · Raohe", zh: "饭店早餐 · 茶馆午餐 · 饶河夜市" } },
    { k: { en: "Cost pp", zh: "每人预估" },      v: { en: "≈ NT$1,050", zh: "约 NT$1,050" } },
    { k: { en: "Walking", zh: "步行强度" },      v: { en: "Easy — flat, shaded", zh: "轻松，平坦有荫" } },
    { k: { en: "Book ahead", zh: "需预订" },     v: { en: "Tea house table for twelve", zh: "茶馆十二人桌" } }
  ],

  timeline: [
    { time: "08:00", dur: "1 hr", type: "rest",
      title: { en: "Slow breakfast at the hotel", zh: "饭店慢慢吃早餐" },
      note:  { en: "A slower start today, on purpose — let everyone's body clock catch up before the day begins.",
               zh: "今天特意晚一点开始——先让大家的生理时钟喘口气，再出发。" } },

    { time: "09:15", dur: "45 min", type: "travel", cost: 50,
      title: { en: "MRT to Taipei Zoo station", zh: "捷运到动物园站" },
      maps: "https://www.google.com/maps/search/?api=1&query=捷運動物園站",
      note:  { en: "Take the Brown Line all the way to the end of the line. The gondola entrance is a well-signposted three-minute walk from Exit 2.",
               zh: "搭文湖线（棕线）一路坐到底站。缆车站入口就在2号出口步行三分钟处，沿途指标清楚。" } },

    { time: "10:00", dur: "30 min", type: "travel", img: "maokong-gondola/maokong-gondola-taipei101-view.jpg", cost: 300,
      title: { en: "Ride the gondola up", zh: "搭缆车上山" },
      placeRef: "The Maokong Gondola",
      maps: "https://www.google.com/maps/search/?api=1&query=貓空纜車動物園站",
      note:  { en: "Buy the <b>NT$300 day pass</b> for unlimited rides, so you can hop off at Zhinan Temple for free on the way down. If the kids fancy a glass floor underfoot, add NT$50 for a <b>Crystal Cabin</b> — just note its queue runs separately, and longer.",
               zh: "买<b>NT$300一日票</b>，不限次数搭乘，回程还能顺道在指南宫站免费下车逛逛。想让孩子体验脚下透明的玻璃地板，加NT$50坐<b>水晶车厢</b>——不过那是另外一条队伍，也排得更久。" },
      place: {
        address: { en: "Taipei Zoo gondola station", zh: "台北市文山區捷運動物園站旁" },
        hours: { en: "Usually 09:00–21:00; closed Mondays", zh: "通常 09:00–21:00；周一停驶" },
        rating: "4.5",
        count: { en: "~20k Google reviews (approx.)", zh: "Google 约 2 万则" },
        review: { en: "Visitors rave about the Crystal Cabin view over the basin; Sunday mornings get long queues — arrive early.",
                  zh: "水晶车厢俯瞰盆地的视野常被点赞；周日早上队伍长，请早到。" },
        asOf: "2026-08"
      } },

    { time: "10:30", dur: "2 hr", type: "sight", img: "maokong-teahills/maokong-teahills-plantations2.jpg",
      title: { en: "The Camphor Trail and the tea slopes", zh: "樟树步道与茶园" },
      placeRef: "Maokong and the Camphor Trail",
      maps: "https://www.google.com/maps/search/?api=1&query=樟樹步道+貓空",
      note:  { en: "A flat, paved loop through working tea terraces, with Taipei 101 rising out of the basin behind you the whole way. Benches and shade line the path, and the Tea Promotion Centre along the route pours free tastings.",
               zh: "铺面平坦的环状步道穿过现役茶园，一路回头都能看见台北101从盆地里冒出来。沿途长椅与树荫不断，途经的茶推广中心还提供免费试饮。" },
      place: {
        address: { en: "Camphor Trail, Maokong", zh: "台北市文山區樟樹步道" },
        hours: { en: "Daylight; trail always open", zh: "白天为宜；步道随时可走" },
        rating: "4.4",
        count: { en: "~3k reviews (approx.)", zh: "约三千则评论" },
        review: { en: "Flat, shaded, and cooler than the city — families with grandparents consistently call it the easiest 'mountain' walk in Taipei.",
                  zh: "平坦有荫、比市区凉快——带长辈的家庭常说这是台北最好走的「爬山」。" },
        asOf: "2026-08"
      } },

    { time: "12:30", dur: "1.5 hr", type: "meal", img: "food-tea-dishes/food-tea-dishes-tea-oil-noodles.jpg", cost: 350,
      title: { en: "Lunch — a Maokong tea house", zh: "午餐 —— 猫空茶馆" },
      placeRef: "Sitting in a Maokong tea house",
      maps: "https://www.google.com/maps/search/?api=1&query=貓空茶館",
      note:  { en: "Mountain Tea House (4.5) serves proper set meals for six with tea-leaf cooked dishes and a 101 view; Maokong Tea House (4.8) keeps it lighter — tieguanyin ice cream, boba, snacks. Book ahead, since Sunday lunch fills fast.",
               zh: "邀月／山上茶馆（4.5）供应道地的六人份合菜，茶入菜、看得到101；猫空茶屋（4.8）走轻食路线——铁观音冰淇淋、珍奶、点心。请先订位，周日中午很快就满。" },
      place: {
        address: { en: "Maokong tea houses near the terminal", zh: "猫空缆车站周边茶馆" },
        hours: { en: "Lunch roughly 11:00–14:30", zh: "午餐约 11:00–14:30" },
        phone: "",
        rating: "4.5",
        count: { en: "varies by shop", zh: "各店不一" },
        review: { en: "Tea-leaf cooking and the 101 view are the draw; book a table of twelve for Sunday or you will wait.",
                  zh: "茶入菜与101景色是重点；周日十二人务必先订，否则要等。" },
        asOf: "2026-08"
      },
      dishes: ["tea-dishes", "tieguanyin-icecream"] },

    { time: "14:00", dur: "1 hr", type: "sight", img: "food-tieguanyin/food-tieguanyin-leaves-and-brew.jpg",
      title: { en: "Sit with a pot of oolong, then drift down", zh: "泡一壶乌龙，再慢慢下山" },
      maps: "https://www.google.com/maps/search/?api=1&query=貓空茶館",
      note:  { en: "No one should be rushed out of a Maokong tea house. Linger over the pot, and when you're ready, ride down — hopping off at Zhinan Temple on the way if anyone's curious.",
               zh: "在猫空茶馆，没有人该被赶。壶里的茶慢慢喝，喝够了再搭缆车下山；有兴趣的话，中途可在指南宫站下车看看。" },
      place: {
        address: { en: "Maokong tea houses near the terminal", zh: "猫空缆车站周边茶馆" },
        hours: { en: "Afternoon tea until late afternoon", zh: "下午茶至傍晚" },
        rating: "4.5",
        review: { en: "Linger over the pot — this slow hour is the point of Maokong, not filler between lunch and the gondola down.",
                  zh: "慢慢泡一壶——这段悠闲才是猫空的重点，不是午餐与下山之间的空档。" },
        asOf: "2026-08"
      },
      dishes: ["tieguanyin"] },

    { time: "15:30", type: "travel", cost: 50,
      title: { en: "MRT back to the hotel", zh: "捷运回饭店" } },

    { time: "16:00", dur: "2 hr", type: "rest",
      title: { en: "Afternoon off", zh: "下午休息" },
      note:  { en: "Non-negotiable in this heat, especially for the grandparents — shower, air-con, and horizontal for a while.",
               zh: "这种天气，这段休息绝不能省，长辈尤其需要——冲个澡、开冷气，躺平一下。" } },

    { time: "18:30", dur: "2 hr", type: "meal", img: "food-pepper-bun/food-pepper-bun-raohe-stall.jpg", cost: 300,
      title: { en: "Dinner — Raohe Street Night Market", zh: "晚餐 —— 饶河街夜市" },
      placeRef: "Raohe Street Night Market",
      maps: "https://www.google.com/maps/search/?api=1&query=饒河街觀光夜市",
      note:  { en: "MRT to Songshan station, exit 5, and the market gate is right there. Start with the pepper buns near the temple end — the queue looks daunting but moves in about eight minutes.",
               zh: "捷运到松山站5号出口，一出来就是夜市牌楼。先从庙那端的胡椒饼开始——队伍看起来吓人，其实八分钟就轮到。" },
      place: {
        address: { en: "Raohe St, Songshan — MRT Songshan exit 5", zh: "台北市松山區饒河街 · 捷運松山站5號出口" },
        hours: { en: "Roughly 17:00–24:00", zh: "约 17:00–24:00" },
        rating: "4.3",
        count: { en: "~25k Google reviews (approx.)", zh: "Google 约 2.5 万则" },
        review: { en: "Michelin-listed pepper buns at the temple gate are the must-queue; the lane is longer than Ningxia but still manageable for a group.",
                  zh: "庙口米其林胡椒饼是必排队；整条街比宁夏长，但一家十二口仍走得动。" },
        asOf: "2026-08"
      },
      dishes: ["pepper-bun", "stinky-tofu", "bubble-tea"] },

    { time: "20:45", type: "rest",
      title: { en: "Back to the hotel", zh: "回饭店" },
      note:  { en: "Tomorrow the mid-bus at 08:30 for Yilan. A normal bedtime tonight is enough — a towel for wet feet at Qingshui.",
               zh: "明天08:30中巴去宜兰。今晚正常时间睡就够——清水地热泡脚带一条毛巾。" } }
  ],

  places: [
    {
      name: { en: "The Maokong Gondola", zh: "猫空缆车" },
      tw: "貓空纜車 · 台北文山區",
      maps: "https://www.google.com/maps/search/?api=1&query=貓空纜車動物園站",
      images: [
        "maokong-gondola/maokong-gondola-car-and-line.jpg",
        "maokong-gondola/maokong-gondola-crystal-cabin-station.jpg",
        "maokong-gondola/maokong-gondola-crystal-cabin.jpg",
        "maokong-gondola/maokong-gondola-over-hills.jpg"
      ],
      history: {
        en: "Opened in 2007 to lift visitors up to the tea hills without sending another thousand cars a day round the mountain road, it runs just over four kilometres from Taipei Zoo to Maokong in four stages, with a famous change of direction at the Zhinan Temple tower where the line swings hard around the ridge. The glass-floored Crystal Cabins arrived in 2009 and are still the ones everyone queues for. Worth knowing: it closes every Monday for maintenance.",
        zh: "2007年通车，目的是把游客送上茶山，省去每天再多一千辆车挤上山路的麻烦。全长四公里多，从动物园站到猫空站分四段，行经指南宫站那座塔时有个著名的转向，路线绕着山棱硬转一个大弯。玻璃地板的水晶车厢2009年加入，至今仍是大家抢着排的车厢。小提醒：缆车每周一固定停驶保养。"
      },
      famous: {
        en: "The <b>Crystal Cabin</b>, with its fully transparent floor, and the moment near the top where the cable clears the ridge and the whole Taipei basin unfolds behind you, 101 standing right in the middle of it.",
        zh: "<b>水晶车厢</b>的全透明地板，还有接近山顶时缆索越过棱线的那一刻——整个台北盆地在身后展开，101就立在正中央。"
      },
      locals: {
        en: "Locals swear the day pass earns its keep purely for the free Zhinan Temple stop on the way down. There's also a long-running Taipei superstition that couples who visit together will break up, since the deity Lü Dongbin is said to be jealous of lovers — plenty shrug it off, and plenty quietly steer clear.",
        zh: "在地人一致认为：一日票光是为了回程能在指南宫站免费下车逛逛，就已经值回票价。台北还流传一个说法——情侣一起去指南宫会分手，因为吕洞宾看不得人成双成对。有人一笑置之，也有人默默避开。"
      },
      doThis: {
        en: "Ride up in a standard cabin — the queue is shorter — and save the Crystal Cabin for the way down, when the light is better. Sit facing backwards on the ascent; the view is behind you, not ahead.",
        zh: "上山搭一般车厢，队伍较短，把水晶车厢留到下山、光线也更好的时候。上山时坐面向后方的位子——风景在身后，不在前面。"
      },
      tip: {
        en: "Cabins hold up to eight, so the twelve of you will split across two — about six each, easy enough even with a toddler in tow. Agree at the bottom where you'll regroup at the top. Sunday is the busiest day of the week here: arriving at 10:00 rather than midday is the difference between a ten-minute wait and an hour.",
        zh: "每台车厢最多八人，十二个人正好分成两台，一台约六人，带着小小孩也不拥挤。上车前先讲好在山上哪里集合。周日是这里最忙的一天：十点到和中午到，差别是等十分钟还是等一小时。"
      }
    },
    {
      name: { en: "Maokong and the Camphor Trail", zh: "猫空与樟树步道" },
      tw: "貓空 · 樟樹步道",
      maps: "https://www.google.com/maps/search/?api=1&query=樟樹步道+貓空",
      images: [
        "maokong-teahills/maokong-teahills-plantations1.jpg",
        "maokong-teahills/maokong-teahills-trail.jpg",
        "maokong-teahills/maokong-teahills-view.jpg",
        "maokong-teahills/maokong-teahills-taipei101-view.jpg"
      ],
      history: {
        en: "The odd name has nothing to do with cats. Streams here carved deep round hollows into the rock — in Taiwanese, <i>niau-khang</i>, or 'pothole' — and when that got written down in Mandarin characters it became 貓空, literally 'cat empty'. Tea has grown on these slopes since the late 1800s, when families from Anxi in Fujian carried tieguanyin cuttings across the strait and found the ridge's fog and drainage suited them perfectly. Muzha tieguanyin remains its own protected style, and the terraces you walk past are working farms, not scenery.",
        zh: "这个怪名字跟猫无关。这里的溪流在岩床上冲出一个个深圆的壶穴，台语叫 <i>niau-khang</i>，也就是「壶穴」，写成汉字便成了「猫空」。这些坡地从1800年代末就开始种茶——福建安溪的茶农携铁观音茶苗渡海而来，发现这条山棱的云雾与排水条件正合适。木栅铁观音至今仍是独立的一个品类，而你经过的那些茶园是真正在耕作的农地，不是布景。"
      },
      famous: {
        en: "<b>Muzha tieguanyin (木柵鐵觀音)</b> — a heavily roasted, repeatedly baked oolong with a dark, almost stone-fruit depth, quite unlike the flowery high-mountain oolongs. Also <b>Wenshan baozhong</b>, the lightest oolong Taiwan makes, from the next valley over.",
        zh: "<b>木栅铁观音</b>——重焙、反复烘的乌龙，滋味深沉，带点熟果与炭香，和花香型的高山乌龙完全不同风格。还有隔壁山谷的<b>文山包种</b>，是台湾发酵最轻的乌龙。"
      },
      locals: {
        en: "Taipei people come up here at night, not by day — the tea houses stay open late and the city looks better lit than it does under the sun. Coming at lunchtime, as you're doing, is the visitor's version — and honestly the smarter one when it's 33°C and half the group is over sixty.",
        zh: "台北人多半晚上才上来，不是白天——茶馆开得晚，夜色中的城市比白天好看。像你们这样中午上山是游客的玩法；不过在33°C、又有一半团员年过六十的情况下，这其实才是聪明的选择。"
      },
      doThis: {
        en: "Walk the Camphor Trail loop — paved, flat, and lined with old farming tools and a wishing pond. Stop at the Tea Promotion Centre for a free tasting and let someone explain the roast levels; it makes the lunch that follows far more interesting.",
        zh: "走樟树步道的环状路线——铺面平整、坡度平缓，沿途摆着旧农具，还有一口许愿池。到茶推广中心免费试饮，请人讲解不同焙火程度的差别，接下来那顿午餐会更有意思。"
      },
      tip: {
        en: "This is the flattest 'mountain' walk you'll do all week — no steps, benches throughout, shade for most of it. If two hours feels like too much, the loop shortens to about forty minutes, and the tea house is never far.",
        zh: "这是这一周最平坦的一段「山路」——没有阶梯、沿途有长椅、大部分路段有荫。两小时嫌久的话，环线可以缩短到约四十分钟，而且随时走得回茶馆。"
      }
    },
    {
      name: { en: "Sitting in a Maokong tea house", zh: "在猫空茶馆坐下来" },
      tw: "貓空茶館",
      maps: "https://www.google.com/maps/search/?api=1&query=貓空茶館",
      images: [
        "maokong-teahouse/maokong-teahouse-terrace.jpg",
        "maokong-teahouse/maokong-teahouse-brewing-tea.jpg",
        "maokong-teahouse/maokong-teahouse-taipei101-terrace.jpg",
        "maokong-teahouse/maokong-teahouse-interior.jpg"
      ],
      history: {
        en: "When the tea trade thinned out in the late twentieth century, the growing families up here did the obvious thing and opened their front rooms to visitors. That's why a Maokong tea house feels like somebody's home rather than a restaurant — because most of them are, with a terrace bolted on and the family's own leaves for sale by the door.",
        zh: "二十世纪后期茶叶生意转淡，山上的茶农做了最直觉的事——把自家前厅开放给客人。所以猫空的茶馆感觉不像餐厅，更像谁家的客厅，因为它们本来就是：外头加盖一座露台，门边卖着自家焙的茶。"
      },
      famous: {
        en: "The <b>pot-and-seat model</b>: pay for the leaves and the table, and the hot water simply keeps coming. Nobody hurries you out. Many also cook, so lunch and tea happen at the same sitting.",
        zh: "<b>茶叶费＋座位费</b>的模式：付了这两笔，热水就一直续，没有人催你走。多数茶馆也供餐，所以午餐和喝茶是同一场。"
      },
      locals: {
        en: "The done thing is to arrive, order, and settle in for hours — a Maokong afternoon is measured in refills, not minutes. If the staff bring you a timer or a jug, they're helping, not hinting.",
        zh: "在地人的习惯是：坐下、点茶，然后待上好几个小时——猫空的下午是用续水次数计算的，不是用分钟。店家送来计时器或水壶是在帮忙，不是在赶客。"
      },
      doThis: {
        en: "Ask them to brew the first pot for you and watch how it's done — the rinse, the short first steep, pouring into the tall aroma cup before the drinking cup. Then take over yourself. Order food to the same table rather than moving.",
        zh: "请店家帮你泡第一壶，看着他们怎么做——温杯、第一泡快出、先倒进闻香杯再入品茗杯，然后自己接手。餐点直接点到同一桌，不用换位子。"
      },
      tip: {
        en: "Terrace seats have the view and the heat; indoor seats have the air-conditioning. With this group, book a table indoors and step out to the terrace for photographs. Book ahead — Sunday lunch fills.",
        zh: "露台有景也有热，室内有冷气。以这团的人数，建议订室内桌，拍照时再走到露台。请先订位——周日中午会满。"
      }
    },
    {
      name: { en: "Raohe Street Night Market", zh: "饶河街观光夜市" },
      tw: "饒河街觀光夜市 · 台北松山區",
      maps: "https://www.google.com/maps/search/?api=1&query=饒河街觀光夜市",
      images: [
        "raohe-night-market/raohe-night-market-east-gate-night.jpg",
        "raohe-night-market/raohe-night-market-east-gate-night2.jpg",
        "raohe-night-market/raohe-night-market-stalls-2017.jpg",
        "raohe-night-market/raohe-night-market-stalls-2022.jpg"
      ],
      history: {
        en: "Raohe was designated one of Taipei's first official tourist night markets in 1987, laid out as a single straight six-hundred-metre lane running from the gate beside Songshan Ciyou Temple. The temple came first by two and a half centuries — it has anchored this stretch of the Keelung River since the 1750s, back when Songshan went by its old name, Xikou (錫口), and was a busy river port. The market simply grew in its shadow, which is why it starts at a temple door rather than a car park.",
        zh: "饶河街在1987年被指定为台北最早的观光夜市之一，是一条从松山慈祐宫旁牌楼笔直延伸六百公尺的单行街。庙比夜市早了两个半世纪——1750年代起就镇守着基隆河这一段，那时松山还是个叫「锡口」的河港。夜市就在庙的影子里长出来，所以它的起点是庙门，而不是停车场。"
      },
      famous: {
        en: "<b>Fuzhou-style pepper buns (胡椒餅)</b> at the temple-end gate — pork and spring onion packed with black pepper into a sesame-crusted bun, then slapped onto the inside wall of a barrel oven to bake. The stall has held a Michelin Bib Gourmand listing. Also <b>medicinal pork rib soup (藥燉排骨)</b> and oyster vermicelli.",
        zh: "庙口那端牌楼旁的<b>福州胡椒饼</b>——猪肉与大量青葱、黑胡椒包进撒了芝麻的面团，直接贴在炭炉内壁烤熟。该摊曾获米其林必比登推荐。此外还有<b>药炖排骨</b>和蚵仔面线。"
      },
      locals: {
        en: "The pepper bun queue is the one queue locals will actually tell you to join. The other tip: eat down one side of the street and back up the other, since the two sides sell different things — and everyone forgets that until they're already at the far end and full.",
        zh: "胡椒饼那条队伍，是在地人唯一会叫你去排的。另一个诀窍：去程走一边、回程走另一边，因为两侧卖的东西不一样——大家总是走到底、吃饱了才想起这件事。"
      },
      doThis: {
        en: "Pepper bun first, while appetite and the oven are both still hot. Then medicinal rib soup for the older half, fried chicken and games for the kids, and save room for shaved ice at the far end. Duck into Ciyou Temple on the way past — open late, free, and genuinely beautiful.",
        zh: "先吃胡椒饼，趁肚子还空、炉子正热。接着长辈来碗药炖排骨，小朋友吃鸡排、玩游戏摊，尾端留点肚子吃碗刨冰。经过时进慈祐宫看看——开到很晚、免费，而且真的很美。"
      },
      tip: {
        en: "Busier and louder than Ningxia, with a wider street. Songshan station puts you right at the gate, no walking required. Bring cash for the stalls, and agree a meeting point at the temple in case the group splits — it will.",
        zh: "比宁夏更挤更吵，但街道较宽。松山站出来就是牌楼，不用走路。摊位记得带现金，并先约好在庙前集合——大家一定会走散。"
      }
    }
  ],

  food: [
    { id: "pepper-bun", name: { en: "Pepper bun", zh: "胡椒饼" }, pinyin: "hú jiāo bǐng",
      img: "food-pepper-bun/food-pepper-bun-clay-oven.jpg", price: 60,
      taste: { en: "A blistered sesame crust giving way to a molten core of peppery pork and more spring onion than seems reasonable — the first bite will scald an impatient mouth. Baked stuck to the wall of a clay barrel oven, so the bottom turns crisp while the top stays soft.",
               zh: "芝麻外皮烤到起泡，咬开是滚烫的黑胡椒猪肉馅，青葱多到不像话——心急的话第一口肯定烫嘴。贴在炭炉内壁烤成，所以底部酥脆、上缘柔软。" },
      order: { en: "Join the queue, hold up fingers for how many. <b>Xiǎo xīn tàng</b> means 'careful, hot' — they will say it to you.",
               zh: "排队时比手指说要几个。老板会跟你说「小心烫」。" } },

    { id: "tieguanyin", name: { en: "Tieguanyin oolong", zh: "铁观音" }, pinyin: "tiě guān yīn",
      img: "food-tieguanyin/food-tieguanyin-ensemble.jpg", price: 300,
      taste: { en: "Roasted rather than floral — dark amber in the cup, with baked stone fruit, a mineral edge, and a sweetness that arrives after you swallow rather than while it's in your mouth. Muzha's version is the heavily baked benchmark for the whole style.",
               zh: "属焙火型而非花香型——茶汤深琥珀色，带熟果与矿石感，甘甜是咽下之后才回上来的，而不是入口就甜。木栅的重焙版本是整个铁观音风格的标杆。" },
      order: { en: "A pot is priced for the table, usually with unlimited hot water. Ask for <b>rè shuǐ</b> when it runs dry — refills are expected, not cheeky.",
               zh: "一壶是以桌计价，通常免费续热水。喝完就说「热水」，续水是本来就该的，不用不好意思。" } },

    { id: "tea-dishes", name: { en: "Tea-leaf cooked dishes", zh: "茶入菜" }, pinyin: "chá rù cài",
      img: "food-tea-dishes/food-tea-dishes-siye-spread.jpg", price: 350,
      taste: { en: "Maokong's whole culinary idea in one dish: tea leaves fried into rice, steeped into chicken, whipped into tempura batter, or scattered over fried prawns. Bitter-fragrant rather than sweet, and it cuts beautifully through the oil of a big shared table.",
               zh: "猫空料理的核心概念：茶叶炒进饭里、炖进鸡汤、拌进天妇罗面衣，或撒在炸虾上。是带苦的香而非甜，正好化解合菜的油腻。" },
      order: { en: "Order the set meal (<b>tào cān</b>) rather than à la carte — tea houses price sets for six, so two sets covers the whole family of twelve exactly.",
               zh: "点「套餐」比单点划算——茶馆的套餐多以六人计，两套正好十二人整，一个不多一个不少。" } },

    { id: "tieguanyin-icecream", name: { en: "Tieguanyin ice cream", zh: "铁观音冰淇淋" }, pinyin: "tiě guān yīn bīng qí lín",
      img: "food-tieguanyin-icecream/food-tieguanyin-icecream-menu-cones.jpg", price: 80,
      taste: { en: "Properly bitter, barely sweet, and unmistakably about the roast rather than a vague 'tea flavour'. The kids may turn up their noses while the grandparents polish off theirs. Worth ordering one to pass around before committing.",
               zh: "苦味明显、甜度很低，尝得出来的是焙火，而不是那种笼统的「茶味」。小朋友可能不捧场，长辈倒会吃光。建议先点一份传着试。" },
      order: { en: "Sold at the tea houses and the shops around the gondola station.",
               zh: "茶馆和缆车站周边的店家都有卖。" } },

    { id: "stinky-tofu", name: { en: "Stinky tofu", zh: "臭豆腐" }, pinyin: "chòu dòu fu",
      img: "food-stinky-tofu/food-stinky-tofu-charbroiled-skewers.jpg", price: 70,
      taste: { en: "Smells like a farmyard, tastes like a mild, savoury cheese. Deep-fried until the crust shatters, split open, and piled with sweet-sour pickled cabbage and garlic sauce — the pickle isn't a garnish, it's half the dish.",
               zh: "闻起来像农场，吃起来像温和的咸味起司。炸到外壳一咬就碎，剖开后铺上酸甜的泡菜与蒜蓉酱。那份泡菜不是配菜，是这道菜的一半。" },
      order: { en: "<b>Zhá de</b> = the fried kind (start here). The braised version in soup, <b>má là</b>, is a much bigger commitment.",
               zh: "先点「炸的」。汤里的麻辣臭豆腐是另一个层级，先别急着挑战。" } },

    { id: "bubble-tea", name: { en: "Bubble milk tea", zh: "珍珠奶茶" }, pinyin: "zhēn zhū nǎi chá",
      img: "food-bubble-tea/food-bubble-tea-chunshuitang.jpg", price: 60,
      taste: { en: "Invented in Taiwan in the 1980s, and still done better here than anywhere else. Ask for it brewed with real black tea rather than powder, and the difference is enormous.",
               zh: "1980年代在台湾发明，至今仍是这里做得最好。指定用真正现泡的红茶底而不是粉泡的，差别非常大。" },
      order: { en: "Two dials: sugar and ice. <b>Bàn táng</b> = half sugar (what most locals order), <b>shǎo bīng</b> = less ice. Full sugar will surprise you.",
               zh: "两个选项：糖度与冰量。「半糖」是多数在地人的选择，「少冰」也很常见。全糖会吓到你。" } }
  ],

  verify: [
    { title: { en: "Sunday is the gondola's busiest day — aim to be at the station by 10:00", zh: "周日是缆车最挤的一天——尽量十点前到站" },
      body: { en: "Queues past midday on a fine Sunday can run well over an hour, brutal with grandparents standing in 33°C. If the line already looks hopeless when you arrive, <b>bus S10 from Taipei Zoo MRT drives up to Maokong instead</b> — you lose the view but keep the day on track.",
              zh: "天气好的周日过了中午，缆车队伍可能排上一个多小时，让长辈在33°C下站着实在辛苦。如果到场就看到队伍长得离谱，<b>可以改搭动物园站的S10公车上猫空</b>——少了空中景观，但保住整天行程。" } },
    { title: { en: "Confirm the tea house can seat twelve on a Sunday", zh: "确认茶馆周日容得下十二人" },
      body: { en: "Maokong tea houses are mostly small family operations with a handful of large tables. Phone ahead for 12:30 and give the headcount — walking in with twelve at Sunday lunch is how you end up eating in two shifts.",
              zh: "猫空的茶馆多半是家庭经营，大桌就那么几张。请先致电订12:30、报上人数——周日中午十二人直接上门，结果就是分两批吃。" } }
  ],

  logistics: {
    book: [
      { en: "<b>Tea house table for twelve, 12:30.</b> Mountain Tea House for a full set meal, or Maokong Tea House for something lighter.",
        zh: "<b>茶馆十二人桌，12:30。</b>想吃合菜找山上茶馆，想轻食就订猫空茶屋。" },
      { en: "Nothing else needs booking today — gondola tickets are bought on the spot.",
        zh: "今天其他都不用订，缆车票现场买即可。" }
    ],
    notes: [
      { en: "<b>Gondola day pass NT$300</b> covers unlimited rides; the Crystal Cabin costs about NT$50 more and queues separately. EasyCards also work at the gate.",
        zh: "<b>缆车一日票NT$300</b>不限次数；水晶车厢约加NT$50，另排一队。闸口也可以直接刷悠游卡。" },
      { en: "Cabins seat up to eight, so the twelve of you will split across two — about six each. Pick a regroup spot before boarding.",
        zh: "车厢最多坐八人，十二人正好分两台，一台约六人。上车前先约好山上集合点。" },
      { en: "It is a few degrees cooler up top and can drizzle when the city is dry. Take the umbrella.",
        zh: "山上比市区凉几度，市区没雨山上也可能飘雨。带把伞。" },
      { en: "Raohe is on the MRT green line at Songshan — exit 5 opens onto the market gate, no walking required.",
        zh: "饶河街在捷运松山站（绿线），5号出口一出来就是夜市牌楼，完全不用走。" }
    ]
  },

  taxi: [
    { tw: "貓空纜車動物園站", say: "Maokong Gondola, Taipei Zoo station" },
    { tw: "饒河街觀光夜市", say: "Raohe Street Night Market, Songshan" }
  ]
};
