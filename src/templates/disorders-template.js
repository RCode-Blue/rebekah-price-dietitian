import React from "react";
import { graphql } from "gatsby";

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

const disorderTemplate = ({ data }) => {
  // console.log({ data });

  return <div className="">Disorder Template</div>;
};

export const query = graphql`
  query FetchDisorder($slug: String) {
    disorders: allMarkdownRemark(
      filter: {
        frontmatter: {
          slug: { eq: $slug }
          usage: { eq: "services" }
          location: { eq: "disorders" }
          active: { eq: true }
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          title
        }
        html
      }
    }
  }
`;

export default disorderTemplate;
