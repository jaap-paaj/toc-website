import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { automateContent } from "@/app/_content/automate";
import { CheckCircle2 } from "lucide-react";

export function AutomateWhyUsModule() {
    const { whyUs } = automateContent;

    const items = whyUs.items.map(item => ({
        title: item.title,
        description: item.body,
        icon: <CheckCircle2 className="w-6 h-6 relative top-1" />
    }));

    return (
        <HomeModule id="why-automate-with-us" width="full" tone="dark" spacing="standard" spacingEdge="bottom">
            <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={whyUs.eyebrow} />
                {/* 
                    FeatureGridSection handles non-interactivity automatically 
                    because we are NOT passing an `href` property.
                */}
                <FeatureGridSection items={items} columns={2} className="py-0 md:py-0" />
            </div>
        </HomeModule>
    );
}
