"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { EhboChat } from "@/app/_components/ai-ehbo/EhboChat";
import { ehboContent } from "@/app/_content/ai-ehbo";
import { useLocale } from "@/lib/i18n/useLocale";

export function EhboChatModule() {
    const lang = useLocale();
    const content = ehboContent[lang];

    return (
        <HomeModule id="ehbo-chat" width="full" tone="light" pad="none" padTop="s" padBottom="m" gap="none" containsContent>
            <div className="w-full flex flex-col items-center">
                <div className={cn("w-full max-w-3xl flex flex-col", spacing.stackMd)}>
                    {/* Header */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <img
                            src="/images/brand/toc/TOC_Logo_black.svg"
                            alt="The Only Constant"
                            className="h-8 w-auto"
                        />
                        <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                            {content.hero.eyebrow}
                        </span>
                    </div>

                    {/* Back link */}
                    <Link
                        href="/ai-ehbo"
                        className={cn(typography.variants.meta.label, "text-muted-foreground hover:text-foreground transition-colors")}
                    >
                        &larr; {content.chat.back}
                    </Link>

                    {/* Chat container */}
                    <Surface variant="card" className="overflow-hidden flex flex-col h-[calc(100vh-280px)] min-h-[500px]">
                        <EhboChat />
                    </Surface>
                </div>
            </div>
        </HomeModule>
    );
}
