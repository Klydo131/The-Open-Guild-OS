import { Card } from "@/components/ui/Card";
import { Shield, Eye, Lock, Trash2, Server, Bell } from "lucide-react";

const PRIVACY_SECTIONS = [
  {
    icon: Eye,
    title: "What We Collect",
    items: [
      "Account information: display name, email, and profile details you provide",
      "Quest activity: quests posted, applied for, and completed",
      "Reputation data: reviews, ratings, and skill endorsements",
      "Usage data: pages visited and features used, to improve the Platform",
    ],
  },
  {
    icon: Lock,
    title: "What We Don't Collect",
    items: [
      "We don't sell your data to advertisers or data brokers",
      "We don't track you across other websites",
      "We don't read private messages between artisans and quest posters",
      "We don't use your data to train AI models without explicit consent",
    ],
  },
  {
    icon: Server,
    title: "How We Store Data",
    items: [
      "All data is encrypted at rest and in transit",
      "Passwords are hashed — we never store them in plain text",
      "We use minimal third-party services and vet each one",
      "As an open-source project, our data handling is auditable",
    ],
  },
  {
    icon: Trash2,
    title: "Your Rights",
    items: [
      "Access: request a copy of all data we hold about you",
      "Correction: update or fix inaccurate information",
      "Deletion: request complete removal of your account and data",
      "Portability: export your profile, quest history, and reputation",
    ],
  },
  {
    icon: Bell,
    title: "Communications",
    items: [
      "We only send emails you've opted into",
      "Quest notifications can be toggled per-category",
      "You can unsubscribe from all non-essential emails at any time",
      "We will never send marketing emails without explicit consent",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Privacy Policy</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Your data, your rules. Here&apos;s how we handle it.</p>
      </div>

      <Card variant="featured" className="p-5 mb-8">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-parchment-400 leading-relaxed">
              The Open Guild OS is built on trust. We collect only what&apos;s needed to run the
              platform, we&apos;re transparent about how it&apos;s used, and we give you full control
              over your data. Being open source means you can verify these claims yourself.
            </p>
          </div>
        </div>
      </Card>

      <div className="space-y-4 mb-8">
        {PRIVACY_SECTIONS.map((section) => (
          <Card key={section.title} variant="dark" className="p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
                <section.icon className="w-4 h-4 text-gold-400" />
              </div>
              <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide pt-1.5">
                {section.title}
              </h2>
            </div>
            <ul className="space-y-2 ml-11">
              {section.items.map((item) => (
                <li key={item} className="text-xs text-parchment-500 leading-relaxed flex items-start gap-2">
                  <span className="text-gold-600 mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card variant="dark" className="p-5">
        <h2 className="font-heading text-sm font-bold text-parchment-200 uppercase tracking-wide mb-2">Cookies</h2>
        <p className="text-xs text-parchment-500 leading-relaxed">
          We use only essential cookies required for authentication and session management.
          No tracking cookies, no advertising cookies, no third-party analytics cookies.
          The Platform works with cookies enabled for your session only.
        </p>
      </Card>

      <p className="text-[10px] text-tavern-border-glow mt-6 text-center">
        Last updated: June 2026
      </p>
    </div>
  );
}
