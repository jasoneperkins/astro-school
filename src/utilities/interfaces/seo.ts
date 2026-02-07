import type { CustomImage } from '@interfaces/customImage'

export interface Seo {
  metaTitle?: string
  metaDescription?: string
  shareImage?: CustomImage
  noIndex?: boolean
}
