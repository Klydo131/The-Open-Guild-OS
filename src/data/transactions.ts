export interface Transaction {
  id: string;
  type: "earned" | "spent";
  description: string;
  amount: number;
  date: string;
}

export const transactions: Transaction[] = [
  { id: "t1", type: "earned", description: "Completed: Forge a Payment Gateway", amount: 750, date: "2 days ago" },
  { id: "t2", type: "spent", description: "Guild dues — Highline Guild", amount: 50, date: "5 days ago" },
  { id: "t3", type: "earned", description: "Completed: Design the Elysium Crest", amount: 400, date: "1 week ago" },
  { id: "t4", type: "earned", description: "Bounty bonus: Early delivery", amount: 100, date: "1 week ago" },
  { id: "t5", type: "spent", description: "Skill upgrade: Web3 Basics", amount: 200, date: "2 weeks ago" },
  { id: "t6", type: "earned", description: "Completed: Data Pipeline Optimization", amount: 550, date: "2 weeks ago" },
];
