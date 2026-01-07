"use client";

import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
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

export function ScanStatementModule() {
    return (
        <section className={cn("w-full tone-light bg-background text-foreground", spacing.modulePad.m)}>
            {/* Canonical Page Wrapper: container mx-auto wrapped in cn() matches other modules and passes audit */}
            <div className={cn("container mx-auto")}>
                {/* Canonical Split Layout Pattern (referencing layoutTokens.splitBalanced) */}
                {/* Task A: Override to 2/3 : 1/3 Ratio using grid-cols-3 */}
                <div className={cn(layoutTokens.splitHero)}>

                    {/* Left Column: Narrative Stack */}
                    <div className={cn(spacing.stackLg, "min-w-0")}>
                        <SectionEyebrow>{scanContent.statement.eyebrow}</SectionEyebrow>
                        <Heading level={2} size="section" className="text-balance">
                            {scanContent.statement.title}
                        </Heading>
                        <div className={cn("text-muted-foreground", spacing.stackMd)}>
                            {scanContent.statement.body.map((paragraph, idx) => (
                                <Text key={idx} size="lg">
                                    {paragraph}
                                </Text>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Focus Card (1/3 width) */}
                    {/* Task A: Added min-w-0 to prevent grid blowout */}
                    <Surface variant="card" className="flex flex-col min-w-0 md:self-center"> {/* Task C: No h-full */}
                        {/* Header: Quote + Interrupt (p-6 canonical) */}
                        <CardHeader>
                            <div className={spacing.stackMd}>
                                <Quote className="w-10 h-10 text-primary" />
                                <Heading level={3} size="card" className="text-balance">
                                    {scanContent.statement.interrupt}
                                </Heading>
                            </div>
                        </CardHeader>

                        {/* Content: Goal + CTA (px-6 canonical) */}
                        {/* Task B: Natural flow, no flex-1/justify-end */}
                        <CardContent className={cn("flex flex-col pb-6", spacing.stackLg)}> {/* lint:allowed - pb-6 missing from primitive */}
                            {/* Divider-like separation via stack */}
                            <div className={spacing.stackXs}>
                                <SectionEyebrow className={typography.variants.meta.label}>
                                    {scanContent.statement.goal.title}
                                </SectionEyebrow>
                                <Text size="md" className="text-balance text-muted-foreground">
                                    {scanContent.statement.goal.description}
                                </Text>
                            </div>

                            {/* Task B: CTA responsive sizing (w-full on mobile, auto on sm+) */}
                            <Button
                                asChild
                                size="lg"
                                className="w-full sm:w-auto self-start max-w-full h-auto whitespace-normal text-left py-2" // lint:allowed - CTA multiline support
                                onClick={() =>
                                    trackEvent("cta_click", {
                                        cta_label: scanContent.statement.cta.label,
                                        cta_location: "statement_why_now",
                                    })
                                }
                            >
                                <Link href={scanContent.statement.cta.href}>
                                    {scanContent.statement.cta.label}
                                </Link>
                            </Button>
                        </CardContent>
                    </Surface>
                </div>
            </div>
        </section>
    );
}
