
import { HomeModule } from "../../home/HomeModule";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { spacing } from "@/design-system/tokens/spacing";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading } from "@/design-system/components/Typography";
import { cn } from "@/lib/utils";
import { innovateContent } from "@/app/_content/innovate";
import { CheckIcon, XIcon } from "lucide-react";
import React from "react";

export function InnovateWhyUsModule() {
    const { whyUs } = innovateContent;
    const { variant, comparison } = whyUs;

    const items = whyUs.items.map((item, idx) => ({
        id: `0${idx + 1}`,
        title: item.title,
        description: item.body
    }));

    return (
        <HomeModule id="why-innovate-with-us" width="full" tone="dark" pad="m" padTop="none" gap="s">
            <div className={cn("container mx-auto flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader eyebrow={whyUs.eyebrow} variant="stacked" />

                {variant === "comparison" && comparison ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Left Card: Traditional Approach (Negative) */}
                        <Surface variant="card" className="flex flex-col gap-6 p-6 md:p-8">
                            <Heading level={3} size="card" className="border-b border-border pb-4" /* lint:allowed */>
                                {comparison.left.title}
                            </Heading>
                            <ul className="flex flex-col gap-3">
                                {comparison.left.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <XIcon className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" /* lint:allowed */ />
                                        <span>{bullet.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </Surface>

                        {/* Right Card: Our Innovation Sprints (Positive) */}
                        <Surface variant="card" className="flex flex-col gap-6 p-6 md:p-8 border-primary/20 bg-primary/5">
                            <Heading level={3} size="card" className="border-b border-primary/20 pb-4 text-primary" /* lint:allowed */>
                                {comparison.right.title}
                            </Heading>
                            <ul className="flex flex-col gap-3">
                                {comparison.right.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground">
                                        <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" /* lint:allowed */ />
                                        <span>{bullet.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </Surface>
                    </div>
                ) : (
                    <FeatureGridSection items={items} columns={2} interactive={false} />
                )}
            </div>
        </HomeModule>
    );
}
