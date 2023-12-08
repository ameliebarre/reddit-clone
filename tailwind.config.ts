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
