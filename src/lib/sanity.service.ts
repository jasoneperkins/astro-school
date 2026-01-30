import { sanityClient } from 'sanity:client'
import { SANITY_API_TOKEN } from 'astro:env/server'
import { PUBLIC_SANITY_VISUAL_EDITING } from 'astro:env/client'

const usePreview = !!SANITY_API_TOKEN && PUBLIC_SANITY_VISUAL_EDITING

const client = usePreview
	? sanityClient.withConfig({
			token: SANITY_API_TOKEN,
			useCdn: false,
			perspective: 'previewDrafts'
		})
	: sanityClient

export async function loadQuery<T>(
	query: string,
	params: Record<string, any> = {}
): Promise<T> {
	return await client.fetch(query, params)
}
