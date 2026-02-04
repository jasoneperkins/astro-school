import type { SanityImage } from '@interfaces/sanityImage'

export interface Hero {
  _type: 'hero'
  title: string
  subheading?: string
  body?: string
  heroImages?: SanityImage[]
}
