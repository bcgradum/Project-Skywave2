# Project Skywave — Visual Demo

A fully-visual demo of Project Skywave. All 13 modules render with realistic mock data. No backend. No auth. No env vars. Pure frontend.

## What this is

The dashboard you can SEE — Wizard, Memory, Constellation (3D graph), Pipeline, Vault, Creators, Copywriter, Video Editor, Thumbnail Studio, Opportunities, Patterns, Library, Settings.

Click around. Test the UX. Screenshot it. Show it to people. Once you love it, we wire in real Supabase + AI backend.

## Stack

- **Next.js 15** + React 19 (App Router)
- **Tailwind CSS** (dark mode native)
- **Lucide React** icons
- **Canvas 2D** for the Constellation 3D graph (no Three.js needed)

That's it. No database, no AI SDKs, no env vars.

## Deploy to Railway (5 minutes)

1. Push this folder to your new GitHub repo
2. Railway → New Project → Deploy from GitHub repo → pick the repo
3. Railway detects the Dockerfile, builds, deploys
4. Generate domain → open the URL → you're in

**No environment variables needed.** Build should succeed first try.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## File map

```
skywave-visual/
├── app/
│   ├── globals.css         # dark theme + Tailwind layers
│   ├── layout.tsx          # root layout
│   └── page.tsx            # client-side route map
├── components/             # all 14 components
│   ├── Shell.tsx           # sidebar (desktop) + bottom nav (mobile)
│   ├── QuickCapture.tsx    # capture modal with mic button
│   ├── CommandCenter.tsx
│   ├── Wizard.tsx          # Hormozi presets + sample answers
│   ├── Memory.tsx          # 30 sample memories with search
│   ├── Constellation.tsx   # 3D Canvas-based graph
│   ├── Pipeline.tsx        # Idea → Posted kanban
│   ├── Vault.tsx
│   ├── Creators.tsx
│   ├── Copywriter.tsx
│   ├── VideoEditor.tsx
│   ├── ThumbnailStudio.tsx
│   ├── LibraryView.tsx
│   ├── Opportunities.tsx
│   ├── Patterns.tsx
│   └── Settings.tsx
├── lib/
│   ├── utils.ts            # cn(), fmtRel(), fmtUSD()
│   └── mock-data.ts        # 30 memories, 8 pipeline items, vault, creators, sample AI outputs
├── Dockerfile              # Railway production build
├── railway.toml
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## What's next

Once you've used the visual version and decided what to keep/change, the next phase is:
1. Wire Supabase for real persistence
2. Wire Claude/Voyage/OpenAI/Groq for real AI
3. Add auth (magic link)
4. Connect the rendered images and video pipeline

Until then: enjoy the visual.
