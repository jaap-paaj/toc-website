"use client";

import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { SectionEyebrow } from "@/design-system/components/SectionEyebrow";
import { Surface } from "@/design-system/components/Surfaces";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";
import { layoutTokens } from "@/design-system/tokens/layout";
import { typography } from "@/design-system/tokens/typography";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { trackEvent } from "@/lib/analytics/ga";
import Link from "next/link";
import { CardContent, CardHeader } from "@/components/ui/Card";
import { CheckIcon } from "lucide-react";

export function ScanIntroCallModule() {
    return (
        <section className={cn("w-full tone-light bg-background text-foreground", spacing.modulePadBottom.m)}>
            <div className={cn("container mx-auto")}>
                {/* Canonical Divider Wrapper (Manual implementation to match SectionHeader divider={true}) */}
                <div className={cn("w-full border-t border-border/80 pt-6 md:pt-8", /* lint:allowed - Divider manual spacing */)}>

                    {/* Canonical Split Layout Pattern (referencing layoutTokens.splitBalanced from ScanStatementModule) */}
                    <div className={cn(layoutTokens.splitHero)}>

                        {/* Left Column: Narrative Stack */}
                        <div className={cn(spacing.stackLg, "min-w-0")}>
                            <SectionEyebrow>{scanContent.introCall.eyebrow}</SectionEyebrow>
                            <Heading level={2} size="section" className="text-balance">
                                {scanContent.introCall.title}
                            </Heading>
                            <Text size="lg" className="text-muted-foreground">
                                {scanContent.introCall.body}
                            </Text>
                        </div>

                        {/* Right Column: Focus Card */}
                        <Surface variant="card" className="flex flex-col min-w-0 md:self-center">
                            {/* Header: Label */}
                            <CardHeader>
                                <div className={spacing.stackXs}>
                                    <SectionEyebrow className={typography.variants.meta.label}>
                                        {scanContent.introCall.card.title}
                                    </SectionEyebrow>
                                </div>
                            </CardHeader>

                            {/* Content: Bullets + CTA */}
                            <CardContent className={cn("flex flex-col pb-6", spacing.stackLg)}> {/* lint:allowed - pb-6 missing from primitive */}
                                <ul className={spacing.stackSm}>
                                    {scanContent.introCall.card.bullets.map((item, i) => (
                                        <li key={i} className={cn("flex items-start gap-3")}> {/* lint:allowed - Checklist row gap */}
                                            <CheckIcon className={cn("w-5 h-5 text-foreground shrink-0 mt-0.5")} /* lint:allowed - light variant checklist */ />
                                            <Text className={typography.variants.body.md}>
                                                {item}
                                            </Text>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full sm:w-auto self-start max-w-full h-auto whitespace-normal text-left py-2" /* lint:allowed - CTA multiline support */
                                    onClick={() =>
                                        trackEvent("cta_click", {
                                            cta_label: scanContent.introCall.card.cta.label,
                                            cta_location: "intro_call",
                                        })
                                    }
                                >
                                    <Link href={scanContent.introCall.card.cta.href}>
                                        {scanContent.introCall.card.cta.label}
                                    </Link>
                                </Button>
                            </CardContent>
                        </Surface>
                    </div>
                </div>
            </div>
        </section>
    );
}
