
import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { Surface } from "@/design-system/components/Surfaces";
import { MetaPill } from "@/design-system/components/MetaPill";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { SurfaceVariant } from "@/design-system/tokens/surfaces";
import { typography } from "@/design-system/tokens/typography";

export interface CatalogGridItem {
    title: string;
    description: string | string[] | React.ReactNode;
    meta?: string;
}

export interface CatalogGridSectionProps {
    eyebrow?: string;
    description?: string;
    items: CatalogGridItem[];
    columns?: 2 | 3;
    surfaceVariant?: SurfaceVariant;
    className?: string;
}

export function CatalogGridSection({
    eyebrow,
    description,
    items,
    columns = 2,
    surfaceVariant = "catalog",
    className
}: CatalogGridSectionProps) {
    return (
        <div className={cn("flex flex-col gap-6 md:gap-8", className)}>
            {/* Conditional Header & Divider */}
            {(eyebrow || description) && (
                <>
                    <div className="border-t border-border/80" />
                    <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                        <SectionHeader
                            variant="split"
                            divider={false}
                            eyebrow={eyebrow!}
                            description={description}
                        />
                    </div>
                </>
            )}

            {/* Grid Only (Header wrapper removed if no header, but grid needs margin?) */}
            {/* If header exists, grid is sibling. If not, grid is top level in div. */}
            {/* We need to ensure spacing is correct. CatalogGridSection usually has gap-6/8. */}

            <div className={cn(
                "grid grid-cols-1 gap-6 lg:gap-8 items-start [&>*]:h-auto [&>*]:min-h-0",
                columns === 2 && "md:grid-cols-2",
                columns === 3 && "md:grid-cols-3"
            )}>
                {items.map((item, idx) => (
                    <Surface
                        key={idx}
                        variant={surfaceVariant}
                        className="flex flex-col gap-3 p-6 md:p-8"
                    >
                        <Heading
                            level={3}
                            size="card"
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 w-full"
                        >
                            <span>{item.title}</span>
                            {item.meta && <MetaPill>{item.meta}</MetaPill>}
                        </Heading>
                        {Array.isArray(item.description) ? (
                            <ul className={cn("list-disc pl-5 space-y-1", typography.variants.body.md, "opacity-90 max-w-prose")}>
                                {item.description.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        ) : (
                            <Text
                                as={typeof item.description === 'string' ? "p" : "div"}
                                className={cn("opacity-90 max-w-prose", typography.variants.body.md)}
                            >
                                {item.description}
                            </Text>
                        )}
                    </Surface>
                ))}
            </div>
        </div>
    );
}
