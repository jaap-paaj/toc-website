import { cn } from "@/lib/utils";
import { Text } from "@/design-system/components/Typography";

export interface StandfirstSectionProps {
    text: string;
    className?: string;
}

/**
 * The lead paragraph of a long-form page, set off by the brand rule.
 *
 * Lives here rather than in the module because the indent and the rule are
 * layout, and layout is the section's to own. The pillar pages use the same
 * treatment inline and can move onto this.
 */
export function StandfirstSection({ text, className }: StandfirstSectionProps) {
    return (
        <div className={cn("border-l-4 border-primary pl-6", className)}>
            <Text size="lg" className="text-muted-foreground">
                {text}
            </Text>
        </div>
    );
}
