export const layoutTokens = {
    maxWidth: "w-full", // Removed max-w-6xl
    pageShell: "w-full px-4 md:px-8 lg:px-12", // Removed max-w-6xl mx-auto

    // Canonical Semantic Layouts
    splitBalanced: "grid gap-10 md:grid-cols-2 items-start",
    splitSidebarMain: "grid gap-8 lg:grid-cols-[0.3fr,0.7fr]",
    splitGolden: "grid gap-10 md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] items-start", // Legacy 40/60
    splitGoldenReverse: "grid gap-10 md:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] items-start", // Hero 60/40 (Deprecated for hero reuse)
    splitHero: "grid gap-8 md:gap-12 md:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] items-start", // Responsive Hero Ramp (Stack < MD, Split >= MD)
} as const;
