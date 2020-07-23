import { graphql, useStaticQuery } from "gatsby";

const FetchAboutMe = () => {
  const aboutMeText = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { usage: { eq: "about" } } }) {
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
