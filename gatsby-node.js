const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const lawyerTemplate = path.resolve(`src/templates/lawyer.js`);
  const result = await graphql(`{
     lawyerPages: allMarkdownRemark(
          limit: 1000,
          filter: {frontmatter: {templateKey: {eq: "lawyer-template"}}}) {
          edges {
            node {
              id
              frontmatter {
                path
              }
            }
          }
        }
     }
`)
  // Handle errors
  if (result.errors) {
     reporter.panicOnBuild(`Error while running GraphQL query.`)
     return
   }
    // creating the blog pages at the endpoints
  result.data.lawyerPages.edges.forEach(({ node }) => {
     createPage({
       path: node.frontmatter.path,
       component: lawyerTemplate,
       context: {}, // additional data can be passed via context
     })
   })
}