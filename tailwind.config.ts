import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0c",
        surface: "#111114",
        border: "#252529",
        accent: "#c9a96e",
        foreground: "#f1f0ea",
        muted: "#b2b1a9"
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(201, 169, 110, 0.18), 0 20px 80px rgba(201, 169, 110, 0.06)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 30% 15%, rgba(201, 169, 110, 0.16), rgba(201, 169, 110, 0) 45%), radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0) 40%)"
      }
    }
  },
  plugins: []
};

export default config;
