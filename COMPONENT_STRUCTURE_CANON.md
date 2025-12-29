# COMPONENT_STRUCTURE_CANON.md

> **Status**: LOCKED (v1.0)
> **Author**: Antigravity System
> **Date**: 2025-12-29

## Purpose
This document strictly defines the **structure, hierarchy, and ownership** of components within the codebase.
It complements `ARCHITECTURE.md` (System Rules) and `SCALES_CANON.md` (Visual Contracts).

**Rule**: If a component does not fit this model, it is likely over-engineered or misplaced.

---

## 1. The Layer Model

Ownership flows strictly downwards. Inversions are forbidden.

| Layer | Responsibility | Example |
| :--- | :--- | :--- |
| **1. Tokens** | **Raw Values**. Only constants, no logic. | `spacing.ts`, `colors.ts` |
| **2. Primitives** | **Visual Atomic Units**. Own internal consistency & a11y. | `Surface`, `Heading`, `Button` |
| **3. Sections** | **Pure UI Layouts**. copy-agnostic, reusable patterns. | `FeatureGrid`, `Testimonials` |
| **4. Modules** | **Orchestration**. Connects Data + Copy + Sections. | `HomeHeroModule` |
| **5. Pages** | **Composition**. Instantiates Modules only. | `app/page.tsx` |

---

## 2. Component Contracts

### 2.1 The Section Contract (`src/components/sections`)
Sections are **dumb UI blocks**. They:
*   ✅ Accept content via props (`title`, `items`).
*   ✅ Accept configuration via variants (`variant="split"`).
*   ❌ Do **NOT** fetch data.
*   ❌ Do **NOT** contain hardcoded marketing copy.
*   ❌ Do **NOT** own external margins (`my-*`).

### 2.2 The Module Contract (`src/app/_components/**`)
Modules are **smart containers**. They:
*   ✅ Own the **Vertical Rhythm** (padding & bottom gap).
*   ✅ Own the **Content** (text strings).
*   ✅ Map domain entities to UI props.
*   ❌ Do **NOT** define internal layout styles (delegated to Sections).

### 2.3 The Page Contract (`src/app/**`)
Pages are **thin wrappers**. They:
*   ✅ Define SEO metadata.
*   ✅ Compose Modules.
*   ❌ Do **NOT** touch `className`, `div`, or layout utilities.

---

## 3. Standard File Structure

All components must follow this specific import and definition order for scanability.

```tsx
// 1. Imports (External -> Internal -> Tokens)
import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { spacing } from "@/design-system/tokens/spacing";

// 2. Types: Export explicit props interface
export interface MySectionProps {
  eyebrow?: string;
  title: string;
  items: MyItem[];
  variant?: "default" | "alt";
}

// 3. Component Definition
export function MySection({ 
  eyebrow,
  title, 
  items, 
  variant = "default" 
}: MySectionProps) {
  
  // 4. Render
  return (
    <section className="w-full">
      {/* Implementation */}
    </section>
  );
}
```

---

## 4. API & Naming Standards

Standardize prop names to reduce cognitive load.

| Concept | Standard Prop Name | Legacy/Avoid |
| :--- | :--- | :--- |
| **Top Label** | `eyebrow` | `categoryLabel`, `headingLabel`, `tag` |
| **Main Title** | `title` | `heading`, `header` |
| **Body Text** | `intro` or `description` | `text`, `content` |
| **Collections** | `items` | `features`, `list` |
| **Layout Mode** | `variant` | `type`, `layout` |

---

## 5. Content Ownership (Zero-Leak Policy)

**Rule**: Logic components (`Sections`) must be strictly separated from Content (`Modules`).

### Violation Example
```tsx
// ❌ WRONG (Section file)
<Heading>The Only Constant</Heading> 
```

### Correct Implementation
```tsx
// ✅ RIGHT (Section file)
<Heading>{title}</Heading>

// ✅ RIGHT (Module file)
<HeroSection title="The Only Constant" />
```

**Exception**: Structural UI text (e.g., "Loading...", "Next", "Previous") or aria-labels are allowed in Sections.

---

## 6. Audit & Enforcement

We enforce this canon via **Source Code Analysis**, not DOM inspection.

*   **Grepping for Strings**: We scan `src/components/sections` for long string literals (>20 chars) to detect content leaks.
*   **Grepping for Utilities**: We scan for `my-*`, `py-*` to detect layout leaks.
*   **Grepping for Hex**: We scan for `#` color codes to detect token leaks.

*Compliance is binary: You either use the system, or you are wrong.*
