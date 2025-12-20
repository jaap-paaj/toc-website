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
}

export function ServicesSection({ headingLabel, items, className }: ServicesSectionProps) {
    return (
        // Matches Hero Module Padding Bottom via token
        <div
            className={cn(
                "container mx-auto",
                spacing.section.heroFollower,
                "pb-16 md:pb-24 lg:pb-32",
                className
            )}
        >
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                {/* Section Header */}
                <SectionHeader variant="stacked" eyebrow={headingLabel} />

                {/* Services Grid */}
                <FeatureGridSection
                    items={items}
                    columns={3}
                />
            </div>
        </div>
    );
}