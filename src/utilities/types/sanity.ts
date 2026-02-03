import page from '@schemas/page'

export const schemaTypes = [page]

export interface SanityImage {
  asset: {
    _id: string
    url: string
  }
  hotspot?: { x: number; y: number }
  crop?: { top: number; bottom: number; left: number; right: number }
}
