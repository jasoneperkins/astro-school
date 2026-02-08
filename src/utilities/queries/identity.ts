import { fetchGraphQL } from '@services/sanity'
import type { Identity } from '@interfaces/identity'

export const identityQuery = `
  query GetIdentity {
    allIdentity {
      name
      logo {
        asset {
          _id
          url
          metadata { lqip }
        }
        alt
      }
      email
      phone
      address
      officeHours
      licenseNumber
      facebook
      instagram
      twitter
      linkedin
      youtube
      tiktok
      pinterest
    }
  }
`

export async function fetchIdentity() {
  const data = await fetchGraphQL<{ allIdentity: Identity[] }>(identityQuery)
  return data?.allIdentity?.[0] || null
}
