import { cn } from "@/lib/utils";

interface HeaderMenuToggleProps {
    isOpen: boolean;
    onToggle: () => void;
    className?: string;
}

export function HeaderMenuToggle({ isOpen, onToggle, className }: HeaderMenuToggleProps) {
    return (
        <button
            onClick={onToggle}
            className={cn(
                "tone-dark relative flex flex-col items-center justify-center gap-1.5 h-8 w-8 rounded-full bg-background transition-transform hover:scale-105 active:scale-95 cursor-pointer",
                className
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
        >
            <span
                className={cn(
                    "h-0.5 w-[18px] bg-foreground rounded-full transition-all duration-300",
                    isOpen && "rotate-45 translate-y-1"
                )}
                aria-hidden="true"
            />
            <span
                className={cn(
                    "h-0.5 w-[18px] bg-foreground rounded-full transition-all duration-300",
                    isOpen && "-rotate-45 -translate-y-1"
                )}
                aria-hidden="true"
            />
        </button>
    );
}
