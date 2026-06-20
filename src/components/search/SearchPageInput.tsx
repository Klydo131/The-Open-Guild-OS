"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function SearchPageInput({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tavern-border-glow" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
        placeholder="Search for quests, skills, guilds, or artisans..."
        className="w-full bg-tavern-surface border border-tavern-border rounded-lg pl-10 pr-4 py-2.5 text-sm text-parchment-300 placeholder-tavern-border-glow focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-colors"
      />
    </form>
  );
}
