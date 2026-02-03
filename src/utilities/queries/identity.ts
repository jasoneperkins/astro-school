import { fetchGraphQL } from '@services/sanity'

export const identityQuery = `
  query GetIdentity {
    Identity(id: "identity") {
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
  const data = await fetchGraphQL<{ allPage: any[] }>(identityQuery)
  return data.allPage[0]
}
