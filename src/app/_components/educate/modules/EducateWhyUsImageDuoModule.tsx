import Image from "next/image";
import { HomeModule } from "../../home/HomeModule";

// Left: Audience (narrow)
// Right: Presentation (wide)
const LEFT_IMAGE = "/images/educate/why-us-ai-training-presentation.png";
const RIGHT_IMAGE = "/images/educate/why-us-workshop-audience.png";

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
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{ aspectRatio: "4 / 3", minHeight: 240 }}
                    >
                        <Image
                            src={LEFT_IMAGE}
                            alt="Workshop audience"
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 40vw, 100vw"
                            priority
                        />
                    </div>

                    <div
                        className="relative w-full rounded-2xl overflow-hidden"
                        style={{ aspectRatio: "4 / 3", minHeight: 240 }}
                    >
                        <Image
                            src={RIGHT_IMAGE}
                            alt="AI Training presentation"
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