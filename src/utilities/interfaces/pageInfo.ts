import type { SanityImage } from '@interfaces/sanityImage'

export interface PageInfo {
  title: string
  description?: string
  mainImage?: SanityImage & { alt: string }
  author?: string
}
