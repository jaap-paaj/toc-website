import { HomeModule } from "../HomeModule";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

export function HomeFooterCtaModule() {
    return (
        <HomeModule id="cta" width="full" pad="m" padTop="none" gap="s">
            <div className="container mx-auto">
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
                                    <div className={cn(typography.variants.meta.eyebrow, "opacity-70")}>
                                        Ready
                                    </div>

                                    <h2 className={typography.variants.display.section}>
                                        READY FOR CHANGE?
                                        <br />
                                        LET&apos;S TALK!
                                    </h2>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                                    <Button
                                        asChild
                                        size="xl"
                                        className="tone-dark bg-background text-foreground hover:bg-background/80 rounded-full"
                                    >
                                        <a href="mailto:info@theonlyconstant.nl">INFO@THEONLYCONSTANT.NL</a>
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Footer note */}
                            <div className="flex lg:justify-end">
                                <div className={cn(typography.variants.body.sm, "opacity-70 text-center lg:text-right w-full")}>
                                    © The Only Constant 2025
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}