import { fetchGraphQL } from '@services/sanity'

export const heroQuery = `
  query GetHero {
    allPage(where: { slug: { current: { eq: "home" } } }) {
      heroSection {
        heading
        subheading
        body
        heroImages {
          asset {
            url
            metadata {
              lqip
            }
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
