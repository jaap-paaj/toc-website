import { cn } from "@/lib/utils";
import React from "react";
import { Heading, Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import { SectionHeader } from "./SectionHeader";



export interface EditorialItem {
    title: string;
    description: string | React.ReactNode;
}

interface EditorialCardGridSectionProps {
    eyebrow: string;
    description: string;
    items: EditorialItem[];
    className?: string;
}

export function EditorialCardGridSection({
    eyebrow,
    description,
    items,
    className
}: EditorialCardGridSectionProps) {
    return (
        <div className={cn("container mx-auto", className)}>
            {/* Divider Breathing Room Wrapper */}
            <div className={cn(spacing.modulePadTop.l)}>
                <div className="border-t border-border/80" />
                <div className={spacing.component.editorialGrid}>
                    <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                        <SectionHeader
                            variant="split"
                            divider={false}
                            eyebrow={eyebrow}
                            description={description}
                        />


                        {/* Grid Block - Informational Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                                        as={typeof item.description === 'string' ? 'p' : 'div'}
                                        className={cn("text-primary-foreground/60 max-w-prose", typography.variants.body.md)}
                                    >
                                        {item.description}
                                    </Text>
                                </Surface>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
