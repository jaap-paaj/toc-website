"use client";

import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/blog/types";

interface BlogFaqSectionProps {
    title: string;
    items: FaqItem[];
}

export function BlogFaqSection({ title, items }: BlogFaqSectionProps) {
    return (
        <section className="w-full flex flex-col">
            <span className={cn(typography.variants.meta.eyebrow, "text-muted-foreground")}>
                {title}
            </span>
            <Accordion type="single" collapsible className="w-full" suppressHydrationWarning>
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger
                            className={cn(
                                typography.variants.body.md,
                                "text-left hover:no-underline py-4 cursor-pointer" /* lint:allowed - accordion trigger padding */
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
        </section>
    );
}
