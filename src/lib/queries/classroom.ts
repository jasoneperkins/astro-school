import { loadQuery } from '@lib/sanity.service'
import type { Classroom } from '@sanity-types/sanity'

export const classroomBySlugQuery = `*[_type == "classroom" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  mainImage,
  description,
  ageRange,
  "icon": icon.name,
  dayInTheLife,
  curriculumHighlights
}`

export const allClassroomsQuery = `*[_type == "classroom"] | order(orderRank asc){
  _id,
  title,
  "slug": slug.current,
  mainImage,
  "icon": icon.name,
  ageRange
}`

export async function fetchClassroomBySlug(slug: string) {
	return await loadQuery<Classroom>(classroomBySlugQuery, { slug })
}

export async function fetchAllClassrooms() {
	return await loadQuery<Classroom[]>(allClassroomsQuery)
}
