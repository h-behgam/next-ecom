import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      padding: {
        main_padding: "var(--main-padding)",
        main_padding_y: "var(--main-padding-y)",
        main_padding_x: "var(--main-padding-x)",
      },
      fontFamily: {
        vaziri: ["var(--font-vazir)"],
        iranSans: ["var(--iranSans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
