import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#040712", surface: "#0A0F1F", elev: "#121829", input: "#0E1424" },
        line: { DEFAULT: "rgba(255,255,255,0.08)", strong: "rgba(255,255,255,0.16)" },
        text: { DEFAULT: "#F5F7FA", muted: "rgba(245,247,250,0.65)", dim: "rgba(245,247,250,0.40)" },
        accent: { DEFAULT: "#5B8DEF", glow: "#7DA4FF", deep: "#0A3FCC", soft: "rgba(91,141,239,0.12)" },
        mem: {
          vault: "#10b981", wizard: "#a855f7", creator: "#f97316", hook: "#3b82f6",
          idea: "#fbbf24", swipe: "#ec4899", story: "#14b8a6", note: "#94a3b8",
          brief: "#06b6d4", thumbnail: "#f59e0b",
        },
        good: "#10b981", warn: "#eab308", bad: "#ef4444",
      },
      boxShadow: {
        glow: "0 0 24px rgba(91,141,239,0.35)",
        "glow-sm": "0 0 12px rgba(91,141,239,0.25)",
        card: "0 8px 24px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { transform: "translateY(8px)", opacity: "0" }, "100%": { transform: "translateY(0)", opacity: "1" } },
      },
    },
  },
  plugins: [],
};
export default config;
