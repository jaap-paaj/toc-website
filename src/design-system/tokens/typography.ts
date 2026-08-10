// Tier-0 Typography Scale (Native Tailwind Steps Only)
// Sizes only — line-height lives in the variant composition below, where it
// must come AFTER the scale (see the class-order contract at `variants`).
export const scales = {
    display: {
        // Primary Hero (Home) - 48px -> 72px -> 96px
        hero: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-8xl",
        // Secondary Hero (Feature) - 36px -> 60px -> 72px
        heroSecondary: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl",
        // Tertiary Hero (Contact/About) - 30px -> 48px -> 60px
        heroTertiary: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl",
        // Section Headers - 36px -> 48px -> 60px
        section: "text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl",
        // Editorial Statement - 36px -> 48px -> 60px (Iconic Display)
        editorialStatement: "text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl",
    },
    heading: {
        // Page H1 - 30px -> 36px -> 48px
        page: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl",
        // Subsection H2/H3 - 24px -> 30px -> 36px
        subsection: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl",
        // Card/Module Titles - 20px -> 24px
        card: "text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl",
        // Long-form Prompts/Questions - 24px -> 30px (sentence case, readable)
        prompt: "text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl",
    },
    body: {
        // Lead - 18px -> 20px
        lg: "text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",
        // Default - 14px (Mobile) -> 16px (Desktop)
        md: "text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base",
        // Compact - 14px
        sm: "text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
    },
    meta: {
        eyebrow: "text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base",
        code: "text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
        step: "text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm",
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
    //
    // Class-order contract (SCALES_CANON.md §3.3): the leading-* class comes
    // AFTER the scale, always. Tailwind's text-* utilities carry their own
    // line-height, so tailwind-merge treats a preceding leading-* as the loser
    // of that conflict and strips it before it ever reaches the HTML. This
    // silently dropped the leading of twelve variants once — do not reorder.
    variants: {
        display: {
            // Flattened Hero Roles (No more 900/800/700)
            hero: `font-serif tracking-tight uppercase font-black ${scales.display.hero} leading-hero-tight`, // Home
            heroSecondary: `font-serif tracking-tight uppercase font-black ${scales.display.heroSecondary} leading-section-tight`, // Feature Pages
            heroTertiary: `font-serif tracking-tight uppercase font-black ${scales.display.heroTertiary} leading-section-tight`, // Contact/About
            section: `font-serif tracking-tight uppercase font-black ${scales.display.section} leading-section-tight`,
            editorialStatement: `font-serif tracking-tight uppercase font-black ${scales.display.editorialStatement} leading-none`,
        },
        heading: {
            // Structural Page Headings
            page: `font-serif tracking-tight font-black uppercase ${scales.heading.page} leading-tight`, // H1 default
            subsection: `font-serif tracking-tight font-black uppercase ${scales.heading.subsection} leading-snug`, // Section H2/H3
            card: `font-serif tracking-tight font-bold uppercase ${scales.heading.card} leading-snug`, // Card Titles
            prompt: `font-serif tracking-tight font-bold ${scales.heading.prompt} leading-snug`, // Long-form Questions/Prompts (sentence case)
        },
        body: {
            lg: `font-sans font-normal ${scales.body.lg} leading-relaxed`, // Lead / Intro
            md: `font-sans font-normal ${scales.body.md} leading-relaxed`, // Default prose
            sm: `font-sans font-normal ${scales.body.sm} leading-relaxed`, // Compact prose
        },
        meta: {
            // UI Labels & Micro-copy
            eyebrow: `font-sans font-bold uppercase tracking-widest ${scales.meta.eyebrow}`, // Section Logic
            label: `font-sans font-bold uppercase tracking-wider ${scales.meta.label}`, // Form Labels
            badge: `font-sans font-bold uppercase tracking-wide ${scales.meta.badge}`, // Pills / Tags
            step: `font-sans font-bold tracking-wide ${scales.meta.step}`, // Hero Index (01/02)
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
                /**
                 * A link inside a stacked list. Same scale as body.sm, but tight
                 * instead of the size's default leading: when a label wraps, its
                 * second line has to bind to the first, not read as the next item
                 * in the list.
                 *
                 * The leading class comes after the scale on purpose. Tailwind's
                 * text-* utilities carry a line-height, so tailwind-merge drops any
                 * leading-* that precedes them.
                 */
                listLink: `font-sans font-normal ${scales.body.sm} leading-tight`,
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

    /**
     * Optical alignment: trims the leading above cap height so the box edge is
     * the visual edge.
     *
     * Compose it onto the block that starts a text column when that column has
     * to line up with a solid edge — a filled panel, a rule, a module boundary.
     * Without it, equal spacing measured in the box model reads unequal, because
     * only one of the two sides carries the font's ascent.
     */
    capTrim: "cap-trim",
} as const;

export type TypographyRole =
    | "display.hero"
    | "display.heroSecondary"
    | "display.heroTertiary"
    | "display.section"
    | "display.editorialStatement"
    | "heading.page"
    | "heading.subsection"
    | "heading.card"
    | "heading.prompt"
    | "body.lg" | "body.md" | "body.sm"
    | "meta.eyebrow" | "meta.label" | "meta.badge" | "meta.code" | "meta.step"
    | "ui.nav.listLink"
    | "ui.button.lg" | "ui.button.md" | "ui.button.sm"
    | "ui.nav.link" | "ui.nav.brand" | "ui.input.value"
    | "ui.placeholder.title"
    | "utility.caption";

// Derived types
export type TypographyScale = typeof typography.scale;
