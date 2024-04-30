import starlightPlugin from '@astrojs/starlight-tailwind'
import colors from 'tailwindcss/colors'
import { pxPair } from './config/tailwind/helpers'

// Generated color palettes
const accent = {
  200: '#9aceff',
  600: '#0070b7',
  900: '#00345a',
  950: '#002543',
}
const gray = {
  100: '#f5f6fa',
  200: '#ebedf6',
  300: '#bfc2cc',
  400: '#858b9e',
  500: '#525769',
  700: '#333748',
  800: '#222636',
  900: '#16181f',
}

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
      colors: { accent, gray },
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
