/* ============================================================
   Engrenagem do site. Monta cabeçalho, rodapé, a grade da home
   e as páginas de projeto a partir do arquivo projects.js.
   Você não precisa mexer aqui.
   ============================================================ */

(function () {
  "use strict";

  var YEAR = 2026;

  /* ---------- cabeçalho e rodapé ---------- */
  function header(active) {
    return (
      '<header class="site-header"><div class="container bar">' +
        '<a class="brand" href="index.html"><strong>felipe sauma</strong>' +
        '<span class="muted"> | senior creative / cw</span></a>' +
        '<button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">' +
          '<span></span><span></span><span></span></button>' +
        '<nav class="nav">' +
          link("index.html", "trabalhos", active) +
          link("contato.html", "contato", active) +
          '<a href="https://laforismos.com.br" target="_blank" rel="noopener">laforismos</a>' +
        '</nav>' +
      '</div></header>'
    );
  }

  function link(href, label, active) {
    var cls = (active === label) ? ' class="active"' : "";
    return '<a href="' + href + '"' + cls + ">" + label + "</a>";
  }

  function footer() {
    return (
      '<footer class="site-footer"><div class="container">' +
        "<p>© " + YEAR + " Felipe Sauma. Todos os direitos reservados.</p>" +
      "</div></footer>"
    );
  }

  function mountChrome(active) {
    var h = document.getElementById("site-header");
    if (h) h.innerHTML = header(active);
    var f = document.getElementById("site-footer");
    if (f) f.innerHTML = footer();

    // menu do celular
    var btn = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".nav");
    if (btn && nav) {
      btn.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function findProject(slug) {
    if (typeof PROJECTS === "undefined") return null;
    for (var i = 0; i < PROJECTS.length; i++) {
      if (PROJECTS[i].slug === slug) return PROJECTS[i];
    }
    return null;
  }

  function getParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&]+)").exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  // extrai o ID de um link do YouTube (watch?v=, youtu.be/, /embed/)
  function ytId(url) {
    var m = String(url).match(/(?:v=|youtu\.be\/|\/embed\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : null;
  }

  /* ---------- página inicial (grade) ---------- */
  function renderHome() {
    var el = document.getElementById("work-grid");
    if (!el || typeof PROJECTS === "undefined") return;
    var html = "";
    for (var i = 0; i < PROJECTS.length; i++) {
      var p = PROJECTS[i];
      html +=
        '<a class="card" href="projeto.html?p=' + encodeURIComponent(p.slug) + '">' +
          '<img src="' + esc(p.thumb) + '" alt="' + esc(p.title) + '" loading="' +
            (i < 6 ? "eager" : "lazy") + '" width="640" height="360">' +
          '<div class="overlay"><div class="label"><h3>' + esc(p.title) + "</h3></div></div>" +
        "</a>";
    }
    el.innerHTML = html;
  }

  /* ---------- página de um projeto ---------- */
  function renderProject() {
    var el = document.getElementById("project");
    if (!el) return;

    var slug = getParam("p");
    var p = slug ? findProject(slug) : null;

    if (!p) {
      document.title = "felipe sauma";
      el.innerHTML =
        '<a class="back-link" href="index.html">voltar</a>' +
        "<h1>projeto não encontrado</h1>" +
        '<p class="muted">Esse projeto não existe ou foi removido.</p>';
      return;
    }

    document.title = p.title;

    // Página de projeto enxuta: só o botão "voltar" e o(s) vídeo(s).
    var html = '<a class="back-link" href="index.html">voltar</a>';

    if (p.videos && p.videos.length) {
      for (var v = 0; v < p.videos.length; v++) {
        html +=
          '<div class="video-wrap"><iframe src="' + esc(p.videos[v]) + '" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" ' +
          'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ' +
          'loading="lazy" title="' + esc(p.title) + ' - vídeo ' + (v + 1) + '"></iframe></div>';
      }
    }

    // Vídeos que estão no YouTube (sem permissão de incorporar):
    // miniatura clicável que abre o vídeo no YouTube em nova aba.
    if (p.youtube && p.youtube.length) {
      for (var y = 0; y < p.youtube.length; y++) {
        var id = ytId(p.youtube[y]);
        if (!id) continue;
        var thumb = "https://img.youtube.com/vi/" + id + "/maxresdefault.jpg";
        var fallback = "https://img.youtube.com/vi/" + id + "/mqdefault.jpg";
        html +=
          '<a class="video-wrap yt-card" href="' + esc(p.youtube[y]) + '" ' +
          'target="_blank" rel="noopener" aria-label="Assistir no YouTube">' +
            '<img src="' + thumb + '" onerror="this.onerror=null;this.src=\'' + fallback + '\'" ' +
            'alt="' + esc(p.title) + ' - assistir no YouTube" loading="lazy">' +
            '<span class="yt-play" aria-hidden="true">' +
              '<svg viewBox="0 0 68 48"><path class="yt-bg" d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.3.3 34 .3 34 .3s-21.3 0-26.6 1.4c-2.9.8-5.1 3.1-5.9 6C.1 13 .1 24 .1 24s0 11 1.4 16.3c.8 2.9 3 5.2 5.9 6C12.7 47.7 34 47.7 34 47.7s21.3 0 26.6-1.4c2.9-.8 5.1-3.1 5.9-6C67.9 35 67.9 24 67.9 24s0-11-1.4-16.3z"/>' +
              '<path class="yt-tri" d="M27 34V14l18 10z"/></svg>' +
            '</span>' +
          '</a>';
      }
    }

    el.innerHTML = html;
  }

  /* ---------- inicialização ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page") || "";
    mountChrome(page);
    renderHome();
    renderProject();
  });
})();
