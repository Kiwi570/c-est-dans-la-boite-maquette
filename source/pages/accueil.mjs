/* Accueil : la pile de boîtes en profondeur, les occasions, la boîte en vue éclatée, le format et le prix,
   les créations en rangée, les trois étapes, Carine, l'appel final. */
import { html, brut, texteBrut } from '../../outils/gabarit.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'boite-virgul-1300.webp' };

/* Image qui se développe comme un instantané (effet propre « developpement »). */
export const dev = (c, o) => brut(texteBrut(c.media({ ...o, classe: `dev ${o.classe || ''}`, attrs: o.attrs || '' }))
  .replace('<img ', '<img data-effet="developpement" ')
  .replace('</picture>', '</picture><span class="dev-voile" aria-hidden="true"></span>'));

const img = (c, nom) => c.donnees.images[nom] || {};

const occasions = [
  { cle: 'mariage', image: 'boite-mariage', legende: 'Just married… again !' },
  { cle: 'animal', image: 'boite-love-cats', legende: 'The love cats' },
  { cle: 'vacances', image: 'boite-big-apple', legende: 'Big Apple' },
  { cle: 'famille', image: 'boite-papa', legende: 'Mon Papa et Moi', occasion: 'autre' },
];
const rangee = ['boite-girafes', 'boite-kangourous-cascade', 'boite-lautrec', 'boite-koala', 'boite-meuh'];

/* Les six plans de la boîte, de l'avant vers le fond. */
const couches = [1, 2, 3, 4, 5, 6];

export default (c) => html`
<section class="ouv ouv-accueil" id="debut" data-ouverture-page>
  <div class="ouv-texte">
    <p class="surtitre hero-sur" data-anime="gsap">${c.t('accueil.hero.surtitre')}</p>
    <h1 class="titre-xl hero-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.tb('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${c.tb('accueil.hero.titre2')}</span></span></h1>
    <p class="hero-intro" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('creations', { classe: 'lien-fleche', texte: c.t('accueil.hero.secondaire') })}
    </div>
    <p class="hero-info" data-info-cle data-anime="gsap">${c.t('accueil.hero.info')}</p>
  </div>
  <div class="pile-zone">
    <div class="pile" data-grille="manipuler">
      <div class="pile-carte pile-carte--g">${dev(c, { nom: 'boite-laponie', alt: img(c, 'boite-laponie').alt, classe: 'pile-photo', sizes: '(max-width: 760px) 40vw, 18vw', ratio: '2 / 3', attrs: 'data-legende="Laponie Finlandaise"' })}</div>
      <div class="pile-carte pile-carte--d">${dev(c, { nom: 'boite-cochons', alt: img(c, 'boite-cochons').alt, classe: 'pile-photo', sizes: '(max-width: 760px) 40vw, 18vw', ratio: '2 / 3', attrs: 'data-legende="Copains comme cochons\u00a0!"' })}</div>
      <div class="pile-carte pile-carte--avant" data-effet="profondeur">${dev(c, { nom: 'boite-virgul', alt: img(c, 'boite-virgul').alt, classe: 'pile-photo', sizes: '(max-width: 760px) 60vw, 26vw', ratio: '2 / 3', priorite: true, attrs: 'data-iris-centre data-souris data-legende="Un amour de Virgul"' })}</div>
      <button type="button" class="pile-bouton" data-melanger data-superpose aria-label="${c.s('accueil.hero.melangerAria')}"></button>
    </div>
    <p class="pile-note main" aria-hidden="true"><svg class="pile-fleche" viewBox="0 0 90 60" focusable="false"><path d="M84 6 C60 2 30 10 18 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="M10 30 L18 42 L28 32" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="aide-souris">${c.t('accueil.hero.melangerSouris')}</span><span class="aide-tactile">${c.t('accueil.hero.melangerTactile')}</span></p>
    <p class="pile-legende main" aria-live="polite" data-pile-legende>Un amour de Virgul</p>
  </div>
</section>

<section class="occasions" id="occasions">
  <div class="mots-geants" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee data-texte="${[1, 2, 3, 4].map(() => c.s('accueil.occasions.rangee1')).join(' ')}"></p>
    <p data-fx-rangee data-sens="-1" data-texte="${[1, 2, 3, 4].map(() => c.s('accueil.occasions.rangee2')).join(' ')}"></p>
  </div>
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${c.t('accueil.occasions.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('accueil.occasions.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('accueil.occasions.texte')}</p>
    </div>
    <ul class="occasions-liste" data-anime="cascade">
      ${occasions.map((o) => html`<li>
        <a class="occasion" href="${c.url('sur-mesure', 'composer', `occasion=${o.occasion || o.cle}`)}" data-libelle="${c.libelle('sur-mesure')}">
          ${dev(c, { nom: o.image, alt: img(c, o.image).alt, classe: 'occasion-media', sizes: '(max-width: 760px) 46vw, 20vw', ratio: '2 / 3' })}
          <span class="occasion-legende main">${o.legende}</span>
          <span class="occasion-titre">${c.t('accueil.occasions.' + o.cle)} <span aria-hidden="true">→</span></span>
        </a>
      </li>`)}
      <li>
        <a class="occasion occasion--idee" href="${c.url('sur-mesure', 'composer', 'occasion=anniversaire')}" data-libelle="${c.libelle('sur-mesure')}">
          <span class="idee-cadre" data-visuel aria-hidden="true"><span class="idee-fenetre"><span class="main">?</span></span><span class="idee-bord main">${c.t('accueil.occasions.autreTitre')}</span></span>
          <span class="occasion-texte">${c.t('accueil.occasions.autreTexte')}</span>
          <span class="occasion-titre">${c.t('accueil.occasions.autreLien')} <span aria-hidden="true">→</span></span>
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="plans" id="dans-la-boite" data-scene>
  <div class="plans-collant" data-collant>
    <div class="conteneur plans-grille">
      <div class="plans-texte">
        <p class="surtitre">${c.t('accueil.plans.surtitre')}</p>
        <h2 class="titre-l" data-anime="lignes">${c.tb('accueil.plans.titre')}</h2>
        <p class="chapeau masque-ecran-bas">${c.t('accueil.plans.texte')}</p>
        <p class="plans-liste-titre" id="plans-liste-titre">${c.t('accueil.plans.listeTitre')}</p>
        <ol class="plans-liste" aria-labelledby="plans-liste-titre">
          ${couches.map((i) => html`<li data-couche="${i}"><span class="plans-num">${String(i).padStart(2, '0')}</span><span class="plans-nom">${c.t('accueil.plans.c' + i)}</span><span class="plans-detail">${c.t('accueil.plans.c' + i + 't')}</span></li>`)}
        </ol>
      </div>
      <div class="plans-scene" role="img" aria-label="${c.s('accueil.plans.aria')}" data-visuel>
        <div class="boite3d" data-effet="plans">
          <div class="couche couche--boitier" data-couche="6"></div>
          <div class="couche couche--decor" data-couche="5">${brut(SVG_DECOR)}</div>
          <div class="couche couche--perso" data-couche="4">${brut(SVG_PERSO)}</div>
          <div class="couche couche--premier" data-couche="3">${brut(SVG_PREMIER)}</div>
          <div class="couche couche--cadre" data-couche="2"><span class="cadre-legende main">${c.t('accueil.plans.legende')}</span></div>
          <div class="couche couche--verre" data-couche="1"></div>
        </div>
        <p class="mention-schema">${c.t('commun.schema')}</p>
      </div>
    </div>
  </div>
</section>

<section class="offre" id="format">
  <div class="conteneur offre-grille">
    <div class="offre-visuels">
      <div class="b3-scene" data-visuel data-grille="manipuler" role="img" aria-label="${c.s('accueil.offre.boiteAria')}">
        <div class="b3-tourne">
        <div class="b3" data-effet="boite3d">
          <div class="b3-face b3-face--avant">
            ${c.media({ nom: 'boite-face', alt: '', classe: 'b3-photo', sizes: '(max-width: 760px) 60vw, 300px', ratio: '16 / 21' })}
            <span class="b3-cote b3-cote--l" aria-hidden="true"><span>16 cm</span></span>
            <span class="b3-cote b3-cote--h" aria-hidden="true"><span>21 cm</span></span>
            <span class="b3-verre" aria-hidden="true"><span class="b3-reflet"></span></span>
          </div>
          <div class="b3-face b3-face--dos" data-face="dos"><span class="b3-anneau"></span></div>
          <div class="b3-face b3-face--droite"></div>
          <div class="b3-face b3-face--gauche" data-face="dos"></div>
          <div class="b3-face b3-face--haut"></div>
          <div class="b3-face b3-face--bas" data-face="dos"></div>
        </div>
        </div>
        <p class="b3-aide main" aria-hidden="true"><span class="aide-souris">${c.t('accueil.offre.tourner')}</span><span class="aide-tactile">${c.t('accueil.offre.tournerTactile')}</span></p>
      </div>
      <ul class="offre-vignettes">
        <li>${c.media({ nom: 'boite-dos', alt: img(c, 'boite-dos').alt, classe: 'offre-vignette', sizes: '140px', ratio: '4 / 5', legende: c.t('accueil.offre.dosLegende') })}</li>
        <li>${c.media({ nom: 'emballage-face', alt: img(c, 'emballage-face').alt, classe: 'offre-vignette', sizes: '140px', ratio: '4 / 5', legende: c.t('accueil.offre.emballageLegende') })}</li>
      </ul>
    </div>
    <div class="offre-texte">
      <p class="surtitre">${c.t('accueil.offre.surtitre')}</p>
      <h2 class="titre-l offre-titre" data-anime="lignes">${c.tb('accueil.offre.titre')} <span class="offre-prix" data-prix>${c.t('accueil.offre.prix')}</span></h2>
      <ul class="atouts" data-anime="cascade">
        <li>${brut(ICONE.verre)}<span>${c.t('accueil.offre.f1')}</span></li>
        <li>${brut(ICONE.anneau)}<span>${c.t('accueil.offre.f2')}</span></li>
        <li>${brut(ICONE.main)}<span>${c.t('accueil.offre.f3')}</span></li>
        <li>${brut(ICONE.carton)}<span>${c.t('accueil.offre.f4')}</span></li>
      </ul>
      <p class="offre-delais" data-anime>${c.t('accueil.offre.delais')}</p>
      <p data-anime>${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.offre.action'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
  </div>
</section>

<section class="rangee sombre" id="creations">
  <div class="conteneur tete-section tete-section--rangee">
    <div>
      <p class="surtitre">${c.t('accueil.rangee.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('accueil.rangee.titre')}</h2>
    </div>
    <p class="chapeau" data-anime>${c.t('accueil.rangee.texte')}</p>
  </div>
  <div class="rangee-fenetre" role="region" aria-label="${c.s('accueil.rangee.region')}" tabindex="0" data-galerie>
    <ul class="rangee-piste" data-effet="glissement">
      ${rangee.map((nom) => {
        const cr = c.donnees.creations.find((x) => x.image === nom) || {};
        return html`<li class="rangee-carte">
          <a href="${c.url('creations', '', `boite=${cr.id}`)}" data-libelle="${c.libelle('creations')}">
            ${dev(c, { nom, alt: img(c, nom).alt, classe: 'rangee-media', sizes: '(max-width: 760px) 62vw, 24vw', ratio: '2 / 3' })}
            <span class="rangee-legende main">${cr.legende}</span>
          </a>
        </li>`;
      })}
      <li class="rangee-carte rangee-carte--fin">
        ${c.lien('creations', { classe: 'rangee-tout', texte: html`<span class="titre-m">${c.t('accueil.rangee.tout')}</span><span>${c.t('accueil.rangee.toutTexte')}</span><span class="rond-fleche" aria-hidden="true">→</span>` })}
      </li>
    </ul>
  </div>
</section>

<section class="etapes" id="commander">
  <div class="conteneur">
    <div class="tete-section tete-section--centre">
      <p class="surtitre">${c.t('accueil.etapes.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('accueil.etapes.titre')}</h2>
    </div>
    <div class="etapes-fil-zone">
    <svg class="etapes-fil" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true" focusable="false" data-fx="trace" data-grille="fil"><path data-fx-trait d="M0 6 C 300 46 900 46 1200 6" fill="none" stroke="#8C7A66" stroke-width="2"/></svg>
    <ol class="etapes-liste">
      ${[1, 2, 3].map((i) => html`<li class="etape">
        <span class="instantane dev" data-visuel aria-hidden="true" data-effet="balancier"><span class="pince"></span><span class="instantane-fenetre">${brut(ICONE['etape' + i])}</span><span class="instantane-num main">${i}</span><span class="dev-voile"></span></span>
        <h3 class="titre-s">${c.t('accueil.etapes.e' + i)}</h3>
        <p>${c.t('accueil.etapes.e' + i + 't')}</p>
      </li>`)}
    </ol>
    </div>
    <p class="etapes-action" data-anime>${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.etapes.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>

<section class="carine kraft" id="carine">
  <div class="conteneur carine-grille">
    ${c.media({ nom: 'grok/atelier-etabli', alt: img(c, 'grok/atelier-etabli').alt || '', classe: 'carine-media', sizes: '(max-width: 760px) 100vw, 40vw', ratio: '4 / 5', attrs: 'data-fx="parallaxe"' })}
    <div class="carine-texte">
      <p class="surtitre">${c.t('accueil.carine.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('accueil.carine.titre')}</h2>
      <p data-anime>${c.t('accueil.carine.texte')}</p>
      <blockquote class="citation" data-anime="mots"><p>${c.t('accueil.carine.citation')}</p></blockquote>
      <p data-anime>${c.lien('atelier', { classe: 'lien-fleche', texte: c.t('accueil.carine.lien') })}</p>
    </div>
  </div>
</section>

<section class="fin sombre" id="fin">
  <div class="conteneur fin-grille">
    ${dev(c, { nom: 'cadre-logo', alt: c.s('accueil.fin.logoAlt'), classe: 'fin-logo', sizes: '(max-width: 760px) 50vw, 22vw', attrs: 'data-fx="vitesse"' })}
    <div>
      <h2 class="titre-xl" data-anime="lignes">${c.tb('accueil.fin.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('accueil.fin.texte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('sur-mesure', { ancre: 'composer', classe: 'bouton', texte: c.t('accueil.fin.action'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
    </div>
  </div>
</section>
`;

/* Dessins des plans (schéma, papier découpé). Fenêtre de 160 × 150. */
const OMBRE = 'fill="rgba(27,23,20,.16)" transform="translate(2 4)"';
const SVG_DECOR = `<svg viewBox="0 0 160 150" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<defs><linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#BCD3DC"/><stop offset="1" stop-color="#EEF0E6"/></linearGradient></defs>
<rect width="160" height="150" fill="url(#ciel)"/>
<circle cx="118" cy="38" r="15" fill="#C8322B"/>
<ellipse cx="44" cy="30" rx="20" ry="7" fill="#fff" opacity=".9"/><ellipse cx="58" cy="26" rx="12" ry="6" fill="#fff" opacity=".9"/>
<path d="M0 98 C30 74 52 80 78 92 S128 70 160 84 V150 H0Z" fill="#A9C2A0"/>
<path d="M0 116 C40 98 70 104 104 112 S140 104 160 108 V150 H0Z" fill="#86A77F"/>
</svg>`;
const SVG_PERSO = `<svg viewBox="0 0 160 150" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<g ${OMBRE}><path d="M30 128 V88"/><circle cx="30" cy="74" r="20"/><path d="M96 132 c-2-14 4-22 14-22 h10 c4-8 10-10 14-6 l-2 8 c4 4 4 10 2 20 z"/></g>
<rect x="27" y="86" width="6" height="44" rx="2" fill="#7A5A3E" stroke="#fff" stroke-width="1.5"/>
<circle cx="30" cy="72" r="20" fill="#4F7F52" stroke="#fff" stroke-width="2"/><circle cx="20" cy="66" r="9" fill="#5E9160"/><circle cx="38" cy="62" r="8" fill="#5E9160"/>
<path d="M94 128 c-2-14 4-22 14-22 h10 c4-8 10-10 14-6 l-2 8 c4 4 4 10 2 20 z" fill="#C79A63" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
<circle cx="126" cy="104" r="1.6" fill="#1B1714"/>
<path d="M62 40 q6-6 12 0 q6-6 12 0" fill="none" stroke="#1B1714" stroke-width="2.2" stroke-linecap="round"/>
</svg>`;
const SVG_PREMIER = `<svg viewBox="0 0 160 150" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<path d="M100 150 C108 132 140 128 160 136 V150Z" fill="#E4CB91" stroke="#fff" stroke-width="1.5"/>
<g fill="#5E9A4E" stroke="#fff" stroke-width="1">
<path d="M0 150 L4 128 L8 150 L12 124 L16 150 L20 130 L24 150 L28 122 L32 150 L36 132 L40 150 L44 126 L48 150 L52 134 L56 150 L60 124 L64 150 L68 130 L72 150 L76 126 L80 150 L84 134 L88 150 L92 128 L96 150Z"/></g>
<circle cx="18" cy="132" r="3.2" fill="#F2C94C" stroke="#fff"/><circle cx="62" cy="128" r="3" fill="#E58FA0" stroke="#fff"/><circle cx="84" cy="134" r="2.6" fill="#fff"/>
<path d="M126 140 l6-10 l6 10z" fill="#F6E2D3" stroke="#C8A58E" stroke-width="1"/><path d="M142 143 q5-9 10 0z" fill="#F3D6CF" stroke="#C99C90" stroke-width="1"/>
</svg>`;

const ICONE = {
  verre: '<svg class="icone" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><rect x="5" y="4" width="22" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 20 L20 10 M14 22 L22 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  anneau: '<svg class="icone" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><circle cx="16" cy="9" r="5" fill="none" stroke="currentColor" stroke-width="2"/><rect x="6" y="14" width="20" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  main: '<svg class="icone" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M6 26 L22 6 M18 6 h6 v6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 26 l4-1 l-3-3z" fill="currentColor"/></svg>',
  carton: '<svg class="icone" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M4 10 L16 4 L28 10 V24 L16 30 L4 24Z M4 10 L16 16 L28 10 M16 16 V30" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  etape1: '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><rect x="10" y="18" width="44" height="30" rx="3" fill="none" stroke="#F7F3EC" stroke-width="2.5"/><path d="M10 20 L32 36 L54 20" fill="none" stroke="#F7F3EC" stroke-width="2.5" stroke-linejoin="round"/><rect x="38" y="8" width="16" height="13" rx="1" fill="#C8322B" transform="rotate(12 46 14)"/></svg>',
  etape2: '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M14 50 L46 14" stroke="#F7F3EC" stroke-width="3" stroke-linecap="round"/><path d="M40 12 l8-4 l4 8 l-6 4z" fill="#C8322B"/><path d="M12 40 h22 M12 46 h14" stroke="#F7F3EC" stroke-width="2" stroke-dasharray="3 3"/></svg>',
  etape3: '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M10 22 L32 12 L54 22 V44 L32 54 L10 44Z M10 22 L32 32 L54 22 M32 32 V54" fill="none" stroke="#F7F3EC" stroke-width="2.5" stroke-linejoin="round"/><rect x="36" y="34" width="12" height="9" fill="#C8322B" transform="skewY(-24) translate(0 24)"/></svg>',
};
