import React from "react";

import AboutMeData from "../../queries/fetchAboutMe";

import "../../styles/main.scss";
import "../../styles/about.scss";

const AboutMe = () => {
  const htmlContent = AboutMeData().allMarkdownRemark.nodes[0].html;

  return (
    <div className="about__text__profile section-text">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default AboutMe;
