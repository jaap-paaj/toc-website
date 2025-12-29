import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { SectionHeader } from "../sections/SectionHeader";
import { CapabilityCard, CapabilityCardItem } from "../cards/CapabilityCard";

export interface CapabilityCardsSectionProps {
    eyebrow: string;
    items: CapabilityCardItem[];
    columns?: 1 | 2 | 3 | 4;
    className?: string;
}

export function CapabilityCardsSection({
    eyebrow,
    items,
    columns = 3,
    className,
}: CapabilityCardsSectionProps) {
    return (
        <div className={cn("container mx-auto", className)}>
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={eyebrow} />
                <div
                    className={cn(
                        "grid grid-cols-1 gap-6 lg:gap-8",
                        columns === 1 && "md:grid-cols-1",
                        columns === 2 && "md:grid-cols-2",
                        columns === 3 && "md:grid-cols-3",
                        columns === 4 && "md:grid-cols-4"
                    )}
                >
                    {items.map((item, idx) => (
                        <CapabilityCard key={idx} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
