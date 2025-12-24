import { cn } from "@/lib/utils";
import React from "react";
import { spacing as spacingTokens } from "@/design-system/tokens/spacing";

type HomeModuleSpacing = "standard" | "compact" | "none" | "hero";

type HomeModuleScale = "xs" | "s" | "m" | "l" | "xl";

type HomeModuleStacking = "shared" | "top" | "bottom" | "both" | "none";

// Legacy Helper (Renamed)
function getLegacyPaddingClasses(spacingMode: HomeModuleSpacing, stackingMode: HomeModuleStacking | undefined, spacingEdgeLegacy?: "both" | "top" | "bottom" | "none") {
    if (spacingMode === "none") return "";

    // Resolve effective stacking mode
    let effectiveStacking = stackingMode;
    if (!effectiveStacking) {
        if (spacingEdgeLegacy === "both") effectiveStacking = "both";
        else if (spacingEdgeLegacy === "top") effectiveStacking = "top";
        else if (spacingEdgeLegacy === "none") effectiveStacking = "none";
        else effectiveStacking = "bottom"; // Default
    }

    const pt = spacingTokens.modulePadTop;
    const pb = spacingTokens.modulePadBottom;

    // Allow legacy maps to work if used
    if (spacingMode === "hero") {
        // Hero Legacy: Top=XL, Bottom=M (approx)
        if (effectiveStacking === "both") return cn(pt.xl, pb.m);
        if (effectiveStacking === "top") return pt.xl;
        if (effectiveStacking === "bottom") return cn("pt-0", pb.m);
        if (effectiveStacking === "shared") return cn(pt.s, pb.s); // Fallback for shared hero
        return cn(pt.xl, pb.m);
    }

    // Map Legacy Modes to Scales
    const scale = spacingMode === "compact" ? "s" : "m"; // standard -> m

    switch (effectiveStacking) {
        case "shared": return cn(pt.s, pb.s); // Shared uses smaller padding
        case "both": return cn(pt[scale], pb[scale]);
        case "top": return cn(pt[scale], "pb-0");
        case "bottom": return cn("pt-0", pb[scale]);
        case "none": return "";
        default: return cn("pt-0", pb[scale]);
    }
}

// v4 Block Model Helper
function getBlockClasses(
    pad: HomeModuleScale | "none" = "m",
    gap: HomeModuleScale | "none" = "s",
    padTop?: HomeModuleScale | "none",
    padBottom?: HomeModuleScale | "none",
    gapTop?: HomeModuleScale | "none",
    gapBottom?: HomeModuleScale | "none"
) {
    const ptToken = spacingTokens.modulePadTop;
    const pbToken = spacingTokens.modulePadBottom;
    const gb = spacingTokens.moduleGap; // Canonical Gap (Margin Bottom) -> mb-*
    const gt = spacingTokens.moduleGapTop; // Optional Top Gap -> mt-*

    // Resolve Pad
    // If pad="none", generic pt-0 pb-0.
    // If specific side is "none", use 0. If undefined, use base pad.
    const pt = padTop === "none" ? "pt-0" : (padTop ? ptToken[padTop] : (pad === "none" ? "pt-0" : ptToken[pad]));
    const pb = padBottom === "none" ? "pb-0" : (padBottom ? pbToken[padBottom] : (pad === "none" ? "pb-0" : pbToken[pad]));

    // Resolve Gap (v4.1 Single-Sided)
    // Gap Bottom (Canonical)
    // If gap="none", mb-0.
    const mb = gapBottom === "none" ? "mb-0" : (gapBottom ? gb[gapBottom] : (gap === "none" ? "mb-0" : gb[gap]));

    // Gap Top (Exception / Opt-In)
    const mt = gapTop === "none" ? "mt-0" : (gapTop ? gt[gapTop] : "mt-0");

    return cn(pt, pb, mt, mb);
}

type HomeModuleTone = "default" | "light" | "dark" | "muted" | "accent" | "split-light-dark" | "brand";

const TONE_MAP: Record<HomeModuleTone, string> = {
    default: "", // Transparent / inherited
    light: "tone-light bg-background text-foreground", // System Logic
    dark: "tone-dark bg-background text-foreground", // System Logic /* lint:allowed */
    muted: "text-muted-foreground", // Legacy
    accent: "text-accent-foreground", // Legacy
    "split-light-dark": "bg-[linear-gradient(to_bottom,theme(colors.zinc.100)_0%,theme(colors.zinc.100)_50%,theme(colors.background)_50%,theme(colors.background)_100%)]",
    brand: "tone-brand bg-background text-foreground", // Systemic Brand Surface
};

type HomeModuleProps = {
    id: string;
    tone?: HomeModuleTone;
    width?: "container" | "full";
    className?: string;
    children: React.ReactNode;

    // Legacy Props (Deprecating)
    spacing?: HomeModuleSpacing;
    spacingEdge?: "both" | "top" | "bottom" | "none";
    stacking?: HomeModuleStacking;

    // v4 Block Props
    pad?: HomeModuleScale | "none";
    gap?: HomeModuleScale | "none";
    padTop?: HomeModuleScale | "none";
    padBottom?: HomeModuleScale | "none";
    gapTop?: HomeModuleScale | "none";
    gapBottom?: HomeModuleScale | "none";
};

export function HomeModule({
    id,
    tone = "default",
    width = "container",
    className,
    children,

    // Legacy defaults
    spacing = "standard",
    spacingEdge = "bottom",
    stacking,

    // Block props
    pad,
    gap,
    padTop,
    padBottom,
    gapTop,
    gapBottom
}: HomeModuleProps) {
    // Determine Mode: If any Block prop is explicit, use Block Mode.
    const isBlockMode = pad !== undefined || gap !== undefined || padTop !== undefined || padBottom !== undefined || gapTop !== undefined || gapBottom !== undefined;

    return (
        <section
            id={id}
            data-tone={tone}
            className={cn(
                "flex flex-col w-full items-center",
                width === "container" && "container mx-auto",

                // Spacing Logic
                isBlockMode
                    ? getBlockClasses(pad, gap, padTop, padBottom, gapTop, gapBottom)
                    : getLegacyPaddingClasses(spacing, stacking, spacingEdge),

                // Tone mapped
                TONE_MAP[tone],
                className
            )}
        >
            {children}
        </section>
    );
}
