import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

// import { BLOCKS } from "@contentful/rich-text-types";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// import FetchBlogs from "../../queries/blogQueries/_fetchBlogsMain";
import FetchContentfulBlogs from "../../queries/blogQueries/_fetchContentfulBlogsMain";

import "../../styles/main.scss";
import "../../styles/contentfulBloglist.scss";

const ContentfulBlogList = (props) => {
  // console.log(props.data);

  return (
    <div>
      {props.data.map((node) => {
        // console.log(node);

        const { blogEntry, id, intro, picture, slug, title } = node;

        return (
          <div className="blog" key={id}>
            <div className="blog__thumb">
              <Img fluid={picture.fluid} />
            </div>
            <div className="blog__text">
              <h4 className="blog__text__title">{title}</h4>
              <div className="blog__text__summary section-text">
                {intro.intro}
              </div>
              <Link to={slug}>
                <div className="blog__text__link">read more...</div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MainBlogList = (props) => {
  // console.log(props);
  // const data = FetchBlogs(props.type);
  const contentfulData = FetchContentfulBlogs(props.type);

  if (contentfulData) {
    // console.log(contentfulData.allContentfulRpdBlog.nodes);

    const data = contentfulData.allContentfulRpdBlog.nodes;

    return (
      <div className="bloglist-wrapper">
        <h3>Blogs</h3>
        <ContentfulBlogList data={data} />
      </div>
    );
  }

  return (
    <div>
      <i class="fas fa-spinner fa-spin fa-3x"></i>
    </div>
  );
};

export default MainBlogList;
