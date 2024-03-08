import starlightPlugin from "@astrojs/starlight-tailwind";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: colors.emerald, // Your Preferred accent color.
        gray: colors.zinc, // Your preferred gray scale.
      },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"'], // Your preferred text font.
        mono: ['"IBM Plex Mono"'], // Your preferred code font.
      },
    },
  },
  plugins: [starlightPlugin(), require("./config/tailwind/buttons")],
};
