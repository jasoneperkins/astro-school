export const GET_HOMEPAGE = `
  query GetHomePage {
    allPage(where: { slug: { current: { eq: "home" } } }) {
      title
      heroImages {
        asset {
          _id
          url
        }
      }
      aboutImage {
        asset {
          _id
          url
        }
      }
    }
  }
`
