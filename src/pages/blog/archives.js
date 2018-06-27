import React from 'react'
import Link from 'gatsby-link'
import ArchivePage from '../../components/archive-page'

const Archives = ({ data }) => (
  <ArchivePage
    title='Archives'
    posts={data.allMarkdownRemark.edges}
  />
)

export const pageQuery = graphql`
  query ArchivesQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          html
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMM DD, YYYY")
            isoDate: date
            year: date(formatString: "YYYY")
            tags
          }
        }
      }
    }
  }
`

export default Archives
