

import { HomeModule } from "../../home/HomeModule";
import { ImageDuoSection } from "@/components/sections/ImageDuoSection";
import { innovateContent } from "../innovate.content";

export function InnovateImageDuoModule() {
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
                    { src: innovateContent.imageDuo.left, alt: innovateContent.imageDuo.altLeft },
                    { src: innovateContent.imageDuo.right, alt: innovateContent.imageDuo.altRight }
                ]}
                dominant="left"
            />
        </HomeModule>
    );
}
