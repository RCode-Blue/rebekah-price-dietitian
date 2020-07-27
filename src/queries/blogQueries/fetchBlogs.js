import { graphql, useStaticQuery } from "gatsby";

const FetchBlogs = () => {
  const blogsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            active: { eq: true }
            usage: { eq: "blog" }
            location: { eq: "blog" }
          }
        }
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
  return blogsData;
};

export default FetchBlogs;
