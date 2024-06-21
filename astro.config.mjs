import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Blueprint',
      titleDelimiter: '-',
      social: {
        github: 'https://github.com/vigetlabs/blueprint-starlight/',
      },
      expressiveCode: {
        themes: ['material-theme-palenight', 'light-plus'],
      },
      sidebar: [
        {
          label: 'Layout',
          autogenerate: {
            directory: 'layout',
          },
        },
        {
          label: 'Navigation',
          autogenerate: {
            directory: 'navigation',
          },
        },
        {
          label: 'Forms',
          autogenerate: {
            directory: 'forms',
          },
        },
        {
          label: 'Elements',
          autogenerate: {
            directory: 'elements',
            collapsed: true,
          },
        },
      ],
      customCss: ['@/styles/app.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs({
      entrypoint: 'src/entrypoint',
    }),
  ],
})
