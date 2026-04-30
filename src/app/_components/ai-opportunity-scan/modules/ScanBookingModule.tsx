"use client";

import { ArrowLeft } from "lucide-react";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { GoogleBookingSection } from "@/components/sections/GoogleBookingSection";
import { Heading } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import { useLocale } from "@/lib/i18n/useLocale";

export function ScanBookingModule() {
    const lang = useLocale();
    const content = scanContent[lang].booking;

    return (
        <HomeModule
            id="scan-booking"
            width="full"
            tone="light"
            pad="none"
            padTop="xs"
            padBottom="s"
            gap="none"
            containsContent
        >
            <div className="w-full flex flex-col items-center">
                <div className={cn("w-full max-w-5xl flex flex-col", spacing.stackSm)}>
                    {/* Header: [back · title] left-grouped · logo right */}
                    <div className="flex items-center justify-between w-full">
                        <div className={cn("flex items-center gap-3 md:gap-4")}> {/* lint:allowed - back+title group */}
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                className="rounded-full bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                                aria-label={content.backLink.label}
                            >
                                <Link href={content.backLink.href}>
                                    <ArrowLeft />
                                </Link>
                            </Button>
                            <Heading level={2} size="card" className="text-foreground">
                                {content.title}
                            </Heading>
                        </div>
                        <img
                            src="/images/brand/toc/TOC_Logo_black.svg"
                            alt="The Only Constant"
                            className="h-7 w-auto" /* lint:allowed - logo size */
                        />
                    </div>

                    <GoogleBookingSection
                        title={undefined}
                        embedUrl={content.embedUrl}
                        fallback={content.fallback}
                        className="w-full"
                        enableContainer={false}
                        loadingText={content.loadingText}
                    />
                </div>
            </div>
        </HomeModule>
    );
}
