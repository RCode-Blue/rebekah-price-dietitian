import { graphql, useStaticQuery } from "gatsby";

const FetchAttribution = () => {
  const AttributionContent = useStaticQuery(graphql`
    query {
      attribution: allMarkdownRemark(
        filter: { frontmatter: { usage: { eq: "attribution" } } }
        sort: { fields: frontmatter___index, order: ASC }
      ) {
        nodes {
          frontmatter {
            index
            usage
            location
            contributor
            contributor_url
            website
            resource_url
            resource_type
          }
          id
        }
      }
    }
  `);

  return AttributionContent;
};

export default FetchAttribution;
