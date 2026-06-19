import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-wider transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          {
            "bg-gold-400 hover:bg-gold-300 text-tavern-bg shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40": variant === "primary",
            "bg-tavern-surface-alt border border-tavern-border-glow text-parchment-300 hover:bg-tavern-border hover:border-gold-400/50": variant === "secondary",
            "text-parchment-400 hover:text-gold-400 bg-transparent": variant === "ghost",
          },
          {
            "text-xs px-3 py-1.5": size === "sm",
            "text-sm px-5 py-2.5": size === "md",
            "text-base px-7 py-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export { Button };
