import { cn } from "@/lib/utils";
import React from "react";
import { HomeModule } from "../../home/HomeModule";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading, Text } from "@/design-system/components/Typography";
import { spacing } from "@/design-system/tokens/spacing";
import { typography } from "@/design-system/tokens/typography";

const AI_TRAINING_ITEMS = [
    {
        title: "AI INTRODUCTION",
        description: "Get a hands-on introduction to generative AI, tailored to your role and industry. Learn how it can transform your work, and build essential skills to innovate, automate, and create. No experience needed!",
    },
    {
        title: "CUSTOM GPTs",
        description: "Advanced, practical session designed to deepen your expertise with ChatGPT by exploring how to build, customize, and effectively apply Custom GPTs within your projects.",
    },
    {
        title: "AI FOR VISUAL CONTENT CREATION",
        description: "Learn to create stunning visuals with Midjourney & Runway. Fast-track your workflow, refine your style, and innovate with AI. Hands-on and hassle-free.",
    },
    {
        title: "EXECUTIVE AI STRATEGY",
        description: "Discover AI’s potential for innovation and growth. This training provides executives with the strategic insights to drive smarter decisions and lead change.",
    }
];

const INNOVATION_TRAINING_ITEMS = [
    {
        title: "INNOVATION BY DESIGN",
        description: "Master creative problem-solving with a human-centered approach. This training helps you understand users, reframe challenges, and design solutions that create real impact. You’ll learn practical methods you can apply immediately to any project or team.",
    },
    {
        title: "EXPERIENCE MAPPING",
        description: "Learn how to create customer journey maps and service blueprints that reveal how people interact with your product or service. You’ll uncover pain points, spot opportunities and turn insights into practical improvements.",
    }
];

// Local implementation of EditorialCardGridSection without the wrapper padding leaks
function TrainingGrid({
    categoryLabel,
    intro,
    items
}: {
    categoryLabel: string,
    intro: string,
    items: { title: string, description: string | React.ReactNode }[]
}) {
    return (
        <div className="flex flex-col gap-6 md:gap-8">
            {/* Divider */}
            <div className="border-t border-border/80" />

            {/* Header + Grid */}
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader
                    variant="split"
                    divider={false}
                    eyebrow={categoryLabel}
                    description={intro}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 [&>*]:h-auto [&>*]:min-h-0 items-start">
                    {items.map((item, idx) => (
                        <Surface
                            key={idx}
                            variant="catalog"
                            className="flex flex-col gap-3 p-6 md:p-8"
                        >
                            <Heading level={3} size="card" className="text-primary-foreground">
                                {item.title}
                            </Heading>
                            <Text
                                as={typeof item.description === 'string' ? "p" : "div"}
                                className={cn("text-primary-foreground/60 max-w-prose", typography.variants.body.sm)}
                            >
                                {item.description}
                            </Text>
                        </Surface>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function EducateTrainingCatalogModule() {
    return (
        <HomeModule id="training-catalog" width="full" tone="light" pad="m" gap="s">
            <div className="container mx-auto flex flex-col gap-16 md:gap-24">
                <TrainingGrid
                    categoryLabel="AI TRAINING"
                    intro="Hands-on programs that help you use AI to work smarter and explore new possibilities."
                    items={AI_TRAINING_ITEMS}
                />
                <TrainingGrid
                    categoryLabel="INNOVATION TRAINING"
                    intro="Human-centered programs that help you explore opportunities and design better products and services."
                    items={INNOVATION_TRAINING_ITEMS}
                />
            </div>
        </HomeModule>
    );
}
