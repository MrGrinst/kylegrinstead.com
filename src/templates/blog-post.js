import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import profilePic from '../img/kylegrinstead2018-500-minified.jpg'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  author,
  date,
  next,
  prev,
  siteUrl,
  slug
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="container-fluid post-container" itemScope itemType="http://schema.org/Article">
      <Helmet title={`${title} | ${author}`} />
      <div className="article-container">
        <article className="an_entry post" role="article">
          <header className="blog_post_header">
            <ul className="list-inline entry_title">
              <li itemProp="name">{title}</li>
              <li><small className="date_after_header" itemProp="datePublished" content={date}>{date}</small></li>
            </ul>
            <small>by {author} { tags ? '|' : null } {(tags || []).map(tag => [<Link key={tag} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>, <span key={tag + '1'}> </span>])}</small>
          </header>
          <div className="entry_content">
            <PostContent content={content} />
          </div>
        </article>
      </div>
      <div className="bottom-color-filled">
        <div className="bottom-deets" >
          <div itemProp="author" itemScope="" itemType="http://schema.org/Person">
            <link itemProp="sameAs" href="https://kylegrinstead.com"/>
            <link itemProp="email" href="mailto:kyle@kylegrinstead.com"/>
            <div className="written-by">
              <b>Written by <span itemProp="name">{author}</span> on {date}</b>
            </div>
            <div className="pic-social-stuff">
              <div className="pic-itself">
                <span className="me image image-full pull-right"><img itemProp="image" src={profilePic} alt="" /></span>
              </div>
              <ul className="social">
                <div className="inline-holder">
                  <li className="twitter text-center"><a href="http://twitter.com/mrgrinst" className="fa fa-twitter"><span>Twitter</span></a></li>
                </div>
                <div className="inline-holder">
                  <li className="googleplus text-center"><a href="http://plus.google.com/+KyleGrinstead?rel=author" className="fa fa-google-plus"><span>Google Plus</span></a></li>
                </div>
                <div className="inline-holder">
                  <li className="rss text-center"><Link to='blog/rss.xml' className="fa fa-rss-square"><span>RSS</span></Link></li>
                </div>
              </ul>
            </div>
          </div>
          <div className="row blogNav">
            {prev && (
              <Link className="pull-left" title={`Previous Post: ${prev.frontmatter.title}`} to={prev.fields.slug}>
                &laquo; {prev.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link className="pull-right" title={`Next Post: ${next.frontmatter.title}`} to={next.fields.slug}>
                {next.frontmatter.title} &raquo;
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.any,
  author: PropTypes.string,
  date: PropTypes.string,
  pathContext: PropTypes.any,
}

const BlogPost = ({ data, pathContext }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | ${post.fields.author}`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      author={post.fields.author}
      date={post.frontmatter.date}
      siteUrl={data.site.siteMetadata.siteUrl}
      slug={post.fields.slug}
      next={pathContext.next}
      prev={pathContext.prev}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        description
        tags
      }
      fields {
        author
        slug
      }
    }
  }
`
