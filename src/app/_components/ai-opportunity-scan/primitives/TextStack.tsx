import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";
import Link from "next/link";
import Image from "next/image";

interface TextStackProps {
    title: string;
    subtitle: string;
    outcomes: readonly string[];
    cta: {
        label: string;
        href: string;
    };
    trust: {
        label: string;
        logos: readonly {
            name: string;
            src: string;
        }[];
    };
    onCtaClick?: () => void;
}

export function TextStack({ title, subtitle, outcomes, cta, trust, onCtaClick }: TextStackProps) {
    return (
        <div className={cn("container mx-auto flex flex-col items-center text-center max-w-4xl", spacing.stackXl)}>
            {/* Zones A & B: Offer + Action (Tightly Coupled) */}
            <div className={cn("flex flex-col items-center w-full", spacing.stackMd)}>
                {/* 1. Headline */}
                <Heading level={1} size="section" className={cn("text-balance flex flex-col items-center", spacing.stackXs)}>
                    <span>{title.split(": ")[0]}:</span>
                    <span className="font-medium text-foreground/90" /* lint:allowed */>
                        {title.split(": ")[1]}
                    </span>
                </Heading>

                {/* 2. Subheadline */}
                <Text size="lg" className="text-muted-foreground text-balance max-w-2xl">
                    {subtitle}
                </Text>

                {/* 3. Outcome Proof Line */}
                <div className={cn("p-4 rounded-surface bg-muted/30", spacing.stackXs)} /* lint:allowed */>
                    {outcomes.map((outcome, idx) => (
                        <Text key={idx} size="lg" className="text-foreground">
                            {outcome}
                        </Text>
                    ))}
                </div>

                {/* 4. Primary CTA */}
                <Button
                    asChild
                    size="xl"
                    onClick={onCtaClick}
                >
                    <Link href={cta.href}>
                        {cta.label}
                    </Link>
                </Button>
            </div>

            {/* Zone C: Trust Micro-Signal */}
            <div className={cn("flex flex-col items-center w-full", spacing.stackSm)}>
                <Text as="p" className={cn(typography.variants.meta.label, "text-muted-foreground text-center")}>
                    {trust.label}
                </Text>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-50 md:opacity-60">
                    {trust.logos.map((logo) => (
                        <div key={logo.name} className="relative h-7 md:h-8 w-auto flex items-center justify-center grayscale">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                height={32}
                                width={128}
                                className="h-full w-auto max-w-20 md:max-w-28 object-contain brightness-0 invert"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
