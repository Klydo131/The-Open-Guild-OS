import { Card } from "@/components/ui/Card";
import { ScrollText } from "lucide-react";

const TERMS_SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using The Open Guild OS ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Platform. The Platform is an open-source freelancing marketplace where artisans (freelancers) and quest posters (clients) connect.`,
  },
  {
    title: "2. Accounts & Identity",
    content: `You are responsible for maintaining the security of your account credentials. One person may not maintain more than one active account. You must provide accurate information when creating your account. Impersonating another artisan or guild is grounds for immediate suspension.`,
  },
  {
    title: "3. Quests & Agreements",
    content: `Quests posted on the Platform represent work agreements between quest posters and artisans. The Platform facilitates these connections but is not a party to the work agreement itself. Both parties are expected to negotiate terms in good faith. Completed work should match the quest description and agreed-upon scope.`,
  },
  {
    title: "4. Guild Conduct",
    content: `Guilds are self-governing communities within the Platform. Guild leaders are responsible for moderating their guild's activities. Guilds may not be used to collude on pricing, manipulate reputation scores, or engage in any form of market manipulation. Disputes within guilds should be resolved through the guild's own governance process first.`,
  },
  {
    title: "5. Reputation & Reviews",
    content: `Reputation scores reflect genuine interactions on the Platform. Attempts to artificially inflate or damage reputation — through fake reviews, review exchanges, or coercion — will result in penalties. Both artisans and quest posters may leave honest reviews after quest completion.`,
  },
  {
    title: "6. Payments & Gold",
    content: `"Gold" is the Platform's unit of account for quest compensation. All payment terms are agreed upon between the quest poster and artisan before work begins. The Platform may implement escrow or payment protection features in the future to safeguard both parties.`,
  },
  {
    title: "7. Intellectual Property",
    content: `Unless otherwise agreed in the quest terms, completed work deliverables transfer to the quest poster upon full payment. Artisans retain the right to showcase completed work in their portfolio unless the quest explicitly requires confidentiality. The Platform's source code is licensed under its open-source license.`,
  },
  {
    title: "8. Prohibited Conduct",
    content: `You may not use the Platform to post illegal content, harass other users, spam quest boards, circumvent Platform features, scrape data for commercial purposes, or engage in any activity that undermines the trust and safety of the community.`,
  },
  {
    title: "9. Termination",
    content: `We reserve the right to suspend or terminate accounts that violate these terms. Users may delete their accounts at any time. Upon termination, pending quest obligations should still be fulfilled in good faith.`,
  },
  {
    title: "10. Changes to Terms",
    content: `We may update these terms as the Platform evolves. Significant changes will be communicated through the Platform. Continued use after changes constitutes acceptance of the updated terms.`,
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Terms of Service</h1>
        <p className="text-sm text-tavern-border-glow mt-2">The rules of the realm — fair and transparent for all.</p>
      </div>

      <Card variant="featured" className="p-5 mb-8">
        <div className="flex items-start gap-3">
          <ScrollText className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
          <p className="text-xs text-parchment-400 leading-relaxed">
            These terms govern your use of The Open Guild OS platform. They&apos;re written to be clear
            and fair — no hidden clauses, no legalese traps. If something is unclear, reach out
            through the contact page.
          </p>
        </div>
      </Card>

      <div className="space-y-4">
        {TERMS_SECTIONS.map((section) => (
          <Card key={section.title} variant="dark" className="p-5">
            <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-2">
              {section.title}
            </h2>
            <p className="text-xs text-parchment-500 leading-relaxed">{section.content}</p>
          </Card>
        ))}
      </div>

      <p className="text-[10px] text-tavern-border-glow mt-6 text-center">
        Last updated: June 2026
      </p>
    </div>
  );
}
