"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Plus, Coins } from "lucide-react";
import { NotificationsDropdown } from "@/components/navbar/NotificationsDropdown";
import { ProfileDropdown } from "@/components/navbar/ProfileDropdown";

export function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      searchRef.current?.blur();
    }
  }

  return (
    <header className="sticky top-0 z-50 h-14 bg-tavern-bg/95 backdrop-blur-sm border-b border-tavern-border flex items-center justify-between px-4 lg:px-6">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
          <span className="text-tavern-bg font-bold text-xs">G</span>
        </div>
        <span className="font-heading font-bold text-parchment-200 text-sm">GUILD OS</span>
      </div>

      {/* Search Bar — Desktop */}
      <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md ml-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tavern-border-glow" />
          <input
            ref={searchRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for quests, skills, or guilds... (⌘K)"
            className="w-full bg-tavern-surface border border-tavern-border rounded-lg pl-10 pr-12 py-2 text-sm text-parchment-300 placeholder-tavern-border-glow focus:outline-none focus:border-gold-400/50 transition-colors"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-tavern-surface-alt border border-tavern-border text-[10px] text-tavern-border-glow font-mono">
            ⌘K
          </kbd>
        </div>
      </form>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <Link
          href="/search"
          className="md:hidden p-2 text-parchment-500 hover:text-parchment-300 transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </Link>

        <Link href="/treasury" className="flex items-center gap-1.5 bg-tavern-surface border border-tavern-border rounded-lg px-3 py-1.5 hover:border-gold-400/30 transition-colors group">
          <Coins className="w-4 h-4 text-gold-500" />
          <span className="text-sm font-bold text-gold-400">2,450</span>
          <Plus className="w-3 h-3 text-tavern-border-glow group-hover:text-gold-400 transition-colors" />
        </Link>

        <Link href="/treasury" className="hidden sm:flex items-center gap-1.5 bg-tavern-surface border border-tavern-border rounded-lg px-3 py-1.5 hover:border-gem-400/30 transition-colors group">
          <span className="text-sm">💎</span>
          <span className="text-sm font-bold text-gem-400">260</span>
          <Plus className="w-3 h-3 text-tavern-border-glow group-hover:text-gem-400 transition-colors" />
        </Link>

        <NotificationsDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
}
