export interface Identity {
  name: string
  logo: {
    asset: {
      _id: string
      url: string
      metadata: {
        lqip: string
      }
    }
    alt?: string
  }
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
