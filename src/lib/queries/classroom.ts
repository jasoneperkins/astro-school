import { fetchGraphQL } from '@lib/sanity.service'

export const classroomBySlugQuery = `
  query GetClassroom($slug: String!) {
    allClassroom(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      slug {
        current
      }
      ageRange
      descriptionRaw
      mainImage {
        asset {
          url
        }
      }
      dayInTheLife {
        activity
        description
      }
      curriculumHighlights
      vocabularyList {
        word
        definition
      }
      featuredCarousel
    }
  }
`

export const allClassroomsQuery = `
  query GetAllClassrooms {
    allClassroom(sort: { title: ASC }) {
      _id
      title
      slug {
        current
      }
    }
  }
`

export async function fetchClassroomBySlug(slug: string) {
	const data = await fetchGraphQL<{ allClassroom: any[] }>(
		classroomBySlugQuery,
		{ slug }
	)

	return data?.allClassroom?.[0] || null
}

export async function fetchAllClassrooms() {
	const data = await fetchGraphQL<{ allClassroom: any[] }>(allClassroomsQuery)
	return data?.allClassroom || []
}
