import { ScrollText, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#3D3425]/50">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1510] via-[#0D0A06] to-[#0D0A06]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FFC520]/[0.04] rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#E5A800]/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-[#5C4A2A] text-sm uppercase tracking-[0.3em] font-medium mb-4">Welcome to</p>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-[#E8D9C0] leading-tight mb-2">
            THE OPEN
          </h1>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-[#FFC520] leading-tight mb-6">
            GUILD OS
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#FFC520] to-transparent mb-6" />
          <p className="text-[#A08B60] text-lg leading-relaxed mb-8 max-w-lg">
            A digital tavern for doers and dreamers. Post quests. Earn gold. Build guilds. Govern together. Prosper as one.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              <ScrollText className="w-5 h-5" />
              Post a Quest
            </Button>
            <Button variant="secondary" size="lg">
              <Users className="w-5 h-5" />
              Join a Guild
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
