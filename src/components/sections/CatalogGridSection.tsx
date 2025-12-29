
import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";

export interface CatalogGridItem {
    title: string;
    description: string | React.ReactNode;
}

export interface CatalogGridSectionProps {
    eyebrow: string;
    description: string;
    items: CatalogGridItem[];
    className?: string;
}

export function CatalogGridSection({
    eyebrow,
    description,
    items,
    className
}: CatalogGridSectionProps) {
    return (
        <div className={cn("flex flex-col gap-6 md:gap-8", className)}>
            {/* Divider */}
            <div className="border-t border-border/80" />

            {/* Header + Grid */}
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader
                    variant="split"
                    divider={false}
                    eyebrow={eyebrow}
                    description={description}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 [&>*]:h-auto [&>*]:min-h-0 items-start">
                    {items.map((item, idx) => (
                        <Surface
                            key={idx}
                            variant="catalog"
                            className="flex flex-col gap-3 p-6 md:p-8"
                        >
                            <Heading level={3} size="card" className="text-primary-foreground">
                                {item.title}
                            </Heading>
                            <Text
                                as={typeof item.description === 'string' ? "p" : "div"}
                                className={cn("text-primary-foreground/60 max-w-prose", typography.variants.body.sm)}
                            >
                                {item.description}
                            </Text>
                        </Surface>
                    ))}
                </div>
            </div>
        </div>
    );
}
