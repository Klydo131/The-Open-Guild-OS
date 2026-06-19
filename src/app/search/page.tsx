import Link from "next/link";
import { searchRealm } from "@/lib/search";
import { QuestCard } from "@/components/quest/QuestCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { SearchPageInput } from "@/components/search/SearchPageInput";
import { SearchX, Users, ScrollText, Star, Shield, Hammer } from "lucide-react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = searchRealm(query);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Search</h1>
        {query ? (
          <p className="text-sm text-tavern-border-glow mt-2">
            {results.total} {results.total === 1 ? "result" : "results"} for &ldquo;<span className="text-parchment-400">{query}</span>&rdquo;
          </p>
        ) : (
          <p className="text-sm text-tavern-border-glow mt-2">Search across quests, guilds, and artisans.</p>
        )}
      </div>

      <div className="mb-8">
        <SearchPageInput initialQuery={query} />
      </div>

      {query && results.total === 0 && (
        <div className="text-center py-16">
          <SearchX className="w-10 h-10 text-tavern-border-glow mx-auto mb-3" />
          <p className="text-parchment-500 font-heading text-lg">No results found</p>
          <p className="text-sm text-tavern-border-glow mt-2">Try a different keyword, skill, or guild name.</p>
        </div>
      )}

      {results.quests.length > 0 && (
        <section className="mb-8">
          <h2 className="font-heading text-lg font-bold text-parchment-200 uppercase tracking-wide mb-4 flex items-center gap-2">
            <ScrollText className="w-4 h-4 text-gold-400" />
            Quests <span className="text-tavern-border-glow text-sm font-normal">({results.quests.length})</span>
          </h2>
          <div className="space-y-3">
            {results.quests.map((quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
          </div>
        </section>
      )}

      {results.guilds.length > 0 && (
        <section className="mb-8">
          <h2 className="font-heading text-lg font-bold text-parchment-200 uppercase tracking-wide mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-gold-400" />
            Guilds <span className="text-tavern-border-glow text-sm font-normal">({results.guilds.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.guilds.map((guild) => (
              <Link key={guild.id} href={`/guild-hall/${guild.id}`}>
                <Card variant="dark" hover className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-tavern-surface-alt border border-tavern-border flex items-center justify-center shrink-0">
                      <span className="text-xl font-heading font-bold text-parchment-400">{guild.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading text-base font-bold text-parchment-200">{guild.name}</h3>
                        <span className="text-xs bg-tavern-surface-alt border border-tavern-border rounded px-1.5 py-0.5 text-parchment-500">Lv.{guild.level}</span>
                      </div>
                      <p className="text-sm text-parchment-500 mb-3">{guild.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-tavern-border-glow">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {guild.memberCount} members</span>
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> {guild.rating}</span>
                        <GoldAmount amount={guild.totalGold} size="sm" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {results.artisans.length > 0 && (
        <section className="mb-8">
          <h2 className="font-heading text-lg font-bold text-parchment-200 uppercase tracking-wide mb-4 flex items-center gap-2">
            <Hammer className="w-4 h-4 text-gold-400" />
            Artisans <span className="text-tavern-border-glow text-sm font-normal">({results.artisans.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.artisans.map((artisan) => (
              <Link key={artisan.id} href={`/artisans/${artisan.id}`}>
                <Card variant="dark" hover className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar initials={artisan.avatar} size="md" level={artisan.level} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-sm font-bold text-parchment-200 truncate">{artisan.displayName}</h3>
                      <p className="text-xs text-parchment-500">{artisan.title}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full shrink-0 ${artisan.available ? "bg-green-400" : "bg-zinc-500"}`} />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {artisan.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="skill">{skill}</Badge>
                    ))}
                    {artisan.skills.length > 3 && <Badge variant="default">+{artisan.skills.length - 3}</Badge>}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
