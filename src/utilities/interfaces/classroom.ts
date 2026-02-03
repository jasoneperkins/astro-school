import type { SanityImage } from '@registry/sanity'

export interface Classroom {
  _type: 'classroom'
  title: string
  slug: { current: string }
  mainImage?: SanityImage
}
