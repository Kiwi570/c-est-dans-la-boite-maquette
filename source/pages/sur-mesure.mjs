/* Sur mesure : le prix en très grand, le composeur (occasion, éléments ludiques, légende écrite en direct, remise)
   qui prépare un vrai e-mail pour Carine, les délais et la livraison, les questions fréquentes. */
import { html, brut, texteBrut } from '../../outils/gabarit.mjs';
import { dev } from './accueil.mjs';

export const page = { cle: 'sur-mesure', fichier: 'sur-mesure', imagePartage: 'boite-mariage-1300.webp' };

const occasions = ['mariage', 'anniversaire', 'vacances', 'animal', 'autre'];
/* Exemple réel montré pour chaque occasion (anniversaire : pas d'exemple publié, on montre « The love cats »). */
const scenes = { mariage: ['scene-mariage', 'Just married… again\u00a0!'], anniversaire: ['scene-amis', 'The love cats'], vacances: ['scene-vacances', 'Laponie Finlandaise'], animal: ['scene-animal', 'Un amour de Virgul'], autre: ['scene-famille', 'Mon Papa et Moi'] };
const matieres = ['sable', 'coquillages', 'gazon', 'fourrure'];

const DESSINS = {
  sable: '<path d="M0 150 C30 132 70 128 100 136 S150 130 160 134 V150Z" fill="#E4CB91" stroke="#fff" stroke-width="1.2"/><g fill="#C9AE73"><circle cx="20" cy="144" r="1"/><circle cx="46" cy="140" r="1"/><circle cx="72" cy="143" r="1"/><circle cx="110" cy="141" r="1"/><circle cx="138" cy="145" r="1"/></g>',
  coquillages: '<path d="M24 146 l7-12 l7 12z" fill="#F6E2D3" stroke="#B88F78" stroke-width="1"/><path d="M118 147 q6-11 12 0z" fill="#F3D6CF" stroke="#C99C90" stroke-width="1"/><circle cx="76" cy="144" r="4.5" fill="#FBF1E6" stroke="#C3A28C" stroke-width="1"/><path d="M76 144 m-3 0 a3 3 0 1 0 3 -3" fill="none" stroke="#C3A28C" stroke-width=".8"/>',
  gazon: '<path d="M0 150 L5 130 L9 150 L14 126 L18 150 L23 132 L27 150 L32 124 L36 150 L41 133 L45 150 L50 127 L54 150 L59 131 L63 150 L68 125 L72 150 L77 132 L81 150 L86 127 L90 150 L95 133 L99 150 L104 126 L108 150 L113 131 L117 150 L122 125 L126 150 L131 132 L135 150 L140 127 L144 150 L149 131 L153 150 L158 126 L160 150Z" fill="#5E9A4E" stroke="#fff" stroke-width=".8"/>',
  fourrure: '<path d="M0 150 C10 134 20 140 28 132 C36 140 46 130 54 138 C62 128 72 138 80 131 C90 140 98 129 108 137 C116 130 126 140 134 132 C144 140 152 132 160 138 V150Z" fill="#F4ECE0" stroke="#D9CBB6" stroke-width="1.2"/>',
};

export default (c) => {
  const img = (nom) => c.donnees.images[nom] || {};
  const T = (k) => c.s('surmesure.composer.' + k);
  const textes = {
    email: c.site.contact.email,
    scenes: Object.fromEntries(Object.entries(scenes).map(([k, [image, legende]]) => [k, { image, legende }])),
    occasions: Object.fromEntries(occasions.map((o) => [o, T('o-' + o)])),
    matieres: Object.fromEntries(matieres.map((m) => [m, T('m-' + m)])),
    remises: { envoi: 'Envoi à domicile (frais de port en plus)', retrait: 'Click & collect à Lingolsheim, sans frais' },
    l: { occasion: 'Occasion', matieres: 'Éléments ludiques', legende: 'Légende', remise: 'Remise' },
    port: T('recapPort'), retrait: T('recapRetrait'), aucun: T('aucun'), legendeVide: T('legendeVide'),
    exemple: T('exemple'), apercu: T('apercuTexte'), sujet: T('sujet'), corps: T('corps'),
  };
  return html`
<section class="ouv ouv-prix" id="debut" data-ouverture-page>
  <div class="conteneur ouv-prix-grille">
    <div class="ouv-prix-texte">
      <p class="surtitre" data-anime="gsap">${c.t('surmesure.tete.surtitre')}</p>
      <h1 class="titre-xl" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.tb('surmesure.tete.titre')}</span></span></h1>
      <p class="chapeau" data-anime="gsap">${c.t('surmesure.tete.texte')}</p>
      <div class="hero-actions" data-anime="gsap">
        <a class="bouton" href="#composer" data-action-principale data-survol="magnetique">${c.t('surmesure.tete.action')}</a>
      </div>
    </div>
    <div class="prix-geant" data-anime="gsap">
      <p class="prix-chiffre" data-prix data-info-cle>${c.t('surmesure.tete.prix')} <span>${c.t('surmesure.tete.prixTexte')}</span></p>
      <p class="prix-details">${c.t('surmesure.tete.info')}</p>
      ${dev(c, { nom: 'boite-kangourous-desert', alt: img('boite-kangourous-desert').alt, classe: 'prix-photo', sizes: '(max-width: 760px) 40vw, 16vw', ratio: '2 / 3', priorite: true, attrs: 'data-iris-centre' })}
    </div>
  </div>
</section>

<section class="composeur kraft" id="composer">
  <div class="conteneur">
    <div class="tete-section">
      <p class="surtitre">${c.t('surmesure.composer.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('surmesure.composer.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('surmesure.composer.texte')}</p>
    </div>
    <div class="composeur-grille">
      <div class="apercu" aria-live="polite">
        <div class="apercu-boite" data-effet="legende">
          <div class="apercu-fenetre">
            ${[...new Set(Object.values(scenes).map((v) => v[0]))].map((image) => brut(texteBrut(dev(c, { nom: image, alt: img(image).alt, classe: `apercu-scene${image === 'scene-mariage' ? ' actif' : ''}`, sizes: '(max-width: 760px) 70vw, 30vw', ratio: '15 / 16' })).replace('<figure class="media dev apercu-scene', `<figure data-scene="${image}" class="media dev apercu-scene`)))}
            <svg class="apercu-matieres" viewBox="0 0 160 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
              ${matieres.map((m) => brut(`<g data-matiere="${m}">${DESSINS[m]}</g>`))}
            </svg>
            <span class="apercu-reflet" aria-hidden="true"></span>
          </div>
          <p class="apercu-legende main">${c.t('surmesure.composer.legendeDefaut')}</p>
        </div>
        <p class="apercu-mention"><strong>${c.t('surmesure.composer.apercu')}</strong> · <span class="apercu-exemple">${c.t('surmesure.composer.apercuTexte')}</span></p>
      </div>

      <form id="composeur" class="composeur-form" novalidate>
        <fieldset class="choix">
          <legend class="choix-titre">${c.t('surmesure.composer.etape1')}</legend>
          <div class="pastilles">
            ${occasions.map((o, i) => html`<label class="pastille"><input type="radio" name="occasion" value="${o}"${i === 0 ? brut(' checked') : ''}><span>${c.t('surmesure.composer.o-' + o)}</span></label>`)}
          </div>
        </fieldset>
        <fieldset class="choix">
          <legend class="choix-titre">${c.t('surmesure.composer.etape2')}</legend>
          <p class="choix-aide">${c.t('surmesure.composer.etape2aide')}</p>
          <div class="pastilles">
            ${matieres.map((m) => html`<label class="pastille"><input type="checkbox" name="matiere" value="${m}"><span>${c.t('surmesure.composer.m-' + m)}</span></label>`)}
          </div>
        </fieldset>
        <fieldset class="choix">
          <legend class="choix-titre">${c.t('surmesure.composer.etape3')}</legend>
          <p class="choix-aide" id="legende-aide">${c.t('surmesure.composer.etape3aide')}</p>
          <div class="champ"><label for="legende">${c.t('surmesure.composer.legendeLabel')}</label><input id="legende" name="legende" maxlength="34" autocomplete="off" aria-describedby="legende-aide" placeholder="${c.s('surmesure.composer.legendeDefaut')}"></div>
        </fieldset>
        <fieldset class="choix">
          <legend class="choix-titre">${c.t('surmesure.composer.etape4')}</legend>
          <div class="remises">
            <label class="remise"><input type="radio" name="remise" value="envoi" checked><span><strong>${c.t('surmesure.composer.r-envoi')}</strong> ${c.t('surmesure.composer.r-envoiTexte')}</span></label>
            <label class="remise"><input type="radio" name="remise" value="retrait"><span><strong>${c.t('surmesure.composer.r-retrait')}</strong> ${c.t('surmesure.composer.r-retraitTexte')}</span></label>
          </div>
        </fieldset>
        <div class="recap">
          <p class="recap-titre">${c.t('surmesure.composer.recap')} <span class="recap-prix" data-prix>${c.t('surmesure.composer.recapPrix')} <span data-port>${c.t('surmesure.composer.recapPort')}</span></span></p>
          <dl class="recap-liste" data-recap></dl>
          <a class="bouton bouton--large" data-email href="mailto:${c.site.contact.email}">${c.t('surmesure.composer.envoyer')}</a>
          <p class="choix-aide">${c.t('surmesure.composer.envoyerAide')} ${c.t('surmesure.composer.ouAppeler')} <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>.</p>
        </div>
      </form>
    </div>
  </div>
  <script type="application/json" id="composeur-textes">${brut(JSON.stringify(textes).replace(/</g, '\\u003c'))}</script>
</section>

<section class="delais" id="delais">
  <div class="conteneur delais-grille">
    <div>
      <p class="surtitre">${c.t('surmesure.delais.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('surmesure.delais.titre')}</h2>
      <ul class="delais-liste" data-anime="cascade">
        ${[1, 2, 3].map((i) => html`<li><strong class="delais-chiffre">${c.t('surmesure.delais.d' + i)}</strong><span>${c.t('surmesure.delais.d' + i + 't')}</span></li>`)}
      </ul>
    </div>
    ${c.media({ nom: 'emballage-face', alt: img('emballage-face').alt, classe: 'delais-media', sizes: '(max-width: 760px) 80vw, 34vw', ratio: '3 / 4', attrs: 'data-effet="balancier"', legende: c.t('surmesure.delais.legende') })}
  </div>
</section>

<section class="faq kraft" id="questions">
  <div class="conteneur faq-grille">
    <div class="tete-section">
      <p class="surtitre">${c.t('surmesure.faq.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('surmesure.faq.titre')}</h2>
      ${c.media({ nom: 'boite-lautrec-biais', alt: img('boite-lautrec-biais').alt, classe: 'faq-media', sizes: '(max-width: 760px) 50vw, 20vw', ratio: '2 / 3', attrs: 'data-effet="balancier"' })}
    </div>
    <div class="faq-liste" data-anime="cascade">
      ${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
    </div>
  </div>
</section>

<section class="fin sombre" id="fin">
  <div class="conteneur fin-grille">
    ${dev(c, { nom: 'boite-cochons', alt: img('boite-cochons').alt, classe: 'fin-photo', sizes: '(max-width: 760px) 50vw, 22vw', ratio: '2 / 3', attrs: 'data-fx="vitesse"' })}
    <div>
      <h2 class="titre-xl" data-anime="lignes">${c.tb('surmesure.fin.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('surmesure.fin.texte')}</p>
      <p class="fin-actions" data-anime>
        <a class="bouton" href="mailto:${c.site.contact.email}" data-survol="magnetique">${c.t('surmesure.fin.action')}</a>
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
    </div>
  </div>
</section>
`;
};
