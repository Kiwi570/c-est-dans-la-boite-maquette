/* Contact : e-mail et téléphone en grand, formulaire simulé, plan simplifié de Lingolsheim. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-ouverture-1168.webp' };

export default (c) => {
  const img = (nom) => c.donnees.images[nom] || {};
  const k = c.site.contact;
  return html`
<section class="ouv ouv-contact" id="debut" data-ouverture-page>
  <div class="conteneur ouv-contact-grille">
    <div>
      <p class="surtitre" data-anime="gsap">${c.t('contact.tete.surtitre')}</p>
      <h1 class="titre-xl" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne">${c.tb('contact.tete.titre')}</span></span></h1>
      <p class="chapeau" data-anime="gsap">${c.t('contact.tete.texte')}</p>
      <dl class="coordonnees" data-anime="gsap">
        <div><dt>${c.t('contact.tete.email')}</dt><dd class="coord-email"><a class="coord-lien" href="mailto:${k.email}" data-action-principale>${k.email}</a> <button type="button" class="copier" data-copier="${k.email}" aria-label="${c.s('contact.tete.copierAria')}" data-texte-copie="${c.s('contact.tete.copie')}"><span>${c.t('contact.tete.copier')}</span></button></dd></div>
        <div><dt>${c.t('contact.tete.telephone')}</dt><dd><a class="coord-lien" href="tel:${k.telephoneLien}">${k.telephone}</a></dd></div>
      </dl>
      <p class="hero-info" data-info-cle data-anime="gsap">${c.t('contact.tete.info')}</p>
    </div>
    ${c.media({ nom: 'grok/contact-ouverture', alt: img('grok/contact-ouverture').alt, priorite: true, classe: 'contact-media', sizes: '(max-width: 760px) 80vw, 38vw', ratio: '4 / 5', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
  </div>
</section>

<section class="contact-form kraft" id="formulaire">
  <div class="conteneur contact-form-grille">
    <div>
      <p class="surtitre">${c.t('contact.formulaire.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('contact.formulaire.titre')}</h2>
      <p data-anime>${c.t('contact.formulaire.texte')}</p>
      ${c.media({ nom: 'emballage-biais', alt: img('emballage-biais').alt, classe: 'contact-carton', sizes: '(max-width: 760px) 50vw, 20vw', ratio: '3 / 4', attrs: 'data-effet="balancier"' })}
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate>
      <div class="champ"><label for="f-nom">${c.t('contact.formulaire.nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="f-email">${c.t('contact.formulaire.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="f-tel">${c.t('contact.formulaire.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
      <div class="champ"><label for="f-sujet">${c.t('contact.formulaire.sujet')}</label>
        <select id="f-sujet" name="sujet">
          <option value="boite">${c.t('contact.formulaire.sujetBoite')}</option>
          <option value="stock">${c.t('contact.formulaire.sujetStock')}</option>
          <option value="retrait">${c.t('contact.formulaire.sujetRetrait')}</option>
          <option value="autre">${c.t('contact.formulaire.sujetAutre')}</option>
        </select></div>
      <div class="champ"><label for="f-message">${c.t('contact.formulaire.message')}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
      <p class="mention-donnees">${c.t('contact.formulaire.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.formulaire.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>

<section class="plan-acces" id="acces">
  <div class="conteneur acces-grille">
    <div>
      <p class="surtitre">${c.t('contact.carte.surtitre')}</p>
      <h2 class="titre-l" data-anime="lignes">${c.tb('contact.carte.titre')}</h2>
      <p class="chapeau" data-anime>${c.t('contact.carte.texte')}</p>
    </div>
    <figure class="carte-acces" role="img" aria-label="${c.s('contact.carte.aria')}" data-visuel>
      <svg viewBox="0 0 600 420" aria-hidden="true" focusable="false" data-fx="trace">
        <rect width="600" height="420" fill="#EFE7DA"/>
        <path data-fx-trait d="M470 0 C 440 80 500 150 470 220 S 430 340 470 420" fill="none" stroke="#9DBBC7" stroke-width="14" stroke-linecap="round"/>
        <path data-fx-trait d="M0 250 C 120 240 200 230 300 205 S 420 190 470 200" fill="none" stroke="#C9B89C" stroke-width="4" stroke-dasharray="1 0"/>
        <path data-fx-trait d="M300 0 C 300 120 310 200 300 420" fill="none" stroke="#C9B89C" stroke-width="4"/>
        <circle cx="330" cy="200" r="46" fill="#E4D6C0"/>
        <circle cx="190" cy="236" r="26" fill="#E4D6C0"/>
        <circle cx="190" cy="236" r="11" fill="#C8322B" stroke="#fff" stroke-width="4"/>
        <circle cx="330" cy="200" r="7" fill="#1B1714"/>
        <text x="190" y="290" text-anchor="middle" font-family="Instrument Sans, Arial" font-size="20" font-weight="700" fill="#1B1714">${c.t('contact.carte.lingolsheim')}</text>
        <text x="330" y="170" text-anchor="middle" font-family="Instrument Sans, Arial" font-size="18" fill="#3A322C">${c.t('contact.carte.strasbourg')}</text>
        <text x="488" y="300" font-family="Instrument Sans, Arial" font-size="16" font-style="italic" fill="#3D6676">${c.t('contact.carte.rhin')}</text>
        <text x="520" y="60" text-anchor="middle" font-family="Instrument Sans, Arial" font-size="15" fill="#5A5049">${c.t('contact.carte.allemagne')}</text>
      </svg>
      <figcaption class="mention-schema">${c.t('commun.schema')}</figcaption>
    </figure>
  </div>
</section>
`;
};
