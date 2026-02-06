import type { Heading } from '@interfaces/heading'
import type { SanityImage } from '@interfaces/sanityImage'

export interface Section {
  _type: 'section'
  _key: string
  heading?: Heading
  bodyRaw?: any[]
  images?: SanityImage[]
  slug: { current: string }
}
