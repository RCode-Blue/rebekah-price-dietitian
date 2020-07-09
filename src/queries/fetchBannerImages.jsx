import { graphql, useStaticQuery } from "gatsby";

const FetchBannerImages = () => {
  const BannerImagesData = useStaticQuery(graphql`
    query {
      bannerPics: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "banner" }
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
  return BannerImagesData;
};

export default FetchBannerImages;
