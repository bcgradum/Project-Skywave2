"use client";
import { Brain, Plus } from "lucide-react";
import { MOCK_CREATORS } from "@/lib/mock-data";

export function Creators() {
  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Brain className="text-accent-glow" /> Creator Intelligence
          </h1>
          <p className="text-text-muted text-sm mt-1">Study top creators. Extract hooks, formats, trends.</p>
        </div>
        <button className="btn-primary"><Plus size={14} /> Add Creator</button>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {MOCK_CREATORS.map(c => (
          <div key={c.id} className="card">
            <div className="font-semibold">{c.name}</div>
            <div className="text-xs text-text-dim">{c.handle} · {c.platform}</div>
            <p className="text-xs text-text-muted mt-2">{c.notes}</p>
            <div className="flex gap-2 mt-3">
              <button className="btn-sm">Analyze hooks</button>
              <button className="btn-sm">Generate similar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
