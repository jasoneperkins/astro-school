// @ts-check
import { defineConfig, envField, passthroughImageService } from 'astro/config'
import { loadEnv } from 'vite'

import alpinejs from '@astrojs/alpinejs'
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
    },
    imageService: 'passthrough'
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
      PUBLIC_SANITY_GRAPHQL_URL: envField.string({
        context: 'client',
        access: 'public',
        default: 'https://nn95ygkm.api.sanity.io/v1/graphql/production/default'
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
  image: {
    domains: ['cdn.sanity.io']
  },
  integrations: [
    icon({
      include: {
        'line-md': [
          'chevron-small-down',
          'close-to-menu-transition',
          'email-filled',
          'facebook',
          'instagram',
          'map-marker-twotone-loop',
          'menu-to-close-transition',
          'phone-twotone-loop',
          'sunny-twotone-loop'
        ],
        lucide: ['baby', 'blocks', 'palette', 'graduation-cap']
      }
    }),
    react(),
    sanity({
      projectId: 'nn95ygkm',
      dataset: 'production',
      useCdn: false
    }),
    alpinejs({
      entrypoint: '/src/utilities/alpine'
    })
  ],
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  }
})
