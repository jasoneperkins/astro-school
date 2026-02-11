import type { CustomImage } from '@interfaces/customImage'

export interface Testimonial {
  _type: 'Testimonial'
  _key: string
  quote: string
  author: string
  title: string
  image?: CustomImage
}
