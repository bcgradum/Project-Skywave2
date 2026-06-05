"use client";
import { useState } from "react";
import { Sparkles, Send, Copy } from "lucide-react";
import { SAMPLE_WIZARD_ANSWERS } from "@/lib/mock-data";

const PRESETS = [
  { key: "audit-offer", label: "Audit My Offer", icon: "⚖" },
  { key: "grand-slam", label: "Build a Grand Slam Offer", icon: "★" },
  { key: "lead-plan", label: "30-Day Lead Gen Plan", icon: "➤" },
  { key: "money-model", label: "Design a Money Model", icon: "$" },
  { key: "price-critique", label: "Price Critique", icon: "₪" },
  { key: "hook-objection", label: "Kill an Objection", icon: "⊘" },
  { key: "content-angles", label: "Content Angles", icon: "◊" },
  { key: "weekly-sit", label: "Weekly Sit-Down", icon: "◉" },
];

const MOCK_MEMORIES_USED = ["The 3-second hook reel", "Audit My Offer: 6-week cohort", "Pricing carousel"];

export function Wizard() {
  const [question, setQuestion] = useState("");
  const [preset, setPreset] = useState<string | null>(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [memoriesUsed, setMemoriesUsed] = useState<string[]>([]);

  function run(presetKey?: string) {
    setLoading(true);
    setAnswer("");
    setPreset(presetKey || null);
    setTimeout(() => {
      const key = presetKey || "audit-offer";
      setAnswer(SAMPLE_WIZARD_ANSWERS[key] || SAMPLE_WIZARD_ANSWERS["audit-offer"]);
      setMemoriesUsed(MOCK_MEMORIES_USED);
      setLoading(false);
    }, 1200);
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Sparkles className="text-accent-glow" /> The Wizard
        </h1>
        <p className="text-text-muted text-sm mt-1">
          Hormozi-grounded strategic operator. Every answer pulls from your Second Brain.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
        {PRESETS.map(p => (
          <button key={p.key} onClick={() => run(p.key)} disabled={loading} className="card text-left hover:border-accent/30 transition disabled:opacity-50">
            <div className="text-lg mb-1">{p.icon}</div>
            <div className="text-sm font-semibold leading-tight">{p.label}</div>
          </button>
        ))}
      </div>

      <div className="card mb-6">
        <div className="text-xs font-semibold text-text-muted mb-2">ASK THE WIZARD (FREE-FORM)</div>
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="My open rate dropped from 42% to 18% last month. What's the diagnosis?" className="field-input min-h-[120px]" />
        <div className="flex gap-2 mt-3">
          <button onClick={() => run()} disabled={loading} className="btn-primary">
            {loading ? "Thinking…" : (<><Send size={14} /> Consult</>)}
          </button>
          <button onClick={() => { setAnswer(""); setQuestion(""); setMemoriesUsed([]); }} className="btn-ghost">Clear</button>
        </div>
      </div>

      {(answer || loading) && (
        <div className="card animate-slide-up">
          <div className="text-xs font-semibold text-text-muted mb-3">ANSWER {preset && `· ${preset}`}</div>
          {loading ? (
            <div className="text-text-muted text-sm flex items-center gap-2">
              <div className="w-3 h-3 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              The Wizard is consulting your second brain…
            </div>
          ) : (
            <>
              <div className="text-sm whitespace-pre-wrap leading-relaxed">{answer}</div>
              {memoriesUsed.length > 0 && (
                <div className="mt-4 pt-3 border-t border-line">
                  <div className="text-[10px] uppercase tracking-widest text-text-dim font-bold mb-2">📎 Memories used</div>
                  <div className="flex flex-wrap gap-1">
                    {memoriesUsed.map((m, i) => (
                      <span key={i} className="chip-accent">{m}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <button onClick={() => navigator.clipboard.writeText(answer)} className="btn-ghost btn-sm"><Copy size={12} /> Copy</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
