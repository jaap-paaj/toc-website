"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics/ga";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { useLocale, localizeHref } from "@/lib/i18n/useLocale";

export interface FooterCtaSectionProps {
    title: string | string[] | readonly string[];
    cta: {
        label: string;
        href: string;
    };
    secondaryAction?: {
        prefix: string; // "Of mail naar"
        label: string; // visible text
        href: string; // mailto: or https://
    };
    panelTitle?: string;
    panelBody: string;
    className?: string; // Standard pattern
}

export function FooterCtaSection({
    title,
    cta,
    secondaryAction,
    panelTitle,
    panelBody,
    className
}: FooterCtaSectionProps) {
    const lang = useLocale();
    return (
        <footer className={cn("container mx-auto", className)}>
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

                            <div className="flex flex-col gap-3 items-start">
                                <div className="flex items-center gap-3">
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
                                        <a href={localizeHref(cta.href, lang)}>{cta.label}</a>
                                    </Button>
                                    {secondaryAction && (
                                        <span className={cn(typography.variants.body.md)}>
                                            {secondaryAction.prefix}
                                        </span>
                                    )}
                                </div>
                                {secondaryAction && (
                                    <Button
                                        asChild
                                        size="xl"
                                        className="tone-light bg-background text-foreground hover:bg-background/80 rounded-full"
                                    >
                                        <a href={secondaryAction.href}>
                                            {secondaryAction.label}
                                        </a>
                                    </Button>
                                )}
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
        </footer>
    );
}
