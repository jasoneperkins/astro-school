<<<<<<< HEAD
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
=======
export const HOME_PAGE_QUERY = `
  query GetHomePage {
    allPage(where: { slug: { current: { eq: "home" } } }) {
      title
      heroImage {
>>>>>>> 4fd0223847f8a683432f8d55c1dc7179851a95ad
        asset {
          _id
          url
        }
      }
    }
  }
`
