import React from "react";
import { graphql } from "gatsby";

import Navbar from "../components/Navbar";

import "../styles/main.scss";
import "../styles/shared/shared.scss";
// import "../styles/templates/blogTemplate.scss";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, excerpt } = markdownRemark;

  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="blog section-layout section-text">
        <div className="blog__post">
          <h3>{frontmatter.title}</h3>
          <div
            className="blog__post__content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
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
