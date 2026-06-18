"use client";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchBar({ placeholder = "Search for quests, skills, or guilds...", className, value, onChange }: SearchBarProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tavern-border-glow" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-tavern-surface border border-tavern-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-parchment-300 placeholder-tavern-border-glow focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-colors"
      />
    </div>
  );
}
