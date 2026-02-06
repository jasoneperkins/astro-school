import type { CustomImage } from '@interfaces/customImage'

export interface Identity {
  _type: 'Identity'
  name: string
  logo: CustomImage
  email: string
  phone: string
  address: string
  officeHours: string
  licenseNumber?: string
  socials?: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
    youtube?: string
    tiktok?: string
    pinterest?: string
  }
}
