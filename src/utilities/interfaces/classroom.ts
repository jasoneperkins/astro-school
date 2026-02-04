import type { SanityImage } from '@interfaces/sanityImage'

export interface Classroom {
  _type: 'classroom'
  title: string //
  slug: {
    current: string //
  }
  mainImage?: SanityImage
}
