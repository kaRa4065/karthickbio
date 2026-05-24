import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#F8FAFC",
          elevated: "#E2E8F0",
          border: "rgba(15,23,42,0.08)",
          text: "#0F172A",
          sub: "#475569",
          muted: "#64748B",
          accent: "#10B981",
          accentDark: "#0F766E",
          emerald: "#10B981",
          green: "#166534",
          amber: "#F59E0B",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Space Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
