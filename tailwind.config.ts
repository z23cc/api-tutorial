import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // FastRouter inspired warm color palette
        primary: {
          DEFAULT: '#CC785C',
          light: '#d4a37f',
          lighter: '#e5c8b2',
          lightest: '#f2e3d9',
        },
        secondary: {
          DEFAULT: '#e1bfa5',
          light: '#ead1bf',
        },
        neutral: {
          bg: '#F0EFEA',
          'bg-alt': '#fbf6f2',
          text: '#3d3530',
          'text-light': '#6b645d',
          'text-lighter': '#828179',
        },
      },
    },
  },
  plugins: [],
};
export default config;
