"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: "", email: "", subject: "", message: "" };

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Bug Report",
  "Feature Request",
  "Guild Support",
  "Quest Dispute",
  "Partnership",
];

const inputClass =
  "w-full bg-tavern-bg border border-tavern-border rounded-lg px-3 py-2 text-sm text-parchment-300 placeholder:text-tavern-border-glow/60 focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600/30 transition-colors";

const selectClass =
  "w-full bg-tavern-bg border border-tavern-border rounded-lg px-3 py-2 text-sm text-parchment-300 focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600/30 transition-colors appearance-none";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!validateEmail(form.email)) next.email = "Enter a valid email address";
    if (!form.subject) next.subject = "Select a subject";
    if (!form.message.trim()) next.message = "Message is required";
    else if (form.message.trim().length < 10) next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setState("submitting");
    // Simulate submission — will be replaced with a real API route later
    setTimeout(() => {
      setState("success");
      setForm(INITIAL_FORM);
    }, 1200);
  }

  if (state === "success") {
    return (
      <Card variant="featured" className="p-8 text-center">
        <CheckCircle className="w-10 h-10 text-gold-400 mx-auto mb-3" />
        <h2 className="font-heading text-lg font-bold text-parchment-200 mb-2">Message Sent</h2>
        <p className="text-sm text-parchment-500 mb-4">
          Your message has been received. We&apos;ll respond as soon as we can.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setState("idle")}>
          Send Another
        </Button>
      </Card>
    );
  }

  return (
    <Card variant="dark" className="p-6">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-medium text-parchment-400 mb-1">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="e.g. Master Artisan"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={inputClass}
            autoComplete="name"
          />
          {errors.name && <p className="text-xs text-ember-400 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-medium text-parchment-400 mb-1">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="artisan@guild.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={inputClass}
            autoComplete="email"
          />
          {errors.email && <p className="text-xs text-ember-400 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-xs font-medium text-parchment-400 mb-1">
            Subject
          </label>
          <select
            id="contact-subject"
            value={form.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>Select a subject…</option>
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.subject && <p className="text-xs text-ember-400 mt-1">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-medium text-parchment-400 mb-1">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Describe your inquiry…"
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className={`${inputClass} resize-y min-h-[100px]`}
          />
          {errors.message && <p className="text-xs text-ember-400 mt-1">{errors.message}</p>}
        </div>

        <Button type="submit" variant="primary" className="w-full" disabled={state === "submitting"}>
          <Send className="w-4 h-4 mr-2" />
          {state === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </Card>
  );
}
