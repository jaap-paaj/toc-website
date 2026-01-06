"use client";

import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics/ga";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { scanContent } from "@/app/_content/ai-opportunity-scan";

export function ScanLandingHeroModule() {
    const { title, description, cta } = scanContent.hero;

    return (
        <section className={cn(spacing.modulePad.xl, "relative")}>
            <div className={cn("container mx-auto")}>
                <div className={cn(spacing.stackXl, "max-w-4xl")}>
                    <Heading
                        level={1}
                        className={typography.variants.display.hero}
                    >
                        {title}
                    </Heading>

                    <div className={cn(spacing.stackXl, "max-w-2xl")}>
                        <Text size="lg" className={typography.variants.body.lg}>
                            {description}
                        </Text>

                        <div className={spacing.stackMd}>
                            <Button
                                asChild
                                size="xl"
                                onClick={() =>
                                    trackEvent("cta_click", {
                                        cta_label: cta.label,
                                        cta_location: "scan_landing_hero",
                                    })
                                }
                            >
                                <a href={cta.href}>{cta.label}</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
