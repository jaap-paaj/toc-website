"use client";

import { Fragment } from "react";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";

export function AiActAboutModule() {
    const lang = useLocale();
    const { about, eurLexBadge } = aiActContent[lang];

    return (
        <HomeModule
            id="ai-act-about"
            width="full"
            tone="light"
            padTop="none"
            padBottom="m"
            gap="none"
            containsContent
        >
            <div className="w-full flex flex-col items-center">
                <div className={cn("w-full max-w-3xl text-center", spacing.stackMd)}>
                    <Heading level={2} size="card">
                        {about.title}
                    </Heading>
                    {about.body.map((p, i) => {
                        const parts = p.split(eurLexBadge.label);
                        return (
                            <Text
                                key={i}
                                size="md"
                                className="text-muted-foreground"
                            >
                                {parts.map((part, j) => (
                                    <Fragment key={j}>
                                        {part}
                                        {j < parts.length - 1 && (
                                            <a
                                                href={eurLexBadge.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground underline underline-offset-4 hover:no-underline"
                                            >
                                                {eurLexBadge.label}
                                            </a>
                                        )}
                                    </Fragment>
                                ))}
                            </Text>
                        );
                    })}
                </div>
            </div>
        </HomeModule>
    );
}
