export const surfaces = {
    page: "bg-background",
    panel: "bg-muted/50 rounded-surface border-none shadow-none",
    muted: "bg-gray-100 rounded-surface border-none shadow-none",
    card: "bg-card rounded-surface border border-border shadow-surface",
    cardInteractive:
        "bg-card rounded-surface border border-border shadow-surface hover:shadow-lg transition-shadow",
    catalog:
        "bg-white text-primary-foreground rounded-surface shadow-surface h-full min-h-[14rem] flex flex-col",
} as const;

export type SurfaceVariant = keyof typeof surfaces;
