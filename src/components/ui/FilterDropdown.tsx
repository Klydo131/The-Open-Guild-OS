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
          "px-3 py-1.5 rounded-lg bg-tavern-surface border text-xs transition-colors flex items-center gap-1",
          value
            ? "border-gold-400/40 text-gold-400"
            : "border-tavern-border text-parchment-500 hover:border-tavern-border-glow"
        )}
      >
        {display} <span className="text-tavern-border-glow ml-1">▾</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 z-50 min-w-[160px] bg-tavern-surface border border-tavern-border rounded-lg shadow-xl overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { onChange(option === label ? "" : option); setOpen(false); }}
              className={cn(
                "w-full text-left px-3 py-2 text-xs transition-colors",
                (option === label && !value) || option === value
                  ? "bg-tavern-surface-alt text-gold-400"
                  : "text-parchment-500 hover:bg-tavern-surface-alt hover:text-parchment-200"
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
