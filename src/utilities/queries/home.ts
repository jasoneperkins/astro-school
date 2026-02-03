export const HOME_PAGE_QUERY = `
  query GetHomePage {
    allPage(where: { slug: { current: { eq: "home" } } }) {
      title
      heroImage {
        asset {
          _id
          url
        }
      }
    }
  }
`
