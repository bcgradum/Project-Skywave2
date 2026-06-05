"use client";
import { useState } from "react";
import { Mic, X, Sparkles } from "lucide-react";

const TYPES = [
  { value: "note", label: "Note", icon: "≡" },
  { value: "idea", label: "Idea", icon: "○" },
  { value: "hook", label: "Hook", icon: "✎" },
  { value: "swipe", label: "Swipe", icon: "⤵" },
  { value: "story", label: "Story", icon: "♻" },
  { value: "vault", label: "Winner", icon: "◇" },
];

export function QuickCapture({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState("note");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-3 animate-fade-in">
      <div className="bg-bg-surface border border-line rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b border-line">
          <div className="font-bold flex items-center gap-2">
            <Sparkles size={16} className="text-accent-glow" /> Quick Capture
          </div>
          <button onClick={onClose} className="btn-ghost btn-sm"><X size={14} /></button>
        </div>
        <div className="p-5 space-y-3">
          <div className="grid grid-cols-6 gap-1.5">
            {TYPES.map((t) => (
              <button key={t.value} onClick={() => setType(t.value)} className={`p-2 rounded-lg border text-center transition ${type === t.value ? "border-accent bg-accent-soft text-accent-glow" : "border-line bg-bg-elev hover:border-line-strong"}`}>
                <div className="text-base mb-0.5">{t.icon}</div>
                <div className="text-[10px] font-semibold">{t.label}</div>
              </button>
            ))}
          </div>

          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title (one line)" className="field-input" />

          <div className="relative">
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="The substance. Or tap mic to speak it." className="field-input min-h-[140px] pr-12" />
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-accent text-white shadow-glow" aria-label="Voice capture">
              <Mic size={16} />
            </button>
          </div>

          <div className="text-[11px] text-text-dim">Demo mode — captures don't persist. We'll wire this up next.</div>
        </div>
        <div className="flex justify-end gap-2 p-4 border-t border-line bg-bg-elev/50">
          <button onClick={onClose} className="btn-ghost">Cancel</button>
          <button onClick={onClose} className="btn-primary" disabled={!title.trim() || !body.trim()}>Capture</button>
        </div>
      </div>
    </div>
  );
}
