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
        "bg-white text-primary-foreground rounded-surface shadow-surface h-full min-h-[14rem] flex flex-col",
    // Clean media surface without border
    mediaFrameless: "bg-[var(--surface-media)] rounded-surface border-none shadow-surface",
} as const;

export type SurfaceVariant = keyof typeof surfaces;
