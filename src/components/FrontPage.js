import React from "react";

import FetchFrontPageContent from "../queries/fetchFrontPageContent";

import "../styles/main.scss";
import "../styles/frontPage.scss";

const FrontPage = () => {
  const content = FetchFrontPageContent();
  if (content) {
    const mainText =
      content.frontPageContent.edges[0].node.htmlAst.children[0].children[0]
        .value;
    return (
      <div className="main-text">
        <p className="main-text__content">{mainText}</p>
      </div>
    );
  }
  return <div className="">Front Page</div>;
};

export default FrontPage;
