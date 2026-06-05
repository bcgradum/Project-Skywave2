"use client";
import { Plus } from "lucide-react";
import { fmtRel } from "@/lib/utils";
import { MOCK_PIPELINE } from "@/lib/mock-data";

const STAGES = ["Idea", "Script", "Record", "Edit", "Thumbnail", "Posted", "Review"];

export function Pipeline() {
  const grouped: Record<string, typeof MOCK_PIPELINE> = {};
  STAGES.forEach(s => { grouped[s] = []; });
  MOCK_PIPELINE.forEach(p => { grouped[p.stage]?.push(p); });

  return (
    <div>
      <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Pipeline</h1>
          <p className="text-text-muted text-sm mt-1">Idea → Script → Record → Edit → Thumbnail → Posted → Review</p>
        </div>
        <button className="btn-primary"><Plus size={14} /> New Piece</button>
      </div>

      <div className="overflow-x-auto pb-3">
        <div className="grid grid-cols-7 gap-2 min-w-[1000px]">
          {STAGES.map(stage => (
            <div key={stage} className="bg-bg-elev/40 rounded-lg p-2 min-h-[200px]">
              <div className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-2 flex justify-between items-center px-1">
                {stage} <span className="chip">{grouped[stage].length}</span>
              </div>
              <div className="space-y-1.5">
                {grouped[stage].map(item => (
                  <div key={item.id} className="card text-left hover:border-accent/30 transition p-2.5 cursor-pointer">
                    <div className="font-semibold text-xs leading-tight mb-1">{item.title}</div>
                    <div className="text-[10px] text-text-dim flex justify-between">
                      <span>{fmtRel(item.createdAt)}</span>
                      <span>{item.platforms.slice(0, 2).join(",")}</span>
                    </div>
                  </div>
                ))}
                {grouped[stage].length === 0 && <div className="text-center text-text-dim text-[10px] py-3">empty</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
