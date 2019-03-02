import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({
  data: {
    site: {
      siteMetadata: { title, author },
    },
  },
}) => (
  <div>
    <h1>
      Hello, welcome to {title} by {author}
    </h1>

    <ul>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export const rootQuery = graphql`
  query rootQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
