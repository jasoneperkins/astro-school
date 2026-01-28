// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import icon from 'astro-icon'
import react from '@astrojs/react'
import sanity from '@sanity/astro'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	adapter: cloudflare(),
	integrations: [
		icon({
			include: {
				'line-md': [
					'email-filled',
					'facebook',
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
			useCdn: false
		}),
		react()
	],
	output: 'server',
	vite: {
		plugins: [tailwindcss()]
	}
})
