import { graphql, useStaticQuery } from "gatsby";

const FetchProfileImage = () => {
  const ProfileImageData = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "about" }
          name: { eq: "profile" }
        }
      ) {
        edges {
          node {
            absolutePath
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
  return ProfileImageData;
};

export default FetchProfileImage;
