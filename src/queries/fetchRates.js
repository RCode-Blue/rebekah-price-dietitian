import { graphql, useStaticQuery } from "gatsby";

const FetchRates = () => {
  const rates = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { usage: { eq: "expect" }, location: { eq: "rates" } }
        }
        sort: { fields: frontmatter___index, order: ASC }
      ) {
        nodes {
          frontmatter {
            description
            rate
            duration
            medium
          }
          html
          id
        }
      }
    }
  `);
  return rates;
};

export default FetchRates;
