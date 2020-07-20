import { graphql, useStaticQuery } from "gatsby";

const FetchBannerSlides = () => {
  const BannerSlidesData = useStaticQuery(graphql`
    query {
      bannerSlides: allMarkdownRemark(
        filter: { frontmatter: { active: { eq: true } } }
        sort: { fields: frontmatter___index, order: ASC }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              slug
              index
              name
              active
              title
              content
              link
              linkurl
              imagename
            }
          }
        }
      }
    }
  `);

  return BannerSlidesData;
};

export default FetchBannerSlides;
