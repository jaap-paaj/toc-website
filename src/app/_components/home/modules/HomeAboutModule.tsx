import { HomeModule } from "../HomeModule";

import { cn } from "@/lib/utils";
import { Heading, Text as Paragraph } from "@/design-system/components/Typography";
import { typography } from "@/design-system/tokens/typography";
import { spacing } from "@/design-system/tokens/spacing";

import { homeContent } from "../home.content";

export function HomeAboutModule() {
    return (
        <HomeModule id="about" width="full" pad="m" padTop="none" gap="s" containsContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Column: Narrative */}
                <div className="flex flex-col gap-6 md:gap-8">
                    {/* Header Group */}
                    <div className="flex flex-col gap-4">
                        <Paragraph className={typography.variants.meta.eyebrow}>
                            {homeContent.about.eyebrow}
                        </Paragraph>

                        <div className="flex flex-col">
                            {homeContent.about.statementLines.map((line, index) => (
                                <Heading
                                    key={index}
                                    level={2}
                                    className={cn(
                                        typography.variants.display.editorialStatement,
                                        index === 2 ? "text-primary" : "text-foreground"
                                    )}
                                >
                                    {line}
                                </Heading>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-4 opacity-80 max-w-prose">
                        {homeContent.about.description.map((paragraph, i) => (
                            <Paragraph key={i} className={typography.variants.body.md}>
                                {paragraph}
                            </Paragraph>
                        ))}
                    </div>
                </div>

                {/* Right Column: Visual */}
                {homeContent.about.imageSrc && (
                    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-surface overflow-hidden bg-muted">
                        <img
                            src={homeContent.about.imageSrc}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                )}
            </div>
        </HomeModule >
    );
}