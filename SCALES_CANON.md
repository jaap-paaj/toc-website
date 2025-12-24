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
| **Heading** | `heading.page`, `heading.subsection`, `heading.card` | Structural headings (H1-H3). |
| **Body** | `body.lg` (lead), `body.md` (default), `body.sm` (compact) | Reading text. |
| **Meta** | `meta.eyebrow`, `meta.label`, `meta.badge`, `meta.code` | UI labels and micro-copy. |
| **UI** | `ui.button.*`, `ui.nav.*`, `ui.input.value` | Interactive elements. |

### 3.2 Implementation Contract
*   Single Source of Truth: `src/design-system/tokens/typography.ts`
*   Tailwind Config: `tailwind.config.ts` extends theme to map tokens.
*   **Rule**: No raw typography scale utilities in modules.
    *   Forbidden: `text-{size}`, `font-{weight}`, `leading-*`, `tracking-*`, `uppercase`, `lowercase`, `capitalize`.
    *   Allowed: `text-{color}` and `text-{alignment}` (covered by other audits).

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

---

## 7. System Maturity Status

Current enforcement level of each system.

| Status | Definition | Systems |
| :--- | :--- | :--- |
| **LOCKED** | CI-gated. Violations fail build. | Typography, Radius/Shadows, Module Vertical Rhythm, States, Color, Dark/Light Mode, Page Grids. |
| **VALIDATED** | Semantic requirement. No strict gate yet. | Motion, Iconography. |
| **IMPLICIT** | Convention-based. No explicit canon. | Grids (Module-owned contexts). |
