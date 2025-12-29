import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { SectionHeader } from "./SectionHeader";
import { FeatureGridSection } from "./FeatureGridSection";

interface ServiceItem {
    id: string; // e.g. "01"
    title: string;
    description: string;
    href?: string;
}

interface ServicesSectionProps {
    eyebrow: string;
    items: ServiceItem[];
    className?: string;
}


export function ServicesSection({
    eyebrow,
    items,
    className,
}: ServicesSectionProps) {
    return (
        <div
            className={cn(
                "container mx-auto",
                className
            )}
        >
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={eyebrow} />
                <FeatureGridSection items={items} columns={3} />
            </div>
        </div>
    );
}