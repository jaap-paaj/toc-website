import React from "react";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { SectionEyebrow } from "@/design-system/components/SectionEyebrow";
import { typography } from "@/design-system/tokens/typography";

export interface SectionHeaderProps {
    eyebrow: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
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
    className?: string;
}

export function SectionHeader({
    eyebrow,
    title,
    description,
    variant = "stacked",
    align = "left",
    divider = false,
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
                    <Text className={cn(typography.variants.body.md, "max-w-3xl opacity-80", isCenter && "mx-auto")}>
                        {description}
                    </Text>
                )}
            </div>
        );
    }

    // Split Layout (Canonical "Editorial/Educate" 50/50 pattern)
    return (
        <div className={containerClasses}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 text-left">
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
                        <Text className={cn(typography.variants.body.md, "opacity-80")}>
                            {description}
                        </Text>
                    )}
                </div>
            </div>
        </div>
    );
}
