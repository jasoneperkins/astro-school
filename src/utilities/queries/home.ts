import { fetchGraphQL } from '@services/sanity'

export const homepageQuery = `
  query GetHomepage {
    allPage(where: { pageInfo: { slug: { current: { eq: "index" } } } }) {
      pageInfo {
        title
        slug {
          current
        }
        subheading
        description
        author
        mainImage {
          asset {
            url
          }
        }
        extraHeroImages {
          asset {
            url
          }
        }
      }
      content {
        __typename
        ... on HeroSection {
          _type
          title
          subheading
          body
          heroImages {
            asset {
              url
            }
          }
        }
      }
    }
  }
`

export async function fetchHomepage() {
  const data = await fetchGraphQL<{ allPage: any[] }>(homepageQuery)
  return data.allPage[0]
}
