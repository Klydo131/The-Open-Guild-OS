import { artisans } from "@/data/artisans";
import { SearchBar } from "@/components/ui/SearchBar";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { ProgressBar } from "@/components/ui/ProgressBar";

export default function ArtisansPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-[#E8D9C0] uppercase tracking-wide">Artisans</h1>
        <p className="text-sm text-[#5C4A2A] mt-2">Discover skilled artisans ready to bring your vision to life.</p>
      </div>

      <SearchBar className="mb-6" placeholder="Search artisans by name, skill, or guild..." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artisans.map((artisan) => (
          <Card key={artisan.id} variant="dark" hover className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <Avatar initials={artisan.avatar} size="md" level={artisan.level} />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-sm font-bold text-[#E8D9C0] truncate">{artisan.displayName}</h3>
                <p className="text-xs text-[#A08B60]">{artisan.title}</p>
              </div>
              <div className={`w-2 h-2 rounded-full shrink-0 ${artisan.available ? "bg-green-400" : "bg-zinc-500"}`} />
            </div>

            <ProgressBar value={artisan.xp} max={artisan.xpToNext} size="sm" showValues={false} label={`Level ${artisan.level}`} />

            <div className="flex flex-wrap gap-1 mt-3 mb-3">
              {artisan.skills.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="skill">{skill}</Badge>
              ))}
              {artisan.skills.length > 3 && <Badge variant="default">+{artisan.skills.length - 3}</Badge>}
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#5C4A2A]">{artisan.questsCompleted} quests</span>
              <span className="flex items-center gap-0.5">
                <GoldAmount amount={artisan.hourlyRate} size="sm" />
                <span className="text-[10px] text-[#5C4A2A]">/hr</span>
              </span>
            </div>

            {artisan.guildName && (
              <div className="mt-2 pt-2 border-t border-[#3D3425] text-[10px] text-[#5C4A2A]">
                Guild: <span className="text-[#A08B60]">{artisan.guildName}</span>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
