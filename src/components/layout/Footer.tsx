import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0A06] border-t border-[#3D3425] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-full bg-[#1A1510] border border-[#3D3425] flex items-center justify-center">
              <span className="text-[#FFC520] text-lg">⚔️</span>
            </div>
            <div>
              <div className="font-heading font-bold text-[#E8D9C0] text-sm uppercase">Earn Gold</div>
              <div className="text-xs text-[#5C4A2A]">Complete quests</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-full bg-[#1A1510] border border-[#3D3425] flex items-center justify-center">
              <span className="text-[#FFC520] text-lg">🏰</span>
            </div>
            <div>
              <div className="font-heading font-bold text-[#E8D9C0] text-sm uppercase">Build Together</div>
              <div className="text-xs text-[#5C4A2A]">Join or create guilds</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-full bg-[#1A1510] border border-[#3D3425] flex items-center justify-center">
              <span className="text-[#FFC520] text-lg">📜</span>
            </div>
            <div>
              <div className="font-heading font-bold text-[#E8D9C0] text-sm uppercase">Govern Wisely</div>
              <div className="text-xs text-[#5C4A2A]">Shape your community</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#3D3425] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#5C4A2A]" />
            <span className="text-xs text-[#5C4A2A]">The Open Guild OS — Forged with code, governed by craft.</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#5C4A2A]">
            <a href="#" className="hover:text-[#A08B60] transition-colors">About</a>
            <a href="#" className="hover:text-[#A08B60] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#A08B60] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#A08B60] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
