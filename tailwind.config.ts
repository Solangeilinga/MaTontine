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
        green: {
          primary: "#1B6B3A",
          light: "#E8F2EC",
          dark: "#134d2b",
        },
        gold: {
          primary: "#C9963A",
          light: "#F7F0E3",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
