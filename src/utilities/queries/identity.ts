import { fetchGraphQL } from '@services/sanity'
import type { Identity } from '@interfaces/identity'

export const identityQuery = `
  query GetIdentity {
    allIdentity {
      name
      email
      phone
      address
      officeHours
      licenseNumber
      socials {
        facebook
        instagram
      }
    }
  }
`

export async function fetchIdentity() {
  const data = await fetchGraphQL<{ allIdentity: Identity[] }>(identityQuery)
  return data?.allIdentity?.[0] || null
}
