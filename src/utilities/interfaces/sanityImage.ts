export interface SanityImage {
  _type: 'image'
  asset: {
    _id: string
    url: string
    metadata?: {
      lqip: string // Add this for Astro image optimization
    }
  }
  alt: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}
