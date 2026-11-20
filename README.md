# C'est dans la boîte · maquette

Maquette de présentation du site de Carine Schwalm (photomontages 3D faits main, Lingolsheim, Alsace), d'après www.c-est-dans-la-boite.fr.
Direction « L'instantané » : papier photo, kraft de l'emballage, noir et rouge du logo ; Fraunces, Instrument Sans, Caveat.

En ligne : https://c-est-dans-la-boite-maquette.vercel.app

## Pages

- `/` accueil : pile de boîtes en profondeur, occasions, la boîte en vue éclatée (schéma), format et prix, créations, trois étapes, Carine, appel.
- `/creations` : mur d'instantanés, galerie filtrable (`?filtre=sur-mesure|animaux|voyages|art`), visionneuse avec un lien par boîte (`?boite=un-amour-de-virgul`…), la boîte à sa vraie taille.
- `/atelier` : Carine et le Polaroïd, les quatre gestes, les matières, l'envoi.
- `/sur-mesure` : prix, composeur (occasion, éléments ludiques, légende écrite en direct, remise) qui prépare un **vrai e-mail** pour Carine (`?occasion=mariage|anniversaire|vacances|animal|autre`), délais, questions.
- `/contact` : e-mail, téléphone, formulaire de démonstration, plan simplifié.
- `/404` : « Cette boîte est vide ».

## Construire

```
node outils/generer.mjs          # pages générées depuis donnees/ et source/
node _audit/audit.mjs            # audit standard (--complet pour la version finale)
```
Textes : `donnees/textes/fr.json`. Créations : `donnees/creations.json`. Questions : `donnees/faq.json`. Images : `plan-images.json` puis le pipeline `images/` de la bibliothèque (`produire.mjs`).
Ne jamais modifier à la main les pages `.html` générées.

## Ce que le client doit fournir (à compléter)

- Mentions légales : raison sociale ou nom de l'entrepreneur, adresse, SIRET, directeur de la publication.
- Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse vérifiée le 20 novembre 2026 dans les conditions publiées par Vercel).
- Politique de confidentialité (RGPD) : données recueillies par le formulaire et par e-mail, finalité, durée de conservation, droits.
- Assurances éventuelles, conditions de vente (paiement, frais de port exacts, délais de rétractation pour une pièce personnalisée).
- Crédits : photos des boîtes (Carine Schwalm) ; les images marquées « Illustration générée » ont été créées par intelligence artificielle (atelier, gestes, matières, contact, 404).

Retiré ou remplacé faute d'information :
- Montant des frais de port : « frais de port en plus » (Sur mesure, accueil).
- Horaires de retrait en click & collect : « le jour et l'heure se conviennent par e-mail ou par téléphone » (Contact).
- Liste et prix des pièces en stock (24 à 48 h) : non présentée.
- Exemple de boîte « anniversaire » : le composeur montre « The love cats » comme exemple.
- Photo de Carine : non publiée sur le site actuel ; l'atelier est montré par des illustrations générées (mains, sans visage).

## Point important : les galeries de personnages et de célébrités

Le site actuel montre surtout des boîtes consacrées à des personnages et à des célébrités sous droits (Snoopy, Shadoks, Gaston, Beatles, Marilyn, Elvis, Gainsbourg, Johnny, Queen, Bob Marley, Polnareff, Dalí, films et séries). Les vendre sans licence expose à des poursuites (contrefaçon, droit à l'image). La maquette ne les reprend pas : elle met en avant le sur-mesure, les animaux, les voyages et l'hommage à Toulouse-Lautrec (domaine public).

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), le formulaire de démonstration (Contact), les mentions « à compléter » du pied de page une fois les pages légales écrites, les phrases d'attente ci-dessus une fois les informations fournies.
- Garder : la mention « Illustration générée » sur les images créées par IA, le lien e-mail du composeur (il fonctionne déjà).

## Incohérences du site actuel

- Nom écrit « C'est dans la boite », « C'est dans la boîte » et « C Est Dans La Boite » (titre des pages) : la maquette écrit « C'est dans la boîte ».
- Téléphone seulement sur la page Contact ; aucune mention légale ; « © 2023 » ; adresses de pages /blank-1, /blank-2, /blank-3 ; menu « More » vide.
