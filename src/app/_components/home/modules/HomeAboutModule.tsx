// src/app/_components/home/modules/HomeAboutModule.tsx
import Image from "next/image";

import { cn } from "@/lib/utils";
import { HomeModule } from "../HomeModule";

import { Text } from "@/design-system/components/Typography";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { spacing } from "@/design-system/tokens/spacing";
import { Button } from "@/components/ui/Button";

export function HomeAboutModule() {
    return (
        <HomeModule id="about" width="full" pad="m" padTop="none" gap="s">
            <div
                className={cn(
                    "container mx-auto"
                )}
            >
                <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                    {/* Section header */}
                    <SectionHeader
                        variant="stacked"
                        eyebrow="About Us"
                        title={
                            <h2 className="text-display-section">
                                DIGITAL INNOVATION
                                <br />
                                THAT DELIVERS
                                <br />
                                <span className="text-primary">PROVEN IMPACT</span>
                            </h2>
                        }
                    />

                    {/* 50/50 content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
                        {/* Left: copy + CTA */}
                        <div className={cn(spacing.stackLg, "max-w-xl")}>
                            <Text size="lg" className="leading-relaxed">
                                We’re a strategy and design partner for teams that need progress
                                without the noise. We combine business goals, human needs and
                                emerging tech to create practical concepts, prototypes and
                                automations built for real-world use.
                            </Text>

                            <Text size="lg" className="leading-relaxed">
                                We focus on outcomes, not hype. That means clearer decisions,
                                less manual work, and early proof of what’s worth building — so
                                you can move faster without guessing.
                            </Text>

                            <div className="pt-2">
                                <Button
                                    size="xl"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                                >
                                    MORE ABOUT US
                                </Button>
                            </div>
                        </div>

                        {/* Right: image */}
                        <div className="w-full">
                            <div className="rounded-surface border border-border shadow-surface overflow-hidden bg-card">
                                {/* Put your image here (recommended path: /public/images/about/about.png) */}
                                <div className="relative w-full aspect-[16/10]">
                                    <Image
                                        src="/images/about/about.png"
                                        alt="Workshop session with a presentation on AI agents"
                                        fill
                                        className="object-cover"
                                        priority={false}
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}