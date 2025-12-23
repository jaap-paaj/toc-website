import Image from "next/image";
import { cn } from "@/lib/utils";
import { Surface } from "@/design-system/components/Surfaces";
import { SectionHeader } from "./SectionHeader";

import { spacing } from "@/design-system/tokens/spacing";

type ClientLogo = {
    name: string;
    src: string;
};

type ClientsSectionProps = {
    headingLabel?: string;
    items: ClientLogo[];
    className?: string;
    spacingPreset?: "default" | "tight";
};

export function ClientsSection({
    headingLabel = "Clients",
    items,
    className,
}: ClientsSectionProps) {
    return (
        <div className={cn("container mx-auto", className)}>
            <div className={cn("flex flex-col", spacing.component.sectionHeader)}>
                <SectionHeader variant="stacked" eyebrow={headingLabel} />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                    {items.map((item) => (
                        <Surface
                            key={item.name}
                            variant="media"
                            className={cn(
                                "flex items-center justify-center",
                                "h-[120px] md:h-[140px]",
                                "p-6 md:p-8",
                                "transition-colors",
                                "group"
                            )}
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={220}
                                height={80}
                                className={cn(
                                    "max-h-[48px] md:max-h-[56px] w-auto",
                                    "opacity-90",
                                    "transition-opacity duration-300",
                                    "group-hover:opacity-100"
                                )}
                                style={{ objectFit: "contain" }}
                                priority={false}
                            />
                        </Surface>
                    ))}
                </div>
            </div>
        </div>
    );
}