import Link from "next/link";
import { ScrollText, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-tavern-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-tavern-surface via-tavern-bg to-tavern-bg" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-400/[0.04] rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gold-500/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 py-20 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-tavern-border-glow text-sm uppercase tracking-[0.3em] font-medium mb-4">Welcome to</p>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-parchment-200 leading-tight mb-2">
            THE OPEN
          </h1>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-gold-400 leading-tight mb-6">
            GUILD OS
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mb-6" />
          <p className="text-parchment-500 text-lg leading-relaxed mb-8 max-w-lg">
            A digital tavern for doers and dreamers. Post quests. Earn gold. Build guilds. Govern together. Prosper as one.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/bounties">
              <Button variant="primary" size="lg">
                <ScrollText className="w-5 h-5" />
                Post a Quest
              </Button>
            </Link>
            <Link href="/guild-hall">
              <Button variant="secondary" size="lg">
                <Users className="w-5 h-5" />
                Join a Guild
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
