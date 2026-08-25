import { HomeModule } from "@/app/_components/home/HomeModule";
import { ProseSection } from "@/components/sections/ProseSection";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import {
    privacyContent,
    type PrivacyProcessorRow,
} from "@/app/_content/privacy";
import type { Locale } from "@/lib/i18n/config";

/**
 * The processor table, as stacked entries rather than columns: three cells per
 * party read fine as a list, and a real table would fight the 375px viewport.
 * The eyebrow outranks the body copy the same way the footer's column heads do.
 */
function ProcessorList({ rows }: { rows: PrivacyProcessorRow[] }) {
    return (
        <ul className={spacing.stackLg}>
            {rows.map((row) => (
                <li key={row.name} className={spacing.stackXs}>
                    <span
                        className={cn(
                            typography.variants.meta.eyebrow,
                            "text-foreground",
                        )}
                    >
                        {row.name}
                    </span>
                    <span className={cn(typography.variants.body.md, "text-foreground")}>
                        {row.purpose}
                    </span>
                    <span
                        className={cn(
                            typography.variants.body.sm,
                            "text-muted-foreground",
                        )}
                    >
                        {row.region}
                    </span>
                </li>
            ))}
        </ul>
    );
}

interface PrivacyBodyModuleProps {
    lang: Locale;
}

export function PrivacyBodyModule({ lang }: PrivacyBodyModuleProps) {
    const { beforeProcessors, processors, afterProcessors } =
        privacyContent[lang];

    return (
        <HomeModule
            id="privacy-body"
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
                <div className={cn(spacing.stackLg, "w-full max-w-2xl")}>
                    <ProseSection blocks={beforeProcessors} />
                    <ProcessorList rows={processors} />
                    <ProseSection blocks={afterProcessors} />
                </div>
            </div>
        </HomeModule>
    );
}
