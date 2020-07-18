import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

import BannerSlides from "./BannerSlides";

import FetchBannerImages from "../../queries/fetchBannerImages";
import FetchBannerSlides from "../../queries/fetchBannerSlides";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../../styles/main.scss";
import "../../styles/banner.scss";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const bannerImages = FetchBannerImages();
  const slides = FetchBannerSlides();

  console.log(typeof bannerImages.bannerPics.edges);

  if ({ slides }) {
    return (
      <div className="banner">
        <BannerSlides bannerImages={bannerImages} slides={slides} />
      </div>
    );
  }

  return (
    <div>
      <h3>BANNER</h3>
      <div></div>
    </div>
  );
};

export default Banner;
