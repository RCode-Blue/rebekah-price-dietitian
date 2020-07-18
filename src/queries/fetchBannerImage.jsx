import { graphql, useStaticQuery } from "gatsby";

import FetchBannerImages from "./fetchBannerImages";

export default FetchBannerImage = () => {
  return useStaticQuery(graphql`
    query($name: String!) {
      bannerPics: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "banner" }
          name: { eq: $name }
        }
      ) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
};
