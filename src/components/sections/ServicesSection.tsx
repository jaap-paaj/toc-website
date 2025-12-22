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
    headingLabel: string;
    items: ServiceItem[];
    className?: string;
    spacingPreset?: "default" | "heroFollower";
}

export function ServicesSection({
    headingLabel,
    items,
    className,
    spacingPreset = "default",
}: ServicesSectionProps) {
    return (
        <div
            className={cn(
                "container mx-auto",
                // Optional: only adds TOP padding to follow a hero (no bottom spacing leaks)
                spacingPreset === "heroFollower" && spacing.section.heroFollower,
                className
            )}
        >
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={headingLabel} />
                <FeatureGridSection items={items} columns={3} />
            </div>
        </div>
    );
}