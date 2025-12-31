import React from "react";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { SectionEyebrow } from "@/design-system/components/SectionEyebrow";
import { typography } from "@/design-system/tokens/typography";
import { layoutTokens } from "@/design-system/tokens/layout";

export interface SectionHeaderProps {
    eyebrow: string;
    title?: string | React.ReactNode;
    description?: string | string[] | React.ReactNode;
    /**
     * Layout variant:
     * - stacked: Vertical stack (default). Best for simple labels or center alignment.
     * - split: 2-column grid (Eyebrow left, Description right). Best for density.
     */
    variant?: "stacked" | "split";
    /**
     * Alignment for stacked variant.
     * Use "left" for standard, "center" for hero-like sections.
     * (No effect on split variant).
     */
    align?: "left" | "center";
    /**
     * Adds a top keyline divider and associated padding.
     * Useful for separating distinct content blocks vertically.
     */
    divider?: boolean;
    /**
     * Split ratio for "split" variant.
     * - balanced: 50/50 (default)
     * - asymmetric: 33/67 (Sidebar/Main)
     */
    ratio?: "balanced" | "asymmetric";
    className?: string;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    variant = "stacked",
    align = "left",
    divider = false,
    ratio = "balanced",
    className,
}: SectionHeaderProps) {
    const isSplit = variant === "split";
    const isCenter = align === "center" && !isSplit;

    // Base container class with optional divider styling
    const containerClasses = cn(
        "w-full",
        divider && "border-t border-border/80 pt-6 md:pt-8", /* lint:allowed */
        className
    );

    // Stacked Layout
    if (!isSplit) {
        return (
            <div className={cn(containerClasses, "flex flex-col gap-3 md:gap-4", isCenter && "items-center text-center")}>
                <SectionEyebrow className={typography.variants.meta.eyebrow}>{eyebrow}</SectionEyebrow>

                {title && (
                    <div className="max-w-4xl">
                        {typeof title === "string" ? (
                            <Heading level={2} className={typography.variants.display.section}>
                                {title}
                            </Heading>
                        ) : (
                            title
                        )}
                    </div>
                )}

                {description && (
                    Array.isArray(description) ? (
                        <div className="flex flex-col gap-3 md:gap-4 max-w-3xl opacity-80">
                            {description.map((paragraph, i) => (
                                <Text key={i} className={cn(typography.variants.body.md, isCenter && "mx-auto")}>
                                    {paragraph}
                                </Text>
                            ))}
                        </div>
                    ) : (
                        <Text className={cn(typography.variants.body.md, "max-w-3xl opacity-80", isCenter && "mx-auto")}>
                            {description}
                        </Text>
                    )
                )}
            </div>
        );
    }

    // Split Layout (Canonical "Editorial/Educate" 50/50 pattern)
    // If ratio is asymmetric, use token. If balanced, use legacy manual class for strict compat.
    const splitClass = ratio === "asymmetric"
        ? layoutTokens.splitAsymmetric
        : "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 text-left";

    return (
        <div className={containerClasses}>
            <div className={splitClass}>
                {/* Left Column: Identity */}
                <div className="flex flex-col gap-3">
                    <SectionEyebrow className={typography.variants.meta.eyebrow}>{eyebrow}</SectionEyebrow>
                    {title && (
                        <div className="max-w-xl">
                            {typeof title === "string" ? (
                                <Heading
                                    level={2}
                                    size="section"
                                    className="text-foreground"
                                >
                                    {title}
                                </Heading>
                            ) : (
                                title
                            )}
                        </div>
                    )}
                </div>

                {/* Right Column: Narrative */}
                <div className="flex flex-col justify-start md:pt-1"> {/* lint:allowed */}
                    {description && (
                        Array.isArray(description) ? (
                            <div className="flex flex-col gap-3 md:gap-4 opacity-80 max-w-prose">
                                {description.map((paragraph, i) => (
                                    <Text key={i} className={typography.variants.body.md}>
                                        {paragraph}
                                    </Text>
                                ))}
                            </div>
                        ) : (
                            <Text className={cn(typography.variants.body.md, "opacity-80")}>
                                {description}
                            </Text>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
