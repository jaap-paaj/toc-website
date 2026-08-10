# SCALES_CANON.md (Consolidated)

## Purpose

Defines the **Visual System**. This is the single source of truth for spacing, typography, colors, shadows, and radius.
If it can't be expressed as a scale step, it is not allowed in production code.

**This document defines Visual Contracts.**
For ownership and component usage contracts, see `ARCHITECTURE.md`.

---

## 1. The Three-Layer Model (Non-negotiable)

We separate concerns into layers with single ownership:

1.  **Tone** (Context): Defines semantic color meaning per section (light/dark/brand).
2.  **Surface / Instrument** (Affordances):
    *   *Surface*: Backgrounds, cards, panels.
    *   *Instrument*: Inputs, controls, interactivity.
3.  **Scale** (Measurable): Spacing, typography, radius, shadows.

No layer may "borrow" responsibilities from another layer.

---

## 2. Scale Rule (Global)

For ANY measurable property, only these are allowed:
*   **Token References** (semantic variables/classes)
*   **Scale Steps** (xs/s/m/l/xl, etc.)

**Disallowed**:
*   Hardcoded hex values.
*   Raw Tailwind palette utilities (e.g., `bg-teal-50`).
*   Arbitrary spacing utilities (`pt-*`, `mb-*`) outside allowed internal-component tokens.

---

## 3. Typography Canon

Typography is **Role-Based**, not component-based.
Components must request a role, not a font-size.

### 3.1 Allowed Roles (The Public API)

| Role Category | Roles | Usage |
| :--- | :--- | :--- |
| **Display** | `display.hero`, `display.heroSecondary`, `display.heroTertiary`, `display.section` | Landing page heroes and section headers. |
| **Heading** | `heading.page`, `heading.subsection`, `heading.card`, `heading.prompt` | Structural headings (H1-H3) and long-form prompts/questions (sentence case, serif bold). |
| **Body** | `body.lg` (Hero Intro ONLY), `body.md` (Default), `body.sm` (Compact) | Reading text. |
| **Meta** | `meta.eyebrow`, `meta.label`, `meta.badge`, `meta.code` | UI labels and micro-copy. |
| **UI** | `ui.button.*`, `ui.nav.*`, `ui.input.value` | Interactive elements. |

**Paragraph Role Canon (Strict):**
*   `body.lg`: Only allowed for the single lead paragraph in a Hero Section.
*   `body.md`: Must be used for all other paragraphs and section descriptions.

### 3.2 Implementation Contract
*   Single Source of Truth: `src/design-system/tokens/typography.ts`
*   Theme values (custom leadings, shadows, radii): the `@theme` block in `src/app/globals.css`. **Not** `tailwind.config.ts` — Tailwind v4 does not load it (no `@config` directive); values defined only there silently do not exist.
*   **Rule**: No raw typography scale utilities in modules.
    *   Forbidden: `text-{size}`, `font-{weight}`, `leading-*`, `tracking-*`, `uppercase`, `lowercase`, `capitalize`.
    *   Allowed: `text-{color}` and `text-{alignment}` (covered by other audits).

### 3.3 Leading Contract (Line-Height per Role)

Every role's line-height is a contract, not a side effect of its font-size.
These are the ratios each variant must **render** (`getComputedStyle`), at every breakpoint:

| Role | Leading class | Ratio | Why |
| :--- | :--- | :--- | :--- |
| `display.hero` | `leading-hero-tight` | **0.85** | Uppercase serif display: caps carry no descenders, so negative half-leading binds multi-line heroes into one block. |
| `display.heroSecondary` / `heroTertiary` / `section` | `leading-section-tight` | **0.9** | Same principle, slightly looser at sub-hero scale. |
| `display.editorialStatement` | `leading-none` | **1.0** | Iconic single statements; no binding needed, no cramping wanted. |
| `heading.page` | `leading-tight` | **1.25** | Structural H1: tighter than prose, but with enough air to stay readable when it wraps. |
| `heading.subsection` / `card` / `prompt` | `leading-snug` | **1.375** | Multi-line headings and long-form prompts must stay legible as sentences. |
| `body.lg` / `md` / `sm` | `leading-relaxed` | **1.625** | Reading text. Matches `--line-height-relaxed` and the `body { line-height: 1.6 }` baseline intent. |
| `ui.nav.listLink` | `leading-tight` | **1.25** | A wrapped label's second line must bind to its first, not read as the next list item. |
| `meta.*`, other `ui.*` | *(none)* | Tailwind per-size default | Single-line labels and controls; the size's native line-height is acceptable and box height is governed by the component, not the type. |

**Class-order rule (hard):** in composed variant strings, `leading-*` comes **after** the `text-*` scale. Tailwind's `text-*` utilities carry their own line-height, so `tailwind-merge` treats a preceding `leading-*` as a resolved conflict and strips it before it reaches the HTML. This dropped the leading of twelve variants unnoticed.

**Source rule:** custom leading values (`hero-tight`, `section-tight`) are defined as `--leading-*` in the `@theme` block of `globals.css`. A value that exists only in `tailwind.config.ts` generates no class.

**Verification rule:** this contract is checked against the rendered page (`getComputedStyle` ratio per variant), not against source strings or the DOM class list. A promised leading that does not render is a violation even when every audit is green.

---

## 4. Spacing System

All vertical spacing is handled through **Gap-based Stacks**.

### 4.1 Stack Tokens
We define semantic stack tokens to enforce consistent rhythm.

| Token | Class | Usage |
| :--- | :--- | :--- |
| `stackXs` | `flex flex-col gap-2` | Tight grouping (Title + Desc). |
| `stackSm` | `flex flex-col gap-3` | UI lists. |
| `stackMd` | `flex flex-col gap-4` | Default component rhythm. |
| `stackLg` | `flex flex-col gap-6` | Section internals. |
| `stackXl` | `flex flex-col gap-8` | Major section divisions. |
| `stackPage` | `flex flex-col gap-12` | Page-level module stacking. |

### 4.2 Module Rhythm (Block Model)
Every module owns:
1.  **Internal Padding** (`pad`): Controls internal vertical space.
2.  **External Bottom Gap** (`gap`): Controls exclusive bottom margin.

**Prohibition**: No `mt-*` on modules. Modules always stack.

---

## 5. Elevation & Radius Tiers

### 5.1 Elevation (Shadows)
| Tier | Class | Usage |
| :--- | :--- | :--- |
| **Tier 1** | `shadow-panel` | Forms, controls, dropdowns. |
| **Tier 2** | `shadow-surface` | Cards, previews, page containers. |
| **Tier 3** | `shadow-card-hover` | Interactive lift states. |

### 5.2 Radius
| Tier | Class | Usage |
| :--- | :--- | :--- |
| **Tier 1** | `rounded-panel` | Buttons, inputs, standard components. |
| **Tier 2** | `rounded-surface` | Large containers, cards, modals. |

---

## 6. Audit Ritual
If a request changes a measurable attribute:
1.  Identify the scale/token.
2.  If missing, add it to the Token file.
3.  Audit for leaks (grep check).

    **Typography Scale Audit (Strict):**
    ```bash
    rg -n --hidden \
      --glob '!**/.next/**' \
      --glob '!**/node_modules/**' \
      --glob '!src/design-system/tokens/typography.ts' \
      '(\btext-(2?xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)\b|\bfont-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)\b|\bleading-|\btracking-|\buppercase\b|\blowercase\b|\bcapitalize\b)' \
      src
    ```
4.  No one-off edits.


### 6.1 DOM Output vs Source Enforcement

Audits strictly enforce **component source code** compliance.
*   **Source Code**: Must use tokens (e.g., `typography.variants.meta.eyebrow`).
*   **Rendered DOM**: Will legitimately contain raw Tailwind classes (e.g., `text-sm uppercase tracking-widest`).

**Rule**: Do not judge compliance by inspecting the DOM. Compliance is determined solely by source-code audits.

---

## 7. System Maturity Status

Current enforcement level of each system.

| Status | Definition | Systems |
| :--- | :--- | :--- |
| **LOCKED** | CI-gated. Violations fail build. | Typography, Radius/Shadows, Module Vertical Rhythm, States, Color, Dark/Light Mode, Page Grids, Content Shape. |
| **VALIDATED** | Semantic requirement. No strict gate yet. | Motion, Iconography. |
| **IMPLICIT** | Convention-based. No explicit canon. | Grids (Module-owned contexts). |
