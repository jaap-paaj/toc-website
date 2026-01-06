"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics/ga";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

export interface FooterCtaSectionProps {
    title: string | string[] | readonly string[];
    cta: {
        label: string;
        href: string;
    };
    panelTitle?: string;
    panelBody: string;
    copyright: string;
    className?: string; // Standard pattern
}

export function FooterCtaSection({
    title,
    cta,
    panelTitle,
    panelBody,
    copyright,
    className
}: FooterCtaSectionProps) {
    return (
        <div className={cn("container mx-auto", className)}>
            <Surface
                variant="card"
                className={cn(
                    "overflow-hidden",
                    "bg-[var(--toc-hero-bg)] text-[var(--toc-hero-text)]",
                    // Override surface default padding if needed, but we use internal padding below
                    "p-0"
                )}
            >
                <div className={cn("px-6 md:px-12 lg:px-14", spacing.modulePad.s)}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
                        {/* Left (2/3): Headline + CTA */}
                        <div className="lg:col-span-2 flex flex-col gap-8">
                            <h2 className={typography.variants.display.section}>
                                {Array.isArray(title) ? (
                                    title.map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < title.length - 1 && <br />}
                                        </span>
                                    ))
                                ) : (
                                    title
                                )}
                            </h2>

                            <div className="flex flex-col gap-6">
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
                                <div className={cn(typography.variants.body.sm, "opacity-50")}>
                                    {copyright}
                                </div>
                            </div>
                        </div>

                        {/* Right (1/3): Panel Body + Footer note */}
                        <div className="lg:col-span-1 flex flex-col gap-6 h-full w-full">
                            <div className="flex flex-col gap-3">
                                {panelTitle && (
                                    <h3 className={cn(typography.variants.meta.eyebrow, "opacity-70")}>
                                        {panelTitle}
                                    </h3>
                                )}
                                <p className={cn(typography.variants.body.md, "opacity-90")}>
                                    {panelBody}
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </Surface>
        </div>
    );
}
