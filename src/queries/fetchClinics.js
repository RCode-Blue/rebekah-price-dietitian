import { graphql, useStaticQuery } from "gatsby";

const FetchClinics = () => {
  const clinicsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { usage: { eq: "clinics" }, active: { eq: true } }
        }
      ) {
        nodes {
          frontmatter {
            clinic_name
            address1
            address2
            suburb
            state
            postcode
            clinic_url
            time1
            time2
            notes
          }
          id
          html
        }
      }
    }
  `);
  return clinicsData;
};

export default FetchClinics;
