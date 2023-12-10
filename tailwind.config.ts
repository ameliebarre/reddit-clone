import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EA462F",
          hover: "#962B1B",
          active: "#872010",
        },
        grey: {
          100: "#F6F7F8",
          200: "#DADBDC",
          300: "#BFC0C0",
          400: "#A3A4A5",
          500: "#888889",
          600: "#6D6D6D",
          700: "#515152",
          800: "#363636",
          900: "#1A1A1A",
        },
      },
    },
  },
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "1",
      },
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
};
export default config;
