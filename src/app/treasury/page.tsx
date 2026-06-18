import { Card } from "@/components/ui/Card";
import { GoldAmount } from "@/components/ui/GoldAmount";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowDownLeft, Coins } from "lucide-react";

const transactions = [
  { id: "t1", type: "earned", description: "Completed: Forge a Payment Gateway", amount: 750, date: "2 days ago" },
  { id: "t2", type: "spent", description: "Guild dues — Highline Guild", amount: 50, date: "5 days ago" },
  { id: "t3", type: "earned", description: "Completed: Design the Elysium Crest", amount: 400, date: "1 week ago" },
  { id: "t4", type: "earned", description: "Bounty bonus: Early delivery", amount: 100, date: "1 week ago" },
  { id: "t5", type: "spent", description: "Skill upgrade: Web3 Basics", amount: 200, date: "2 weeks ago" },
  { id: "t6", type: "earned", description: "Completed: Data Pipeline Optimization", amount: 550, date: "2 weeks ago" },
];

export default function TreasuryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-[#E8D9C0] uppercase tracking-wide">Treasury</h1>
        <p className="text-sm text-[#5C4A2A] mt-2">Manage your gold and track your earnings.</p>
      </div>

      {/* Balance Card */}
      <Card variant="featured" className="p-6 mb-6">
        <div className="text-center">
          <Coins className="w-10 h-10 text-[#FFC520] mx-auto mb-3" />
          <div className="text-3xl font-bold text-[#FFC520] font-heading">2,450</div>
          <p className="text-sm text-[#A08B60] mt-1">Gold Balance</p>
          <div className="flex justify-center gap-6 mt-4 text-xs">
            <div>
              <span className="text-green-400 font-medium">+1,800</span>
              <span className="text-[#5C4A2A] ml-1">this month</span>
            </div>
            <div>
              <span className="text-red-400 font-medium">-250</span>
              <span className="text-[#5C4A2A] ml-1">spent</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Transactions */}
      <Card variant="dark" className="p-5">
        <h3 className="font-heading text-sm font-bold text-[#E8D9C0] uppercase tracking-wide mb-4">Transaction History</h3>
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center gap-3 py-2 border-b border-[#241E15] last:border-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${tx.type === "earned" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                {tx.type === "earned" ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-[#D4C4A0] truncate">{tx.description}</div>
                <div className="text-[10px] text-[#5C4A2A]">{tx.date}</div>
              </div>
              <span className={`text-sm font-bold ${tx.type === "earned" ? "text-green-400" : "text-red-400"}`}>
                {tx.type === "earned" ? "+" : "-"}{tx.amount}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
