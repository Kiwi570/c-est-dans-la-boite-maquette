# Rapport d’audit

Projet : `c-est-dans-la-boite-maquette` · 20/11/2026 21:49:01 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-204315-complet-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-200113-standard | standard | toutes | toutes | 33 | 30 | 1 | échecs |
| 20261120-201859-standard | standard | toutes | toutes | 7 | 6 | 1 | échecs |
| 20261120-203555-standard-partiel | standard | toutes | fichiers, mesures, parcours, mouvement | 0 | 2 | 0 | complet |
| **20261120-204315-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 1 | 0 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte:nth-of-type(1) > p.hero-info:nth-of-type(3) « 35 € · 21 × 16 cm · prête en 10 à 15 jours » _(1000×560 sansJs)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /creations : aucune section épinglée ou plein écran.
- Tient dans l'écran /sur-mesure : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mesures
```
