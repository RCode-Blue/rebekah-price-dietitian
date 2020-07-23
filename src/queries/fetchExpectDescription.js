import { graphql, useStaticQuery } from "gatsby";

const FetchExpectDescription = () => {
  const expectDescription = useStaticQuery(graphql`
    query {
      markdownRemark(
        frontmatter: {
          usage: { eq: "expect" }
          location: { eq: "description" }
        }
      ) {
        html
      }
    }
  `);
  return expectDescription;
};

export default FetchExpectDescription;
