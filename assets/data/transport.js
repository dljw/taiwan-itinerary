/* ============================================================
   transport.js — how the family of twelve moves around Taiwan.

   Fares and times below were checked against operator sites in
   August 2026. Treat them as estimates, not guarantees —
   timetables change, and the station board always wins.

   `charter.operators` is the enquiry list for every mid-bus this week.
   To add one, copy an object and edit it.
   ============================================================ */
window.TRIP = window.TRIP || {};

window.TRIP.transport = {

  intro: {
    en: "Twelve people need a 中巴 on the days a nine-seat van is illegal and public transport turns into a logistics puzzle. This week that is six bookings with one Taipei operator if you can: two airport transfers, one half-day, and three full days. Sunday is still the gondola and the MRT. City hops stay on EasyCard and short taxis.",
    zh: "十二个人，九人座不合法，大众运输又会变成后勤题的日子，就包中巴。这周能同一家台北业者最好：两段机场接送、一段半天、三段全日。周日仍是缆车和捷运。市区短程靠悠游卡和计程车。"
  },

  headline: {
    title: { en: "Buy the hours you will use", zh: "只买用得到的钟点" },
    body: {
      en: "Getting around for the week comes to roughly <b>NT$45,000–55,000 for the group</b>, or about NT$4,000 a head — the mid-buses are the bulk of it. Book them as blocks, not a 10-hour clock every time: Day 1 is an airport transfer with two Linkou stops, Day 6 is a 4–5 hour half-day, Day 7 is a point-to-point send-off. Days 3–5 are the real full days.<br><br>Two honest notes: <b>Golden Waterfall is back on Day 4</b> — a two-minute roadside stop the bus can make on the way to Jiufen — and <b>Day 4 is no longer the walking day</b>. The driver drops you at the waterfall gate.",
      zh: "全周交通约<b>NT$45,000–55,000</b>，每人约NT$4,000，大宗是中巴。请按钟点块来订，不要每天都开10小时：第1天是机场接机加林口两站，第6天是4至5小时半天，第7天是点对点送机。真正的全日是第3至5天。<br><br>两个老实提醒：<b>黄金瀑布回到第4天</b>——上九份路上两分钟的路边停——以及<b>第4天不再是走最多的一天</b>。司机把人放到瀑布门口。"
    }
  },

  /* The cards, tickets and passes you will actually be holding. */
  modes: [
    { name: { en: "EasyCard", zh: "悠游卡" }, tw: "悠遊卡",
      cost: { en: "NT$100 card + top-ups", zh: "卡片NT$100＋储值" },
      what: { en: "The one thing everybody needs. Taps through the MRT, all city buses, the Taiwan Railway local trains, the Airport MRT, convenience stores and most of the shuttles. <b>Buy one each at the airport MRT counter on Day 1</b> while you're still in one group, and write names on them in marker — the youngest rides free on a lap and doesn't need one.",
              zh: "每个人都必须有的东西。捷运、市区公车、台铁区间车、机场捷运、超商和多数接驳车都能刷。<b>第1天趁大家还聚在一起，在机场捷运柜台一次买齐</b>，并用签字笔写上名字——年纪最小的抱着搭乘不必买卡。" },
      note: { en: "You will still use it on Day 2 for the Brown Line and the gondola gate, and on Day 6 from Ximen toward Zhongshan. Top up to <b>NT$300</b> before Sunday.",
              zh: "第2天文湖线和缆车闸口、第6天从西门去中山都还要用。周日之前加值到<b>NT$300</b>。" } },

    { name: { en: "Chartered mid-bus (中巴)", zh: "包中巴" }, tw: "中巴（19–20人座）",
      cost: { en: "Per vehicle, in hour blocks", zh: "以车计费，按钟点块" },
      what: { en: "The workhorse of this trip. A 19–20 seater, never a nine-seat van. <b>Day 1</b> airport + Linkou, release at the hotel. <b>Day 3</b> Yilan, 10 hours. <b>Day 4</b> Shifen, Golden Waterfall and Jiufen — ask for the published package, not a generic clock. <b>Day 5</b> Xiao Wulai and Daxi, 8–10 hours. <b>Day 6</b> Shiding half-day, 4–5 hours. <b>Day 7</b> hotel to the airport, point-to-point.",
              zh: "这趟行程的主力。19至20人座，绝不是九人座。<b>第1天</b>机场加林口，饭店解散。<b>第3天</b>宜兰，10小时。<b>第4天</b>十分、黄金瀑布、九份——请问套装价，不要开通用钟点。<b>第5天</b>小乌来加大溪，8至10小时。<b>第6天</b>石碇半天，4至5小时。<b>第7天</b>饭店到机场，点对点。" },
      note: { en: "Operators sell 4–5 hour and 8–10 hour blocks, then overtime. A naive NT$13,000 ÷ 10 is not a rate you can buy for three hours. Same Taipei operator for all six if they will do it.",
              zh: "业者卖的是4至5小时和8至10小时，再算超时。NT$13,000除以10，不是你能买三小时的单价。六段能同一家最好。" } },

    { name: { en: "Taxis", zh: "计程车" }, tw: "計程車",
      cost: { en: "NT$85 flagfall in Taipei", zh: "台北起跳NT$85" },
      what: { en: "Used for the last mile in the city — Zhongshan to Ningxia on Saturday night, and the hotel to Dihua Street on Friday morning. <b>Not</b> for Shiding, Xiao Wulai or Jiufen. Twelve of you is three cars, four to a car.",
              zh: "只用在市区最后一哩——周六晚上中山到宁夏，周五早上饭店到迪化街。<b>不要</b>拿来跑石碇、小乌来或九份。十二人正好三台车，一台四人。" },
      note: { en: "In the countryside you will not flag a taxi down. That is why those days are on the 中巴.",
              zh: "乡下招不到车。所以那些日子才包中巴。" } }
  ],

  /* Per-day transport plan. */
  days: [
    { n: 1, date: { en: "Sat 5 Sep", zh: "9月5日 周六" }, mode: { en: "Airport transfer + 2 stops", zh: "接机＋两站" },
      fare: { en: "≈ NT$500–700 pp", zh: "每人约NT$500–700" }, charter: true,
      route: { en: "Taoyuan Airport → Linkou (breakfast, then the family visit at Himalaya Cafe, 民族路81號) → hotel ~11:40. Driver released.", zh: "桃园机场 → 林口（早餐，接着到民族路81号喜马拉雅珈琲家族拜访）→ 饭店约11:40。司机解散。" },
      note: { en: "<b>A morning block, not a 10-hour day.</b> Book it as an airport transfer with two Linkou stops. Flight tracking, luggage stays aboard, release at the hotel. Target about NT$6,000–8,000, not NT$13,000.",
              zh: "<b>上午那一块，不是10小时全日。</b>请订成接机加林口两站。追踪班机、行李留车上，饭店解散。目标约NT$6,000–8,000，不是NT$13,000。" } },

    { n: 2, date: { en: "Sun 6 Sep", zh: "9月6日 周日" }, mode: { en: "MRT + gondola", zh: "捷运＋缆车" },
      fare: { en: "≈ NT$400 pp", zh: "每人约NT$400" },
      route: { en: "Hotel → Taipei Zoo by MRT → Maokong Gondola → Raohe by MRT", zh: "饭店 → 捷运到动物园 → 猫空缆车 → 捷运到饶河" },
      note: { en: "The easiest transport day of the week — MRT the whole way, gondola in the middle.", zh: "全周最轻松的交通日——全程捷运，中间加一段缆车。" } },

    { n: 3, date: { en: "Mon 7 Sep", zh: "9月7日 周一" }, mode: { en: "Taipei mid-bus", zh: "台北中巴" },
      fare: { en: "bus share ≈ NT$800–1,200 pp", zh: "中巴分摊约NT$800–1,200" }, charter: true,
      route: { en: "Hotel 08:30 → Zhang Mei Ama, Sanxing → lunch → Qingshui Geothermal Park until ~16:00 → hotel ~18:15", zh: "饭店08:30 → 三星张美阿嬷 → 午餐 → 清水地热公园至约16:00 → 饭店约18:15" },
      note: { en: "<b>Do not split this across Kamalan and taxis</b> — Sanxing, lunch and Qingshui sit in neighbouring townships, and the last lane at Qingshui may not take a 中巴. Book a Taipei 中巴 that waits; if 501巷 is too narrow, wait at 長埤湖. Same operator as the other mid-bus days. A named typhoon cancels the tunnel; stay in Taipei.",
              zh: "<b>不要拆成葛玛兰加计程车</b>——三星、午餐和清水不在同一个镇，清水最后那段路中巴还可能进不去。请订会等候的台北中巴；501巷太窄就停長埤湖。可与其他中巴同一家。有命名的台风就取消隧道；留台北。" } },

    { n: 4, date: { en: "Tue 8 Sep", zh: "9月8日 周二" }, mode: { en: "Jiufen–Shifen package", zh: "九份十分套装" },
      fare: { en: "bus share ≈ NT$750–900 pp", zh: "中巴分摊约NT$750–900" }, charter: true,
      route: { en: "Hotel 09:15 → Shifen Waterfall gate → old street and lanterns → Golden Waterfall → Jiufen dusk → hotel ~21:00", zh: "饭店09:15 → 十分瀑布门口 → 老街与天灯 → 黄金瀑布 → 黄昏九份 → 饭店约21:00" },
      note: { en: "<b>Ask for the published Jiufen + Shifen + Golden Waterfall package</b>, around NT$8,500–10,000, not a generic 10-hour clock. The day runs past ten hours if you linger in Jiufen, so confirm overtime. The driver drops you at the waterfall gate — no 25-minute walk.",
              zh: "<b>请问九份＋十分＋黄金瀑布的套装价</b>，约NT$8,500–10,000，不要开通用10小时。九份多待就会超过十小时，请确认超时。司机停瀑布门口——不必走25分钟。" } },

    { n: 5, date: { en: "Wed 9 Sep", zh: "9月9日 周三" }, mode: { en: "Taipei mid-bus", zh: "台北中巴" },
      fare: { en: "bus share ≈ NT$750–1,100 pp", zh: "中巴分摊约NT$750–1,100" }, charter: true,
      route: { en: "Hotel 08:00 → Xiao Wulai skywalk → Daxi Old Street → hotel ~17:15", zh: "饭店08:00 → 小乌来天空步道 → 大溪老街 → 饭店约17:15" },
      note: { en: "<b>The cost-optimal extra day.</b> Public was already about NT$9,600 for the group — HSR, a tourist shuttle, and six mountain taxi seats — and weekdays have no Xiao Wulai bus. An 8–10 hour 中巴 is about the same money. Ask for Fuxing 小乌来, not 乌来. The skywalk is closed Tuesdays; Wednesday is the open day.",
              zh: "<b>最划算的加开日。</b>大众运输全团已约NT$9,600——高铁、台湾好行、六段山路计程车——而且平日没有小乌来公车。8至10小时中巴差不多同一个价。请订复兴<b>小乌来</b>，不是乌来。天空步道周二公休；周三才开门。" } },

    { n: 6, date: { en: "Thu 10 Sep", zh: "9月10日 周四" }, mode: { en: "Mid-bus, then MRT", zh: "中巴，再捷运" },
      fare: { en: "≈ NT$600–800 pp incl. bus share", zh: "每人约NT$600–800（含中巴分摊）" }, charter: true,
      route: { en: "Hotel 08:15 → Hsu's in Shiding → drop at Ximending ~12:15 → MRT to Zhongshan for 18:30 hotpot", zh: "饭店08:15 → 石碇许家 → 约12:15西门町下车 → 捷运去中山 18:30 火锅" },
      note: { en: "<b>A 4–5 hour half-day, not a 10-hour clock, and not three taxis.</b> The driver waits through the noodle session and drops you in Ximending. Afternoon is MRT. Be on a train toward Zhongshan by 17:00 — hotpot is 18:30.",
              zh: "<b>4至5小时半天，不是10小时，也不是三台计程车。</b>司机在麵线时段等候，人在西门町下。下午捷运。17:00前要往中山——火锅18:30。" } },

    { n: 7, date: { en: "Fri 11 Sep", zh: "9月11日 周五" }, mode: { en: "MRT, then airport mid-bus", zh: "捷运，再中巴送机" },
      fare: { en: "bus share ≈ NT$350–500 pp", zh: "中巴分摊约NT$350–500" }, charter: true,
      route: { en: "Taxi or MRT to Dihua Street · hotel 14:45 mid-bus to Taoyuan Airport", zh: "计程车或捷运到迪化街 · 饭店14:45中巴到桃园机场" },
      note: { en: "<b>Point-to-point, not hourly.</b> Bundle with the Day 1 operator. Twelve people and a week of luggage will not fit a van, and will not enjoy the Airport MRT escalator.",
              zh: "<b>点对点，不是计时。</b>跟第1天同一家。十二人和一周行李塞不进九人座，也不适合挤机捷电扶梯。" } }
  ],

  /* Day 1 only. */
  charter: {
    title: { en: "The six bookings — one operator if they will do it", zh: "六段订车 —— 能同一家最好" },
    body: {
      en: "All of them a 中巴 (19–20 seat), none of them a nine-seat van. <b>Day 1</b> is an airport transfer with two Linkou stops, released at the hotel ~11:40. <b>Day 3</b> is the 10-hour Yilan day. <b>Day 4</b> is the Jiufen + Shifen + Golden Waterfall package. <b>Day 5</b> is Xiao Wulai and Daxi, 8–10 hours — ask for 小乌来 in Fuxing, not 乌来. <b>Day 6</b> is a 4–5 hour half-day to Hsu's, drop at Ximending. <b>Day 7</b> is hotel 14:45 to Taoyuan Airport. Operators below are the enquiry list — paste Day 1 first, then the extras.",
      zh: "都是19至20人座中巴，都不是九人座。<b>第1天</b>接机加林口两站，约11:40饭店解散。<b>第3天</b>宜兰10小时。<b>第4天</b>九份＋十分＋黄金瀑布套装。<b>第5天</b>小乌来加大溪，8至10小时——请订复兴小乌来，不是乌来。<b>第6天</b>许家4至5小时半天，西门町下车。<b>第7天</b>饭店14:45到桃园机场。下面是询价名单——先贴第1天，其余接在后面。"
    },
    operators: [
      {
        name: { en: "Han Sheng / e7togo", zh: "汉声租车旅游 / 带路包车" }, tw: "漢聲租車旅遊集團／帶路包車",
        url: "https://www.hs-car.com/", phone: "03-492-3025", line: "@e7go",
        fleet: { en: "20-seat Mitsubishi Rosa with a separate rear luggage compartment.", zh: "20人座三菱Rosa，后方独立行李厢。" },
        price: { en: "Quote only — the site uses a live calculator.", zh: "需询价——网站用线上试算。" },
        terms: { en: "<b>Tracks your flight and waits up to 120 minutes free.</b> No night or holiday surcharge. Full refund if cancelled before the day of travel.", zh: "<b>会追踪班机，免费等候最多120分钟。</b>无夜间与假日加价。出发日前取消全额退款。" },
        fit: "yes",
        verdict: { en: "<b>Ask this one first.</b> For a 06:55 arrival with twelve people clearing immigration, active flight tracking and a two-hour free wait are exactly the things worth paying for.", zh: "<b>先问这家。</b>十二个人清晨6:55落地过海关，「主动追踪班机＋免费等两小时」正是这种时候最值钱的服务。" }
      },
      {
        name: { en: "Chieh Car Fleet", zh: "小杰chieh车队" }, tw: "小傑chieh車隊（捷笙汽車租賃股份有限公司）",
        url: "https://airport0963910710.com/", phone: "+886 963 910 710", line: "@a0963910710",
        fleet: { en: "21-seat mid-bus, or a 26-seat with ~20–24 usable seats. 8–10 pieces of luggage.", zh: "21人座中巴，或26人座（实际可坐20–24人）。行李8–10件。" },
        price: { en: "<b>NT$11,000 per 10-hour day</b> across greater Taipei, Taoyuan and Keelung — which covers this route exactly.", zh: "<b>10小时一日NT$11,000</b>，涵盖大台北、桃园、基隆——正好是这条路线。" },
        terms: { en: "Fuel, tolls and parking included; driver's meal excluded. Overtime NT$1,000/hr. Registered rental company with its licence number on the site.", zh: "含油资、过路费、停车费；不含司机餐费。超时每小时NT$1,000。网站上有租赁公司登记字号。" },
        fit: "yes",
        verdict: { en: "The only operator whose <b>published</b> day rate maps directly onto this route, so it is the number to hold everyone else's quote against.", zh: "唯一<b>公开报价</b>直接对得上这条路线的业者，可以拿它当基准去比其他家的价。" }
      },
      {
        name: { en: "Chao Shun Transportation", zh: "超顺通运有限公司" }, tw: "超順通運有限公司",
        url: "https://www.yourun9488.com/", phone: "02-2693-1767 / +886 922 575 576", email: "yourun9488@gmail.com",
        fleet: { en: "20-seat mid-bus in two grades — a standard Toyota and a more comfortable Hino.", zh: "20人座中巴，分两级——Toyota标准车与Hino豪华车。" },
        price: { en: "<b>From NT$8,000 for a 10-hour day</b> (Toyota), NT$9,000 (Hino).", zh: "<b>10小时一日Toyota由NT$8,000起</b>，Hino由NT$9,000起。" },
        terms: { en: "Passenger insurance NT$2M included. Tolls and parking at cost. Driver's meal NT$200. Overtime NT$800–900/hr.", zh: "含乘客险200万。过路费停车费实报实销。司机餐费NT$200。超时每小时NT$800–900。" },
        fit: "yes",
        verdict: { en: "<b>The cheapest published mid-bus rate found.</b> Worth a call for all six bookings — ask for a half-day on Days 1 and 6, a point-to-point on Day 7, and a Jiufen–Shifen package on Day 4.", zh: "<b>查到最便宜的中巴公开价。</b>六段都值得问——第1、6天报半天，第7天点对点，第4天问九份十分套装。" }
      }
    ],
    enquiryNote: { en: "Six enquiries, same Traditional characters. Paste Day 1 first; the rest sit underneath.",
                   zh: "六封询价，都用繁体。先贴第1天，其余接在下面。" },
    enquiryTw: "您好，想詢問 2026年9月5日（六）接機加兩站的中巴報價——請報半天／接機價，不要開 10 小時全日。\n\n我們共 12 位（9 位大人、3 位小孩，分別 13 歲、11 歲和 3 歲），加上約 12 件行李。\n\n因為人數較多，九人座無法合法乘載，請問貴公司是否有 20 人左右的中巴？\n\n行程：\n07:30 桃園機場接機（班機 06:55 抵達，航班號另告）\n→ 林口區（早餐停留約 45 分鐘，行李留車上）\n→ 林口區民族路81號（家族拜訪，停留約 1.5 小時，行李留車上）\n→ 台北市中正區飯店，約 11:40 抵達，司機解散\n\n想請教：\n1. 車型與實際可乘座位數、行李廂容量\n2. 報價，以及含幾小時（這段約 4 小時）\n3. 超時如何計費\n4. 過路費、停車費、司機餐費是否已包含\n5. 班機延誤時的等候規定\n6. 訂金金額與付款方式\n7. 以下另外五段能否一起訂\n\n麻煩您了，謝謝！",
    enquiryEn: "Hello, I would like a quote for an airport transfer with two stops on Saturday 5 September 2026 — please quote a half-day / transfer rate, not a 10-hour day.\n\nWe are a party of 12 — 9 adults and 3 children aged 13, 11 and 3 — with about 12 suitcases.\n\nWith a group this size, a 9-seat van cannot legally carry us. Do you have a 20-seat mid-size bus available?\n\nThe route:\n07:30 pickup at Taoyuan Airport (flight lands 06:55, number to follow)\n→ Linkou District (breakfast stop, about 45 minutes, luggage stays aboard)\n→ No. 81 Minzu Road, Linkou District (family visit, about 1.5 hours, luggage stays aboard)\n→ our hotel in Zhongzheng District, Taipei, arriving about 11:40. Driver released.\n\nPlease could you confirm:\n1. Vehicle type, actual passenger capacity and luggage space\n2. The price, and how many hours it covers (this block is about 4 hours)\n3. How overtime is charged\n4. Whether tolls, parking and the driver's meal are included\n5. Your waiting policy if the flight is delayed\n6. Deposit amount and payment method\n7. Whether the five extra days below can be booked together\n\nThank you.",
    more: [
      { title: { en: "Day 3 — Taipei to Yilan and back", zh: "第3天 —— 台北往返宜兰" },
        enquiryTw: "另外想詢問 2026年9月7日（一）台北往返宜蘭的中巴。\n\n同樣 12 位（9 大人、小孩 13／11／3 歲），無大件行李。\n\n08:30 台北市中正區飯店出發\n→ 宜蘭縣三星鄉張美阿嬤農場（行健溪一路二段161號，不是萬富七路的樹懶餐廳），約 10:00 抵達，停留至約 11:50，司機等候\n→ 三星鄉午餐（田媽媽蔥蒜美食館，中山路31號），停留至約 13:30\n→ 大同鄉清水地熱公園（三星路八段501巷150號），停留至約 16:00。請問貴公司中巴能否進入 501 巷？若不能，請停長埤湖停車場等候\n→ 送回台北市中正區飯店，約 18:15\n\n司機全程等候。請報 10 小時全日價、超時與過路費如何計，以及是否可與 9月5日那台車一起訂。謝謝！",
        enquiryEn: "We would also like a mid-bus on Monday 7 September 2026 from Taipei to Yilan and back.\n\nSame party of 12, no large luggage.\n\n08:30 hotel in Zhongzheng, Taipei\n→ Zhang Mei Ama's Farm, No. 161 Sec. 2 Xingjianxi 1st Rd, Sanxing (not the sloth restaurant on Wanfu 7th Rd) — arrive ~10:00, stay until ~11:50, driver waits\n→ lunch in Sanxing (Tian Mama, No. 31 Zhongshan Rd) until ~13:30\n→ Qingshui Geothermal Park, No. 150 Ln. 501 Sec. 8 Sanxing Rd, Datong, until ~16:00. Can your mid-bus enter Lane 501? If not, please wait at Changpi Lake car park\n→ return to the Zhongzheng hotel ~18:15\n\nDriver waits throughout. Please quote a 10-hour day, overtime and tolls, and whether this can be booked with the 5 September vehicle. Thank you." },
      { title: { en: "Day 4 — Shifen, Golden Waterfall, Jiufen", zh: "第4天 —— 十分、黄金瀑布、九份" },
        enquiryTw: "另外想詢問 2026年9月8日（二）九份＋十分＋黃金瀑布套裝中巴。\n\n同樣 12 位，無大件行李。\n\n09:15 台北市中正區飯店出發\n→ 十分瀑布門口下車（不要停車站），停留至約 11:45\n→ 十分老街，停留至約 17:00（含放天燈）\n→ 黃金瀑布，停留約 10 分鐘\n→ 九份老街，約 17:40 抵達，停留至約 19:45\n→ 送回台北市中正區飯店，約 21:00\n\n請報套裝價，不要開通用 10 小時。若超過 10 小時，超時怎麼算？是否可與 9月5日那台車一起訂。謝謝！",
        enquiryEn: "We would also like a Jiufen + Shifen + Golden Waterfall package mid-bus on Tuesday 8 September 2026.\n\nSame party of 12, no large luggage.\n\n09:15 hotel in Zhongzheng, Taipei\n→ drop at the Shifen Waterfall gate (not the station) until ~11:45\n→ Shifen Old Street until ~17:00, including a lantern release\n→ Golden Waterfall, about 10 minutes\n→ Jiufen Old Street ~17:40 until ~19:45\n→ return to the Zhongzheng hotel ~21:00\n\nPlease quote the published package, not a generic 10-hour clock. How is overtime charged if we run past 10 hours? Can this be booked with the 5 September vehicle? Thank you." },
      { title: { en: "Day 5 — Xiao Wulai and Daxi", zh: "第5天 —— 小乌来加大溪" },
        enquiryTw: "另外想詢問 2026年9月9日（三）8–10 小時中巴。\n\n同樣 12 位，無大件行李。\n\n08:00 台北市中正區飯店出發\n→ 桃園市復興區小烏來天空步道（不是新北烏來），約 09:30 抵達，停留至約 11:30，司機等候\n→ 大溪老街／和平路，停留至約 16:00\n→ 送回台北市中正區飯店，約 17:15\n\n請報 8 或 10 小時價，確認是復興小烏來，以及是否可與 9月5日那台車一起訂。謝謝！",
        enquiryEn: "We would also like an 8–10 hour mid-bus on Wednesday 9 September 2026.\n\nSame party of 12, no large luggage.\n\n08:00 hotel in Zhongzheng, Taipei\n→ Xiao Wulai Skywalk, Fuxing, Taoyuan (not Wulai in New Taipei) — arrive ~09:30, stay until ~11:30, driver waits\n→ Daxi Old Street / Heping Road until ~16:00\n→ return to the Zhongzheng hotel ~17:15\n\nPlease quote an 8- or 10-hour rate, confirm this is Xiao Wulai in Fuxing, and whether this can be booked with the 5 September vehicle. Thank you." },
      { title: { en: "Day 6 — Shiding half-day", zh: "第6天 —— 石碇半天" },
        enquiryTw: "另外想詢問 2026年9月10日（四）4–5 小時半天中巴。\n\n同樣 12 位，無大件行李。\n\n08:15 台北市中正區飯店出發\n→ 石碇許家手工麵線（烏塗里四分子3號），約 09:20 抵達，停留至 11:30，司機等候\n→ 西門町／西門紅樓下車，約 12:15\n\n請報半日價，不要開 10 小時。等候是否已含，以及是否可與 9月5日那台車一起訂。謝謝！",
        enquiryEn: "We would also like a 4–5 hour half-day mid-bus on Thursday 10 September 2026.\n\nSame party of 12, no large luggage.\n\n08:15 hotel in Zhongzheng, Taipei\n→ Hsu's handmade noodles, No. 3 Sifenzi, Wutu, Shiding — arrive ~09:20, stay until 11:30, driver waits\n→ drop at Ximending / the Red House ~12:15\n\nPlease quote a half-day rate, not a 10-hour day. Confirm waiting is included, and whether this can be booked with the 5 September vehicle. Thank you." },
      { title: { en: "Day 7 — hotel to airport", zh: "第7天 —— 饭店送机" },
        enquiryTw: "另外想詢問 2026年9月11日（五）點對點送機。\n\n同樣 12 位，約 12 件行李。\n\n14:45 台北市中正區飯店出發\n→ 桃園國際機場（航廈另告），約 15:45 抵達\n\n請報點對點送機價，不要開鐘點。是否可與 9月5日接機一起訂。謝謝！",
        enquiryEn: "We would also like a point-to-point airport transfer on Friday 11 September 2026.\n\nSame party of 12, about 12 suitcases.\n\n14:45 hotel in Zhongzheng, Taipei\n→ Taoyuan International Airport (terminal to follow), arriving about 15:45\n\nPlease quote a point-to-point send-off, not an hourly charter, and whether this can be booked with the 5 September pickup. Thank you." }
    ]
  },

  /* Still relevant, because Day 1 is still a vehicle booking. */
  capacity: [
    { cls: { en: "9-seat van (Hiace, Caravelle, Vito)", zh: "九人座（Hiace、Caravelle、Vito）" },
      seats: "9", pax: "8", plate: { en: "White", zh: "白牌／租赁白牌" },
      note: { en: "The default charter vehicle, and <b>too small for you</b>. Around 6 large suitcases.", zh: "最常见的包车车型，但<b>你们坐不下</b>。行李约6个大箱。" } },
    { cls: { en: "\"10 / 11 / 12-seat van\"", zh: "所谓「十／十一／十二人座」" },
      seats: "—", pax: "—", plate: { en: "—", zh: "—" },
      note: { en: "<b>Does not exist legally.</b> An illegally modified 9-seater. Insurance void. Refuse it.", zh: "<b>法律上不存在。</b>违法改装的九人座，保险失效。请拒绝。" } },
    { cls: { en: "中巴 mid-size bus (19–20 seat)", zh: "中巴（19–20人座）" },
      seats: "19–20", pax: "~18", plate: { en: "Red (遊覽車)", zh: "红牌（游览车）" },
      note: { en: "<b>What every mid-bus day needs.</b> Separate luggage compartment on Days 1 and 7, professional bus licence, room to spread out.", zh: "<b>每个中巴日都要这个。</b>第1、7天要独立行李厢、职业大客车驾照、坐得开。" } }
  ],

  tips: [
    { en: "<b>Buy the block, not a 10-hour clock every time.</b> Day 1 is a transfer, Day 6 is a half-day, Day 7 is point-to-point. Days 3–5 are the full days. Ask for a Jiufen–Shifen package on Day 4, not a generic hourly rate.",
      zh: "<b>买钟点块，不要每天开10小时。</b>第1天是接机，第6天是半天，第7天是点对点。全日是第3至5天。第4天请问九份十分套装，不要开通用钟点。" },
    { en: "<b>Tell the driver 小乌来, not 乌来.</b> They are different towns. Day 5 is Fuxing, Taoyuan.",
      zh: "<b>跟司机说小乌来，不要说乌来。</b>那是两个地方。第5天是桃园复兴。" },
    { en: "<b>Agree the taxi split before you need it.</b> Twelve of you is three cars, four each — Ningxia on Saturday, Dihua on Friday. Decide who rides with whom once, on Day 1.",
      zh: "<b>叫车前先分好组。</b>十二个人正好三台车，一台四人——周六宁夏、周五迪化。第1天就把谁跟谁一台讲定。" },
    { en: "<b>On a mid-bus day, the group moves as one.</b> If someone wants to peel off, they do it after the drop — Ximending on Thursday, the hotel on the other days.",
      zh: "<b>中巴那天全团一起走。</b>有人要先撤，等下车再分——周四西门町，其余天回饭店。" },
    { en: "<b>Keep about NT$3,000 in cash per family group.</b> Old streets, night markets and lanterns are still cash. The EasyCard covers Day 2 and the Thursday afternoon MRT.",
      zh: "<b>每个小家庭身上带约NT$3,000现金。</b>老街、夜市和天灯仍收现金。悠游卡够付第2天和周四下午的捷运。" }
  ],

  money: {
    title: { en: "What transport costs for the week", zh: "全周的交通花费" },
    body: { en: "Roughly <b>NT$4,000 per person for the week</b>, or about NT$45,000–55,000 for the group, depending on the quotes. The <b>six mid-bus bookings</b> dominate it. Day 2 and the Thursday afternoon are EasyCard; Ningxia and Dihua are short taxis.<br><br>The budget page counts food and activities plus the fares that sit in each day's timeline; the mid-buses sit outside that table, charged per vehicle.",
            zh: "全周<b>每人约NT$4,000</b>，全团约NT$45,000–55,000，看报价。大宗是<b>六段中巴</b>。第2天和周四下午是悠游卡；宁夏和迪化是短程计程车。<br><br>费用页计吃、玩，以及写在每日行程里的车资；中巴以车计费，不在那张表里。" }
  },

  verify: {
    title: { en: "Quotes are estimates — confirm the block and the overtime", zh: "报价仅供参考——请确认钟点块和超时" },
    body: { en: "Published 中巴 lists in August 2026 ran from about NT$8,000 for a 10-hour day to NT$13,000. Half-days sit around NT$7,500–8,000. Jiufen–Shifen 21-seat packages sit around NT$8,500–9,000. Before you book, confirm: whether they have a <b>20-seat</b>, the <b>hours in each block</b>, overtime after 10 hours on Day 4, whether a 中巴 can enter Qingshui’s <b>501巷</b>, and whether the <b>Xiao Wulai skywalk</b> still needs an online slot. Ask for Fuxing 小乌来, not 乌来.",
            zh: "2026年8月查到的中巴公开价，10小时大约NT$8,000到NT$13,000。半天约NT$7,500–8,000。九份十分21人座套装约NT$8,500–9,000。下订前请确认：有没有<b>20人座</b>、每段<b>含几小时</b>、第4天超过10小时怎么算超时、中巴进不进得了清水<b>501巷</b>，以及<b>小乌来天空步道</b>是否仍需上网预约。请订复兴小乌来，不是乌来。" }
  }
};
