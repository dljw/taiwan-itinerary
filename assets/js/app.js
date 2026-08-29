/* ============================================================
   app.js — language toggle, lightbox, more sheet, print.
   Call TRIP.init() after the page has been rendered.
   ============================================================ */
(function () {
  "use strict";
  var T = (window.TRIP = window.TRIP || {});
  var KEY = "trip-lang";

  function setLang(lang) {
    if (["en", "zh", "both"].indexOf(lang) === -1) lang = "en";
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hans" : "en");
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    document.querySelectorAll("[data-setlang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-setlang") === lang));
    });
  }
  T.setLang = setLang;

  T.currentLang = function () {
    var q = new URLSearchParams(location.search).get("lang");
    if (q) return q;
    try { return localStorage.getItem(KEY) || "en"; } catch (e) { return "en"; }
  };

  function initLightbox() {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = '<img alt=""><div class="cap"></div>';
    document.body.appendChild(box);
    var im = box.querySelector("img"), cap = box.querySelector(".cap");

    document.addEventListener("click", function (e) {
      var t = e.target;
      if (t.tagName === "IMG" && t.closest(".place-gallery, .dish, .tl-thumb")) {
        im.src = t.src;
        cap.textContent = t.getAttribute("data-cap") || t.alt || "";
        box.classList.add("open");
        document.body.style.overflow = "hidden";
      } else if (box.classList.contains("open")) {
        close();
      }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    function close() {
      box.classList.remove("open");
      document.body.style.overflow = "";
      im.removeAttribute("src");
    }
  }

  function initMoreSheet() {
    var sheet = document.querySelector("[data-more-sheet]");
    if (!sheet) return;
    sheet.removeAttribute("hidden");
    var opener = null;

    function setExpanded(v) {
      document.querySelectorAll("[data-more-open]").forEach(function (b) {
        b.setAttribute("aria-expanded", String(v));
      });
    }
    function open(btn) {
      opener = btn || null;
      sheet.classList.add("open");
      setExpanded(true);
      document.body.style.overflow = "hidden";
      var first = sheet.querySelector("[data-more-close]");
      if (first) first.focus();
    }
    function close() {
      if (!sheet.classList.contains("open")) return;
      sheet.classList.remove("open");
      setExpanded(false);
      document.body.style.overflow = "";
      if (opener) { opener.focus(); opener = null; }
    }

    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-more-open]");
      if (b) { open(b); return; }
      if (e.target.closest("[data-more-close]")) { close(); return; }
      if (sheet.classList.contains("open") && e.target === sheet) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { close(); return; }
      /* Keep Tab inside the panel — the sheet claims aria-modal. */
      if (e.key !== "Tab" || !sheet.classList.contains("open")) return;
      var f = sheet.querySelectorAll("a[href], button:not([disabled])");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    });
  }

  /* The header stacks into two rows on phones, so its height is not a
     constant. Feed the real value back into --header-h, which the
     jump-time bar sticks below and scroll-padding-top is derived from. */
  function initHeaderMetrics() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var last = 0;
    function sync() {
      var h = Math.round(header.getBoundingClientRect().height);
      if (!h || h === last) return;   /* also stops ResizeObserver churn */
      last = h;
      document.documentElement.style.setProperty("--header-h", h + "px");
    }
    sync();
    window.addEventListener("resize", sync);
    window.addEventListener("orientationchange", sync);
    if (window.ResizeObserver) new ResizeObserver(sync).observe(header);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
  }

  /* Day strip: bring the current day into view, and flag when there is
     more to scroll so the CSS can fade the right edge. */
  function initDayNav() {
    var nav = document.querySelector("[data-daynav]");
    if (!nav) return;

    function mark() {
      var more = nav.scrollLeft + nav.clientWidth < nav.scrollWidth - 4;
      nav.setAttribute("data-scroll", more ? "more" : "end");
    }
    var active = nav.querySelector("a.active");
    if (active) {
      /* Centre it, then clamp — clamping last keeps Home fully visible
         on Day 1 and the last day flush at the far end. */
      var left = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
      nav.scrollLeft = Math.max(0, Math.min(left, nav.scrollWidth - nav.clientWidth));
    }
    mark();
    nav.addEventListener("scroll", mark, { passive: true });
    window.addEventListener("resize", mark);
  }

  function initPrint() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-print]");
      if (b) {
        e.preventDefault();
        window.print();
      }
    });
  }

  T.init = function () {
    setLang(T.currentLang());
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-setlang]");
      if (b) setLang(b.getAttribute("data-setlang"));
    });
    initLightbox();
    initMoreSheet();
    initHeaderMetrics();
    initDayNav();
    initPrint();
  };
})();
