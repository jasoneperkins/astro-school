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
  const url = `https://${projectId}.api.sanity.io/v2023-08-01/graphql/${dataset}/default`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    })

    const result = await response.json()
    const { data, errors } = result

    if (errors) {
      console.error('Sanity GraphQL Errors:', JSON.stringify(errors, null, 2))
      console.error('Query:', query)
      console.error('Variables:', JSON.stringify(variables, null, 2))
      throw new Error(`Failed to fetch from Sanity: ${errors[0].message}`)
    }

    return data as T
  } catch (err: any) {
    console.error('Fetch Error:', err.message)
    throw err
  }
}
