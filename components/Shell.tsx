"use client";
import { ReactNode, useState } from "react";
import {
  Command, Sparkles, Zap, Star, FileText, Video, Image as ImageIcon,
  Brain, Library, Database, Network, Settings as SettingsIcon, Plus, Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { QuickCapture } from "./QuickCapture";

export type Route =
  | "command" | "pipeline" | "opportunities"
  | "copywriter" | "video" | "thumbnail"
  | "creators" | "vault" | "wizard" | "patterns"
  | "memory" | "constellation" | "library" | "settings";

const NAV_GROUPS: Array<{ label: string; items: Array<{ id: Route; label: string; icon: any }> }> = [
  { label: "Daily", items: [
    { id: "command", label: "Command", icon: Command },
    { id: "pipeline", label: "Pipeline", icon: Zap },
    { id: "opportunities", label: "Opportunities", icon: Star },
  ]},
  { label: "Create", items: [
    { id: "copywriter", label: "Copywriter", icon: FileText },
    { id: "video", label: "Video Editor", icon: Video },
    { id: "thumbnail", label: "Thumbnails", icon: ImageIcon },
  ]},
  { label: "Intelligence", items: [
    { id: "wizard", label: "The Wizard", icon: Sparkles },
    { id: "creators", label: "Creator Intel", icon: Brain },
    { id: "vault", label: "Knowledge Vault", icon: Database },
    { id: "patterns", label: "Pattern Engine", icon: Activity },
  ]},
  { label: "Memory", items: [
    { id: "memory", label: "Second Brain", icon: Brain },
    { id: "constellation", label: "Constellation", icon: Network },
    { id: "library", label: "Library", icon: Library },
  ]},
];

export function Shell({ route, onNavigate, children }: { route: Route; onNavigate: (r: Route) => void; children: ReactNode }) {
  const [captureOpen, setCaptureOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-60 bg-bg-surface/60 backdrop-blur-xl border-r border-line flex-col p-3 overflow-y-auto">
        <div className="flex items-center gap-2 px-2 py-3 mb-2 cursor-pointer" onClick={() => onNavigate("command")}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center font-extrabold text-white text-sm">S</div>
          <div>
            <div className="font-bold text-sm tracking-tight skywave-mark">SKYWAVE</div>
            <div className="text-[10px] uppercase tracking-widest text-text-dim font-semibold">Media OS</div>
          </div>
        </div>

        {NAV_GROUPS.map((group) => (
          <div key={group.label} className="mb-3">
            <div className="nav-label">{group.label}</div>
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} onClick={() => onNavigate(item.id)} className={cn("nav-item text-sm", route === item.id && "nav-item-active")}>
                  <Icon size={16} />
                  {item.label}
                </div>
              );
            })}
          </div>
        ))}

        <div className="mt-auto pt-3 border-t border-line">
          <div onClick={() => onNavigate("settings")} className={cn("nav-item text-sm", route === "settings" && "nav-item-active")}>
            <SettingsIcon size={16} /> Settings
          </div>
        </div>

        <button onClick={() => setCaptureOpen(true)} className="btn-primary mt-3 w-full">
          <Plus size={14} /> Quick Capture
        </button>
      </aside>

      <main className="md:pl-60 pb-24 md:pb-0">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6">{children}</div>
      </main>

      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-bg-surface/90 backdrop-blur-xl border-t border-line z-30">
        <div className="grid grid-cols-5">
          {[
            { id: "command", label: "Home", icon: Command },
            { id: "memory", label: "Brain", icon: Brain },
            { id: "wizard", label: "Wizard", icon: Sparkles },
            { id: "pipeline", label: "Pipeline", icon: Zap },
            { id: "settings", label: "More", icon: SettingsIcon },
          ].map((item) => {
            const Icon = item.icon;
            const active = route === item.id;
            return (
              <button key={item.id} onClick={() => onNavigate(item.id as Route)} className={cn("flex flex-col items-center gap-1 py-3 text-[10px] font-semibold transition-colors", active ? "text-accent-glow" : "text-text-dim")}>
                <Icon size={20} /> {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <button onClick={() => setCaptureOpen(true)} className="md:hidden fixed bottom-20 right-4 w-14 h-14 rounded-full bg-accent text-white shadow-glow z-40 flex items-center justify-center active:scale-95 transition-transform" aria-label="Quick Capture">
        <Plus size={24} />
      </button>

      {captureOpen && <QuickCapture onClose={() => setCaptureOpen(false)} />}
    </div>
  );
}
