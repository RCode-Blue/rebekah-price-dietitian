import { graphql, useStaticQuery } from "gatsby";

const FetchDisorders = () => {
  const disordersData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            usage: { eq: "services" }
            location: { eq: "disorders" }
            active: { eq: true }
          }
        }
        sort: { order: ASC, fields: frontmatter___index }
      ) {
        nodes {
          frontmatter {
            title
          }
          id
          html
        }
      }
    }
  `);
  return disordersData;
};

export default FetchDisorders;
