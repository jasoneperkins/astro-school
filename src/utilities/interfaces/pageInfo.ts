import type { SanityImage } from '@interfaces/sanityImage'

export interface PageInfo {
  title: string
  subheading?: string
  description?: string
  mainImage?: SanityImage
  author?: string
}
