ARCHITECTURE.md

Purpose

This document defines ownership, boundaries, and enforcement within the application.
It answers who owns what, where rules live, and what is forbidden.

This document does not define visual styling, tokens, or Tailwind implementation details.

⸻

Non-Negotiables

Pages Are Thin

Pages are composition-only.

✅ Pages may:
	•	Compose layout shells and components
	•	Hold minimal orchestration state (routing, params, submit wiring)
	•	Pass props down

❌ Pages may not:
	•	Define layout grids or columns
	•	Define container widths or horizontal padding
	•	Apply spacing utilities (px-*, gap-*, mt-*, py-*) except via approved primitives
	•	Apply visual styling (shadow-*, rounded-*, border-*, bg-*, text-*)

Rule: If you need layout or styling, it is not a page concern.

⸻

Ownership Map

Each concern has a single source of truth.

Concern	Single Owner	Notes
Horizontal page alignment (container + padding)	Container / globals.css	Header and Main must consume the same rule
Grid / page layout structure	WorkflowShell	Defines columns and responsive grid
Panels (forms / primary controls)	FormPanel	Tier-1 elevation and radius
Surfaces (cards / previews / page containers)	Surface	Tier-2 elevation and radius
Vertical rhythm (page stack spacing)	stack-page / layout primitives	Pages never set spacing manually
Typography	Design-system primitives	Semantic text styles only


⸻

Component Contracts

Ownership flows top → down:

Page → WorkflowShell → (FormPanel / Surface) → Section → Field

Rules:
	•	Higher levels own layout constraints (grid, container, spacing systems).
	•	Lower levels own internal composition only.
	•	Lower levels never override higher-level layout decisions.

⸻

Allowed Abstractions

Pages may only obtain layout or styling effects via these abstractions:
	•	WorkflowShell (grid and page layout)
	•	Container (horizontal alignment)
	•	FormPanel (panel tier)
	•	Surface (surface tier)
	•	Approved stack utilities (e.g. stack-page)

If a needed abstraction does not exist, create it once, then consume it everywhere.

⸻

Enforcement

The architecture is enforcing via a mix of tooling and easy-to-verify constraints.

### Tooling
*   `npm run lint:spacing`: Scans for forbidden utility usage (px-*, gap-*) in page files.
*   `npm run lint`: Standard code quality checks.

### Review Checklist (Self-Correction)
Before merging, verify:
*   [ ] **No Layout in Pages**: `src/app/**/page.tsx` must not contain `grid`, `flex`, `gap`, `px`, `py`, `my`, `mx`.
*   [ ] **No Styling in Pages**: `shadow-*` and `rounded-*` must utilize semantic tiers or primitives.
*   [ ] **Vertical Rhythm**: `<main>` tags must be clean of spacing. Rhythm is owned by `PageLayout`.

### Violation Handling
If a design requires a layout not supported by `WorkflowShell` or `PageLayout`:
1.  **Do NOT** inline the fix in `page.tsx`.
2.  **Create** a new layout primitive or variant (e.g., `SplitLayout`).
3.  **Consume** that primitive in the page.

⸻

Architecture is considered locked when these rules are met.