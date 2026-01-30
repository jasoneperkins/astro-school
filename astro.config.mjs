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
	adapter: cloudflare(),
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
				default: 'https://astro-school.jason-c11.workers.dev'
			}),
			PUBLIC_SANITY_VISUAL_EDITING: envField.boolean({
				context: 'client',
				access: 'public',
				default: false
			}),
			SANITY_API_TOKEN: envField.string({
				context: 'server',
				access: 'secret',
				default: ''
			}),
			SANITY_PREVIEW_SECRET: envField.string({
				context: 'server',
				access: 'secret',
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
					'twitter-twotone'
				],
				lucide: ['baby', 'blocks', 'graduation-cap', 'palette'],
				ph: [
					'arrow-right',
					'baby-duotone',
					'book-open-duotone',
					'compass-duotone',
					'list-bold',
					'paint-brush-household-duotone',
					'shapes-duotone',
					'x-bold'
				]
			}
		}),
		sanity({
			projectId:
				env.PUBLIC_SANITY_PROJECT_ID ||
				process.env.PUBLIC_SANITY_PROJECT_ID ||
				'nn95ygkm',
			dataset:
				env.PUBLIC_SANITY_DATASET ||
				process.env.PUBLIC_SANITY_DATASET ||
				'production',
			studioBasePath: '/admin',
			useCdn: false,
			stega: {
				enabled: true,
				studioUrl:
					env.PUBLIC_SANITY_STUDIO_URL ||
					process.env.PUBLIC_SANITY_STUDIO_URL ||
					'https://astro-school.jason-c11.workers.dev'
			}
		}),
		react()
	],
	output: 'server',
	vite: {
		plugins: [tailwindcss()]
	}
})
