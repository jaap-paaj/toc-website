"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface HeaderLogoProps {
    className?: string;
}

export function HeaderLogo({ className }: HeaderLogoProps) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    const commonClasses = cn("flex items-center gap-2 z-50 hover:opacity-80 transition-opacity", className);

    const LogoImage = (
        <Image
            src="/brand/toc/TOC_Logo_black.svg"
            alt="The Only Constant"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
        />
    );

    if (isHome) {
        return (
            <div className={commonClasses} aria-label="The Only Constant">
                {LogoImage}
            </div>
        );
    }

    return (
        <Link
            href="/"
            className={commonClasses}
            aria-label="Back to homepage"
        >
            {LogoImage}
        </Link>
    );
}
