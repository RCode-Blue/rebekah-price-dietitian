import { graphql, useStaticQuery } from "gatsby";

const FetchAllBlogs = () => {
  const allBlogsData = useStaticQuery(graphql`
    query {
      allContentfulRpdBlog(
        filter: { active: { eq: true }, usage: { eq: "blog" } }
      ) {
        totalCount
        nodes {
          title
          slug
          id
          blogEntry {
            json
          }
        }
      }
    }
  `);
  return allBlogsData;
};

export default FetchAllBlogs;
