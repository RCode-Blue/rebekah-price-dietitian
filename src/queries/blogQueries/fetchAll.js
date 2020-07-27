import { graphql, useStaticQuery } from "gatsby";

const FetchAllBlogs = () => {
  const allBlogsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { active: { eq: true }, usage: { eq: "blog" } } }
        sort: { fields: frontmatter___name, order: ASC }
      ) {
        nodes {
          id
          excerpt(format: HTML)
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);
  return allBlogsData;
};

export default FetchAllBlogs;
