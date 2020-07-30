import React from "react";
import { Link } from "gatsby";

import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import FetchBlogs from "../../queries/blogQueries/_fetchBlogsMain";
import FetchContentfulBlogs from "../../queries/blogQueries/_fetchContentfulBlogsMain";

import "../../styles/main.scss";
import "../../styles/bloglist.scss";

const BlogList = (props) => {
  // console.log(props);
  const {
    allMarkdownRemark: { nodes },
  } = props.data;
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

const ContentfulBlogList = (props) => {
  console.log(props.data.blogEntry);

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
      {documentToReactComponents(JSON.parse(props.data.blogEntry), options)}
    </div>
  );
};

const MainBlogList = (props) => {
  console.log(props);
  const data = FetchBlogs(props.type);
  const contentfulData = FetchContentfulBlogs(props.type);

  if (contentfulData) {
    // console.log(contentfulData.allContentfulRpdBlog.nodes);

    const data = contentfulData.allContentfulRpdBlog.nodes[0].blogEntry;

    return (
      <div>
        <ContentfulBlogList data={data} />
      </div>
    );
  }

  return <div>MainBlogList</div>;
};

export default MainBlogList;
