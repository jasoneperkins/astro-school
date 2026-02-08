import { fetchGraphQL } from '@services/sanity'
import type { Classroom } from '@interfaces/classroom'

export const classroomQuery = `
  query GetAllClassrooms {
    allClassroom {
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

export async function fetchClassrooms() {
  const data = await fetchGraphQL<{ allClassroom: Classroom[] }>(classroomQuery)
  return data?.allClassroom || []
}
