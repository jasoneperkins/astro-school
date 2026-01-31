import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './schemas/index'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID || 'nn95ygkm'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
	name: 'temple-beit-hayam',
	title: 'Temple Beit HaYam',
	projectId: projectId,
	dataset: dataset,
	plugins: [
		presentationTool({
			previewUrl: {
				origin:
					import.meta.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:4321',
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
