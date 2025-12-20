import React from 'react';
import { cn } from '@/lib/utils';

interface FormGridProps {
    children: React.ReactNode;
    className?: string;
}

export function FormGrid({ children, className }: FormGridProps) {
    return (
        <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
            {children}
        </div>
    );
}
