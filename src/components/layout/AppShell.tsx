"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AppShellProps {
    children: React.ReactNode;
    className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
    return (
        <div className="w-full flex justify-center bg-background">
            <div
                className={cn(
                    "w-full max-w-6xl px-4 md:px-8 py-12 flex flex-col gap-8 flex-1",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}
