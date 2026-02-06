import type { SanityImage } from '@interfaces/sanityImage'

export interface Identity {
  name: string
  logo: SanityImage
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
