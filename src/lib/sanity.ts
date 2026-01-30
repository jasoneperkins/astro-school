import { createClient, type ClientConfig } from '@sanity/client'

import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET
} from 'astro:env/client'

const isDev = import.meta.env.DEV

const config: ClientConfig = {
	apiVersion: '2025-02-06',
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: process.env.NODE_ENV === 'production',
	stega: {
		enabled: true,
		studioUrl: 'https://localhost:4321'
	},
	token: isDev ? import.meta.env.SANITY_API_TOKEN : undefined
}

export const sanityClient = createClient(config)
