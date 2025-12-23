export const surfaces = {
    page: "bg-[var(--surface-background)]",
    panel: "bg-[var(--surface-panel)] rounded-surface border-none shadow-none",
    muted: "bg-[var(--surface-card-muted)] rounded-surface border-none shadow-none",
    card: "bg-[var(--surface-card)] rounded-surface border border-border shadow-surface",
    media: "bg-[var(--surface-media)] rounded-surface border border-border shadow-surface",
    cardInteractive:
        "bg-[var(--surface-card)] rounded-surface border border-border shadow-surface hover:shadow-lg transition-shadow",
    catalog:
        "bg-white text-primary-foreground rounded-surface shadow-surface h-full min-h-[14rem] flex flex-col",
} as const;

export type SurfaceVariant = keyof typeof surfaces;
