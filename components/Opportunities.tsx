"use client";
import { Star, Sparkles } from "lucide-react";
import { fmtRel } from "@/lib/utils";
import { MOCK_OPPORTUNITIES } from "@/lib/mock-data";

export function Opportunities() {
  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Star className="text-accent-glow" /> Opportunity Feed
          </h1>
          <p className="text-text-muted text-sm mt-1">Create more without filming more. AI scans your library/vault for repurposes.</p>
        </div>
        <button className="btn-primary"><Sparkles size={14} /> Scan again</button>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {MOCK_OPPORTUNITIES.map(o => (
          <div key={o.id} className="card">
            <div className="flex justify-between items-start mb-2">
              <span className="chip-accent">{o.status}</span>
              <span className="text-[11px] text-text-dim">just now</span>
            </div>
            <div className="text-sm whitespace-pre-wrap leading-relaxed">{o.suggestion}</div>
            <div className="flex gap-2 mt-3">
              <button className="btn-sm">→ Pipeline</button>
              <button className="btn-ghost btn-sm">Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
