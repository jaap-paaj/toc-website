"use client";

import { HomeModule } from "../../home/HomeModule";
import { ImageDuoSection } from "@/components/sections/ImageDuoSection";
import { innovateContent } from "@/app/_content/innovate";
import { useLocale } from "@/lib/i18n/useLocale";

export function InnovateImageDuoModule() {
    const lang = useLocale();

    return (
        <HomeModule
            id="innovate-image-duo"
            width="full"
            tone="split-light-dark"
            pad="m"
            padTop="none"
            gap="none"
        >
            <ImageDuoSection
                items={[
                    { src: innovateContent[lang].imageDuo.left, alt: innovateContent[lang].imageDuo.altLeft },
                    { src: innovateContent[lang].imageDuo.right, alt: innovateContent[lang].imageDuo.altRight }
                ]}
                dominant="left"
            />
        </HomeModule>
    );
}
