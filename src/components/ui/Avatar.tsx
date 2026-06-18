import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  level?: number;
  className?: string;
}

export function Avatar({ initials, size = "md", level, className }: AvatarProps) {
  const ringColor = level
    ? level >= 15 ? "ring-amber-400" : level >= 10 ? "ring-purple-400" : level >= 5 ? "ring-blue-400" : "ring-zinc-500"
    : "ring-[#3D3425]";

  return (
    <div className={cn(
      "rounded-full bg-gradient-to-br from-[#3D3425] to-[#241E15] flex items-center justify-center font-heading font-bold text-[#D4C4A0] ring-2",
      ringColor,
      {
        "w-8 h-8 text-xs": size === "sm",
        "w-10 h-10 text-sm": size === "md",
        "w-14 h-14 text-lg": size === "lg",
      },
      className
    )}>
      {initials}
    </div>
  );
}
