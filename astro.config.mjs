// @ts-check
import { defineConfig, loadEnv } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import icon from 'astro-icon'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'

const { PUBLIC_SANITY_STUDIO_URL } = loadEnv(
	process.env.NODE_ENV,
	process.cwd(),
	''
)

export default defineConfig({
	adapter: cloudflare(),
	integrations: [
		icon({
			include: {
				'line-md': [
					'email-filled',
					'facebook',
					'map-marker-twotone-loop',
					'phone-twotone-loop',
					'twitter-twotone'
				]
			}
		}),
		sanity({
			projectId: 'nn95ygkm',
			dataset: 'production',
			studioBasePath: '/admin',
			// Set useCdn to false if you're building statically.
			useCdn: false,
			stega: {
				enabled: true,
				studioUrl: PUBLIC_SANITY_STUDIO_URL
			}
		}),
		react()
	],
	output: 'server',
	vite: {
		plugins: [tailwindcss()]
	}
})
