import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact — The Open Guild OS",
  description: "Reach out to the guild council for support, partnerships, or feedback.",
};
import { ContactForm } from "@/components/contact/ContactForm";
import { MessageSquare, Code2, Mail } from "lucide-react";

const CONTACT_CHANNELS = [
  {
    icon: Code2,
    title: "GitHub Issues",
    description: "Report bugs or request features on our open-source repository.",
    detail: "Best for technical issues",
  },
  {
    icon: MessageSquare,
    title: "Community Discussions",
    description: "Join the conversation with fellow artisans and guild members.",
    detail: "Best for general questions",
  },
  {
    icon: Mail,
    title: "Direct Message",
    description: "Use the form below for private inquiries, partnerships, or support.",
    detail: "Best for private matters",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-parchment-200 uppercase tracking-wide">Contact</h1>
        <p className="text-sm text-tavern-border-glow mt-2">Reach out to the guild council — we&apos;re here to help.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {CONTACT_CHANNELS.map((channel) => (
          <Card key={channel.title} variant="dark" className="p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-3">
              <channel.icon className="w-5 h-5 text-gold-400" />
            </div>
            <h3 className="font-heading text-xs font-bold text-parchment-200 uppercase tracking-wide">{channel.title}</h3>
            <p className="text-[11px] text-parchment-500 mt-1">{channel.description}</p>
            <p className="text-[10px] text-tavern-border-glow mt-2">{channel.detail}</p>
          </Card>
        ))}
      </div>

      <h2 className="font-heading text-lg font-bold text-parchment-200 uppercase tracking-wide mb-4">Send a Message</h2>
      <ContactForm />
    </div>
  );
}
