import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { aboutContent } from "@/app/_content/about";

export function AboutApproachModule() {
    const { approach } = aboutContent;

    return (
        <HomeModule id="approach" width="full" pad="m" padBottom="none" gap="none" tone="light">
            <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader
                    variant="split"
                    divider
                    eyebrow={approach.eyebrow}
                    title={approach.title}
                    description={approach.description}
                />
            </div>
        </HomeModule>
    );
}
