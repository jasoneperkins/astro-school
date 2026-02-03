import type { SimpleHeading } from './simpleHeading'
import type { SanityImage } from '@registry/sanity'

export interface ContentSection {
  _type: 'contentSection'
  heading?: SimpleHeading
  sectionId: { current: string } // The slug object
  body?: any[]
  images?: (SanityImage & { alt: string })[]
}
