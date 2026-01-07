"use client";

import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { trackEvent } from "@/lib/analytics/ga";
import Link from "next/link";

export function ScanLandingHeroModule() {
    return (
        <section className={cn("w-full", spacing.modulePad.xl)}>
            <div className={cn("container mx-auto flex flex-col items-center text-center max-w-4xl", spacing.stackLg)}>
                {/* 1. Headline */}
                <Heading level={1} size="section" className="text-balance">
                    {scanContent.hero.title}
                </Heading>

                {/* 2. Subheadline */}
                <Text size="lg" className="text-muted-foreground text-balance max-w-2xl">
                    {scanContent.hero.subtitle}
                </Text>

                {/* 3. Outcome Proof Line */}
                <div className={cn("p-4 rounded-surface bg-muted/30", spacing.stackXs)} /* lint:allowed */>
                    {scanContent.hero.outcomes.map((outcome, idx) => (
                        <Text key={idx} size="sm" className="text-foreground">
                            {outcome}
                        </Text>
                    ))}
                </div>

                {/* 4. Primary CTA */}
                <div className={spacing.section.heroFollower}>
                    <Button
                        asChild
                        size="xl"
                        onClick={() =>
                            trackEvent("cta_click", {
                                cta_label: scanContent.hero.cta.label,
                                cta_location: "hero_scan_landing",
                            })
                        }
                    >
                        <Link href={scanContent.hero.cta.href}>
                            {scanContent.hero.cta.label}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
