import type { SanityImage } from '@interfaces/sanityImage'

export interface Hero {
  _type: 'hero'
  title: string
  subheading?: string
  description?: string
  mainImage?: SanityImage
  body?: string
  heroImages?: SanityImage[]
  extraHeroImages?: SanityImage[]
}
