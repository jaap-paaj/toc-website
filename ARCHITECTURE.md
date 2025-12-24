# ARCHITECTURE.md (Consolidated)

## Purpose

This document defines ownership, boundaries, and enforcement within the application.
It answers who owns what, where rules live, and what is forbidden.
It also includes operational guidelines for creating standardized pages and forms.

**This document defines Usage Contracts.**
For visual contracts (spacing, colors, tokens), see `SCALES_CANON.md`.

---

## 1. Non-Negotiables

### 1.1 Pages Are Thin
Pages are composition-only.

✅ **Pages may:**
*   Compose layout shells and components
*   Hold minimal orchestration state (routing, params, submit wiring)
*   Pass props down

❌ **Pages may not:**
*   Define layout grids or columns
*   Define container widths or horizontal padding `px-*`
*   Apply spacing utilities (`gap-*`, `mt-*`, `py-*`) except via approved primitives
*   Apply visual styling (`shadow-*`, `rounded-*`, `border-*`, `bg-*`, `text-*`)

**Rule**: If you need layout or styling, it is not a page concern.

### 1.2 Core Development Rule
Frontend work is composition, not layout design.
If you find yourself adding spacing, grids, or styling in a page file, you are working at the wrong layer.

---

## 2. Ownership Map

Each concern has a single source of truth.

| Concern | Single Owner | Notes |
| :--- | :--- | :--- |
| **Horizontal Alignment** | Container / globals.css | Header and Main must consume the same rule (max-w, px). |
| **Grid / Page Layout** | `WorkflowShell` | Defines columns and responsive grid. |
| **Panels** | `FormPanel` | Tier-1 elevation and radius. |
| **Surfaces** | `Surface` | Tier-2 elevation (Cards, Previews). |
| **Vertical Rhythm** | Stack Primitives | Pages never set spacing manually. |
| **Typography** | `Heading`, `Text` | Semantic text styles only (no `text-lg`). |

---

## 3. Component Hierarchy & Contracts

Ownership flows top → down:
`Page` → `WorkflowShell` → (`FormPanel` / `Surface`) → `Section` → `Field`

### 3.1 Allowed Page Abstractions
Pages may only obtain layout or styling effects via these wrappers:
*   `WorkflowShell` (Layout grid)
*   `FormPanel` (Form container)
*   `Surface` (Card/Content container)
*   Approved stack utilities (e.g., `stack-page`)

### 3.2 Form Contracts
Forms must be built using specific primitives to enforce layout and consistency.
*   **`FormPanel`**: Wrapper for full form column. Enforces `stackXl`, `shadow-panel`, `rounded-panel`.
*   **`FormSection`**: Semantic grouping of inputs. Enforces internal `stackMd` and Header/Description layout.
*   **`FormField`**: Wraps label, description, and control. Enforces input spacing and accessibility.

**Prohibitions**:
*   No layout divs inside pages.
*   No spacing utilities in pages.
*   No manual headers inside form sections.

---

## 4. Standard Implementations

### 4.1 "The Thin Page" Template
Every tool page must follow this structure:

```tsx
export default function Page() {
  return (
    <WorkflowShell
      title="Page Title"
      description="Page Description"
      rightColumn={<PreviewComponent />}
    >
      <FormPanel>
        <FormSection title="Section 1">
           <FormField ... />
        </FormSection>
      </FormPanel>
    </WorkflowShell>
  )
}
```

### 4.2 When to Create a Component
*   **Yes**: UI logic is reused, layout styling must be enforced, or behavior is non-trivial.
*   **No**: Just to add spacing, work around a layout issue, or bypass an existing contract.

---

## 5. Enforcement

The architecture is enforced via a mix of tooling and easy-to-verify constraints.

### 5.1 Tooling
*   `npm run lint:spacing`: Scans for forbidden utility usage (px-*, gap-*) in page files.
*   `npm run lint`: Standard code quality checks.

### 5.2 Review Checklist (Self-Correction)
Before merging, verify:
*   [ ] **No Layout in Pages**: `src/app/**/page.tsx` must not contain `grid`, `flex`, `gap`, `px`, `py`, `my`, `mx`.
*   [ ] **No Styling in Pages**: `shadow-*`, `rounded-*` must utilize semantic tiers or primitives.
*   [ ] **Vertical Rhythm**: `<main>` tags must be clean of spacing. Rhythm is owned by `WorkflowShell`.
*   [ ] **Forms**: Use `FormPanel` / `FormSection` exclusively.

### 5.3 Violation Handling
If a design requires a layout not supported by `WorkflowShell`:
1.  **Do NOT** inline the fix in `page.tsx`.
2.  **Create** a new layout primitive or variant.
3.  **Consume** that primitive in the page.

---

Architecture is considered locked when these rules are met.
