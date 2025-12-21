import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";

export type FeatureGridItem = {
    id?: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    href?: string;
};

export type FeatureGridSectionProps = {
    items: FeatureGridItem[];
    /**
     * Number of columns on desktop (md+).
     * defaults to 2.
     */
    columns?: 2 | 3 | 4;
    className?: string;
};

export function FeatureGridSection({
    items,
    columns = 2,
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
                        className={cn(
                            "relative flex flex-col p-6 md:p-8 h-full transition-all duration-300 ease-out",
                            // If wrapped in Link (href exists), the Link has "group". 
                            // If not wrapped, Surface is "group".
                            !item.href && "group",
                            // Hover styles hook into group-hover/group-focus from parent Link
                            item.href && "group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-lg group-focus:bg-white/10 group-focus:border-white/20 group-focus:shadow-lg"
                        )}
                    >
                        {item.id ? (
                            // Services / Process Layout (Index + Divider)
                            <>
                                <div className={cn("flex flex-col gap-3", spacing.component.headerTransition)}>
                                    <span className="text-sm font-mono text-white/60 transition-colors duration-300 group-hover:text-white/90">
                                        {item.id}
                                    </span>
                                    <div className="h-px w-full bg-white/15 transition-colors duration-300 group-hover:bg-white/30" />
                                </div>

                                <div className="flex flex-col flex-1 gap-6">
                                    <Heading level={3} size="card" className="font-semibold pt-3 md:pt-4">
                                        {item.title}
                                    </Heading>

                                    <Text className="text-white/75 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                                        {item.description}
                                    </Text>

                                    {item.href && (
                                        <div className="mt-auto self-end pt-6">
                                            <div className="rounded-full w-10 h-10 flex items-center justify-center border border-white/20 text-white/80 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
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
                                    <Heading level={3} size="card" className="font-semibold">
                                        {item.title}
                                    </Heading>
                                    <Text className="text-muted-foreground text-sm leading-relaxed">
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
                            className="group block h-full outline-none rounded-surface focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
