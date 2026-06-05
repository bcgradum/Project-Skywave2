"use client";
import { useState } from "react";
import { Video, Upload, Sparkles } from "lucide-react";
import { fmtRel } from "@/lib/utils";
import { MOCK_VIDEO_JOBS } from "@/lib/mock-data";

const SAMPLE_BRIEF = `EDIT BRIEF — 3 short clips from this transcript

CLIP 1 (32s)
HOOK LINE: "Most people set prices backward."
START → END: 0:18 → 0:50
CAPTION HOT SPOTS: emphasize "$7" and "$700"
HASHTAGS: #pricing #creator #money

CLIP 2 (28s)
HOOK LINE: "I undercharged by $4,700 once."
START → END: 1:42 → 2:10
CAPTION HOT SPOTS: numbers in bright yellow

CLIP 3 (47s)
HOOK LINE: "The DM that 10x'd my pricing"
START → END: 3:05 → 3:52
CAPTION HOT SPOTS: full-screen quote at 3:18

DEAD TIME TO CUT
0:08-0:18, 1:15-1:42, 2:34-3:05`;

export function VideoEditor() {
  const [src, setSrc] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  function run() {
    setLoading(true);
    setTimeout(() => { setOut(SAMPLE_BRIEF); setLoading(false); }, 1100);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-1 flex items-center gap-2">
        <Video className="text-accent-glow" /> Video Editor
      </h1>
      <p className="text-text-muted text-sm mb-6">Trained on YOUR winners. Briefs + Railway pipeline that clips raw long-form.</p>

      <div className="card mb-4">
        <div className="text-xs font-semibold text-text-muted mb-3">UPLOAD LONG-FORM VIDEO</div>
        <label className="block border-2 border-dashed border-line-strong rounded-xl p-8 text-center cursor-pointer hover:border-accent transition">
          <Upload className="mx-auto text-text-dim mb-2" />
          <div className="text-sm text-text-muted">Drop a video file or click to browse</div>
          <div className="text-[11px] text-text-dim mt-1">Railway worker auto-processes with your style fingerprint</div>
        </label>
      </div>

      <div className="card mb-4">
        <div className="text-xs font-semibold text-text-muted mb-3">QUICK BRIEF (paste transcript)</div>
        <textarea value={src} onChange={(e) => setSrc(e.target.value)} placeholder="Paste transcript / footage notes…" className="field-input min-h-[100px] mb-3" />
        <button onClick={run} disabled={loading} className="btn-primary">
          {loading ? "Thinking…" : (<><Sparkles size={14} /> Generate Brief</>)}
        </button>
        {out && <div className="mt-4 card-glow text-sm whitespace-pre-wrap">{out}</div>}
      </div>

      <div className="card">
        <div className="text-xs font-semibold text-text-muted mb-3">RECENT VIDEO JOBS</div>
        <div className="space-y-2">
          {MOCK_VIDEO_JOBS.map(j => (
            <div key={j.id} className="flex justify-between items-center text-xs py-2 border-b border-line last:border-0">
              <div>
                <div className="font-mono text-[11px] text-text-dim">{j.filename}</div>
                <div className="text-text-muted">{fmtRel(j.createdAt)}</div>
              </div>
              <span className={`chip ${j.status === "done" ? "text-good" : ""}`}>{j.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
