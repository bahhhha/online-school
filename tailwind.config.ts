import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        navy: {
          50: "#EBEBEB",
          100: "#D4D4D4",
          200: "#A3A3A3",
          300: "#5D5E8E",
          400: "#22256D",
          500: "#000231",
          600: "#0A0A1F",
          700: "#0E0E16",
          800: "#0F0F0F",
          900: "#0A0A0A",
          950: "#0A0A0A",
          DEFAULT: "#000231",
        },
        title: "#252B42",
        typography: "#292930",
        background: "#FD8F55",
      },
    },
  },
  plugins: [],
} satisfies Config;
