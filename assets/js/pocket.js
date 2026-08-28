/* ============================================================
   pocket.js — the 10-page print edition.

   Reads the same data files as the full booklet, but renders a
   condensed, image-free layout: 1 overview page, 7 day pages
   (one page each), 1 budget page, 1 preparation page.

   Nothing here is authored except the UI labels in STR and the
   packing list — change assets/data/*.js and this follows.

   Language comes from <html data-lang>: "en" or "zh".
   ============================================================ */
(function () {
  var T = window.TRIP;
  var GROUP = 12;
  var LANG = document.documentElement.dataset.lang === "zh" ? "zh" : "en";
  var ZH = LANG === "zh";

  /* ---------- UI labels -------------------------------------- */

  var STR = {
    kicker:     { en: "Pocket itinerary",        zh: "随身行程" },
    glanceHead: { en: "The week at a glance",    zh: "一周行程速览" },
    thDate:     { en: "Date",                    zh: "日期" },
    thDay:      { en: "The day",                 zh: "当日行程" },
    thGo:       { en: "Getting there",           zh: "交通" },
    thPP:       { en: "Per person",              zh: "每人" },
    thTwelve:   { en: "×12 people",              zh: "十二人合计" },
    glanceFoot: { en: "Food, activities and fares — flights, hotel and the mid-bus hire sit outside this",
                  zh: "餐饮、活动与车资 —— 不含机票、住宿与中巴包车" },
    factsHead:  { en: "Things that are true all week", zh: "全程通则" },
    day:        { en: "Day ",                    zh: "第" },
    dayAfter:   { en: "",                        zh: "天" },
    bookAhead:  { en: "Book ahead:",             zh: "需预订：" },
    dayTotal:   { en: "Day total, per person ",  zh: "当日每人合计 " },

    page:       { en: "Page ",                   zh: "第" },
    pageAfter:  { en: "",                        zh: "页" },
    budgetH1:   { en: "What the week costs",     zh: "这一周的花费" },
    tripTotal:  { en: "Trip total — food and activities, no transport",
                  zh: "全程合计 —— 餐饮与活动，不含交通" },
    cashLine:   { en: "Cash a card will not cover, per person",
                  zh: "刷不了卡的现金，每人" },
    sgdLine:    { en: "Change in Singapore before you fly",
                  zh: "出发前在新加坡兑换" },
    included:   { en: "Counted above",           zh: "已包含" },
    excluded:   { en: "Budget separately",       zh: "需另行估算" },

    prepH1:     { en: "What to prepare",         zh: "出发前的准备" },
    prepLede:   { en: "Everything that has to happen before anyone gets on a plane, plus what each person carries once you land.",
                  zh: "上飞机前必须办妥的每一件事，以及落地后每个人随身要带的东西。" },
    bookHead:   { en: "Book before you fly",     zh: "出发前先订" },
    packHead:   { en: "Everyone packs",          zh: "人人必带" },
    typhoonHead:{ en: "If a typhoon is named",   zh: "若台风被命名" },
    endNote:    { en: " · the full booklet, with photos, reviews and Chinese, stays at booklet.html",
                  zh: " · 含照片与评价的完整手册见 booklet.html" }
  };

  var PACK = [
    { en: "Passport, and a photo of it on your phone",
      zh: "护照，并在手机里存一张照片" },
    { en: "An EasyCard — buy eleven at the airport MRT counter on arrival, name written on each",
      zh: "悠游卡——抵达时在机场捷运柜台一次买十一张，每张写上名字" },
    { en: "A folding umbrella, for sun as much as rain, plus a poncho for Jiufen and Shifen",
      zh: "折叠伞，遮阳跟挡雨一样重要；九份、十分还要带轻便雨衣" },
    { en: "Shoes you can walk all day in — Jiufen is stairs, Shifen is train tracks",
      zh: "能走一整天的鞋——九份全是阶梯，十分走的是铁道" },
    { en: "About NT$2,500 / S$100 each in small notes; night markets, old streets and lanterns are cash only",
      zh: "每人约 NT$2,500／S$100 小钞；夜市、老街和天灯只收现金" },
    { en: "Power bank, charging cable, and a Type-A plug (110V, same as home for some)",
      zh: "行动电源、充电线，以及扁头插座转接（台湾是110V）" },
    { en: "Sunscreen, a hat, a refillable water bottle — it is 30–34°C and humid",
      zh: "防晒、帽子、可重复装的水壶——气温30–34°C且潮湿" },
    { en: "Any regular medicine, plus rehydration salts and plasters for the walking days",
      zh: "常备药，另备电解质冲剂与OK绷，走路的日子用得上" },
    { en: "Travel insurance that covers weather delays — it is the tail of typhoon season",
      zh: "涵盖天气延误的旅游保险——正值台风季尾声" },
    { en: "Stroller rain cover, if the three-year-old's stroller is coming",
      zh: "推车防雨罩，若三岁的娃娃车会带出门" }
  ];

  function L(k) { return STR[k][LANG]; }

  /* ---------- helpers ---------------------------------------- */

  function txt(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[LANG] || v.en || "";
  }
  function strip(v) {
    return txt(v).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  /* First sentence, capped — enough to be useful, short enough to fit.
     Caps are written for English; a Chinese character carries roughly
     twice the information, so the same budget of page is half the chars. */
  function gist(v, cap) {
    var s = strip(v);
    if (!s) return "";
    cap = Math.round((cap || 150) * (ZH ? 0.5 : 1));
    if (s.length <= cap) return s;
    var cut = s.slice(0, cap + 1), stop;
    if (ZH) {
      stop = Math.max(cut.lastIndexOf("。"), cut.lastIndexOf("；"), cut.lastIndexOf("——"));
      if (stop > cap * 0.45) return s.slice(0, stop + 1).replace(/——$/, "").trim();
      return s.slice(0, cap).trim() + "…";
    }
    stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("— "), cut.lastIndexOf("; "));
    if (stop > cap * 0.45) return s.slice(0, stop).trim() + ".";
    var sp = cut.lastIndexOf(" ");
    return s.slice(0, sp > 0 ? sp : cap).trim() + "…";
  }
  function nt(n) {
    return "NT$" + Number(n).toLocaleString("en-US");
  }
  function money(min, max) {
    return min === max ? nt(min) : nt(min) + "–" + nt(max);
  }

  /* Food/activities only, plus cash that will not take a card —
     same rules as the full budget page. */
  function daySpend(d) {
    var food = 0, cash = 0, transit = 0, mixed = 0;
    (d.timeline || []).forEach(function (r) {
      if (typeof r.cost !== "number" || r.altGroup) return;
      if (r.type === "travel") transit += r.cost;
      else food += r.cost;
      if (r.pay === "cash") cash += r.cost;
      if (r.pay === "mixed") mixed += r.cost;
    });
    return { food: food, cash: cash, transit: transit, mixed: mixed };
  }

  function dayCost(d) {
    var s = daySpend(d);
    if (d.budget) return { min: d.budget.min, max: d.budget.max, note: d.budget.note };
    var total = s.food + s.transit;
    return { min: total, max: total };
  }

  function sgd(ntd) {
    var rate = (T.budgetNotes && T.budgetNotes.fx && T.budgetNotes.fx.ntdPerSgd) || 25;
    return "S$" + Math.round(ntd / rate).toLocaleString("en-US");
  }

  /* Matched on the English date labels ("Sat 5 Sep"), which are the only
     ones the two data files phrase identically — the zh `when` strings use
     a different date format, so matching in the display language misses. */
  function bookingsFor(dateField) {
    var key = (dateField && dateField.en || "").trim();
    return (T.practical.bookings || []).filter(function (b) {
      return ((b.when && b.when.en) || "").indexOf(key) === 0;
    });
  }

  function page(cls, inner) {
    return '<section class="page' + (cls ? " " + cls : "") + '">' + inner + "</section>";
  }

  /* ---------- page 1 · overview ------------------------------ */

  function overview() {
    var m = T.meta, o = "";

    o += '<header class="cover">' +
         '<div class="kicker">' + esc(L("kicker")) + "</div>" +
         "<h1>" + esc(strip(m.title)) + "</h1>" +
         '<p class="sub">' + esc(strip(m.subtitle)) + "</p>" +
         '<p class="lede">' + esc(strip(m.lede)) + "</p>" +
         "</header>";

    o += '<h2 class="sec">' + esc(L("glanceHead")) + "</h2>";
    o += '<table class="glance"><thead><tr>' +
         "<th>#</th><th>" + esc(L("thDate")) + "</th><th>" + esc(L("thDay")) +
         "</th><th>" + esc(L("thGo")) + "</th>" +
         '<th class="num">' + esc(L("thPP")) + "</th></tr></thead><tbody>";
    var tmin = 0, tmax = 0;
    m.days.forEach(function (info) {
      var d = T.days[info.n], c = d ? dayCost(d) : { min: 0, max: 0 };
      tmin += c.min; tmax += c.max;
      o += "<tr><td class='n'>" + info.n + "</td>" +
           "<td class='nowrap'>" + esc(strip(info.date)) + "</td>" +
           "<td><b>" + esc(strip(info.title)) + "</b><span class='thin'>" +
           (ZH ? "　" : " — ") + esc(gist(info.blurb, 95)) + "</span></td>" +
           "<td class='nowrap thin'>" + esc(strip(info.transport)) + "</td>" +
           "<td class='num'>" + money(c.min, c.max) + "</td></tr>";
    });
    o += "</tbody><tfoot><tr><td colspan='4'>" + esc(L("glanceFoot")) + "</td>" +
         "<td class='num'>" + money(tmin, tmax) + "</td></tr></tfoot></table>";

    o += '<h2 class="sec">' + esc(L("factsHead")) + "</h2>";
    o += '<dl class="facts">';
    m.facts.forEach(function (f) {
      o += "<dt>" + esc(strip(f.k)) + "</dt><dd>" + esc(gist(f.v, 260)) + "</dd>";
    });
    o += "</dl>";

    return page("p-cover", o);
  }

  /* ---------- pages 2–8 · one per day ------------------------ */

  function dayPage(info) {
    var d = T.days[info.n];
    if (!d) return "";
    var o = "", c = dayCost(d);

    o += '<header class="dayhead">' +
         '<div class="daytag">' + esc(L("day")) + info.n + esc(L("dayAfter")) +
         "<span>" + esc(strip(info.date)) + "</span></div>" +
         "<h1>" + esc(strip(info.title)) + "</h1>" +
         '<p class="lede">' + esc(strip(info.blurb)) + "</p>" +
         "</header>";

    /* the day's vitals on one line */
    var bits = (d.glance || []).map(function (g) {
      return "<span><b>" + esc(strip(g.k)) + "</b> " + esc(strip(g.v)) + "</span>";
    });
    if (bits.length) o += '<div class="strip">' + bits.join("") + "</div>";

    o += '<table class="tl"><tbody>';
    (d.timeline || []).forEach(function (r) {
      var note = gist(r.note, 165);
      o += "<tr" + (r.type ? " class='t-" + r.type + "'" : "") + ">" +
           "<td class='time'>" + esc(r.time || "") +
           (r.dur ? "<span class='dur'>" + esc(r.dur) + "</span>" : "") + "</td>" +
           "<td class='what'><b>" + esc(strip(r.title)) + "</b>" +
           (note ? "<span class='note'>" + esc(note) + "</span>" : "") + "</td>" +
           "<td class='num'>" + (typeof r.cost === "number" ? nt(r.cost) : "") + "</td>" +
           "</tr>";
    });
    o += "</tbody></table>";

    var bk = bookingsFor(info.date);
    var foot = "";
    if (bk.length) {
      foot += "<b>" + esc(L("bookAhead")) + "</b> " + bk.map(function (b) {
        return esc(strip(b.what));
      }).join(" · ");
    }
    foot += "<span class='cost'>" + esc(L("dayTotal")) + money(c.min, c.max) +
            (c.note ? (ZH ? "　" : " — ") + esc(gist(c.note, 90)) : "") + "</span>";
    o += '<footer class="dayfoot">' + foot + "</footer>";

    return page("p-day", o);
  }

  /* ---------- page 9 · budget -------------------------------- */

  function budget() {
    var o = "", food = 0, cash = 0, mixed = 0, rows = "";
    var extras = (T.budgetNotes && T.budgetNotes.extras) || [];
    var buffer = (T.budgetNotes && T.budgetNotes.buffer && T.budgetNotes.buffer.perPerson) || 300;

    T.meta.days.forEach(function (info) {
      var d = T.days[info.n];
      if (!d) return;
      var s = daySpend(d);
      var extraSum = 0;
      extras.forEach(function (e) { if (e.day === info.n) extraSum += e.cost; });
      food += s.food + extraSum;
      cash += s.cash;
      mixed += s.mixed;
      extras.forEach(function (e) {
        if (e.day === info.n && e.pay === "cash") cash += e.cost;
      });
      rows += "<tr><td class='n'>" + info.n + "</td>" +
              "<td class='nowrap'>" + esc(strip(info.date)) + "</td>" +
              "<td>" + esc(strip(info.title)) + "</td>" +
              "<td class='num'>" + nt(s.food + extraSum) + "</td>" +
              "<td class='num'>" + nt((s.food + extraSum) * GROUP) + "</td></tr>";
    });

    var changePp = Math.ceil((cash + mixed + buffer) / 100) * 100;

    o += '<header class="pagehead"><div class="kicker">' + esc(L("page")) + "9" + esc(L("pageAfter")) +
         "</div><h1>" + esc(L("budgetH1")) + "</h1>" +
         '<p class="lede">' + esc(gist(T.budgetNotes.warning, 300)) + "</p></header>";

    o += '<table class="glance"><thead><tr><th>#</th><th>' + esc(L("thDate")) + "</th><th>" +
         esc(L("thDay")) + "</th>" +
         "<th class='num'>" + esc(L("thPP")) + "</th><th class='num'>" + esc(L("thTwelve")) +
         "</th></tr></thead><tbody>" +
         rows + "</tbody><tfoot>" +
         "<tr><td colspan='3'>" + esc(L("tripTotal")) + "</td>" +
         "<td class='num'>" + nt(food) + "</td>" +
         "<td class='num'>" + nt(food * GROUP) + "</td></tr>" +
         "<tr><td colspan='3'>" + esc(L("cashLine")) + "</td>" +
         "<td class='num'>" + nt(cash) + "</td>" +
         "<td class='num'>" + nt(cash * GROUP) + "</td></tr>" +
         "<tr><td colspan='3'>" + esc(L("sgdLine")) + "</td>" +
         "<td class='num'>" + sgd(changePp) + "</td>" +
         "<td class='num'>" + sgd(changePp * GROUP) + "</td></tr>" +
         "</tfoot></table>";

    o += '<div class="cols">';
    o += "<div><h2 class='sec'>" + esc(L("included")) + "</h2><ul class='tight'>";
    T.budgetNotes.included.forEach(function (i) {
      o += "<li>" + esc(gist(i, 170)) + "</li>";
    });
    o += "</ul></div>";
    o += "<div><h2 class='sec'>" + esc(L("excluded")) + "</h2><ul class='tight'>";
    T.budgetNotes.excluded.forEach(function (i) {
      o += "<li>" + esc(gist(i, 170)) + "</li>";
    });
    o += "</ul></div>";
    o += "</div>";

    return page("p-budget", o);
  }

  /* ---------- page 10 · what to prepare ---------------------- */

  function prepare() {
    var o = "";

    o += '<header class="pagehead"><div class="kicker">' + esc(L("page")) + "10" + esc(L("pageAfter")) +
         "</div><h1>" + esc(L("prepH1")) + "</h1>" +
         '<p class="lede">' + esc(L("prepLede")) + "</p></header>";

    o += '<h2 class="sec">' + esc(L("bookHead")) + "</h2>";
    o += '<table class="book"><tbody>';
    (T.practical.bookings || []).forEach(function (b) {
      o += "<tr><td class='box'>☐</td>" +
           "<td class='what'>" + esc(strip(b.what)) + "</td>" +
           "<td class='when nowrap'>" + esc(strip(b.when)) + "</td></tr>";
    });
    o += "</tbody></table>";

    o += '<div class="cols">';

    o += "<div><h2 class='sec'>" + esc(L("packHead")) + "</h2><ul class='tight'>";
    PACK.forEach(function (p) { o += "<li>" + esc(strip(p)) + "</li>"; });
    o += "</ul></div>";

    var weather = (T.weather && T.weather.prep ? T.weather.prep : []).slice(0, 4);
    o += "<div><h2 class='sec'>" + esc(L("typhoonHead")) + "</h2><ul class='tight'>";
    weather.forEach(function (p) { o += "<li>" + esc(gist(p, 165)) + "</li>"; });
    o += "</ul>";

    /* matched on the English key so it survives a language switch */
    (T.practical.notes || []).forEach(function (g) {
      if (!/^Emergency/.test(g.group && g.group.en || "")) return;
      o += "<h2 class='sec'>" + esc(strip(g.group)) + "</h2><ul class='tight'>";
      g.items.forEach(function (i) { o += "<li>" + esc(gist(i, 140)) + "</li>"; });
      o += "</ul>";
    });
    o += "</div></div>";

    o += '<footer class="end">' + esc(strip(T.meta.footer)) + esc(L("endNote")) + "</footer>";

    return page("p-prep", o);
  }

  /* ---------- render ----------------------------------------- */

  var html = overview();
  T.meta.days.forEach(function (info) { html += dayPage(info); });
  html += budget();
  html += prepare();

  document.getElementById("app").innerHTML = html;
})();
