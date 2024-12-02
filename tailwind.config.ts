import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        custom: "0px 4px 24px rgba(0, 0, 0, 0.15)",
      },
      boxShadow: {
        "lg-x":
          "10px 0 15px -3px rgb(0 0 0 / 0.1), 4px 0 6px -4px rgb(0 0 0 / 0.1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gradient-start": "#ff9328",
        "gradient-end": "#feb061",
        "gradient-hover": "#ff8711",
        "gradient-hover-end": "#ffaa55",
        "gradient-scroll": "#ff7e62",
        "gradient-scroll-end": "#ff4c24",
        // color custom
        "color-s-strong": "#1e1e1e",
        "color-s-neutral": "#555555",
        "color-s-gray": "#29292f",
        "color-s-gray-5": "#9198a5",
        "color-s-light-bg": "#F3F6FB",
        "color-s-light-bg-2": "#F3F6F9",
        "color-s-accent": "#ff7f63",
        letterSpacing: {
          custom: "-0.32px",
        },
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "769px",
        lg: "1025px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },
  },
  plugins: [],
};
export default config;
