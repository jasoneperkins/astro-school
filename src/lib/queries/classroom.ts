// src/lib/queries/classroom.ts
import { loadQuery } from '@lib/sanity.service'
import type { Classroom } from '@sanity-types/sanity'

/**
 * Query for the individual classroom detail page
 */
export const classroomQuery = `*[_type == "classroom" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  mainImage,
  description,
  ageRange,
  "icon": icon.name
}`

/**
 * Query for the main "Our Classes" list/grid page
 */
export const allClassroomsQuery = `*[_type == "classroom"] | order(orderRank asc){
  title,
  "slug": slug.current,
  mainImage,
  "icon": icon.name
}`

// --- Helper Functions ---

export async function getClassroom(slug: string) {
	return await loadQuery<Classroom>(classroomQuery, { slug })
}

export async function getAllClassrooms() {
	// Returns an array of Classrooms
	return await loadQuery<Classroom[]>(allClassroomsQuery)
}
