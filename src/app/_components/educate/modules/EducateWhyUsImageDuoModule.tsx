import Image from "next/image";
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
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.6fr] gap-4 md:gap-8 items-stretch">
                    <div
                        className="relative w-full rounded-surface overflow-hidden"
                        style={{ aspectRatio: "4 / 3", minHeight: 240 }}
                    >
                        <Image
                            src={educateContent.whyUs.images.left}
                            alt={educateContent.whyUs.images.altLeft}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            priority
                        />
                    </div>

                    <div
                        className="relative w-full rounded-surface overflow-hidden"
                        style={{ aspectRatio: "4 / 3", minHeight: 240 }}
                    >
                        <Image
                            src={educateContent.whyUs.images.right}
                            alt={educateContent.whyUs.images.altRight}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 60vw, 100vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}