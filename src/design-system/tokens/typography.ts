export const typography = {
    // Scale
    scale: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl",
        "5xl": "text-5xl",
        "6xl": "text-6xl",
        "7xl": "text-7xl",
    },

    // Semantic Variants
    // Semantic Roles (Canon v1)
    variants: {
        display: {
            hero: {
                900: "font-serif tracking-tight leading-[0.85] text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] 2xl:text-[9rem] uppercase font-black", // Home
                800: "font-serif tracking-tight leading-[0.9] text-5xl sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5rem] uppercase font-black", // Feature Pages
                700: "font-serif tracking-tight leading-[0.9] text-4xl sm:text-[2.5rem] md:text-5xl lg:text-[3.75rem] xl:text-7xl 2xl:text-7xl uppercase font-black", // Contact/About
            },
            section: "font-serif tracking-tight leading-[0.9] text-4xl md:text-6xl lg:text-7xl uppercase font-black",
        },
        heading: {
            // Structural Page Headings
            page: "font-serif tracking-tight leading-tight text-3xl md:text-5xl lg:text-6xl font-black uppercase", // H1 default
            subsection: "font-serif tracking-tight leading-snug text-2xl md:text-4xl font-black uppercase", // Section H2/H3
            card: "font-serif tracking-tight leading-snug text-xl md:text-2xl font-bold uppercase", // Card Titles
        },
        body: {
            lg: "font-sans text-lg md:text-xl leading-relaxed font-normal", // Lead / Intro
            md: "font-sans text-base leading-relaxed font-normal", // Default prose
            sm: "font-sans text-sm leading-relaxed font-normal", // Compact prose
        },
        meta: {
            // UI Labels & Micro-copy
            eyebrow: "font-sans text-sm md:text-base font-bold uppercase tracking-widest", // Section Logic
            label: "font-sans text-xs font-bold uppercase tracking-wider", // Form Labels
            badge: "font-sans text-xs font-bold uppercase tracking-wide", // Pills / Tags
            code: "font-mono text-sm", // Feature IDs, technical data
        },
        ui: {
            // Interactive Elements
            button: {
                lg: "font-sans text-base font-bold tracking-wide uppercase",
                md: "font-sans text-sm font-bold tracking-wide uppercase",
                sm: "font-sans text-xs font-bold tracking-wide uppercase",
            },
            nav: {
                link: "font-sans text-sm font-bold uppercase tracking-wide",
                brand: "font-sans text-2xl font-bold uppercase tracking-wide", // Header Logo
            },

            input: {
                value: "font-sans text-base md:text-sm font-medium", // Inputs / Selects
            },
            placeholder: {
                title: "font-sans text-lg font-medium", // Empty states
            },
        },
        // Legacy/Utility bucket (Deprecated - aim to remove)
        utility: {
            caption: "font-sans text-sm text-muted-foreground",
        }
    },
} as const;

export type TypographyRole =
    | "display.hero.900"
    | "display.hero.800"
    | "display.hero.700"
    | "display.section"
    | "heading.page"
    | "heading.subsection"
    | "heading.card"
    | "body.lg" | "body.md" | "body.sm"
    | "meta.eyebrow" | "meta.label" | "meta.badge" | "meta.code"
    | "ui.button.lg" | "ui.button.md" | "ui.button.sm"
    | "ui.nav.link" | "ui.nav.brand" | "ui.input.value"
    | "ui.placeholder.title"
    | "utility.caption";

// Derived types
export type TypographyScale = typeof typography.scale;
