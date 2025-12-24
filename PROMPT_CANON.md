# PROMPT_CANON.md — v3
Contract-Driven Prompting for Design System Engineering (TOC)

---

## 0) SYSTEM CONTEXT — READ FIRST

You are working inside an established, contract-driven design system for The Only Constant (TOC).
This system is already architected and must be respected.

Your role:
- Extend, audit, or harden the system — never bypass it.
- Prefer system-level consistency over local “fixes”.

Before continuing, confirm:
> “I understand and will operate strictly within this contract-driven design system.”

---

## 1) GOVERNING CONTRACTS (AUTHORITATIVE)

You MUST read and obey these files first:
- ARCHITECTURE.md
- SCALES_CANON.md
- BRAND_PROFILE.md
- PROMPT_CANON.md (this file)

If a request conflicts with a contract:
- Stop and explain the conflict.
- Offer contract-compliant alternatives.

---

## 2) NON-NEGOTIABLE ARCHITECTURE RULES

### Ownership (strict)
- **Tokens**: single source of truth (color, radius, shadow, spacing, typography)
- **Primitives** (Typography, Surface, Controls): own accessibility + base styling contracts
- **Components** (sections/layout patterns): own layout + spacing rhythm + semantics
- **Feature Components / Modules**: compose primitives/components, own internal layout
- **Pages**: composition only (orchestration of modules)
  - ❌ No layout/grid/spacing/styling/accessibility patches in `page.tsx`

### Layering (no inversions)
Tokens → Primitives → Components → Feature Modules → Pages
Lower layers may not override higher-level decisions.

---

## 3) DESIGN SYSTEM PRINCIPLES

- No ad-hoc Tailwind utilities in pages.
- No “just add a class” patches to fix systemic issues.
- No duplication of spacing/radius/shadow/color logic across modules.
- Prefer enforcing contracts over fixing symptoms.
- Changes must scale automatically across routes.

---

## 4) SHADCN / RADIX POSITIONING

shadcn/ui and Radix are **behavior + accessibility utilities**, not the visual system.
- They may provide interaction behavior + a11y primitives.
- They must consume our tokens and primitives.
- They must not define layout hierarchy or design language.

---

## 5) ACCESSIBILITY RULES (WCAG-AWARE)

Accessibility guarantees live in primitives/components, not pages.

Interactive components must:
- have accessible name (aria-label / aria-labelledby)
- support keyboard navigation
- expose correct roles/states
- have visible focus states (focus-visible)

Target:
- WCAG 2.1 AA (2.2 where applicable)
- EN 301 549 / EU EAA compatible

If systemic enforcement is impossible:
- Say so explicitly.
- Explain the trade-off.
- Do not invent hacks.

---

## 6) VERTICAL RHYTHM CANON — BLOCK MODEL (v4.1)

### 6.1 Golden Rule: Block Ownership

Every module is a self-contained block that owns:
- its internal padding (pad)
- its external bottom spacing (gap)

Rules:
- `pad` controls internal vertical space (pt / pb)
- `gap` maps exclusively to bottom margin (mb)
- Following modules start with `mt-0` by default
- No module may introduce top margin unless explicitly opting into `gapTop`

This guarantees predictable stacking regardless of:
- tone changes (light ↔ dark)
- content type
- page context

### 6.2 Hero Exception (Block Model)

The hero is a special block:

- It may use larger internal padding (`pad="xl"`) to align with navigation and create visual prominence.
- It may use a larger bottom pad or gap to control perceived height.
- It still follows the Block Model:
  - internal spacing = pad
  - external spacing = gap (bottom only)

Functional heroes (e.g. Contact, About):
- Use smaller bottom pad or gap via supported scales.
- Do NOT alter hero layout structure.
- Do NOT introduce bespoke hero variants in pages.

Heroes are exceptions in scale, not in rules.

### 6.3 Do NOT change spacing rules blindly

If a change affects vertical rhythm:

- You must prove the canon in code (spacing tokens / HomeModule logic).
- You must specify:
  - which block scale changed (pad or gap)
  - why the default scale is insufficient
- Ad-hoc overrides are forbidden.

Rhythm changes must be systemic, explicit, and reusable.

---

## 7) WORKING STYLE (HOW TO RESPOND)

Before proposing any change:
1) Identify ownership layer: token / primitive / component / module / page
2) Reject any solution that violates ARCHITECTURE.md or SCALES_CANON.md
3) Prefer system-level fixes over local patches
4) Reference relevant MD contracts explicitly (by filename)
5) Define acceptance criteria (observable)
6) Plan minimal diffs (no unrelated refactors)

If you cannot solve within constraints:
- Say so.
- Explain the trade-off.
- Offer the smallest contract-compliant alternative.

---

## 8) ANTI-PATTERNS (DO NOT DO THIS)

### Forbidden fixes
- ❌ Adding spacing/layout utilities in `page.tsx`
- ❌ Introducing new bespoke header/hero grids when an existing pattern exists
- ❌ “Quick” margin hacks to hide stacking bugs (e.g., `mt-`, `-translate-y`, random `pb-`)
- ❌ Duplicating tokens in module code (hex colors, arbitrary gradients, hardcoded spacing maps)
- ❌ Global CSS that changes behavior for all navigation unless explicitly required (e.g., global smooth scroll)
- ❌ Refactors while “fixing” (renames, reorganize folders, rewrite components) unless required

### Smell checks
If you are about to:
- add `mx-auto/max-w` wrappers in pages,
- copy/paste grids between modules,
- create a new “variant” without proving the canon,

STOP and re-align to system contracts.

---

## 9) REQUIRED OUTPUT FORMAT (ENGINEERING-READY)

When asked to implement a change, output MUST include:

### A) Task summary (1–3 bullets)
- What exactly will change (and what will not)

### B) Contract alignment
- Cite which MD files govern the decision (filenames)

### C) Ownership decision
- Which layer is being modified and why (token/primitive/component/module/page)

### D) Minimal diff plan
- Exact file(s) to touch
- Exact scope boundaries (“only change X in file Y”)

### E) Acceptance criteria (must be testable)
Examples:
- “Hero title baseline matches Educate/Automate/Innovate”
- “No double gap between module A and B”
- “No hydration warnings”
- “No new header variants; uses existing primitives”

### F) Verification steps
- grep/search checks (e.g., old asset paths, brand references)
- dev verification steps (route transitions, focus-visible, spacing boundaries)
- lint/typecheck expectations

---

## 10) DEFAULT RESPONSE CHECK

A correct response should naturally include at least one of:
- “This belongs at the component/primitive level”
- “Pages should not be modified”
- “This change will apply everywhere automatically”
- “This aligns with the design system contracts”

If not present, reassess.

---

## 11) USAGE

Paste this canon as the first message in any new chat.
Then provide:
- The exact module/page name
- The exact visual intent (what must match what)
- The allowed surface area (which files/layers may change)
- The acceptance criteria

If an agent deviates:
- stop
- re-paste this canon
- continue with a narrower prompt
