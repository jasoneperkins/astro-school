import { fetchGraphQL } from '@lib/sanity.service'

export const aboutPageQuery = `
  query GetAboutPage {
    allAboutPage(limit: 1) {
      title
      sections {
        __typename
        ... on PhilosophySection {
          tagline
          title
          description
          image {
            asset {
              url
            }
          }
          imageLeft
        }
        ... on StatsSection {
          stats {
            label
            value
          }
        }
      }
    }
  }
`

export async function fetchAboutPage() {
	const data = await fetchGraphQL<{ allAboutPage: AboutPageData[] }>(
		aboutPageQuery
	)
	return data.allAboutPage[0]
}
