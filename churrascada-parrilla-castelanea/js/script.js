/* ==========================================================================
   CHURRASCADA PARRILLA CASTELANEA — INTERFACE
   Lê os dados de data.js e renderiza a página + interações.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  /* ---------- Navegação (header + footer) ---------- */
  function renderNav() {
    const navList = document.getElementById("navList");
    const footerNav = document.getElementById("footerNav");
    NAV_LINKS.forEach(link => {
      const li = el("li");
      const a = el("a", null, link.label);
      a.href = link.href;
      li.appendChild(a);
      navList.appendChild(li);

      const fli = el("li");
      const fa = el("a", null, link.label);
      fa.href = link.href;
      fli.appendChild(fa);
      footerNav.appendChild(fli);
    });
  }

  /* ---------- Diferenciais ---------- */
  function renderDifferentials() {
    const grid = document.getElementById("differentialsGrid");
    DIFERENCIAIS.forEach((d, i) => {
      const card = el("div", "diff-card");
      card.innerHTML = `
        <span class="diff-card__index">0${i + 1}</span>
        <h3>${d.titulo}</h3>
        <p>${d.texto}</p>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------- Carnes em destaque ---------- */
  function renderMeats() {
    const grid = document.getElementById("meatsGrid");
    const emptyState = document.getElementById("meatsEmpty");
    if (!CARNES_DESTAQUE.length) {
      grid.hidden = true;
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;
    CARNES_DESTAQUE.forEach(item => {
      const card = el("article", "meat-card");
      card.innerHTML = `
        <div class="meat-card__media"><img src="${item.imagem}" alt="${item.nome}" loading="lazy"></div>
        <div class="meat-card__body">
          <h3>${item.nome}</h3>
          <p>${item.descricao}</p>
          <span class="meat-card__price">${item.preco}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------- Cardápio (abas + grid) ---------- */
  function renderMenu() {
    const tabsWrap = document.getElementById("menuTabs");
    const grid = document.getElementById("menuGrid");
    const emptyState = document.getElementById("menuEmpty");

    if (!MENU_ITEMS.length) {
      tabsWrap.hidden = true;
      grid.hidden = true;
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    const allTab = el("button", "menu__tab is-active", "Todos");
    allTab.type = "button";
    allTab.dataset.category = "all";
    tabsWrap.appendChild(allTab);

    MENU_CATEGORIES.forEach(cat => {
      const hasItems = MENU_ITEMS.some(item => item.categoria === cat.id);
      if (!hasItems) return;
      const tab = el("button", "menu__tab", cat.label);
      tab.type = "button";
      tab.dataset.category = cat.id;
      tabsWrap.appendChild(tab);
    });

    function paint(category) {
      grid.innerHTML = "";
      const items = category === "all" ? MENU_ITEMS : MENU_ITEMS.filter(i => i.categoria === category);
      items.forEach(item => {
        const card = el("div", "menu-item");
        card.innerHTML = `
          <div class="menu-item__media"><img src="${item.imagem}" alt="${item.nome}" loading="lazy"></div>
          <div class="menu-item__body">
            <h4>${item.nome}</h4>
            <p>${item.descricao}</p>
            <span class="menu-item__price">${item.preco}</span>
          </div>
        `;
        grid.appendChild(card);
      });
    }
    paint("all");

    tabsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".menu__tab");
      if (!btn) return;
      tabsWrap.querySelectorAll(".menu__tab").forEach(t => t.classList.remove("is-active"));
      btn.classList.add("is-active");
      paint(btn.dataset.category);
    });
  }

  /* ---------- Bebidas (texto) ---------- */
  function renderDrinks() {
    const lede = document.getElementById("drinksLede");
    if (lede) lede.textContent = BEBIDAS.texto;
  }

  /* ---------- Experiências ---------- */
  function renderExperiences() {
    const grid = document.getElementById("experiencesGrid");
    EXPERIENCIAS.forEach(exp => {
      const card = el("article", "experience-card");
      card.innerHTML = `
        <img src="${exp.imagem}" alt="${exp.titulo}" loading="lazy">
        <div class="experience-card__scrim"></div>
        <div class="experience-card__body">
          <h3>${exp.titulo}</h3>
          <p>${exp.descricao}</p>
          <a href="${exp.botaoLink}" class="btn btn--outline btn--sm">${exp.botaoTexto}</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  /* ---------- Galeria ---------- */
  function renderGallery() {
    const filtersWrap = document.getElementById("galleryFilters");
    const grid = document.getElementById("galleryGrid");

    GALERIA_CATEGORIAS.forEach((cat, i) => {
      const btn = el("button", "gallery__filter" + (i === 0 ? " is-active" : ""), cat);
      btn.type = "button";
      btn.dataset.filter = cat;
      filtersWrap.appendChild(btn);
    });

    GALERIA_ITENS.forEach((item, i) => {
      const fig = el("figure", "gallery-item" + (i % 5 === 0 ? " is-tall" : i % 7 === 3 ? " is-wide" : ""));
      fig.dataset.category = item.categoria;
      fig.innerHTML = `<img src="${item.imagem}" alt="${item.alt}" loading="lazy"><span class="gallery-item__tag">${item.categoria}</span>`;
      grid.appendChild(fig);
    });

    filtersWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery__filter");
      if (!btn) return;
      filtersWrap.querySelectorAll(".gallery__filter").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.dataset.filter;
      grid.querySelectorAll(".gallery-item").forEach(item => {
        const show = filter === "TODOS" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !show);
      });
    });
  }

  /* ---------- Avaliações ---------- */
  function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    AVALIACOES.forEach(r => {
      const card = el("article", "review-card");
      card.innerHTML = `<div class="review-card__stars">★★★★★</div><p>"${r.texto}"</p>`;
      grid.appendChild(card);
    });

    const pointsList = document.getElementById("pointsList");
    PONTOS_POSITIVOS.forEach(p => {
      pointsList.appendChild(el("li", null, p));
    });
  }

  /* ---------- Header: fundo sólido no scroll ---------- */
  function initHeaderScroll() {
    const header = document.getElementById("siteHeader");
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Menu hambúrguer (mobile) ---------- */
  function initMobileMenu() {
    const btn = document.getElementById("hamburgerBtn");
    const nav = document.getElementById("mainNav");
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Reveal ao entrar na tela ---------- */
  function initReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(t => t.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    targets.forEach(t => observer.observe(t));
  }

  /* ---------- Termômetro de brasa (indicador de rolagem) ---------- */
  function initEmberGauge() {
    const fill = document.getElementById("emberFill");
    if (!fill) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      fill.style.height = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderDifferentials();
    renderMeats();
    renderMenu();
    renderDrinks();
    renderExperiences();
    renderGallery();
    renderReviews();

    initHeaderScroll();
    initMobileMenu();
    initReveal();
    initEmberGauge();
  });
})();
