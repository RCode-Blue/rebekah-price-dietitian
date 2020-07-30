const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query FetchDisorders {
      disorders: allMarkdownRemark(
        filter: {
          frontmatter: {
            usage: { eq: "services" }
            location: { eq: "disorders" }
            active: { eq: true }
          }
        }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  result.data.disorders.nodes.forEach((disorder) => {
    createPage({
      path: `/services/disorders/${disorder.frontmatter.slug}`,
      component: path.resolve(`src/templates/disorders-template.js`),
      context: { slug: disorder.frontmatter.slug },
    });
  });
};

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = require.resolve("./src/templates/blogTemplate.js");

//   const result = await graphql(`
//     {
//       allMarkdownRemark(
//         filter: { frontmatter: { active: { eq: true }, usage: { eq: "blog" } } }
//         sort: { fields: frontmatter___name, order: ASC }
//       ) {
//         nodes {
//           frontmatter {
//             slug
//             title
//           }
//         }
//       }
//     }
//   `);

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   }

//   result.data.allMarkdownRemark.nodes.map((node) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: blogPostTemplate,
//       context: {
//         slug: node.frontmatter.slug,
//       },
//     });
//   });
// };

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = require.resolve(
    "./src/templates/contentfulBlogTemplate.js"
  );

  const result = await graphql(`
    {
      allContentfulRpdBlog(
        filter: { active: { eq: true }, usage: { eq: "blog" } }
      ) {
        totalCount
        nodes {
          title
          slug
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allContentfulRpdBlog.nodes.map((node) => {
    createPage({
      path: node.slug,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};
