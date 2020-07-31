import React from "react";
import { graphql } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Img from "gatsby-image";

import Navbar from "../components/Navbar";

import "../styles/main.scss";
import "../styles/shared/shared.scss";
import "../styles/templates/contentfulBlogTemplate.scss";

export default function Template({ data }) {
  console.log(data.contentfulRpdBlog);

  const {
    title,

    id,
    picture,
    slug,
    blogEntry,
  } = data.contentfulRpdBlog;
  const { json } = blogEntry;

  // console.log(blogEntry);
  // console.log(typeof json);
  // console.log(json);

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.HR]: (node, children) => <hr />,
    },
    renderMark: {
      [BLOCKS.BOLD]: (node, children) => <b>{children}</b>,
      [BLOCKS.ITALIC]: (node, children) => <i>{children}</i>,
    },
  };

  return (
    <div>
      <Navbar />
      <div className="blog section-wrap section-text">
        <div className="blog__post">
          <div className="blog__post__img">
            <Img fluid={picture.fluid} />
          </div>
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
      slug
      id
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
`;
