import Link from "next/link";
import { Shield } from "lucide-react";

const footerHighlights = [
  { icon: "⚔️", title: "Earn Gold", subtitle: "Complete quests" },
  { icon: "🏰", title: "Build Together", subtitle: "Join or create guilds" },
  { icon: "📜", title: "Govern Wisely", subtitle: "Shape your community" },
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-tavern-bg border-t border-tavern-border py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {footerHighlights.map((item) => (
            <div key={item.title} className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-full bg-tavern-surface border border-tavern-border flex items-center justify-center">
                <span className="text-gold-400 text-lg">{item.icon}</span>
              </div>
              <div>
                <div className="font-heading font-bold text-parchment-200 text-sm uppercase">{item.title}</div>
                <div className="text-xs text-tavern-border-glow">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-tavern-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-tavern-border-glow" />
            <span className="text-xs text-tavern-border-glow">The Open Guild OS — Forged with code, governed by craft.</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-tavern-border-glow">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-parchment-500 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
