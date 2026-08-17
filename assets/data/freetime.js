/* ============================================================
   freetime.js — the gaps between the plans.

   Every window below is derived from the timeline in dayN.js.
   IF YOU CHANGE A DAY'S TIMES, change the matching window here too —
   this file does not read the timelines automatically, on purpose,
   because "free" is a judgement call, not arithmetic.

   Bedtime assumption: 22:00–23:00. Wake times are the first
   scheduled item minus enough to wash, dress and eat.
   ============================================================ */
window.TRIP = window.TRIP || {};

window.TRIP.freetime = {

  intro: {
    en: "A packed itinerary nobody can actually survive is a badly planned one. This page gathers every breathing space in the week — the naps, the free afternoons, the evenings after dinner — and tells you exactly what time tomorrow's alarm goes off. Read it before agreeing to one more stop.",
    zh: "行程排得再满，撑不下去也是白排。这一页把整周所有的喘息时间都整理出来——补眠、自由的下午、晚饭后的时光——并清楚告诉你明天几点要起床。想再加一个景点之前，先看看这一页。"
  },

  /* The two numbers everything else hangs off. */
  rule: {
    en: "<b>Lights out between 22:00 and 23:00.</b> Monday night is 22:00 — Tuesday's Xiao Wulai start will not wait. Every other night has a little more give.",
    zh: "<b>熄灯时间落在22:00到23:00之间。</b>周一晚上必须22:00——周二小乌来不等人。其余几晚则宽松一些。"
  },

  days: [
    {
      n: 1, date: { en: "Sat 5 Sep", zh: "9月5日 · 周六" },
      wake: { time: { en: "On the plane", zh: "在飞机上" },
              why: { en: "You land at 06:55, so the night before is spent in the air. Sleep on the flight if you possibly can — the whole day is paced for the chance that you didn't.",
                     zh: "6:55落地，前一晚是在空中度过的。能在飞机上睡就尽量睡——今天的步调，就是照着「可能没睡好」来安排的。" } },
      home: "21:00",
      bed: "23:00",
      blocks: [
        { from: "12:00", to: "18:00", dur: { en: "6 hours", zh: "6小时" }, kind: "rest",
          what: { en: "Free & easy — Zhongshan, no fixed plan", zh: "自由活动 —— 中山，没有固定行程" },
          ideas: { en: "The single biggest block of free time all week. Breakfast and the family visit fill the morning, then this stretch is yours — still at heart a chance to shake off the jet lag, just left open rather than forced into a nap. Anyone who needs sleep should head back to the hotel and actually take it — curtains shut, phone face down, no judgement for skipping the shopping. Everyone else: lunch somewhere along the way, then the Zhongshan MRT area and Shuangcheng Street for boutiques and cafés, a short walk or one stop from the hotel.",
                   zh: "整周单一最大的一段自由时间。早上先吃早餐、再去家族拜访，之后这段时间就是自己的了——骨子里仍是甩开时差的机会，只是不强制午睡、留给大家自由运用。想睡的人请直接回饭店老实躺下——拉上窗帘、手机翻面，跳过逛街没人会说话。其他人可以顺路找地方吃午餐，再到中山捷运站一带和双城街逛小店、喝咖啡，走路或搭一站捷运就到。" } },
        { from: "21:00", to: "23:00", dur: { en: "2 hours", zh: "2小时" }, kind: "evening",
          what: { en: "First night, back from Ningxia", zh: "第一晚，逛完宁夏夜市回来" },
          ideas: { en: "Anyone who shopped through the afternoon instead of napping will be flagging by now — an early night is entirely fine. Whoever's still upright: this is the perfect hour for a convenience-store run — browsing a 7-Eleven shelf by shelf is half the fun of Taiwan. Huashan 1914 is a three-minute walk away, and its outdoor courtyard is buzzing on a Saturday night.",
                   zh: "下午没睡午觉、逛了一整个下午的人，这时候大概已经累了，早点休息完全没问题。还有精神的人，这个时段最适合去便利商店逛一圈——把7-Eleven一层层看过去，本身就是台湾乐趣的一半。华山1914走路三分钟就到，周六晚上的户外中庭正热闹。" } }
      ],
      tomorrow: { time: "07:15", sleep: { en: "8 hr 15", zh: "8小时15分" },
                  why: { en: "Breakfast is at 08:00, and getting an early start pays off at the gondola queue.", zh: "8:00吃早餐，缆车这边越早到、排队越轻松。" } }
    },

    {
      n: 2, date: { en: "Sun 6 Sep", zh: "9月6日 · 周日" },
      wake: { time: { en: "07:15", zh: "07:15" },
              why: { en: "Breakfast at 08:00, MRT at 09:15 — Sunday is the gondola's busiest day, so arriving by 10:00 really matters.",
                     zh: "8:00早餐，9:15搭捷运——周日是缆车最挤的一天，10:00前到站很关键。" } },
      home: "20:45",
      bed: "22:30",
      blocks: [
        { from: "16:00", to: "18:30", dur: { en: "2 hr 30", zh: "2小时30分" }, kind: "rest",
          what: { en: "Afternoon off — the biggest free block of the week", zh: "下午自由活动——全周最大的一段空档" },
          ideas: { en: "Deliberately left empty — the grandparents should spend it horizontally. Anyone with energy to spare: Huashan 1914 next door, Guanghua and Syntrend for the two older kids and their electronics, or a foot massage — shops line Zhongxiao Xinsheng, and 40 minutes runs about NT$800.",
                   zh: "刻意留白——长辈最好躺着度过这段时间。还有精力的人：隔壁的华山1914、带两个大孩子去光华商场和三创逛电子产品，或者去做脚底按摩——忠孝新生一带满街都是，40分钟大约NT$800。" } },
        { from: "20:45", to: "22:30", dur: { en: "1 hr 45", zh: "1小时45分" }, kind: "evening",
          what: { en: "Back from Raohe", zh: "逛完饶河街回来" } ,
          ideas: { en: "You've just eaten a pepper bun, so nobody's hungry. Keep tonight short — tomorrow the mid-bus at 08:30 for Yilan.",
                   zh: "刚吃过胡椒饼，谁都不饿。今晚早点收工——明天08:30中巴去宜兰。" } }
      ],
      tomorrow: { time: "07:15", sleep: { en: "8 hr 45", zh: "8小时45分" }, alarm: true,
                  why: { en: "Breakfast at 07:30, mid-bus at 08:30 for Sanxing. A towel for wet feet at Qingshui.",
                         zh: "7:30早餐，8:30中巴去三星。清水地热泡脚带一条毛巾。" } }
    },

    {
      n: 3, date: { en: "Mon 7 Sep", zh: "9月7日 · 周一" },
      wake: { time: { en: "07:15", zh: "07:15" }, alarm: true,
              why: { en: "Breakfast at 07:30, mid-bus at 08:30. The tunnel is a highway; the farm opens at 09:00, and you will arrive around 10:00.",
                     zh: "7:30早餐，8:30中巴。隧道是高速公路；农场09:00开门，大约10:00到。" } },
      home: "18:15",
      bed: "22:00",
      hard: true,
      blocks: [
        { from: "16:00", to: "18:15", dur: { en: "75–100 min", zh: "75至100分钟" }, kind: "rest",
          what: { en: "The ride home — count it as free time", zh: "回程车上——这也算自由时间" },
          ideas: { en: "Steam still in your clothes, air-con, nothing to decide. Monday evening through the tunnel is kinder than a weekend.",
                   zh: "衣服上还带着蒸汽、冷气、什么都不用决定。周一傍晚钻隧道，比周末客气。" } },
        { from: "18:15", to: "22:00", dur: { en: "3 hr 45", zh: "3小时45分" }, kind: "evening",
          what: { en: "Home in time to shower and eat nearby", zh: "赶得及洗澡，就近吃" },
          ideas: { en: "Shower, nearest food, bed — Tuesday is Xiao Wulai. Breakfast at 07:00, bus at 08:00.",
                   zh: "洗澡、就近吃、睡觉——明天小乌来。7:00早餐，8:00中巴。" } }
      ],
      tomorrow: { time: "07:00", sleep: { en: "9 hours", zh: "9小时" }, alarm: true,
                  why: { en: "Breakfast at 07:00, mid-bus at 08:00 for Xiao Wulai and Daxi.",
                         zh: "7:00早餐，8:00中巴去小乌来、大溪。" } }
    },

    {
      n: 4, date: { en: "Tue 8 Sep", zh: "9月8日 · 周二" },
      wake: { time: { en: "07:00", zh: "07:00" }, alarm: true,
              why: { en: "Breakfast at 07:00, mid-bus at 08:00 for Xiao Wulai. Tablets for the Fuxing road.",
                     zh: "7:00早餐，8:00中巴去小乌来。复兴山路要晕车药。" } },
      home: "17:15",
      bed: "22:00",
      blocks: [
        { from: "17:15", to: "22:00", dur: { en: "4 hr 45", zh: "4小时45分" }, kind: "evening",
          what: { en: "Home early — quiet dinner, not the farewell hotpot", zh: "早回 —— 随便吃，不是告别火锅" },
          ideas: { en: "The farewell hotpot is Thursday. Tonight is Huashan, a noodle shop, or a 7-Eleven run. Lights out by 22:00 — Wednesday is the lantern day, and Jiufen still has steps.",
                   zh: "告别火锅在周四。今晚华山、麵店、或便利商店。22:00熄灯——明天放天灯，九份仍有阶梯。" } }
      ],
      tomorrow: { time: "07:15", sleep: { en: "9 hr 15", zh: "9小时15分" },
                  why: { en: "The longest sleep of the trip. Breakfast at 08:00, mid-bus at 09:15 for the lantern day.", zh: "全程睡得最长的一晚。8:00早餐，9:15中巴，前往放天灯的一天。" } }
    },

    {
      n: 5, date: { en: "Wed 9 Sep", zh: "9月9日 · 周三" },
      wake: { time: { en: "07:15", zh: "07:15" },
              why: { en: "Breakfast at 08:00, mid-bus at 09:15. Longest day of the trip — the waterfall drop is at the gate, but Jiufen is still stairs.",
                     zh: "8:00早餐，9:15中巴。全程最长的一天——瀑布停在门口，但九份仍是阶梯。" } },
      home: "21:00",
      bed: "22:30",
      blocks: [
        { from: "14:15", to: "15:30", dur: { en: "1 hr 15", zh: "1小时15分" }, kind: "rest",
          what: { en: "The deliberate slow block at Shifen", zh: "十分刻意留下的慢时段" },
          ideas: { en: "Built into the day on purpose, so the lantern goes up at golden hour instead of in flat daylight. Sit in a teahouse, watch other people's lanterns rise, let the kids wander the tracks. Resist the urge to fill it — these ninety minutes are why the evening works.",
                   zh: "这段时间是刻意排进去的，为了让天灯在黄昏时分升空，而不是大白天。找间茶馆坐下，看别人的天灯升起，让小孩在铁道上走走。别急着把它填满——晚上之所以精彩，正是因为这九十分钟。" } },
        { from: "21:00", to: "22:30", dur: { en: "1 hr 30", zh: "1小时30分" }, kind: "evening",
          what: { en: "Back from Jiufen", zh: "从九份回来" } ,
          ideas: { en: "The best night of the trip is behind you, and a fairly early start lies ahead. Back up the lantern photos before anyone's phone fills up — this is the one day nobody can afford to lose pictures from.",
                   zh: "全程最精彩的一晚已经结束，明天又要相对早起。趁现在把天灯照片备份好，别等手机存满——这是最不能弄丢照片的一天。" } }
      ],
      tomorrow: { time: "07:15", sleep: { en: "8 hr 45", zh: "8小时45分" },
                  why: { en: "Breakfast at 07:30, mid-bus at 08:15 for Hsu's in Shiding. Tablets in the bag. Hotpot is 18:30.", zh: "7:30早餐，8:15中巴去石碇许家。晕车药放进包。火锅18:30。" } }
    },

    {
      n: 6, date: { en: "Thu 10 Sep", zh: "9月10日 · 周四" },
      wake: { time: { en: "07:15", zh: "07:15" },
              why: { en: "Breakfast at 07:30, mid-bus at 08:15. Hsu's 09:30 session will not wait. Pack tonight — tomorrow is Dihua and the flight.",
                     zh: "7:30早餐，8:15中巴。许家09:30那场不等人。今晚收行李——明天迪化街，然后登机。" } },
      home: "20:30",
      bed: "23:00",
      blocks: [
        { from: "13:30", to: "16:30", dur: { en: "3 hours", zh: "3小时" }, kind: "choose",
          what: { en: "Ximending — the afternoon is the plan, not a gap", zh: "西门町 —— 下午就是行程，不是空档" },
          ideas: { en: "Red House, pedestrian streets, Longshan only if you still want a temple. Split up. Be on a train toward Zhongshan by 17:00 — hotpot is 18:30.",
                   zh: "红楼、徒步区，想看庙再去龙山寺。可以分头。17:00前要往中山方向走——火锅18:30。" } },
        { from: "20:30", to: "23:00", dur: { en: "2 hr 30", zh: "2小时30分" }, kind: "evening",
          what: { en: "Last real night in Taipei — pack after hotpot", zh: "在台北最后一个完整的晚上 —— 火锅后再收行李" },
          ideas: { en: "The latest bedtime of the week, because tomorrow doesn't start until 08:30. Do the bulk of the packing now — weigh the suitcases after Ximending, you've probably bought more than you think. Then Huashan next door if anyone still wants a last drink.",
                   zh: "全周可以最晚睡的一晚，因为明天8:30才开始。现在把大部分行李收好——西门町逛过之后秤一下箱子，买的通常比想象中多。还想喝一杯就去隔壁华山。" } }
      ],
      tomorrow: { time: "07:45", sleep: { en: "8 hr 45", zh: "8小时45分" },
                  why: { en: "A lie-in, finally. Breakfast at 08:30, check-out at 10:00, and the flight isn't until 20:00.", zh: "终于可以睡到自然醒。8:30早餐，10:00退房，班机要到晚上8:00才起飞。" } }
    },

    {
      n: 7, date: { en: "Fri 11 Sep", zh: "9月11日 · 周五" },
      wake: { time: { en: "07:45", zh: "07:45" },
              why: { en: "The gentlest morning of the trip. Breakfast at 08:30, check-out at 10:00 — leave the luggage with the hotel and head out with empty hands.",
                     zh: "全程最悠闲的早晨。8:30早餐，10:00退房——行李寄放在饭店，两手空空出门去。" } },
      home: { en: "Airport, 15:45", zh: "机场，15:45" },
      bed: { en: "On the plane", zh: "在飞机上" },
      blocks: [
        { from: "15:45", to: "17:00", dur: { en: "1 hr 15", zh: "1小时15分" }, kind: "rest",
          what: { en: "Landside at Taoyuan, before check-in", zh: "桃园机场，报到之前" },
          ideas: { en: "Deliberately generous — a party of twelve doesn't move quickly through an airport, and with a three-year-old's pace and patience to work around, this buffer is exactly what keeps the last hour from turning into a panic. Spend the leftover coins here rather than carrying them home.",
                   zh: "这段时间刻意留宽——十二个人在机场移动本来就快不起来，加上还要照顾三岁小朋友的步调和耐性，有这段缓冲，最后一小时才不会兵荒马乱。零钱在这里花掉，别带回家。" } },
        { from: "17:00", to: "20:00", dur: { en: "3 hours", zh: "3小时" }, kind: "evening",
          what: { en: "Airside — the last of Taiwan", zh: "过了海关——台湾的最后一段" },
          ideas: { en: "Longer than it strictly needs to be, on purpose. There's proper food airside, not just duty free — this counts as the trip's last meal. Anyone who forgot the pineapple cakes gets one final chance, at airport prices.",
                   zh: "刻意留得比实际需要的长。管制区里有正经的餐厅，不只是免税店——这算是这趟旅程的最后一餐。忘了买凤梨酥的人还有最后一次机会，只是要付机场价。" } }
      ],
      tomorrow: null
    }
  ],

  /* Walkable from the Zhongzheng base. Hours are the usual pattern rather
     than a promise — see the verify note on the page. */
  nearby: [
    { name: { en: "Huashan 1914 Creative Park", zh: "华山1914文创园区" }, tw: "華山1914文創園區",
      walk: { en: "3 min walk", zh: "步行3分钟" },
      open: { en: "Grounds open late; shops usually to 21:00–22:00", zh: "园区户外整晚开放，店家通常到21:00–22:00" },
      what: { en: "A converted Japanese-era sake brewery, now red-brick courtyards, galleries, bars and a lawn. The single best thing about this hotel's location — genuinely next door, and at its best after dark.",
              zh: "日治时期的酒厂改建而成，如今是红砖中庭、画廊、酒吧和草坪。这家饭店位置最大的优点——真的就在隔壁，而且入夜后最迷人。" } },
    { name: { en: "Any 7-Eleven or FamilyMart", zh: "任何一家7-Eleven或全家" }, tw: "7-Eleven／全家",
      walk: { en: "Under 2 min, in every direction", zh: "不到2分钟，哪个方向都有" },
      open: { en: "24 hours", zh: "24小时" },
      what: { en: "Don't dismiss this as filler — it's an activity in its own right. Tea eggs, hot soy milk, Taiwan-only snacks, and beer to drink back in the room. Sending one person on a convenience-store run is a perfectly legitimate evening plan.",
              zh: "别把逛便利商店当成随便打发时间——它本身就是一项活动。茶叶蛋、热豆浆、台湾限定零食，还有能带回房间喝的啤酒。派一个人去便利商店采买，就是完全成立的晚间行程。" } },
    { name: { en: "Guanghua Digital Plaza & Syntrend", zh: "光华商场与三创生活园区" }, tw: "光華商場／三創生活園區",
      walk: { en: "8–10 min walk", zh: "步行8–10分钟" },
      open: { en: "Usually to 22:00", zh: "通常营业到22:00" },
      what: { en: "Six floors of electronics, gaming gear and gadgets. This is the answer to \"the 11 and 13 year olds are bored\" — and Syntrend is air-conditioned, which solves a second problem at the same time.",
              zh: "六层楼的电子产品、电玩和各种小玩意。这是「11岁和13岁的孩子无聊了」的标准答案——而且三创有冷气，顺便解决另一个问题。" } },
    { name: { en: "Foot and shoulder massage", zh: "脚底与肩颈按摩" }, tw: "腳底按摩",
      walk: { en: "Several around Zhongxiao Xinsheng", zh: "忠孝新生一带好几家" },
      open: { en: "Many open to 23:00 or later", zh: "不少营业到23:00以后" },
      what: { en: "The best-value hour available to anyone in their 60s after a day of walking. Roughly NT$800 for 40 minutes. Just point at the picture on the price board rather than trying to describe what hurts.",
              zh: "对走了一整天的长辈来说，这是CP值最高的一小时。40分钟大约NT$800。直接指价目表上的图就好，不用费力形容哪里酸痛。" } },
    { name: { en: "Chiang Kai-shek Memorial Hall grounds", zh: "中正纪念堂园区" }, tw: "中正紀念堂",
      walk: { en: "2 MRT stops", zh: "捷运2站" },
      open: { en: "Grounds open into the evening; the hall itself closes ~18:00", zh: "园区开放到晚上，主体建筑约18:00关闭" },
      what: { en: "An enormous open plaza, lit at night, flat underfoot and nearly empty after dark. A good, slow evening walk for the grandparents — not a single step involved.",
              zh: "巨大开阔的广场，夜里灯光明亮，地面平坦，入夜后几乎没什么人。很适合长辈慢慢散步——全程一个台阶都没有。" } },
    { name: { en: "Ximending", zh: "西门町" }, tw: "西門町",
      walk: { en: "3 MRT stops", zh: "捷运3站" },
      open: { en: "Late — this is the one that does not close", zh: "很晚——这是不打烊的那一区" },
      what: { en: "Neon, street food, teenagers, and shops open well past midnight. You already had Thursday afternoon here; if anyone wants a second round, keep it short — hotpot is 18:30.",
              zh: "霓虹灯、小吃、年轻人，商店开到深夜以后。周四下午已经来过；若有人还想再逛，请早点收——火锅18:30。" } }
  ],

  tips: [
    { en: "<b>The free block on Day 1 is the load-bearing wall of this trip.</b> Six hours, the longest of the week, opening once breakfast and the family visit are done — treat it as a real jet-lag buffer, not just shopping time. Anyone who needs to sleep should actually go and do it.",
      zh: "<b>第1天的自由活动是整趟行程的承重墙。</b>早餐和家族拜访结束后，接着就是六小时、整周最长的一段空档——请把它当成真正的时差缓冲，不只是逛街时间，想睡的人就该真的回去躺下。" },
    { en: "<b>Two alarms really matter: 06:45 on Monday and 06:30 on Tuesday.</b> Set them the night before, on more than one phone, and tell the whole group at dinner rather than by message at midnight.",
      zh: "<b>只有两个闹钟真正重要：周一6:45、周二6:30。</b>前一晚就设好，而且不只一支手机设定，并在晚餐时当面告诉大家，别等到半夜才发讯息。" },
    { en: "<b>Free time belongs to the person, not the group.</b> Every free window here can be split — some go out, some stay in. Nobody should feel they have to tag along at 21:00 just because everyone else is.",
      zh: "<b>自由时间是每个人的，不是全团的。</b>这里的每一段空档都可以拆开——有人出门，有人留下。没有人该因为「大家都去」而觉得晚上九点非跟不可。" },
    { en: "<b>If a day is running late, cut from the plan, not from the rest.</b> Losing a stop costs you one thing. Losing the nap costs you the next two days.",
      zh: "<b>行程延误时，砍景点，别砍休息。</b>少一个景点只损失一件事；少一次补眠，赔上的是接下来两天。" },
    { en: "<b>The hotel is why the evenings work.</b> Shandao Temple is 5 minutes away and Zhongxiao Xinsheng 6, so anyone can peel off and get back alone at any hour without a taxi negotiation.",
      zh: "<b>晚上能自由活动，全靠饭店的位置。</b>善导寺站走5分钟、忠孝新生站走6分钟，任何人想先回去，随时都能自己搭捷运，不必跟计程车司机比手画脚。" }
  ],

  verify: {
    title: { en: "Opening hours here are the usual pattern, not a promise", zh: "这里的营业时间是常态，不是保证" },
    body: { en: "Everything on the neighbourhood list keeps roughly the hours shown, but Taiwanese shops change them freely, and September is still typhoon season. Check on the day before anyone walks 10 minutes to a closed door — Google Maps is reliable for this in Taipei.",
            zh: "邻近清单上的营业时间大致都准，但台湾店家常常临时调整，而且九月还在台风季。出发前先查一下，免得走十分钟去吃闭门羹——台北地区的Google地图在这方面相当可靠。" }
  }
};
