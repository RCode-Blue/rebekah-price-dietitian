import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const FetchAllBlogs = () => {
  const allBlogsData = useStaticQuery(graphql`
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
          slug
          id
          intro {
            intro
          }
          picture {
            description
            fluid {
              src
              ...GatsbyContentfulFluid
            }
          }
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
