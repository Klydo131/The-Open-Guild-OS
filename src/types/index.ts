export type DifficultyTier = "Apprentice" | "Journeyman" | "Master" | "Grandmaster";
export type QuestCategory = "Development" | "Design" | "Writing" | "Marketing" | "Blockchain" | "Security" | "Data" | "Video";
export type QuestStatus = "Open" | "In Progress" | "Completed" | "Expired";
export type RarityTier = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: QuestCategory;
  difficulty: DifficultyTier;
  rarity: RarityTier;
  budget: number;
  deadline: string;
  timeLeft: string;
  skills: string[];
  posterName: string;
  posterGuild: string;
  posterGuildLevel: number;
  posterAvatar: string;
  applicants: number;
  status: QuestStatus;
}

export interface Guild {
  id: string;
  name: string;
  description: string;
  specialty: string;
  memberCount: number;
  level: number;
  totalGold: number;
  questsCompleted: number;
  rating: number;
  emblemColor: string;
}

export interface Artisan {
  id: string;
  displayName: string;
  title: string;
  avatar: string;
  skills: string[];
  level: number;
  xp: number;
  xpToNext: number;
  reputation: string;
  questsCompleted: number;
  hourlyRate: number;
  guildName: string | null;
  available: boolean;
}

export interface GuildEvent {
  id: string;
  name: string;
  description: string;
  type: "tournament" | "challenge" | "festival" | "workshop";
  startDate: string;
  endDate: string;
  prize: number;
  participants: number;
}

export interface ActivityItem {
  id: string;
  type: "quest_completed" | "quest_posted" | "guild_joined" | "level_up" | "artisan_hired";
  message: string;
  timestamp: string;
  actorName: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  description: string;
}
