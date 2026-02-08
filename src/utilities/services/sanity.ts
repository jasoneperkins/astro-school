import { sanityClient } from 'sanity:client'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source).auto('format').quality(80)
}

export async function fetchGraphQL<T>(
  query: string,
  variables = {}
): Promise<T> {
  const { projectId, dataset } = sanityClient.config()
  const url = `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  })

  const { data, errors } = await response.json()

  if (errors) {
    console.error('GraphQL Errors:', errors)
    throw new Error('Failed to fetch from Sanity')
  }

  return data as T
}
