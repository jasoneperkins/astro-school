export interface CustomImage {
  // Matches the capitalized 'name' in your object schema
  _type: 'CustomImage'
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
