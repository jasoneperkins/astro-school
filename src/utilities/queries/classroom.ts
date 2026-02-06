import { fetchGraphQL } from '@services/sanity'
import type { Classroom } from '@interfaces/classroom'

export const classroomQuery = `
  query GetAllClassrooms {
    allClassroom {
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
    }
  }
`

export async function fetchClassrooms() {
  const data = await fetchGraphQL<{ allClassroom: Classroom[] }>(classroomQuery)
  return data?.allClassroom || []
}
