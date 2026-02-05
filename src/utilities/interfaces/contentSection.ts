import type { SimpleHeading } from '@interfaces/simpleHeading'
import type { SanityImage } from '@interfaces/sanityImage'

export interface ContentSection {
  _type: 'contentSection'
  _key: string
  heading?: SimpleHeading
  sectionId: { current: string }
  body?: any[]
  images?: SanityImage[]
}
