import { Avatar } from "@/components/ui/Avatar";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Card } from "@/components/ui/Card";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Badge } from "@/components/ui/Badge";
import { ScrollText, Star, Shield, Award, Clock, TrendingUp } from "lucide-react";

export default function ReputationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-[#E8D9C0] uppercase tracking-wide">Your Journey</h1>
        <p className="text-sm text-[#5C4A2A] mt-2">Track your progress and reputation across the realm.</p>
      </div>

      {/* Profile Card */}
      <Card variant="featured" className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <Avatar initials="GM" size="lg" level={12} />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold text-[#E8D9C0]">Guildmaster</h2>
            <p className="text-sm text-[#A08B60] mb-3">Full-Stack Artisan — Highline Guild</p>
            <ProgressBar value={2350} max={3000} label="Level 12" />
            <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
              <Badge variant="gold">Trusted</Badge>
              <Badge variant="default">Top 10%</Badge>
              <Badge variant="default">Early Adopter</Badge>
            </div>
          </div>
          <div className="text-center">
            <GoldAmount amount={2450} size="lg" />
            <p className="text-[10px] text-[#5C4A2A] mt-1">Total Earned</p>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { icon: ScrollText, label: "Quests Completed", value: "28" },
          { icon: Star, label: "Reputation Score", value: "4.9" },
          { icon: Clock, label: "Member Since", value: "2024" },
          { icon: TrendingUp, label: "This Month", value: "+340 XP" },
        ].map((stat) => (
          <Card key={stat.label} variant="dark" className="p-4 text-center">
            <stat.icon className="w-5 h-5 text-[#5C4A2A] mx-auto mb-2" />
            <div className="text-lg font-bold text-[#E8D9C0]">{stat.value}</div>
            <div className="text-[10px] text-[#5C4A2A]">{stat.label}</div>
          </Card>
        ))}
      </div>

      {/* Skills */}
      <Card variant="dark" className="p-5 mb-6">
        <h3 className="font-heading text-sm font-bold text-[#E8D9C0] uppercase tracking-wide mb-4">Skills & Proficiencies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "React", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "UI/UX Design", level: 70 },
            { name: "PostgreSQL", level: 75 },
            { name: "Web3", level: 45 },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#BFA97A]">{skill.name}</span>
                <span className="text-[#5C4A2A]">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#241E15] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#E5A800] to-[#FFC520] rounded-full" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Journey Milestones */}
      <Card variant="dark" className="p-5">
        <h3 className="font-heading text-sm font-bold text-[#E8D9C0] uppercase tracking-wide mb-4">Milestones</h3>
        <div className="space-y-4">
          {[
            { icon: Award, title: "First Quest Completed", desc: "Completed your first quest", date: "Jan 2024", done: true },
            { icon: Shield, title: "Guild Member", desc: "Joined Highline Guild", date: "Feb 2024", done: true },
            { icon: Star, title: "Trusted Reputation", desc: "Reached Trusted status", date: "Apr 2024", done: true },
            { icon: TrendingUp, title: "Master Artisan", desc: "Reach Level 15", date: "In Progress", done: false },
          ].map((milestone) => (
            <div key={milestone.title} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${milestone.done ? "bg-[#FFC520]/10 text-[#FFC520]" : "bg-[#241E15] text-[#5C4A2A]"}`}>
                <milestone.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className={`text-sm font-medium ${milestone.done ? "text-[#E8D9C0]" : "text-[#5C4A2A]"}`}>{milestone.title}</div>
                <div className="text-[10px] text-[#5C4A2A]">{milestone.desc}</div>
              </div>
              <span className={`text-xs ${milestone.done ? "text-[#A08B60]" : "text-[#5C4A2A]"}`}>{milestone.date}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
