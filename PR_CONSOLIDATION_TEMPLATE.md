# PR Template — TOC Consolidation Pass

## Scope
- This PR is **consolidation-only** (no new features or pages)
- Changes are limited to:
  - Home
  - Educate
  - Shared Sections
  - Design System primitives
- Minimal diffs only; no unrelated refactors

## Contracts
- I verified compliance with:
  - ARCHITECTURE.md
  - FRONTEND_GUIDELINES.md
  - FORM_FOUNDATION.md
  - PROMPT_CANON.md
  - BRAND_PROFILE.md
  - PROJECT_SUMMARY.md
- Pages remain **composition-only** (no spacing/layout in `page.tsx`)
- No page-level forks or duplicated header variants introduced

## Canon decisions

### SectionHeader
- Uses the **canonical header pattern** (Our Approach baseline)
- Variants used are **explicit only**:
  - `variant="stacked"` **or** `variant="split"`
  - `divider={true|false}` (only when required)
- No bespoke header layouts remain in touched areas

### Vertical rhythm
- Section spacing is applied via **semantic tokens/props**, not ad-hoc `py-*`
- Only allowed spacings in touched components:
  - `spacing="standard"`
  - `spacing="compact"`
  - `spacing="none"` (must be justified)
- No new arbitrary spacing values introduced

### Surface / tone
- No hardcoded hex colors added
- Any new background behavior maps to a **token or variant**
  - Or is explicitly justified as a one-off

## Drift checks
- No nested containers causing unintended left/right padding
- Section titles align with the navigation/container baseline
- No non-interactive cards imply clickability (hover or pointer cursor)
- Typography scale matches the design system (no one-off sizing)

## Evidence

### Files changed (by category)
- **Design system primitives:**
  - …
- **Shared sections:**
  - …
- **Home modules:**
  - …
- **Educate modules:**
  - …

### Before / After verification (required)
- Home: visually consistent section rhythm (top-to-bottom scan)
- Educate: visually consistent section rhythm (top-to-bottom scan)
- Header variants: only canonical variants appear
- No regressions in alignment (nav-to-section left edge)

## Justifications
- Any `spacing="none"` usage:
  - Component:
  - Reason:
- Any one-off surface behavior (e.g. split background):
  - Component:
  - Reason:
  - Why it cannot be a token/variant (if applicable)

## Ready-to-scale gate (must pass)
- I can add a new page (Automate / Innovate) by composing modules and sections  
  **without inventing new spacing or header patterns**