import { ImageDuoSection } from "@/components/sections/ImageDuoSection";
import { HomeModule } from "../../home/HomeModule";
import { educateContent } from "../educate.content";

export function EducateWhyUsImageDuoModule() {
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
                    { src: educateContent.whyUs.images.left, alt: educateContent.whyUs.images.altLeft },
                    { src: educateContent.whyUs.images.right, alt: educateContent.whyUs.images.altRight }
                ]}
                dominant="right"
            />
        </HomeModule>
    );
}