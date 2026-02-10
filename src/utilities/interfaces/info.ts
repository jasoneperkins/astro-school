import type { CustomImage } from '@interfaces/customImage'

export interface Info {
  _type: 'Info'
  title: string
  week?: string
  subTitle?: string
  slug: {
    current: string
    _type: 'slug'
  }
  publishDate: string
  images: CustomImage[] | null
  description?: string
  author?: string
}
