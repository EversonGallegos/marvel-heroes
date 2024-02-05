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
      },
      boxShadow: {
        "dropdown": "0px 12px 16px -4px #10182814",
        "xs": "0px 1px 2px 0px #1018280D"
      }
    },
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "divider": "#EBEFF2",
      "blue": {
        800: "#00113D",
        600: "#213770",
        200: "#747D94"
      },
      "orange": { 
        500: "#F21A05",
        400: "#F43724"
      },
      "gray": {
        background: "#F5F6F8",
        50: "#F9FAFB",
        100: "#EAECF0",
        300: "#D0D5DD",
        500: "#777777"
      }
    }
  },
  plugins: [],
};
export default config;
