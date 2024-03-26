import starlightPlugin from '@astrojs/starlight-tailwind'
import colors from 'tailwindcss/colors'
import { pxPair } from './config/tailwind/helpers'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    spacing: {
      ...pxPair(0),
      ...pxPair(1),
      ...pxPair(2),
      ...pxPair(4),
      ...pxPair(6),
      ...pxPair(8),
      ...pxPair(10),
      ...pxPair(12),
      ...pxPair(16),
      ...pxPair(20),
      ...pxPair(24),
      ...pxPair(28),
      ...pxPair(32),
      ...pxPair(36),
      ...pxPair(40),
      ...pxPair(44),
      ...pxPair(48),
      ...pxPair(52),
      ...pxPair(56),
      ...pxPair(60),
      ...pxPair(64),
      ...pxPair(80),
      ...pxPair(96),
      ...pxPair(112),
      ...pxPair(128),
    },
    extend: {
      colors: {
        accent: colors.blue, // Your Preferred accent color.
        gray: colors.zinc, // Your preferred gray scale.
      },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"'], // Your preferred text font.
        mono: ['"IBM Plex Mono"'], // Your preferred code font.
      },
    },
  },
  plugins: [
    starlightPlugin(),
    require('./config/tailwind/buttons'),
    require('./config/tailwind/dialog'),
    require('./config/tailwind/inputs'),
  ],
}
