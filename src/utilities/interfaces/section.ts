import type { CustomImage } from '@interfaces/customImage'
import type { Heading } from '@interfaces/heading'

export interface Section {
  _type: 'Section'
  _key: string
  name: string
  heading?: Heading
  slug: { current: string }
  showHeader?: boolean
  body?: any[]
  images?: CustomImage[]
}
