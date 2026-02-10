import type { CustomImage } from '@interfaces/customImage'
import type { EventPoster } from '@interfaces/eventPoster'

export interface Identity {
  _type: 'Identity'
  name: string
  logo: CustomImage
  eventPosters?: EventPoster[]
  email: string
  phone: string
  address: string
  officeHours: string
  licenseNumber?: string
  facebook?: string
  instagram?: string
  twitter?: string
  linkedin?: string
  youtube?: string
  tiktok?: string
  pinterest?: string
}
