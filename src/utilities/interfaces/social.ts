import type { CustomImage } from '@interfaces/customImage'

export interface Social {
  // Open Graph / Facebook
  shareTitle?: string
  shareDescription?: string
  shareImage?: CustomImage

  // Twitter
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: CustomImage
  twitterCardType?: 'summary_large_image' | 'summary'
}
