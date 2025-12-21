import { cn } from "@/lib/utils";
import { HomeModule } from "../../home/HomeModule";
import { automateContent } from "@/app/_content/automate";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";

export function AutomateReadyToRunModule() {
    const { readyToRun } = automateContent;

    const items = readyToRun.items.map(item => ({
        title: item.title,
        description: item.body
    }));

    return (
        <HomeModule id="ready-to-run" width="full" tone="light" pad="m" gap="s">
            <div className="container mx-auto flex flex-col gap-6 md:gap-8">
                {/* Divider stays inside the padded content area (HomeModule pad) */}
                <div className="border-t border-border/40" />

                {/* Content Block */}
                <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                    <SectionHeader
                        variant="split"
                        divider={false} // We rendered it manually above to control spacing
                        eyebrow={readyToRun.eyebrow}
                        description={readyToRun.description}
                    />

                    {/* Grid Block - Informational Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {items.map((item, idx) => (
                            <Surface
                                key={idx}
                                variant="catalog"
                                className="flex flex-col gap-3 p-6 md:p-8"
                            >
                                <Heading level={3} size="card" className="font-semibold text-primary-foreground">
                                    {item.title}
                                </Heading>
                                <Text
                                    as={'div'}
                                    className="text-primary-foreground/60 text-sm leading-relaxed max-w-prose"
                                >
                                    {item.description}
                                </Text>
                            </Surface>
                        ))}
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
