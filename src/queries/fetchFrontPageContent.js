import { graphql, useStaticQuery } from "gatsby";

const FetchFrontPageContent = () => {
  const FrontPageContent = useStaticQuery(graphql`
    query {
      frontPageContent: allMarkdownRemark(
        filter: { frontmatter: { usage: { eq: "frontpage" } } }
      ) {
        edges {
          node {
            frontmatter {
              usage
            }
            html
            htmlAst
          }
        }
      }
    }
  `);

  return FrontPageContent;
};

export default FetchFrontPageContent;
