import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "surface" | "featured";
  hover?: boolean;
}

export function Card({ className, variant = "dark", hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-200",
        {
          "bg-tavern-surface border-tavern-border": variant === "dark",
          "bg-tavern-surface-alt border-tavern-border": variant === "surface",
          "bg-gradient-to-b from-tavern-surface-alt to-tavern-surface border-tavern-border-glow": variant === "featured",
        },
        hover && "hover:border-tavern-border-glow hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
