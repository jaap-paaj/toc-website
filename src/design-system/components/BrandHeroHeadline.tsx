import { Heading } from "./Typography";
import { cn } from "@/lib/utils";
import { typography } from "@/design-system/tokens/typography";

interface BrandHeroHeadlineProps {
    className?: string;
}

export function BrandHeroHeadline({ className }: BrandHeroHeadlineProps) {
    return (
        <Heading
            level={1}
            // Reuse system utility for hero display size
            className={cn(typography.variants.display.hero, className)}
        >
            {/* Semantic accessible label */}
            <span className="sr-only">The Only Constant Is Change</span>

            {/* Visual presentation with forced line breaks */}
            <div aria-hidden="true" className="flex flex-col items-start">
                <span className="block">THE ONLY</span>
                <span className="block">CONSTANT</span>
                <span className="block">IS CHANGE</span>
            </div>
        </Heading>
    );
}
