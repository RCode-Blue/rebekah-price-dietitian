import React, { useState } from "react";
import Img from "gatsby-image";

import {
  handleCarousel,
  handleCarouselRotate,
} from "../../scripts/bannerCarousel";

const BannerPics = (data) => {
  const [index, setIndex] = useState(0);
  // const data = FetchBannerImages();
  const bannerPics = data.data.bannerPics.edges;

  // setTimeout(setIndex(handleCarousel("next", bannerPics.length, index)), 2000);

  // console.log(index);

  return (
    <div>
      <div>
        <h3>--- banner ---</h3>
        <Img fluid={bannerPics[index].node.childImageSharp.fluid} />
      </div>
      <div>
        <button
          onClick={() => {
            setIndex(handleCarousel("prev", bannerPics.length, index));
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            setIndex(handleCarousel("next", bannerPics.length, index));
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default BannerPics;
