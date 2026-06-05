"use client";
import { useState } from "react";
import { FileText, Send, Copy } from "lucide-react";

const SAMPLE_HOOKS = `1. 99% of creators quit at 1,000 followers — here's why.
2. I almost quit at 1,000. Then this happened.
3. The brutal truth about why you'll quit at 1,000.
4. Your followers don't matter at 1,000. THIS does.
5. 1,000 followers is where dreams die. Here's how to survive.

STRONGEST: #1 — specific stat (99%), the at-1,000 milestone is universally felt by anyone in the early grind, and "here's why" promises payoff. Test against #3 (curiosity vs threat).`;

export function Copywriter() {
  const [type, setType] = useState("hooks");
  const [topic, setTopic] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  function run() {
    setLoading(true);
    setTimeout(() => {
      setOut(SAMPLE_HOOKS);
      setLoading(false);
    }, 900);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-1 flex items-center gap-2">
        <FileText className="text-accent-glow" /> Organic Copywriter
      </h1>
      <p className="text-text-muted text-sm mb-6">Hooks, scripts, captions, titles, CTAs. Grounded in your voice corpus.</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="card space-y-3">
          <div>
            <label className="text-xs font-semibold text-text-muted block mb-1">Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="field-input">
              <option value="hooks">Hooks (5 variants)</option>
              <option value="script">60s short-form script</option>
              <option value="captions">Caption pack (3 lengths)</option>
              <option value="titles">Titles (8 variants)</option>
              <option value="cta">CTAs (5 styles)</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-text-muted block mb-1">Topic / Idea</label>
            <textarea value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="What is this piece about? Be specific." className="field-input min-h-[100px]" />
          </div>
          <button onClick={run} disabled={loading} className="btn-primary w-full">
            {loading ? "Generating…" : (<><Send size={14} /> Generate</>)}
          </button>
        </div>

        <div className="card">
          <div className="text-xs font-semibold text-text-muted mb-3">OUTPUT</div>
          {out ? (
            <>
              <div className="text-sm whitespace-pre-wrap leading-relaxed">{out}</div>
              <button onClick={() => navigator.clipboard.writeText(out)} className="btn-ghost btn-sm mt-3"><Copy size={12} /> Copy</button>
            </>
          ) : (
            <div className="text-text-muted text-sm">Output appears here. Edit before saving.</div>
          )}
        </div>
      </div>
    </div>
  );
}
