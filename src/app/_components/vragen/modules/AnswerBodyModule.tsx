import { HomeModule } from "@/app/_components/home/HomeModule";
import { ProseSection } from "@/components/sections/ProseSection";
import type { AnswerPage } from "@/app/_content/vragen";

interface AnswerBodyModuleProps {
    page: AnswerPage;
}

export function AnswerBodyModule({ page }: AnswerBodyModuleProps) {
    return (
        <HomeModule
            id="answer-body"
            width="full"
            tone="light"
            pad="m"
            padTop="none"
            padBottom="m"
            gap="none"
            containsContent
        >
            {/* Centering uses flex, not mx-auto: globals.css nullifies margins. */}
            <div className="flex justify-center">
                <ProseSection blocks={page.blocks} />
            </div>
        </HomeModule>
    );
}
