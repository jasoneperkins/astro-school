// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import icon from 'astro-icon'
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
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
})
