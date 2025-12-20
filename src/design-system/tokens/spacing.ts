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

    // Section Padding (Y-axis) - Keeping as is for internal consistency until further instructions
    sectionYSm: "py-4",
    sectionYMd: "py-8",
    sectionYLg: "py-12",
    sectionYXl: "py-16",

    // Page X Padding
    pageX: "px-4 md:px-8 lg:px-12",

    // Semantic Spacing
    section: {
        // Matches Hero internal bottom padding ramp
        heroFollower: "pt-10 md:pt-16 lg:pt-24",
    },
    component: {
        // Divider -> Title Vertical Rhythm
        headerTransition: "mb-10 md:mb-12",

        // Section Title -> Content Spacing Contract
        sectionHeader: "gap-6 md:gap-8",
    },
} as const;

