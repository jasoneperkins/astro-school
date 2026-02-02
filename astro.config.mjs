// @ts-check
import { defineConfig, envField } from 'astro/config'
import { loadEnv } from 'vite'

import cloudflare from '@astrojs/cloudflare'
import icon from 'astro-icon'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '')

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  env: {
    schema: {
      PUBLIC_SANITY_DATASET: envField.string({
        context: 'client',
        access: 'public',
        default: 'production'
      }),
      PUBLIC_SANITY_PROJECT_ID: envField.string({
        context: 'client',
        access: 'public',
        default: 'nn95ygkm'
      }),
      PUBLIC_SANITY_STUDIO_URL: envField.string({
        context: 'client',
        access: 'public',
        default: 'http://localhost:3333'
      }),
      PUBLIC_SANITY_VISUAL_EDITING: envField.boolean({
        context: 'client',
        access: 'public',
        default: false
      }),
      SANITY_API_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: ''
      }),
      SANITY_PREVIEW_SECRET: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
        default: ''
      })
    }
  },
  integrations: [
    icon({
      include: {
        'line-md': [
          'chevron-small-down',
          'email-filled',
          'facebook',
          'map-marker-twotone-loop',
          'phone-twotone-loop',
          'sunny-twotone-loop'
        ],
        lucide: ['baby', 'blocks', 'palette', 'graduation-cap']
      }
    }),
    react(),
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      useCdn: false
    })
  ],
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  }
})
