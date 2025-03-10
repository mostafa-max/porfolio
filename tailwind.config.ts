import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        glass: "var(--color-glass)",
        border: "var(--color-border)",
      },
      boxShadow: {
        glow: "0 0 15px var(--color-primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
