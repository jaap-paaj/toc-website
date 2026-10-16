"use client";

import { HomeModule } from "../../home/HomeModule";
import { ImageDuoSection } from "@/components/sections/ImageDuoSection";
import { automateContent } from "@/app/_content/automate";
import { useLocale } from "@/lib/i18n/useLocale";

export function AutomateImageDuoModule() {
    const lang = useLocale();

    return (
        <HomeModule
            id="automate-image-duo"
            width="full"
            tone="split-light-dark"
            pad="m"
            padTop="none"
            gap="none"
        >
            <ImageDuoSection
                items={[
                    { src: automateContent[lang].imageDuo.left, alt: automateContent[lang].imageDuo.altLeft },
                    { src: automateContent[lang].imageDuo.right, alt: automateContent[lang].imageDuo.altRight }
                ]}
                dominant="right"
            />
        </HomeModule>
    );
}
