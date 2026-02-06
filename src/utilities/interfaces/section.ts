import type { CustomImage } from '@interfaces/customImage'
import type { Heading } from '@interfaces/heading'

export interface Section {
  _type: 'Section'
  _key: string
  heading?: Heading
  showHeader?: boolean
  body?: any[]
  images?: CustomImage[]
  slug: { current: string }
}
