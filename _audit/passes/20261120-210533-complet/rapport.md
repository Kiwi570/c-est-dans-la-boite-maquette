# Rapport d’audit

Projet : `c-est-dans-la-boite-maquette` · 20/11/2026 22:27:09 · 22 min · 6 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-210533-complet` · version ?v=1
- Échecs : **0**
- À regarder : **8**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (10), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (5), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-200113-standard | standard | toutes | toutes | 33 | 30 | 1 | échecs |
| 20261120-201859-standard | standard | toutes | toutes | 7 | 6 | 1 | échecs |
| 20261120-203555-standard-partiel | standard | toutes | fichiers, mesures, parcours, mouvement | 0 | 2 | 0 | complet |
| 20261120-204315-complet-partiel | complet | toutes | mesures, ecran | 1 | 0 | 0 | échecs |
| 20261120-204911-complet-cible-partiel | complet | / | fichiers, mesures | 1 | 1 | 0 | échecs |
| 20261120-205030-complet-cible-partiel | complet | / | fichiers, mesures | 0 | 1 | 0 | complet |
| **20261120-210533-complet** (celle-ci) | complet | toutes | toutes | 0 | 8 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### numéro de version (1)

- **numéro de version** — ?v=1 est celui de la dernière livraison : à changer avant de livrer

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### fluidité (1)

- **fluidité** — `/` — 4 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — img — developpement : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 8 étape(s) notée(s), 105 min de travail pour 145 min de budget, 10 min d’attente de l’utilisateur.
- Journal : « audit, regard neuf et corrections » 48 min pour 25 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2690 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2564 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2632 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /creations (1366×768) : 2552 ms depuis le premier octet
- film de l'ouverture /creations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sur-mesure (1366×768) : 2626 ms depuis le premier octet
- Ouverture / (390×844) : 2686 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2560 ms depuis le premier octet
- Ouverture /contact (390×844) : 2637 ms depuis le premier octet
- Ouverture /creations (390×844) : 2587 ms depuis le premier octet
- film de l'ouverture /creations 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /sur-mesure (390×844) : 2621 ms depuis le premier octet
- film de l'ouverture /sur-mesure 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 496 images d’intro, 40 de voile et 129 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /sur-mesure : aucune section épinglée ou plein écran.
- Fluidité /atelier 1366×768 (molette) : 1 % d'images lentes sur 277, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 184, tâche la plus longue 0 ms
- Fluidité /creations 1366×768 (molette) : 2 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité /sur-mesure 1366×768 (molette) : 0 % d'images lentes sur 239, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /creations 390×844 (doigt) : 0 % d'images lentes sur 1350, tâche la plus longue 0 ms
- Fluidité /sur-mesure 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Vitesse / : 0.56 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /creations : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /sur-mesure : 0.48 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
