import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'

import { schemaTypes } from './studio/schemas'

import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET
} from 'astro:env/client'

export default defineConfig({
	name: 'temple-beit-hayam',
	title: 'Temple Beit HaYam',
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
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
		types: schemaTypes
	},
	useCdn: false,
	stega: {
		enabled: true,
		studioUrl: 'https://localhost:4321'
	}
})
