import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [
    starlight({
      title: 'Blueprint',
      social: {
        github: 'https://github.com/ekfuhrmann/starlight-docs/',
      },
      expressiveCode: {
        themes: ['material-theme-palenight', 'light-plus'],
      },
      sidebar: [
        {
          label: 'Layout',
          autogenerate: { directory: 'layout' },
        },
        {
          label: 'Navigation',
          autogenerate: { directory: 'navigation' },
        },
        {
          label: 'Forms',
          autogenerate: { directory: 'forms' },
        },
        {
          label: 'Elements',
          autogenerate: { directory: 'elements' },
        },
      ],
      customCss: ['@/styles/app.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
