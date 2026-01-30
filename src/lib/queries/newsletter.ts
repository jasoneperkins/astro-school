import { loadQuery } from '@lib/sanity.service'
import type { Newsletter } from '@sanity-types/sanity'

export const newsletterSlugsQuery = `*[_type == "newsletter"]{ "slug": slug.current }`

export const newsletterBySlugQuery = `*[_type == "newsletter" && slug.current == $slug][0]{
    ...,
    "slug": slug.current,
    "publishedAt": coalesce(publishedAt, _createdAt),
    featuredCarousel,
    vocabularyList,
    body[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    }
  }`

export const allNewslettersQuery = `*[_type == "newsletter"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    excerpt
  }`

export async function fetchNewsletterSlugs() {
	return await loadQuery<Array<{ slug: string }>>(newsletterSlugsQuery)
}

export async function fetchNewsletterBySlug(slug: string) {
	return await loadQuery<Newsletter>(newsletterBySlugQuery, { slug })
}

export async function fetchAllNewsletters() {
	return await loadQuery<Newsletter[]>(allNewslettersQuery)
}
