"use client";
import { useState } from "react";
import { MOCK_PROFILE, MOCK_AI_SPEND } from "@/lib/mock-data";
import { fmtUSD } from "@/lib/utils";

export function Settings() {
  const [niche, setNiche] = useState(MOCK_PROFILE.niche);
  const [voice, setVoice] = useState(MOCK_PROFILE.voice);
  const [offer, setOffer] = useState(MOCK_PROFILE.offer);
  const [avatar, setAvatar] = useState(MOCK_PROFILE.avatar);
  const [goals, setGoals] = useState(MOCK_PROFILE.goals);
  const [platforms, setPlatforms] = useState(MOCK_PROFILE.platforms.join(", "));

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight mb-1">Settings</h1>
      <p className="text-text-muted text-sm mb-6">Tell Skywave who you are. Every prompt uses this as context.</p>

      <div className="card mb-4">
        <h2 className="font-semibold mb-3">Creator Profile</h2>
        <div className="space-y-3">
          <Row label="Niche"><input value={niche} onChange={(e) => setNiche(e.target.value)} className="field-input" /></Row>
          <Row label="Voice / Tone"><input value={voice} onChange={(e) => setVoice(e.target.value)} className="field-input" /></Row>
          <Row label="Current offer"><textarea value={offer} onChange={(e) => setOffer(e.target.value)} className="field-input min-h-[80px]" /></Row>
          <Row label="Target avatar"><input value={avatar} onChange={(e) => setAvatar(e.target.value)} className="field-input" /></Row>
          <Row label="90-day goals"><textarea value={goals} onChange={(e) => setGoals(e.target.value)} className="field-input min-h-[60px]" /></Row>
          <Row label="Platforms (comma)"><input value={platforms} onChange={(e) => setPlatforms(e.target.value)} className="field-input" /></Row>
        </div>
        <button className="btn-primary mt-4">Save Profile</button>
      </div>

      <div className="card mb-4">
        <h2 className="font-semibold mb-3">AI Spend</h2>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <div className="text-xs text-text-dim">Today</div>
            <div className="text-2xl font-bold">{fmtUSD(MOCK_AI_SPEND.todayUSD)}</div>
          </div>
          <div>
            <div className="text-xs text-text-dim">This month</div>
            <div className="text-2xl font-bold">{fmtUSD(MOCK_AI_SPEND.monthUSD)}</div>
          </div>
        </div>
        <div className="text-xs text-text-muted space-y-1">
          {Object.entries(MOCK_AI_SPEND.byProvider).map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="uppercase tracking-wider">{k}</span>
              <span>{fmtUSD(v)}</span>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-text-dim mt-3 pt-3 border-t border-line">Soft alerts at thresholds. Never blocks calls.</div>
      </div>

      <div className="card">
        <h2 className="font-semibold mb-2">About this build</h2>
        <p className="text-xs text-text-muted">This is the visual-only demo of Project Skywave. All data is mock. Backend wiring (Supabase + AI providers) comes in the next phase.</p>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-semibold text-text-muted block mb-1">{label}</label>
      {children}
    </div>
  );
}
