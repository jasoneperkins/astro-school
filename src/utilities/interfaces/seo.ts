import type { CustomImage } from '@interfaces/customImage'

export interface Seo {
  // Basic Meta
  metaTitle?: string
  metaDescription?: string
  breadcrumbsTitle?: string
  canonicalUrl?: string

  // Robots & Schema
  noIndex?: boolean
  noFollow?: boolean
  schemaType?: 'WebPage' | 'Article' | 'FAQPage' | 'AboutPage' | 'ContactPage'

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
