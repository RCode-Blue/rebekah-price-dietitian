import React from "react";
import Img from "gatsby-image";

import FetchProfileImage from "../../queries/fetchProfileImage";

import "../../styles/main.scss";
import "../../styles/about.scss";

const ProfileImage = () => {
  const data = FetchProfileImage();
  // console.log(data.allFile.edges[0].node.childImageSharp.fluid);
  const image = data.allFile.edges[0].node.childImageSharp.fluid;

  return (
    <div className="about__img">
      <Img fluid={image} />
    </div>
  );
};

export default ProfileImage;
