/* ============================================================
   pages.js — renderers for the non-day pages:
   home, food directory, budget, practical, weather.
   Reuses the helpers exposed by render.js as TRIP.h.
   ============================================================ */
(function () {
  "use strict";
  var T = (window.TRIP = window.TRIP || {});
  var H = T.h;
  var IMG = "assets/images/";
  var GROUP_SIZE = 12;

  function pagehead(kicker, title, sub) {
    return '<div class="pagehead"><div class="wrap">' +
           '<div class="kicker">' + H.esc(kicker) + "</div>" +
           "<h1>" + H.bi(title) + "</h1>" +
           (sub ? "<p>" + H.bi(sub) + "</p>" : "") +
           "</div></div>";
  }

  /* ---------- HOME ------------------------------------------- */

  T.renderHome = function () {
    var m = T.meta, out = "";

    out += '<div class="hero cover" style="background-image:linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),url(' +
           IMG + 'taipei-cover/taipei-cover-dusk-skyline.jpg)"><div class="wrap">';
    out += '<div class="hero-kicker">5 – 11 September 2026</div>';
    out += "<h1>" + H.bi(m.title) + "</h1>";
    out += '<p class="hero-sub">' + H.bi(m.subtitle) + "</p>";
    out += "</div></div>";

    out += '<section><div class="wrap narrow"><p class="lede">' + H.bi(m.lede) + "</p></div></section>";

    /* day cards */
    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "The seven days", zh: "七天行程" });
    out += '<div class="daycards">';
    m.days.forEach(function (d) {
      out += '<a class="daycard" href="day' + d.n + '.html">';
      out += '<div class="daycard-img"><span class="daycard-n">DAY ' + d.n + "</span>";
      out += H.img(d.hero, d.title.en) + "</div>";
      out += '<div class="daycard-body">';
      out += '<div class="daycard-date">' + H.bi(d.date) + " · " + H.bi(d.transport) + "</div>";
      out += "<h3>" + H.bi(d.title) + "</h3>";
      out += "<p>" + H.bi(d.blurb) + "</p>";
      out += "</div></a>";
    });
    out += "</div></div></section>";

    /* trip facts */
    out += '<section><div class="wrap">';
    out += H.secHead("02", { en: "How the trip works", zh: "行程基本资讯" });
    out += '<dl class="glance">';
    m.facts.forEach(function (f) {
      out += "<div><dt>" + H.bi(f.k) + "</dt><dd>" + H.biRich(f.v) + "</dd></div>";
    });
    out += "</dl></div></section>";

    /* quick links */
    out += '<section><div class="wrap">';
    out += H.secHead("03", { en: "Also in here", zh: "其他页面" });
    out += '<div class="daycards">';
    [["food.html", { en: "Every restaurant, in one table", zh: "餐厅总表" }, { en: "All recommended spots with ratings, Maps links and rough cost.", zh: "所有推荐餐厅，含评价、地图连结与预估费用。" }],
     ["transport.html", { en: "How each day moves", zh: "每天怎么走" }, { en: "Public transport plan, fares, and the mid-buses on Days 1, 3 and 6.", zh: "大众运输规划、车资，以及第1、3、6天的中巴。" }],
     ["budget.html", { en: "What it costs", zh: "费用估算" }, { en: "Food and activities for the week, the cash a card will not cover, and how much to change in Singapore dollars.", zh: "全周餐饮与活动、刷不了卡要备的现金，以及出发前该换多少新币。" }],
     ["practical.html", { en: "Phrases, cards and bookings", zh: "会话、名片与订位清单" }, { en: "Survival Mandarin, taxi cards in traditional characters, the booking checklist and emergency numbers.", zh: "求生中文、繁体计程车名片、订位清单与紧急电话。" }],
     ["weather.html", { en: "If the weather turns", zh: "天气备案" }, { en: "September is typhoon season. Per-day swaps, indoor options and a prep checklist.", zh: "九月是台风季。每日备案、室内选项与准备清单。" }],
     ["booklet.html", { en: "Export the whole trip as PDF", zh: "导出完整 PDF 手册" }, { en: "One printable booklet — every day, food, transport, phrases. Save as PDF from the browser.", zh: "可列印的完整手册——每一天、餐饮、交通、会话。用浏览器另存为 PDF。" }]
    ].forEach(function (p) {
      out += '<a class="daycard" href="' + p[0] + '"><div class="daycard-body">';
      out += "<h3>" + H.bi(p[1]) + "</h3><p>" + H.bi(p[2]) + "</p></div></a>";
    });
    out += "</div></div></section>";

    T.renderPage("index.html", out);
  };

  /* ---------- BUDGET ----------------------------------------- */

  function nt(n) {
    return "NT$" + Math.round(n).toLocaleString();
  }
  function sg(n) {
    return "S$" + Math.round(n).toLocaleString();
  }

  /* Sums each day's timeline so the table can never drift from the
     itinerary. Rows tagged altGroup are alternatives and are excluded.
     Travel rows (MRT, gondola, taxis in the timeline) are split out so
     the headline number can be food and activities only. */
  T.daySpend = function (d) {
    var food = 0, transit = 0, cash = 0, mixed = 0;
    var cashRows = [], mixedRows = [];
    (d.timeline || []).forEach(function (r) {
      if (typeof r.cost !== "number" || r.altGroup) return;
      if (r.type === "travel") transit += r.cost;
      else food += r.cost;
      if (r.pay === "cash") {
        cash += r.cost;
        cashRows.push({ title: r.title, cost: r.cost, note: r.payNote });
      } else if (r.pay === "mixed") {
        mixed += r.cost;
        mixedRows.push({ title: r.title, cost: r.cost, note: r.payNote });
      }
    });
    return {
      food: food, transit: transit, cash: cash, mixed: mixed,
      cashRows: cashRows, mixedRows: mixedRows,
      note: d.budget && d.budget.note
    };
  };

  /* Kept for the pocket booklet, which still prints a single per-day
     figure. Food + the small fares that sit in the timeline; mid-buses
     stay outside. */
  T.dayCost = function (d) {
    var s = T.daySpend(d);
    if (d.budget) return { min: d.budget.min, max: d.budget.max, note: d.budget.note };
    var total = s.food + s.transit;
    return { min: total, max: total };
  };

  T.tripBudget = function () {
    var N = T.budgetNotes || {};
    var fx = N.fx || { ntdPerSgd: 25, changer: 24.8 };
    var extras = N.extras || [];
    var buffer = (N.buffer && N.buffer.perPerson) || 300;
    var days = [];
    var food = 0, transit = 0, cash = 0, mixed = 0;
    var cashRows = [];

    (T.meta.days || []).forEach(function (info) {
      var d = T.days[info.n];
      if (!d) return;
      var s = T.daySpend(d);
      food += s.food;
      transit += s.transit;
      cash += s.cash;
      mixed += s.mixed;
      s.n = info.n;
      s.date = info.date;
      s.title = info.title;
      days.push(s);
      s.cashRows.forEach(function (r) {
        cashRows.push({
          day: info.n, date: info.date, title: r.title,
          cost: r.cost, note: r.note, kind: "must"
        });
      });
      s.mixedRows.forEach(function (r) {
        cashRows.push({
          day: info.n, date: info.date, title: r.title,
          cost: r.cost, note: r.note, kind: "mixed"
        });
      });
    });

    extras.forEach(function (e) {
      food += e.cost;
      if (e.pay === "cash") {
        cash += e.cost;
        cashRows.push({
          day: e.day, title: e.name, cost: e.cost,
          note: e.why, kind: "must"
        });
      }
    });

    cashRows.sort(function (a, b) { return a.day - b.day; });

    var changePp = Math.ceil((cash + mixed + buffer) / 100) * 100;
    var sgdPp = Math.round(changePp / (fx.ntdPerSgd || 25));

    return {
      days: days,
      extras: extras,
      cashRows: cashRows,
      food: food,
      transit: transit,
      cash: cash,
      mixed: mixed,
      buffer: buffer,
      changePp: changePp,
      sgdPp: sgdPp,
      foodGroup: food * GROUP_SIZE,
      cashGroup: cash * GROUP_SIZE,
      changeGroup: changePp * GROUP_SIZE,
      sgdGroup: sgdPp * GROUP_SIZE,
      fx: fx
    };
  };

  function fareCell(kicker, amount, sub, extraClass) {
    return '<div class="farecell' + (extraClass ? " " + extraClass : "") + '">' +
           '<div class="fare-kicker">' + H.bi(kicker) + "</div>" +
           '<div class="fare-amt">' + amount + "</div>" +
           (sub ? '<div class="fare-sub">' + sub + "</div>" : "") +
           "</div>";
  }

  T.renderBudget = function () {
    var B = T.tripBudget();
    var N = T.budgetNotes;
    var rows = "";

    B.days.forEach(function (s) {
      var extraBits = B.extras.filter(function (e) { return e.day === s.n; });
      var extraSum = 0;
      extraBits.forEach(function (e) { extraSum += e.cost; });
      var dayFood = s.food + extraSum;
      var extraNote = extraBits.map(function (e) {
        return H.bi(e.name) + " " + nt(e.cost);
      }).join(" · ");
      var dayCash = s.cash + extraBits.reduce(function (n, e) {
        return n + (e.pay === "cash" ? e.cost : 0);
      }, 0);
      rows += "<tr><td><b>" + s.n + "</b></td><td>" + H.bi(s.date) + "</td><td>" +
              H.bi(s.title) +
              (extraNote ? '<br><span class="budget-quiet">' +
                H.bi({ en: "Also likely: ", zh: "另外可能：" }) + extraNote + "</span>" : "") +
              (s.note ? '<br><span class="budget-quiet">' + H.bi(s.note) + "</span>" : "") +
              '</td><td class="num">' + nt(dayFood) +
              '</td><td class="num">' + nt(dayCash) +
              '</td><td class="num">' + nt(dayFood * GROUP_SIZE) + "</td></tr>";
    });

    var out = pagehead("Budget · 费用",
      { en: "What the week costs", zh: "这一周的花费" },
      { en: "Food and activities in Taiwan dollars — no transport. Then the cash a card will not cover, and the Singapore dollars to change before you fly.",
        zh: "餐饮与活动用新台币算——不含交通。接着是刷不了卡要备的现金，以及出发前该换的新币。" });

    out += '<section><div class="wrap">';
    out += '<div class="fareboard">';
    out += fareCell(
      { en: "The week, no transport", zh: "全程，不含交通" },
      nt(B.food) + '<span class="fare-pp">' + H.bi({ en: " / person", zh: " / 每人" }) + "</span>",
      H.bi({ en: "About ", zh: "十二人约 " }) + "<b>" + nt(B.foodGroup) + "</b>" +
        H.bi({ en: " for twelve. Meals, tickets and the likely extra lunches. Flights, hotel and every bus sit outside this.",
               zh: "。含餐食、门票和几乎一定会吃的几顿。机票、住宿和所有车子都不在内。" })
    );
    out += fareCell(
      { en: "Cash a card will not cover", zh: "刷不了卡的现金" },
      nt(B.cash) + '<span class="fare-pp">' + H.bi({ en: " / person", zh: " / 每人" }) + "</span>",
      H.bi({ en: "Night markets, old streets, lanterns, jar chicken. Change ", zh: "夜市、老街、天灯、甕缸鸡。出发前每人换 " }) +
        '<b class="fare-sgd">' + sg(B.sgdPp) + "</b>" +
        H.bi({ en: " each in Singapore — ", zh: " —— 十二人 " }) +
        "<b>" + sg(B.sgdGroup) + "</b>" +
        H.bi({ en: " for twelve.", zh: "。" }),
      "cash"
    );
    out += "</div></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "Food and activities, per person — no transport", zh: "餐饮与活动，每人 —— 不含交通" });
    out += '<div class="tablewrap"><table><thead><tr>' +
           "<th>#</th><th>" + H.bi({ en: "Date", zh: "日期" }) + "</th><th>" +
           H.bi({ en: "Day", zh: "行程" }) + '</th><th class="num">' +
           H.bi({ en: "Food & activities", zh: "餐饮与活动" }) + '</th><th class="num">' +
           H.bi({ en: "Of which cash", zh: "其中现金" }) + '</th><th class="num">' +
           H.bi({ en: "×12 people", zh: "十二人合计" }) + "</th></tr></thead><tbody>";
    out += rows;
    out += "</tbody><tfoot><tr><td colspan=3>" +
           H.bi({ en: "Trip total — no transport", zh: "全程合计 —— 不含交通" }) +
           '</td><td class="num">' + nt(B.food) +
           '</td><td class="num">' + nt(B.cash) +
           '</td><td class="num">' + nt(B.foodGroup) +
           "</td></tr></tfoot></table></div>";
    out += '<div class="note">' + H.bi({
      en: "EasyCard hops and the Maokong gondola day pass (about " + nt(B.transit) +
          " a head in the timelines) sit with transport, not here. Mid-buses are hired per vehicle — roughly NT$45,000–55,000 for the week.",
      zh: "悠游卡短程和猫空缆车一日票（行程里约每人 " + nt(B.transit) +
          "）算在交通，不在这里。中巴按车租，全周约 NT$45,000–55,000。"
    }) + "</div>";
    out += "</div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("02", { en: "Where a card will not work", zh: "哪里刷不了卡" });
    out += '<div class="tablewrap"><table><thead><tr>' +
           "<th>" + H.bi({ en: "Day", zh: "日" }) + "</th><th>" +
           H.bi({ en: "Place", zh: "地点" }) + "</th><th>" +
           H.bi({ en: "Why cash", zh: "为何现金" }) + '</th><th class="num">' +
           H.bi({ en: "Per person", zh: "每人" }) + "</th></tr></thead><tbody>";
    B.cashRows.forEach(function (r) {
      var tag = r.kind === "mixed"
        ? '<span class="chip amber">' + H.bi({ en: "unless prepaid", zh: "没预付才要" }) + "</span> "
        : "";
      out += "<tr><td><b>" + r.day + "</b></td><td><b>" + H.bi(r.title) + "</b></td><td>" +
             tag + (r.note ? H.bi(r.note) : "—") +
             '</td><td class="num">' + nt(r.cost) + "</td></tr>";
    });
    out += "</tbody><tfoot><tr><td colspan=3>" +
           H.bi({ en: "Must-have cash (places that will not take a card)", zh: "必备现金（刷不了卡的地方）" }) +
           '</td><td class="num">' + nt(B.cash) + "</td></tr>";
    out += "<tr><td colspan=3>" +
           H.bi({ en: "Hold extra if you did not prepay tickets", zh: "门票没预付，再多备" }) +
           '</td><td class="num">' + nt(B.mixed) + "</td></tr>";
    out += "<tr><td colspan=3>" + H.bi(N.buffer.note) +
           '</td><td class="num">' + nt(B.buffer) + "</td></tr>";
    out += "<tr><td colspan=3>" +
           H.bi({ en: "Change this much per person", zh: "每人请换这么多" }) +
           '</td><td class="num">' + nt(B.changePp) + "</td></tr></tfoot></table></div>";
    out += "</div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("03", { en: "Change this in Singapore before you fly", zh: "出发前在新加坡换这些" });
    out += '<div class="sgdboard">';
    out += '<div class="sgdboard-clock">';
    out += '<div class="fare-kicker">' + H.bi({ en: "Per person", zh: "每人" }) + "</div>";
    out += '<div class="sgd-amt">' + sg(B.sgdPp) + "</div>";
    out += '<div class="fare-sub">' + nt(B.changePp) +
           H.bi({ en: " at NT$25 = S$1", zh: "，按 NT$25 = S$1" }) + "</div>";
    out += "</div>";
    out += '<div class="sgdboard-clock group">';
    out += '<div class="fare-kicker">' + H.bi({ en: "Twelve people", zh: "十二人" }) + "</div>";
    out += '<div class="sgd-amt">' + sg(B.sgdGroup) + "</div>";
    out += '<div class="fare-sub">' + nt(B.changeGroup) +
           H.bi({ en: " for the whole family", zh: "，全家现金" }) + "</div>";
    out += "</div>";
    out += '<div class="sgdboard-copy">';
    out += "<p>" + H.biRich(N.fx.note) + "</p>";
    out += "<p>" + H.bi({
      en: "Rate snapshot: " + (N.fx.asOf && N.fx.asOf.en ? N.fx.asOf.en : "") +
          ". Do this at a Singapore money changer, not at the airport in Taipei — the spread is kinder, and you land at 06:55 with cash already in the bag.",
      zh: "汇率快照：" + (N.fx.asOf && N.fx.asOf.zh ? N.fx.asOf.zh : "") +
          "。请在新加坡兑换店换，不要到台北机场再换——价差比较好看，而且你们 06:55 落地时现金已经在包里。"
    }) + "</p>";
    out += "<p>" + H.biRich(N.cashAdvice) + "</p>";
    out += "</div></div></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("04", { en: "What this does and does not cover", zh: "涵盖与未涵盖的项目" });
    out += '<div class="box verify"><h4>' + H.bi({ en: "Read this before quoting a number to anyone", zh: "把数字告诉别人之前先看这里" }) +
           "</h4><p>" + H.biRich(N.warning) + "</p></div>";
    out += '<div class="box"><h4>' + H.bi({ en: "Included above", zh: "已包含" }) + "</h4><ul>";
    N.included.forEach(function (i) { out += "<li>" + H.biRich(i) + "</li>"; });
    out += "</ul></div>";
    out += '<div class="box"><h4>' + H.bi({ en: "NOT included — budget separately", zh: "未包含 —— 请另行估算" }) + "</h4><ul>";
    N.excluded.forEach(function (i) { out += "<li>" + H.biRich(i) + "</li>"; });
    out += "</ul></div>";
    out += "</div></section>";

    T.renderPage("budget.html", out);
  };

  /* ---------- FOOD DIRECTORY --------------------------------- */

  T.renderFood = function () {
    var out = pagehead("Food · 餐厅",
      { en: "Every place we plan to eat", zh: "所有安排要吃的地方" },
      { en: "Hsu's flowing noodles, Ximending, a Zhuangwei jar-chicken table and the rest of the week, with ratings and what each is known for.",
        zh: "许家流水麵、西门町、壮围甕缸鸡，以及这一周其余的店，含评价与招牌。" });
    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "Every recommended place, by day", zh: "所有推荐餐厅（依日期）" });
    out += '<div class="tablewrap"><table><thead><tr>' +
           "<th>" + H.bi({ en: "Day", zh: "日" }) + "</th>" +
           "<th>" + H.bi({ en: "Place", zh: "店家" }) + "</th>" +
           '<th class="num">' + H.bi({ en: "Rating", zh: "评价" }) + "</th>" +
           "<th>" + H.bi({ en: "Known for", zh: "招牌" }) + "</th>" +
           '<th class="num">' + H.bi({ en: "NT$ pp", zh: "每人" }) + "</th>" +
           "<th>" + H.bi({ en: "Links", zh: "连结" }) + "</th>" +
           "</tr></thead><tbody>";
    T.foodDirectory.forEach(function (r) {
      out += "<tr><td><b>" + r.day + "</b><br><span style=\"font-size:.8em;color:var(--ink-faint)\">" +
             H.bi(r.date) + "</span></td>";
      out += "<td><b>" + H.esc(r.name.en) + "</b><br><span style=\"color:var(--ink-soft)\">" +
             H.esc(r.name.zh) + "</span>" +
             (r.meal ? '<br><span class="tl-tag">' + H.esc(r.meal) + "</span>" : "") + "</td>";
      out += '<td class="num"><span class="rating">' + (r.rating || "—") +
             (r.rating ? "★" : "") + "</span></td>";
      out += "<td>" + H.biRich(r.known) + "</td>";
      out += '<td class="num">' + (r.cost != null ? "NT$" + r.cost : "—") + "</td>";
      out += '<td class="maps-cell">';
      if (r.maps) {
        out += '<a href="' + H.esc(r.maps) + '" target="_blank" rel="noopener">' +
               H.bi({ en: "Maps", zh: "地图" }) + "</a>";
      } else {
        out += "—";
      }
      out += "</td></tr>";
    });
    out += "</tbody></table></div>";
    out += '<div class="note">' + H.biRich(T.foodNote) + "</div>";
    out += "</div></section>";

    T.renderPage("food.html", out);
  };

  /* ---------- PRACTICAL -------------------------------------- */

  T.renderPractical = function () {
    var P = T.practical, out = pagehead("Practical · 实用资讯",
      { en: "Bookings, phrases and taxi cards", zh: "订位、会话与计程车名片" },
      { en: "What to book before you fly, enough Mandarin to get fed and get home, and a card to show every driver.",
        zh: "出发前该订的、够用来点餐和回家的中文，以及给每位司机看的地址卡。" });

    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "Book these before you fly", zh: "出发前必订" });
    out += '<div class="tablewrap"><table><thead><tr><th>' +
           H.bi({ en: "What", zh: "项目" }) + "</th><th>" +
           H.bi({ en: "When", zh: "时间" }) + "</th><th>" +
           H.bi({ en: "Notes", zh: "备注" }) + "</th></tr></thead><tbody>";
    P.bookings.forEach(function (b) {
      out += "<tr><td><b>" + H.bi(b.what) + "</b></td><td>" + H.bi(b.when) +
             "</td><td>" + H.biRich(b.note) + "</td></tr>";
    });
    out += "</tbody></table></div></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("02", { en: "Survival Mandarin", zh: "求生中文" });
    P.phrases.forEach(function (grp) {
      out += '<div class="box"><h4>' + H.bi(grp.group) + "</h4>";
      out += '<div class="tablewrap" style="border:0"><table style="min-width:0"><tbody>';
      grp.items.forEach(function (p) {
        out += '<tr><td style="width:38%">' + H.esc(p.en) + "</td>" +
               '<td style="width:30%"><b>' + H.esc(p.zh) + "</b></td>" +
               '<td style="color:var(--ink-faint);font-style:italic">' + H.esc(p.py) + "</td></tr>";
      });
      out += "</tbody></table></div></div>";
    });
    out += "</div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("03", { en: "Show these to a taxi driver", zh: "给司机看（繁体）" });
    out += '<div class="dishes">';
    P.taxi.forEach(function (t) {
      out += '<div class="box taxi"><h4>Day ' + t.day + "</h4>" +
             '<div class="tw">' + H.esc(t.tw) + "</div>" +
             '<div class="say">' + H.esc(t.say) + "</div></div>";
    });
    out += "</div></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("04", { en: "Getting around, money, emergencies", zh: "交通、金钱与紧急状况" });
    P.notes.forEach(function (grp) {
      out += '<div class="box"><h4>' + H.bi(grp.group) + "</h4><ul>";
      grp.items.forEach(function (i) { out += "<li>" + H.biRich(i) + "</li>"; });
      out += "</ul></div>";
    });
    out += "</div></section>";

    T.renderPage("practical.html", out);
  };

  /* ---------- WEATHER ---------------------------------------- */

  T.renderWeather = function () {
    var W = T.weather, out = pagehead("Weather · 天气",
      { en: "If the weather turns", zh: "天气变了怎么办" },
      { en: "September is peak typhoon season. Per-day swaps, the indoor menu, and how to read a warning.",
        zh: "九月是台风季高峰。每日备案、室内清单，以及如何看懂警报。" });

    out += '<section><div class="wrap narrow"><p class="lede">' + H.bi(W.lede) + "</p></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "First — which kind of weather?", zh: "先判断：是哪一种天气？" });
    W.kinds.forEach(function (k) {
      out += '<div class="box"><h4>' + H.bi(k.title) + "</h4><p style=\"margin:0 0 .5rem;font-size:.93rem;color:var(--ink-soft)\">" +
             H.biRich(k.what) + "</p><p style=\"margin:0;font-size:.93rem\"><b>" +
             H.bi({ en: "Do this: ", zh: "这样做：" }) + "</b>" + H.biRich(k.action) + "</p></div>";
    });
    out += "</div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("02", { en: "Per-day rain swaps", zh: "每日雨天备案" });
    out += '<div class="tablewrap"><table><thead><tr><th>' +
           H.bi({ en: "Day", zh: "日" }) + "</th><th>" +
           H.bi({ en: "Risk", zh: "风险" }) + "</th><th>" +
           H.bi({ en: "If it rains, do this instead", zh: "下雨就改成" }) + "</th></tr></thead><tbody>";
    W.swaps.forEach(function (s) {
      var cls = s.level === "HIGH" ? "red" : s.level === "MED" ? "amber" : "tea";
      out += "<tr><td><b>" + s.day + "</b><br><span style=\"font-size:.8em;color:var(--ink-faint)\">" +
             H.bi(s.date) + "</span></td>";
      out += '<td><span class="chip ' + cls + '">' + s.level + "</span><br>" +
             '<span style="font-size:.85em;color:var(--ink-soft)">' + H.bi(s.risk) + "</span></td>";
      out += "<td>" + H.biRich(s.swap) + "</td></tr>";
    });
    out += "</tbody></table></div></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("03", { en: "The indoor menu", zh: "室内备案清单" });
    out += '<div class="tablewrap"><table><thead><tr><th>' +
           H.bi({ en: "Activity", zh: "活动" }) + "</th><th>" +
           H.bi({ en: "Area", zh: "区域" }) + "</th><th>" +
           H.bi({ en: "Why", zh: "说明" }) + "</th></tr></thead><tbody>";
    W.indoor.forEach(function (i) {
      out += "<tr><td><b>" + H.bi(i.name) + "</b></td><td>" + H.bi(i.area) +
             "</td><td>" + H.biRich(i.why) + "</td></tr>";
    });
    out += "</tbody></table></div></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("04", { en: "Typhoon prep", zh: "台风准备" });
    out += '<div class="box"><ul>';
    W.prep.forEach(function (p) { out += "<li>" + H.biRich(p) + "</li>"; });
    out += "</ul></div>";
    out += '<div class="note">' + H.biRich(W.bottomLine) + "</div>";
    out += "</div></section>";

    T.renderPage("weather.html", out);
  };

  /* ---------- TRANSPORT ------------------------------------- */

  function opCard(o) {
    var out = '<div class="op">';
    out += '<div class="op-head"><h3>' + H.bi(o.name) + "</h3>";
    out += '<span class="fit ' + H.esc(o.fit) + '">' +
           H.bi({ en: "Seats 12", zh: "坐得下12人" }) + "</span></div>";
    if (o.tw) out += '<div class="op-zh">' + H.esc(o.tw) + "</div>";

    out += '<div class="op-contact">';
    out += '<a href="' + H.esc(o.url) + '" target="_blank" rel="noopener">' +
           H.esc(o.url.replace(/^https?:\/\//, "").replace(/\/$/, "")) + "</a>";
    if (o.phone) out += "<span>&#9742; " + H.esc(o.phone) + "</span>";
    if (o.line)  out += "<span>LINE " + H.esc(o.line) + "</span>";
    if (o.email) out += "<span>&#9993; " + H.esc(o.email) + "</span>";
    out += "</div>";

    out += '<dl class="op-rows">';
    out += "<div><dt>" + H.bi({ en: "Vehicle", zh: "车型" }) + "</dt><dd>" + H.biRich(o.fleet) + "</dd></div>";
    out += "<div><dt>" + H.bi({ en: "Price", zh: "报价" }) + "</dt><dd>" + H.biRich(o.price) + "</dd></div>";
    out += "<div><dt>" + H.bi({ en: "Terms", zh: "条件" }) + "</dt><dd>" + H.biRich(o.terms) + "</dd></div>";
    out += "</dl>";
    out += '<div class="op-verdict">' + H.biRich(o.verdict) + "</div>";
    return out + "</div>";
  }

  T.renderTransport = function () {
    var V = T.transport;
    var out = pagehead("Transport · 交通",
      { en: "Moving as a family of twelve", zh: "一家十二口的移动方式" }, V.intro);

    /* what changed and what it saves */
    out += '<section><div class="wrap">';
    out += '<div class="box"><h4>' + H.bi(V.headline.title) +
           '</h4><p style="margin:0;font-size:.93rem;color:var(--ink-soft)">' +
           H.biRich(V.headline.body) + "</p></div>";
    out += "</div></section>";

    /* the day-by-day plan */
    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "How each day moves", zh: "每天怎么走" });
    out += '<div class="tablewrap"><table><thead><tr><th>' +
           H.bi({ en: "Day", zh: "日期" }) + "</th><th>" +
           H.bi({ en: "Mode", zh: "方式" }) + "</th><th>" +
           H.bi({ en: "Route", zh: "路线" }) + '</th><th class="num">' +
           H.bi({ en: "Cost", zh: "费用" }) + "</th><th>" +
           H.bi({ en: "Notes", zh: "说明" }) + "</th></tr></thead><tbody>";
    V.days.forEach(function (d) {
      out += '<tr><td style="white-space:nowrap"><b><a href="day' + d.n + '.html">Day ' + d.n + "</a></b><br>" +
             H.bi(d.date) + '</td><td style="min-width:7rem">' + H.bi(d.mode) +
             (d.charter ? ' <span class="fit two">' +
               H.bi({ en: "charter", zh: "包车" }) + "</span>" : "") +
             "</td><td>" + H.bi(d.route) + '</td><td class="num">' + H.bi(d.fare) +
             "</td><td>" + H.biRich(d.note) + "</td></tr>";
    });
    out += "</tbody></table></div></div></section>";

    /* tickets and passes */
    out += '<section><div class="wrap">';
    out += H.secHead("02", { en: "The tickets and passes you'll be holding", zh: "你们手上会有的票券" });
    out += '<div class="ops">';
    V.modes.forEach(function (m) {
      out += '<div class="op"><div class="op-head"><h3>' + H.bi(m.name) + "</h3></div>";
      if (m.tw) out += '<div class="op-zh">' + H.esc(m.tw) + "</div>";
      out += '<dl class="op-rows">';
      out += "<div><dt>" + H.bi({ en: "Cost", zh: "费用" }) + "</dt><dd>" + H.bi(m.cost) + "</dd></div>";
      out += "<div><dt>" + H.bi({ en: "Used for", zh: "用途" }) + "</dt><dd>" + H.biRich(m.what) + "</dd></div>";
      out += "</dl>";
      out += '<div class="op-verdict">' + H.biRich(m.note) + "</div></div>";
    });
    out += "</div></div></section>";

    /* the three charters */
    out += '<section><div class="wrap">';
    out += H.secHead("03", V.charter.title);
    out += '<div class="box verify"><h4>' +
           H.bi({ en: "Three mid-buses — and they must be buses, not vans", zh: "三辆中巴——必须是中巴，不是九人座" }) +
           "</h4><p>" + H.biRich(V.charter.body) + "</p></div>";

    out += '<div class="tablewrap"><table><thead><tr><th>' +
           H.bi({ en: "Vehicle class", zh: "车辆等级" }) + '</th><th class="num">' +
           H.bi({ en: "Seats", zh: "座位" }) + '</th><th class="num">' +
           H.bi({ en: "Passengers", zh: "可载客" }) + "</th><th>" +
           H.bi({ en: "Plate", zh: "车牌" }) + "</th><th>" +
           H.bi({ en: "Notes", zh: "说明" }) + "</th></tr></thead><tbody>";
    V.capacity.forEach(function (c) {
      out += "<tr><td><b>" + H.bi(c.cls) + '</b></td><td class="num">' + H.esc(c.seats) +
             '</td><td class="num">' + H.esc(c.pax) + "</td><td>" + H.bi(c.plate) +
             "</td><td>" + H.biRich(c.note) + "</td></tr>";
    });
    out += "</tbody></table>";

    out += '<div class="ops" style="margin-top:1.4rem">';
    V.charter.operators.forEach(function (o) { out += opCard(o); });
    out += "</div>";

    out += '<div class="note" style="margin-top:1.4rem">' + H.bi(V.charter.enquiryNote) + "</div>";
    out += '<h4>' + H.bi({ en: "Day 1 — airport", zh: "第1天 —— 机场" }) + "</h4>";
    out += '<div class="enquiry tw">' + H.esc(V.charter.enquiryTw) + "</div>";
    out += '<div class="enquiry">' + H.esc(V.charter.enquiryEn) + "</div>";
    (V.charter.more || []).forEach(function (m) {
      out += "<h4>" + H.bi(m.title) + "</h4>";
      out += '<div class="enquiry tw">' + H.esc(m.enquiryTw) + "</div>";
      out += '<div class="enquiry">' + H.esc(m.enquiryEn) + "</div>";
    });
    out += "</div></section>";

    /* practicalities */
    out += '<section><div class="wrap">';
    out += H.secHead("04", { en: "Travelling as a family, without the friction", zh: "一家人出行，怎样最顺" });
    out += '<div class="box"><ul>';
    V.tips.forEach(function (t) { out += "<li>" + H.biRich(t) + "</li>"; });
    out += "</ul></div>";
    out += '<div class="box"><h4>' + H.bi(V.money.title) +
           '</h4><p style="margin:0;font-size:.93rem;color:var(--ink-soft)">' +
           H.biRich(V.money.body) + "</p></div>";
    out += '<div class="box verify"><h4>' + H.bi(V.verify.title) + "</h4><p>" +
           H.biRich(V.verify.body) + "</p></div>";
    out += "</div></section>";

    T.renderPage("transport.html", out);
  };
  /* ---------- FREE TIME -------------------------------------- */

  T.renderFreetime = function () {
    var F = T.freetime;
    var out = pagehead("Free time · 自由时间",
      { en: "The gaps, and tomorrow's alarm", zh: "空档，以及明天的闹钟" },
      F.intro);

    out += '<section><div class="wrap">';
    out += '<div class="note">' + H.biRich(F.rule) + "</div>";
    out += "</div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "Day by day", zh: "逐日说明" });

    F.days.forEach(function (d) {
      out += '<div class="ft-day">';

      /* header — who this day is, and when you get up */
      out += '<div class="ft-head">';
      out += '<span class="n">Day ' + d.n + "</span>";
      out += "<h3>" + H.bi(d.date) + "</h3>";
      out += '<div class="ft-wake' + (d.wake.alarm ? " early" : "") + '">' +
             '<span class="lbl">' + H.bi({ en: "Up at", zh: "起床" }) + "</span>" +
             '<span class="t">' + H.bi(d.wake.time) + "</span></div>";
      out += "</div>";
      out += '<div class="ft-why">' + H.biRich(d.wake.why) + "</div>";

      /* the gaps themselves */
      out += '<div class="ft-blocks">';
      d.blocks.forEach(function (b) {
        out += '<div class="ft-block" data-kind="' + H.esc(b.kind) + '">';
        out += '<div class="ft-span"><span class="range">' + H.esc(b.from) + "–" + H.esc(b.to) +
               '</span><span class="dur">' + H.bi(b.dur) + "</span></div>";
        out += '<div class="ft-what"><h4>' + H.bi(b.what) + "</h4>" +
               "<p>" + H.biRich(b.ideas) + "</p></div>";
        out += "</div>";
      });
      out += "</div>";

      /* the point of the page: tomorrow's alarm */
      if (d.tomorrow) {
        out += '<div class="ft-foot' + (d.tomorrow.alarm ? " alarm" : "") + '">';
        out += '<span class="lbl">' + H.bi({ en: "Tomorrow, up at", zh: "明天起床" }) + "</span>";
        out += '<span class="t">' + H.esc(d.tomorrow.time) + "</span>";
        out += '<span class="why">' + H.biRich(d.tomorrow.why) + "</span>";
        out += '<span class="sleep">' + H.bi(d.tomorrow.sleep) + "</span>";
        out += "</div>";
      } else {
        out += '<div class="ft-foot done"><span class="lbl">' +
               H.bi({ en: "Tomorrow", zh: "明天" }) + '</span><span class="why">' +
               H.bi({ en: "No alarm. You are on a plane.", zh: "不用设闹钟，你们在飞机上。" }) +
               "</span></div>";
      }

      out += "</div>";
    });
    out += "</div></section>";

    /* what is actually within reach of the hotel */
    out += '<section><div class="wrap">';
    out += H.secHead("02", { en: "Within reach of the hotel", zh: "从饭店走得到的地方" });
    out += '<div class="ops">';
    F.nearby.forEach(function (p) {
      out += '<div class="op">';
      out += '<div class="op-head"><h3>' + H.bi(p.name) + "</h3></div>";
      if (p.tw) out += '<div class="op-zh">' + H.esc(p.tw) + "</div>";
      out += '<dl class="op-rows">';
      out += "<div><dt>" + H.bi({ en: "Distance", zh: "距离" }) + "</dt><dd>" + H.bi(p.walk) + "</dd></div>";
      out += "<div><dt>" + H.bi({ en: "Usually", zh: "营业" }) + "</dt><dd>" + H.bi(p.open) + "</dd></div>";
      out += "</dl>";
      out += '<div class="op-verdict">' + H.biRich(p.what) + "</div>";
      out += "</div>";
    });
    out += "</div></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("03", { en: "How to spend it well", zh: "怎么用才不浪费" });
    out += '<div class="box"><ul>';
    F.tips.forEach(function (t) { out += "<li>" + H.biRich(t) + "</li>"; });
    out += "</ul></div>";
    out += '<div class="box verify"><h4>' + H.bi(F.verify.title) + "</h4><p>" +
           H.biRich(F.verify.body) + "</p></div>";
    out += "</div></section>";

    T.renderPage("freetime.html", out);
  };

  /* ---------- BOOKLET (print / PDF) -------------------------- */

  T.renderBooklet = function () {
    var m = T.meta;
    document.title = "Taiwan Family Trip — Full booklet";

    var toolbar = '<div class="booklet-toolbar"><div class="wrap">' +
      "<p>" + H.bi({
        en: "This page is the offline booklet. Choose language above, then Save as PDF.",
        zh: "这一页就是离线手册。先选语言，再点「存成 PDF」。"
      }) + "</p>" +
      '<button type="button" class="btn-pdf" data-print style="background:var(--board);color:var(--gold);border-color:var(--gold)">' +
      H.bi({ en: "Save as PDF", zh: "存成 PDF" }) + "</button></div></div>";

    var out = toolbar;
    out += '<div class="booklet-cover hero cover" style="background-image:url(' +
           IMG + 'taipei-cover/taipei-cover-dusk-skyline.jpg)"><div class="wrap">';
    out += '<div class="hero-kicker">5 – 11 September 2026</div>';
    out += "<h1>" + H.bi(m.title) + "</h1>";
    out += '<p class="hero-sub">' + H.bi(m.subtitle) + "</p>";
    out += "</div></div>";

    out += '<section><div class="wrap narrow"><p class="lede">' + H.bi(m.lede) + "</p></div></section>";

    out += '<section><div class="wrap">';
    out += H.secHead("00", { en: "How the trip works", zh: "行程基本资讯" });
    out += '<dl class="glance">';
    m.facts.forEach(function (f) {
      out += "<div><dt>" + H.bi(f.k) + "</dt><dd>" + H.biRich(f.v) + "</dd></div>";
    });
    out += "</dl></div></section>";

    m.days.forEach(function (info) {
      out += T.renderDayBody(info.n);
    });

    /* Supporting sections — reuse existing renderers' body builders via temporary capture
       is awkward; inline the essentials by calling the same data. */
    out += '<div class="day-break" id="booklet-food">';
    out += pagehead("Food · 餐厅",
      { en: "Every place we plan to eat", zh: "所有安排要吃的地方" },
      { en: "Ratings are static snapshots for offline use.", zh: "评价为离线用的静态快照。" });
    out += '<section><div class="wrap"><div class="tablewrap"><table><thead><tr>' +
           "<th>" + H.bi({ en: "Day", zh: "日" }) + "</th>" +
           "<th>" + H.bi({ en: "Place", zh: "店家" }) + "</th>" +
           '<th class="num">' + H.bi({ en: "Rating", zh: "评价" }) + "</th>" +
           "<th>" + H.bi({ en: "Known for", zh: "招牌" }) + "</th>" +
           '<th class="num">' + H.bi({ en: "NT$ pp", zh: "每人" }) + "</th>" +
           "</tr></thead><tbody>";
    (T.foodDirectory || []).forEach(function (r) {
      out += "<tr><td><b>" + r.day + "</b></td><td><b>" + H.esc(r.name.en) + "</b><br>" +
             H.esc(r.name.zh) + "</td><td class=\"num\">" + (r.rating || "—") +
             "</td><td>" + H.biRich(r.known) + "</td><td class=\"num\">" +
             (r.cost != null ? "NT$" + r.cost : "—") + "</td></tr>";
    });
    out += "</tbody></table></div></div></section></div>";

    /* Transport / practical / weather / freetime / budget — pull from their data */
    if (T.transport) {
      out += '<div class="day-break" id="booklet-transport">';
      var V = T.transport;
      out += pagehead("Transport · 交通",
        { en: "Moving as a family of twelve", zh: "一家十二口的移动方式" }, V.intro);
      out += '<section><div class="wrap"><div class="tablewrap"><table><thead><tr><th>' +
             H.bi({ en: "Day", zh: "日期" }) + "</th><th>" +
             H.bi({ en: "Mode", zh: "方式" }) + "</th><th>" +
             H.bi({ en: "Route", zh: "路线" }) + '</th><th class="num">' +
             H.bi({ en: "Cost", zh: "费用" }) + "</th></tr></thead><tbody>";
      V.days.forEach(function (d) {
        out += "<tr><td><b>Day " + d.n + "</b><br>" + H.bi(d.date) + "</td><td>" +
               H.bi(d.mode) + "</td><td>" + H.bi(d.route) + '</td><td class="num">' +
               H.bi(d.fare) + "</td></tr>";
      });
      out += "</tbody></table></div></div></section></div>";
    }

    if (T.practical) {
      out += '<div class="day-break" id="booklet-practical">';
      var P = T.practical;
      out += pagehead("Practical · 实用资讯",
        { en: "Bookings, phrases and taxi cards", zh: "订位、会话与计程车名片" }, null);
      out += '<section><div class="wrap">';
      out += H.secHead("01", { en: "Book these before you fly", zh: "出发前必订" });
      out += '<div class="tablewrap"><table><thead><tr><th>' +
             H.bi({ en: "What", zh: "项目" }) + "</th><th>" +
             H.bi({ en: "When", zh: "时间" }) + "</th><th>" +
             H.bi({ en: "Notes", zh: "备注" }) + "</th></tr></thead><tbody>";
      P.bookings.forEach(function (b) {
        out += "<tr><td><b>" + H.bi(b.what) + "</b></td><td>" + H.bi(b.when) +
               "</td><td>" + H.biRich(b.note) + "</td></tr>";
      });
      out += "</tbody></table></div>";

      out += H.secHead("02", { en: "Survival Mandarin", zh: "求生中文" });
      (P.phrases || []).forEach(function (grp) {
        out += '<div class="box"><h4>' + H.bi(grp.group) + "</h4>";
        out += '<div class="tablewrap" style="border:0"><table style="min-width:0"><tbody>';
        grp.items.forEach(function (p) {
          out += '<tr><td style="width:38%">' + H.esc(p.en) + "</td>" +
                 '<td style="width:30%"><b>' + H.esc(p.zh) + "</b></td>" +
                 '<td style="color:var(--ink-faint);font-style:italic">' + H.esc(p.py) + "</td></tr>";
        });
        out += "</tbody></table></div></div>";
      });

      out += H.secHead("03", { en: "Show these to a taxi driver", zh: "给司机看（繁体）" });
      out += '<div class="dishes">';
      P.taxi.forEach(function (t) {
        out += '<div class="box taxi"><h4>Day ' + t.day + "</h4>" +
               '<div class="tw">' + H.esc(t.tw) + "</div>" +
               '<div class="say">' + H.esc(t.say) + "</div></div>";
      });
      out += "</div></div></section></div>";
    }

    if (T.weather) {
      out += '<div class="day-break" id="booklet-weather">';
      var W = T.weather;
      out += pagehead("Weather · 天气",
        { en: "If the weather turns", zh: "天气变了怎么办" }, W.lede);
      out += '<section><div class="wrap"><div class="tablewrap"><table><thead><tr><th>' +
             H.bi({ en: "Day", zh: "日" }) + "</th><th>" +
             H.bi({ en: "Risk", zh: "风险" }) + "</th><th>" +
             H.bi({ en: "If it rains", zh: "下雨就改成" }) + "</th></tr></thead><tbody>";
      W.swaps.forEach(function (s) {
        out += "<tr><td><b>" + s.day + "</b></td><td>" + s.level + " — " + H.bi(s.risk) +
               "</td><td>" + H.biRich(s.swap) + "</td></tr>";
      });
      out += "</tbody></table></div></div></section></div>";
    }

    if (T.freetime) {
      out += '<div class="day-break" id="booklet-freetime">';
      /* Reuse the free-time renderer body by temporarily swapping app — simpler: call renderFreetime pieces */
      var F = T.freetime;
      out += pagehead("Free time · 自由时间",
        { en: "The gaps, and tomorrow's alarm", zh: "空档，以及明天的闹钟" }, F.intro);
      out += '<section><div class="wrap">';
      F.days.forEach(function (d) {
        out += '<div class="ft-day"><div class="ft-head"><span class="n">Day ' + d.n +
               "</span><h3>" + H.bi(d.date) + '</h3><div class="ft-wake' +
               (d.wake.alarm ? " early" : "") + '"><span class="lbl">' +
               H.bi({ en: "Up at", zh: "起床" }) + '</span><span class="t">' +
               H.bi(d.wake.time) + "</span></div></div>";
        if (d.tomorrow) {
          out += '<div class="ft-foot' + (d.tomorrow.alarm ? " alarm" : "") + '">' +
                 '<span class="lbl">' + H.bi({ en: "Tomorrow, up at", zh: "明天起床" }) +
                 '</span><span class="t">' + H.esc(d.tomorrow.time) +
                 '</span><span class="why">' + H.biRich(d.tomorrow.why) + "</span></div>";
        }
        out += "</div>";
      });
      out += "</div></section></div>";
    }

    /* Budget summary */
    out += '<div class="day-break" id="booklet-budget">';
    var B = T.tripBudget();
    var brows = "";
    B.days.forEach(function (s) {
      var extraSum = 0;
      B.extras.forEach(function (e) { if (e.day === s.n) extraSum += e.cost; });
      brows += "<tr><td><b>" + s.n + "</b></td><td>" + H.bi(s.date) + "</td><td>" +
               H.bi(s.title) + '</td><td class="num">' + nt(s.food + extraSum) +
               '</td><td class="num">' + nt(s.cash) + "</td></tr>";
    });
    out += pagehead("Budget · 费用",
      { en: "What the week costs", zh: "这一周的花费" },
      { en: "Food and activities only — no transport.", zh: "只含餐饮与活动——不含交通。" });
    out += '<section><div class="wrap">';
    out += '<div class="fareboard booklet-fare">';
    out += fareCell(
      { en: "The week, no transport", zh: "全程，不含交通" },
      nt(B.food) + '<span class="fare-pp">' + H.bi({ en: " / person", zh: " / 每人" }) + "</span>",
      nt(B.foodGroup) + H.bi({ en: " for twelve", zh: " · 十二人" })
    );
    out += fareCell(
      { en: "Change in Singapore", zh: "在新加坡兑换" },
      sg(B.sgdPp) + '<span class="fare-pp">' + H.bi({ en: " / person", zh: " / 每人" }) + "</span>",
      sg(B.sgdGroup) + H.bi({ en: " for twelve · ", zh: " · 十二人 · " }) + nt(B.changePp) +
        H.bi({ en: " cash each", zh: " 现金每人" }),
      "cash"
    );
    out += "</div>";
    out += '<div class="tablewrap"><table><thead><tr>' +
           "<th>#</th><th>" + H.bi({ en: "Date", zh: "日期" }) + "</th><th>" +
           H.bi({ en: "Day", zh: "行程" }) + '</th><th class="num">' +
           H.bi({ en: "Food & activities", zh: "餐饮与活动" }) + '</th><th class="num">' +
           H.bi({ en: "Cash", zh: "现金" }) + "</th></tr></thead><tbody>" +
           brows + "</tbody><tfoot><tr><td colspan=3>" +
           H.bi({ en: "Trip total — no transport", zh: "全程合计 —— 不含交通" }) +
           '</td><td class="num">' + nt(B.food) +
           '</td><td class="num">' + nt(B.cash) +
           "</td></tr></tfoot></table></div></div></section></div>";

    T.renderPage("booklet.html", out, { printBtn: true });
  };

  /* ---------- CREDITS ---------------------------------------- */

  T.renderCredits = function () {
    var c = T.credits || {}, keys = Object.keys(c).sort();
    var out = pagehead("Credits · 图片来源",
      { en: "Where the photographs came from", zh: "照片的来源" },
      { en: "Every image on this site was downloaded from the web as a reference picture of a real place or dish. They are not our own photographs. This is a private family document — please do not republish it.",
        zh: "本站所有图片皆自网路下载，用来示意真实的地点与菜色，并非我们自己拍摄。这是家庭内部使用的文件，请勿公开转载。" });

    out += '<section><div class="wrap">';
    out += H.secHead("01", { en: "Image sources", zh: "图片来源清单" });
    if (!keys.length) {
      out += '<div class="box"><p style="margin:0">' +
             H.bi({ en: "No credits recorded yet.", zh: "尚未记录来源。" }) + "</p></div>";
    } else {
      out += '<div class="tablewrap"><table><thead><tr><th>' +
             H.bi({ en: "File", zh: "档案" }) + "</th><th>" +
             H.bi({ en: "Subject", zh: "主题" }) + "</th><th>" +
             H.bi({ en: "Author", zh: "作者" }) + "</th><th>" +
             H.bi({ en: "Licence", zh: "授权" }) + "</th><th>" +
             H.bi({ en: "Source", zh: "出处" }) + "</th></tr></thead><tbody>";
      keys.forEach(function (k) {
        var e = c[k] || {};
        out += '<tr><td style="font-family:var(--mono);font-size:.78rem">' + H.esc(k) + "</td>";
        out += "<td>" + H.esc(e.subject || "") + "</td>";
        out += "<td>" + H.esc(e.author || "Unknown") + "</td>";
        out += "<td>" + H.esc(e.license || "Unknown") + "</td>";
        out += '<td>' + (e.source ? '<a href="' + H.esc(e.source) +
               '" target="_blank" rel="noopener">link</a>' : "—") + "</td></tr>";
      });
      out += "</tbody></table></div>";
      out += '<div class="note">' + H.bi({
        en: keys.length + " images recorded.",
        zh: "共记录 " + keys.length + " 张图片。" }) + "</div>";
    }
    out += "</div></section>";

    T.renderPage("credits.html", out);
  };
})();
