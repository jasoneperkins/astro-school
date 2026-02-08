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
}
