import React from "react";
import Img from "gatsby-image";

import Fetch404Images from "../queries/fetch404Images";

import "../styles/err404.scss";

const Err404 = () => {
  const data = Fetch404Images();
  if (data && data.Err404Pics.edges[0].node) {
    const err404Image = data.Err404Pics.edges[0].node;
    return (
      <div className="err-404">
        <div className="err-404__image">
          <Img fluid={err404Image.childImageSharp.fluid} />
        </div>
        <div className="err-404__txt">
          <div className="err-404__txt__title">
            Whoops, looks like you hit a bad apple
          </div>
          <div className="err-404__txt__line1">
            Why not check out our other awesome links?
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <i class="fas fa-spinner fa-spin fa-3x"></i>
    </div>
  );
};

export default Err404;
