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
        path: `${__dirname}/src/content/banner/slides/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      },
    },
    `gatsby-transformer-remark`,
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
            variants: [`400`, `500`],
          },
        ],
      },
    },
  ],
};
