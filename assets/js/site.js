/* C'est dans la boîte · effets propres au client. Le socle gère l'ouverture, les transitions, l'en-tête, le menu,
   les mesures et la bibliothèque d'effets (lignes, mots, cascade, parallaxe, mots géants, vitesse, magnétique…).
   Effets du plan (data-effet) : developpement, profondeur, plans, balancier, glissement, legende. */
import { demarrer, etat, versObjet, quand, suivre, lacher } from './socle/index.js?v=2';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const souris = window.matchMedia('(hover: hover) and (pointer: fine)');
const large = () => window.matchMedia('(min-width: 900px) and (min-height: 600px)').matches;

/* ---------- developpement : l'image se révèle comme un instantané ---------- */
function developper(el) { el.classList.add('developpe'); }
function initDeveloppement() {
  const cibles = $$('.dev').filter((el) => !el.closest('[data-ouverture-page]') && !el.classList.contains('apercu-scene'));
  if (!('IntersectionObserver' in window)) { cibles.forEach(developper); return; }
  const io = new IntersectionObserver((entrees) => entrees.forEach((e) => {
    if (e.isIntersecting) { io.unobserve(e.target); setTimeout(() => developper(e.target), 120); }
  }), { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });
  cibles.forEach((el) => io.observe(el));
}

/* ---------- profondeur : la pile de l'accueil s'ouvre en profondeur au défilement, et suit la souris ---------- */
function initProfondeur() {
  const pile = $('.pile');
  if (!pile || !gsap || !ST()) return;
  const g = $('.pile-carte--g', pile), d = $('.pile-carte--d', pile), a = $('.pile-carte--avant', pile);
  gsap.timeline({ scrollTrigger: { trigger: pile, start: 'top top+=10%', end: 'bottom top', scrub: 0.6 } })
    .fromTo(g, { x: 0, y: 0, rotation: -7 }, { x: '-14%', y: '-22%', rotation: -13, ease: 'none' }, 0)
    .fromTo(d, { x: 0, y: 0, rotation: 6 }, { x: '14%', y: '-4%', rotation: 11, ease: 'none' }, 0)
    .fromTo(a, { y: 0, scale: 1 }, { y: '-12%', scale: 1.04, ease: 'none' }, 0);
  if (!souris.matches) return;
  /* Parallaxe à la souris sur les photos (pas sur les cadres, qui suivent le défilement) : s'arrête avec la souris. */
  const plans = [[g, 10], [d, 16], [a, 26]].map(([el, f]) => { const ph = $('.pile-photo', el); return { f, x: gsap.quickTo(ph, 'x', { duration: 0.9, ease: 'power3' }), y: gsap.quickTo(ph, 'y', { duration: 0.9, ease: 'power3' }) }; });
  const zone = $('.ouv-accueil');
  zone.addEventListener('pointermove', (e) => {
    const r = zone.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5, ny = (e.clientY - r.top) / r.height - 0.5;
    plans.forEach((p) => { p.x(nx * p.f * 1.6); p.y(ny * p.f * 1.2); });
  });
  zone.addEventListener('pointerleave', () => plans.forEach((p) => { p.x(0); p.y(0); }));
}

/* ---------- plans : la boîte s'ouvre plan par plan ---------- */
function initPlans() {
  const boite = $('.boite3d');
  if (!boite || !gsap || !ST()) return;
  const section = $('.plans');
  const couches = $$('.couche', boite).sort((x, y) => +y.dataset.couche - +x.dataset.couche); // boîtier (6) → verre (1)
  const items = $$('.plans-liste li', section);
  let actif = -1;
  const allumer = (n) => {
    if (n === actif) return;
    actif = n;
    items.forEach((li) => li.classList.toggle('actif', +li.dataset.couche === n));
    couches.forEach((c) => c.classList.toggle('actif', +c.dataset.couche === n));
  };
  const ecart = () => Math.min(boite.offsetWidth * 0.2, 80);
  const tl = gsap.timeline({ paused: true });
  couches.forEach((c, i) => tl.fromTo(c, { z: 0 }, { z: () => (i - 2.5) * ecart(), ease: 'none', duration: 1 }, 0));
  tl.fromTo(boite, { rotationY: -24, rotationX: 10 }, { rotationY: -42, rotationX: 16, ease: 'none', duration: 1 }, 0);
  const suivreProgression = (p) => {
    /* Zone morte au début, puis la boîte s'ouvre ; les plans s'allument de l'avant vers le fond. */
    const q = gsap.utils.clamp(0, 1, (p - 0.04) / 0.5);
    tl.progress(q);
    section.style.setProperty('--relief', q.toFixed(3));
    allumer(p < 0.06 ? 0 : Math.min(6, 1 + Math.floor(((p - 0.06) / 0.88) * 6)));
  };
  gsap.matchMedia().add({ grand: '(min-width: 900px) and (min-height: 600px)', petit: '(max-width: 899px), (max-height: 599px)' }, (ctx) => {
    const st = ctx.conditions.grand
      ? ST().create({ trigger: section, start: 'top top', end: 'bottom bottom', scrub: 0.5, invalidateOnRefresh: true, onUpdate: (s) => suivreProgression(s.progress) })
      : ST().create({ trigger: boite, start: 'top 85%', end: 'bottom 25%', scrub: 0.5, invalidateOnRefresh: true, onUpdate: (s) => suivreProgression(s.progress) });
    return () => st.kill();
  });
}

/* ---------- balancier : une boîte accrochée qui se balance sur son anneau ---------- */
function balancer(el, force = 5) {
  if (!gsap) return;
  gsap.fromTo(el, { rotation: force }, { rotation: 0, duration: 2.4, ease: 'elastic.out(1.1, 0.28)', overwrite: 'auto' });
}
function initBalancier() {
  const els = $$('[data-effet="balancier"]').filter((el) => !el.closest('[data-ouverture-page]'));
  if (!els.length || !gsap || !ST()) return;
  els.forEach((el, i) => {
    el.style.transformOrigin = '50% 0';
    ST().create({ trigger: el.parentElement || el, start: 'top 80%', once: true, onEnter: () => balancer(el, i % 2 ? -6 : 6) });
  });
  if (souris.matches) els.forEach((el) => el.addEventListener('pointerenter', () => balancer(el, 3)));
}

/* ---------- glissement : la rangée des créations file pendant que la section passe ---------- */
function initGlissement() {
  const piste = $('.rangee-piste'), fenetre = $('.rangee-fenetre');
  if (!piste || !gsap || !ST()) return;
  gsap.matchMedia().add('(min-width: 761px)', () => {
    fenetre.removeAttribute('tabindex');
    const tw = gsap.fromTo(piste, { x: 0 }, {
      x: () => -Math.max(0, piste.scrollWidth - fenetre.clientWidth), ease: 'none',
      scrollTrigger: { trigger: fenetre, start: 'top 90%', end: 'bottom 10%', scrub: 0.6, invalidateOnRefresh: true },
    });
    return () => { tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(piste, { clearProps: 'transform' }); fenetre.setAttribute('tabindex', '0'); };
  });
}

/* ---------- Mur des créations : boîtes accrochées qui se balancent ---------- */
function initMur() {
  const boites = $$('.mur-boite');
  if (!boites.length || !gsap) return;
  boites.forEach((b) => { b.style.transformOrigin = '50% -18px'; });
  if (!ST()) return;
  /* Au défilement, le mur oscille selon la vitesse puis se calme. */
  let rotation = 0;
  const rot = boites.map((b) => gsap.quickTo(b, 'rotation', { duration: 1.4, ease: 'elastic.out(1, 0.3)' }));
  ST().create({ trigger: '.mur', start: 'top bottom', end: 'bottom top', onUpdate: (s) => {
    const v = gsap.utils.clamp(-8, 8, s.getVelocity() / 260);
    if (Math.abs(v - rotation) < 0.4) return;
    rotation = v;
    rot.forEach((r, i) => r(v * (i % 2 ? -1 : 1) * (0.7 + (i % 3) * 0.2)));
    clearTimeout(initMur.t);
    initMur.t = setTimeout(() => { rotation = 0; rot.forEach((r) => r(0)); }, 140);
  } });
  if (souris.matches) boites.forEach((b, i) => b.addEventListener('pointerenter', () => balancer(b, i % 2 ? -4 : 4)));
}

/* ---------- Galerie des créations : filtres et visionneuse ---------- */
function initGalerie() {
  const grille = $('.creations-grille');
  if (!grille) return;
  const cartes = $$('.creation', grille);
  const boutons = $$('[data-filtre]');
  const compte = $('[data-compte]');
  const params = new URLSearchParams(location.search);
  const appliquer = (f, { anime = true, pousser = true } = {}) => {
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === f)));
    const garder = (li) => f === 'tout' || li.dataset.categorie === f;
    const afficher = () => {
      cartes.forEach((li) => { li.hidden = !garder(li); });
      if (compte) compte.textContent = compte.dataset.modele.replace('{n}', cartes.filter((li) => !li.hidden).length);
      if (anime && gsap) gsap.fromTo(cartes.filter((li) => !li.hidden), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out', clearProps: 'transform,opacity' });
      ST() && ST().refresh();
    };
    if (anime && gsap) gsap.to(cartes.filter((li) => !li.hidden), { opacity: 0, duration: 0.18, onComplete: afficher });
    else afficher();
    if (pousser) {
      const u = new URL(location.href);
      if (f === 'tout') u.searchParams.delete('filtre'); else u.searchParams.set('filtre', f);
      u.searchParams.delete('boite');
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    }
  };
  boutons.forEach((b) => b.addEventListener('click', () => appliquer(b.dataset.filtre)));
  const f0 = params.get('filtre');
  if (f0 && boutons.some((b) => b.dataset.filtre === f0)) appliquer(f0, { anime: false, pousser: false });

  /* Visionneuse : une boîte en grand, flèches, glissement, Échap ; un lien par boîte (?boite=…). */
  const vis = $('.visionneuse');
  if (!vis) return;
  const img = $('.visionneuse-img', vis), leg = $('.visionneuse-legende', vis), cat = $('.visionneuse-cat', vis);
  let i = -1, retourFocus = null;
  const visibles = () => cartes.filter((li) => !li.hidden);
  const montrer = (li) => {
    const source = $('img', li);
    img.src = source.currentSrc || source.src;
    const srcset = source.getAttribute('srcset');
    if (srcset) { img.srcset = srcset; img.sizes = '(max-width: 760px) 90vw, 46vw'; }
    img.alt = source.alt;
    leg.textContent = li.dataset.legende;
    cat.textContent = li.dataset.libelleCategorie;
    const u = new URL(location.href); u.searchParams.set('boite', li.dataset.id);
    history.replaceState(history.state, '', u.pathname + u.search);
  };
  const ouvrir = (li) => {
    retourFocus = document.activeElement;
    i = visibles().indexOf(li);
    montrer(li);
    vis.hidden = false;
    document.documentElement.classList.add('visionneuse-ouverte');
    suivre(vis);
    if (gsap) gsap.fromTo($('.visionneuse-cadre', vis), { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' });
    $('[data-fermer]', vis).focus();
  };
  const fermer = () => {
    vis.hidden = true;
    document.documentElement.classList.remove('visionneuse-ouverte');
    lacher(vis);
    const u = new URL(location.href); u.searchParams.delete('boite');
    history.replaceState(history.state, '', u.pathname + u.search);
    if (retourFocus) retourFocus.focus();
  };
  const pas = (d) => { const v = visibles(); i = (i + d + v.length) % v.length; montrer(v[i]); };
  cartes.forEach((li) => $('button', li).addEventListener('click', () => ouvrir(li)));
  $('[data-fermer]', vis).addEventListener('click', fermer);
  $('[data-prec]', vis).addEventListener('click', () => pas(-1));
  $('[data-suiv]', vis).addEventListener('click', () => pas(1));
  vis.addEventListener('click', (e) => { if (e.target === vis) fermer(); });
  vis.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    else if (e.key === 'ArrowLeft') pas(-1);
    else if (e.key === 'ArrowRight') pas(1);
    else if (e.key === 'Tab') {
      const f = $$('button', vis); const p = f[0], d = f[f.length - 1];
      if (e.shiftKey && document.activeElement === p) { e.preventDefault(); d.focus(); }
      else if (!e.shiftKey && document.activeElement === d) { e.preventDefault(); p.focus(); }
    }
  });
  let x0 = null;
  vis.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
  vis.addEventListener('pointerup', (e) => { if (x0 != null && Math.abs(e.clientX - x0) > 50) pas(e.clientX < x0 ? 1 : -1); x0 = null; });
  const id = params.get('boite');
  if (id) {
    const li = cartes.find((c) => c.dataset.id === id);
    if (li) quand('pret', () => { li.hidden = false; ouvrir(li); });
  }
}

/* ---------- À l'échelle : la boîte au mur ou posée ---------- */
function initEchelle() {
  const scene = $('.echelle-scene');
  if (!scene) return;
  const boite = $('.echelle-boite', scene), cartel = $('[data-cartel]');
  const boutons = $$('button[data-pose]');
  const poser = (pose, anime = true) => {
    scene.dataset.etat = pose;
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.pose === pose)));
    if (cartel) cartel.textContent = cartel.dataset[pose === 'mur' ? 'texteMur' : 'textePose'];
    if (anime && gsap) gsap.fromTo(boite, { opacity: 0.3 }, { opacity: 1, duration: 0.5, ease: 'power2.out', clearProps: 'opacity' });
  };
  boutons.forEach((b) => b.addEventListener('click', () => poser(b.dataset.pose)));
  poser('mur', false);
}

/* ---------- legende : le composeur de la boîte sur mesure ---------- */
function initComposeur() {
  const form = $('#composeur');
  if (!form) return;
  const apercu = $('.apercu'), legende = $('.apercu-legende'), lien = $('[data-email]'), prix = $('[data-port]');
  const recap = $('[data-recap]');
  const champ = $('#legende');
  const T = JSON.parse($('#composeur-textes').textContent);
  const val = (n) => { const x = form.querySelector(`[name="${n}"]:checked`); return x ? x.value : ''; };
  const occasionParam = new URLSearchParams(location.search).get('occasion');
  if (occasionParam) { const r = form.querySelector(`[name="occasion"][value="${occasionParam}"]`); if (r) r.checked = true; }
  let derniereOccasion = null;
  const ecrire = (texte) => {
    legende.textContent = texte;
    if (gsap) gsap.fromTo(legende, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.9, ease: 'power2.out', clearProps: 'clipPath' });
  };
  const maj = (source) => {
    const occ = val('occasion') || 'mariage';
    const scene = T.scenes[occ];
    $$('.apercu-scene', apercu).forEach((f) => f.classList.toggle('actif', f.dataset.scene === scene.image));
    if (source === 'init') $$('.apercu-scene', apercu).forEach((f) => f.classList.add('developpe'));
    const mats = $$('[name="matiere"]:checked', form).map((x) => x.value);
    $$('[data-matiere]', apercu).forEach((m) => m.classList.toggle('actif', mats.includes(m.dataset.matiere)));
    const propre = champ.value.trim();
    const texte = propre || (T.exemple.replace('{legende}', scene.legende));
    if (source === 'legende') legende.textContent = propre || scene.legende;
    else if (occ !== derniereOccasion || source === 'init') ecrire(propre || scene.legende);
    $('.apercu-exemple').textContent = propre ? T.apercu : texte;
    if (occ !== derniereOccasion && derniereOccasion !== null) {
      if (gsap) gsap.fromTo('.apercu-vol', { rotation: 0 }, { keyframes: { rotation: [-3, 3, -2, 1.5, 0] }, duration: 0.6, ease: 'none' });
      const f = $(`.apercu-scene[data-scene="${scene.image}"]`, apercu);
      f.classList.remove('developpe'); void f.offsetWidth; f.classList.add('developpe');
    }
    derniereOccasion = occ;
    const remise = val('remise') || 'envoi';
    prix.textContent = remise === 'envoi' ? T.port : T.retrait;
    const libOcc = T.occasions[occ], libMats = mats.length ? mats.map((m) => T.matieres[m]).join(', ') : T.aucun;
    const libRemise = T.remises[remise];
    recap.innerHTML = '';
    [[T.l.occasion, libOcc], [T.l.matieres, libMats], [T.l.legende, propre || T.legendeVide], [T.l.remise, libRemise]].forEach(([k, v]) => {
      const dt = document.createElement('dt'); dt.textContent = k; const dd = document.createElement('dd'); dd.textContent = v; recap.append(dt, dd);
    });
    const sujet = T.sujet.replace('{occasion}', libOcc);
    const corps = T.corps.replace('{occasion}', libOcc).replace('{matieres}', libMats).replace('{legende}', propre || T.legendeVide).replace('{remise}', libRemise);
    lien.href = `mailto:${T.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
  };
  form.addEventListener('change', (e) => maj(e.target.name === 'legende' ? 'legende' : 'choix'));
  champ.addEventListener('input', () => maj('legende'));
  form.addEventListener('submit', (e) => e.preventDefault());
  /* Retour physique : la boîte file dans l'enveloppe, puis la messagerie s'ouvre. */
  const vol = $('.apercu-vol'), env = $('.enveloppe'), note = $('[data-envoi-note]');
  lien.addEventListener('click', () => {
    if (note) note.textContent = T.envoiNote;
    if (!gsap || !vol || !env) return;
    const r1 = vol.getBoundingClientRect(), r2 = env.getBoundingClientRect();
    const dx = r2.left + r2.width / 2 - (r1.left + r1.width / 2), dy = r2.top + r2.height / 2 - (r1.top + r1.height / 2);
    gsap.timeline()
      .fromTo(env, { opacity: 0, scale: 0.4, rotation: -8 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.35, ease: 'back.out(2)' })
      .to(vol, { x: dx, y: dy, scale: 0.08, rotation: -20, duration: 0.7, ease: 'power2.in' }, 0.1)
      .to(vol, { opacity: 0, duration: 0.1 }, 0.72)
      .to(env, { x: 40, y: -18, rotation: 12, duration: 0.45, ease: 'power2.in' }, 0.9)
      .to(env, { opacity: 0, duration: 0.2 }, 1.15)
      .set(vol, { x: 0, y: 0, scale: 1, rotation: 0 }, 1.45)
      .to(vol, { opacity: 1, duration: 0.5 }, 1.45)
      .set(env, { x: 0, y: 0, rotation: 0 }, 1.5);
  });
  maj('init');
  /* L'aperçu s'incline doucement pendant qu'on fait défiler le composeur. */
  if (gsap && ST()) gsap.fromTo('.apercu-boite', { rotation: 3, y: 20 }, { rotation: -2, y: -10, ease: 'none', scrollTrigger: { trigger: '.composeur', start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
}


/* ---------- Pile à mélanger (accueil) : la boîte de devant part derrière, la suivante passe devant ---------- */
function initMelange() {
  const pile = $('.pile'), bouton = $('[data-melanger]');
  if (!pile || !bouton || !gsap) return;
  const A = $('.pile-carte--avant .pile-photo', pile), G = $('.pile-carte--g .pile-photo', pile), D = $('.pile-carte--d .pile-photo', pile);
  const legende = $('[data-pile-legende]'), note = $('.pile-note');
  let occupe = false;
  const redevelopper = (f) => { f.classList.remove('developpe'); void f.offsetWidth; f.classList.add('developpe'); };
  bouton.addEventListener('click', () => {
    if (occupe) return;
    occupe = true;
    const pa = $('picture', A), pg = $('picture', G), pd = $('picture', D);
    const la = A.dataset.legende, lg = G.dataset.legende, ld = D.dataset.legende;
    gsap.timeline({ onComplete: () => { occupe = false; } })
      .to(A, { xPercent: 62, yPercent: 10, rotation: 16, duration: 0.3, ease: 'power2.in' })
      .call(() => {
        A.prepend(pg); G.prepend(pd); D.prepend(pa);
        A.dataset.legende = lg; G.dataset.legende = ld; D.dataset.legende = la;
        redevelopper(G); redevelopper(D);
        if (legende) {
          legende.textContent = lg;
          gsap.fromTo(legende, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power2.out', clearProps: 'clipPath' });
        }
      })
      .fromTo(A, { xPercent: -58, yPercent: -8, rotation: -12 }, { xPercent: 0, yPercent: 0, rotation: 0, duration: 0.6, ease: 'back.out(1.6)' });
    if (note && !note.dataset.vu) { note.dataset.vu = '1'; gsap.to(note, { opacity: 0, y: -8, duration: 0.5, delay: 1.2 }); }
  });
}

/* ---------- boite3d : la boîte en relief tourne au défilement, et à la main ---------- */
function initBoite3d() {
  const scene = $('.b3-scene');
  if (!scene || !gsap || !ST()) return;
  const b3 = $('.b3', scene), tourne = $('.b3-tourne', scene);
  gsap.timeline({ scrollTrigger: { trigger: scene, start: 'top 85%', end: 'bottom 15%', scrub: true, invalidateOnRefresh: true } })
    .fromTo(b3, { rotationY: -20, rotationX: 9 }, { rotationY: -48, rotationX: 3, ease: 'none' }, 0)
    .fromTo(scene, { '--reflet': 0 }, { '--reflet': 330, ease: 'none' }, 0);
  ST().create({ trigger: scene, start: 'top 75%', once: true, onEnter: () => scene.classList.add('vu') });
  const rot = { y: 0 };
  const poser = gsap.quickSetter(tourne, 'rotationY', 'deg');
  let x0 = null, depart = 0, retour = null;
  scene.addEventListener('dragstart', (e) => e.preventDefault());
  scene.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') e.preventDefault();
    x0 = e.clientX; depart = rot.y;
    if (retour) retour.kill();
    scene.setPointerCapture(e.pointerId);
  });
  scene.addEventListener('pointermove', (e) => {
    if (x0 === null) return;
    rot.y = gsap.utils.clamp(-170, 170, depart + (e.clientX - x0) * 0.6);
    poser(rot.y);
  });
  const lacherBoite = () => {
    if (x0 === null) return;
    x0 = null;
    retour = gsap.to(rot, { y: 0, duration: 1.8, delay: 0.9, ease: 'elastic.out(1, 0.45)', onUpdate: () => poser(rot.y) });
  };
  scene.addEventListener('pointerup', lacherBoite);
  scene.addEventListener('pointercancel', lacherBoite);
}

/* ---------- Contact : copier l'adresse e-mail ---------- */
function initCopier() {
  $$('[data-copier]').forEach((b) => {
    const span = $('span', b), base = span.textContent;
    b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(b.dataset.copier); }
      catch {
        const r = document.createRange(); r.selectNodeContents(b.previousElementSibling);
        const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); if (document.execCommand) document.execCommand('copy'); sel.removeAllRanges();
      }
      span.textContent = b.dataset.texteCopie;
      b.classList.add('copie');
      if (gsap) gsap.fromTo(b, { rotation: -6, scale: 1.12 }, { rotation: 0, scale: 1, duration: 0.5, ease: 'back.out(3)' });
      setTimeout(() => { span.textContent = base; b.classList.remove('copie'); }, 2200);
    });
  });
}

/* ---------- Ouvertures des pages intérieures (marquées data-ouverture-page) ---------- */
function ouverturePage(tl, t0 = 0) {
  const o = $('[data-ouverture-page]');
  if (!o || !gsap) return;
  const lignes = $$('.hero-ligne', o), autres = $$('[data-anime="gsap"]:not(h1)', o);
  const titre = $('h1[data-anime="gsap"]', o);
  if (titre) tl.set(titre, { opacity: 1 }, t0);
  if (lignes.length) tl.fromTo(lignes, { y: 0, yPercent: 118 }, { y: 0, yPercent: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out' }, t0);
  if (autres.length) tl.fromTo(autres, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' }, t0 + 0.15);
  const devs = $$('.dev', o);
  devs.forEach((d, i) => tl.call(() => developper(d), null, t0 + 0.05 + i * 0.18));
  const fil = $('.mur-fil', o);
  if (fil) tl.fromTo(fil, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power2.inOut' }, t0);
  const tombent = $$('.mur-boite:not([data-iris-centre])', o);
  if (tombent.length) tl.fromTo(tombent, { y: -90, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.09, ease: 'bounce.out' }, t0 + 0.25);
  const mur = $$('[data-effet="balancier"]', o);
  mur.forEach((b, i) => tl.call(() => balancer(b, i % 2 ? -7 : 7), null, t0 + 0.55 + i * 0.09));
}
function ouverturePageFinale() {
  const o = $('[data-ouverture-page]');
  if (!o || !gsap) return;
  gsap.set($$('[data-anime="gsap"]', o), { opacity: 1, clearProps: 'transform' });
  gsap.set($$('.hero-ligne', o), { y: 0, yPercent: 0 });
  gsap.set($$('.mur-fil', o), { scaleX: 1 });
  gsap.set($$('.mur-boite', o), { y: 0, opacity: 1 });
  $$('.dev', o).forEach(developper);
}

demarrer({
  preparer() {
    initProfondeur();
    initMelange();
    initBoite3d();
    initPlans();
    initBalancier();
    initGlissement();
    initMur();
    initGalerie();
    initEchelle();
    initComposeur();
    initCopier();
    quand('pret', initDeveloppement);
  },
  /* Intro (moins de 3 s) : le cadre du logo sort « laiteux », se développe, file vers l'objet d'ouverture de la page,
     puis l'écran s'ouvre depuis lui ; le titre monte et les images se développent. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-cadre', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, 0.2)
      .fromTo('.ouverture-laiteux', { opacity: 1 }, { opacity: 0, duration: 0.75, ease: 'power1.inOut' }, 0.3)
      .to('.ouverture-ligne', { opacity: 0, duration: 0.25 }, 0.85);
    versObjet(tl, { a: 1.0 });
    ouverturePage(tl, 1.45);
    return tl;
  },
  etatFinal() { ouverturePageFinale(); },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline();
    ouverturePage(tl, 0.1);
  },
});
