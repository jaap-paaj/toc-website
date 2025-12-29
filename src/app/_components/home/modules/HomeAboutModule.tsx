// src/app/_components/home/modules/HomeAboutModule.tsx
import Image from "next/image";

import { cn } from "@/lib/utils";
import { HomeModule } from "../HomeModule";

import { Text } from "@/design-system/components/Typography";
import { EditorialStatementSection } from "@/components/sections/EditorialStatementSection";
import { spacing } from "@/design-system/tokens/spacing";
import { Button } from "@/components/ui/Button";

import { homeContent } from "../home.content";

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
                    <EditorialStatementSection
                        eyebrow={homeContent.about.eyebrow}
                        lines={homeContent.about.statementLines}
                    />

                    {/* Content Grid */}
                    {/* NOTE: module-owned layout (unique to Home). If reused elsewhere, extract to a Section (Split/Editorial pattern). */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
                        {/* Left: copy + CTA */}
                        <div className={cn(spacing.stackLg, "max-w-xl")}>
                            {homeContent.about.description.map((desc: string, i: number) => (
                                <Text key={i} size="md">
                                    {desc}
                                </Text>
                            ))}

                            <div className="pt-2"> {/* lint:allowed */}
                                <Button
                                    size="xl"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    {homeContent.about.cta.label}
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