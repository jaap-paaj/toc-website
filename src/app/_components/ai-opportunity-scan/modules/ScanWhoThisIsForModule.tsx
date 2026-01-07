"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { SectionEyebrow } from "@/design-system/components/SectionEyebrow";
import { Heading, Text } from "@/design-system/components/Typography";
import { CheckIcon } from "lucide-react";

export function ScanWhoThisIsForModule() {
    return (
        <section className={cn("w-full tone-light bg-background text-foreground", spacing.modulePadBottom.m)}>
            <div className={cn("container mx-auto")}>
                {/* Manual Split Layout (Reusing About/Approach "SectionHeader variant=split" logic) */}
                <div className={cn(
                    "w-full border-t border-border/80 pt-6 md:pt-8", /* lint:allowed - Divider manual spacing matching SectionHeader */
                    "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 text-left" /* Split Standard */
                )}>
                    {/* Left Column: Identity */}
                    <div className={spacing.stackSm}>
                        <SectionEyebrow className={typography.variants.meta.eyebrow}>
                            {scanContent.whoThisIsFor.eyebrow}
                        </SectionEyebrow>
                        <Heading
                            level={2}
                            size="section"
                            className={cn("text-foreground max-w-xl")}
                        >
                            {scanContent.whoThisIsFor.title}
                        </Heading>
                    </div>

                    {/* Right Column: Narrative (Checklist) */}
                    <div className={cn("flex flex-col justify-start md:pt-1")}> {/* lint:allowed - Optical alignment matching SectionHeader */}
                        <div className={spacing.stackMd}>
                            <h3 className={cn(typography.variants.meta.eyebrow, "opacity-70", "text-foreground")}>
                                {scanContent.whoThisIsFor.subtitle}
                            </h3>
                            <ul className={spacing.stackSm}>
                                {scanContent.whoThisIsFor.items.map((item, i) => (
                                    <li key={i} className={cn("flex items-start gap-3")}> {/* lint:allowed - Checklist row gap */}
                                        <CheckIcon className={cn("w-5 h-5 text-foreground shrink-0 mt-0.5")} /* lint:allowed - light variant checklist */ />
                                        <Text className={typography.variants.body.md}>
                                            {item}
                                        </Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
