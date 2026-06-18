"use client";
import { Search, Plus, Mail, ChevronDown, Coins } from "lucide-react";

export function Navbar() {
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
      <div className="hidden md:flex flex-1 max-w-md ml-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tavern-border-glow" />
          <input
            type="text"
            placeholder="Search for quests, skills, or guilds..."
            className="w-full bg-tavern-surface border border-tavern-border rounded-lg pl-10 pr-4 py-2 text-sm text-parchment-300 placeholder-tavern-border-glow focus:outline-none focus:border-gold-400/50 transition-colors"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-tavern-surface border border-tavern-border rounded-lg px-3 py-1.5">
          <Coins className="w-4 h-4 text-gold-500" />
          <span className="text-sm font-bold text-gold-400">2,450</span>
          <Plus className="w-3 h-3 text-tavern-border-glow" />
        </div>

        <div className="hidden sm:flex items-center gap-1.5 bg-tavern-surface border border-tavern-border rounded-lg px-3 py-1.5">
          <span className="text-sm">💎</span>
          <span className="text-sm font-bold text-gem-400">260</span>
          <Plus className="w-3 h-3 text-tavern-border-glow" />
        </div>

        <button className="relative p-2 text-parchment-500 hover:text-parchment-300 transition-colors">
          <Mail className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">2</span>
        </button>

        <button className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-tavern-border to-tavern-surface-alt flex items-center justify-center ring-2 ring-amber-400 text-xs font-bold text-parchment-300">
            GM
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-medium text-parchment-200">Guildmaster</div>
            <div className="text-[10px] text-tavern-border-glow">Level 12</div>
          </div>
          <ChevronDown className="w-3 h-3 text-tavern-border-glow hidden sm:block" />
        </button>
      </div>
    </header>
  );
}
