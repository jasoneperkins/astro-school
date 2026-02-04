export interface SanityImage {
  _type: 'image'
  asset: {
    _id: string
    url: string
    metadata: {
      lqip: string
    }
  }
  alt?: string
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
