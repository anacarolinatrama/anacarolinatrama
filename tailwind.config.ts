import type { Config } from "tailwindcss";

/**
 * Tokens do handoff "Bloco 90".
 * Cores principais: navy, cream, paper, gold, red.
 * As demais são tons de apoio usados em detalhes do protótipo (câmera, prédios, hero).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#12224C",
        cream: "#F3E7C8",
        paper: "#FFFDF6",
        gold: "#E5A81E",
        red: "#C6362A",
        // apoio
        ink: "#0B1531",
        royal: "#1B3072",
        slate: "#3B4E86",
        mist: "#CBD5F0",
        shell: "#E7E4DE",
        steel: "#C9C5BD",
        periwinkle: "#6E86C8",
        moss: "#2E7D5B",
      },
      fontFamily: {
        display: ["var(--font-display)", '"Archivo Black"', "sans-serif"],
        sans: ["var(--font-sans)", '"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", '"IBM Plex Mono"', "monospace"],
      },
      boxShadow: {
        hard: "5px 5px 0 0",
        "hard-lg": "8px 8px 0 0",
        "hard-xl": "14px 14px 0 0",
      },
      borderRadius: {
        DEFAULT: "0",
      },
      animation: {
        marquee: "marq 30s linear infinite",
        ribbon: "marq 26s linear infinite",
        ring: "ringshake .28s ease-in-out infinite",
        rise: "riseIn .45s ease both",
        flash: "flashpop 5s ease-in-out infinite",
        eject: "eject 2.4s cubic-bezier(.16,.9,.24,1) both",
        "spin-slow": "spin 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
