import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

import BannerSlides from "./BannerSlides";

import FetchBannerImages from "../../queries/fetchBannerImages.jsx";
import FetchBannerSlides from "../../queries/fetchBannerSlides";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../../styles/main.scss";
import "../../styles/banner.scss";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const bannerImages = FetchBannerImages();
  const slides = FetchBannerSlides();

  if ({ slides }) {
    return (
      <div>
        <BannerSlides bannerImages={bannerImages} slides={slides} />
      </div>
    );
  }

  return (
    <div>
      <i class="fas fa-spinner fa-spin fa-3x"></i>
    </div>
  );
};

export default Banner;
