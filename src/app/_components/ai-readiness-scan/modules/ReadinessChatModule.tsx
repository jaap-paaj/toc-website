"use client";

import { ArrowLeft } from "lucide-react";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { HomeModule } from "@/app/_components/home/HomeModule";
import { Surface } from "@/design-system/components/Surfaces";
import { Heading } from "@/design-system/components/Typography";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design-system/tokens/spacing";
import { cn } from "@/lib/utils";
import { ToolChat } from "@/components/tools/ToolChat";
import {
    readinessScanContent,
    READINESS_ANALYTICS,
    READINESS_ENDPOINTS,
    READINESS_SCAN_PATH,
} from "@/app/_content/ai-readiness-scan";
import { useLocale } from "@/lib/i18n/useLocale";

export function ReadinessChatModule() {
    const lang = useLocale();
    const content = readinessScanContent[lang];

    return (
        <HomeModule
            id="readiness-chat"
            width="full"
            tone="light"
            pad="none"
            padTop="xs"
            padBottom="s"
            gap="none"
            containsContent
        >
            <div className="w-full flex flex-col items-center">
                <div className={cn("w-full max-w-3xl flex flex-col", spacing.stackSm)}>
                    {/* Header: [back · title] left-grouped · logo right */}
                    <div className="flex items-center justify-between w-full">
                        <div className={cn("flex items-center gap-3 md:gap-4")}> {/* lint:allowed - back+title group */}
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                                className="rounded-full bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                                aria-label={content.chat.back}
                            >
                                <Link href={READINESS_SCAN_PATH}>
                                    <ArrowLeft />
                                </Link>
                            </Button>
                            <Heading level={2} size="card" className="text-foreground">
                                {content.hero.eyebrow}
                            </Heading>
                        </div>
                        <img
                            src="/images/brand/toc/TOC_Logo_black.svg"
                            alt="The Only Constant"
                            className="h-7 w-auto" /* lint:allowed - logo size */
                        />
                    </div>

                    {/* Chat container */}
                    <Surface variant="card" className="overflow-hidden flex flex-col h-[calc(100vh-200px)] min-h-[500px]"> {/* lint:allowed - chat container height */}
                        <ToolChat
                            endpoints={READINESS_ENDPOINTS}
                            analytics={READINESS_ANALYTICS}
                            content={content.chat}
                        />
                    </Surface>
                </div>
            </div>
        </HomeModule>
    );
}
