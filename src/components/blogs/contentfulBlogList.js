import React from "react";
import { Link } from "gatsby";

// import { BLOCKS } from "@contentful/rich-text-types";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// import FetchBlogs from "../../queries/blogQueries/_fetchBlogsMain";
import FetchContentfulBlogs from "../../queries/blogQueries/_fetchContentfulBlogsMain";

// import "../../styles/main.scss";
// import "../../styles/bloglist.scss";

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
  console.log(props.data);

  return (
    <div>
      {props.data.map((node) => {
        return (
          <div className="blog" key={node.id}>
            <h4 className="blog__title">{node.title}</h4>
            <Link to={node.slug}>
              <div className="blog__link">read more...</div>
            </Link>
          </div>
        );
      })}
    </div>
  );

  // props.data.map((node) => {
  //   console.log(node);
  //   return (
  //     <div className="blog" key={node.id}>
  //       <h4 className="blog__title">{node.title}</h4>
  //       <Link to={node.slug}>
  //         <div className="blog__link">read more...</div>
  //       </Link>
  //     </div>
  //   );
  // });

  // return <div>nothing</div>;
};

const MainBlogList = (props) => {
  // console.log(props);
  // const data = FetchBlogs(props.type);
  const contentfulData = FetchContentfulBlogs(props.type);

  if (contentfulData) {
    // console.log(contentfulData.allContentfulRpdBlog.nodes);

    const data = contentfulData.allContentfulRpdBlog.nodes;

    return (
      <div>
        <ContentfulBlogList data={data} />
      </div>
    );
  }

  return <div></div>;
};

export default MainBlogList;
