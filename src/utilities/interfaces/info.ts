import type { SanityImage } from '@interfaces/sanityImage'

export interface Info {
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  subTitle?: string
  description?: string
  images: SanityImage[]
  author?: string
  seoTitle?: string
}
