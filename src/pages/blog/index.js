import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <div>
    <h1>Post</h1>
    <ul>
      {edges.map(({ node: { frontmatter: { title, date, path } } }) => (
        <li key={path}>
          <Link to={path}>
            {title} ({date})
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
            path
          }
        }
      }
    }
  }
`
