import type { CustomImage } from '@interfaces/customImage'

export interface EventPoster {
  _type: 'EventPoster'
  image: CustomImage
  caption?: string
  eventDate: string
}
