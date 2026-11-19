/* ============================================================
   Sabal Tax & Estate Law LLP — interactions
   ============================================================ */
(function () {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Loader ---------- */
  const loader = $('#loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('is-done');
      document.body.classList.add('is-ready');
      setTimeout(() => loader.remove(), 1400);
    }, reduceMotion ? 0 : 900);
  });
  // Safety: never leave the loader stuck
  setTimeout(() => {
    if (loader && document.body.contains(loader)) {
      loader.classList.add('is-done');
      document.body.classList.add('is-ready');
    }
  }, 3500);

  /* ---------- Nav: solid on scroll, hide on scroll down ---------- */
  const nav = $('#nav');
  const heroH = () => $('.hero').offsetHeight;
  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('is-solid', y > heroH() - 90);
    if (y > heroH() && y > lastY + 6 && !menuOpen) nav.classList.add('is-hidden');
    else if (y < lastY - 6 || y <= heroH()) nav.classList.remove('is-hidden');
    lastY = y;

    // hero parallax
    if (!reduceMotion && y < heroH()) {
      heroBg.style.transform = `translateY(${y * 0.35}px)`;
      heroContent.style.transform = `translateY(${y * 0.15}px)`;
      heroContent.style.opacity = 1 - Math.min(1, y / (heroH() * 0.75));
    }
    updateApproach();
    updateStatement();
  }
  const heroBg = $('#heroBg');
  const heroContent = $('.hero-content');

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { onScroll(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });

  /* ---------- Mobile menu ---------- */
  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');
  let menuOpen = false;
  function setMenu(open) {
    menuOpen = open;
    menuToggle.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('is-locked', open);
    if (open) nav.classList.remove('is-hidden');
  }
  menuToggle.addEventListener('click', () => setMenu(!menuOpen));
  $$('a', mobileMenu).forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Reveal on scroll ---------- */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        const el = e.target;
        const siblings = $$('.reveal', el.parentElement).filter(s => !s.classList.contains('in'));
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = `${Math.max(0, idx) * 80}ms`;
        el.classList.add('in');
        revealIO.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach(el => revealIO.observe(el));

  /* ---------- Statement: word-by-word scroll reveal ---------- */
  const statement = $('[data-words]');
  let words = [];
  if (statement) {
    const text = statement.textContent.trim().split(/\s+/);
    statement.innerHTML = text.map(w => `<span class="w">${w}</span>`).join(' ');
    words = $$('.w', statement);
  }
  function updateStatement() {
    if (!statement) return;
    const r = statement.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress from when the block enters ~80% viewport height to when it reaches ~30%
    const start = vh * 0.85;
    const end = vh * 0.3;
    const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height * 0.6)));
    const n = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  }

  /* ---------- Approach: pinned scroll-driven steps ---------- */
  const approach = $('#approach');
  const steps = $$('.approach-step');
  const rings = $$('.ring');
  const bar = $('#approachBar');
  let activeStep = -1;
  function updateApproach() {
    if (!approach) return;
    const r = approach.getBoundingClientRect();
    const runway = approach.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / runway));
    bar.style.width = `${p * 100}%`;
    const idx = Math.min(steps.length - 1, Math.floor(p * steps.length));
    if (idx !== activeStep) {
      activeStep = idx;
      steps.forEach((s, i) => s.classList.toggle('is-active', i === idx));
      rings.forEach((ring, i) => ring.classList.toggle('is-lit', i <= idx));
    }
  }

  /* ---------- Practice cards: cursor spotlight + tilt ---------- */
  $$('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty('--mx', `${x}px`);
      card.style.setProperty('--my', `${y}px`);
      if (reduceMotion) return;
      const rx = ((y / r.height) - 0.5) * -4;
      const ry = ((x / r.width) - 0.5) * 4;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });

  /* ---------- Numbers: count up ---------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur = 1400;
      const t0 = performance.now();
      (function tick(t) {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach(el => countIO.observe(el));

  /* ---------- Partners modal ---------- */
  const PARTNERS = {
    noel: {
      initials: 'NF',
      name: 'Noel J. Fernandez',
      title: 'Partner · Tax & Estate Planning',
      bio: [
        'Noel advises individuals, families, and closely held businesses on income, gift, estate, and generation-skipping transfer tax planning. His practice centers on designing structures that hold up over decades: revocable and irrevocable trusts, grantor trust sales, charitable vehicles, and coordinated business and personal plans.',
        'He also represents clients in tax controversy matters before the Internal Revenue Service and the Florida Department of Revenue, from examination through appeals. Clients describe his approach as direct, unhurried, and focused on the decision in front of them.'
      ],
      facts: [
        ['Focus', 'Estate & gift tax planning, trust design, tax controversy'],
        ['Admissions', 'Florida'],
        ['Education', 'J.D.; B.A.'],
        ['Contact', 'nfernandez@sabaltaxlaw.com']
      ]
    },
    sam: {
      initials: 'SS',
      name: 'Sam Shir',
      title: 'Partner · Trust Administration & Fiduciary Litigation',
      bio: [
        'Sam counsels trustees, personal representatives, and beneficiaries on the administration of trusts and estates under the Florida Trust Code and Probate Code. He guides fiduciaries through distributions, accountings, tax elections, and the questions that arise when a document meets an unanticipated situation.',
        'When disputes cannot be avoided, Sam litigates them. He has handled will contests, breach-of-fiduciary-duty claims, trust modification proceedings, and contested guardianships in circuit courts throughout South Florida.'
      ],
      facts: [
        ['Focus', 'Trust and estate administration, probate litigation, guardianship'],
        ['Admissions', 'Florida; U.S. District Court, Southern District of Florida'],
        ['Education', 'J.D.; B.A.'],
        ['Contact', 'sshir@sabaltaxlaw.com']
      ]
    },
    mitchell: {
      initials: 'MK',
      name: 'Mitchell Kazaz',
      title: 'Partner · Business Succession & Corporate Tax',
      bio: [
        'Mitchell works with founders and family business owners on the transition of ownership and control. His practice spans buy-sell agreements, recapitalizations, S-corporation and partnership tax matters, and the sale of closely held companies to family members, key employees, or third parties.',
        'He is known for building plans that reconcile the tax answer with the family answer, and for staying involved through implementation rather than stopping at the memo.'
      ],
      facts: [
        ['Focus', 'Succession planning, entity structuring, partnership and S-corp tax, M&A tax'],
        ['Admissions', 'Florida'],
        ['Education', 'J.D.; LL.M. in Taxation; B.S.'],
        ['Contact', 'mkazaz@sabaltaxlaw.com']
      ]
    },
    jonpaul: {
      initials: 'JC',
      name: 'Jon Paul Churdar',
      title: 'Partner · International & Cross-Border Planning',
      bio: [
        'Jon Paul advises non-U.S. persons investing in or relocating to the United States, and U.S. persons with assets and family abroad. His practice includes pre-immigration planning, foreign trust structuring, treaty analysis, and compliance with FBAR, FATCA, and related reporting regimes.',
        'He regularly coordinates with counsel in Latin America, Europe, and the Middle East to align structures across jurisdictions, and he represents clients in voluntary disclosure and international penalty matters.'
      ],
      facts: [
        ['Focus', 'Pre-immigration planning, foreign trusts, international compliance, treaty planning'],
        ['Admissions', 'Florida'],
        ['Education', 'J.D.; LL.M. in Taxation; B.A.'],
        ['Contact', 'jchurdar@sabaltaxlaw.com']
      ]
    }
  };

  const modal = $('#modal');
  let lastFocus = null;
  function openPartner(key) {
    const p = PARTNERS[key];
    if (!p) return;
    $('#modalInitials').textContent = p.initials;
    $('#modalName').textContent = p.name;
    $('#modalTitle').textContent = p.title;
    $('#modalBio').innerHTML = p.bio.map(t => `<p>${t}</p>`).join('');
    $('#modalFacts').innerHTML = p.facts.map(([k, v]) => `<div><h4>${k}</h4><p>${v}</p></div>`).join('');
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    $('.modal-panel').scrollTop = 0;
    $('.modal-close').focus();
  }
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (lastFocus) lastFocus.focus();
  }
  $$('[data-partner]').forEach(b => b.addEventListener('click', () => openPartner(b.dataset.partner)));
  $$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('is-open')) closeModal();
      if (menuOpen) setMenu(false);
    }
  });

  /* ---------- Contact form (front-end only) ---------- */
  const form = $('#contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const required = $$('[required]', form);
    let ok = true;
    required.forEach(f => {
      const valid = f.checkValidity();
      f.style.borderBottomColor = valid ? '' : '#d98a7a';
      if (!valid) ok = false;
    });
    if (!ok) return;
    form.classList.add('is-sent');
    form.innerHTML = '<p class="form-success">Thank you. A partner will be in touch within one business day.</p>';
  });

  /* ---------- Smooth anchor offset for fixed nav ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) { e.preventDefault(); return; }
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - (id === '#top' ? 0 : 60);
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  // Initial state
  onScroll();
})();
