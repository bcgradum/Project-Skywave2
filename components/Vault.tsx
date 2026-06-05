"use client";
import { Database, Plus } from "lucide-react";
import { MOCK_VAULT } from "@/lib/mock-data";

export function Vault() {
  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Database className="text-accent-glow" /> Knowledge Vault
          </h1>
          <p className="text-text-muted text-sm mt-1">Your top performers, AI-dissected. Compound your intelligence.</p>
        </div>
        <button className="btn-primary"><Plus size={14} /> Add Top Performer</button>
      </div>

      <div className="space-y-3">
        {MOCK_VAULT.map(v => (
          <div key={v.id} className="card">
            <div className="font-semibold">{v.title}</div>
            <div className="text-xs text-text-dim mb-3">{v.performance}</div>
            <div className="card-glow text-xs">
              <b>Lessons:</b>
              <div className="whitespace-pre-wrap mt-1">{v.lessons}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
