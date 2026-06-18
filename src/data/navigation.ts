import { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  { label: "Tavern", href: "/", icon: "Castle", description: "Home Base" },
  { label: "Quest Board", href: "/quest-board", icon: "ScrollText", description: "Find Work" },
  { label: "Guild Hall", href: "/guild-hall", icon: "Shield", description: "Manage Guilds" },
  { label: "Artisans", href: "/artisans", icon: "Hammer", description: "Find Talent" },
  { label: "Bounties", href: "/bounties", icon: "Target", description: "Post a Quest" },
  { label: "Reputation", href: "/reputation", icon: "Award", description: "Your Journey" },
  { label: "Treasury", href: "/treasury", icon: "Coins", description: "Wallet & Skills" },
  { label: "Rankings", href: "/rankings", icon: "Trophy", description: "Top Guilds" },
  { label: "Events", href: "/events", icon: "Flame", description: "Live Challenges" },
];
