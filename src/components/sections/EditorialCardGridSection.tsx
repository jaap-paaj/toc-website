import { cn } from "@/lib/utils";
import React from "react";
import { Heading, Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { spacing } from "@/design-system/tokens/spacing";
import { SectionHeader } from "./SectionHeader";


export interface EditorialItem {
    title: string;
    description: string | React.ReactNode;
}

interface EditorialCardGridSectionProps {
    categoryLabel: string;
    intro: string;
    items: EditorialItem[];
    className?: string;
}

export function EditorialCardGridSection({
    categoryLabel,
    intro,
    items,
    className
}: EditorialCardGridSectionProps) {
    return (
        <div className={cn("container mx-auto", className)}>
            {/* Divider Breathing Room Wrapper */}
            <div className="pt-16 md:pt-24 lg:pt-32">
                <div className="border-t border-border/40" />
                <div className="pt-6 md:pt-8">
                    <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                        <SectionHeader
                            variant="split"
                            divider={false}
                            eyebrow={categoryLabel}
                            description={intro}
                        />


                        {/* Grid Block - Informational Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {items.map((item, idx) => (
                                <Surface
                                    key={idx}
                                    variant="catalog"
                                    className="flex flex-col gap-3 p-6 md:p-8"
                                >
                                    <Heading level={3} size="card" className="font-semibold text-primary-foreground">
                                        {item.title}
                                    </Heading>
                                    <Text
                                        as={typeof item.description === 'string' ? 'p' : 'div'}
                                        className="text-primary-foreground/60 text-sm leading-relaxed max-w-prose"
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
