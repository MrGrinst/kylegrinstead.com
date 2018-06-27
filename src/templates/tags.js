import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import ArchivePage from '../components/archive-page'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pathContext.tag

    return (
      <ArchivePage
        title={`Tag: ${tag}`}
        posts={posts}
      />
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
