"use client";

import { cn } from "@/lib/utils";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { scanContent } from "@/app/_content/ai-opportunity-scan";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function ScanFaqModule() {
    return (
        <section className={cn(spacing.modulePadBottom.m, "tone-light bg-background text-foreground")}>
            <div className={cn("container mx-auto", spacing.stackLg)}>
                {/* Header */}
                <SectionHeader
                    eyebrow={scanContent.faq.eyebrow}
                    title={scanContent.faq.title}
                    variant="stacked"
                    divider={true}
                />

                {/* FAQ List */}
                <div className="w-full max-w-3xl mx-auto"> {/* lint:allowed - optical vertical rhythm */}
                    <Accordion type="single" collapsible className="w-full">
                        {scanContent.faq.items.map((item, index) => (
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
        </section>
    );
}
