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
          "bg-[#1A1510] border-[#3D3425]": variant === "dark",
          "bg-[#241E15] border-[#3D3425]": variant === "surface",
          "bg-gradient-to-b from-[#241E15] to-[#1A1510] border-[#5C4A2A]": variant === "featured",
        },
        hover && "hover:border-[#5C4A2A] hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
