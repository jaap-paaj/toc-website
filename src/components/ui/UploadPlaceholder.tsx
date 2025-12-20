import React, { useCallback, useState } from "react";
import { Upload, ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { spacing } from '@/design-system/tokens/spacing';

export interface UploadPlaceholderProps {
    file: File | null;
    onFileSelect: (file: File) => void;
    onClear: () => void;
    accept?: string;
    maxSizeMB?: number;
    className?: string;
    label?: string; // Optional label for the empty state
}

export function UploadPlaceholder({
    file,
    onFileSelect,
    onClear,
    accept = "image/*",
    maxSizeMB = 5,
    className,
    label = "Click to upload",
}: UploadPlaceholderProps) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile && droppedFile.type.match(accept)) {
                onFileSelect(droppedFile);
            }
        },
        [onFileSelect, accept]
    );

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.[0]) {
                onFileSelect(e.target.files[0]);
            }
        },
        [onFileSelect]
    );

    return (
        <div
            className={cn(
                "relative rounded-surface p-8 text-center transition-all cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-border min-h-40",
                isDragging && "bg-primary/10 ring-2 ring-primary border-primary",
                file
                    ? "bg-primary/5 ring-1 ring-primary border-primary"
                    : "hover:bg-muted bg-muted/50",
                className
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                type="file"
                accept={accept}
                onChange={handleInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            {file ? (
                <div className="flex items-center justify-center gap-3">
                    <ImageIcon className="w-6 h-6 text-primary" />
                    <span className="text-sm font-medium text-foreground truncate max-w-[200px]">
                        {file.name}
                    </span>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Remove file"
                        onClick={(e) => {
                            e.stopPropagation();
                            onClear();
                        }}
                        className="h-6 w-6 z-10 text-muted-foreground hover:text-foreground"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>
            ) : (
                <div className={cn(spacing.stackXs, "items-center pointer-events-none")}>
                    <Upload className="w-8 h-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">{label}</span> or
                        drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground uppercase">
                        {accept === "image/*" ? "PNG, JPG" : accept} (MAX. {maxSizeMB}MB)
                    </p>
                </div>
            )}
        </div>
    );
}
