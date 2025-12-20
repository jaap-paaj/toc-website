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