import type { QuestCategory, DifficultyTier } from "@/types";

export const QUEST_CATEGORIES: QuestCategory[] = [
  "Development", "Design", "Writing", "Marketing",
  "Blockchain", "Security", "Data", "Video",
];

export const DIFFICULTY_TIERS: DifficultyTier[] = [
  "Apprentice", "Journeyman", "Master", "Grandmaster",
];

export const CATEGORY_ICONS: Record<QuestCategory, string> = {
  Development: "⚔️",
  Design: "🎨",
  Writing: "📜",
  Marketing: "📣",
  Blockchain: "⛓️",
  Security: "🛡️",
  Data: "🔮",
  Video: "🎬",
};

export const BUDGET_FILTERS = [
  { label: "Under 500g", test: (budget: number) => budget < 500 },
  { label: "500 – 1000g", test: (budget: number) => budget >= 500 && budget <= 1000 },
  { label: "Over 1000g", test: (budget: number) => budget > 1000 },
] as const;

export const DAILY_REWARD_DAYS = 7;
