"use client";

import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { Surface } from "@/design-system/components/Surfaces";
import { SectionEyebrow } from "@/design-system/components/SectionEyebrow";
import { Heading, Text } from "@/design-system/components/Typography";
import { aiActContent } from "@/app/_content/ai-act";
import { useLocale } from "@/lib/i18n/useLocale";

export function AiActToolboxLinks() {
    const lang = useLocale();
    const content = aiActContent[lang].toolbox;

    return (
        <div className={spacing.stackMd}>
            <SectionEyebrow as="h3" className="mb-0">
                {content.sublabel}
            </SectionEyebrow>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.links.map((tool) => (
                    <Surface
                        key={tool.href}
                        variant="card"
                        className={cn(spacing.stackXs, "p-6 md:p-8 bg-foreground text-background") /* lint:allowed - dark tool tile */}
                    >
                        <Heading level={4} size="card">
                            {tool.title}
                        </Heading>
                        <Text size="sm" className="opacity-80">
                            {tool.description}
                        </Text>
                        <Link
                            href={tool.href}
                            className={cn(
                                typography.variants.ui.button.md,
                                "cursor-pointer self-start mt-2 underline underline-offset-4 hover:opacity-70 transition-opacity",
                            )}
                        >
                            {`${content.openPrefix} ${tool.title} →`}
                        </Link>
                    </Surface>
                ))}
            </div>
        </div>
    );
}
