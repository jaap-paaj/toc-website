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
    variants: {
        hero: {
            h1: "font-serif tracking-tight text-4xl md:text-5xl lg:text-6xl",
        },
        page: {
            h1: "font-serif tracking-tight leading-tight text-3xl md:text-4xl lg:text-5xl",
            h2: "font-serif tracking-tight leading-snug text-2xl md:text-3xl",
            h3: "font-serif tracking-tight leading-snug text-xl",
        },
        body: {
            lg: "font-sans text-lg leading-relaxed text-foreground",
            md: "font-sans text-base leading-relaxed text-foreground",
            sm: "font-sans text-sm leading-relaxed text-foreground",
            // Utility variants
            muted: "font-sans text-sm text-muted-foreground",
            label: "font-sans text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        },
    },
} as const;

export type TypographyVariant = "hero" | "page" | "body";
export type HeadingLevel = "h1" | "h2" | "h3";
export type BodySize = "lg" | "md" | "sm" | "muted" | "label";
