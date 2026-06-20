import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { ActionButton } from "@/components/ui/ActionButton";
import { guilds } from "@/data/guilds";
import { ArrowLeft, Users, ScrollText, Star, Trophy, Shield } from "lucide-react";

export function generateStaticParams() {
  return guilds.map((guild) => ({ id: guild.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const guild = guilds.find((g) => g.id === id);
  if (!guild) return { title: "Guild Not Found" };
  return {
    title: `${guild.name} — The Open Guild OS`,
    description: `${guild.description} Level ${guild.level} guild with ${guild.memberCount} members.`,
  };
}

export default async function GuildDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const guild = guilds.find((g) => g.id === id);

  if (!guild) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/guild-hall"
        className="inline-flex items-center gap-1 text-xs text-tavern-border-glow hover:text-parchment-400 transition-colors mb-6"
      >
        <ArrowLeft className="w-3 h-3" />
        Back to Guild Hall
      </Link>

      <Card variant="featured" className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-lg bg-tavern-surface border border-tavern-border flex items-center justify-center shrink-0">
            <span className="text-2xl font-heading font-bold text-parchment-400">{guild.name.charAt(0)}</span>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start mb-1">
              <h1 className="font-heading text-2xl font-bold text-parchment-200">{guild.name}</h1>
              <span className="text-xs bg-tavern-surface-alt border border-tavern-border rounded px-1.5 py-0.5 text-parchment-500">
                Level {guild.level}
              </span>
            </div>
            <p className="text-sm text-parchment-400 mb-3">{guild.description}</p>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <Badge variant="gold">{guild.specialty}</Badge>
              <Badge variant="default">
                <Star className="w-3 h-3 inline mr-0.5" />
                {guild.rating} Rating
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card variant="dark" className="p-4 text-center">
          <Users className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <div className="text-lg font-bold text-parchment-200">{guild.memberCount}</div>
          <div className="text-[10px] text-tavern-border-glow">Members</div>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <ScrollText className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <div className="text-lg font-bold text-parchment-200">{guild.questsCompleted}</div>
          <div className="text-[10px] text-tavern-border-glow">Quests Done</div>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <Trophy className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <div className="text-lg font-bold text-parchment-200">{guild.rating}</div>
          <div className="text-[10px] text-tavern-border-glow">Rating</div>
        </Card>
        <Card variant="dark" className="p-4 text-center">
          <Shield className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
          <GoldAmount amount={guild.totalGold} />
          <div className="text-[10px] text-tavern-border-glow mt-1">Treasury</div>
        </Card>
      </div>

      <Card variant="dark" className="p-5 mb-6">
        <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-3">Guild Overview</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs text-tavern-border-glow">Specialty</span>
            <span className="text-xs text-parchment-400">{guild.specialty}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-tavern-border-glow">Level</span>
            <span className="text-xs text-parchment-400">{guild.level}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-tavern-border-glow">Active Members</span>
            <span className="text-xs text-parchment-400">{guild.memberCount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-tavern-border-glow">Total Gold Earned</span>
            <GoldAmount amount={guild.totalGold} size="sm" />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-tavern-border-glow">Quests Completed</span>
            <span className="text-xs text-parchment-400">{guild.questsCompleted}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-tavern-border-glow">Community Rating</span>
            <span className="text-xs text-parchment-400 flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-500" />
              {guild.rating} / 5.0
            </span>
          </div>
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3">
        <ActionButton label="Apply to Join" confirmedLabel="Application Sent!" className="flex-1" />
        <ActionButton label="View Members" confirmedLabel="Request Sent!" variant="secondary" className="flex-1" />
      </div>
    </div>
  );
}
