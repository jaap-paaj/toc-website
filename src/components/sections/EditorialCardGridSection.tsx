import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { spacing } from "@/design-system/tokens/spacing";
import { SectionHeader } from "./SectionHeader";


export interface EditorialItem {
    title: string;
    description: string;
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
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader
                    variant="split"
                    divider={true}
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
                            <Text className="text-primary-foreground/60 text-sm leading-relaxed max-w-prose">
                                {item.description}
                            </Text>
                        </Surface>
                    ))}
                </div>
            </div>
        </div>
    );
}
