"use client";

import Image from "next/image";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Heading, Text } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";

interface TrustLogo {
    name: string;
    src: string;
}

interface LeadMagnetHeroProps {
    id: string;
    eyebrow: string;
    title: string;
    titleMuted?: string;
    description: string;
    cta: { label: string; href: string };
    trust?: {
        label: string;
        logos: ReadonlyArray<TrustLogo>;
    };
    onCtaClick?: () => void;
}

export function LeadMagnetHero({
    id,
    eyebrow,
    title,
    titleMuted,
    description,
    cta,
    trust,
    onCtaClick,
}: LeadMagnetHeroProps) {
    return (
        <HomeModule
            id={id}
            width="full"
            tone="dark"
            pad="m"
            padTop="xl"
            gap="none"
            containsContent
        >
            <div
                className={cn(
                    "w-full flex flex-col items-center text-center",
                    spacing.component.sectionHeader,
                )}
            >
                <span
                    className={cn(
                        typography.variants.meta.eyebrow,
                        "text-muted-foreground",
                    )}
                >
                    {eyebrow}
                </span>
                <Heading level={1} size="section" className="text-balance text-center">
                    {title}
                    {titleMuted && (
                        <>
                            <br />
                            <span className="text-primary">{titleMuted}</span>
                        </>
                    )}
                </Heading>
                <Text size="lg" measure="2xl" className="text-muted-foreground text-balance">
                    {description}
                </Text>
                <Button asChild size="xl" onClick={onCtaClick}>
                    <Link href={cta.href}>{cta.label}</Link>
                </Button>
                {trust && (
                    <div
                        className={cn(
                            "flex flex-col items-center w-full",
                            spacing.stackSm,
                        )}
                    >
                        <Text
                            as="p"
                            className={cn(
                                typography.variants.meta.label,
                                "text-muted-foreground text-center",
                            )}
                        >
                            {trust.label}
                        </Text>
                        <div className={cn("flex flex-wrap justify-center items-center", "gap-6 md:gap-8 opacity-50 md:opacity-60")}> {/* lint:allowed - logo strip rhythm */}
                            {trust.logos.map((logo) => (
                                <div
                                    key={logo.name}
                                    className="relative h-7 md:h-8 w-auto flex items-center justify-center grayscale" /* lint:allowed - logo size */
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        height={32}
                                        width={128}
                                        className="h-full w-auto max-w-20 md:max-w-28 object-contain brightness-0 invert" /* lint:allowed - logo image */
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </HomeModule>
    );
}
