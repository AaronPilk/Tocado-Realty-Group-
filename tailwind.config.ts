import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black)",
        charcoal: "var(--color-charcoal)",
        ivory: "var(--color-ivory)",
        cream: "var(--color-cream)",
        orange: "var(--color-orange)",
        muted: "var(--color-muted)",
        line: "var(--color-border)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
