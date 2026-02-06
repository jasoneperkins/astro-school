import { fetchGraphQL } from '@services/sanity'
import type { Page } from '@interfaces/page'

export const pageQuery = `
query GetPageBySlug($slug: String!) {
  allPages(where: { info: { slug: { current: { eq: $slug } } } }) {
        info {
          _type
          title
          slug { current }
          subTitle
          description
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
          seoTitle
        }
        content {
        ... on Section {
          _type
          _key
          heading {
            title
            subTitle
            showTitleFirst
          }
          slug { current }
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
    }
  }
`

export async function fetchPage(slug: string = 'index'): Promise<Page> {
  const data = await fetchGraphQL<any>(pageQuery, { slug })
  const pageData = data?.allPages?.[0] || data?.allPage?.[0]
  return (
    pageData || {
      info: { title: '', slug: { current: slug } },
      content: [],
      _type: 'Page'
    }
  )
}
