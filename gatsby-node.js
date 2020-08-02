const path = require("path");

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
