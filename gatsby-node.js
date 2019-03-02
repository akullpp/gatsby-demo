const path = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) =>
  graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            html
            frontmatter {
              category
              path
            }
          }
        }
      }
    }
  `).then(({ data: { allMarkdownRemark: { edges } } }) =>
    edges.forEach(({ node: { frontmatter } }) =>
      createPage({
        path: frontmatter.path,
        component: path.resolve(`src/templates/${frontmatter.category}.js`),
      })
    )
  )
