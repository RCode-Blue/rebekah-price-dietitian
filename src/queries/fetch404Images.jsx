import { graphql, useStaticQuery } from "gatsby";

const Fetch404Images = () => {
  const err404ImagesData = useStaticQuery(graphql`
    query {
      Err404Pics: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "404" }
        }
      ) {
        edges {
          node {
            name
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
  return err404ImagesData;
};

export default Fetch404Images;
