import { graphql, useStaticQuery } from "gatsby";

const FetchPrograms = () => {
  const programsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            usage: { eq: "services" }
            location: { eq: "programs" }
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
  return programsData;
};

export default FetchPrograms;
