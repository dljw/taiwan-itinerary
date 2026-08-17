/* ============================================================
   render.js — turns the plain data objects in assets/data/
   into DOM. No framework, no build step.

   To change CONTENT, edit assets/data/*.js — never this file.
   To change LAYOUT, edit the templates below.
   ============================================================ */
(function () {
  "use strict";
  var T = (window.TRIP = window.TRIP || {});
  T.days = T.days || {};
  T.credits = T.credits || {};

  /* Set by renderDayBody (booklet only). Real "open" attribute on
     <details>, not a CSS override — Chrome's print pagination silently
     drops content that's only opened via CSS on a multi-page document. */
  var BOOKLET = false;

  var SEALS = ["", "壹", "貳", "參", "肆", "伍", "陸", "柒"];

  var MORE_PAGES = [
    ["food.html", { en: "Food directory", zh: "餐厅总表" }],
    ["freetime.html", { en: "Free time & alarms", zh: "自由时间与闹钟" }],
    ["transport.html", { en: "Transport", zh: "交通" }],
    ["budget.html", { en: "Budget", zh: "费用" }],
    ["practical.html", { en: "Practical", zh: "实用资讯" }],
    ["weather.html", { en: "Weather plan", zh: "天气备案" }],
    ["credits.html", { en: "Photo credits", zh: "图片来源" }],
    ["booklet.html", { en: "Full booklet (PDF)", zh: "完整手册（PDF）" }]
  ];

  /* ---------- helpers ---------------------------------------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function bi(o) {
    if (o == null) return "";
    if (typeof o === "string") return esc(o);
    return '<span class="bi"><i data-l="en">' + esc(o.en) +
           '</i><i data-l="zh">' + esc(o.zh) + "</i></span>";
  }

  function biRich(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    return '<span class="bi"><i data-l="en">' + o.en +
           '</i><i data-l="zh">' + o.zh + "</i></span>";
  }

  var IMG = "assets/images/";

  function img(path, alt, extra) {
    if (!path) return placeholder(alt);
    return '<img src="' + IMG + esc(path) + '" alt="' + esc(alt || "") +
           '" loading="lazy" data-cap="' + esc(alt || "") + '"' +
           (extra || "") + ' onerror="TRIP.imgFail(this)">';
  }

  function placeholder(label) {
    return '<div class="img-missing">' + esc(label || "photo to add") + "</div>";
  }

  T.imgFail = function (el) {
    var d = document.createElement("div");
    d.className = "img-missing";
    d.textContent = (el.getAttribute("data-cap") || "photo") + " — add photo";
    el.replaceWith(d);
  };

  function money(v) {
    if (v == null || v === "") return "";
    if (typeof v === "number") return "NT$" + v.toLocaleString();
    return esc(v);
  }

  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  function stopId(time) {
    return "stop-" + String(time || "").replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
  }

  function seal(n) {
    return SEALS[n] || String(n);
  }

  /* ---------- header / footer / more ------------------------- */

  function header(active, opts) {
    opts = opts || {};
    var m = T.meta, out = "";
    out += '<header class="site-header"><div class="wrap">';
    out += '<a class="brand" href="index.html">Taiwan <span>·</span> 台湾</a>';
    out += '<nav class="daynav" aria-label="Days">';
    out += navLink("index.html", bi({ en: "Home", zh: "首页" }), active, "home-link");
    m.days.forEach(function (d) {
      out += navLink("day" + d.n + ".html", "D" + d.n, active);
    });
    out += "</nav>";
    out += '<div class="header-actions">';
    out += '<button type="button" class="nav-more-btn" data-more-open>' +
           bi({ en: "More", zh: "更多" }) + "</button>";
    out += '<div class="langtoggle" role="group" aria-label="Language">' +
             '<button type="button" data-setlang="en">EN</button>' +
             '<button type="button" data-setlang="zh">中文</button>' +
             '<button type="button" data-setlang="both">双语</button>' +
           "</div>";
    if (opts.printBtn) {
      out += '<button type="button" class="btn-pdf" data-print>' +
             bi({ en: "Save PDF", zh: "存成 PDF" }) + "</button>";
    } else {
      out += '<a class="btn-pdf" href="booklet.html">' +
             bi({ en: "PDF", zh: "PDF" }) + "</a>";
    }
    out += "</div></div></header>";
    out += moreSheet(active);
    return out;
  }

  function moreSheet(active) {
    var out = '<div class="more-sheet" data-more-sheet hidden>';
    out += '<div class="more-panel" role="dialog" aria-label="More pages">';
    out += '<button type="button" class="more-close" data-more-close>' +
           bi({ en: "← Close", zh: "← 关闭" }) + "</button>";
    out += "<h2>" + bi({ en: "Also in this guide", zh: "手册其他页面" }) + "</h2>";
    MORE_PAGES.forEach(function (p) {
      out += '<a href="' + p[0] + '"' + (p[0] === active ? ' aria-current="page"' : "") +
             ">" + bi(p[1]) + "</a>";
    });
    out += "</div></div>";
    return out;
  }

  function navLink(href, label, active, cls) {
    var c = [];
    if (href === active) c.push("active");
    if (cls) c.push(cls);
    return '<a href="' + href + '"' + (c.length ? ' class="' + c.join(" ") + '"' : "") +
           ">" + (typeof label === "string" && label.indexOf("<") === -1 ? esc(label) : label) + "</a>";
  }

  function jumptime(d) {
    if (!d.timeline || !d.timeline.length) return "";
    var out = '<nav class="jumptime" aria-label="Jump to time"><div class="wrap">';
    out += '<span class="jt-label">' + bi({ en: "Jump", zh: "跳至" }) + "</span>";
    d.timeline.forEach(function (r) {
      out += '<a href="#' + stopId(r.time) + '">' + esc(r.time) + "</a>";
    });
    out += "</div></nav>";
    return out;
  }

  function footer(n) {
    var m = T.meta, out = '<footer class="site-footer"><div class="wrap">';
    out += "<div>" + bi(m.footer) + ' &nbsp;·&nbsp; <a href="credits.html">' +
           bi({ en: "Photo credits", zh: "图片来源" }) + "</a>" +
           ' &nbsp;·&nbsp; <a href="booklet.html">' +
           bi({ en: "Export PDF", zh: "导出 PDF" }) + "</a></div>";
    out += '<div class="pager">';
    if (n && n > 1) out += '<a href="day' + (n - 1) + '.html">← Day ' + (n - 1) + "</a>";
    if (n && n < m.days.length) out += '<a href="day' + (n + 1) + '.html">Day ' + (n + 1) + " →</a>";
    if (!n) out += '<a href="day1.html">' + bi({ en: "Start at Day 1 →", zh: "从第1天开始 →" }) + "</a>";
    out += "</div></div></footer>";
    return out;
  }

  /* ---------- section furniture ------------------------------ */

  function secHead(num, title) {
    return '<div class="sec-head"><span class="sec-num">' + esc(num) +
           "</span><h2>" + bi(title) + '</h2><span class="rule"></span></div>';
  }

  /* ---------- place matching / stop meta --------------------- */

  function findPlace(r, d, used) {
    var places = d.places || [];
    var i, p;
    if (r.placeRef) {
      for (i = 0; i < places.length; i++) {
        p = places[i];
        if (p.name && (p.name.en === r.placeRef || p.name.zh === r.placeRef || p.tw === r.placeRef)) {
          used[i] = true;
          return p;
        }
      }
    }
    if (r.maps) {
      for (i = 0; i < places.length; i++) {
        if (used[i]) continue;
        p = places[i];
        if (p.maps && p.maps === r.maps) {
          used[i] = true;
          return p;
        }
      }
    }
    return null;
  }

  function placeMeta(r, linked) {
    /* Merge inline r.place with legacy r.review and linked places[] fields. */
    var pl = r.place || {};
    var maps = r.maps || (linked && linked.maps) || pl.maps || "";
    var rating = pl.rating || (r.review && r.review.rating) || "";
    var count = pl.count || (r.review && r.review.count) || null;
    var reviewNote = pl.review || (r.review && r.review.note) || null;
    var source = pl.source || (r.review && r.review.source) || "Google";
    var address = pl.address || null;
    var hours = pl.hours || null;
    var phone = pl.phone || "";
    var asOf = pl.asOf || (r.review && r.review.asOf) || "";
    var tw = (linked && linked.tw) || pl.tw || "";

    if (!maps && !rating && !reviewNote && !address && !hours && !phone && !tw) return "";

    var out = '<div class="tl-meta">';
    out += '<div class="tl-actions">';
    if (maps) {
      out += '<a class="tl-action maps" href="' + esc(maps) + '" target="_blank" rel="noopener">' +
             bi({ en: "Maps", zh: "地图" }) + "</a>";
      out += '<a class="tl-action" href="' + esc(maps) + '" target="_blank" rel="noopener">' +
             bi({ en: "Reviews", zh: "评价" }) + "</a>";
    }
    out += "</div>";

    out += '<div class="tl-facts">';
    if (rating) {
      out += '<span><span class="lbl">' + bi({ en: "Rating", zh: "评价" }) +
             '</span><span class="rating">' + esc(rating) + "★</span>";
      if (count) out += " · " + biRich(count);
      out += " <span class=\"lbl\">" + esc(source) + "</span></span>";
    }
    if (hours) out += "<span><span class=\"lbl\">" + bi({ en: "Hours", zh: "时间" }) +
                      "</span>" + bi(hours) + "</span>";
    if (phone) out += "<span><span class=\"lbl\">" + bi({ en: "Tel", zh: "电话" }) +
                      "</span>" + esc(phone) + "</span>";
    if (address) out += "<span><span class=\"lbl\">" + bi({ en: "Address", zh: "地址" }) +
                        '</span><span class="addr">' + bi(address) + "</span></span>";
    else if (tw) out += "<span><span class=\"lbl\">" + bi({ en: "Address", zh: "地址" }) +
                        '</span><span class="addr">' + esc(tw) + "</span></span>";
    out += "</div>";

    if (reviewNote) {
      out += '<div class="tl-review">';
      out += "<p>" + biRich(reviewNote) + "</p>";
      if (asOf) out += '<div class="tl-asof">' + bi({ en: "Snapshot as of ", zh: "资料截至 " }) +
                       esc(asOf) + "</div>";
      out += "</div>";
    } else if (asOf && rating) {
      out += '<div class="tl-asof">' + bi({ en: "Snapshot as of ", zh: "资料截至 " }) +
             esc(asOf) + "</div>";
    }

    out += "</div>";
    return out;
  }

  function depthBlock(linked) {
    /* Full history/tips/extra-photo write-ups stay web-only — they'd
       roughly double the PDF (87 -> 153 pages) for content that's one
       tap away on the live site. */
    if (BOOKLET) return "";
    if (!linked) return "";
    var has = linked.history || linked.famous || linked.locals || linked.doThis || linked.tip ||
              (linked.images && linked.images.length);
    if (!has) return "";
    var out = '<details class="tl-depth"' + (BOOKLET ? " open" : "") + '>';
    out += "<summary>" + bi({ en: "The place, in depth", zh: "景点深度介绍" }) + "</summary>";
    out += gallery(linked.images, linked.name && linked.name.en);
    out += '<dl class="facts">';
    out += fact("The story", "缘起", linked.history);
    out += fact("Famous for", "招牌特色", linked.famous);
    out += fact("Locals say", "在地人说", linked.locals, "locals");
    out += fact("Do this", "必做清单", linked.doThis);
    out += fact("For our group", "我们这一团", linked.tip, "tip");
    out += "</dl></details>";
    return out;
  }

  /* ---------- day page blocks -------------------------------- */

  function hero(d) {
    var style = d.hero ? ' style="background-image:url(' + IMG + d.hero + ')"' : "";
    var out = '<div class="hero"' + style + '><div class="wrap">';
    out += '<div class="hero-kicker"><span class="day-seal" aria-hidden="true">' +
           esc(seal(d.n)) + "</span> Day " + d.n + " &nbsp;·&nbsp; " +
           (typeof d.date === "string" ? esc(d.date) : bi(d.date)) + "</div>";
    out += "<h1>" + bi(d.title) + "</h1>";
    if (d.intro) out += '<p class="hero-sub">' + bi(d.intro) + "</p>";
    if (d.chips && d.chips.length) {
      out += '<div class="hero-chips">';
      d.chips.forEach(function (c) { out += '<span class="chip">' + bi(c) + "</span>"; });
      out += "</div>";
    }
    out += "</div></div>";
    return out;
  }

  function glance(d) {
    if (!d.glance || !d.glance.length) return "";
    var out = '<section><div class="wrap"><dl class="glance">';
    d.glance.forEach(function (g) {
      out += "<div><dt>" + bi(g.k) + "</dt><dd>" + bi(g.v) + "</dd></div>";
    });
    out += "</dl></div></section>";
    return out;
  }

  function timeline(d, ctx, usedPlaces) {
    if (!d.timeline || !d.timeline.length) return "";
    var fmap = {};
    (d.food || []).forEach(function (f) { if (f.id) fmap[f.id] = f; });
    var out = '<section><div class="wrap">';
    out += secHead(pad2(++ctx.num), { en: "The day, hour by hour", zh: "当日行程时间表" });
    out += '<div class="timeline">';
    d.timeline.forEach(function (r) {
      var linked = findPlace(r, d, usedPlaces);
      out += '<div class="tl-row" id="' + stopId(r.time) + '" data-type="' + esc(r.type || "sight") + '">';
      out += '<div class="tl-time"><span class="tl-clock">' + esc(r.time) + "</span>" +
             (r.dur ? '<span class="tl-dur">' + esc(r.dur) + "</span>" : "") + "</div>";
      out += '<div class="tl-body">';
      out += '<div class="tl-main">';
      out += '<div class="tl-text">';
      if (r.cost != null && r.cost !== "") out += '<span class="tl-cost">' + money(r.cost) + "</span>";
      out += '<div class="tl-title">';
      if (r.tag) out += '<span class="tl-tag">' + esc(r.tag) + "</span>";
      out += bi(r.title);
      if (linked && linked.name && linked.name.zh) {
        out += '<span class="place-zh">' + esc(linked.name.zh) +
               (linked.tw ? " · " + esc(linked.tw.split("·")[0].trim()) : "") + "</span>";
      }
      out += "</div>";
      if (r.note) out += '<p class="tl-note">' + biRich(r.note) + "</p>";
      out += placeMeta(r, linked);
      out += depthBlock(linked);
      out += "</div>";
      if (r.img) out += '<figure class="tl-thumb">' + img(r.img, r.title && r.title.en) + "</figure>";
      out += "</div>";
      if (r.dishes && r.dishes.length) {
        var cards = r.dishes.map(function (id) { return fmap[id]; }).filter(Boolean);
        if (cards.length) {
          out += '<div class="tl-dishes"><div class="dishes">';
          cards.forEach(function (f) { out += dishCard(f); });
          out += "</div></div>";
        }
      }
      out += "</div></div>";
    });
    out += "</div></div></section>";
    return out;
  }

  function gallery(images, alt) {
    if (!images || !images.length) return "";
    var n = Math.min(images.length, 4);
    var out = '<div class="place-gallery g' + n + '">';
    images.slice(0, 4).forEach(function (p) {
      out += "<figure>" + img(p, alt) + "</figure>";
    });
    out += "</div>";
    return out;
  }

  function placesLeftover(d, ctx, usedPlaces) {
    var leftovers = (d.places || []).filter(function (_, i) { return !usedPlaces[i]; });
    if (!leftovers.length) return "";
    var out = '<section><div class="wrap">';
    out += secHead(pad2(++ctx.num), { en: "More about today", zh: "今日补充" });
    leftovers.forEach(function (p) { out += placeArticle(p); });
    out += "</div></section>";
    return out;
  }

  function placeArticle(p) {
    var out = '<article class="place">';
    out += gallery(p.images, p.name && p.name.en);
    out += '<div class="place-body"><div class="place-head">';
    out += "<h3>" + bi(p.name) + "</h3>";
    if (p.tw) out += '<span class="place-tw">' + esc(p.tw) + "</span>";
    if (p.maps) out += '<a class="place-maps" href="' + esc(p.maps) +
                       '" target="_blank" rel="noopener">' +
                       bi({ en: "Open in Maps", zh: "在地图中打开" }) + "</a>";
    out += "</div>";
    if (!BOOKLET) {
      out += '<dl class="facts">';
      out += fact("The story", "缘起", p.history);
      out += fact("Famous for", "招牌特色", p.famous);
      out += fact("Locals say", "在地人说", p.locals, "locals");
      out += fact("Do this", "必做清单", p.doThis);
      out += fact("For our group", "我们这一团", p.tip, "tip");
      out += "</dl>";
    }
    out += "</div></article>";
    return out;
  }

  function fact(labelEn, labelZh, val, cls) {
    if (!val) return "";
    return '<div class="fact ' + (cls || "") + '"><dt>' +
           bi({ en: labelEn, zh: labelZh }) + "</dt><dd>" + biRich(val) + "</dd></div>";
  }

  function dishCard(f) {
    var out = '<article class="dish">';
    out += f.img ? img(f.img, f.name && f.name.en) : placeholder((f.name && f.name.en) || "dish");
    out += '<div class="dish-body">';
    out += "<h4>" + esc(f.name.en) + "</h4>";
    out += '<div class="zhname">' + esc(f.name.zh) + "</div>";
    if (f.pinyin) out += '<div class="pinyin">' + esc(f.pinyin) + "</div>";
    if (f.taste) out += "<p>" + biRich(f.taste) + "</p>";
    if (f.order) out += '<div class="order"><b>' +
      bi({ en: "Ordering:", zh: "点餐：" }) + "</b> " + biRich(f.order) + "</div>";
    if (f.price != null) out += '<div class="dish-foot">' + money(f.price) + "</div>";
    out += "</div></article>";
    return out;
  }

  function food(d, ctx) {
    if (!d.food || !d.food.length) return "";
    var used = {};
    (d.timeline || []).forEach(function (r) {
      (r.dishes || []).forEach(function (id) { used[id] = true; });
    });
    var leftover = d.food.filter(function (f) { return !(f.id && used[f.id]); });
    if (!leftover.length) return "";
    var out = '<section><div class="wrap">';
    out += secHead(pad2(++ctx.num), { en: "Eat this here", zh: "今日必吃" });
    out += '<div class="dishes">';
    leftover.forEach(function (f) { out += dishCard(f); });
    out += "</div></div></section>";
    return out;
  }

  function logistics(d, ctx) {
    var has = (d.verify && d.verify.length) || d.logistics || (d.taxi && d.taxi.length);
    if (!has) return "";
    var out = '<section><div class="wrap">';
    out += secHead(pad2(++ctx.num), { en: "Before you go", zh: "出发前须知" });

    (d.verify || []).forEach(function (v) {
      out += '<div class="box verify"><h4>' + bi(v.title) + "</h4><p>" + biRich(v.body) + "</p></div>";
    });

    if (d.logistics) {
      if (d.logistics.book && d.logistics.book.length) {
        out += '<div class="box"><h4>' + bi({ en: "Book / confirm ahead", zh: "需提前预订确认" }) + "</h4><ul>";
        d.logistics.book.forEach(function (b) { out += "<li>" + biRich(b) + "</li>"; });
        out += "</ul></div>";
      }
      if (d.logistics.notes && d.logistics.notes.length) {
        out += '<div class="box"><h4>' + bi({ en: "Good to know", zh: "小提醒" }) + "</h4><ul>";
        d.logistics.notes.forEach(function (b) { out += "<li>" + biRich(b) + "</li>"; });
        out += "</ul></div>";
      }
    }

    (d.taxi || []).forEach(function (t) {
      out += '<div class="box taxi"><h4>' +
             bi({ en: "Show this to the driver", zh: "给司机看（繁体）" }) + "</h4>";
      out += '<div class="tw">' + esc(t.tw) + "</div>";
      out += '<div class="say">' + esc(t.say) + "</div></div>";
    });

    out += "</div></section>";
    return out;
  }

  /* ---------- public renderers ------------------------------- */

  T.renderDayPage = function (n, opts) {
    var d = T.days[n];
    if (!d) { document.body.innerHTML = "<p>Missing data for day " + n + "</p>"; return; }
    document.title = "Day " + n + " · " + d.title.en + " — Taiwan Family Trip";
    var ctx = { num: 0 };
    var usedPlaces = {};
    var body = jumptime(d) + hero(d) + glance(d) + timeline(d, ctx, usedPlaces) +
               placesLeftover(d, ctx, usedPlaces) + food(d, ctx) + logistics(d, ctx);
    document.getElementById("app").innerHTML =
      header("day" + n + ".html", opts) + body + footer(n);
  };

  T.renderDayBody = function (n) {
    /* Used by booklet — body only, no chrome. */
    BOOKLET = true;
    var d = T.days[n];
    if (!d) return "<p>Missing day " + n + "</p>";
    var ctx = { num: 0 };
    var usedPlaces = {};
    return '<div class="day-break" id="booklet-day-' + n + '">' +
           hero(d) + glance(d) + timeline(d, ctx, usedPlaces) +
           placesLeftover(d, ctx, usedPlaces) + food(d, ctx) + logistics(d, ctx) +
           "</div>";
  };

  T.renderPage = function (activeHref, bodyHtml, opts) {
    document.getElementById("app").innerHTML =
      header(activeHref, opts) + bodyHtml + footer(0);
  };

  T.h = {
    esc: esc, bi: bi, biRich: biRich, img: img, money: money,
    secHead: secHead, placeholder: placeholder, seal: seal, IMG: IMG
  };
})();
