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
    }
  }
`

export async function fetchClassrooms() {
  const data = await fetchGraphQL<{ allClassroom: Classroom[] }>(classroomQuery)
  return data?.allClassroom || []
}
