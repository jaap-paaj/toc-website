# PROJECT_LEARNINGS.md

## 2025-12 — Design System & Vibe Coding

### Learning 1 — Prompts zonder contracts veroorzaken regressie
Als prompts geen expliciete verwijzing maken naar:
- ARCHITECTURE.md
- FRONTEND_GUIDELINES.md
- FORM_FOUNDATION.md

dan vervalt de AI in:
- page-level fixes
- ad-hoc styling
- duplicatie van layout logic

➡ Oplossing:
Alle prompts moeten contract-aware zijn.
Zie PROMPT_CANON.md.

---

### Learning 2 — Form structuur is content-architectuur
Probleem:
- Aspect ratio soms hoofdkeuze, soms subkeuze
- Contextvelden wisselen van plek

Besluit:
We hanteren een vaste 4-delige content-architectuur:
1. Input
2. Context
3. Output
4. Notes

➡ Vastgelegd in FORM_FOUNDATION.md.

---

### Learning 3 — shadcn/ui is niet het Design System
shadcn levert:
- toegankelijkheid
- interactielogica (Radix)

Maar:
- tokens
- spacing
- typografie
- elevation

zijn **100% van ons**.

➡ shadcn = implementation detail, niet de bron.

---

## 2026-08 — Regelafstand

### Learning 4 — Een token is pas waar als het rendert
Twaalf typografie-varianten beloofden een regelafstand die de browser nooit
heeft laten zien. Twee onafhankelijke oorzaken, maandenlang onzichtbaar:

1. **Klassevolgorde.** `leading-*` stond vóór `text-*` in de variant-strings.
   Tailwind's `text-*` draagt zelf een line-height, dus `tailwind-merge`
   (via `cn()`) zag een conflict en streepte de `leading-*` weg — die haalde
   de HTML niet eens.
2. **Dode config.** `leading-hero-tight` en `leading-section-tight` stonden
   alleen in `tailwind.config.ts`, dat Tailwind v4 zonder `@config`-directive
   helemaal niet laadt. De klassen bestonden niet in de gegenereerde CSS.

Waarom kon dit blijven liggen:
- Er was **geen geschreven contract** voor regelafstand. De canon verbood
  `leading-*` in componenten, maar zei nergens welke ratio elke variant hoort
  te hebben. Het tokenbestand was de enige bron — en precies die bron rendert
  niet. (Zelfde patroon als Learning 1: zonder contractverwijzing geen toetsing.)
- Alle audits toetsen **broncode**, geen gerenderde output. Bron was compliant;
  de pagina niet.
- Visuele baselines zijn ooit geaccepteerd mét de bug erin, dus screenshots
  bevestigden de verkeerde werkelijkheid.

➡ Oplossingen:
1. Regelafstand staat nu als contract in `SCALES_CANON.md` §3.3, per variant,
   met ratio en reden — inclusief de klassevolgorde-regel en de bronregel
   (`@theme`, niet `tailwind.config.ts`).
2. Een belofte in een token telt pas als hij is **gemeten op de gerenderde
   pagina** (`getComputedStyle`), op meerdere breakpoints. Broncode-audits
   en screenshots-tegen-oude-baselines bewijzen dit soort dingen niet.
3. `test:visual:update` nooit draaien vóór de wijziging is beoordeeld:
   baselines accepteren klakkeloos wat de pagina op dat moment doet.

**Naschrift — het hele bestand was dood.** Na de leading-fix bleek de rest van
`tailwind.config.ts` (colors, boxShadow, fontFamily) óók volledig gedupliceerd
in het `@theme`-blok van `globals.css`. Geverifieerd: builds mét en zónder het
bestand leveren byte-identieke CSS, en niets verwijst ernaar. Het bestand is
verwijderd, juist omdat het gevaarlijk was zolang het bestond: wie er een
kleur in aanpast ziet niets veranderen en gaat zoeken — dezelfde bug als de
leadings, maar dan voor kleuren en schaduwen. In Tailwind v4 zonder
`@config`-directive is `@theme` in `globals.css` de enige themabron.