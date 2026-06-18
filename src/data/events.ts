import { GuildEvent } from "@/types";

export const events: GuildEvent[] = [
  { id: "e1", name: "Double XP Weekend", description: "Earn double experience points on all completed quests this weekend.", type: "festival", startDate: "May 24", endDate: "May 26", prize: 0, participants: 342 },
  { id: "e2", name: "Guild Wars Season 1", description: "Guilds compete head-to-head in a series of coding challenges. Top guild wins the Grand Treasury.", type: "tournament", startDate: "Begins in 3d 14h", endDate: "", prize: 5000, participants: 128 },
  { id: "e3", name: "Build Together Event", description: "Collaborate with artisans across guilds on open-source projects. Earn bonus reputation.", type: "workshop", startDate: "May 30", endDate: "June 2", prize: 1000, participants: 89 },
  { id: "e4", name: "The Grand Hackathon", description: "48-hour hackathon building the next generation of guild tools. Solo or team entries welcome.", type: "challenge", startDate: "June 15", endDate: "June 17", prize: 3000, participants: 64 },
];
