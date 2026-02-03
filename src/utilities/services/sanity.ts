import { sanityClient } from 'sanity:client'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function sanityGraphQL(query: string, variables = {}) {
  const { projectId, dataset } = sanityClient.config()
  const url = `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  })

  return response.json()
}
