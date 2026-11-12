/* Site behavior: nav toggle, theme toggle, blog rendering & filtering. */
(function () {
  "use strict";

  var THEMES = window.THEMES || {};
  var POSTS = (window.POSTS || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtDate(iso) {
    var d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }
  function weekday(iso) {
    return new Date(iso + "T12:00:00").toLocaleDateString("en-US", { weekday: "long" });
  }
  function tag(theme) {
    var t = THEMES[theme] || { label: theme };
    return '<a class="tag" data-theme="' + esc(theme) + '" href="blog.html?theme=' + esc(theme) + '">' + esc(t.label) + "</a>";
  }
  function postUrl(p) { return "post.html?p=" + encodeURIComponent(p.slug); }

  /* ---------- Mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Light / dark toggle ---------- */
  var root = document.documentElement;
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
  var themeBtn = document.querySelector(".theme-btn");
  function isDark() {
    var a = root.getAttribute("data-theme");
    if (a) return a === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function syncBtn() { if (themeBtn) themeBtn.textContent = isDark() ? "Light mode" : "Dark mode"; }
  if (themeBtn) {
    syncBtn();
    themeBtn.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncBtn();
    });
  }

  /* ---------- Footer year ---------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Featured posts (Home) ---------- */
  var featuredEl = document.getElementById("featured-posts");
  if (featuredEl) {
    var featured = POSTS.filter(function (p) { return p.featured; });
    if (!featured.length) featured = POSTS;
    featuredEl.innerHTML = featured.slice(0, 3).map(function (p) {
      return '<article class="post-card">' +
        '<div class="meta">' + tag(p.theme) + "<span>" + fmtDate(p.date) + "</span></div>" +
        '<h3><a href="' + postUrl(p) + '">' + esc(p.title) + "</a></h3>" +
        "<p>" + esc(p.excerpt) + "</p>" +
        '<div class="meta"><span>' + p.minutes + " min read</span></div>" +
        "</article>";
    }).join("");
  }

  /* ---------- Blog list + filters ---------- */
  var listEl = document.getElementById("post-list");
  var filtersEl = document.getElementById("filters");
  if (listEl && filtersEl) {
    var keys = Object.keys(THEMES);
    var chips = [{ key: "all", label: "All posts", day: "" }].concat(keys.map(function (k) {
      return { key: k, label: THEMES[k].label, day: THEMES[k].day };
    }));
    filtersEl.innerHTML = chips.map(function (c) {
      return '<li><button type="button" class="chip" data-theme="' + c.key + '" aria-pressed="false">' +
        '<span class="dot" aria-hidden="true"></span>' +
        (c.day ? '<span class="d">' + c.day + "</span>" : "") +
        esc(c.label) + "</button></li>";
    }).join("");

    var status = document.getElementById("filter-status");
    function render(active) {
      var shown = active === "all" ? POSTS : POSTS.filter(function (p) { return p.theme === active; });
      filtersEl.querySelectorAll(".chip").forEach(function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-theme") === active ? "true" : "false");
      });
      listEl.innerHTML = shown.length ? shown.map(function (p) {
        return '<li class="post-row">' +
          '<div class="when"><strong>' + weekday(p.date) + "</strong>" + fmtDate(p.date) + "</div>" +
          "<div>" + tag(p.theme) +
          '<h3><a href="' + postUrl(p) + '">' + esc(p.title) + "</a></h3>" +
          "<p>" + esc(p.excerpt) + "</p></div></li>";
      }).join("") : '<li class="post-row"><div></div><p class="muted">No posts in this theme yet — check back on ' +
        weekday2(active) + ".</p></li>";
      if (status) {
        status.textContent = active === "all"
          ? "Showing all " + shown.length + " posts"
          : "Showing " + shown.length + " " + (shown.length === 1 ? "post" : "posts") + " in " + THEMES[active].label;
      }
    }
    function weekday2(k) {
      var map = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };
      return THEMES[k] ? map[THEMES[k].day] : "a future day";
    }

    var params = new URLSearchParams(location.search);
    var initial = params.get("theme");
    if (!THEMES[initial]) initial = "all";
    render(initial);

    filtersEl.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      var k = b.getAttribute("data-theme");
      render(k);
      var url = k === "all" ? "blog.html" : "blog.html?theme=" + k;
      history.replaceState(null, "", url);
    });
  }

  /* ---------- Single post ---------- */
  var articleEl = document.getElementById("article");
  if (articleEl) {
    var slug = new URLSearchParams(location.search).get("p");
    var idx = -1;
    POSTS.forEach(function (p, i) { if (p.slug === slug) idx = i; });
    if (idx === -1) {
      articleEl.innerHTML = '<header class="article-head"><p class="eyebrow">Not found</p><h1>That post isn’t here.</h1>' +
        '<p class="lede">It may have moved. <a href="blog.html">Browse all posts →</a></p></header>';
    } else {
      var p = POSTS[idx];
      var newer = POSTS[idx - 1], older = POSTS[idx + 1];
      document.title = p.title + " · Maverick EdLab";
      articleEl.innerHTML =
        '<header class="article-head">' +
          '<div class="meta">' + tag(p.theme) + "<span>" + weekday(p.date) + ", " + fmtDate(p.date) + "</span><span>· " + p.minutes + " min read</span></div>" +
          '<h1 style="margin-top:18px">' + esc(p.title) + "</h1>" +
          '<p class="lede">' + esc(p.excerpt) + "</p>" +
        "</header>" +
        '<div class="article-body">' + p.body +
          '<nav class="article-foot" aria-label="More posts">' +
            (older ? '<a href="' + postUrl(older) + '">← ' + esc(older.title) + "</a>" : "<span></span>") +
            (newer ? '<a href="' + postUrl(newer) + '">' + esc(newer.title) + " →</a>" : '<a href="blog.html">All posts →</a>') +
          "</nav>" +
        "</div>";
    }
  }
})();
