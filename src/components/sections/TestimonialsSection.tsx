import { cn } from "@/lib/utils";
import { Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { SectionHeader } from "./SectionHeader";
import { spacing } from "@/design-system/tokens/spacing";
import { Quote } from "lucide-react";
import { typography } from "@/design-system/tokens/typography";

export interface TestimonialItem {
    quote: string;
    author?: string;
    role?: string;
    company?: string;
}

interface TestimonialsSectionProps {
    eyebrow: string;
    items: TestimonialItem[];
    className?: string;
    pad?: "m" | "none";
}

export function TestimonialsSection({
    eyebrow,
    items,
    className,
    pad = "m"
}: TestimonialsSectionProps) {
    return (
        <div className={cn("container mx-auto", pad === "m" ? spacing.modulePad.m : undefined, className)}>
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={eyebrow} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {items.map((item, idx) => (
                        <Surface
                            key={idx}
                            variant="card"
                            cardHeight="standard"
                            className="flex flex-col p-8 gap-6 h-full"
                        >
                            <Quote className="w-8 h-8 text-primary fill-primary/20" />



                            <div className="flex-1">
                                <Text className={typography.variants.body.md}>
                                    &quot;{item.quote}&quot;
                                </Text>
                            </div>
                        </Surface>
                    ))}
                </div>
            </div>
        </div>
    );
}
