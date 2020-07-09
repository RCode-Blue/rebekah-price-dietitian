import React from "react";
import { graphql } from "gatsby";

export const bannerImagesFragment = graphql`
  fragment BannerImages on Site {
    __typename
    siteMetadata {
      __typename
      title
      description
      author
    }
  }
`;
