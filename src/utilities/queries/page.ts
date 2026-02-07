import { fetchGraphQL } from '@services/sanity'
import type { Page } from '@interfaces/page'

export const pageQuery = `
query GetPageBySlug($slug: String!) {
  allPage(where: { info: { slug: { current: { eq: $slug } } } }) {
        info {
          _type
          title
          subTitle
          slug { current }
          publishDate
          images {
            _type
            asset {
              url
              _id
              metadata { lqip }
            }
            alt
          }
          author
        }
        content {
          ... on Section {
            _type
            _key
            name
            heading {
              title
              subTitle
              showTitleFirst
            }
            slug { current }
            showHeader
            body: bodyRaw
            images {
              _type
              asset {
                url
                _id
                metadata { lqip }
              }
              alt
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          shareImage {
            _type
            asset {
              url
              _id
              metadata { lqip }
            }
            alt
          }
          noIndex
        }
      }
    }
  }
`

export async function fetchPage(slug: string = 'index'): Promise<Page> {
  const data = await fetchGraphQL<any>(pageQuery, { slug })
  const pageData = data?.allPage?.[0]
  return (
    pageData || {
      info: { title: '', slug: { current: slug } },
      content: [],
      _type: 'Page'
    }
  )
}
