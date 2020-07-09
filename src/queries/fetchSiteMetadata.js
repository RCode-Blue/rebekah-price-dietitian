import { graphql, useStaticQuery } from "gatsby";

const SiteMetaDataQuery = () => {
  const SiteMetaData = useStaticQuery(graphql`
    query {
      site {
        __typename
        siteMetadata {
          __typename
          title
          description
          author
        }
      }
    }
  `);
  // console.log(SiteMetaData);

  return SiteMetaData;
};

export default SiteMetaDataQuery;
