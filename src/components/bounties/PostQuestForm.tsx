"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { QUEST_CATEGORIES, DIFFICULTY_TIERS } from "@/lib/constants";
import { ScrollText, CheckCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success";

interface QuestForm {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  budget: string;
  deadline: string;
  skills: string;
}

const INITIAL: QuestForm = {
  title: "",
  description: "",
  category: QUEST_CATEGORIES[0],
  difficulty: DIFFICULTY_TIERS[0],
  budget: "",
  deadline: "",
  skills: "",
};

const inputClass =
  "w-full bg-tavern-surface border border-tavern-border rounded-lg px-4 py-2.5 text-sm text-parchment-300 placeholder:text-tavern-border-glow/60 focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600/30 transition-colors";

const selectClass =
  "w-full bg-tavern-surface border border-tavern-border rounded-lg px-4 py-2.5 text-sm text-parchment-300 focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600/30 transition-colors appearance-none";

export function PostQuestForm() {
  const [form, setForm] = useState<QuestForm>(INITIAL);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof QuestForm, string>>>({});

  function validate(): boolean {
    const next: Partial<Record<keyof QuestForm, string>> = {};
    if (!form.title.trim()) next.title = "Quest title is required";
    if (!form.description.trim()) next.description = "Description is required";
    else if (form.description.trim().length < 20) next.description = "Description must be at least 20 characters";
    if (!form.budget) next.budget = "Budget is required";
    else if (Number(form.budget) <= 0) next.budget = "Budget must be greater than 0";
    if (!form.deadline) next.deadline = "Deadline is required";
    if (!form.skills.trim()) next.skills = "At least one skill is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleChange(field: keyof QuestForm, value: string) {
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
    setTimeout(() => {
      setState("success");
    }, 1500);
  }

  if (state === "success") {
    return (
      <Card variant="featured" className="p-8 text-center">
        <CheckCircle className="w-10 h-10 text-gold-400 mx-auto mb-3" />
        <h2 className="font-heading text-lg font-bold text-parchment-200 mb-2">Quest Posted!</h2>
        <p className="text-sm text-parchment-500 mb-1">
          &ldquo;{form.title}&rdquo; has been added to the Quest Board.
        </p>
        <p className="text-xs text-tavern-border-glow mb-4">
          Artisans will begin applying soon.
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setForm(INITIAL);
            setState("idle");
          }}
        >
          Post Another Quest
        </Button>
      </Card>
    );
  }

  return (
    <Card variant="surface" className="p-6">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div>
          <label htmlFor="quest-title" className="block text-sm font-medium text-parchment-400 mb-2">Quest Title</label>
          <input
            id="quest-title"
            type="text"
            placeholder="e.g. Forge a Trading Platform"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className={inputClass}
          />
          {errors.title && <p className="text-xs text-ember-400 mt-1">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="quest-description" className="block text-sm font-medium text-parchment-400 mb-2">Description</label>
          <textarea
            id="quest-description"
            rows={4}
            placeholder="Describe what you need crafted..."
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className={`${inputClass} resize-y min-h-[100px]`}
          />
          {errors.description && <p className="text-xs text-ember-400 mt-1">{errors.description}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quest-category" className="block text-sm font-medium text-parchment-400 mb-2">Category</label>
            <select
              id="quest-category"
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className={selectClass}
            >
              {QUEST_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="quest-difficulty" className="block text-sm font-medium text-parchment-400 mb-2">Difficulty</label>
            <select
              id="quest-difficulty"
              value={form.difficulty}
              onChange={(e) => handleChange("difficulty", e.target.value)}
              className={selectClass}
            >
              {DIFFICULTY_TIERS.map((tier) => (
                <option key={tier} value={tier}>{tier}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quest-budget" className="block text-sm font-medium text-parchment-400 mb-2">Budget (Gold)</label>
            <input
              id="quest-budget"
              type="number"
              placeholder="500"
              min="0"
              value={form.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
              className={inputClass}
            />
            {errors.budget && <p className="text-xs text-ember-400 mt-1">{errors.budget}</p>}
          </div>
          <div>
            <label htmlFor="quest-deadline" className="block text-sm font-medium text-parchment-400 mb-2">Deadline</label>
            <input
              id="quest-deadline"
              type="date"
              value={form.deadline}
              onChange={(e) => handleChange("deadline", e.target.value)}
              className={selectClass}
            />
            {errors.deadline && <p className="text-xs text-ember-400 mt-1">{errors.deadline}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="quest-skills" className="block text-sm font-medium text-parchment-400 mb-2">Required Skills</label>
          <input
            id="quest-skills"
            type="text"
            placeholder="e.g. React, TypeScript, UI/UX"
            value={form.skills}
            onChange={(e) => handleChange("skills", e.target.value)}
            className={inputClass}
          />
          {errors.skills && <p className="text-xs text-ember-400 mt-1">{errors.skills}</p>}
          <p className="text-[10px] text-tavern-border-glow mt-1">Separate skills with commas</p>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={state === "submitting"}>
          <ScrollText className="w-5 h-5" />
          {state === "submitting" ? "Posting Quest…" : "Post Quest to the Board"}
        </Button>
      </form>
    </Card>
  );
}
