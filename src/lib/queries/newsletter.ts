import { loadQuery } from '@lib/sanity.service'
import type { Newsletter } from '@sanity-types/sanity'

export async function getNewsletterSlugs() {
	const query = `*[_type == "newsletter"]{ "slug": slug.current }`
	return await loadQuery<Array<{ slug: string }>>(query)
}

export async function getNewsletter(slug: string) {
	const query = `*[_type == "newsletter" && slug.current == $slug][0]{
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
	return await loadQuery<Newsletter>(query, { slug })
}

export async function getAllNewsletters() {
	const query = `*[_type == "newsletter"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    mainImage,
    excerpt
  }`
	return await loadQuery<Newsletter[]>(query)
}
