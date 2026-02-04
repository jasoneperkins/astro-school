export interface Classroom {
  _type: 'classroom'
  title: string //
  slug: {
    current: string //
  }
  mainImage?: {
    asset: {
      _id: string
      url: string
      metadata: {
        lqip: string
      }
    }
    alt: string
  }
}
