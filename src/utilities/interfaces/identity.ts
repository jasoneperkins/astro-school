export interface Identity {
  name: string
  email: string
  phone: string
  address: string
  officeHours: string
  licenseNumber?: string
  socials?: {
    facebook?: string
    instagram?: string
  }
}
