// Tier-0 Typography Scale (Native Tailwind Steps Only)
export const scales = {
    display: {
        // Primary Hero (Home) - 48px -> 72px -> 96px
        hero: "leading-hero-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl",
        // Secondary Hero (Feature) - 36px -> 60px -> 72px
        heroSecondary: "leading-section-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl",
        // Tertiary Hero (Contact/About) - 30px -> 48px -> 60px
        heroTertiary: "leading-section-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl",
        // Section Headers - 36px -> 48px -> 60px
        section: "leading-section-tight text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl",
    },
    heading: {
        // Page H1 - 30px -> 36px -> 48px
        page: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl",
        // Subsection H2/H3 - 24px -> 30px -> 36px
        subsection: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl",
        // Card/Module Titles - 20px -> 24px
        card: "text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl",
    },
    body: {
        // Lead - 18px -> 20px
        lg: "text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",
        // Default - 16px
        md: "text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base",
        // Compact - 14px
        sm: "text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
    },
    meta: {
        eyebrow: "text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base",
        code: "text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
        label: "text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs",
        badge: "text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs",
    },
    ui: {
        brand: "text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl",
        buttonLg: "text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base",
        buttonMd: "text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
        buttonSm: "text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs",
        navLink: "text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
        input: "text-base sm:text-base md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
        placeholder: "text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg",
    }
} as const;

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
            // Flattened Hero Roles (No more 900/800/700)
            hero: `font-serif tracking-tight uppercase font-black ${scales.display.hero}`, // Home
            heroSecondary: `font-serif tracking-tight uppercase font-black ${scales.display.heroSecondary}`, // Feature Pages
            heroTertiary: `font-serif tracking-tight uppercase font-black ${scales.display.heroTertiary}`, // Contact/About
            section: `font-serif tracking-tight uppercase font-black ${scales.display.section}`,
        },
        heading: {
            // Structural Page Headings
            page: `font-serif tracking-tight leading-tight font-black uppercase ${scales.heading.page}`, // H1 default
            subsection: `font-serif tracking-tight leading-snug font-black uppercase ${scales.heading.subsection}`, // Section H2/H3
            card: `font-serif tracking-tight leading-snug font-bold uppercase ${scales.heading.card}`, // Card Titles
        },
        body: {
            lg: `font-sans leading-relaxed font-normal ${scales.body.lg}`, // Lead / Intro
            md: `font-sans leading-relaxed font-normal ${scales.body.md}`, // Default prose
            sm: `font-sans leading-relaxed font-normal ${scales.body.sm}`, // Compact prose
        },
        meta: {
            // UI Labels & Micro-copy
            eyebrow: `font-sans font-bold uppercase tracking-widest ${scales.meta.eyebrow}`, // Section Logic
            label: `font-sans font-bold uppercase tracking-wider ${scales.meta.label}`, // Form Labels
            badge: `font-sans font-bold uppercase tracking-wide ${scales.meta.badge}`, // Pills / Tags
            code: `font-mono ${scales.meta.code}`, // Feature IDs, technical data
        },
        ui: {
            // Interactive Elements
            button: {
                lg: `font-sans font-bold tracking-wide uppercase ${scales.ui.buttonLg}`,
                md: `font-sans font-bold tracking-wide uppercase ${scales.ui.buttonMd}`,
                sm: `font-sans font-bold tracking-wide uppercase ${scales.ui.buttonSm}`,
            },
            nav: {
                link: `font-sans font-bold uppercase tracking-wide ${scales.ui.navLink}`, // Mapping to MD size (sm/sm/sm/sm...) based on prev val
                brand: `font-sans font-bold uppercase tracking-wide ${scales.ui.brand}`, // Header Logo
            },
            input: {
                value: `font-sans font-medium ${scales.ui.input}`, // Inputs / Selects
            },
            placeholder: {
                title: `font-sans font-medium ${scales.ui.placeholder}`, // Empty states
            },
            // Form specific (file inputs)
            inputFile: `file:font-sans file:font-medium file:text-foreground ${scales.ui.input}`,
        },
        // Legacy/Utility bucket (Deprecated - aim to remove)
        utility: {
            caption: `font-sans text-muted-foreground ${scales.meta.code}`, // Assuming matches code/body.sm size
        }
    },
} as const;

export type TypographyRole =
    | "display.hero"
    | "display.heroSecondary"
    | "display.heroTertiary"
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
