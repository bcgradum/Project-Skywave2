"use client";
import { useEffect, useRef } from "react";
import { MOCK_MEMORIES } from "@/lib/mock-data";

const COLORS: Record<string, string> = {
  vault: "#10b981", wizard: "#a855f7", creator: "#f97316", hook: "#3b82f6",
  idea: "#fbbf24", swipe: "#ec4899", story: "#14b8a6", note: "#94a3b8",
  brief: "#06b6d4", thumbnail: "#f59e0b",
};

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<{ raf: number } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const tip = tipRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    type Node = { id: string; mem: any; x: number; y: number; z: number; vx: number; vy: number; vz: number; color: string; size: number; pulse: number };
    const nodes: Node[] = MOCK_MEMORIES.map(m => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 220 + Math.random() * 70;
      return {
        id: m.id, mem: m,
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        vx: 0, vy: 0, vz: 0,
        color: COLORS[m.type] || "#fff",
        size: 4 + Math.min(7, m.links.length * 1.5),
        pulse: Math.random() * Math.PI * 2,
      };
    });

    const idx: Record<string, Node> = {};
    nodes.forEach(n => { idx[n.id] = n; });
    const edges: Array<{ a: Node; b: Node }> = [];
    MOCK_MEMORIES.forEach(m => {
      m.links.forEach(oid => {
        if (m.id < oid && idx[oid]) edges.push({ a: idx[m.id], b: idx[oid] });
      });
    });

    // Force layout
    const N = nodes.length;
    for (let it = 0; it < 180; it++) {
      for (let i = 0; i < N; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < N; j++) {
          const b = nodes[j];
          const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
          const d2 = dx * dx + dy * dy + dz * dz + 1;
          const d = Math.sqrt(d2);
          const f = 6500 / d2;
          const fx = (dx / d) * f, fy = (dy / d) * f, fz = (dz / d) * f;
          a.vx -= fx; a.vy -= fy; a.vz -= fz;
          b.vx += fx; b.vy += fy; b.vz += fz;
        }
      }
      edges.forEach(e => {
        const dx = e.b.x - e.a.x, dy = e.b.y - e.a.y, dz = e.b.z - e.a.z;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz) + 0.001;
        const f = (d - 90) * 0.035;
        const fx = (dx / d) * f, fy = (dy / d) * f, fz = (dz / d) * f;
        e.a.vx += fx; e.a.vy += fy; e.a.vz += fz;
        e.b.vx -= fx; e.b.vy -= fy; e.b.vz -= fz;
      });
      nodes.forEach(n => {
        n.vx -= n.x * 0.004; n.vy -= n.y * 0.004; n.vz -= n.z * 0.004;
        n.vx *= 0.82; n.vy *= 0.82; n.vz *= 0.82;
        n.x += n.vx * 0.1; n.y += n.vy * 0.1; n.z += n.vz * 0.1;
      });
    }

    const stars = Array.from({ length: 140 }, () => ({
      x: (Math.random() - 0.5) * 1600,
      y: (Math.random() - 0.5) * 1600,
      z: (Math.random() - 0.5) * 1600,
      b: Math.random() * 0.5 + 0.1,
    }));

    let rotY = 0, rotX = 0.25, zoom = 1;
    let dragging = false, dragLastT = 0;
    let lastX = 0, lastY = 0;
    let mouseX = 0, mouseY = 0, hasMouse = false;
    let hovered: { n: Node; px: number; py: number } | null = null;

    function hexA(hex: string, a: number) {
      const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${a})`;
    }

    function project(x: number, y: number, z: number) {
      const cy = Math.cos(rotY), sy = Math.sin(rotY);
      const x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
      const cx = Math.cos(rotX), sx = Math.sin(rotX);
      const y1 = y * cx - z1 * sx, z2 = y * sx + z1 * cx;
      const scale = (900 / (900 - z2)) * zoom;
      const rect = canvas.getBoundingClientRect();
      return { x: rect.width / 2 + x1 * scale, y: rect.height / 2 + y1 * scale, z: z2, scale };
    }

    let t = 0;
    function frame() {
      t += 0.012;
      const sinceDrag = (performance.now() - dragLastT) / 1000;
      if (!dragging && sinceDrag > 2) rotY += 0.0022;
      const rect = canvas.getBoundingClientRect();

      const grad = ctx!.createRadialGradient(rect.width * 0.3, rect.height * 0.2, 0, rect.width * 0.5, rect.height * 0.5, Math.max(rect.width, rect.height));
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.3);
      grad.addColorStop(0, `rgba(20,30,60,${0.3 + pulse * 0.15})`);
      grad.addColorStop(0.6, "rgba(5,8,20,1)");
      grad.addColorStop(1, "rgba(2,3,16,1)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, rect.width, rect.height);

      ctx!.fillStyle = "#fff";
      stars.forEach(s => {
        const p = project(s.x, s.y, s.z);
        if (p.scale < 0.1) return;
        ctx!.globalAlpha = s.b * Math.min(1, p.scale * 0.6);
        ctx!.fillRect(p.x, p.y, 1, 1);
      });
      ctx!.globalAlpha = 1;

      const projected = nodes.map(n => ({ n, p: project(n.x, n.y, n.z) }));
      projected.sort((a, b) => a.p.z - b.p.z);

      ctx!.lineCap = "round";
      edges.forEach(e => {
        const pa = project(e.a.x, e.a.y, e.a.z);
        const pb = project(e.b.x, e.b.y, e.b.z);
        const avgZ = (pa.z + pb.z) / 2;
        const alpha = Math.max(0.06, Math.min(0.55, 0.35 + avgZ / 700));
        const lg = ctx!.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
        lg.addColorStop(0, hexA(e.a.color, alpha));
        lg.addColorStop(1, hexA(e.b.color, alpha));
        ctx!.strokeStyle = lg;
        ctx!.lineWidth = 0.8 + (avgZ + 300) / 600;
        ctx!.beginPath();
        ctx!.moveTo(pa.x, pa.y);
        ctx!.lineTo(pb.x, pb.y);
        ctx!.stroke();
      });

      projected.forEach(({ n, p }) => {
        if (p.scale < 0.05) return;
        const pulseS = 1 + Math.sin(t * 1.6 + n.pulse) * 0.18;
        const sz = n.size * p.scale * pulseS;
        ctx!.shadowBlur = 18 * p.scale;
        ctx!.shadowColor = n.color;
        ctx!.fillStyle = hexA(n.color, 0.35);
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, sz * 2.2, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 8 * p.scale;
        ctx!.fillStyle = n.color;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, sz, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 0;
        ctx!.fillStyle = "rgba(255,255,255,0.9)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, sz * 0.4, 0, Math.PI * 2);
        ctx!.fill();
      });
      ctx!.shadowBlur = 0;
      ctx!.globalAlpha = 1;

      hovered = null;
      if (hasMouse) {
        for (let i = projected.length - 1; i >= 0; i--) {
          const { n, p } = projected[i];
          const dx = p.x - mouseX, dy = p.y - mouseY;
          const r = n.size * p.scale + 8;
          if (dx * dx + dy * dy < r * r) { hovered = { n, px: p.x, py: p.y }; break; }
        }
      }

      if (hovered && tip) {
        canvas.style.cursor = "pointer";
        ctx!.strokeStyle = "rgba(255,255,255,0.95)";
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.arc(hovered.px, hovered.py, hovered.n.size * 1.2 + 10, 0, Math.PI * 2);
        ctx!.stroke();
        tip.style.display = "block";
        tip.style.left = Math.min(rect.width - 300, hovered.px + 14) + "px";
        tip.style.top = Math.min(rect.height - 80, hovered.py + 14) + "px";
        tip.innerHTML = `<div style="font-weight:600;margin-bottom:4px">${hovered.n.mem.title.slice(0, 70)}</div><div style="color:rgba(255,255,255,0.5);font-size:10.5px">${hovered.n.mem.type.toUpperCase()} · ${hovered.n.mem.tags.slice(0, 3).join(" · ")}</div>`;
      } else if (tip) {
        canvas.style.cursor = dragging ? "grabbing" : "grab";
        tip.style.display = "none";
      }

      animRef.current!.raf = requestAnimationFrame(frame);
    }

    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      hasMouse = true;
      if (dragging) {
        rotY += (e.clientX - lastX) * 0.008;
        rotX += (e.clientY - lastY) * 0.008;
        rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotX));
        lastX = e.clientX; lastY = e.clientY;
        dragLastT = performance.now();
      }
    }
    function onDown(e: MouseEvent) { dragging = true; lastX = e.clientX; lastY = e.clientY; dragLastT = performance.now(); }
    function onUp() { dragging = false; dragLastT = performance.now(); }
    function onLeave() { hasMouse = false; }
    function onWheel(e: WheelEvent) { e.preventDefault(); zoom *= e.deltaY < 0 ? 1.12 : 0.89; zoom = Math.max(0.35, Math.min(3.2, zoom)); }

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    animRef.current = { raf: 0 };
    frame();

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current.raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, []);

  const synapses = MOCK_MEMORIES.reduce((s, m) => s + m.links.length, 0) / 2;

  return (
    <div>
      <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Constellation</h1>
          <p className="text-text-muted text-sm">{MOCK_MEMORIES.length} nodes · {Math.floor(synapses)} synapses · drag to orbit · scroll to zoom</p>
        </div>
      </div>
      <div className="relative w-full h-[calc(100vh-220px)] min-h-[500px] rounded-2xl overflow-hidden border border-line" style={{ background: "radial-gradient(circle at 30% 20%, #0a1428 0%, #020310 70%)" }}>
        <canvas ref={canvasRef} className="block w-full h-full cursor-grab" />
        <div ref={tipRef} style={{ position: "absolute", pointerEvents: "none", display: "none", background: "rgba(2,3,16,0.92)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", padding: "8px 12px", borderRadius: 8, fontSize: 12, maxWidth: 300, backdropFilter: "blur(8px)", zIndex: 10 }} />
        <div className="absolute top-3 left-4 text-text-dim text-[10px] font-mono tracking-widest">SKYWAVE ◇ COGNITION GRAPH</div>
      </div>
    </div>
  );
}
