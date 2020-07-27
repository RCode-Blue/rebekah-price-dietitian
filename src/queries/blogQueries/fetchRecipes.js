import { graphql, useStaticQuery } from "gatsby";

const FetchRecipes = () => {
  const recipesData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            active: { eq: true }
            usage: { eq: "blog" }
            location: { eq: "recipe" }
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
  return recipesData;
};

export default FetchRecipes;
