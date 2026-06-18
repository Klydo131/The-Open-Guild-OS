import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "skill";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border",
        {
          "bg-tavern-surface-alt border-tavern-border text-parchment-400": variant === "default",
          "bg-gold-400/10 border-gold-400/30 text-gold-400": variant === "gold",
          "bg-tavern-surface border-tavern-border text-parchment-500": variant === "skill",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
