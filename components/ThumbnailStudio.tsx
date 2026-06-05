"use client";
import { useState } from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";
import { MOCK_RENDERS } from "@/lib/mock-data";

const COLOR_PRESETS = [
  { name: "Yellow-Black", from: "#fbbf24", to: "#000000" },
  { name: "Purple-Yellow", from: "#a855f7", to: "#fbbf24" },
  { name: "Electric Blue", from: "#3b82f6", to: "#0a3fcc" },
];

export function ThumbnailStudio() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState<"1024x1024" | "1536x1024" | "1024x1536">("1536x1024");
  const [loading, setLoading] = useState(false);

  function run() {
    setLoading(true);
    setTimeout(() => { setLoading(false); setPrompt(""); }, 1200);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-1 flex items-center gap-2">
        <ImageIcon className="text-accent-glow" /> Thumbnail Studio
      </h1>
      <p className="text-text-muted text-sm mb-6">gpt-image-2 native. Claude optimizes your prompt; Supabase stores.</p>

      <div className="card mb-4">
        <div className="text-xs font-semibold text-text-muted mb-2">DESCRIBE THE THUMBNAIL</div>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Why 99% of creators quit at 1,000 followers. Bold face-forward, red text 'I QUIT', electric blue gradient." className="field-input min-h-[100px] mb-3" />
        <div className="grid grid-cols-3 gap-2 mb-3">
          {(["1536x1024", "1024x1024", "1024x1536"] as const).map(s => (
            <button key={s} onClick={() => setSize(s)} className={`btn-sm ${size === s ? "btn-primary" : ""}`}>{s}</button>
          ))}
        </div>
        <button onClick={run} disabled={!prompt.trim() || loading} className="btn-primary">
          {loading ? "Rendering…" : (<><Sparkles size={14} /> Optimize & Render</>)}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {MOCK_RENDERS.map((r, i) => {
          const preset = COLOR_PRESETS[i % COLOR_PRESETS.length];
          return (
            <div key={r.id} className="card overflow-hidden">
              <div className="w-full aspect-video rounded mb-2 flex items-center justify-center text-3xl font-extrabold text-white" style={{ background: `linear-gradient(135deg, ${preset.from} 0%, ${preset.to} 100%)` }}>
                {r.prompt.match(/'([^']+)'/)?.[1] || "SKYWAVE"}
              </div>
              <div className="text-xs text-text-muted line-clamp-2">{r.prompt}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
