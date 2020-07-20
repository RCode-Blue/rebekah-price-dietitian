import React from "react";
import Img from "gatsby-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../../styles/main.scss";
import "../../styles/banner.scss";

const BannerSlides = (props) => {
  const getCarouselProps = () => ({
    autoPlay: false,
    interval: 3000,
    infiniteLoop: true,
    transitionTime: 600,
    showThumbs: false,
    showArrows: true,
    useKeyboardArrows: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    selectedItem: 0,
    showStatus: false,
  });

  return (
    <Carousel {...getCarouselProps()} className="banner">
      {props.slides.bannerSlides.edges.map((element) => {
        const filteredImages = props.bannerImages.bannerPics.edges.filter(
          (edge) => edge.node.name == element.node.frontmatter.imagename
        );

        const id = element.node.id;
        const {
          active,
          content,
          imagename,
          index,
          link,
          linkurl,
          name,
          slug,
          title,
        } = element.node.frontmatter;

        return (
          <div key={id} className="slide">
            <div className="slide__img">
              <Img fluid={filteredImages[0].node.childImageSharp.fluid} />
            </div>
            <div className="slide__text">
              <div className="slide__text__name">{name}</div>
              <div className="slide__text__title">{title}</div>
              <div className="">
                <div className="slide__text__cta">
                  <div>{content}</div>
                  <div>
                    <a href={linkurl}>{link}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default BannerSlides;
