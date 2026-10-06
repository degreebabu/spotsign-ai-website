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
        navy: {
          950: "#070C1E",
          900: "#0B132B",
          850: "#0F1A3A",
          800: "#14214D",
          700: "#1E306E",
        },
        cobalt: {
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        slate: {
          850: "#151F32",
          900: "#0F172A",
          950: "#090E17",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        elevated: "0 10px 30px -10px rgba(11, 19, 43, 0.08), 0 4px 6px -2px rgba(11, 19, 43, 0.03)",
        "elevated-lg": "0 20px 40px -15px rgba(11, 19, 43, 0.12), 0 0 0 1px rgba(11, 19, 43, 0.04)",
        "glow-blue": "0 0 25px -5px rgba(37, 99, 235, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
