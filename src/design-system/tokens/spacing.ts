export const spacing = {
    // Standard Stack Tokens (Gap-based, Flex Column)
    // "Tokens zijn container classes (parent controls spacing)"
    stackXs: "flex flex-col gap-2",
    stackSm: "flex flex-col gap-3",
    stackMd: "flex flex-col gap-4",
    stackLg: "flex flex-col gap-6",
    stackXl: "flex flex-col gap-8",

    // Legacy / Composition Tokens (Migrate these to stack* where distinct)
    // @deprecated - Prefer stackXl or custom composition
    stackPage: "flex flex-col gap-12 md:gap-16 lg:gap-20",

    // @deprecated - Margins should be avoided. Use a stack wrapper.
    stackHero: "mb-8 md:mb-10 lg:mb-12",

    // Section Padding (Y-axis)
    sectionYSm: "py-4",
    sectionYMd: "py-8",
    sectionYLg: "py-12",
    sectionYXl: "py-16",

    // Page X Padding
    pageX: "px-4 md:px-8 lg:px-12",

    // Semantic Spacing
    section: {
        heroFollower: "pt-10 md:pt-16 lg:pt-24",
    },

    component: {
        headerTransition: "mb-10 md:mb-12",
        sectionHeader: "gap-6 md:gap-8",
        formSuccessPanel: "py-20 px-8",
        formSuccessCta: "mt-4",
        formActions: "pt-2",
        cardTitle: "pt-3 md:pt-4",
        cardCta: "pt-6",
        cardText: "mb-6",
        editorialGrid: "pt-6 md:pt-8",
    },

    // --------------------------------------------------
    // v4.1 BLOCK MODEL — SINGLE SOURCE OF TRUTH (TUNED)
    // --------------------------------------------------

    // Internal module padding (controls block “volume”)
    // Goal: mobile stays good, md grows less, lg grows modestly.
    modulePad: {
        xs: "py-4 md:py-6 lg:py-8",
        s: "py-12 md:py-12 lg:py-16", // was 12/16/20 -> tighter on md, modest on lg
        m: "py-16 md:py-16 lg:py-24", // was 16/24/32 -> tablet no longer huge, desktop still “bigger”
        l: "py-20 md:py-24 lg:py-32", // toned down
        xl: "py-32 md:py-32 lg:py-40", // hero-ish scale without insane lg jump
    },
    // Explicit Top Padding (Hardening v4.1 - SSOT)
    modulePadTop: {
        xs: "pt-4 md:pt-6 lg:pt-8",
        s: "pt-12 md:pt-12 lg:pt-16",
        m: "pt-16 md:pt-16 lg:pt-24",
        l: "pt-20 md:pt-24 lg:pt-32",
        xl: "pt-32 md:pt-32 lg:pt-40",
    },
    // Explicit Bottom Padding (Hardening v4.1 - SSOT)
    modulePadBottom: {
        xs: "pb-4 md:pb-6 lg:pb-8",
        s: "pb-12 md:pb-12 lg:pb-16",
        m: "pb-16 md:pb-16 lg:pb-24",
        l: "pb-20 md:pb-24 lg:pb-32",
        xl: "pb-32 md:pb-32 lg:pb-40",
    },

    // External bottom spacing (controls separation between blocks)
    // Goal: gaps should NOT keep growing; they should plateau/compress.
    moduleGap: {
        xs: "mb-4 md:mb-4 lg:mb-4",
        s: "mb-12 md:mb-12 lg:mb-8",   // key: tablet smaller, desktop tighter
        m: "mb-16 md:mb-16 lg:mb-12",
        l: "mb-20 md:mb-20 lg:mb-16",
        xl: "mb-32 md:mb-32 lg:mb-20",
    },

    // Optional top gap (opt-in only, exceptions)
    moduleGapTop: {
        xs: "mt-4 md:mt-4 lg:mt-4",
        s: "mt-12 md:mt-12 lg:mt-8",
        m: "mt-16 md:mt-16 lg:mt-12",
        l: "mt-20 md:mt-20 lg:mt-16",
        xl: "mt-32 md:mt-32 lg:mt-20",
    },
    // Module Breaks (Semantic Separation)
    moduleBreak: {
        soft: "pt-12 md:pt-16 lg:pt-24", // Standard section break
        hard: "pt-20 md:pt-24 lg:pt-32", // Major chapter change
    },
} as const;