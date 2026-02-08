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
      # Basic
      metaTitle
      metaDescription
      breadcrumbsTitle
      canonicalUrl
      
      # Robots & Schema
      noIndex
      noFollow
      schemaType
    }
    social {
      # Open Graph
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

      # Twitter
      twitterTitle
      twitterDescription
      twitterCardType
      twitterImage {
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

export async function fetchPage(slug: string = 'index'): Promise<Page> {
  const data = await fetchGraphQL<any>(pageQuery, { slug })
  const pageData = data?.allPage?.[0]
  return (
    pageData || {
      info: { title: '', slug: { current: slug } },
      content: [],
      seo: {
        metaTitle: '',
        metaDescription: ''
      },
      _type: 'Page'
    }
  )
}
