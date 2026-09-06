import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      /**
       * Coconut countryside — Ben Tre / Mekong Delta.
       * Husk brown for text, rice-paddy green as the accent, coconut-flesh
       * cream as paper, jade river for secondary marks.
       */
      colors: {
        ink: "#33251a",       // coconut husk — body text (13.7:1 on paper)
        muted: "#7a6a58",     // dry palm fibre — secondary text (4.8:1)
        line: "#cab79a",      // woven rattan — hairlines
        paper: "#faf6ef",     // coconut flesh — page ground
        accent: "#537b44",    // rice paddy green (4.6:1, text-safe)
        river: "#387b70",     // jade river (4.6:1, text-safe)
        husk: "#5c3a21",      // wet husk / clay pot (9.4:1)
        turmeric: "#94691c",  // turmeric (4.5:1, text-safe)
        // Vivid research values — large decorative fills only, never text.
        "paddy-vivid": "#5f8d4e",
        "turmeric-vivid": "#d89b2e"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
