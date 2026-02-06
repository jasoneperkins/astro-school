import type { Heading } from '@interfaces/heading'
import type { SanityImage } from '@interfaces/sanityImage'

export interface Section {
  _type: 'section'
  _key: string
  heading?: Heading
  body?: any[]
  images?: SanityImage[]
  sectionId: { current: string }
}
