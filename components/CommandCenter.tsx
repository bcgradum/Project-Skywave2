"use client";
import { useState } from "react";
import { Zap, DollarSign, Brain, Star, Send } from "lucide-react";
import { MOCK_PIPELINE, MOCK_MEMORIES, MOCK_TASKS, MOCK_AI_SPEND, MOCK_OPPORTUNITIES, SAMPLE_DAILY_BRIEF } from "@/lib/mock-data";
import { fmtUSD } from "@/lib/utils";

export function CommandCenter() {
  const [brief, setBrief] = useState("");
  const [loading, setLoading] = useState(false);

  const inProd = MOCK_PIPELINE.filter(p => !["Posted", "Review"].includes(p.stage)).length;
  const posted = MOCK_PIPELINE.filter(p => p.stage === "Posted").length;
  const review = MOCK_PIPELINE.filter(p => p.stage === "Review").length;
  const openTasks = MOCK_TASKS.filter(t => !t.done).length;
  const opps = MOCK_OPPORTUNITIES.length;

  function generateBrief() {
    setLoading(true);
    setTimeout(() => { setBrief(SAMPLE_DAILY_BRIEF); setLoading(false); }, 900);
  }

  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Command Center</h1>
          <p className="text-text-muted text-sm mt-1">What to work on, what to post, what to finish — right now.</p>
        </div>
        <button onClick={generateBrief} disabled={loading} className="btn-primary">
          {loading ? "Thinking…" : (<><Send size={14} /> Daily Brief</>)}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Kpi icon={<Zap className="text-accent-glow" size={18} />} label="In Production" value={inProd} sub={`${posted} posted · ${review} in review`} />
        <Kpi icon={<Star className="text-mem-idea" size={18} />} label="Opportunities" value={opps} sub="Live, ready to ship" />
        <Kpi icon={<Brain className="text-mem-wizard" size={18} />} label="Memories" value={MOCK_MEMORIES.length} sub={`${openTasks} open tasks`} />
        <Kpi icon={<DollarSign className="text-good" size={18} />} label="AI spend (30d)" value={fmtUSD(MOCK_AI_SPEND.monthUSD)} sub="Soft-alert tracking" valueIsText />
      </div>

      <div className="card">
        <div className="text-xs font-semibold text-text-muted mb-3">DAILY BRIEF</div>
        {brief ? (
          <div className="text-sm whitespace-pre-wrap leading-relaxed">{brief}</div>
        ) : loading ? (
          <div className="text-text-muted text-sm flex items-center gap-2">
            <div className="w-3 h-3 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            Composing your day…
          </div>
        ) : (
          <div className="text-text-muted text-sm">Press <b className="text-text">Daily Brief</b> for AI-recommended next moves.</div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="card">
          <div className="text-xs font-semibold text-text-muted mb-3">OPEN TASKS</div>
          <div className="space-y-2">
            {MOCK_TASKS.filter(t => !t.done).map(t => (
              <div key={t.id} className="flex justify-between items-center text-sm">
                <span>{t.title}</span>
                {t.dueDate && <span className="chip">{t.dueDate}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="text-xs font-semibold text-text-muted mb-3">TOP OPPORTUNITIES</div>
          <div className="space-y-2">
            {MOCK_OPPORTUNITIES.slice(0, 3).map(o => (
              <div key={o.id} className="text-xs leading-relaxed">
                <span className="chip-accent mr-1">{o.suggestion.split("—")[0].trim()}</span>
                {o.suggestion.split("—").slice(1).join("—").slice(0, 100)}…
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ icon, label, value, sub, valueIsText }: { icon: React.ReactNode; label: string; value: string | number; sub: string; valueIsText?: boolean }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-2">
        {icon}
        <span className="text-[10px] uppercase tracking-widest text-text-dim font-bold">{label}</span>
      </div>
      <div className={valueIsText ? "text-xl font-bold" : "text-3xl font-bold tracking-tight"}>{value}</div>
      <div className="text-[11px] text-text-dim mt-1">{sub}</div>
    </div>
  );
}
