
import { HomeModule } from "../../home/HomeModule";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { innovateContent } from "@/app/_content/innovate";

export function InnovateWhyUsModule() {
    const { whyUs } = innovateContent;

    const items = whyUs.items.map((item, idx) => ({
        id: `0${idx + 1}`,
        title: item.title,
        description: item.body
    }));

    return (
        <HomeModule id="why-innovate-with-us" width="full" tone="dark" spacing="standard" spacingEdge="bottom">
            <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader eyebrow={whyUs.eyebrow} variant="stacked" />
                <FeatureGridSection items={items} columns={2} interactive={false} />
            </div>
        </HomeModule>
    );
}
