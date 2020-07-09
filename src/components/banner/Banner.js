import React, { useState } from "react";

import BannerPics from "./BannerPics";

import FetchBannerImages from "../../queries/fetchBannerImages";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const data = FetchBannerImages();

  if ({ data }) {
    console.log({ data });

    return <BannerPics data={data} />;
  }

  return (
    <div>
      <h3>BANNER</h3>
      <div></div>
    </div>
  );
};

export default Banner;
