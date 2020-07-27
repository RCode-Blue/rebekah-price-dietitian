import React from "react";

import ProfileImage from "./ProfileImage";
import AboutMe from "./AboutMe";

import "../../styles/main.scss";
import "../../styles/about.scss";

const About = () => {
  return (
    <div className="about">
      <h3 className="about__title">Hi! I'm Rebekah</h3>
      <ProfileImage />

      <div className="about__text">
        <AboutMe />
      </div>
    </div>
  );
};

export default About;
