import { fetchGraphQL } from '@services/sanity'

export const pageQuery = `
query GetPageBySlug($slug: String!) {
  allPage(where: { info: { slug: { current: { eq: $slug } } } }) {
      info {
        title
        slug { current }
        subTitle
        description
        author
        images {
          asset {
            url
            _id
            metadata {
              lqip
            }
          }
          alt
        }
      }
      content {
        __typename
        ... on section {
          _key
          _type
          heading {
            title
            subTitle
            showTitleFirst
          }
          sectionId {
            current
          }
          body: bodyRaw
          images {
            asset {
              url
              _id
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

export async function fetchPage(slug: string = 'index') {
  const data = await fetchGraphQL<{ allPage: any[] }>(pageQuery, { slug })
  return data?.allPage?.[0]
}
