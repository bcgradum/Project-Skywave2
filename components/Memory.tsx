"use client";
import { useState, useMemo } from "react";
import { Search, X, Link2, Sparkles } from "lucide-react";
import { cn, fmtRel } from "@/lib/utils";
import { MOCK_MEMORIES, MockMemory } from "@/lib/mock-data";

const TYPE_META: Record<string, { icon: string; label: string; color: string }> = {
  vault: { icon: "◇", label: "Winner", color: "text-mem-vault" },
  wizard: { icon: "✦", label: "Strategy", color: "text-mem-wizard" },
  creator: { icon: "◐", label: "Creator Intel", color: "text-mem-creator" },
  hook: { icon: "✎", label: "Hook", color: "text-mem-hook" },
  idea: { icon: "○", label: "Idea", color: "text-mem-idea" },
  swipe: { icon: "⤵", label: "Swipe", color: "text-mem-swipe" },
  story: { icon: "♻", label: "Story", color: "text-mem-story" },
  note: { icon: "≡", label: "Note", color: "text-mem-note" },
  brief: { icon: "▶", label: "Brief", color: "text-mem-brief" },
  thumbnail: { icon: "▤", label: "Thumb", color: "text-mem-thumbnail" },
};

export function Memory() {
  const [q, setQ] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [open, setOpen] = useState<MockMemory | null>(null);

  const typeCounts = useMemo(() => {
    const c: Record<string, number> = {};
    MOCK_MEMORIES.forEach(m => { c[m.type] = (c[m.type] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    let list = MOCK_MEMORIES;
    if (typeFilter) list = list.filter(m => m.type === typeFilter);
    if (q) {
      const lower = q.toLowerCase();
      list = list.filter(m => m.title.toLowerCase().includes(lower) || m.body.toLowerCase().includes(lower) || m.tags.some(t => t.toLowerCase().includes(lower)));
    }
    return list;
  }, [q, typeFilter]);

  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Second Brain <span className="text-text-dim font-medium text-sm">— {MOCK_MEMORIES.length} memories</span></h1>
          <p className="text-text-muted text-sm mt-1">Hybrid memory. Auto-tagged, auto-linked, semantically searchable.</p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="flex gap-3 items-center">
          <Search size={16} className="text-text-dim" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title, body, tags…" className="flex-1 bg-transparent outline-none text-sm placeholder-text-dim" />
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="bg-bg-elev border border-line rounded-md text-xs px-2 py-1 outline-none">
            <option value="">All types</option>
            {Object.entries(TYPE_META).map(([k, v]) => (<option key={k} value={k}>{v.icon} {v.label} ({typeCounts[k] || 0})</option>))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
        {Object.entries(TYPE_META).map(([k, v]) => (
          <button key={k} onClick={() => setTypeFilter(typeFilter === k ? "" : k)} className={cn("card p-3 text-left transition", typeFilter === k && "card-glow")}>
            <div className={cn("text-lg mb-1", v.color)}>{v.icon}</div>
            <div className="text-xs font-semibold">{v.label}</div>
            <div className="text-[11px] text-text-dim">{typeCounts[k] || 0}</div>
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map(m => (
          <button key={m.id} onClick={() => setOpen(m)} className="card w-full text-left hover:border-accent/30 transition cursor-pointer">
            <div className="flex justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn("text-base", TYPE_META[m.type]?.color)}>{TYPE_META[m.type]?.icon}</span>
                  <span className="font-semibold text-sm truncate">{m.title}</span>
                </div>
                <p className="text-text-muted text-xs line-clamp-2">{m.summary || m.body.slice(0, 220)}</p>
                <div className="flex gap-1 mt-2 flex-wrap">
                  {m.tags.slice(0, 4).map(t => <span key={t} className="chip">{t}</span>)}
                  {m.links.length > 0 && <span className="chip-accent"><Link2 size={10} /> {m.links.length}</span>}
                </div>
              </div>
              <div className="text-[11px] text-text-dim whitespace-nowrap">{fmtRel(m.createdAt)}</div>
            </div>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setOpen(null)}>
          <div className="bg-bg-surface border border-line rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between p-5 border-b border-line">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn("text-xl", TYPE_META[open.type]?.color)}>{TYPE_META[open.type]?.icon}</span>
                  <div className="font-bold text-base">{open.title}</div>
                </div>
                <div className="text-text-dim text-xs">{TYPE_META[open.type]?.label} · {fmtRel(open.createdAt)}</div>
              </div>
              <button onClick={() => setOpen(null)} className="btn-ghost btn-sm"><X size={14} /></button>
            </div>
            <div className="p-5 space-y-4">
              {open.summary && (
                <div className="card-glow text-sm">
                  <Sparkles size={12} className="inline mr-1 text-accent-glow" />
                  <b>AI summary:</b> {open.summary}
                </div>
              )}
              <div>
                <div className="text-xs font-semibold text-text-muted mb-2">BODY</div>
                <div className="text-sm whitespace-pre-wrap">{open.body}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-text-muted mb-2">TAGS</div>
                <div className="flex gap-1 flex-wrap">{open.tags.map(t => <span key={t} className="chip">#{t}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
