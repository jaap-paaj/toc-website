
import Image from "next/image";
import { cn } from "@/lib/utils";


export interface ImageDuoItem {
    src: string;
    alt: string;
}

export interface ImageDuoSectionProps {
    items: [ImageDuoItem, ImageDuoItem];
    /**
     * Which side should be dominant (wide).
     * - "left": Left image is wide (60%), Right is narrow/vertical (40%).
     * - "right": Right image is wide (60%), Left is narrow/vertical (40%).
     * Default: "right" (matches Educate source of truth)
     */
    dominant?: "left" | "right";
    className?: string;
}

export function ImageDuoSection({
    items,
    dominant = "right",
    className
}: ImageDuoSectionProps) {
    const isRightDominant = dominant === "right";
    const [leftItem, rightItem] = items;

    // Grid Columns (Source: EducateWhyUsImageDuoModule)
    // right dominant: 0.9fr (left) 1.6fr (right)
    // left dominant: 1.6fr (left) 0.9fr (right) -- mirrored
    const gridCols = isRightDominant
        ? "md:grid-cols-[0.9fr_1.6fr]"
        : "md:grid-cols-[1.6fr_0.9fr]";

    // Sizes (Source: EducateWhyUsImageDuoModule)
    // right dominant: left 40vw, right 60vw
    // left dominant: left 60vw, right 40vw
    const leftSizes = isRightDominant ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 60vw, 100vw";
    const rightSizes = isRightDominant ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 40vw, 100vw";

    return (
        <div className={cn("container mx-auto", className)}>
            <div className={cn("grid grid-cols-1 gap-4 md:gap-8 items-stretch", gridCols)}>
                {/* Left Image */}
                <div
                    className="relative w-full rounded-surface overflow-hidden"
                    style={{ aspectRatio: "4 / 3", minHeight: 240 }}
                >
                    <Image
                        src={leftItem.src}
                        alt={leftItem.alt}
                        fill
                        className="object-cover"
                        sizes={leftSizes}
                        priority={false}
                    />
                </div>

                {/* Right Image */}
                <div
                    className="relative w-full rounded-surface overflow-hidden"
                    style={{ aspectRatio: "4 / 3", minHeight: 240 }} /* lint:allowed */
                >
                    <Image
                        src={rightItem.src}
                        alt={rightItem.alt}
                        fill
                        className="object-cover"
                        sizes={rightSizes}
                        priority={false}
                    />
                </div>
            </div>
        </div>
    );
}
