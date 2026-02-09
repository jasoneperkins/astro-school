export interface IconCard {
  _key: string
  title: string
  description: string
  color: 'red' | 'blue' | 'green' | 'orange'
  icon?: {
    asset: {
      url: string
      _id: string
    }
    alt?: string
  }
}
