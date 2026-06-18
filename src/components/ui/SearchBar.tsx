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
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C4A2A]" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#D4C4A0] placeholder-[#5C4A2A] focus:outline-none focus:border-[#FFC520]/50 focus:ring-1 focus:ring-[#FFC520]/20 transition-colors"
      />
    </div>
  );
}
