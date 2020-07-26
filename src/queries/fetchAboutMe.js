import { graphql, useStaticQuery } from "gatsby";

const FetchAboutMe = () => {
  const aboutMeText = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { usage: { eq: "about" }, active: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            usage
          }
          html
          htmlAst
        }
      }
    }
  `);
  return aboutMeText;
};

export default FetchAboutMe;
