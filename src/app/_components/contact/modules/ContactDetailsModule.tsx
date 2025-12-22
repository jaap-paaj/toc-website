import { HomeModule } from "../../home/HomeModule";
import React from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";

interface ContactItem {
    title: string;
    description: string | React.ReactNode;
}

export function ContactDetailsModule() {
    const items: ContactItem[] = [
        {
            title: "VISIT US",
            description: (
                <div className="flex flex-col gap-1">
                    <span>The Only Constant B.V.</span>
                    <span className="text-primary-foreground/60">Surinameplein 1 HS</span>
                    <span className="text-primary-foreground/60">1058 GL Amsterdam</span>
                    <span className="text-primary-foreground/60">The Netherlands</span>
                </div>
            ),
        },
        {
            title: "LEGAL & FINANCE",
            description: (
                <dl className="grid grid-cols-[min-content_1fr] gap-x-8 gap-y-2">
                    <dt className="text-primary-foreground/60 font-medium uppercase text-xs tracking-wider pt-1">
                        KVK
                    </dt>
                    <dd className="font-mono tabular-nums">....</dd>

                    <dt className="text-primary-foreground/60 font-medium uppercase text-xs tracking-wider pt-1">
                        BTW
                    </dt>
                    <dd className="font-mono tabular-nums">....</dd>

                    <dt className="text-primary-foreground/60 font-medium uppercase text-xs tracking-wider pt-1">
                        BANK
                    </dt>
                    <dd className="font-mono tabular-nums">....</dd>
                </dl>
            ),
        },
    ];

    return (
        <HomeModule id="contact-details" width="full" tone="light" pad="m" gap="none">
            <div className="container mx-auto">
                <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                    <SectionHeader
                        variant="split"
                        divider={false}
                        eyebrow="COMPANY INFORMATION"
                        description="Here you can find our visiting address and administrative details."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 [&_.grid]:items-start">
                        {items.map((item, idx) => (
                            <Surface
                                key={idx}
                                variant="catalog"
                                className="flex flex-col gap-3 p-6 md:p-8"
                            >
                                <Heading
                                    level={3}
                                    size="card"
                                    className="font-semibold text-primary-foreground"
                                >
                                    {item.title}
                                </Heading>

                                <Text
                                    as={typeof item.description === "string" ? "p" : "div"}
                                    className="text-primary-foreground/60 text-sm leading-relaxed max-w-prose"
                                >
                                    {item.description}
                                </Text>
                            </Surface>
                        ))}
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}