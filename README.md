# The Open Guild OS

A freelancing platform built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: Cinzel (headings), Inter (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Route pages (tavern, quest-board, guild-hall, etc.)
├── components/       # Reusable components (layout, ui, tavern, quest)
├── data/             # Mock data (quests, guilds, artisans, events)
├── lib/              # Utilities (cn, formatGold, color helpers)
└── types/            # TypeScript type definitions
```

## Deployment

Deploy to Vercel with zero configuration:

```bash
npx vercel
```

## License

MIT
