import React from "react";

import AboutMeData from "../../queries/fetchAboutMe";

import "../../styles/main.scss";
// import "../../styles/main.scss";
import "../../styles/about.scss";

const AboutMe = () => {
  // var paragraphs = [];
  // const data = AboutMeData().allMarkdownRemark.nodes[0].htmlAst.children;
  const htmlContent = AboutMeData().allMarkdownRemark.nodes[0].html;
  // console.log(AboutMeData());

  return (
    <div className="about__text__profile section-text">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default AboutMe;
