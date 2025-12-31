import { HomeModule } from "../../home/HomeModule";
import React from "react";
import { contactContent } from "../contact.content";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";

type AddressCard = {
    title: string;
    lines: readonly string[];
    mapLink?: {
        label: string;
        href: string;
    };
    items?: readonly {
        label: string;
        value: string;
    }[];
    media?: { // Added media type definition
        type: "embed";
        title: string;
        src: string;
    };
};

export function ContactDetailsModule() {
    const cards = contactContent.details.cards as readonly AddressCard[];

    return (
        <HomeModule id="contact-details" width="full" tone="light" pad="m" gap="none">
            <div className="container mx-auto">
                <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                    <SectionHeader
                        variant="split"
                        divider={true}
                        eyebrow={contactContent.details.eyebrow}
                        description={contactContent.details.description}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 [&_.grid]:items-start">
                        {cards.map((card, idx) => (
                            <Surface key={idx} variant="catalog" className="flex flex-col gap-3 p-6 md:p-8 h-full"> {/* Ensure full height */}
                                {card.media ? (
                                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 h-full"> {/* 50/50 Grid for Media Cards */}
                                        <div className="flex flex-col gap-3">
                                            <Heading level={3} size="card" className="text-primary-foreground">
                                                {card.title}
                                            </Heading>
                                            <div className={cn("text-primary-foreground/60 max-w-prose flex flex-col gap-1", typography.variants.body.md)}>
                                                {card.lines.map((line, i) => (
                                                    <span key={i}>{line}</span>
                                                ))}
                                                {card.mapLink && (
                                                    <a
                                                        href={card.mapLink.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline hover:text-primary-foreground pt-1" /* lint:allowed */
                                                    >
                                                        {card.mapLink.label}
                                                    </a>
                                                )}
                                            </div>
                                            {card.items && (
                                                <dl className={cn("grid grid-cols-1 sm:grid-cols-[min-content_1fr] gap-y-2 sm:gap-x-8 text-primary-foreground/60 max-w-prose pt-2", typography.variants.body.md) /* lint:allowed */}>
                                                    {card.items.map((item, i) => (
                                                        <React.Fragment key={i}>
                                                            <dt className={cn(typography.variants.meta.label, "pt-1 whitespace-nowrap") /* lint:allowed */}>
                                                                {item.label}
                                                            </dt>
                                                            <dd className={cn(typography.variants.body.sm, "tabular-nums break-words")}>
                                                                {item.value}
                                                            </dd>
                                                        </React.Fragment>
                                                    ))}
                                                </dl>
                                            )}
                                        </div>
                                        {/* Media Column */}
                                        <div className="relative w-full h-full min-h-[200px] rounded-surface overflow-hidden bg-muted">
                                            <iframe
                                                src={card.media.src}
                                                title={card.media.title}
                                                className="absolute inset-0 w-full h-full border-0"
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    /* Standard Layout for Non-Media Cards (Unchanged Logic) */
                                    <>
                                        <Heading level={3} size="card" className="text-primary-foreground">
                                            {card.title}
                                        </Heading>
                                        <div className={cn("text-primary-foreground/60 max-w-prose flex flex-col gap-1", typography.variants.body.md)}>
                                            {card.lines.map((line, i) => (
                                                <span key={i}>{line}</span>
                                            ))}
                                            {card.mapLink && (
                                                <a
                                                    href={card.mapLink.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline hover:text-primary-foreground pt-1" /* lint:allowed */
                                                >
                                                    {card.mapLink.label}
                                                </a>
                                            )}
                                        </div>
                                        {card.items && (
                                            <dl className={cn("grid grid-cols-1 sm:grid-cols-[min-content_1fr] gap-y-2 sm:gap-x-8 text-primary-foreground/60 max-w-prose pt-2", typography.variants.body.md) /* lint:allowed */}>
                                                {card.items.map((item, i) => (
                                                    <React.Fragment key={i}>
                                                        <dt className={cn(typography.variants.meta.label, "pt-1 whitespace-nowrap") /* lint:allowed */}>
                                                            {item.label}
                                                        </dt>
                                                        <dd className={cn(typography.variants.body.sm, "tabular-nums break-words")}>
                                                            {item.value}
                                                        </dd>
                                                    </React.Fragment>
                                                ))}
                                            </dl>
                                        )}
                                    </>
                                )}
                            </Surface>
                        ))}
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}