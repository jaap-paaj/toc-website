import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { automateContent } from "@/app/_content/automate";

export function AutomateApproachModule() {
    const { approach } = automateContent;

    // Map content to FeatureGridItem
    // Bullets are joined into a single description string
    const items = approach.items.map(item => ({
        id: item.badge,
        title: item.title,
        description: item.bullets.map(b => `• ${b}`).join("\n")
    }));

    return (
        <HomeModule id="approach" width="full" tone="dark" spacing="standard" spacingEdge="both">
            <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={approach.eyebrow} />
                <FeatureGridSection items={items} columns={3} />
            </div>
        </HomeModule>
    );
}
