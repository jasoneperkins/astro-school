import { sanityClient } from 'sanity:client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET
} from 'astro:env/client'

const builder = createImageUrlBuilder({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET
})

export function urlFor(source: SanityImageSource) {
	return builder.image(source).auto('format')
}
