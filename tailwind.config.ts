import type { Config } from "tailwindcss";
import { colorsDefault } from "./config/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: colorsDefault,
    },
    screens: {
      min0: "300px",
      min1: "400px",
      min2: "470px",
      min3: "540px",
      min4: "641px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1536px",
    },
    boxShadow: {
      full: "0 4px 8px rgba(0, 0, 0, 0.12), 0 -4px 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1)",
      light: "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.05), 1px 0 3px rgba(0, 0, 0, 0.05), -1px 0 3px rgba(0, 0, 0, 0.05)",
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwind-hamburgers')],
};
export default config;
