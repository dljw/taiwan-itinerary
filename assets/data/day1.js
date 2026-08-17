/* ============================================================
   DAY 1 · Sat 5 Sep 2026 · Landing, the family visit, then Zhongshan
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[1] = {
  n: 1,
  date:  { en: "Saturday 5 September", zh: "9月5日 · 周六" },
  title: { en: "Landing, then a family visit on the way in", zh: "抵达，顺路拜访家人" },
  intro: {
    en: "Touch down at 06:55 and the whole morning is yours before any hotel will have you. The van rolls straight to Linkou for a proper sit-down breakfast at the old town's favourite brunch spot, then on to the family visit — coffee under a painted mandala dome at Himalaya Cafe on Minzu Road — before easing into Taipei for a long, unhurried afternoon of Zhongshan shopping ahead of the night market. Barely any walking, nothing to book beyond the van, and nothing lost if jet lag wins and the shopping gets skipped.",
    zh: "早上6:55落地，饭店中午前还不会让你入住，这个上午完全是你的。车子直接开往林口，先在当地人最爱的早午餐店坐下来好好吃一顿，再到民族路的喜马拉雅珈琲——在手绘曼陀罗穹顶下喝咖啡——完成家族拜访，接着悠悠进城，把整个下午都留给中山的自由购物，晚上再去夜市。全程几乎不用走路，除了包车不必再订什么，就算时差赢了、购物跳过也无所谓。"
  },
  hero: "ningxia-night-market/ningxia-night-market-stalls.jpg",
  chips: [
    { en: "Airport mid-bus, half-day", zh: "接机中巴，半天" },
    { en: "Very little walking", zh: "步行量很少" },
    { en: "Jet-lag friendly", zh: "适合倒时差" },
    { en: "Nothing else to book", zh: "无需再订位" }
  ],

  glance: [
    { k: { en: "Lands", zh: "落地" },        v: { en: "06:55 at Taoyuan", zh: "6:55 桃园机场" } },
    { k: { en: "Meals", zh: "三餐" },        v: { en: "Breakfast in Linkou · lunch in Zhongshan, wherever · night market dinner", zh: "林口早餐 · 中山自由午餐 · 夜市晚餐" } },
    { k: { en: "Cost pp", zh: "每人预估" },  v: { en: "≈ NT$400 + your own lunch + NT$500–700 bus share", zh: "约 NT$400＋自理午餐＋包车分摊NT$500–700" } },
    { k: { en: "Walking", zh: "步行强度" },  v: { en: "Light — all flat", zh: "轻松，全程平坦" } },
    { k: { en: "Book ahead", zh: "需预订" }, v: { en: "Just the van", zh: "只需订包车" } }
  ],

  timeline: [
    { time: "06:55", type: "travel", img: "taoyuan-airport/taoyuan-airport-terminal2-exterior.jpg", tag: "Arrive",
      title: { en: "Touch down at Taoyuan International", zh: "桃园国际机场落地" },
      maps: "https://www.google.com/maps/search/?api=1&query=桃園國際機場第二航廈",
      note:  { en: "Drink water before you do anything else — the cabin has dried everyone out and it is about to get humid.",
               zh: "下飞机第一件事先喝水。机舱里已经把大家脱得很干，而外面马上就是湿热。" } },

    { time: "07:00", dur: "1 hr", type: "travel",
      title: { en: "Immigration, bags, and EasyCards for eleven", zh: "入境、领行李、买十一张悠游卡" },
      note:  { en: "Buy the EasyCards at the MRT counter in the arrivals hall while everyone's still together — it's a much smoother job as one group than chasing it later in ones and twos. The littlest one can usually ride free on a lap under the standard height threshold, so eleven cards covers the family. Then go find the pre-booked van.",
               zh: "趁大家还聚在一起，在入境大厅的捷运柜台一次买齐悠游卡，比之后一个两个分头买省事得多。最小的孩子通常能免票坐在大人腿上（一般身高门槛以下），所以买十一张就够全家用。接着与包车司机会合。" } },

    { time: "08:00", dur: "25 min", type: "travel",
      title: { en: "Van to Linkou — breakfast first", zh: "包车前往林口——先吃早餐" },
      note:  { en: "A short detour off the highway for a proper breakfast before the family visit — luggage stays snug in the van the whole time.",
               zh: "下高速公路绕一小段路，先吃顿像样的早餐再去拜访家人——行李全程安稳地留在车上。" } },

    { time: "08:30", dur: "45 min", type: "meal", img: "linkou-old-street/linkou-old-street-market.jpg", cost: 150,
      title: { en: "Breakfast — Naka Brunch (拿靠早午餐)", zh: "早餐 —— 拿靠早午餐" },
      maps: "https://www.google.com/maps/search/?api=1&query=%E6%8B%BF%E9%9D%A0%E6%97%A9%E5%8D%88%E9%A4%90%20%E5%BF%A0%E5%AD%9D%E4%B8%80%E8%B7%AF9%E8%99%9F%E6%9E%97%E5%8F%A3",
      note:  { en: "\"拿靠\" is Linkou's own old nickname, and this local chain — the Zhongxiao branch, 忠孝一路9號, about five minutes from Minzu Road — is where the town actually eats, not a stop built for tourists. The crispy egg crepe is the one to order; radish cake with a fried egg is the heartier backup for anyone who wants more than a crepe. Casual counter-and-table seating. <b>Call ahead for a table of twelve</b> (≈02-2600-8995) — see the reviews below for why that matters. If it can't fit the whole family, Linkou Market's grab-and-go stalls (政宗包子, 蒸宴小籠包) are two minutes from Minzu Road and open before 5am.",
               zh: "「拿靠」是林口的老地名，这家在地连锁早午餐——忠孝一路9号的分店，离民族路约五分钟——是当地人真的会吃的那种，不是给观光客看的。招牌是脆皮蛋饼，想吃饱一点就点萝卜糕加蛋。座位是轻松的柜台加桌位形式。<b>建议先打电话订十二人位</b>（约02-2600-8995）——原因见下方评论。万一真的坐不下全家，林口市场的政宗包子或蒸宴小笼包（离民族路两分钟，清晨5点前就开）可以买了就走。" },
      place: {
        address: { en: "No. 9, Zhongxiao 1st Rd, Linkou", zh: "新北市林口區忠孝一路9號" },
        hours: { en: "Usually from ~07:00; confirm before you go", zh: "通常约07:00起；出发前再确认" },
        phone: "02-2600-8995",
        rating: "≈4.1",
        count: { en: "several hundred reviews (approx.)", zh: "约数百则评论" },
        review: { en: "Reviewers praise the crispy egg crepe and call it busy by mid-morning on weekends, with fast turnover — locals phone ahead to skip the wait.",
                  zh: "评论称赞脆皮蛋饼，周末上午中段常客满但翻桌快；在地人多半先打电话订餐。" },
        asOf: "2026-08"
      },
      dishes: ["naka-egg-crepe"] },

    { time: "09:15", dur: "15 min", type: "travel",
      title: { en: "Short hop to Minzu Road", zh: "再往前一小段到民族路" },
      note:  { en: "Five easy minutes further into the old town, to Minzu Road, where the family is already waiting.",
               zh: "再往老城区开五分钟，到民族路，家人已经在等着了。" } },

    { time: "09:30", dur: "1.5 hr", type: "sight", img: "himalaya-cafe/himalaya-cafe-shrine-hall.jpg",
      title: { en: "Himalaya Cafe, Minzu Road — the family visit", zh: "民族路 喜马拉雅珈琲 —— 家族拜访" },
      placeRef: "Himalaya Cafe (喜馬拉雅珈琲), Linkou",
      maps: "https://www.google.com/maps/place/%E5%96%9C%E9%A6%AC%E6%8B%89%E9%9B%85%E7%8F%88%E7%90%B2Himalaya+Cafe/data=!4m2!3m1!1s0x3442a7000a2cb5ff:0xa2183a299db84af4",
      note:  { en: "Not a house call but a café — and not an ordinary one: a full Tibetan Buddhist shrine hall with a painted mandala dome, three gilded Buddhas and coffee served in the same room. The van waits outside, so there's no clock to watch — let the visit run long if it wants to. Take a group photo under the mandala; it's the one stop on this trip that belongs entirely to your family.",
               zh: "这一站不是登门作客，而是一间咖啡馆——而且很不一般：整层是藏传佛教佛堂，天花板绘着曼陀罗，三尊金身佛像端坐堂上，咖啡就在同一个空间里喝。车子在外面等着，不必一直看表——想多聊一会儿就多聊一会儿。在曼陀罗下拍张全家福吧，这是整趟旅程里唯一专属于你们家的一站。" },
      place: {
        address: { en: "1F, No. 81, Minzu Rd, Linkou Dist., New Taipei 244", zh: "244 新北市林口區民族路81號1樓" },
        hours: { en: "Reported 09:30–20:30 daily — one listing says closed Mondays, 09:30–18:30. Confirm by phone (see the ⚠ box below); we arrive right on opening.", zh: "查到的资料多为每日09:30–20:30——另有一处标示周一公休、09:30–18:30。请先电话确认（见下方⚠框），我们抵达时刚好是开门时间。" },
        phone: "02-7716-1727",
        review: { en: "Reviewers describe it as a calm, unhurried space — Tibetan-style drinks and cakes alongside the coffee, hand-copying of the Heart Sutra on the tables, and a hall grand enough that most people photograph the ceiling before they order.",
                  zh: "评论多形容这里安静、不催客——除了咖啡还有藏式饮品与甜点，桌上可以手抄心经，佛堂气派到大多数人点单前先拍天花板。" },
        asOf: "2026-08"
      } },

    { time: "11:00", dur: "40 min", type: "travel",
      title: { en: "Van into Taipei", zh: "车行进台北" },
      note:  { en: "The last leg of the morning — hotel next. Don't be surprised if half the van is asleep within ten minutes.",
               zh: "今天上午的最后一段路——下一站就是饭店。别惊讶，车上大半人大概十分钟内就会睡着。" } },

    { time: "11:40", type: "rest",
      title: { en: "Hotel — drop bags", zh: "饭店 —— 放下行李" },
      note:  { en: "Far too early for the rooms to be ready — hand everything to the bell desk and head straight back out. A proper lunch is waiting somewhere in Zhongshan.",
               zh: "这个时间房间大概还没好——行李交给柜台就出门去。到中山找个地方好好吃顿午餐吧。" } },

    { time: "12:00", dur: "6 hr", type: "sight",
      title: { en: "Free & easy — Zhongshan shopping", zh: "自由活动 —— 中山购物" },
      maps: "https://www.google.com/maps/search/?api=1&query=中山站+雙城街",
      note:  { en: "No fixed plan — today the whole rest of the afternoon is wide open. The Zhongshan MRT area and Shuangcheng Street are packed with boutiques, bookshops and cafés, a short walk or one stop away — split up, shop, grab lunch as you go, sneak a nap back at the hotel, or just find somewhere cool to sit. Regroup by 18:15 for the night market.",
               zh: "没有固定行程，今天下午整段时间完全自由。中山捷运站一带与双城街小店、书店、咖啡馆林立，走路或搭一站捷运就到——分头逛街、顺路吃个午餐、回饭店偷个懒补眠，或找间凉快的地方坐着都行。18:15前集合，准备出发去夜市。" },
      place: {
        address: { en: "Zhongshan MRT / Shuangcheng St", zh: "捷運中山站／雙城街一帶" },
        hours: { en: "Shops roughly 11:00–21:00", zh: "店家约 11:00–21:00" },
        rating: "4.3",
        count: { en: "area average (approx.)", zh: "商圈约略评分" },
        review: { en: "Locals treat Zhongshan as everyday shopping — boutiques, Japanese goods, cafés — calmer than Ximending, easy to split into small groups.",
                  zh: "在地人把中山当日常逛街区——小店、日系选物、咖啡馆——比西门町安静，适合分小队行动。" },
        asOf: "2026-08"
      } },

    { time: "18:30", type: "travel",
      title: { en: "Taxi to Ningxia Night Market", zh: "搭车前往宁夏夜市" },
      note:  { en: "Three taxis for the twelve of us, four to a car. Ten to fifteen minutes from Zhongzheng.",
               zh: "十二个人叫三台车，一台坐四人。从中正区出发约10至15分钟。" } },

    { time: "19:00", dur: "1.5 hr", type: "meal", img: "ningxia-night-market/ningxia-night-market-signage.jpg", cost: 250,
      title: { en: "Dinner — Ningxia Night Market", zh: "晚餐 —— 宁夏夜市" },
      placeRef: "Ningxia Night Market",
      maps: "https://www.google.com/maps/search/?api=1&query=寧夏夜市",
      note:  { en: "One short street, food and nothing but food — no trinket stalls to wade through. It's the kindest night market in Taipei for tired legs, and the best one for old-school Taiwanese cooking.",
               zh: "就一条短街，纯粹为了吃，没有一堆小玩意儿摊子挡路。对走累的腿最友善，也是台北最道地的老派台湾小吃夜市。" },
      place: {
        address: { en: "Ningxia Rd, Datong District", zh: "台北市大同區寧夏路" },
        hours: { en: "Stalls roughly 17:00–24:00", zh: "摊位约 17:00–24:00" },
        rating: "4.2",
        count: { en: "~15k Google reviews (approx.)", zh: "Google 约 1.5 万则" },
        review: { en: "Praised as Taipei's food-only night market — short, walkable, classic stalls. Cash is still king at most stands.",
                  zh: "常被称赞为台北「只卖吃的」夜市——短、好走、老味道。多数摊位仍以现金为主。" },
        asOf: "2026-08"
      },
      dishes: ["oyster-omelette", "taro-balls", "clam-soup"] },

    { time: "21:00", type: "rest",
      title: { en: "Back to the hotel", zh: "回饭店" },
      note:  { en: "An early night tonight. Tomorrow's tea hills are gentle going, but an early start still pays off at the gondola queue.",
               zh: "今晚早点休息。明天上猫空茶山，行程轻松写意，不过早点出门还是能少排一点缆车的队。" } }
  ],

  places: [
    {
      name: { en: "Ningxia Night Market", zh: "宁夏夜市" },
      tw: "寧夏夜市 · 台北大同區",
      maps: "https://www.google.com/maps/search/?api=1&query=寧夏夜市",
      images: [
        "ningxia-night-market/ningxia-night-market-stalls.jpg",
        "ningxia-night-market/ningxia-night-market-crowd.jpg",
        "ningxia-night-market/ningxia-night-market-entrance.jpg",
        "ningxia-night-market/ningxia-night-market-food-stall.jpg"
      ],
      history: {
        en: "Ningxia grew up in the shadow of the old Jiancheng traffic circle, which from the 1920s until fire finally took it in the 1990s was the single most famous place to eat in Taipei. When the circle went, its stalls and its cooking scattered into the surrounding streets, and Ningxia inherited the very best of it. That's why the food here still leans so wonderfully old-fashioned: pork liver soup, oyster omelettes, taro croquettes, egg-yolk pastries — the Taiwanese dishes that were feeding this city long before night markets started selling giant fried chicken and bubble tea to tourists.",
        zh: "宁夏夜市是在老建成圆环的余荫下长大的。那个圆环从1920年代起，直到1990年代一场大火为止，一直是台北最负盛名的吃食地标。圆环没落后，摊商与手艺四散到周边街巷，宁夏承接了其中最精华的一批。这也是为什么这里的味道特别老派迷人：猪肝汤、蚵仔煎、芋饼、蛋黄酥——都是在夜市开始卖大鸡排和珍奶给观光客之前，早已滋养这座城市的台湾味。"
      },
      famous: {
        en: "Being <b>short, and food-only</b>. A single two-hundred-metre street, with no clothing or phone-case stalls to wade through, and several stands have carried Michelin Bib Gourmand listings. The classics worth hunting down: oyster omelette, taro balls and taro croquettes, clam soup, pork liver soup, and turkey rice.",
        zh: "特色就是<b>短，而且只卖吃的</b>。整条街不过两百公尺，没有卖衣服或手机壳的摊子来分散注意力，其中数摊曾获米其林必比登推荐。值得锁定的经典：蚵仔煎、芋圆与芋饼、蛤蜊汤、猪肝汤，还有火鸡肉饭。"
      },
      locals: {
        en: "Taipei locals send visitors to Shilin and quietly keep Ningxia for themselves. The other thing they'll tell you: the queue is the menu. If a stall has a crowd waiting at 19:30 on a Saturday, join it first and work out what it sells afterwards.",
        zh: "台北人把观光客送去士林，自己偷偷跑来宁夏。他们还会告诉你一件事：排队就是菜单。周六晚上七点半，哪一摊排了长长人龙，先跟着排就对了，吃什么之后再说。"
      },
      doThis: {
        en: "Split into twos and threes, buy different things, and regroup at one of the seated stalls to share it all. Twelve people trying to queue as a single block will have a miserable time and eat one dish an hour — and keep a hand on the three-year-old in the crowd.",
        zh: "两三个人一组分头买不同的东西，再回到有座位的摊子集合分着吃。十二个人挤成一团排队会很惨，一小时只吃得到一样——人多的地方，牵好三岁小小孩的手。"
      },
      tip: {
        en: "Cash only at most stalls — bring NT$300–400 each in small notes. There are a few tables partway down the street where the grandparents can sit while the younger ones run food back and forth. Covered enough to shrug off a light rain.",
        zh: "多数摊位只收现金，每人带三四百元小钞就好。街中段有几张桌子，长辈可以坐着休息，年轻人负责跑腿张罗。上方有遮蔽，下点小雨照常逛。"
      }
    },
    {
      name: { en: "Himalaya Cafe (喜馬拉雅珈琲), Linkou", zh: "林口 喜马拉雅珈琲" },
      tw: "喜馬拉雅珈琲 Himalaya Cafe，新北市林口區民族路81號1樓",
      maps: "https://www.google.com/maps/place/%E5%96%9C%E9%A6%AC%E6%8B%89%E9%9B%85%E7%8F%88%E7%90%B2Himalaya+Cafe/data=!4m2!3m1!1s0x3442a7000a2cb5ff:0xa2183a299db84af4",
      /* Add your own family photo to assets/images/himalaya-cafe/ and list it below,
         e.g. "himalaya-cafe/himalaya-cafe-family-photo.jpg". */
      images: ["himalaya-cafe/himalaya-cafe-shrine-hall.jpg"],
      history: {
        en: "A Tibetan-Buddhist café — the Linkou branch of a small Taiwanese chain that also runs shops in Taichung and Hsinchu. The ground floor is a genuine shrine hall rather than décor: a hand-painted mandala set into the domed ceiling, three gilded statues on carved Tibetan altar cabinets, butter-lamp tiers along the mezzanine, and tables where you sit and drink coffee in the middle of it all. Locals call it 禮佛喝咖啡 — pay respects to the Buddha, then have a coffee.",
        zh: "这是一间藏传佛教风格的咖啡馆，属于台湾一个小连锁的林口分店，台中、新竹也有店。一楼是货真价实的佛堂，不是装潢：穹顶嵌着手绘曼陀罗，三尊金身佛像坐在雕花藏式佛龛上，夹层沿墙是一整排酥油灯，而桌椅就摆在这一切中间，让人坐下来喝咖啡。在地人称之为「礼佛喝咖啡」。"
      },
      famous: {
        en: "The ceiling, mostly — most people photograph the mandala dome before they order anything. Beyond that: selected single-origin coffee, cakes, Tibetan-style drinks and snacks, its own line of Himalayan goods, and paper on the tables for hand-copying the Heart Sutra. It reads online as one of the calmer, prettier rooms in Linkou; blogs file it under 沉澱心靈 — somewhere to let your head settle.",
        zh: "最出名的是天花板——多数人还没点单就先拍那面曼陀罗穹顶。此外还有精选单品咖啡、蛋糕、藏式饮品与点心、自有的喜马拉雅系列商品，桌上还备有纸笔可以手抄心经。网上评价都说这是林口最安静、最好看的空间之一，部落格常把它归在「沉澱心靈」那一类。"
      },
      doThis: {
        en: "Ninety minutes is set aside and it's free to stretch — the van waits outside and the rest of the day has room to breathe. Order coffee and something sweet, let the kids look up at the dome, and take the group photo in the hall. It is an active shrine as well as a café, so keep voices down, don't climb on or lean against the altars, and ask before photographing anyone praying. Linger longer and it only trims the Zhongshan shopping later, never the trip itself.",
        zh: "预留了九十分钟，多聊一会儿也没关系——车子在外面等，今天后面的行程留了余裕。点杯咖啡配点甜的，让孩子抬头看看穹顶，全家福就在佛堂里拍。这里同时也是正在使用的佛堂，请放低音量、别倚靠或攀爬佛龛，看到有人礼佛先问过再拍照。多待一点，顶多是晚点少逛点中山，不会影响其他行程。"
      },
      tip: {
        en: "We arrive at 09:30, which is opening time on every listing we could find — call 02-7716-1727 a day or two ahead, both to confirm the hour and to warn them twelve people are coming, since a room this quiet is not built for a group walking in unannounced.",
        zh: "我们09:30抵达，正好是查到的所有资料上的开门时间——建议提前一两天打02-7716-1727确认营业时间，并先说明一行十二人。这样安静的空间，实在不适合一群人毫无预警地直接推门进去。"
      }
    }
  ],

  food: [
    { id: "naka-egg-crepe", name: { en: "Crispy egg crepe", zh: "脆皮蛋饼" }, pinyin: "cuì pí dàn bǐng",
      img: "food-taiwan-breakfast/food-taiwan-breakfast-danbing-corn.jpg", price: 60,
      taste: { en: "A thin batter crepe wrapped around a fried egg, griddled until the outside turns properly crackly-crisp instead of the usual soft chew — the detail that built this chain's local reputation. Simple, a little greasy in the best way, and gone in five bites.",
               zh: "薄饼裹着煎蛋，煎到外皮真正酥脆、不是一般软软的口感——这正是这家店在本地闯出名号的关键。简单、带点恰到好处的油香，三两口就吃光。" },
      order: { en: "Ask for it plain, or <b>jiā ròusōng</b> — with pork floss — for a little extra. Radish cake with a fried egg (<b>luóbo gāo jiā dàn</b>) is the next thing to try if anyone wants more than a crepe.",
               zh: "可以直接点原味，或加点「加肉鬆」多添点风味。想吃饱一点，再点一份萝卜糕加蛋。" } },

    { id: "oyster-omelette", name: { en: "Oyster omelette", zh: "蚵仔煎" }, pinyin: "ô-á-tsian (Taiwanese)",
      img: "food-oyster-omelette/food-oyster-omelette-plate.jpg", price: 80,
      taste: { en: "Small oysters, egg and a sweet potato starch batter fried until the edges crisp and the centre stays deliberately gluey, then flooded with a sweet-savoury pink sauce. The texture divides families down the middle — but it's the single most iconic night market dish in Taiwan, and everyone should try it at least once.",
               zh: "小蚵仔、鸡蛋与番薯粉浆一起煎，边缘焦脆、中心刻意保持黏糯，最后淋上甜咸的粉红酱汁。那种口感常常让一家人意见分成两派——但它是台湾夜市最具代表性的一道，怎么都该尝一口。" },
      order: { en: "Ask for it by the Taiwanese name and you'll get a smile back. No oysters? <b>Dàn jiān</b> — the same dish, egg only.",
               zh: "用台语说「蚵仔煎」，老板会对你笑一下。不吃蚵仔就点「蛋煎」，做法一样只是少了蚵仔。" } },

    { id: "taro-balls", name: { en: "Taro balls", zh: "芋圆" }, pinyin: "yù yuán",
      img: "food-taro-balls/food-taro-balls-colorful.jpg", price: 60,
      taste: { en: "Hand-cut lumps of taro and sweet potato mashed with starch, boiled until springy and translucent, served over shaved ice in cold sweet soup, or hot in winter. Chewy in that specific bouncy way Taiwanese desserts are built for.",
               zh: "芋头和地瓜压成泥拌入粉类，手切成块，煮到Q弹半透明，夏天配刨冰或冷糖水、冬天则热食。那种弹牙口感正是台式甜品追求的滋味。" },
      order: { en: "Ask for <b>zōng hé</b> — mixed — and you get taro, sweet potato and usually green bean and pearls together.",
               zh: "点「综合」，芋圆、地瓜圆，通常还有绿豆和粉圆都会有。" } },

    { id: "clam-soup", name: { en: "Clam soup", zh: "蛤蜊汤" }, pinyin: "gé lí tāng",
      img: "food-clam-soup/food-clam-soup-night-market.jpg", price: 70,
      taste: { en: "Clear broth, a fistful of clams, ginger slivers and rice wine — nothing else needed. After a day of fried food, it's the thing that resets the palate, and the grandparents will likely order it twice.",
               zh: "清汤、一把蛤蜊、姜丝、米酒，简单就是好。吃了一天炸物之后，它负责把味觉洗回来，长辈往往会再点第二碗。" },
      order: { en: "Most soup stalls also do pork liver soup (<b>zhū gān tāng</b>) — a Ningxia speciality worth one bowl between two.",
               zh: "汤摊通常也卖猪肝汤，那是宁夏的招牌，两个人分一碗刚好。" } }
  ],

  verify: [
    { title: { en: "Confirm Naka Brunch can seat twelve on a Saturday morning", zh: "请确认拿靠早午餐周六上午能否容纳十二人" },
      body: { en: "The Zhongxiao branch (忠孝一路9號, ≈02-2600-8995) is the one both blog research and reviews point to, open 05:30–14:00 on weekends — but it's a popular local spot, and a walk-in table for twelve isn't guaranteed. Call ahead if you can. If it can't take the whole family, the fallback is grab-and-go from Linkou Market instead — 政宗包子 (steamed buns) or 蒸宴小籠包 (xiaolongbao), both on 中山路 by the market, both open before 05:00 on Saturdays, both two minutes from Minzu Road.",
              zh: "查到的资料多指向忠孝一路9号的分店（电话约02-2600-8995），周末营业05:30–14:00——但这是当地热门店，现场十二人桌不保证有位，建议先打电话问清楚。若坐不下全家，备案是改去林口市场买了就走：中山路上的政宗包子或蒸宴小笼包，周六都是清晨5点前就开，离民族路只要两分钟。" } },
    { title: { en: "Confirm Himalaya Cafe's Saturday opening hour — we arrive at 09:30", zh: "请确认喜马拉雅珈琲周六几点开门——我们09:30到" },
      body: { en: "Listings disagree: most say 09:30–20:30 daily, one says closed Mondays and 09:30–18:30. Saturday isn't in doubt, but 09:30 is the very minute the doors open on either version, so a phone call to 02-7716-1727 is worth making — confirm the hour, and tell them a party of twelve is coming. If they open later, the fix is easy: linger over breakfast at Naka and shift this stop back half an hour; the day has slack until the 11:40 hotel drop.",
              zh: "网上资料不一致：多数写每日09:30–20:30，另有一处写周一公休、09:30–18:30。周六营业没有疑问，但两种版本的开门时间都正好是09:30，所以还是打通电话到02-7716-1727比较妥当——确认时间，并告知一行十二人。万一开得比较晚也好办：早餐在拿靠多坐一会儿，这一站往后推半小时即可，行程到11:40送抵饭店之前都还有余裕。" } }
  ],

  logistics: {
    book: [
      { en: "<b>Airport transfer + two Linkou stops, released at the hotel ~11:40.</b> A 20-seat 中巴 — twelve of us can't legally fit a nine-seater. Confirm flight tracking, that the driver waits during the family visit, and that luggage stays aboard. Quote it as a morning block, about NT$6,000–8,000, not a 10-hour day. Same operator as Days 3–7 if they will do it.",
        zh: "<b>接机加林口两站，约11:40饭店解散。</b>20人座中巴——十二个人搭九人座不合法。确认会追踪班机、家族拜访时等候、行李留车上。请报上午那一块，约NT$6,000–8,000，不要开10小时。第3至7天能同一家最好。" },
      { en: "<b>Call ahead for a table of twelve at Naka Brunch (拿靠早午餐), 忠孝一路9號</b> — ≈02-2600-8995. It's a beloved local chain, not a big sit-down restaurant, so a phone call the week before beats hoping for a Saturday-morning walk-in.",
        zh: "<b>提前打电话到拿靠早午餐订十二人位</b>，忠孝一路9号，电话约02-2600-8995。这是当地人喜爱的连锁店，不是大餐厅，出发前一周打通电话，比周六现场碰运气保险得多。" },
      { en: "<b>Hotel early check-in.</b> Ask for it when booking — even a couple of rooms ready early makes the morning feel far more civilised.",
        zh: "<b>饭店提早入住。</b>订房时先问一声——哪怕只先开两间房，上午都会舒坦很多。" }
    ],
    notes: [
      { en: "Buy all eleven EasyCards at the airport MRT counter — the three-year-old can usually ride free on a lap — then hand them out on the van and have everyone write their name on theirs in marker.",
        zh: "十一张悠游卡在机场捷运柜台一次买齐——三岁的孩子通常可以免票坐在大人腿上——上车再发下去，让每个人用签字笔在卡上写好名字。" },
      { en: "Carry roughly NT$400 per person in small notes for the night market — most stalls are cash only.",
        zh: "夜市摊位多半只收现金，每人先准备约NT$400的小钞就够。" },
      { en: "September in Taipei runs 30–34°C and properly humid — pack the umbrella for sun as much as for rain.",
        zh: "九月的台北气温30至34°C，闷热潮湿——伞除了挡雨，遮阳一样派得上用场。" },
      { en: "Not much can go wrong weather-wise today — the family visit is indoors, and a rainy Zhongshan afternoon simply means more time in cafés and covered shopping streets, less on foot. See the weather page.",
        zh: "今天天气风险不大——家族拜访在室内，中山下午若下雨，就多待咖啡馆和有遮蔽的商店街，少走点路。详见天气备案页。" }
    ]
  },

  taxi: [
    { tw: "寧夏夜市", say: "Ningxia Night Market · Ningxia Rd, Datong District" },
    { tw: "請到林口區民族路81號，喜馬拉雅珈琲", say: "To Himalaya Cafe, No. 81 Minzu Rd, Linkou" }
  ]
};
