"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics/ga";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

export interface FooterCtaSectionProps {
    eyebrow?: string;
    title: React.ReactNode;
    cta: {
        label: string;
        href: string;
    };
    copyright: string;
    className?: string; // Standard pattern
}

export function FooterCtaSection({
    eyebrow,
    title,
    cta,
    copyright,
    className
}: FooterCtaSectionProps) {
    return (
        <div className={cn("container mx-auto", className)}>
            <div
                className={cn(
                    "rounded-surface border border-border shadow-surface overflow-hidden",
                    "bg-[var(--toc-hero-bg)] text-[var(--toc-hero-text)]"
                )}
            >
                <div className={cn("px-6 md:px-12 lg:px-14", spacing.modulePad.s)}>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-end">
                        {/* Left: Headline + CTA */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                {eyebrow && (
                                    <div className={cn(typography.variants.meta.eyebrow, "opacity-70")}>
                                        {eyebrow}
                                    </div>
                                )}

                                <h2 className={typography.variants.display.section}>
                                    {title}
                                </h2>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                                <Button
                                    asChild
                                    size="xl"
                                    className="tone-dark bg-background text-foreground hover:bg-background/80 rounded-full"
                                    onClick={() =>
                                        trackEvent("cta_click", {
                                            cta_label: cta.label,
                                            cta_location: "footer",
                                        })
                                    }
                                >
                                    <a href={cta.href}>{cta.label}</a>
                                </Button>
                            </div>
                        </div>

                        {/* Right: Footer note */}
                        <div className="flex lg:justify-end">
                            <div className={cn(typography.variants.body.md, "opacity-70 text-center lg:text-right w-full")}>
                                {copyright}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
