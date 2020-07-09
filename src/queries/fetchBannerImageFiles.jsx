import { graphql, useStaticQuery } from "gatsby";

const FetchBannerImages = () => {
  const BannerImagesData = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            size
            birthTime
            absolutePath
            relativePath
          }
        }
      }
    }
  `);
  return BannerImagesData;
};

export default FetchBannerImages;
