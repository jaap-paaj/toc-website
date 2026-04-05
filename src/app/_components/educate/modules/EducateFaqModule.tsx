"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { educateFaq } from "@/app/_content/educate";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { useLocale } from "@/lib/i18n/useLocale";

export function EducateFaqModule() {
    const lang = useLocale();
    const faq = educateFaq[lang];

    return (
        <HomeModule id="educate-faq" width="full" tone="light" pad="m" gap="none" containsContent>
            <div className={cn("w-full", spacing.stackLg)}>
                <SectionHeader
                    eyebrow={faq.eyebrow}
                    title={faq.title}
                    variant="stacked"
                    divider={true}
                />

                <div className="w-full max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faq.items.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger
                                    className={cn(
                                        typography.variants.heading.card,
                                        "text-left hover:no-underline py-4" /* lint:allowed - accordion trigger padding */
                                    )}
                                >
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    className={cn(
                                        typography.variants.body.md,
                                        "text-muted-foreground pb-6" /* lint:allowed - accordion content padding */
                                    )}
                                >
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </HomeModule>
    );
}
