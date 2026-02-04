import type { SanityImage } from '@interfaces/sanityImage'

export interface PageInfo {
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  subheading?: string
  description?: string
  mainImage?: SanityImage
  extraHeroImages?: SanityImage[]
  author?: string
  seoTitle?: string
}
