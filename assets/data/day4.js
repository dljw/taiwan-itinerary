/* ============================================================
   DAY 4 · Tue 8 Sep 2026 · Xiao Wulai skywalk + Daxi
   Weather buffer for the lanterns sits on Thursday (Hsu's + hotpot).
   ============================================================ */
window.TRIP = window.TRIP || {}; window.TRIP.days = window.TRIP.days || {};

window.TRIP.days[4] = {
  n: 4,
  date:  { en: "Tuesday 8 September", zh: "9月8日 · 周二" },
  title: { en: "Standing on glass above a waterfall", zh: "站在瀑布上方的玻璃步道" },
  intro: {
    en: "A glass walkway juts out over the lip of Xiao Wulai waterfall, and you can look straight down through your own feet into fifty metres of falling water. Back down in Daxi, the whole afternoon is yours — tofu, woodwork, baroque facades, no clock. Home in time for a quiet dinner in Taipei; the farewell hotpot is Thursday, after Hsu's. Wednesday is the lantern day, so tonight is an earlier night than a hotpot evening.",
    zh: "一段玻璃步道从小乌来瀑布的崖口悬挑出去，你可以从自己脚下直直看进五十公尺的落水里。下山回到大溪后，一整个下午都是你们的——豆干、木工、巴洛克立面，不必看表。赶回台北安静吃晚饭；告别火锅在周四，许家之后。明天放天灯，今晚比火锅那天早睡。"
  },
  hero: "xiaowulai/xiaowulai-skywalk-glass.jpg",
  chips: [
    { en: "中巴, hotel to hotel", zh: "中巴，饭店到饭店" },
    { en: "Mountain road — take tablets", zh: "山路，先吃晕车药" },
    { en: "Home before lanterns", zh: "天灯前早回" }
  ],

  glance: [
    { k: { en: "Leave hotel", zh: "出发" },   v: { en: "08:00 by mid-bus", zh: "8:00 中巴" } },
    { k: { en: "Meals", zh: "三餐" },         v: { en: "Hotel · Daxi Hakka lunch · Taipei casual", zh: "饭店 · 大溪客家菜 · 台北随便吃" } },
    { k: { en: "Cost pp", zh: "每人预估" },   v: { en: "≈ NT$350 + bus share", zh: "约 NT$350＋中巴分摊" } },
    { k: { en: "Walking", zh: "步行强度" },   v: { en: "Moderate — some steps", zh: "中等，有些阶梯" } },
    { k: { en: "Book ahead", zh: "需预订" },  v: { en: "Skywalk slot + 8–10 hr 中巴", zh: "天空步道预约＋8至10小时中巴" } }
  ],

  timeline: [
    { time: "07:00", dur: "1 hr", type: "rest",
      title: { en: "Breakfast, and pack the day bag", zh: "早餐，整理随身包" },
      note:  { en: "Umbrella, water, and motion sickness tablets — the road up to Fuxing winds through a long series of bends. The bus comes to the hotel at 08:00.",
               zh: "雨伞、水、晕车药——上复兴的路是一连串的弯道。中巴08:00到饭店门口。" } },

    { time: "08:00", dur: "90 min", type: "travel",
      title: { en: "Mid-bus: hotel → Xiao Wulai", zh: "中巴：饭店 → 小乌来" },
      maps: "https://www.google.com/maps/search/?api=1&query=小烏來天空步道",
      note:  { en: "Tell the driver <b>小烏來天空步道，桃園市復興區</b> — not 乌来 in New Taipei. About ninety minutes, freeway then the mountain road. Tablets before you board.",
               zh: "跟司机说<b>小烏來天空步道，桃園市復興區</b>——不是新北乌来。大约九十分钟，先高速公路再上山。上车前吃晕车药。" } },

    { time: "09:30", dur: "2 hr", type: "sight", img: "xiaowulai/xiaowulai-waterfall-tourists.jpg", cost: 50,
      title: { en: "Xiao Wulai Skywalk and waterfall", zh: "小乌来天空步道与瀑布" },
      placeRef: "Xiao Wulai Skywalk",
      maps: "https://www.google.com/maps/search/?api=1&query=小烏來天空步道",
      note:  { en: "The glass platform cantilevers out over the falls. Anyone uneasy with heights can take the side path and still get the full waterfall view from solid ground. There's a suspension bridge on the far side for the brave. <b>The skywalk normally needs an online slot booked in advance</b> — see the note below.",
               zh: "玻璃平台从瀑布上方悬挑出去。怕高的人可以走旁边的步道，一样能从实地看到完整的瀑布。对面还有一座吊桥，胆子大的可以去。<b>天空步道通常需要事先上网预约时段</b>——详见下方说明。" },
      place: {
        address: { en: "Xiao Wulai, Fuxing District, Taoyuan", zh: "桃園市復興區小烏來天空步道" },
        hours: { en: "Usually 08:00–17:00 · book slot online", zh: "通常 08:00–17:00 · 请上网预约" },
        rating: "4.4",
        count: { en: "~6k Google reviews (approx.)", zh: "Google 约六千则" },
        review: { en: "Glass skywalk over the falls is the thrill; nervous walkers can stay on solid side paths and still see the waterfall.",
                  zh: "玻璃步道悬在瀑布上方是亮点；怕高的人走旁侧步道也能看瀑布。" },
        asOf: "2026-08"
      } },

    { time: "11:30", dur: "30 min", type: "travel",
      title: { en: "Mid-bus down to Daxi Old Street", zh: "中巴下山到大溪老街" },
      maps: "https://www.google.com/maps/search/?api=1&query=大溪老街",
      note:  { en: "Same bus, same driver. Ask to be dropped on Heping Old Street, right where lunch is waiting.",
               zh: "同一台车、同一个司机。请停在和平老街，午餐就在那里等着你们。" } },

    { time: "12:00", dur: "1.5 hr", type: "meal", img: "food-hakka/food-hakka-stir-fry.jpg", cost: 300,
      title: { en: "Lunch — Hakka food on Daxi Old Street", zh: "午餐 —— 大溪老街的客家菜" },
      placeRef: "Daxi Old Street",
      maps: "https://www.google.com/maps/search/?api=1&query=大溪老街",
      note:  { en: "This is Hakka country, and the local restaurants cook accordingly — salty, savoury, a little fatty, and exactly right after a morning outdoors.",
               zh: "这一带是客家庄，餐厅做的就是客家味——咸香带油，正好犒赏走了一早上户外的胃口。" },
      place: {
        address: { en: "Heping Old Street, Daxi", zh: "桃園市大溪區和平路老街" },
        hours: { en: "Shops roughly 10:00–18:00", zh: "店家约 10:00–18:00" },
        rating: "4.2",
        count: { en: "~10k Google reviews (approx.)", zh: "Google 约一万则" },
        review: { en: "Baroque arcades, dried tofu, and Hakka cooking — flat enough for a full afternoon graze after Xiao Wulai.",
                  zh: "巴洛克骑楼、豆干与客家菜——小乌来之后还能走一下午。" },
        asOf: "2026-08"
      },
      dishes: ["hakka-stirfry", "mountain-greens"] },

    { time: "13:30", dur: "2.5 hr", type: "sight", img: "daxi-old-street/daxi-old-street-arcade.jpg",
      title: { en: "The rest of the afternoon in Daxi Old Street", zh: "大溪老街 —— 一整个下午" },
      maps: "https://www.google.com/maps/search/?api=1&query=大溪老街",
      note:  { en: "With the whole afternoon open, there's no reason to rush — and no need to sit down for another full meal after lunch. Walk Heping Road for the best-preserved baroque facades, duck into a woodwork shop or two, and graze a few of the stalls below instead of ordering big. Anyone who's had enough can settle into the arcades with a cold drink while the rest keep browsing.",
               zh: "整个下午都是你们的，完全不用赶——刚吃完午餐，也不必再坐下来吃一顿正餐。走和平路看保存最完整的巴洛克立面，钻进一两间木工店看看，下面几摊边走边吃就好，别点太多。逛累的人可以在骑楼下喝杯冷饮坐着，其他人继续逛。" },
      place: {
        address: { en: "Heping Old Street, Daxi", zh: "桃園市大溪區和平路老街" },
        hours: { en: "Stalls roughly 10:00–18:00", zh: "摊位约 10:00–18:00" },
        rating: "4.2",
        count: { en: "~10k Google reviews (approx.)", zh: "Google 约一万则" },
        review: { en: "Grazing afternoon — dried tofu, douhua, peanut rolls. Flat arcades make it easy to sit whenever legs need a break.",
                  zh: "边走边吃的下午——豆干、豆花、花生卷。骑楼平坦，腿累随时能坐。" },
        asOf: "2026-08"
      },
      dishes: ["daxi-tofu", "douhua", "peanut-roll", "hakka-tangyuan", "popped-rice-icecream", "dry-noodles"] },

    { time: "16:00", dur: "75 min", type: "travel",
      title: { en: "Mid-bus home to the hotel", zh: "中巴回饭店" },
      note:  { en: "About seventy-five minutes. Home in time for a quiet dinner; the farewell hotpot waits until Thursday.",
               zh: "大约七十五分钟。赶回吃顿安静的晚饭；告别火锅留到周四。" } },

    { time: "17:15", dur: "1 hr", type: "meal",
      title: { en: "Quiet dinner near the hotel", zh: "饭店附近随便吃" },
      note:  { en: "Not the farewell hotpot — that is Thursday, after Hsu's. Tonight is whatever is nearest: Huashan, a convenience store, a noodle shop. Lights out by 22:00; lanterns tomorrow.",
               zh: "不是告别火锅——那是周四，许家之后。今晚就近吃：华山、便利商店、麵店。22:00熄灯；明天放天灯。" } },

    { time: "22:00", type: "rest",
      title: { en: "Back to the hotel", zh: "回饭店" },
      note:  { en: "Wednesday is the long walk. Lay out EasyCards and walking shoes tonight.",
               zh: "明天走最多路。今晚把悠游卡和走路的鞋摆好。" } }
  ],

  places: [
    {
      name: { en: "Daxi Old Street", zh: "大溪老街" },
      tw: "大溪老街 · 桃園",
      maps: "https://www.google.com/maps/search/?api=1&query=大溪老街",
      images: [
        "daxi-old-street/daxi-old-street-facades.jpg",
        "daxi-old-street/daxi-old-street-arcade.jpg",
        "daxi-old-street/daxi-old-street-crowd.jpg",
        "daxi-old-street/daxi-old-street-facade-detail.jpg"
      ],
      history: {
        en: "Daxi grew rich on the Dahan River. In the nineteenth century, camphor, tea and timber came down from the mountains, were loaded onto flat-bottomed boats here, and floated downstream to Dadaocheng in Taipei — the very Dihua Street you'll walk on your last day. When the Japanese colonial government widened the streets in the 1910s, the merchants who lined them turned the rebuilding into a competition: each family crowned its shopfront with an elaborate carved parapet mixing Western columns and pediments with Chinese gourds, bats and their own family name. The river eventually silted up and the trade died, but with nothing to replace it, the facades simply stayed — and that's the old street you'll wander today.",
        zh: "大溪因大汉溪而富。十九世纪，樟脑、茶叶和木材从山里运下来，在这里装上平底船，顺流送到台北大稻埕——也就是你们最后一天要逛的迪化街。1910年代日本殖民政府拓宽街道时，两旁的商家把重建变成了一场较劲：家家户户都在店面顶上做了繁复的牌楼立面，西洋柱式与山墙，配上中式的葫芦、蝙蝠，还有自家的姓氏堂号。后来河道淤积、贸易没落，因为没有新产业取而代之，这些立面就这样原封不动地留到了今天，成了你们现在要逛的老街。"
      },
      famous: {
        en: "<b>Dried tofu (豆干)</b> above all — Daxi's is braised again and again in soy and spice until it turns dark, dense and faintly chewy, closer to a fine charcuterie than to anything you'd normally call tofu. Then there's the woodwork: Daxi has been Taiwan's furniture and temple-carving town for a century, and its side streets still smell of fresh sawdust.",
        zh: "首推<b>豆干</b>——大溪的豆干在酱油与香料里反复卤煮，颜色深、质地扎实、带点嚼劲，与其说是豆腐，不如说更接近熟成的腌肉。其次是木工：大溪当了一百年台湾的家具与庙宇雕刻重镇，巷子里至今仍闻得到新鲜木屑的香气。"
      },
      locals: {
        en: "Taipei families drive down on weekends for the tofu and treat the old street itself as a brisk twenty-minute walk-through. The advice you'll hear from anyone local is to look up — everyone photographs the stalls and misses the parapets, which are the real reason the street is protected.",
        zh: "台北人周末开车下来主要是为了买豆干，老街本身通常二十分钟就逛完。在地人常提醒一句：记得抬头看。大家都忙着拍摊子，反而错过了牌楼——那才是这条街被列为保存区的真正原因。"
      },
      doThis: {
        en: "Walk Heping Road first for the best-preserved facades, then loop back along Zhongshan Road. Buy tofu from whichever stall has the longest queue of people speaking Taiwanese. If anyone wants to sit down, the arcades have stools.",
        zh: "先走和平路，那里的牌楼保存得最完整，再从中山路绕回来。豆干就买那摊排队讲台语的人最多的。想坐一下的话，骑楼下有板凳。"
      },
      tip: {
        en: "A weekday afternoon like this one is far calmer than the Saturday crowds a morning visit would bring — no need to race any day-trippers. Public toilets are at the visitor centre near the Daxi Wude Hall end. Entirely flat, no steps.",
        zh: "像今天这样的平日下午，比周六早上要清静得多——不必跟一日游客抢时间。公厕在靠近大溪武德殿那端的游客中心。全程平坦，没有阶梯。"
      }
    },
    {
      name: { en: "Xiao Wulai Skywalk", zh: "小乌来天空步道" },
      tw: "小烏來天空步道 · 桃園市復興區",
      maps: "https://www.google.com/maps/search/?api=1&query=小烏來天空步道",
      images: [
        "xiaowulai/xiaowulai-skywalk-view.jpg",
        "xiaowulai/xiaowulai-waterfall.jpg",
        "xiaowulai/xiaowulai-suspension-bridge.jpg",
        "xiaowulai/xiaowulai-waterfall-scenic.jpg"
      ],
      history: {
        en: "The waterfall has been a local landmark for as long as anyone has lived in these hills — this is the traditional territory of the Atayal, and the valley below is still Atayal land. The skywalk itself is recent: a glass-floored platform cantilevered out from the clifftop, opened in 2011, hanging right over the lip where the water goes over. A suspension bridge across the gorge was added a few years later. Nearby sits the Wind-Moved Stone, a boulder locals say used to rock in the wind until an earthquake settled it in place.",
        zh: "这座瀑布自古就是当地地标——这一带是泰雅族的传统领域，下方的溪谷至今仍是泰雅族的土地。天空步道则相当新：玻璃地板的平台从崖顶悬挑出去，2011年启用，正好悬在水流翻落的崖口上方。几年后又在峡谷上加了一座吊桥。附近还有「风动石」，据说以前会随风摇动，直到一场地震让它定了下来。"
      },
      famous: {
        en: "<b>Looking straight down through the floor</b> into the falls. It's a short walk-out — eleven metres or so — but the drop beneath the glass does all the work. The waterfall itself runs about fifty metres into a clear pool below.",
        zh: "<b>从脚下的玻璃直直看进瀑布</b>。步道本身不长，大约十一公尺，但玻璃下方的落差就够震撼了。瀑布本身约五十公尺高，落进下方的一潭清水。"
      },
      locals: {
        en: "Taoyuan people treat it as the best half-day drive-out from the city, often pairing it with the hot springs or the Atayal villages further up the road. The advice everyone gives is to go on a weekday morning — the platform limits how many people stand on it at once, so weekends mean queueing on a hot clifftop.",
        zh: "桃园人把这里当成从市区出发最值得的半日兜风，通常再往上串联温泉或泰雅部落。大家一致的建议是平日早上去——平台会限制同时站上去的人数，周末就得在闷热的崖顶排队。"
      },
      doThis: {
        en: "Skywalk first, before the coach tours arrive. Then walk down toward the pool for the view from below, which is arguably even better than the view from above. Cross the suspension bridge if the kids insist.",
        zh: "先走天空步道，赶在游览车之前。接着往下走到水潭边，从下往上看的角度其实更好。小朋友坚持的话，再去走吊桥。"
      },
      tip: {
        en: "There are steps and slopes down to the pool — the platform itself is easy, the lower path less so. Height-shy members of the group lose nothing by staying on the side path. Tickets are cheap, parking is free, and the toilets are perfectly decent.",
        zh: "往水潭的路有阶梯和坡道——平台本身好走，下面那段就没那么轻松。怕高的人走旁边的步道并不吃亏。门票便宜、停车免费，厕所也很正常。"
      }
    }
  ],

  food: [
    { id: "hakka-stirfry", name: { en: "Hakka stir-fry", zh: "客家小炒" }, pinyin: "kè jiā xiǎo chǎo",
      img: "food-hakka/food-hakka-stir-fry.jpg", price: 250,
      taste: { en: "The dish that defines Hakka cooking: pork belly, dried squid, pressed tofu, celery and spring onion, fried hard with soy and rice wine. Salty, chewy, deeply savoury — food built by people who worked the fields and needed a dish that would keep.",
               zh: "定义客家菜的一道：五花肉、鱿鱼干、豆干、芹菜与葱，用酱油和米酒大火快炒。咸、韧、香气浓——这是下田干活的人发明的菜，本来就要耐放又下饭。" },
      order: { en: "Order it with <b>méi gān kòu ròu</b> (pork belly with preserved mustard greens) and a plate of greens, and the table is complete.",
               zh: "再点一道「梅干扣肉」和一盘青菜，一桌就齐了。" } },

    { id: "hotpot", name: { en: "Hotpot", zh: "火锅" }, pinyin: "huǒ guō",
      img: "hotpot/hotpot-meat-spread.jpg", price: 600,
      taste: { en: "The right farewell dinner: the whole group of twelve around one table, cooking as they talk, for two hours. Taiwanese hotpot leans milder than Sichuan — milk-based, herbal, or a clean kelp broth — and most places do a split pot so the kids and the chilli-lovers both get what they want.",
               zh: "最适合的告别晚餐：十二个人围着一锅，边煮边聊两小时。台式火锅比川式温和——牛奶锅、药膳锅或清爽的昆布汤底——多数店家都有鸳鸯锅，小朋友和嗜辣的人各取所需。" },
      order: { en: "Build your own dipping sauce at the counter: soy, sha cha (the Taiwanese barbecue paste), raw egg yolk, garlic, coriander. Sha cha plus egg yolk is the local formula.",
               zh: "到酱料台自己调：酱油、沙茶、生蛋黄、蒜末、香菜。沙茶加蛋黄是本地的标准配方。" } },

    { id: "sha-cha", name: { en: "Sha cha sauce", zh: "沙茶酱" }, pinyin: "shā chá jiàng",
      img: "hotpot/hotpot-mushroom.jpg", price: null,
      taste: { en: "Worth knowing by name, because it's on every hotpot table in Taiwan: a brown paste of dried fish, shrimp, garlic, shallot and chilli, brought over from Chaozhou and now more Taiwanese than anything. Savoury rather than hot.",
               zh: "值得记住名字，因为台湾每张火锅桌上都有：扁鱼、虾米、蒜头、红葱与辣椒做成的褐色酱，源自潮州，如今比什么都台。是咸鲜，不是辣。" } },

    { id: "mountain-greens", name: { en: "Mountain greens", zh: "山苏／过猫" }, pinyin: "shān sū / guò māo",
      img: "food-hakka/food-hakka-turnip-cake.jpg", price: 180,
      taste: { en: "Order whatever wild fern the Fuxing restaurants have that day — bird's nest fern or vegetable fern, stir-fried with garlic and tiny dried anchovies. Crunchy, slightly slippery, and something you won't find back home.",
               zh: "在复兴的餐厅就点当天有的野菜——山苏或过猫，用蒜头和小鱼干快炒。爽脆微黏，是回家吃不到的东西。" } },

    { id: "daxi-tofu", name: { en: "Daxi dried tofu", zh: "大溪豆干" }, pinyin: "dà xī dòu gān",
      img: "food-daxi-tofu/food-daxi-tofu-shop-daxi.jpg", price: 50,
      taste: { en: "Dense, dark, faintly smoky and much firmer than tofu anywhere else — braised again and again in soy, star anise and five spice until it slices like a firm cheese. Sold plain, or split and filled with pickled greens and chilli.",
               zh: "扎实、色深、带点烟熏味，比别处的豆腐硬得多——在酱油、八角与五香里反复卤煮，切开来像硬质起司。可以买原味，也可以剖开夹酸菜和辣椒。" },
      order: { en: "Say <b>yī fèn</b> (one portion). Ask for it cut — <b>qiē yī xià</b> — and they'll chop it into cubes with a toothpick for you.",
               zh: "说「一份」。要他们切开就说「切一下」，会切成小块并附牙签。" } },

    { id: "douhua", name: { en: "Douhua", zh: "豆花" }, pinyin: "dòu huā",
      img: "food-douhua/food-douhua-bowl.jpg", price: 50,
      taste: { en: "Silken tofu pudding in a thin, barely-sweet sugar syrup, served warm or over ice. You choose the toppings — peanuts, tapioca pearls, red bean, taro. The peanut version is the Taiwanese default and the right first bowl.",
               zh: "嫩豆花泡在清甜的糖水里，甜度很低，可温可冰。配料自选——花生、粉圆、红豆、芋头。花生豆花是台湾的标准答案，第一碗就点它。" },
      order: { en: "Point at the toppings tray and hold up fingers. <b>Bīng de</b> = iced, <b>rè de</b> = warm.",
               zh: "指着配料盘比手指就行。「冰的」或「热的」。" } },

    { id: "peanut-roll", name: { en: "Peanut ice cream roll", zh: "花生卷冰淇淋" }, pinyin: "huā shēng juǎn bīng qí lín",
      img: "food-peanut-mochi/food-peanut-mochi-azhu-roll.jpg", price: 60,
      taste: { en: "A spring roll wrapper, a blizzard of peanut brittle shaved off a solid block with a plane, two scoops of taro ice cream, and — the part that surprises everyone — a handful of fresh coriander. Don't skip the coriander. It's the whole point.",
               zh: "润饼皮上，用刨刀从整块花生糖上刨下如雪的花生粉，放两球芋头冰淇淋，再加上让所有人惊讶的一把香菜。别把香菜去掉，那才是精髓。" },
      order: { en: "If coriander is genuinely unbearable: <b>bú yào xiāng cài</b>. Otherwise, trust it.",
               zh: "真的不敢吃香菜就说「不要香菜」。否则请相信它。" } },

    { id: "hakka-tangyuan", name: { en: "Hakka savoury rice dumplings, A Chiu's", zh: "客家咸汤圆（阿秋大湯圓）" }, pinyin: "kè jiā xián tāng yuán",
      price: 70,
      taste: { en: "Hakka-style tangyuan — plain glutinous rice balls with no sweet filling, served in a savoury broth with dried shrimp, shredded pork, shiitake and a scatter of fried shallots and coriander. A working old-street institution rather than a tourist stall, and a good salty counterpoint to the sweet things around it.",
               zh: "客家风味的咸汤圆——不包甜馅，纯糯米团，配虾米、肉丝、香菇，撒油葱酥和香菜煮成咸汤。是老街上开了很久的老店，不是观光摊，跟周围偏甜的小吃正好换个口味。" },
      order: { en: "Ask for <b>yī wǎn xián de</b> — one bowl, savoury — to tell it apart from the sweet version some stalls also sell.",
               zh: "说「一碗咸的」，跟一些摊子也卖的甜汤圆区分开。" } },

    { id: "popped-rice-icecream", name: { en: "Popped-rice soft serve, Zheng Feng", zh: "爆米香软冰淇淋（正豐食品行）" }, pinyin: "bào mǐ xiāng ruǎn bīng qí lín",
      price: 50,
      taste: { en: "A cone of soft serve rolled through a tray of freshly popped rice until it's crusted all over, then finished with roasted black sesame and rice bran. Crunchy, nutty, and just sweet enough to survive a hot walk down the street.",
               zh: "软冰淇淋整支在现爆的米香里滚一圈，外层裹满脆壳，再撒上烤黑芝麻与米糠。口感香脆、甜度不高，很适合边走边吃解暑。" },
      order: { en: "Point at the display cone at the counter — there's usually only one size.",
               zh: "指柜台里的展示品就行，通常只有一种尺寸。" } },

    { id: "dry-noodles", name: { en: "Dry noodles, Gan Mian Ju", zh: "乾麵居" }, pinyin: "gān miàn jū",
      price: 60,
      taste: { en: "A savoury break from the sweet stalls: noodles tossed in a dark soy-and-lard dressing, no soup, topped with minced pork and a few slices of blanched greens. Small, plain, and a good reset if anyone still has room after lunch.",
               zh: "在一堆甜食摊之间的咸口休息站：面条拌深色酱油猪油酱汁，不带汤，铺肉燥和烫青菜。份量小、味道朴实，午餐之后还有空间的话很适合来一点。" },
      order: { en: "Say <b>xiǎo wǎn</b> — small bowl.",
               zh: "说「小碗」就够。" } }
  ],

  verify: [
    { title: { en: "Reserve the skywalk slot online, and check whether it is still required", zh: "上网预约天空步道时段，并确认是否仍需预约" },
      body: { en: "Xiao Wulai's glass walkway limits how many people stand on it, and normally takes <b>advance online reservations for a timed slot</b>. You are arriving by private bus on a Tuesday, so <b>assume you must book</b>. Reserve twelve places for around 10:00 as soon as the booking window opens, and confirm the current rule before you travel; it has changed more than once. With a three-year-old in the group, it's also worth asking about a minimum age when you book.",
              zh: "小乌来的玻璃步道限制同时站上去的人数，通常需要<b>事先上网预约时段</b>。你们是周二包车到，所以<b>请当作一定要预约</b>。订位一开放就先订十二个名额、时段约10:00，出发前再确认最新规定——这条规则改过不止一次。家里有个三岁的孩子，预约时也可以顺便问一下有没有最低年龄限制。" } },
    { title: { en: "If Tuesday is wet, skip the glass and keep Daxi", zh: "若周二下雨，跳过玻璃，留下大溪" },
      body: { en: "Light rain: Daxi's arcades still work; the skywalk is miserable. A named typhoon cancels the mountain road — stay in Taipei, use the indoor list, and do not try to move Xiao Wulai to Thursday (that morning is Hsu's). The farewell hotpot stays Thursday regardless.",
              zh: "小雨：大溪骑楼还逛得；玻璃步道很难受。有命名的台风就取消山路——留在台北走室内清单，也别把小乌来改到周四（那天上午是许家）。告别火锅仍在周四。" } }
  ],

  logistics: {
    book: [
      { en: "<b>8–10 hour mid-bus, hotel 08:00 → Xiao Wulai → Daxi → hotel ~17:15.</b> Ask for 小乌来 in Fuxing, Taoyuan — not 乌来. Same operator as Days 1, 3, 5, 6 and 7. Enquiry on the Transport page.",
        zh: "<b>8至10小时中巴，饭店08:00 → 小乌来 → 大溪 → 饭店约17:15。</b>请订桃园复兴小乌来——不是乌来。可与第1、3、5、6、7天同一家。询价见交通页。" },
      { en: "<b>Skywalk slots ×12</b>, booked online in advance — see the note above.",
        zh: "<b>天空步道12个名额</b>，请事先上网预约——详见上方说明。" }
    ],
    notes: [
      { en: "Winding mountain road for the last half-hour — tablets before you board, not after.",
        zh: "最后半小时是弯路——上车前吃晕车药，不是难受了才吃。" },
      { en: "The skywalk limits numbers on the platform, so twelve of you will go out in shifts. Nobody is being left behind.",
        zh: "天空步道限制平台上的人数，十二个人会分批上去。没有人被丢下。" },
      { en: "Mountain weather turns fast. Take the umbrella even if Taipei is clear.",
        zh: "山区天气说变就变。台北晴朗也要带伞。" },
      { en: "Wednesday is the lantern day. The bus comes to the hotel at 09:15.",
        zh: "明天放天灯。中巴09:15到饭店门口。" }
    ]
  },

  taxi: [
    { tw: "小烏來天空步道，桃園市復興區", say: "Xiao Wulai Skywalk, Fuxing, Taoyuan" },
    { tw: "大溪和平老街", say: "Daxi Heping Old Street" }
  ]
};
