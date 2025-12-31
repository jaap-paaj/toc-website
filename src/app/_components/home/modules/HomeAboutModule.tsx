import { HomeModule } from "../HomeModule";

import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Heading } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

import { homeContent } from "../home.content";

export function HomeAboutModule() {
    // Construct Editorial Title
    const titleNode = (
        <div className="flex flex-col">
            {homeContent.about.statementLines.map((line, index) => (
                <Heading
                    key={index}
                    level={2}
                    className={cn(
                        typography.variants.display.editorialStatement,
                        index === 2 ? "text-primary" : "text-foreground"
                    )}
                >
                    {line}
                </Heading>
            ))}
        </div>
    );

    return (
        <HomeModule id="about" width="full" pad="m" padTop="none" gap="s">
            <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader
                    variant="split"
                    eyebrow={homeContent.about.eyebrow}
                    title={titleNode}
                    description={homeContent.about.description}
                />
            </div>
        </HomeModule>
    );
}