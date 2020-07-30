import React from "react";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Navbar from "../components/Navbar";

import "../styles/main.scss";
import "../styles/shared/shared.scss";
// import "../styles/templates/blogTemplate.scss";

export default function Template({ data }) {
  console.log(data.contentfulRpdBlog);

  const {
    title,
    usage,
    id,
    location,
    slug,
    blogEntry,
  } = data.contentfulRpdBlog;
  const { json } = blogEntry;

  console.log(blogEntry);
  console.log(typeof json);
  console.log(json);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.HR]: (node, children) => <hr />,
    },
  };

  return (
    <div>
      <Navbar />
      <div className="blog section-wrap section-text">
        <div className="blog__post">
          <h3>{title}</h3>
          {documentToReactComponents(json, options)}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($slug: String) {
    contentfulRpdBlog(slug: { eq: $slug }) {
      title
      usage
      id
      location
      slug
      blogEntry {
        json
      }
    }
  }
`;
