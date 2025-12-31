export const surfaces = {
    page: "bg-[var(--surface-background)]",
    panel: "bg-[var(--surface-panel)] rounded-surface border-none shadow-none",
    muted: "bg-[var(--surface-card-muted)] rounded-surface border-none shadow-none",
    card: "bg-[var(--surface-card)] rounded-surface border border-border shadow-surface",
    media: "bg-[var(--surface-media)] rounded-surface border border-border shadow-surface",
    cardInteractive:
        "bg-[var(--surface-card)] rounded-surface border border-border shadow-surface hover:shadow-lg transition-shadow",
    catalog:
        // NOTE: intentionally fixed white surface (brand/marketing). If theme inversion is required, migrate to bg-background.
        "bg-white text-primary-foreground rounded-surface shadow-surface h-full flex flex-col",
    // Clean media surface without border
    mediaFrameless: "bg-[var(--surface-media)] rounded-surface border-none shadow-surface",

    // Safari-compatible Glass Token: Brand Green (Lime) transparency + Blur
    header: "bg-[rgba(207,255,76,0.85)] [backdrop-filter:blur(16px)] [-webkit-backdrop-filter:blur(16px)] rounded-full border border-[var(--toc-nav-border)] shadow-[var(--toc-nav-shadow)]",
} as const;

export type SurfaceVariant = keyof typeof surfaces;
