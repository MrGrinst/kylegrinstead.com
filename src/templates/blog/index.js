import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import truncatise from 'truncatise'

export default class IndexPage extends React.Component {
  render() {
    const { pathContext } = this.props
    const { index, first, last } = pathContext
    const { group: posts } = pathContext
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
      <div className="container-fluid blog_index">
        {posts
          .map(({ node: post }) => (
            <article key={post.id}>
              <header className="blog_post_header">
                <ul className="list-inline entry_title">
                  <li itemProp="name">
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </li>
                  <li><small className="date_after_header" itemProp="datePublished" content={post.frontmatter.date}>{post.frontmatter.date}</small></li>
                </ul>
                <small>by {post.fields.author}</small>
              </header>
              <div className="entry_content" itemProp="articleBody">
                <span dangerouslySetInnerHTML={{__html: truncatise(post.html, { StripHTML: false, TruncateLength: 200 })}} />
                <div className="read-more text-center">
                  <Link to={post.fields.slug}>Read More</Link>
                </div>
              </div>

            </article>
          ))}
        <div className="paginator text-center">
          <ul className="list-inline">
            <li>{ first ? <span>&larr; Older</span> : <Link to={`blog/${previousUrl}`}>&larr; Older</Link> }</li>
            <li>&nbsp;<Link to="blog/archives">Blog Archives</Link>&nbsp;</li>
            <li>{ last ? <span>Newer &rarr;</span> : <Link to={`blog/${nextUrl}`}>Newer &rarr;</Link> }</li>
          </ul>
        </div>
      </div>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.any
  }),
  pathContext: PropTypes.shape({
    group: PropTypes.array,
  })
}
