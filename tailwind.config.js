/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: [
    "hero-tag-chip--dark",
    "hero-tag-chip--light",
    "hero-tag-chip--signal"
  ],
  theme: {
    extend: {
      colors: {
        base: "#090909",
        panel: "#121212",
        paper: "#f4efe5",
        ink: "#111111",
        p5red: "#d5121b",
        p5redDark: "#8f0d13",
        p5yellow: "#f4ce4f",
        p5ash: "#e3ddd2",
        cyan: "#00F0FF",
        purple: "#B026FF",
        matrix: "#39FF14",
        slateglow: "#91A7FF",
      },
      fontFamily: {
        display: ["Expose", "Impact", "Arial Black", "sans-serif"],
        menu: ["P5Menu", "Segoe UI", "sans-serif"],
        accent: ["P5Hatty", "Comic Sans MS", "sans-serif"],
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Cascadia Code", "Consolas", "monospace"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(0, 240, 255, 0.4)",
        purple: "0 0 30px rgba(176, 38, 255, 0.3)",
        glass: "0 25px 80px rgba(0, 0, 0, 0.45)",
        p5: "14px 14px 0 rgba(0, 0, 0, 0.9)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
        scan: "scan 7s linear infinite",
        swingIn: "swingIn 0.8s cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(0, 240, 255, 0.25)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 240, 255, 0.55)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        swingIn: {
          "0%": { opacity: "0", transform: "translateY(20px) rotate(-3deg) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(0deg) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
