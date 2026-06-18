import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  showValues?: boolean;
  size?: "sm" | "md";
}

export function ProgressBar({ value, max, label, showValues = true, size = "md" }: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="w-full">
      {(label || showValues) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-xs text-[#A08B60] font-medium">{label}</span>}
          {showValues && <span className="text-xs text-[#BFA97A]">{value.toLocaleString()} / {max.toLocaleString()} XP</span>}
        </div>
      )}
      <div className={cn("w-full bg-[#241E15] rounded-full overflow-hidden", size === "sm" ? "h-1.5" : "h-2.5")}>
        <div
          className="h-full bg-gradient-to-r from-[#E5A800] to-[#FFC520] rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
