import type { CustomImage } from '@interfaces/customImage'

export interface Info {
  _type: 'Info'
  title: string
  subTitle?: string
  slug: {
    current: string
    _type: 'slug'
  }
  publishDate: Date
  images: CustomImage[] | null
  author?: string
}
