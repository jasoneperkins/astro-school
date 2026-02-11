import type { CustomImage } from '@interfaces/customImage'
import type { Heading } from '@interfaces/heading'
import type { IconCard } from '@interfaces/iconCard'
import type { Testimonial } from '@interfaces/testimonial'
import type { PortableTextBlock } from 'sanity'

export interface Section {
  _type: 'Section'
  _key: string
  name: string
  heading?: Heading
  slug: { current: string }
  showHeader?: boolean
  body?: PortableTextBlock[]
  images?: CustomImage[]
  cards?: IconCard[]
  cardAlign?: 'left' | 'center'
  testimonials?: Testimonial[]
}
