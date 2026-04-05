"use client";

import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { Text } from "@/design-system/components/Typography";
import { blogContent } from "@/app/_content/blog";
import { useLocale } from "@/lib/i18n/useLocale";

export function BlogAuthorBio() {
    const lang = useLocale();
    const bio = blogContent[lang].authorBio;

    return (
        <aside className={cn("w-full border-t border-border", spacing.stackSm, "pt-6" /* lint:allowed - visual separator */)}>
            <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                {bio.label}
            </span>
            <div className={spacing.stackXs}>
                <Text size="md" className="text-foreground">
                    <strong className="font-semibold">{bio.name}</strong> {/* lint:allowed */}
                </Text>
                <Text size="md" className="text-muted-foreground">
                    {bio.description}
                </Text>
            </div>
        </aside>
    );
}
