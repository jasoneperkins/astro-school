import { fetchGraphQL } from '@services/sanity'

export const heroQuery = `
  query GetHero($slug: String!) {
    allPage(where: { pageInfo: { slug: { current: { eq: $slug } } } }) {
      content {
        __typename
        ... on Hero {
          _type
          title
          subheading
          body
          heroImages {
            asset {
              url
              metadata {
                lqip
              }
            }
            alt
          }
        }
      }
    }
  }
`

export async function fetchHero() {
  const data = await fetchGraphQL<{ allPage: any[] }>(heroQuery)
  return data.allPage[0]
}
