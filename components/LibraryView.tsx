"use client";
import { Library } from "lucide-react";

const MOCK_LIB = [
  { name: "Pricing podcast — Tuesday 30min", type: "video", tags: ["pricing", "source"] },
  { name: "B-roll: laptop close-ups", type: "video", tags: ["b-roll", "evergreen"] },
  { name: "Hormozi swipe deck (50 hooks)", type: "reference", tags: ["hormozi", "hooks"] },
  { name: "Cohort sales script v3", type: "script", tags: ["sales", "cohort"] },
  { name: "Brand guidelines — colors + fonts", type: "reference", tags: ["brand"] },
];

export function LibraryView() {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-1 flex items-center gap-2">
        <Library className="text-accent-glow" /> Content Library
      </h1>
      <p className="text-text-muted text-sm mb-6">Every asset, idea, project. Searchable. Never lose anything.</p>

      <div className="grid md:grid-cols-2 gap-3">
        {MOCK_LIB.map((a, i) => (
          <div key={i} className="card">
            <div className="font-semibold text-sm">{a.name}</div>
            <div className="flex gap-1 mt-2 flex-wrap">
              <span className="chip">{a.type}</span>
              {a.tags.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
