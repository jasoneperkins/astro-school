import { fetchGraphQL } from '@services/sanity'
import type { Newsletter } from '@interfaces/newsletter'

export const allNewslettersQuery = `
  query GetAllNewsletters {
    allNewsletter {
      info {
        title
        week
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
      }
    }
  }
`

export const newsletterBySlugQuery = `
  query GetNewsletterBySlug($slug: String!) {
    allNewsletter(where: { info: { slug: { current: { eq: $slug } } } }) {
      info {
        _type
        title
        week
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
        text
        carousel {
          _type
          asset {
            url
            _id
            metadata { lqip }
          }
          alt
        }
      }
      vocabularyCards {
        _type
        word
        definition
      }
      seo {
        metaTitle
        metaDescription
        breadcrumbsTitle
        canonicalUrl
        noIndex
        noFollow
        schemaType
      }
      social {
        shareTitle
        shareDescription
        shareImage {
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
`

export async function fetchNewsletters(): Promise<Newsletter[]> {
  const data = await fetchGraphQL<{ allNewsletter: Newsletter[] }>(
    allNewslettersQuery
  )
  return data?.allNewsletter || []
}

export async function fetchNewsletter(slug: string): Promise<Newsletter> {
  const data = await fetchGraphQL<any>(newsletterBySlugQuery, { slug })
  const newsletterData = data?.allNewsletter?.[0]

  return (
    newsletterData || {
      info: { title: '', slug: { current: slug } },
      content: { text: '', carousel: [] },
      vocabularyCards: [],
      _type: 'Newsletter'
    }
  )
}
