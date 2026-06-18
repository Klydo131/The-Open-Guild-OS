import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatGold(amount: number): string {
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1)}k`;
  }
  return amount.toLocaleString();
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case "Apprentice": return "text-green-400 bg-green-400/10 border-green-400/30";
    case "Journeyman": return "text-blue-400 bg-blue-400/10 border-blue-400/30";
    case "Master": return "text-purple-400 bg-purple-400/10 border-purple-400/30";
    case "Grandmaster": return "text-amber-400 bg-amber-400/10 border-amber-400/30";
    default: return "text-zinc-400 bg-zinc-400/10 border-zinc-400/30";
  }
}

export function getRarityColor(rarity: string): string {
  switch (rarity) {
    case "Common": return "text-zinc-300 bg-zinc-500/10 border-zinc-500/30";
    case "Uncommon": return "text-green-400 bg-green-400/10 border-green-400/30";
    case "Rare": return "text-blue-400 bg-blue-400/10 border-blue-400/30";
    case "Epic": return "text-purple-400 bg-purple-400/10 border-purple-400/30";
    case "Legendary": return "text-amber-400 bg-amber-400/10 border-amber-400/30";
    default: return "text-zinc-400 bg-zinc-400/10 border-zinc-400/30";
  }
}
