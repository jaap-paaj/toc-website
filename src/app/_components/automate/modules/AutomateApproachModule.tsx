import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { CatalogGridSection } from "@/components/sections/CatalogGridSection";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { automateContent } from "@/app/_content/automate";

export function AutomateApproachModule() {
    const { approach } = automateContent;

    // Map content to FeatureGridItem
    // Bullets are joined into a single description string
    const items = approach.items.map(item => ({
        // Map badge (Week X) to meta pill instead of ID
        meta: item.badge,
        title: item.title,
        // Pass bullets directly as string[] for CatalogGridSection list rendering
        description: item.bullets
    }));

    return (
        <HomeModule id="approach" width="full" tone="dark" pad="m" gap="none">
            <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={approach.eyebrow} />
                <CatalogGridSection
                    items={items}
                    columns={3}
                    eyebrow=""
                    description=""
                    surfaceVariant="card"
                />
            </div>
        </HomeModule>
    );
}
