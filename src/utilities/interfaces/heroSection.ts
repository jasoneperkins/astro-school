import type { SanityImage } from '@interfaces/sanityImage'

export interface HeroSection {
  _type: 'heroSection'
  title: string
  subheading?: string
  body?: string
  heroImages?: SanityImage[]
}
