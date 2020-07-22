module.exports = {
  siteMetadata: {
    title: "Rebekah Price Dietitian",
    description: "Professional website for Rebekah Price",
    author: "Ricky Liew",
  },

  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bannerslides`,
        path: `${__dirname}/src/assets/content/banner/slides/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `maincontent`,
        path: `${__dirname}/src/assets/content/main/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footercontent`,
        path: `${__dirname}/src/assets/content/footer/`,
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Martel`,
            variants: [`600`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`],
          },
          {
            family: `Quicksand`,
            variants: [`300`, `400`, `500`],
          },
        ],
      },
    },
  ],
};
