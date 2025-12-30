import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Heading, Text } from "@/design-system/components/Typography";
import { Surface } from "@/design-system/components/Surfaces";
import { SectionHeader } from "./SectionHeader";
import { typography } from "@/design-system/tokens/typography";

export type Role = "FOUNDER" | "PARTNER" | "PRINCIPAL" | "ASSOCIATE" | "ADVISOR" | string;

export interface TeamMember {
    name: string;
    role: string;
    imageSrc: string;
    email: string;
    linkedinUrl: string;
}

interface TeamGridSectionProps {
    eyebrow: string;
    title?: string;
    description?: string;
    members: readonly TeamMember[];
    className?: string;
}

export function TeamGridSection({
    eyebrow,
    title,
    description,
    members,
    className
}: TeamGridSectionProps) {
    return (
        <div className={cn("flex flex-col gap-10 md:gap-12 lg:gap-16", className)}>
            <SectionHeader
                variant="split"
                ratio="asymmetric"
                divider={true}
                eyebrow={eyebrow}
                title={title}
                description={description}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {members.map((member, idx) => (
                    <Surface
                        key={idx}
                        variant="card"
                        className="flex flex-col overflow-hidden h-full group"
                    >
                        {/* Image Container - Fixed Aspect 4:5 */}
                        <div className="relative aspect-[4/5] w-full bg-muted">
                            <Image
                                src={member.imageSrc}
                                alt={member.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                            <div className="flex flex-col gap-1">
                                <Heading level={3} size="card">
                                    {member.name}
                                </Heading>
                                <Text className={cn(typography.variants.body.sm, "text-muted-foreground")}>
                                    {member.role}
                                </Text>
                            </div>

                            <div className={cn("mt-auto flex flex-col gap-2 pt-2 border-t border-border/40", typography.variants.body.sm) /* lint:allowed - internal card geometry */}>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    {member.email}
                                </a>
                                <a
                                    href={member.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(typography.variants.body.sm, "hover:text-primary transition-colors")}
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </Surface>
                ))}
            </div>
        </div>
    );
}
