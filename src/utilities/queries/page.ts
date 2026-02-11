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
          cards {
            _key
            title
            description
            color
            icon {
              asset {
                url
                _id
              }
              alt
            }
          }
          cardAlign
          testimonials {
            _type
            _key
            quote
            author
            title
            rating
            image {
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

export async function fetchPage(slug: string): Promise<Page> {
  try {
    const data = await fetchGraphQL<any>(pageQuery, { slug })
    const pageData = data?.allPage?.[0]
    if (!pageData) {
      console.warn(`No page found for slug: ${slug}`)
    }
    return (
      pageData || {
        info: {
          _type: 'Info',
          title: '',
          slug: { current: slug, _type: 'slug' },
          publishDate: '',
          images: []
        },
        content: [],
        seo: {
          metaTitle: '',
          metaDescription: ''
        },
        _type: 'Page'
      }
    )
  } catch (err: any) {
    console.error(`Error fetching page "${slug}":`, err.message)
    return {
      info: {
        _type: 'Info',
        title: 'Error Loading Page',
        slug: { current: slug, _type: 'slug' },
        publishDate: '',
        images: []
      },
      content: [],
      seo: {
        metaTitle: 'Error',
        metaDescription: 'Page load failure'
      },
      _type: 'Page'
    }
  }
}
