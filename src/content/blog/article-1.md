---
title: "Mon premier article"
date: 2026-05-19
description: "Découvrir Astro"
---

## C'est quoi un SSG ?

Avant Astro, je construisais mes sites avec React ou Next.js. 
Beaucoup de configuration, un serveur à gérer, des composants partout.

Un SSG — Static Site Generator — c'est différent. 
Tu écris ton contenu, l'outil génère des fichiers HTML à l'avance. 
Pas de serveur, pas de base de données. Juste des fichiers.

## Pourquoi Astro plutôt qu'un autre ?

Il existe plusieurs SSG : Jekyll, Hugo, Eleventy...

J'ai choisi Astro pour une raison simple : **je connais déjà JavaScript**. 
Pas besoin d'apprendre Ruby ou Go en plus.

Et Astro a un concept élégant — les **îles**. 
Par défaut tout est statique, mais tu peux ajouter des composants 
React interactifs exactement là où tu en as besoin.

## Ce que j'ai construit

Ce blog ! Structure minimaliste, pas de template, tout from scratch :

- Un layout commun avec header et footer
- Une page d'accueil
- Une page blog qui liste les articles
- Des articles écrits en Markdown

## Ce que ça m'a appris

Utiliser un SSG force à bien séparer deux choses :
- La **structure** (layouts, composants)
- Le **contenu** (fichiers Markdown)

C'est une bonne discipline, même quand on revient à Next.js ensuite.