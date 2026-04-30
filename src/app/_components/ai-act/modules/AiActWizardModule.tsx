"use client";

import { HomeModule } from "@/app/_components/home/HomeModule";
import { AiActWizard } from "@/app/_components/ai-act/AiActWizard";

export function AiActWizardModule() {
    return (
        <HomeModule
            id="ai-act-wizard"
            width="full"
            tone="light"
            pad="none"
            padTop="xs"
            padBottom="s"
            gap="none"
            containsContent
        >
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-5xl">
                    <AiActWizard />
                </div>
            </div>
        </HomeModule>
    );
}
