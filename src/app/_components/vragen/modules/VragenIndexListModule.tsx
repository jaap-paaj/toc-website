import { HomeModule } from "@/app/_components/home/HomeModule";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { vragenContent, VRAGEN_BASE_PATH } from "@/app/_content/vragen";
import type { Locale } from "@/lib/i18n/config";

interface VragenIndexListModuleProps {
    lang: Locale;
}

export function VragenIndexListModule({ lang }: VragenIndexListModuleProps) {
    const { index, pages } = vragenContent[lang];

    return (
        <HomeModule
            id="vragen-list"
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
                <div className={cn(spacing.stackMd, "w-full max-w-3xl")}>
                    <span
                        className={cn(
                            typography.variants.meta.eyebrow,
                            "text-foreground",
                        )}
                    >
                        {index.listEyebrow}
                    </span>
                    <div className="flex flex-col">
                        {pages.map((page) => (
                            <article
                                key={page.slug}
                                className="flex flex-col gap-[var(--space-xs)] border-t border-border py-[var(--space-lg)]"
                            >
                                <span
                                    className={cn(
                                        typography.variants.meta.label,
                                        "text-muted-foreground",
                                    )}
                                >
                                    {page.cluster}
                                </span>
                                <Link
                                    href={`${VRAGEN_BASE_PATH}/${page.slug}`}
                                    className="group"
                                >
                                    <Heading
                                        level={2}
                                        size="prompt"
                                        className="underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors duration-200"
                                    >
                                        {page.question}
                                    </Heading>
                                </Link>
                                <Text size="md" className="text-muted-foreground">
                                    {page.meta.description}
                                </Text>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
