import { ArrowRight } from "lucide-react";
import { spacing } from "@/design-system/tokens/spacing";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { SectionEyebrow } from "@/design-system/components/SectionEyebrow";
import { typography } from "@/design-system/tokens/typography";
import { Surface } from "@/design-system/components/Surfaces";
import { Button } from "@/components/ui/Button";

export interface TrainingItem {
    title: string;
    description: string;
    href?: string;
    tags?: string[];
}

interface TrainingCategorySectionProps {
    eyebrow: string;
    description: string;
    items: TrainingItem[];
    className?: string;
    cta: {
        label: string;
        href?: string;
    };
}

export function TrainingCategorySection({
    eyebrow,
    description,
    items,
    className,
    cta
}: TrainingCategorySectionProps) {
    return (
        <div className={cn("container mx-auto", spacing.modulePad.m, className)}>
            <div className="flex flex-col gap-12 md:gap-16">
                {/* Header Block */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start">
                    <SectionEyebrow className="w-full md:w-1/3 shrink-0">
                        {eyebrow}
                    </SectionEyebrow>
                    <Text size="lg" className="text-muted-foreground md:max-w-2xl">
                        {description}
                    </Text>
                </div>

                {/* Grid Block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {items.map((item, idx) => (
                        <Surface
                            key={idx}
                            variant="card"
                            className={cn(
                                "group relative flex flex-col p-8 md:p-10 h-full min-h-[300px]",
                                "transition-all duration-300",
                                "bg-secondary/30 border border-border/50",
                                "hover:bg-secondary/50 hover:border-border hover:shadow-panel"
                            )}
                        >
                            <div className="flex flex-col gap-4 flex-1">
                                <Heading level={3} size="card">
                                    {item.title}
                                </Heading>
                                <Text className={cn("text-muted-foreground", spacing.component.cardText, typography.variants.body.md)}>
                                    {item.description}
                                </Text>
                            </div>

                            <div className="mt-auto self-start">
                                <Button
                                    variant="link"
                                    className={cn("p-0 h-auto text-foreground group-hover:translate-x-1 transition-transform", typography.variants.ui.nav.link)}
                                >
                                    {cta.label} <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>

                            {item.href && (
                                <Link
                                    href={item.href}
                                    className="absolute inset-0 z-10"
                                    aria-label={`${cta.label} for ${item.title}`}
                                />
                            )}
                        </Surface>
                    ))}
                </div>
            </div>
        </div>
    );
}
