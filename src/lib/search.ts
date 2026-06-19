import { quests } from "@/data/quests";
import { guilds } from "@/data/guilds";
import { artisans } from "@/data/artisans";
import type { Quest, Guild, Artisan } from "@/types";

export interface SearchResults {
  quests: Quest[];
  guilds: Guild[];
  artisans: Artisan[];
  total: number;
}

/**
 * Searches across quests, guilds, and artisans for a given query.
 * Matching is case-insensitive and spans titles, descriptions, skills, and related fields.
 */
export function searchRealm(query: string): SearchResults {
  const q = query.trim().toLowerCase();

  if (!q) {
    return { quests: [], guilds: [], artisans: [], total: 0 };
  }

  const matchedQuests = quests.filter(
    (quest) =>
      quest.title.toLowerCase().includes(q) ||
      quest.description.toLowerCase().includes(q) ||
      quest.category.toLowerCase().includes(q) ||
      quest.posterGuild.toLowerCase().includes(q) ||
      quest.skills.some((skill) => skill.toLowerCase().includes(q))
  );

  const matchedGuilds = guilds.filter(
    (guild) =>
      guild.name.toLowerCase().includes(q) ||
      guild.specialty.toLowerCase().includes(q) ||
      guild.description.toLowerCase().includes(q)
  );

  const matchedArtisans = artisans.filter(
    (artisan) =>
      artisan.displayName.toLowerCase().includes(q) ||
      artisan.title.toLowerCase().includes(q) ||
      artisan.skills.some((skill) => skill.toLowerCase().includes(q)) ||
      (artisan.guildName?.toLowerCase().includes(q) ?? false)
  );

  return {
    quests: matchedQuests,
    guilds: matchedGuilds,
    artisans: matchedArtisans,
    total: matchedQuests.length + matchedGuilds.length + matchedArtisans.length,
  };
}
