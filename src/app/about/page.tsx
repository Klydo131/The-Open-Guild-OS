import { Card } from "@/components/ui/Card";
import { Shield, Users, ScrollText, Flame, Code, Globe } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Flame,
    title: "Craftsmanship Over Speed",
    description: "We value quality work over fast delivery. Every quest deserves an artisan who takes pride in their craft.",
  },
  {
    icon: Users,
    title: "Guild Governance",
    description: "Guilds self-govern through reputation and collective decision-making, not corporate hierarchy.",
  },
  {
    icon: Shield,
    title: "Trust Through Reputation",
    description: "Your reputation is earned quest by quest. No shortcuts, no bought reviews — just honest craft.",
  },
  {
    icon: Code,
    title: "Open Source First",
    description: "The platform belongs to its artisans. Every line of code is open for inspection, contribution, and improvement.",
  },
  {
    icon: ScrollText,
    title: "Fair Compensation",
    description: "Artisans set their own rates. The value of work is determined by skill and effort, not a race to the bottom.",
  },
  {
    icon: Globe,
    title: "Hardware & Software Agnostic",
    description: "Built to run anywhere — no vendor lock-in, no proprietary dependencies. Your tools, your choice.",
  },
];

const TIMELINE = [
  { phase: "I", title: "The Foundation", description: "Core platform: quest posting, artisan profiles, guild formation, and reputation system.", status: "active" },
  { phase: "II", title: "The Expansion", description: "Payment escrow, dispute resolution, skill verification, and advanced guild governance.", status: "upcoming" },
  { phase: "III", title: "The Sovereignty", description: "Decentralized governance, community-owned infrastructure, and cross-guild federations.", status: "upcoming" },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">About The Open Guild</h1>
        <p className="text-sm text-tavern-border-glow mt-2">A freelancing platform forged in the spirit of the old guilds.</p>
      </div>

      <Card variant="featured" className="p-6 mb-8">
        <h2 className="font-heading text-xl font-bold text-parchment-200 mb-3">Our Vision</h2>
        <p className="text-parchment-400 leading-relaxed">
          The Open Guild OS reimagines freelancing through the lens of medieval guild culture — where
          artisans were respected for their craft, apprentices learned from masters, and communities
          governed themselves. We believe the gig economy lost something when it traded craftsmanship
          for speed and community for algorithms.
        </p>
        <p className="text-parchment-400 leading-relaxed mt-3">
          This is a platform built by artisans, for artisans. Open source from the first commit.
          No venture capital dictating features. No race to the bottom on pricing. Just honest work,
          fair pay, and a community that values what you build — not how fast you build it.
        </p>
      </Card>

      <h2 className="font-heading text-lg font-bold text-parchment-200 uppercase tracking-wide mb-4">Guiding Principles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {PRINCIPLES.map((principle) => (
          <Card key={principle.title} variant="dark" className="p-5">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <principle.icon className="w-4 h-4 text-gold-400" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide">{principle.title}</h3>
                <p className="text-xs text-parchment-500 mt-1 leading-relaxed">{principle.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <h2 className="font-heading text-lg font-bold text-parchment-200 uppercase tracking-wide mb-4">Roadmap</h2>
      <div className="space-y-4 mb-8">
        {TIMELINE.map((phase) => (
          <Card key={phase.phase} variant={phase.status === "active" ? "featured" : "dark"} className="p-5">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-heading font-bold text-sm ${phase.status === "active" ? "bg-gold-400/20 text-gold-400" : "bg-tavern-surface-alt text-tavern-border-glow"}`}>
                {phase.phase}
              </div>
              <div>
                <h3 className={`font-heading text-sm font-bold uppercase tracking-wide ${phase.status === "active" ? "text-gold-400" : "text-parchment-200"}`}>
                  {phase.title}
                </h3>
                <p className="text-xs text-parchment-500 mt-1 leading-relaxed">{phase.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card variant="dark" className="p-5">
        <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-2">Contribute</h2>
        <p className="text-xs text-parchment-500 leading-relaxed">
          The Open Guild OS is open source. Whether you&apos;re a developer, designer, writer, or just someone
          who believes freelancers deserve better — there&apos;s a place for you at the tavern table. Check out
          our repository, open an issue, or join a guild to start contributing.
        </p>
      </Card>
    </div>
  );
}
