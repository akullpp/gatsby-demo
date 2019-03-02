import React from 'react'
import { graphql } from 'gatsby'

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date },
    },
  },
}) => (
  <div>
    <h1>{title}</h1>
    <h2>{date}</h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

export const postQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`
