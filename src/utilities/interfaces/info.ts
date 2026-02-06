import type { CustomImage } from '@interfaces/customImage'

export interface Info {
  _type: 'Info'
  title: string
  slug: {
    current: string
    _type: 'slug'
  }
  subTitle?: string
  description?: string
  images: CustomImage[]
  author?: string
  seoTitle?: string
}
