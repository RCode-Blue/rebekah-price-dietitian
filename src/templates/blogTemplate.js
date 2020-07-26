import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;

  console.log(data);

  return (
    <div className="blog">
      <div className="blog__post">
        <h3>{frontmatter.title}</h3>
        <div
          className="blog__post__content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(
      frontmatter: {
        slug: { eq: $slug }
        usage: { eq: "blog" }
        active: { eq: true }
      }
    ) {
      frontmatter {
        slug
        title
      }
      html
      excerpt(format: HTML)
    }
  }
`;
