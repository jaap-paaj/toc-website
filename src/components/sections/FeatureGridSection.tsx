import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";

import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";

export type FeatureGridItem = {
    id?: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    href?: string;
};

export type FeatureGridSectionProps = {
    items: FeatureGridItem[] | readonly FeatureGridItem[];
    /**
     * Number of columns on desktop (md+).
     * defaults to 2.
     */
    columns?: 2 | 3 | 4;
    interactive?: boolean;
    className?: string;
};

export function FeatureGridSection({
    items,
    columns = 2,
    interactive = true,
    className
}: FeatureGridSectionProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-6 lg:gap-8",
                columns === 2 && "md:grid-cols-2",
                columns === 3 && "md:grid-cols-3",
                columns === 4 && "md:grid-cols-4",
                className
            )}
        >
            {items.map((item, idx) => {
                const content = (
                    <Surface
                        variant="card"
                        cardHeight="standard"
                        className={cn(
                            "relative flex flex-col p-6 md:p-8 h-full transition-all duration-300 ease-out",
                            // If wrapped in Link (href exists), the Link has "group". 
                            // If not wrapped, Surface is "group" ONLY if interactive.
                            !item.href && interactive && "group",
                            // Hover styles hook into group-hover/group-focus from parent Link
                            item.href && "group-hover:bg-foreground/10 group-hover:border-foreground/20 group-hover:shadow-card-hover group-focus:bg-foreground/10 group-focus:border-foreground/20 group-focus:shadow-card-hover"
                        )}
                    >


                        {item.id ? (
                            // Services / Process Layout (Index + Divider)
                            <>
                                <div className={cn("flex flex-col gap-3", spacing.component.headerTransition)}>
                                    <span className={cn("text-muted-foreground transition-colors duration-300 group-hover:text-foreground", typography.variants.meta.code)}>
                                        {item.id}
                                    </span>
                                    <div className="h-px w-full bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/30" />
                                </div>

                                <div className="flex flex-col flex-1 gap-6">
                                    <Heading level={3} size="card" className={spacing.component.cardTitle}>
                                        {item.title}
                                    </Heading>

                                    <Text className={cn("text-muted-foreground transition-colors duration-300 group-hover:text-foreground", typography.variants.body.md)}>
                                        {item.description}
                                    </Text>

                                    {item.href && (
                                        <div className={cn("mt-auto self-end", spacing.component.cardCta)}>
                                            <div className="rounded-full w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/80 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            // Feature / Icon Layout (Side-by-side)
                            <div className="flex gap-4 items-start">
                                {item.icon && (
                                    <div className="shrink-0 text-primary">
                                        {item.icon}
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <Heading level={3} size="card">
                                        {item.title}
                                    </Heading>
                                    <Text className={cn("text-muted-foreground", typography.variants.body.md)}>
                                        {item.description}
                                    </Text>
                                </div>
                            </div>
                        )}
                    </Surface>
                );

                if (item.href) {
                    return (
                        <Link
                            key={idx}
                            href={item.href}
                            className="group block h-full outline-none rounded-surface focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                            aria-label={`Explore ${item.title}`}
                        >
                            {content}
                        </Link>
                    );
                }

                // Non-clickable surface needed a key wrapper if map returns list
                return <React.Fragment key={idx}>{content}</React.Fragment>;
            })}

        </div>
    );
}
