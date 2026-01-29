import { createClient } from '@sanity/astro/client'

const isDev = import.meta.env.DEV

export const client = createClient({
	projectId: 'your_project_id',
	dataset: 'production',
	useCdn: false, // Required for Stega/Visual Editing
	stega: {
		enabled: true,
		studioUrl: 'https://localhost:4321'
	},
	token: isDev ? import.meta.env.SANITY_API_TOKEN : undefined
})
