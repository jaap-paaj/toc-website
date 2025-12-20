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
            {items.map((item, idx) => (
                <Surface
                    key={idx}
                    variant="card"
                    className={cn(
                        "group relative flex flex-col p-6 md:p-8 h-full transition-all duration-300 ease-out",
                        // Add hover effect ONLY if href exists (interactive)
                        item.href && "hover:bg-white/10 hover:border-white/20 hover:shadow-lg focus-within:bg-white/10 focus-within:border-white/20 focus-within:shadow-lg"
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

                    {/* Clickable Overlay */}
                    {item.href && (
                        <Link
                            href={item.href}
                            className="absolute inset-0 z-0"
                            aria-hidden="true"
                            tabIndex={-1}
                        />
                    )}
                </Surface>
            ))}
        </div>
    );
}
