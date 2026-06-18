"use client";
import { Search, Plus, Mail, ChevronDown } from "lucide-react";
import { Coins } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-14 bg-[#0D0A06]/95 backdrop-blur-sm border-b border-[#3D3425] flex items-center justify-between px-4 lg:px-6">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFC520] to-[#E5A800] flex items-center justify-center">
          <span className="text-[#0D0A06] font-bold text-xs">G</span>
        </div>
        <span className="font-heading font-bold text-[#E8D9C0] text-sm">GUILD OS</span>
      </div>

      {/* Search Bar - Desktop */}
      <div className="hidden md:flex flex-1 max-w-md ml-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C4A2A]" />
          <input
            type="text"
            placeholder="Search for quests, skills, or guilds..."
            className="w-full bg-[#1A1510] border border-[#3D3425] rounded-lg pl-10 pr-4 py-2 text-sm text-[#D4C4A0] placeholder-[#5C4A2A] focus:outline-none focus:border-[#FFC520]/50 transition-colors"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        {/* Gold Balance */}
        <div className="flex items-center gap-1.5 bg-[#1A1510] border border-[#3D3425] rounded-lg px-3 py-1.5">
          <Coins className="w-4 h-4 text-[#E5A800]" />
          <span className="text-sm font-bold text-[#FFC520]">2,450</span>
          <Plus className="w-3 h-3 text-[#5C4A2A]" />
        </div>

        {/* Gems */}
        <div className="hidden sm:flex items-center gap-1.5 bg-[#1A1510] border border-[#3D3425] rounded-lg px-3 py-1.5">
          <span className="text-sm">💎</span>
          <span className="text-sm font-bold text-[#60B5FF]">260</span>
          <Plus className="w-3 h-3 text-[#5C4A2A]" />
        </div>

        {/* Mail */}
        <button className="relative p-2 text-[#A08B60] hover:text-[#D4C4A0] transition-colors">
          <Mail className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">2</span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 pl-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3D3425] to-[#241E15] flex items-center justify-center ring-2 ring-amber-400 text-xs font-bold text-[#D4C4A0]">
            GM
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-medium text-[#E8D9C0]">Guildmaster</div>
            <div className="text-[10px] text-[#5C4A2A]">Level 12</div>
          </div>
          <ChevronDown className="w-3 h-3 text-[#5C4A2A] hidden sm:block" />
        </button>
      </div>
    </header>
  );
}
