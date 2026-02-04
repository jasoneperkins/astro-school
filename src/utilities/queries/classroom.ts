import { fetchGraphQL } from '@services/sanity'
import type { Classroom } from '@interfaces/classroom'

export const classroomQuery = `
  query GetAllClassrooms {
    allClassroom {
      title
      slug {
        current
      }
      mainImage {
        asset {
          _id
          url
          metadata {
            lqip
          }
        }
        alt
      }
    }
  }
`

export async function fetchClassrooms() {
  const data = await fetchGraphQL<{ allClassroom: Classroom[] }>(classroomQuery)
  return data?.allClassroom || []
}
