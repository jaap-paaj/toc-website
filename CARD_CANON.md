# Card Canon

**Status**: ACTIVE
**Version**: 1.0 (Locked)

This document establishes the Single Source of Truth for all Card-like components in the system. It eliminates ad-hoc layout overrides and guarantees scalable, role-based consistency.

---

## 1. Card Role Taxonomy

Every card component MUST belong to exactly one of the following semantic roles. Role assignment is based on **intent**, not visual style.

| Role | Intent / Purpose | Characteristics |
| :--- | :--- | :--- |
| **NavigationCard** | **Drive action or routing**. Moves the user to a new context deep in the site. | High interactivity (hover/lift). Requires strict alignment for bottom-anchored CTAs. |
| **ContentCard** | **Present information**. Editorial, testimonials, or feature highlights. | Visual rhythm is key. Content length varies, but row alignment is preferred for aesthetics. |
| **UtilityCard** | **Administrative / Structured Data**. Lists, specs, or contact info. | Density focused. Content-driven height. No artificial whitespace needed. |

---

## 2. Height Policy Scale

Height behavior is owned **exclusively** by the `Surface` primitive via the `cardHeight` prop.

| Height Token | Logic | Application Policy |
| :--- | :--- | :--- |
| **`standard`** | `md:min-h-[240px]` | **MANDATORY** for NavigationCard & ContentCard. Ensures visual parity and CTA alignment. |
| **`tall`** | `md:min-h-[300px]` | **RESERVED** for complex NavigationCards with heavy content (e.g., Training Catalog). |
| **`compact`** | `md:min-h-[200px]` | **OPTIONAL** for small features or dense grids. |
| **`auto`** | `""` (No min-height) | **MANDATORY** for UtilityCards. **DEFAULT** for generic surfaces. |

**Rule**: Mobile behavior is ALWAYS `auto` (content-driven / fluid). Min-heights apply only from `md` breakpoint upwards.

---

## 3. Component Mapping Table

All existing card components are mapped as follows. This mapping is **LOCKED**.

| Component Name | Role | Policy (`cardHeight`) | Justification |
| :--- | :--- | :--- | :--- |
| `CapabilityCard` | **NavigationCard** | `standard` | Aligns bottom CTAs in capability grids. |
| `WorkflowCard` | **NavigationCard** | `standard` | Aligns bottom CTAs in hero follower rows. |
| `TrainingCategorySection` | **NavigationCard** | `tall` | Heavy content requires taller baseline for CTA alignment. |
| `EditorialCardGridSection` | **ContentCard** | `standard` | Ensures clean visual rhythm for text-heavy grids. |
| `FeatureGridSection` | **ContentCard** | `standard` | Aligns mixed media (icon vs text) items. |
| `TestimonialsSection` | **ContentCard** | `standard` | Normalizes varying quote lengths. |
| `CatalogGridSection` | **UtilityCard** | `auto` | List-like data requires natural flow; no artificial height. |
| `ContactDetailsModule` | **UtilityCard** | `auto` | Address/Legal blocks are informational, not rhythmic. |

---

## 4. Prohibited Patterns (Strict)

The following patterns are **VIOLATIONS** of this canon:

1.  **❌ Page-Level Overrides**: Never add `min-h-*` or `h-*` classes to a Card instance in a `page.tsx`.
2.  **❌ Ad-Hoc Height Props**: Components must NOT accept props like `minHeight`, `height`, or `size` (unless generic `className` passed to root). Use `cardHeight` prop on `Surface` only.
3.  **❌ Raw Tailwind Values**: No usage of `min-h-[300px]` or `min-h-64` in component files. Use the `spacing.cardMinHeight` tokens.
4.  **❌ Mobile Fixed Heights**: Cards must NEVER have a fixed or minimum height on mobile viewports.

---

## 5. Enforcement (Hard CI Gates)

Card height behavior is not a design preference. It is a system invariant enforced by CI via `npm run audit:card-canon`.

### Audit Rules
1.  **No Raw Utilities**: `min-h-*`, `md:min-h-*`, and `h-[...]` are strictly forbidden in source code (except `tokens` and `Surface.tsx`).
2.  **Prop Ownership**: `cardHeight` prop usage is strictly forbidden outside `Surface.tsx`.
3.  **No Logic Leakage**: Usage of `style={{ height... }}` or `minHeight:` in sections/modules is forbidden.

Any violation will cause `audit:all` and `build` commands to **FAIL**.

### Exemptions
Rare, justified exceptions (e.g., Form Textareas, Hero copy limits) must be explicitly marked with `/* lint:allowed */` to pass CI.
