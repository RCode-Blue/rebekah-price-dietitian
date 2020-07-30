import { graphql, useStaticQuery } from "gatsby";

const FetchBlogs = () => {
  // console.log("test");
  const blogsData = useStaticQuery(graphql`
    query {
      allContentfulRpdBlog(
        filter: {
          active: { eq: true }
          usage: { eq: "blog" }
          location: { eq: "blog" }
        }
      ) {
        totalCount
        nodes {
          title
          usage
          location
          active
          slug
          blogEntry {
            content {
              content {
                value
              }
            }
            blogEntry
          }
        }
      }
    }
  `);
  return blogsData;
};

export default FetchBlogs;
