"use client";
import { useState } from "react";
import { Activity, Sparkles } from "lucide-react";
import { SAMPLE_PATTERN_REPORT } from "@/lib/mock-data";

export function Patterns() {
  const [out, setOut] = useState(SAMPLE_PATTERN_REPORT);
  const [loading, setLoading] = useState(false);

  function run() {
    setLoading(true);
    setOut("");
    setTimeout(() => { setOut(SAMPLE_PATTERN_REPORT); setLoading(false); }, 1100);
  }

  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Activity className="text-accent-glow" /> Pattern Engine
          </h1>
          <p className="text-text-muted text-sm mt-1">Cross-references Vault + Creator Intel → winning styles, hook trends, content gaps.</p>
        </div>
        <button onClick={run} disabled={loading} className="btn-primary">
          {loading ? "Analyzing…" : (<><Sparkles size={14} /> Run Pattern Analysis</>)}
        </button>
      </div>

      <div className="card">
        {loading ? (
          <div className="text-text-muted text-sm flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            Cross-referencing your Vault and Creator data…
          </div>
        ) : (
          <div className="text-sm whitespace-pre-wrap leading-relaxed">{out}</div>
        )}
      </div>
    </div>
  );
}
