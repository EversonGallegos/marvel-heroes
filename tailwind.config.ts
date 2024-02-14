import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "building": "url('/images/building.svg')",
        "at": "url('/images/at.svg')",
        "at-blue": "url('/images/at-blue.svg')",
        "eyes": "url('/images/eyes.svg')",
        "eyes-blue": "url('/images/eyes-blue.svg')",

      },
      backgroundPosition: {
        "input": "95% center"
      },
      boxShadow: {
        "dropdown": "0px 12px 16px -4px #10182814",
        "xs": "0px 1px 2px 0px #1018280D",
        "sb": "6px 0px 18px 0px #0000000F"
      },
      maxWidth: {
        "grid": "1366px"
      },
      letterSpacing: {
        'full': '-0.1em'
      }
    },
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "divider": "#EBEFF2",
      "blue": {
        200: "#747D94",
        500: "#293D71",
        600: "#213770",
        700: "#081B4E",
        800: "#00113D",
      },
      "orange": { 
        400: "#F43724",
        500: "#F21A05"
      },
      "gray": {
        background: "#F5F6F8",
        50: "#F9FAFB",
        100: "#EAECF0",
        300: "#D0D5DD",
        350: "#C3C3C3",
        400: "#B7B7B7",
        500: "#777777"
      }
    }
  },
  plugins: [],
};
export default config;
