export interface UserProfile {
  name: string;
  title: string;
  guild: string;
  level: number;
  xp: number;
  xpToNext: number;
  gold: number;
  gems: number;
}

export interface UserSkill {
  name: string;
  level: number;
}

export interface Milestone {
  title: string;
  desc: string;
  date: string;
  done: boolean;
  iconName: "Award" | "Shield" | "Star" | "TrendingUp";
}

export const userProfile: UserProfile = {
  name: "Guildmaster",
  title: "Full-Stack Artisan",
  guild: "Highline Guild",
  level: 12,
  xp: 2350,
  xpToNext: 3000,
  gold: 2450,
  gems: 260,
};

export const userSkills: UserSkill[] = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "UI/UX Design", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "Web3", level: 45 },
];

export const milestones: Milestone[] = [
  { title: "First Quest Completed", desc: "Completed your first quest", date: "Jan 2024", done: true, iconName: "Award" },
  { title: "Guild Member", desc: "Joined Highline Guild", date: "Feb 2024", done: true, iconName: "Shield" },
  { title: "Trusted Reputation", desc: "Reached Trusted status", date: "Apr 2024", done: true, iconName: "Star" },
  { title: "Master Artisan", desc: "Reach Level 15", date: "In Progress", done: false, iconName: "TrendingUp" },
];
