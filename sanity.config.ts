import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'

import { newsletter } from '@schemas/newsletter'
import { carousel } from '@schemas/carousel'

export default defineConfig({
	name: 'temple-beit-hayam',
	title: 'Temple Beit HaYam',
	projectId: 'nn95ygkm',
	dataset: 'production',
	plugins: [
		presentationTool({
			previewUrl: {
				origin: 'http://localhost:4321',
				previewMode: {
					enable: '/api/preview'
				}
			}
		}),
		structureTool()
	],
	schema: {
		types: [newsletter, carousel]
	},
	useCdn: false,
	stega: {
		enabled: true,
		studioUrl: 'https://localhost:4321'
	}
})
