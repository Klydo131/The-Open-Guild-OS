import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Shield, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-tavern-surface border border-tavern-border flex items-center justify-center mx-auto mb-6">
        <Shield className="w-10 h-10 text-tavern-border-glow" />
      </div>

      <h1 className="font-heading text-4xl font-bold text-parchment-200 mb-2">404</h1>
      <h2 className="font-heading text-lg font-bold text-gold-400 uppercase tracking-wide mb-4">Quest Not Found</h2>
      <p className="text-sm text-parchment-500 mb-8 max-w-md mx-auto">
        The path you seek leads beyond the known realm. Perhaps the page was moved, or the scroll has
        been reclaimed by the void.
      </p>

      <Card variant="dark" className="p-5 mb-8 text-left">
        <h3 className="font-heading text-xs font-bold text-parchment-200 uppercase tracking-wide mb-3">You might be looking for</h3>
        <div className="space-y-2">
          {[
            { label: "Quest Board", href: "/quest-board", desc: "Browse available quests" },
            { label: "Guild Hall", href: "/guild-hall", desc: "Find or join a guild" },
            { label: "Artisans", href: "/artisans", desc: "Discover skilled artisans" },
            { label: "Events", href: "/events", desc: "Upcoming challenges and tournaments" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-tavern-surface-alt transition-colors group"
            >
              <div>
                <span className="text-sm text-parchment-200 group-hover:text-gold-400 transition-colors">{item.label}</span>
                <span className="text-[10px] text-tavern-border-glow ml-2">{item.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/">
          <Button variant="primary">
            <ArrowLeft className="w-4 h-4" />
            Return to Tavern
          </Button>
        </Link>
        <Link href="/search">
          <Button variant="secondary">
            <Search className="w-4 h-4" />
            Search the Realm
          </Button>
        </Link>
      </div>
    </div>
  );
}
