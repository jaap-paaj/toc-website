import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

export interface CapabilityCardItem {
    id: string;
    title: string;
    description: string;
    cta: {
        label: string;
        href: string;
    };
}

interface CapabilityCardProps {
    item: CapabilityCardItem;
}

export function CapabilityCard({ item }: CapabilityCardProps) {
    return (
        <Link
            href={item.cta.href}
            className="group block h-full outline-none rounded-surface focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            aria-label={`${item.title}: ${item.cta.label}`}
        >
            <Surface
                variant="card"
                cardHeight="standard"
                className={cn(
                    "relative flex flex-col p-6 md:p-8 h-full transition-all duration-300 ease-out",
                    "group-hover:bg-foreground/10 group-hover:border-foreground/20 group-hover:shadow-card-hover group-focus:bg-foreground/10 group-focus:border-foreground/20 group-focus:shadow-card-hover"
                )}
            >
                <div className={cn("flex flex-col gap-3", spacing.component.headerTransition)}>
                    <span className={cn("text-muted-foreground transition-colors duration-300 group-hover:text-foreground", typography.variants.meta.step)}>
                        {item.id}
                    </span>
                    <div className="h-px w-full bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/30" />
                </div>

                <div className="flex flex-col flex-1 gap-6">
                    <Heading level={3} size="card" className={spacing.component.cardTitle}>
                        {item.title}
                    </Heading>

                    <Text className={cn("text-muted-foreground transition-colors duration-300 group-hover:text-foreground", spacing.component.cardText, typography.variants.body.md)}>
                        {item.description}
                    </Text>

                    <div className={cn("mt-auto self-end", spacing.component.cardCta)}>
                        <div className="rounded-full w-10 h-10 flex items-center justify-center border border-foreground/20 text-foreground/80 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Surface>
        </Link>
    );
}
