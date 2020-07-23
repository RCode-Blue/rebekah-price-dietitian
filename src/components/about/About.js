import React from "react";

import ProfileImage from "./ProfileImage";
import AboutMe from "./AboutMe";

import "../../styles/main.scss";
import "../../styles/about.scss";

const About = () => {
  return (
    <div className="about">
      <ProfileImage />
      <div className="about__text">
        <h3 className="about__text__title">Hi! I'm Rebekah</h3>
        <AboutMe />
      </div>
    </div>
  );
};

export default About;
