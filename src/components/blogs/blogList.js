import React from "react";
import { Link } from "gatsby";

import FetchBlogs from "../../queries/blogQueries/_fetchBlogsMain";
import FetchContentfulBlogs from "../../queries/blogQueries/_fetchContentfulBlogsMain";

import "../../styles/main.scss";
import "../../styles/bloglist.scss";

const BlogList = (props) => {
  const data = FetchBlogs(props.type);

  const {
    allMarkdownRemark: { nodes },
  } = data;

  return (
    <div className="bloglist-wrapper section-wrap">
      {nodes.map((node) => {
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
