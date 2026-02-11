import { fetchGraphQL } from '@services/sanity'
import type { Classroom } from '@interfaces/classroom'

export const allClassroomsQuery = `
  query GetAllClassrooms {
    allClassroom {
      info {
        title
        age
        slug { current }
        images {
          asset {
            url
          }
        }
      }
    }
  }
`

export const classroomBySlugQuery = `
  query GetClassroomBySlug($slug: String!) {
    allClassroom(where: { info: { slug: { current: { eq: $slug } } } }) {
      info {
        _type
        title
        subTitle
        age
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

export async function fetchClassrooms(): Promise<Classroom[]> {
  const data = await fetchGraphQL<{ allClassroom: Classroom[] }>(
    allClassroomsQuery
  )
  return data?.allClassroom || []
}

export async function fetchClassroom(slug: string): Promise<Classroom> {
  const data = await fetchGraphQL<any>(classroomBySlugQuery, { slug })
  const classroomData = data?.allClassroom?.[0]
  return (
    classroomData || {
      info: { title: '', slug: { current: slug } },
      content: [],
      seo: {
        metaTitle: '',
        metaDescription: ''
      },
      _type: 'Classroom'
    }
  )
}
