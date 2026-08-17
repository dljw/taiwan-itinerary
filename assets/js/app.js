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

    function open() {
      sheet.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      sheet.classList.remove("open");
      document.body.style.overflow = "";
    }

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-more-open]")) { open(); return; }
      if (e.target.closest("[data-more-close]")) { close(); return; }
      if (sheet.classList.contains("open") && e.target === sheet) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && sheet.classList.contains("open")) close();
    });
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
    initPrint();
  };
})();
