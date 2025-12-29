import { cn } from "@/lib/utils";
import { Heading } from "@/design-system/components/Typography";
import { SectionEyebrow } from "@/design-system/components/SectionEyebrow";
import { typography } from "@/design-system/tokens/typography";

interface EditorialStatementSectionProps {
    eyebrow?: string;
    lines: readonly string[];
    emphasisIndex?: number;
    className?: string;
}

export function EditorialStatementSection({
    eyebrow,
    lines,
    emphasisIndex = 2,
    className,
}: EditorialStatementSectionProps) {
    return (
        <div className={cn("flex flex-col gap-6", className)}>
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}

            <div className="flex flex-col">
                {lines.map((line, index) => (
                    <Heading
                        key={index}
                        level={2}
                        className={cn(
                            typography.variants.display.editorialStatement,
                            index === emphasisIndex ? "text-primary" : "text-foreground"
                        )}
                    >
                        {line}
                    </Heading>
                ))}
            </div>
        </div>
    );
}
