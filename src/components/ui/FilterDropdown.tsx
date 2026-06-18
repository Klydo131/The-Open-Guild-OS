"use client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FilterDropdown({ label, options, value, onChange, className }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const display = value || label;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "px-3 py-1.5 rounded-lg bg-[#1A1510] border text-xs transition-colors flex items-center gap-1",
          value
            ? "border-[#FFC520]/40 text-[#FFC520]"
            : "border-[#3D3425] text-[#A08B60] hover:border-[#5C4A2A]"
        )}
      >
        {display} <span className="text-[#5C4A2A] ml-1">▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 min-w-[160px] bg-[#1A1510] border border-[#3D3425] rounded-lg shadow-xl overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { onChange(option === label ? "" : option); setOpen(false); }}
              className={cn(
                "w-full text-left px-3 py-2 text-xs transition-colors",
                (option === label && !value) || option === value
                  ? "bg-[#241E15] text-[#FFC520]"
                  : "text-[#A08B60] hover:bg-[#241E15] hover:text-[#E8D9C0]"
              )}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
