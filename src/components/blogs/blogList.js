import React from "react";
import { Link } from "gatsby";

import FetchBlogs from "../../queries/blogQueries/_fetchBlogsMain";

import "../../styles/main.scss";
import "../../styles/bloglist.scss";

const BlogList = (props) => {
  const data = FetchBlogs(props.type);
  console.log(props);

  const {
    allMarkdownRemark: { nodes },
  } = data;
  // console.log(nodes);

  return (
    <div className="bloglist-wrapper section-layout">
      {nodes.map((node) => {
        // console.log(node);
        const { id, excerpt } = node;
        const { slug, title } = node.frontmatter;
        return (
          <div className="blog" key={id}>
            <h4 className="blog__title">{title}</h4>

            <div
              className="blog__text section-text"
              dangerouslySetInnerHTML={{ __html: excerpt }}
            ></div>

            <Link to={slug}>
              <div className="blog__link">read more...</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
