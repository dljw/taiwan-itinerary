/* ============================================================
   practical.js — bookings checklist, phrasebook, taxi cards,
   money/transport notes and emergency numbers.
   Taxi cards deliberately use TRADITIONAL characters, because
   that is what is written on signs and what a driver reads.
   ============================================================ */
window.TRIP = window.TRIP || {};

window.TRIP.practical = {

  bookings: [
    { what: { en: "Mid-bus — Day 1, airport transfer + 2 stops", zh: "包中巴 · 第1天接机加两站" },
      when: { en: "Sat 5 Sep, airport 07:30, hotel ~11:40", zh: "9/5 周六，机场07:30，饭店约11:40" },
      note: { en: "Airport → Linkou breakfast → family visit → hotel. <b>Must be a 20-seat 中巴</b>. Quote a morning block, about NT$6,000–8,000, not a 10-hour day. Confirm flight tracking, waiting, and luggage aboard. Same operator as Days 3–7 if they will do it.",
              zh: "机场 → 林口早餐 → 家族拜访 → 饭店。<b>务必是20人座中巴</b>。请报上午那一块，约NT$6,000–8,000，不要开10小时。确认追踪班机、等候、行李留车上。第3至7天能同一家最好。" } },

    { what: { en: "Naka Brunch, Linkou — table for twelve", zh: "拿靠早午餐（林口）· 十二人位" },
      when: { en: "Sat 5 Sep, ≈08:30", zh: "9/5 周六，约08:30" },
      note: { en: "忠孝一路9號, ≈02-2600-8995. A popular local chain rather than a large restaurant, so it's worth calling ahead instead of risking a Saturday-morning walk-in. Fallback: grab-and-go from Linkou Market (政宗包子 or 蒸宴小籠包), two minutes from Minzu Road.",
              zh: "忠孝一路9号，电话约02-2600-8995。这是热门的在地连锁店而非大餐厅，建议先电话预约，别赌周六早上现场排队。备案：到林口市场买了就走（政宗包子或蒸宴小笼包），距民族路仅两分钟。" } },

    { what: { en: "Himalaya Cafe, Linkou — the family visit", zh: "喜马拉雅珈琲（林口）· 家族拜访" },
      when: { en: "Sat 5 Sep, 09:30–11:00", zh: "9/5 周六，09:30–11:00" },
      note: { en: "民族路81號1樓, 02-7716-1727. Not a booking so much as a courtesy call — every listing gives 09:30 as opening time and we arrive on the dot, so ring a day or two ahead to confirm the hour and warn them twelve people are coming. It's a working Tibetan Buddhist shrine hall as well as a café.",
              zh: "民族路81号1楼，电话02-7716-1727。与其说是订位，不如说是先打声招呼——所有资料都写09:30开门，而我们正好准点到，建议提前一两天致电确认时间并告知一行十二人。这里同时也是正在使用的藏传佛堂。" } },

    { what: { en: "Mid-bus — Day 3, Taipei ↔ Yilan", zh: "包中巴 · 第3天台北↔宜兰" },
      when: { en: "Mon 7 Sep, 08:30–18:15", zh: "9/7 周一，08:30–18:15" },
      note: { en: "Hotel → Lanyang Kingdom (Zhuangwei) → jar chicken or seafood lunch → Qingshui Geothermal Park (Datong) → hotel. Driver waits. A 10-hour 中巴, not Kamalan plus taxis. Ask whether the vehicle can enter 501巷; if not, wait at 長埤湖. Same operator as the other mid-bus days.",
              zh: "饭店 → 兰阳动植物王国（壮围）→ 甕缸鸡或海鲜午餐 → 清水地热公园（大同）→ 饭店。司机等候。10小时中巴，不是葛玛兰再加计程车。问501巷进不进得去；进不去就停長埤湖。可与其他中巴同一家。" } },

    { what: { en: "Mid-bus — Day 4, Shifen + Jiufen, 10 hours", zh: "包中巴 · 第4天十分九份，10小时" },
      when: { en: "Tue 8 Sep, 10:00–20:00", zh: "9/8 周二，10:00–20:00" },
      note: { en: "Airbnb 10:00 → Shifen Waterfall gate → old street and lanterns → Golden Waterfall → Jiufen dusk → Airbnb 20:00. Hard 10-hour clock — leave Jiufen at 18:45. No overtime; the operator will not run past 8pm.",
              zh: "民宿10:00 → 十分瀑布门口 → 老街与天灯 → 黄金瀑布 → 黄昏九份 → 民宿20:00。硬十小时——18:45离开九份。不超时；业者过不了晚上8点。" } },

    { what: { en: "Xiao Wulai skywalk slots ×12", zh: "小乌来天空步道 ×12" },
      when: { en: "Wed 9 Sep, around 10:00", zh: "9/9 周三，约10:00" },
      note: { en: "The glass walkway limits numbers and normally requires an <b>online timed booking</b>. Closed Tuesdays — Wednesday is the open day. You are arriving by private bus, so plan to book online, and double-check the current rule before you fly.",
              zh: "玻璃步道限制人数，通常需要<b>线上预约时段</b>。周二公休——周三才开门。你们是包车到，请当作一定要线上预约，出发前再确认最新规定。" } },

    { what: { en: "Maokong tea house", zh: "猫空茶馆" },
      when: { en: "Sun 6 Sep, 12:30 ×12", zh: "9/6 周日 12:30 ×12" },
      note: { en: "These are small family-run spots with only a handful of big tables, and Sunday is the busiest day of the week to find one free.",
              zh: "这里多是家庭经营的小店，大桌数量有限，而周日又是一周中最忙碌的一天。" } },

    { what: { en: "Hsu's handmade noodles ×12", zh: "石碇许家手工麵线 ×12" },
      when: { en: "Thu 10 Sep, 09:30", zh: "9/10 周四，09:30" },
      note: { en: "DIY + 流水麵, about NT$550. <b>handmadenoodlesbyhsu.com.tw</b>, LINE <b>@a26633004</b>, phone <b>02-2663-3004</b>. Closed Tuesdays — Monday is Yilan, so this is Thursday. Under-sixes free.",
              zh: "DIY＋流水麵，约 NT$550。<b>handmadenoodlesbyhsu.com.tw</b>、LINE <b>@a26633004</b>、电话 <b>02-2663-3004</b>。周二公休——周一是宜兰，所以排周四。六岁以下免费。" } },

    { what: { en: "Mid-bus — Day 5, Xiao Wulai + Daxi", zh: "包中巴 · 第5天小乌来加大溪" },
      when: { en: "Wed 9 Sep, 08:00–17:15", zh: "9/9 周三，08:00–17:15" },
      note: { en: "Hotel → Xiao Wulai skywalk → Daxi Old Street → hotel. 8–10 hours. Ask for <b>小乌来 in Fuxing, Taoyuan</b> — not 乌来. Same operator as the other mid-bus days.",
              zh: "饭店 → 小乌来天空步道 → 大溪老街 → 饭店。8至10小时。请订<b>桃园复兴小乌来</b>——不是乌来。可与其他中巴同一家。" } },

    { what: { en: "Mid-bus — Day 6, Shiding half-day", zh: "包中巴 · 第6天石碇半天" },
      when: { en: "Thu 10 Sep, 08:15–12:15", zh: "9/10 周四，08:15–12:15" },
      note: { en: "Hotel → Hsu's → <b>drop at Ximending</b>, driver waiting. A 4–5 hour half-day, not a 10-hour clock, not three taxis. Same operator as the other mid-bus days.",
              zh: "饭店 → 许家 → <b>西门町下车</b>，司机等候。4至5小时半天，不是10小时，也不是三台计程车。可与其他中巴同一家。" } },

    { what: { en: "Lanyang Kingdom tickets ×12", zh: "兰阳动植物王国门票 ×12" },
      when: { en: "Mon 7 Sep, 10:00", zh: "9/7 周一，10:00" },
      note: { en: "Walk-up or Klook. Adult ~NT$280, 12 and under ~NT$180, under 90 cm free. <b>0958-507-905</b>. Weekdays open 10:00. Address: 紅葉路62-13號.",
              zh: "现场或 Klook。全票约 NT$280，12岁以下约 NT$180，未满90公分免费。<b>0958-507-905</b>。平日10:00开门。地址：红叶路62-13号。" } },

    { what: { en: "Phone two jar chickens at Da Qancheng", zh: "大嵌城两只甕缸鸡 · 打电话" },
      when: { en: "Mon 7 Sep, call ~11:00 from the park", zh: "9/7 周一，约11:00在园区打" },
      note: { en: "大嵌城甕缸鸡, <b>03-938-7700</b>, 新南路102-6号. Walk-in. The call is so two birds are out of the kiln at 12:15, not a table booking. Cash. Seafood instead: 壮围海之味, 03-938-8616, 中央路二段288号.",
              zh: "大嵌城甕缸鸡，<b>03-938-7700</b>，新南路102-6号。走进去。打电话是为了12:15鸡出窑，不是订桌。现金。改吃海鲜：壮围海之味，03-938-8616，中央路二段288号。" } },

    { what: { en: "Qingshui Geothermal Park — no ticket, tell the driver", zh: "清水地热公园 · 不用订票，跟司机说" },
      when: { en: "Mon 7 Sep, from 14:10", zh: "9/7 周一，14:10 起" },
      note: { en: "Free entry. Buy eggs, corn and baskets on site. Last lane (501巷) may not take a 中巴 — wait at 長埤湖 if needed. Towel for feet. Keep the 3-year-old off the 95°C wells. Optional wooden bathhouse only if someone still wants a full soak.",
              zh: "免费入园。现场买蛋、玉米和竹篓。最后501巷中巴可能进不去——进不去就停長埤湖。泡脚带毛巾。三岁别靠95°C的井。有人还想整身泡，才加木造汤屋。" } },

    { what: { en: "Jiufen Teahouse", zh: "九份茶坊" },
      when: { en: "Tue 8 Sep, 17:45 ×12", zh: "9/8 周二 17:45 ×12" },
      note: { en: "Rated 4.8. Balcony tables go first, and the balcony is the whole point of coming. Tell them you must leave by 18:35 — the bus is 18:45.",
              zh: "评价4.8。阳台桌最抢手，而阳台正是这里最迷人之处。请说明18:35必须离桌——车子18:45走。" } },

    { what: { en: "Farewell hotpot", zh: "告别火锅" },
      when: { en: "Thu 10 Sep, 18:30 ×12", zh: "9/10 周四 18:30 ×12" },
      note: { en: "Confirm one table for twelve rather than splitting into two, and ask about a divided pot for the kids.",
              zh: "确认是十二人同坐一桌而非拆成两桌，并问问是否能用鸳鸯锅照顾小朋友的口味。" } },

    { what: { en: "Rice & Shine, Dihua St", zh: "稻舍（迪化街）" },
      when: { en: "Fri 11 Sep, 12:30 ×12", zh: "9/11 周五 12:30 ×12" },
      note: { en: "A small restored shophouse. Ask whether they offer a set menu — ordering à la carte for twelve can take forever.",
              zh: "小型老屋改建的餐厅。可以问问是否有合菜套餐——十二个人单点会点上好一阵子。" } },

    { what: { en: "Mid-bus — Day 7, hotel to airport", zh: "包中巴 · 第7天饭店送机" },
      when: { en: "Fri 11 Sep, 14:45", zh: "9/11 周五 14:45" },
      note: { en: "Point-to-point send-off, same 20-seat as Day 1. Hotel 14:45 → Taoyuan Airport ~15:45. Do not open a 10-hour clock. Bundle with the Day 1 operator.",
              zh: "点对点送机，跟第1天同款20人座。饭店14:45 → 桃园机场约15:45。不要开10小时。跟第1天同一家。" } },

    { what: { en: "Nothing to check for the Red House market", zh: "红楼市集不用特地确认" },
      when: { en: "Thu 10 Sep afternoon", zh: "9/10 周四下午" },
      note: { en: "The outdoor craft market typically runs Thursday–Sunday, so Thursday should have it. The building and streets stay open either way.",
              zh: "户外创意市集多半周四到周日，周四应该有摊。建筑和街道反正都开。" } }
  ],

  phrases: [
    { group: { en: "The basics", zh: "基本用语" },
      items: [
        { en: "Hello", zh: "你好", py: "nǐ hǎo" },
        { en: "Thank you", zh: "谢谢", py: "xiè xie" },
        { en: "Sorry / excuse me", zh: "不好意思", py: "bù hǎo yì si" },
        { en: "Yes, that's right", zh: "对", py: "duì" },
        { en: "No / don't want", zh: "不要", py: "bú yào" },
        { en: "How much?", zh: "多少钱？", py: "duō shao qián?" },
        { en: "Too expensive", zh: "太贵了", py: "tài guì le" },
        { en: "I don't understand", zh: "我听不懂", py: "wǒ tīng bù dǒng" },
        { en: "Do you speak English?", zh: "你会说英文吗？", py: "nǐ huì shuō yīng wén ma?" }
      ] },

    { group: { en: "Ordering food", zh: "点餐" },
      items: [
        { en: "Table for twelve, please", zh: "十二位，谢谢", py: "shí èr wèi, xiè xie" },
        { en: "One portion / two portions", zh: "一份／两份", py: "yī fèn / liǎng fèn" },
        { en: "This one, please", zh: "这个，谢谢", py: "zhè ge, xiè xie" },
        { en: "No coriander", zh: "不要香菜", py: "bú yào xiāng cài" },
        { en: "Not spicy / a little spicy", zh: "不辣／小辣", py: "bú là / xiǎo là" },
        { en: "Half sugar, less ice", zh: "半糖，少冰", py: "bàn táng, shǎo bīng" },
        { en: "Hot / iced", zh: "热的／冰的", py: "rè de / bīng de" },
        { en: "Vegetarian", zh: "素食", py: "sù shí" },
        { en: "The bill, please", zh: "买单", py: "mǎi dān" },
        { en: "Is it very hot? (temperature)", zh: "会很烫吗？", py: "huì hěn tàng ma?" }
      ] },

    { group: { en: "Getting around", zh: "交通" },
      items: [
        { en: "Please take us here (show the card)", zh: "请载我们到这里", py: "qǐng zài wǒ men dào zhè lǐ" },
        { en: "Please wait here", zh: "请在这里等", py: "qǐng zài zhè lǐ děng" },
        { en: "Stop here, thank you", zh: "在这里停，谢谢", py: "zài zhè lǐ tíng, xiè xie" },
        { en: "Where is the toilet?", zh: "厕所在哪里？", py: "cè suǒ zài nǎ lǐ?" },
        { en: "Where is the MRT station?", zh: "捷运站在哪里？", py: "jié yùn zhàn zài nǎ lǐ?" },
        { en: "Is there a lift?", zh: "有电梯吗？", py: "yǒu diàn tī ma?" },
        { en: "We are a group of twelve", zh: "我们有十二个人", py: "wǒ men yǒu shí èr ge rén" }
      ] },

    { group: { en: "If something goes wrong", zh: "紧急状况" },
      items: [
        { en: "Please help me", zh: "请帮我", py: "qǐng bāng wǒ" },
        { en: "I am not feeling well", zh: "我不舒服", py: "wǒ bù shū fú" },
        { en: "Where is the hospital?", zh: "医院在哪里？", py: "yī yuàn zài nǎ lǐ?" },
        { en: "Please call the police", zh: "请报警", py: "qǐng bào jǐng" },
        { en: "I have lost my passport", zh: "我的护照不见了", py: "wǒ de hù zhào bú jiàn le" },
        { en: "My family is waiting over there", zh: "我的家人在那边等", py: "wǒ de jiā rén zài nà biān děng" }
      ] }
  ],

  /* Traditional characters — what a Taiwanese driver actually reads */
  taxi: [
    { day: 1, tw: "請到林口區民族路81號，喜馬拉雅珈琲", say: "To Himalaya Cafe, No. 81 Minzu Rd, Linkou" },
    { day: 1, tw: "寧夏夜市", say: "Ningxia Night Market, Datong District" },
    { day: 2, tw: "貓空纜車動物園站", say: "Maokong Gondola — Taipei Zoo station" },
    { day: 2, tw: "饒河街觀光夜市", say: "Raohe Street Night Market, Songshan" },
    { day: 6, tw: "石碇許家手工麵線（烏塗里四分子3號）", say: "Hsu's handmade noodles, Shiding" },
    { day: 6, tw: "西門紅樓", say: "The Red House, Ximending" },
    { day: 6, tw: "西門町", say: "Ximending, Wanhua District" },
    { day: 6, tw: "艋舺龍山寺", say: "Longshan Temple, Wanhua District" },
    { day: 3, tw: "蘭陽動植物王國 壯圍鄉紅葉路62-13號", say: "Lanyang Flora & Fauna Kingdom, Zhuangwei" },
    { day: 3, tw: "大嵌城甕缸雞 壯圍鄉新南路102-6號", say: "Da Qancheng jar chicken, Zhuangwei" },
    { day: 3, tw: "壯圍海之味 壯圍鄉中央路二段288號", say: "Hai Zhi Wei seafood, Zhuangwei" },
    { day: 3, tw: "清水地熱公園 大同鄉三星路八段501巷150號", say: "Qingshui Geothermal Park, Datong" },
    { day: 4, tw: "十分老街", say: "Shifen Old Street, Pingxi District" },
    { day: 4, tw: "九份老街", say: "Jiufen Old Street, Ruifang District" },
    { day: 5, tw: "小烏來天空步道", say: "Xiao Wulai Skywalk, Fuxing, Taoyuan" },
    { day: 5, tw: "大溪老街", say: "Daxi Old Street, Taoyuan" },
    { day: 7, tw: "迪化街 · 永樂市場", say: "Dihua Street — Yongle Market end" },
    { day: 7, tw: "桃園國際機場", say: "Taoyuan International Airport" }
  ],

  notes: [
    { group: { en: "EasyCard and the MRT", zh: "悠游卡与捷运" },
      items: [
        { en: "Buy <b>eleven EasyCards at the airport MRT counter</b> on arrival, while everyone's together — the youngest generally rides free on a lap under Taiwan's usual under-115cm rule. Have each person write their name on their card.",
          zh: "抵达时趁大家都在，一次在<b>机场捷运柜台购买十一张悠游卡</b>——依照台湾常见的115公分以下免票规定，最小的孩子通常可以免费坐在大人腿上。请每个人在自己的卡上写上名字。" },
        { en: "The card works on the MRT, buses, the Maokong gondola and in every convenience store. Top up at any station machine or the 7-Eleven counter.",
          zh: "悠游卡可用于捷运、公车、猫空缆车，以及所有超商。可在任一车站的加值机或7-11柜台加值。" },
        { en: "Taipei's MRT is clean, affordable and signposted in English. Eating or drinking on board is fined — even water.",
          zh: "台北捷运干净又便宜，标示也有英文。车上饮食会被罚款，连喝水也一样。" },
        { en: "Priority seats are genuinely respected here — someone will stand for the grandparents, so let them.",
          zh: "这里的博爱座真的会被让座——会有人主动让位给长辈，请让他们让。" }
      ] },

    { group: { en: "Money", zh: "金钱" },
      items: [
        { en: "Carry about <b>NT$2,500 each in small notes</b> — night markets, old streets, lanterns and the Yilan jar-chicken lunch are cash only. That is about <b>S$100 per person</b> to change in Singapore before you fly. See the budget page.",
          zh: "建议每人带约<b>NT$2,500小钞</b>——夜市、老街、天灯和宜兰甕缸鸡只收现金。出发前在新加坡大约换<b>每人 S$100</b>。详见费用页。" },
        { en: "Convenience-store ATMs accept foreign cards and are everywhere — 7-Eleven and FamilyMart sit on nearly every block.",
          zh: "超商ATM可刷外国卡，而且随处可见——7-11和全家几乎每个街区都有。" },
        { en: "Tipping isn't expected anywhere. Some restaurants add a 10% service charge, and that's all.",
          zh: "台湾没有给小费的习惯，部分餐厅会加收一成服务费，仅此而已。" },
        { en: "Spend any leftover coins before the airport — they can't be converted back.",
          zh: "记得在到机场前把硬币花掉——它们换不回现金。" }
      ] },

    { group: { en: "Health, heat and the group", zh: "健康、暑气与团体" },
      items: [
        { en: "September runs 30–34°C and humid. The scheduled afternoon rests aren't optional for the over-sixties — treat them as fixed.",
          zh: "九月气温约30至34°C且潮湿。行程中的下午休息对长辈来说不是可有可无的选项——请当作固定安排。" },
        { en: "Pack motion-sickness tablets for Days 4, 5 and 6 — Jiufen, Xiao Wulai and Shiding are winding roads. Day 3 is a highway tunnel; tablets still help anyone who hates enclosed space.",
          zh: "第4、5、6天请带上晕车药——九份、小乌来、石碇都是山路。第3天是高速公路隧道；怕密闭的人还是带。" },
        { en: "Convenience stores stock cold drinks, umbrellas and basic medicine around the clock.",
          zh: "超商全天候都有冷饮、雨伞和常备药品。" },
        { en: "Share all eleven phone numbers in one group chat before Day 6, when people may split in Ximending.",
          zh: "第6天在西门町分头前，先把十一个人的电话号码都加进同一个群组。" }
      ] },

    { group: { en: "Emergency numbers", zh: "紧急电话" },
      items: [
        { en: "<b>110</b> — police. <b>119</b> — fire and ambulance.",
          zh: "<b>110</b> 报警。<b>119</b> 消防与救护车。" },
        { en: "<b>0800-011-765</b> is the 24-hour tourist information hotline, with English-speaking staff.",
          zh: "<b>0800-011-765</b> 为24小时旅游服务热线，提供英语服务。" },
        { en: "Keep a photo of everyone's passport page on your phone, and note down your own embassy's number before you fly.",
          zh: "把每个人的护照资料页拍照存进手机，出发前也记下自己国家代表处的电话。" },
        { en: "Install the CWA weather app and check it daily during the trip — see the weather page for the full plan.",
          zh: "出发前安装中央气象署App，旅程中每天查看——详细备案请见天气页面。" }
      ] }
  ]
};
