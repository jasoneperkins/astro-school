import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'

import { schemaTypes } from './schemas/index'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'nn95ygkm'
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
	name: 'temple-beit-hayam',
	title: 'Temple Beit HaYam',
	projectId: projectId,
	dataset: dataset,
	plugins: [
		presentationTool({
			previewUrl: {
				origin: 'http://localhost:4321',
				previewMode: {
					enable: '/api/draft'
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
