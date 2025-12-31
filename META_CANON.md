# Meta Canon: Labels, Indices, and Pills

> [!IMPORTANT]
> This canon defines the STRICT rules for how meta information (eyebrows, indices, duration) is rendered relative to titles.
> Use this to determine when to use a Pill, when to use an Eyebrow, and when to use an Index.

## 1. Meta Type Classification

All meta labels MUST be classified as exactly ONE of the following types.

| Type | Definition | Representation | Pill Allowed? |
| :--- | :--- | :--- | :--- |
| **Category** | Contextual grouping (e.g. "OUR TEAM", "SERVICES") | **Section Eyebrow** (Text, above title) | ❌ **NEVER** |
| **Index** | Ordering or enumeration (e.g. "01", "02") | **Index Label** (Text, above title) | ❌ **NEVER** |
| **Duration** | Time power/duration (e.g. "5 days", "Week 1") | **Meta Pill** (Visual container) | ✅ **ALLOWED** |

## 2. Structural Placement Rules (Pills)

### Default Placement
- The Meta Pill defaults to **Right-Aligned** in the title row.
- It shares the same baseline block as the title.
- It **MUST NOT** be positioned above the title.

### Responsive Behavior
- If the title row wraps, the pill **MUST** remain right-aligned on its own wrapped line.
- It should behave like a float or flex-end item that drops *below* the text if space is tight, but never *above*.

### Construction
- **NO String Concatenation**: Formats like `Title (5 Days)` are BANNED.
- **Dedicated Primitive**: Uses `<MetaPill>{content}</MetaPill>`.

## 3. Styling Rules (Pills)

### Visual Contract
- **Color**: Brand Background (`bg-primary` / Landal Green) + Black Text (`text-black`).
  - *Context Agnostic*: This styling applies regardless of the card theme (Dark/Light).
- **Shape**: Rounded Full (`rounded-full`).
- **Typography**: Badge/Label token, small, uppercase/bold as defined by `meta` scale.

### Ownership
- Pill styling lives exclusively in `src/design-system/components/MetaPill.tsx`.
- Modules MUST NOT override pill styles (e.g. `className` overrides are forbidden for core styling).

## 4. Scope & Guardrails

### ✅ Approved Adopters
This canon applies **ONLY** to:
1. `InnovatePropositionsModule`
2. `InnovateSolutionsModule`
3. `AutomateApproachModule`

### ❌ Guardrails (Do Not Touch)
| Component | Rule | Status |
| :--- | :--- | :--- |
| **SectionHeader** | Eyebrows remain "stacked above". | ✅ Compliant |
| **CapabilityCard** | Numbering (01/02) remains "stacked above". | ✅ Compliant |
| **FeatureGrid** | Indices remain "stacked above". | ✅ Compliant |

**No other components** may adopt pills unless explicitly authorized by a canon update.

---

**End of Canon**
