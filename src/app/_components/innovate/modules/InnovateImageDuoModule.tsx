
import Image from "next/image";
import { HomeModule } from "../../home/HomeModule";

const LEFT_IMAGE = "/images/innovate/innovate-ideation-wireframing-01.png";
const RIGHT_IMAGE = "/images/innovate/innovate-opportunity-mapping-01.png";

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
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.6fr] gap-4 md:gap-8 items-stretch">
                    <div
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{ aspectRatio: "4 / 3", minHeight: 240 }}
                    >
                        <Image
                            src={LEFT_IMAGE}
                            alt="Innovate ideation wireframing"
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            priority={false}
                        />
                    </div>

                    <div
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{ aspectRatio: "4 / 3", minHeight: 240 }}
                    >
                        <Image
                            src={RIGHT_IMAGE}
                            alt="Innovate opportunity mapping"
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 60vw, 100vw"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
        </HomeModule>
    );
}
