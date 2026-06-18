import { ScrollText, Star, Shield } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";

export function JourneyStats() {
  return (
    <div className="rounded-xl bg-[#1A1510] border border-[#3D3425] p-4">
      <h3 className="font-heading text-sm font-bold text-[#E8D9C0] uppercase tracking-wide mb-4">Your Journey</h3>

      {/* Profile */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar initials="GM" size="lg" level={12} />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-[#E8D9C0]">Guildmaster</span>
            <span className="text-xs bg-[#241E15] border border-[#3D3425] rounded px-1.5 py-0.5 text-[#A08B60]">12</span>
          </div>
          <ProgressBar value={2350} max={3000} size="sm" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <ScrollText className="w-3 h-3 text-[#5C4A2A]" />
          </div>
          <div className="text-lg font-bold text-[#E8D9C0]">28</div>
          <div className="text-[10px] text-[#5C4A2A]">Quests Completed</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Star className="w-3 h-3 text-[#5C4A2A]" />
          </div>
          <div className="text-lg font-bold text-[#E8D9C0]">Trusted</div>
          <div className="text-[10px] text-[#5C4A2A]">Reputation</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Shield className="w-3 h-3 text-[#5C4A2A]" />
          </div>
          <div className="text-sm font-bold text-[#E8D9C0]">Highline Guild</div>
          <div className="text-[10px] text-[#5C4A2A]">Guild</div>
        </div>
      </div>
    </div>
  );
}
