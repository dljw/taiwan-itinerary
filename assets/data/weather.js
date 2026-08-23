/* ============================================================
   weather.js — the typhoon and rain contingency plan for the trip.
   ============================================================ */
window.TRIP = window.TRIP || {};

window.TRIP.weather = {

  lede: {
    en: "September sits at the tail end of Taipei's typhoon season — the wettest month of the year, tied with August for the highest storm risk. Even so, most trips sail through with barely a hiccup, and few cities handle weather with as much grace as Taipei. This itinerary is already built with that in mind: outdoor mornings while the day is cool, indoor afternoons, and Thursday still absorbing a washed-out lantern morning — skip Hsu's, keep the 18:30 hotpot.",
    zh: "九月正值台北台风季的尾声——全年雨量最多的月份，风险与八月并列最高。即便如此，多数旅程其实一路顺畅、几乎不受影响，而台北应对天气的从容程度，少有城市能及。本行程从一开始就把这点考虑进去：上午安排户外活动、趁天气凉爽出门，下午转室内；周四仍可吸收被雨打掉的天灯上午——许家跳过，18:30火锅留下。",
  },

  kinds: [
    { title: { en: "A typhoon day", zh: "台风天（停班停课）" },
      what: { en: "On these days the MRT may pause, the city calls a work-and-school suspension (停班停課), and it truly isn't a day to be outside.",
              zh: "这样的日子里，捷运可能暂停营运，市政府会宣布停班停课，这时真的不适合外出。" },
      action: { en: "Sightseeing waits for another day — stay close to the hotel instead. Your Zhongzheng base is a short walk from Huashan 1914, the Q Square and Taipei Main underground malls, Eslite and a cinema or two, so there's plenty to enjoy without stepping outside for long. These systems tend to pass in a day or two, and normal life resumes fast.",
                zh: "观光先放一放，待在饭店附近就好。中正区的据点走几步就到华山1914、京站与台北车站地下街、诚品和电影院，不必长时间待在户外也能过得很自在。这类天气通常一两天就会过去，很快就能恢复正常。" } },

    { title: { en: "Just heavy rain", zh: "只是大雨" },
      what: { en: "Nothing shuts down and the city carries on as normal — it's just that day's outdoor plan that turns miserable. <b>This is by far the more common scenario</b> — most 'bad weather' on a September trip looks like this, not a full typhoon.",
              zh: "不会停班停课，一切照常运作，只是当天的户外行程会变得很难受。<b>这才是更常见的情况</b>——九月出游遇到的“坏天气”，多半是这一种，而不是真正的台风。" },
      action: { en: "Simply swap that day's outdoor activity for one of the indoor options below — either way, the day is easy to save. Thursday can still absorb lanterns if Tuesday washes out.",
                zh: "把当天的户外活动换成下面清单里的室内选项即可——不管哪种方式，这天都很容易补救回来。若周二被雨打掉，周四仍可承接天灯。" } }
  ],

  swaps: [
    { day: 1, date: { en: "Sat 5 Sep", zh: "9/5 周六" }, level: "LOW",
      risk: { en: "Almost nothing to worry about — breakfast and the family visit are both indoors, and Zhongshan already comes with a shopping-street fallback built in", zh: "几乎没什么好担心的——早餐和家族拜访都在室内，中山本来就自带购物街这个后备选项" },
      swap: { en: "This one barely notices the weather. The mid-bus keeps everyone dry between the airport, breakfast and Linkou, both stops are indoors anyway, and a wet Zhongshan afternoon just means leaning into cafés, Q Square and the shopping streets by the hotel instead of strolling outside.",
              zh: "这天几乎不受天气影响。中巴让大家从机场到早餐店、再到林口全程不淋雨，两站本来就在室内，中山下午若遇雨，就多待咖啡馆、京站和饭店旁的购物街，少走户外路线即可。" } },

    { day: 2, date: { en: "Sun 6 Sep", zh: "9/6 周日" }, level: "HIGH",
      risk: { en: "The gondola pauses in high wind, and the view is really the whole reason for the day", zh: "强风时缆车会暂停，而观景本来就是这天的重头戏" },
      swap: { en: "Trade it for a <b>Taiwanese cooking class</b> instead (indoor, about three hours, and honestly a treat) — and keep Raohe for the evening, since its roofed stalls carry on happily in the rain. Do not move Maokong to Monday — the gondola is closed then.",
              zh: "改成<b>台菜烹饪课</b>（室内，约三小时，其实颇有乐趣），晚上照常去饶河街——摊位有顶棚遮蔽，下雨照常营业。别把猫空改到周一——那天缆车公休。" } },

    { day: 3, date: { en: "Mon 7 Sep", zh: "9/7 周一" }, level: "MED",
      risk: { en: "A highway tunnel, a partly outdoor farm, and an outdoor geothermal park with shelters", zh: "高速公路隧道、半户外农场，再加有遮棚的户外地热公园" },
      swap: { en: "Light rain: still go — the farm has indoor corners, and Qingshui has roofs over the wells and foot pools. <b>If a typhoon is forecast, call off the whole Yilan day</b> and use the indoor list in Taipei. Do not send twelve people south instead. If only Qingshui is out (heat, a closed park), keep the farm and lunch and come home after Sanxing.",
              zh: "小雨：照去——农场有室内角落，清水的井和足汤有顶。<b>预报台风就整天宜兰取消</b>，改用台北室内清单。不要改把十二人送去南部。若只是太热或园区关了，农场和午餐留下，三星之后回家。" } },

    { day: 4, date: { en: "Tue 8 Sep", zh: "9/8 周二" }, level: "HIGH",
      risk: { en: "Sky lanterns simply won't fly in heavy rain", zh: "大雨天天灯飞不起来" },
      swap: { en: "<b>The day most likely to need a reshuffle — and that's perfectly fine.</b> Push the lantern outing to Thursday; skip Hsu's that morning and keep the 18:30 hotpot. Do not steal Wednesday for it — that morning is Xiao Wulai, which is closed on Tuesdays and has nowhere else to go. Failing a Thursday swap, use a museum or the Science Education Center, followed by a covered night market.",
              zh: "<b>这是最可能需要调整的一天——完全没关系。</b>把放天灯挪到周四；那天上午的许家跳过，18:30火锅留下。别占用周三——那天上午是小乌来，周二公休、没有别的日子可去。真的不行，就改成博物馆或科教馆，再加上一个有遮蔽的夜市。" } },

    { day: 5, date: { en: "Wed 9 Sep", zh: "9/9 周三" }, level: "HIGH",
      risk: { en: "A mountain road and a glass skywalk — miserable in a storm", zh: "山路加玻璃步道——风雨天很难受" },
      swap: { en: "Light rain: keep Daxi's arcades, skip the glass. <b>A named typhoon cancels the mountain road</b> — stay in Taipei, indoor list. Do not move Xiao Wulai to Thursday (that morning is Hsu's) and do not move it to Tuesday — the skywalk is closed then. The farewell hotpot stays Thursday regardless.",
              zh: "小雨：留下大溪骑楼，跳过玻璃。<b>有命名的台风就取消山路</b>——留台北走室内清单。别把小乌来改到周四（那天上午是许家），也别改到周二——天空步道那天公休。告别火锅仍在周四。" } },

    { day: 6, date: { en: "Thu 10 Sep", zh: "9/10 周四" }, level: "BUFFER",
      risk: { en: "Hsu's workshop is partly outdoor; the Shiding road is miserable in a storm; hotpot is indoors", zh: "许家工坊有户外；石碇山路遇风雨很难受；火锅在室内" },
      swap: { en: "<b>This is still the swap day behind the lanterns.</b> If Tuesday washes out, skip Hsu's, do lanterns Thursday, and keep the 18:30 hotpot. Xiao Wulai already ran on Wednesday — do not restack it. If Thursday itself is a typhoon, skip Shiding, stay in Ximending indoors, and protect the hotpot.",
              zh: "<b>这仍是天灯后面的备案日。</b>若周二被雨打掉，许家跳过，周四放天灯，18:30火锅留下。小乌来周三已经走完——不要再叠回去。若周四本身是台风，不去石碇，西门町走室内，守住火锅。" } },

    { day: 7, date: { en: "Fri 11 Sep", zh: "9/11 周五" }, level: "LOW",
      risk: { en: "Dihua Street's arcades offer natural cover already", zh: "迪化街本来就有骑楼，天然可遮蔽" },
      swap: { en: "If it's really pouring, swap in the Taipei Main underground mall instead — it's right by the hotel, covered the whole way. The mid-bus still picks you up at 14:45. The flight itself is unaffected unless there's a typhoon; just give it a quick check that morning.",
              zh: "如果真的下大雨，就改逛台北车站地下街——就在饭店旁，全程有顶。中巴仍14:45来接。除非遇上台风，班机本身不受影响；出发当天早上再确认一次即可。" } }
  ],

  indoor: [
    { name: { en: "Taiwanese cooking class", zh: "台菜烹饪课" }, area: { en: "Ximen / Da'an", zh: "西门／大安" },
      why: { en: "<b>The top pick, and genuinely fun for every age.</b> Cookinn (4.9) or CookingFun (5.0) — xiao long bao, beef noodle, boba, pineapple cake, all in one delicious afternoon. About three hours, air-conditioned throughout. Worth reserving ahead.",
             zh: "<b>首选，而且老少咸宜、真的好玩。</b>Cookinn（4.9）或CookingFun（5.0）——小笼包、牛肉面、珍奶、凤梨酥，一个下午通通做齐。约三小时，全程有冷气。建议提前预约。" } },

    { name: { en: "Science Education Center", zh: "科学教育馆" }, area: { en: "Shilin", zh: "士林" },
      why: { en: "Seven floors of interactive exhibits — families happily lose four or five hours in here without noticing. Fully indoors and air-conditioned. Perfect for the 13- and 11-year-olds, with enough room to roam that the 3-year-old will be more than happy too.",
             zh: "七层楼的互动展示，一家人常常一待就是四五个小时也不觉得。全程室内，有冷气。最适合13岁和11岁的孩子，空间也够大，3岁的小朋友一样能玩得开心。" } },

    { name: { en: "Ximending cinema + Red House", zh: "西门町电影院＋红楼" }, area: { en: "Ximending", zh: "西门町" },
      why: { en: "Multiplexes and the Red House's indoor workshops mean zero rain exposure. This is already Thursday afternoon — just lean indoors instead of wandering the streets.",
             zh: "影城和红楼室内的小店铺，完全不必淋雨。这本来就是周四下午——下雨就多往室内走，少逛户外街道。" } },

    { name: { en: "Beitou hot springs + museum", zh: "北投温泉与温泉博物馆" }, area: { en: "Beitou", zh: "北投" },
      why: { en: "The Hot Spring Museum is free, fully indoors, and rain genuinely makes a soak feel even better. <b>Book a private room</b> for a mixed group rather than the public baths.",
             zh: "温泉博物馆免费、全程室内，下雨天泡汤反而更惬意。混合团体建议<b>订私汤包厢</b>，不必使用大众池。" } },

    { name: { en: "Miramar mall + cinema", zh: "美丽华购物中心＋影城" }, area: { en: "Zhongshan", zh: "中山" },
      why: { en: "Muji, Uniqlo, Hands, a cinema and a food court, plus the Ferris wheel once the skies clear. An easy, relaxed choice for everyone, kids included.",
             zh: "无印良品、Uniqlo、Hands、电影院和美食街，天晴了还能搭摩天轮。对全家人来说都轻松惬意，孩子也不例外。" } },

    { name: { en: "Covered night markets", zh: "有遮蔽的夜市" }, area: { en: "Raohe / Ningxia", zh: "饶河／宁夏" },
      why: { en: "Roofed stalls keep trading happily through the rain, so a food-market night stays exactly on plan.",
             zh: "摊位有顶棚遮蔽，下雨照常营业，逛夜市这一晚完全不受影响。" } },

    { name: { en: "Underground malls and Eslite", zh: "地下街与诚品" }, area: { en: "By the hotel", zh: "饭店旁" },
      why: { en: "Q Square and the Taipei Station mall are an easy walk; Eslite Xinyi is enormous and easy to lose an afternoon in. <b>Zero exposure — the safe, reliable answer on a typhoon day.</b>",
             zh: "京站与台北车站地下街走得到，信义诚品面积极大，一下午都逛不完。<b>完全不必淋雨——台风天最可靠的安全选项。</b>" } },

    { name: { en: "The big museums", zh: "大型博物馆" }, area: { en: "Shilin / central", zh: "士林／市中心" },
      why: { en: "The National Palace Museum is the classic storm-day answer, and the Land Bank, 228 Memorial and MoCA are all central and easy to reach. A comfortable half-day indoors.",
             zh: "故宫是台风天的经典答案，土银展示馆、228纪念馆与当代艺术馆也都在市中心、交通方便。轻松度过室内的半天时光。" } },

    { name: { en: "Huashan 1914 Creative Park", zh: "华山1914文创园区" }, area: { en: "5-min walk", zh: "步行5分钟" },
      why: { en: "Cafés, indoor exhibitions and shops, all right by the hotel. The perfect, easy answer to any spare hour.",
             zh: "咖啡馆、室内展览与商店，就在饭店旁。任何空档时间的完美解答。" } }
  ],

  prep: [
    { en: "<b>Keep an eye on the sky.</b> Install the CWA (Central Weather Administration) app and Windy, and check them daily in the week before and during the trip. A <i>sea warning</i> means a storm is approaching; a <i>land warning</i> means disruption is likely within about eighteen hours.",
      zh: "<b>随时留意天气。</b>安装中央气象署App与Windy，出发前一周与旅程中每天查看。<i>海上警报</i>代表台风正在接近；<i>陆上警报</i>代表约18小时内很可能会有影响。" },
    { en: "<b>Know the shutdown rule.</b> If the local government declares a typhoon day (停班停課), the MRT may pause and attractions close for the day. Check the news each morning, and simply stay put on a land-warning day.",
      zh: "<b>了解停班停课规则。</b>地方政府宣布停班停课时，捷运可能暂停营运、景点当天关闭。每天早上留意新闻，陆上警报日就安心待着别出门。" },
    { en: "<b>The mid-bus days cancel as a block.</b> Days 1, 3, 4, 5, 6 and 7 all have a vehicle booked. A named typhoon means calling the operator once — do not send twelve people onto a mountain road. Ask about weather cancellation when you book all six.",
      zh: "<b>中巴那几天整段取消。</b>第1、3、4、5、6、7天都有车。有命名的台风就打一通电话给业者——不要把十二人送上山路。六段一起订的时候问天气取消。" },
    { en: "<b>Day 4 and Day 7 are no longer 'nothing prepaid'.</b> The lantern package and the airport send-off both need a cancellation conversation, same as Yilan and Xiao Wulai. A washed-out lantern morning can still move to Thursday — tell the driver as well as Hsu's.",
      zh: "<b>第4天和第7天不再是“没有预付”。</b>天灯套装和送机都要谈取消，跟宜兰、小乌来一样。天灯上午被雨打掉仍可挪到周四——司机和许家都要说一声。" },
    { en: "<b>Rain is kinder with a bus waiting.</b> Between stops you stay dry. Jiufen stairs and Shifen tracks are still wet-weather work — pack ponchos as well as umbrellas, and the stroller rain cover if it's coming.",
      zh: "<b>有车在等，下雨客气得多。</b>站与站之间不用淋。九份阶梯和十分铁道仍会湿——请带轻便雨衣，不要只带伞；推车出门就带防雨罩。" },
    { en: "<b>Travel insurance.</b> Double-check the policy covers weather delays and cancellations, and keep receipts for any rebooking, just in case.",
      zh: "<b>旅游保险。</b>确认保单涵盖天气延误与取消，并保留所有改订的收据，以备不时之需。" },
    { en: "<b>Flexible bookings.</b> Book a refundable hotel rate where you can, and skip prepaying non-refundable outdoor tickets for the highest-risk days. Thursday can still skip Hsu's if lanterns have to move.",
      zh: "<b>弹性预订。</b>尽量订可退的房价，风险最高的日子不要预付不可退的户外票券。若天灯必须挪日，周四仍可跳过许家。" },
    { en: "<b>Stock the room.</b> On a warning day, pick up water, snacks and any medicines the evening before — shops may close, and it's one less thing to think about.",
      zh: "<b>房间备粮。</b>发布警报的前一晚，先买好水、零食与常备药——店家可能会休息，先备好就能少操一份心。" },
    { en: "<b>Stay in touch.</b> Share phone numbers around the group, agree on a meetup if you split in Ximending, and keep a power bank in the bag so no one's phone runs dry.",
      zh: "<b>保持联络。</b>把电话号码在全员之间互相交换，西门町分头时先讲好集合方式，包里带上行动电源，手机才不会没电。" }
  ],

  bottomLine: {
    en: "<b>Bottom line: there's really no need to worry.</b> Few places handle typhoons with as much composure as Taiwan, and disruption is usually measured in hours, not days. The trip is already designed so the highest-risk outdoor days — Maokong, the Yilan farm, the sky lanterns and Xiao Wulai — can flex without any fuss. Treat any storm day as an indoor adventure of its own, and you'll barely feel like you lost a thing.",
    zh: "<b>结论：真的不必担心。</b>少有地方能像台湾这样从容应对台风，影响通常以小时计，而非以天计。这趟行程本来就把风险最高的户外日——猫空、宜兰农场、天灯、小乌来——设计成可以轻松调动。把任何风雨天当成一场室内小冒险，你几乎不会觉得错过了什么。"
  }
};
