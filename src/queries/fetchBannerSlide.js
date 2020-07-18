const { useStaticQuery } = require("gatsby");

export default FetchBannerSlide = () => {
  return useStaticQuery(graphql`($index: Int!){
    allMarkdownRemark(
      filter: {
        frontmatter: {
          active: {eq:true},
          index: {eq: $index}
        }
      },
      sort: {
        fields: frontmatter__index,
        order: ASC
      }
    ) {
      edges{
        node{
          frontmatter{
            index
            name
            active
            slug
            link
            linkurl
            content
          }
        }
      }
    }
  }
  `);
};
