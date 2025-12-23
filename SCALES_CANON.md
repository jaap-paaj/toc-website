## SCALE CANON — TOKENS, SCALES, ENFORCEMENT (v1)

### 1) Why this exists
AI (and humans) will optimize locally unless we force global constraints.
Therefore: any “design intent” MUST be expressible as a scale, not as ad-hoc values.

**Rule of thumb**
> If it can’t be expressed as a scale step, it’s not allowed in production code.

---

### 2) The Three-Layer Model (Non-negotiable)
We separate concerns into layers with single ownership:

1) **Tone** (context)  
   Defines semantic color meaning per section (light/dark/etc).

2) **Surface / Instrument** (affordances)  
   - Surface: backgrounds/cards/panels/media surfaces
   - Instrument: inputs/controls/readability affordances

3) **Scale** (spacing/typography/radius/etc)  
   All measurable choices are made via scales.

No layer may “borrow” responsibilities from another layer.

---

### 3) Scale Rule (Global)
For ANY measurable property, only these are allowed:
- **token references** (semantic variables/classes)
- **scale steps** (xs/s/m/l/xl, etc)

Disallowed:
- hardcoded hex values (except in globals.css token definitions)
- raw Tailwind palette utilities (e.g. bg-teal-50)
- arbitrary spacing utilities for layout rhythm (pt-*, mb-*, py-*) outside allowed internal-component tokens
- “just one exception” values in modules

---

### 4) Enforcement by Scope
#### 4.1 Modules (Page stacking / vertical rhythm)
Modules must use v4.1 Block Model only:
- `pad`, `padTop`, `padBottom`
- `gap`, `gapTop`, `gapBottom`

Forbidden inside module roots/wrappers:
- pt-/pb-/mt-/mb- utilities (unless purely internal layout within the module content, never for inter-module rhythm)

**Same-tone compaction rule**
- If tone A == tone B (light→light or dark→dark) and you want a seamless block:
  - set `gap="none"` on module A **and**
  - set `padTop="none"` on module B
- Tone switches stay roomy by default (use gap="s" etc).

#### 4.2 Components (internal layout)
Components may use spacing utilities ONLY if:
- they are mapped to a semantic token in `spacing.component.*`
- they do not change module boundary rhythm

Example allowed:
- `spacing.component.formActions`
- `spacing.component.sectionHeader`

Example not allowed:
- random `py-16` on a shared section wrapper (must be a token)

---

### 5) “No Scale = No Change” policy
If a request changes a measurable attribute (spacing, typography, color, radius):
- You must first identify the correct scale/token.
- If it does not exist, you must add it to the relevant tokens file as the single source of truth.
- Only then implement the change.

No one-off edits.

---

### 6) Required Audit Ritual (before/after any systemic change)
Every systemic change must include:
- where the scale lives (file + key)
- which components consume it (list)
- a grep sanity check confirming:
  - no new raw palette utilities
  - no new dark: modifiers for color
  - no new module-root pt/pb/mt/mb leaks
- minimal diff (no unrelated refactors)

---

## TYPOGRAPHY CANON — SCALE & ROLES (v1)

### 1) Problem
Typography drift happens when headings/body styles are chosen per module.
We need a strict, role-based typography scale.

**Goal**
- predictable hierarchy
- minimal variants
- no per-module typography inventions
- easy to tweak globally without cascade bugs

---

### 2) Typography is role-based, not component-based
Typography is defined by:
- semantic **role** (hero title, section title, eyebrow, body, caption)
- size step from a **single scale**

Components must request a role, not a font-size.

---

---

---

### 3) Allowed roles (initial set)
These are the only allowed public roles for headings/text:

**Headings**
- `display.heroPrimary` (Home - Largest)
- `display.heroSecondary` (Feature Pages - Medium)
- `display.heroTertiary` (Contact/About - Smallest)
- `display.section` (Section Headers)
- `heading.card`
- `heading.subsection`

### 3.1 Hero Tier Closure Rule
- The 3 tiers above (`heroPrimary`, `heroSecondary`, `heroTertiary`) are the **ONLY** allowed hero headline sizes.
- No additional hero tiers may be introduced.
- All hero modules must consume exactly one of these roles.
- No component may define a “hero-like” size outside this system.

**Meta**
- `eyebrow`
- `label`

**Body**
- `body.lg`
- `body.md` (default)
- `body.sm`

**Utility**
- `caption`

### 3.2 Breakpoint Semantics (Scale Anchors)
Typography scales are anchored to **intent**, not just screen width:
- **Mobile (`base`)** and **Desktop (`xl`)** are the authoritative intent anchors where visual design is explicitly defined (Figma).
- Intermediate breakpoints (`md`, `lg`) are **interpolations/bridges**, not primary design targets.
- Only `base` + `xl` values may be calibrated directly to explicit Figma pixel values.
- `md`/`lg` exist purely for optical continuity between the anchors.

### 3.3 Arbitrary Value Guardrails
Arbitrary Tailwind values (e.g., `text-[9rem]`) are permitted **ONLY** under these strict constraints:
1.  **Location**: Allowed ONLY inside token files (`typography.ts`, `spacing.ts`). Never in modules/components.
2.  **Origin**: Must correspond to an explicit Figma value (e.g., 144px).
3.  **Format**: Must resolve to a round, human-readable number (e.g., `9rem` for 144px, `5rem` for 80px). No fractional "magic numbers" like `6.75rem` unless mathematically required for a specific ratio.
4.  **Documentation**: Must be documented inline with the Figma reference.

### 3.4 Brand Foreground Rule (Accessibility)
If a section uses the Brand Lime background (`tone="brand"`), the foreground MUST be forced to Dark (Neutral-950) for contrast.
- This is handled systemically via the `.tone-brand` scope in `globals.css`.
- It does NOT set the background color (the module owns that).
- It ONLY overrides `--foreground`, `--muted-foreground`, and `--border` to neutral steps.

If you need something else:
- add a role to `typography.ts` (SSOT)
- do not inline a custom class

---

### 4) Implementation contract
Single source of truth:
- `src/design-system/tokens/typography.ts`

Usage contract:
- Heading/Text primitives must map roles → classes
- Modules must use Heading/Text/SectionHeader with roles/variants
- No raw `text-[size]`, `leading-*`, `tracking-*` scattered in modules unless part of a defined token/role.

Allowed exception (internal micro-layout):
- rare `tracking-widest` for a label IF it’s part of a tokenized role (e.g. eyebrow)

---

### 5) Minimal enforcement step (non-destructive)
We do NOT refactor everything at once.
We introduce:
- roles in typography tokens
- a lint-ish grep checklist for new code
- then migrate “hot paths” opportunistically (hero + section headers first)

---

### 6) Typography audit grep checks
Must be true after hardening:
- No new `text-\[` or `text-\d` ad-hoc sizes in modules
- No module introduces new heading styles outside primitives
- SectionHeader variants map to roles, not custom classes