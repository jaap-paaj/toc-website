"use client";

import { ImageDuoSection } from "@/components/sections/ImageDuoSection";
import { HomeModule } from "../../home/HomeModule";
import { educateContent } from "@/app/_content/educate";
import { useLocale } from "@/lib/i18n/useLocale";

export function EducateWhyUsImageDuoModule() {
    const lang = useLocale();

    return (
        <HomeModule
            id="educate-image-duo"
            width="full"
            tone="split-light-dark"
            pad="m"
            padTop="none"
            gap="s"
        >
            <ImageDuoSection
                items={[
                    { src: educateContent[lang].whyUs.images.left, alt: educateContent[lang].whyUs.images.altLeft },
                    { src: educateContent[lang].whyUs.images.right, alt: educateContent[lang].whyUs.images.altRight }
                ]}
                dominant="right"
            />
        </HomeModule>
    );
}