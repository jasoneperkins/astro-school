import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { newsletter } from '@schemas/newsletter'

export default defineConfig({
	name: 'temple-beit-hayam',
	title: 'Temple Beit HaYam',
	projectId: 'nn95ygkm',
	dataset: 'production',
	plugins: [structureTool()],
	schema: {
		types: [newsletter]
	}
})
