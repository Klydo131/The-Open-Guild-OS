import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ActionButton } from "@/components/ui/ActionButton";
import { artisans } from "@/data/artisans";
import { ArrowLeft, ScrollText, Star, Clock, Shield } from "lucide-react";

export function generateStaticParams() {
  return artisans.map((artisan) => ({ id: artisan.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const artisan = artisans.find((a) => a.id === id);
  if (!artisan) return { title: "Artisan Not Found" };
  return {
    title: `${artisan.displayName} — The Open Guild OS`,
    description: `${artisan.title} — Level ${artisan.level} ${artisan.reputation} artisan with ${artisan.questsCompleted} quests completed.`,
  };
}

const REPUTATION_COLORS: Record<string, string> = {
  Legendary: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  Renowned: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  Trusted: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  Rising: "text-green-400 bg-green-400/10 border-green-400/30",
};

export default async function ArtisanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artisan = artisans.find((a) => a.id === id);

  if (!artisan) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/artisans"
        className="inline-flex items-center gap-1 text-xs text-tavern-border-glow hover:text-parchment-400 transition-colors mb-6"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Artisans
      </Link>

      <Card variant="featured" className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar initials={artisan.avatar} size="lg" level={artisan.level} />
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start mb-1">
              <h1 className="font-heading text-2xl font-bold text-parchment-200">{artisan.displayName}</h1>
              <div className={`w-2.5 h-2.5 rounded-full ${artisan.available ? "bg-green-400" : "bg-zinc-500"}`} />
            </div>
            <p className="text-sm text-parchment-500 mb-3">{artisan.title}</p>
            <ProgressBar value={artisan.xp} max={artisan.xpToNext} label={`Level ${artisan.level}`} />
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <span className={`px-2 py-0.5 rounded text-xs font-bold border ${REPUTATION_COLORS[artisan.reputation] || "text-zinc-400 bg-zinc-400/10 border-zinc-400/30"}`}>
                {artisan.reputation}
              </span>
              {artisan.available ? (
                <Badge variant="gold">Available</Badge>
              ) : (
                <Badge variant="default">Unavailable</Badge>
              )}
            </div>
          </div>
          <div className="text-center">
            <GoldAmount amount={artisan.hourlyRate} size="lg" />
            <p className="text-[10px] text-tavern-border-glow mt-1">Per Hour</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card variant="dark" className="p-4 text-center">
          <ScrollText className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <div className="text-lg font-bold text-parchment-200">{artisan.questsCompleted}</div>
          <div className="text-[10px] text-tavern-border-glow">Quests Completed</div>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <Star className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <div className="text-lg font-bold text-parchment-200">{artisan.reputation}</div>
          <div className="text-[10px] text-tavern-border-glow">Reputation</div>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <Clock className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <div className="text-lg font-bold text-parchment-200">Lvl {artisan.level}</div>
          <div className="text-[10px] text-tavern-border-glow">Experience</div>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <Shield className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <div className="text-lg font-bold text-parchment-200 truncate text-sm">
            {artisan.guildName || "Independent"}
          </div>
          <div className="text-[10px] text-tavern-border-glow">Guild</div>
        </Card>
      </div>

      <Card variant="dark" className="p-5 mb-6">
        <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-3">Skills & Proficiencies</h2>
        <div className="flex flex-wrap gap-2">
          {artisan.skills.map((skill) => (
            <Badge key={skill} variant="skill">{skill}</Badge>
          ))}
        </div>
      </Card>

      <Card variant="dark" className="p-5 mb-6">
        <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-3">Experience Progress</h2>
        <ProgressBar value={artisan.xp} max={artisan.xpToNext} label={`Level ${artisan.level} → Level ${artisan.level + 1}`} />
        <p className="text-xs text-tavern-border-glow mt-2">
          {artisan.xpToNext - artisan.xp} XP remaining to next level
        </p>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3">
        <ActionButton
          label={artisan.available ? "Hire Artisan" : "Currently Unavailable"}
          confirmedLabel="Request Sent!"
          disabled={!artisan.available}
          className="flex-1"
        />
        <ActionButton label="Send Message" confirmedLabel="Message Sent!" variant="secondary" className="flex-1" />
      </div>
    </div>
  );
}
