import { sanityClient } from 'sanity:client'
import { SANITY_API_TOKEN } from 'astro:env/server'
import {
	PUBLIC_SANITY_VISUAL_EDITING,
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET
} from 'astro:env/client'

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

export async function fetchGraphQL<T>(
	query: string,
	variables = {}
): Promise<T> {
	const endpoint = `https://${PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${PUBLIC_SANITY_DATASET}/default`

	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// Include token if your dataset is private
			...(SANITY_API_TOKEN && { Authorization: `Bearer ${SANITY_API_TOKEN}` })
		},
		body: JSON.stringify({
			query,
			variables
		})
	})

	const { data, errors } = await response.json()

	if (errors) {
		throw new Error(
			`GraphQL Error: ${errors.map((e: any) => e.message).join(', ')}`
		)
	}

	return data
}
