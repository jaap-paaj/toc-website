"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { Button } from "@/components/ui/Button";
import { Surface } from "@/design-system/components/Surfaces";
import { Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics/ga";
import { useLocale } from "@/lib/i18n/useLocale";
import { EHBO_HREF, type AnswerPage } from "@/app/_content/vragen";

interface AnswerCtaModuleProps {
    page: AnswerPage;
}

export function AnswerCtaModule({ page }: AnswerCtaModuleProps) {
    const lang = useLocale();
    const tool = page.cta.href === EHBO_HREF ? "ehbo" : "readiness";

    function handleClick() {
        trackEvent("cta_click", {
            tool,
            cta_label: page.cta.label,
            cta_location: "answer_page",
            answer_slug: page.slug,
            language: lang,
        });
    }

    return (
        <HomeModule
            id="answer-cta"
            width="full"
            tone="light"
            pad="m"
            padTop="none"
            padBottom="m"
            gap="none"
            containsContent
        >
            {/* Centering uses flex, not mx-auto: globals.css nullifies margins. */}
            <div className="flex justify-center">
                <Surface
                    variant="panel"
                    className={cn(
                        "w-full max-w-2xl bg-foreground/5 px-6 py-8 md:px-8 md:py-10" /* lint:allowed - CTA block internal padding */,
                        spacing.stackLg,
                    )}
                >
                    <Text size="lg">{page.closing}</Text>
                    <div className="flex">
                        <Button asChild size="lg" onClick={handleClick}>
                            <Link href={page.cta.href}>{page.cta.label}</Link>
                        </Button>
                    </div>
                </Surface>
            </div>
        </HomeModule>
    );
}
