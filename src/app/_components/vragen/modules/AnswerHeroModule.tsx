import { HomeModule } from "@/app/_components/home/HomeModule";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { Heading } from "@/design-system/components/Typography";
import { StandfirstSection } from "@/components/sections/StandfirstSection";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { vragenContent, VRAGEN_BASE_PATH, type AnswerPage } from "@/app/_content/vragen";
import type { Locale } from "@/lib/i18n/config";

interface AnswerHeroModuleProps {
    lang: Locale;
    page: AnswerPage;
}

export function AnswerHeroModule({ lang, page }: AnswerHeroModuleProps) {
    const { index } = vragenContent[lang];

    // The cluster is not a page, so it would be a dead crumb. It shows up as a
    // badge below instead, the same way the index lists it.
    const crumbs: Crumb[] = [
        { label: index.breadcrumbLabel, href: VRAGEN_BASE_PATH },
        { label: page.question },
    ];

    return (
        <HomeModule
            id="answer-hero"
            width="full"
            tone="light"
            pad="m"
            padTop="xl"
            padBottom="s"
            gap="none"
            containsContent
        >
            {/* Centering uses flex, not mx-auto: globals.css nullifies margins. */}
            <div className="flex justify-center">
                <div className={cn(spacing.stackLg, "w-full max-w-2xl")}>
                    <Breadcrumb crumbs={crumbs} />
                    <div className={cn(spacing.stackSm, "items-start")}>
                        <div className="flex">
                            <CategoryPill>{page.cluster}</CategoryPill>
                        </div>
                        <Heading level={1} size="prompt" className="text-balance">
                            {page.question}
                        </Heading>
                    </div>
                    <StandfirstSection text={page.lead} />
                </div>
            </div>
        </HomeModule>
    );
}
