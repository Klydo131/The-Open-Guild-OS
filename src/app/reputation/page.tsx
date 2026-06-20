import type { Metadata } from "next";
import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Badge } from "@/components/ui/Badge";
import { userProfile, userSkills, milestones } from "@/data/user";
import { ScrollText, Star, Award, Clock, TrendingUp, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Journey — The Open Guild OS",
  description: "Track your progress and reputation across the realm.",
};

const PROFILE_STATS = [
  { icon: ScrollText, label: "Quests Completed", value: "28" },
  { icon: Star, label: "Reputation Score", value: "4.9" },
  { icon: Clock, label: "Member Since", value: "2024" },
  { icon: TrendingUp, label: "This Month", value: "+340 XP" },
];

const ICON_MAP = { Award, Shield, Star, TrendingUp } as const;

export default function ReputationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Your Journey</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Track your progress and reputation across the realm.</p>
      </div>

      <Card variant="featured" className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar initials={userProfile.name.slice(0, 2).toUpperCase()} size="lg" level={userProfile.level} />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold text-parchment-200">{userProfile.name}</h2>
            <p className="text-sm text-parchment-500 mb-3">{userProfile.title} — {userProfile.guild}</p>
            <ProgressBar value={userProfile.xp} max={userProfile.xpToNext} label={`Level ${userProfile.level}`} />
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <Badge variant="gold">Trusted</Badge>
              <Badge variant="default">Top 10%</Badge>
              <Badge variant="default">Early Adopter</Badge>
            </div>
          </div>
          <div className="text-center">
            <GoldAmount amount={userProfile.gold} size="lg" />
            <p className="text-[10px] text-tavern-border-glow mt-1">Total Earned</p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {PROFILE_STATS.map((stat) => (
          <Card key={stat.label} variant="dark" className="p-4 text-center">
            <stat.icon className="w-5 h-5 text-tavern-border-glow mx-auto mb-2" />
            <div className="text-lg font-bold text-parchment-200">{stat.value}</div>
            <div className="text-[10px] text-tavern-border-glow">{stat.label}</div>
          </Card>
        ))}
      </div>

      <Card variant="dark" className="p-5 mb-6">
        <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-4">Skills & Proficiencies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {userSkills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-parchment-400">{skill.name}</span>
                <span className="text-tavern-border-glow">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-tavern-surface-alt rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card variant="dark" className="p-5">
        <h3 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-4">Milestones</h3>
        <div className="space-y-4">
          {milestones.map((milestone) => {
            const Icon = ICON_MAP[milestone.iconName];
            return (
            <div key={milestone.title} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${milestone.done ? "bg-gold-400/10 text-gold-400" : "bg-tavern-surface-alt text-tavern-border-glow"}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className={`text-sm font-medium ${milestone.done ? "text-parchment-200" : "text-tavern-border-glow"}`}>{milestone.title}</div>
                <div className="text-[10px] text-tavern-border-glow">{milestone.desc}</div>
              </div>
              <span className={`text-xs ${milestone.done ? "text-parchment-500" : "text-tavern-border-glow"}`}>{milestone.date}</span>
            </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
