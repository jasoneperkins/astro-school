import { fetchGraphQL } from '@services/sanity'

export const pageQuery = `
query GetPageBySlug($slug: String!) {
  allPage(where: { pageInfo: { slug: { current: { eq: $slug } } } }) {
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
            _id
            metadata {
              lqip
            }
          }
          alt
        }
        extraHeroImages {
          asset {
            url
          }
          alt
        }
      }
      contentSections {
        __typename
        ... on Hero {
          _key
          _type
          title
          subheading
          body
          heroImages {
            asset {
              url
            }
            alt
          }
        }
      }
    }
  }
`

export async function fetchPage(slug: string = 'index') {
  const data = await fetchGraphQL<{ allPage: any[] }>(pageQuery, { slug })
  return data?.allPage?.[0]
}
