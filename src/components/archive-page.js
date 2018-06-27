import React from 'react'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

const ArchivePage = ({
  title,
  posts
}) => {
  let currentYear = ''
  posts = posts.map(post => post.node)
  posts.forEach((post) => {
    if (currentYear !== post.frontmatter.year) {
      currentYear = post.frontmatter.year
      post.displayYear = true
    }
  })
  return (
    <div className="container-fluid container-fluid-page">
      <article className="page">
        <h1 className="entry_title"><b>{title}</b></h1>
        <hr/>
        <div id="blog-archives">
          {posts.map((post) => (
            <div key={post.fields.slug} className="row">
              <div className="col-sm-2 hidden-xs">
                {post.displayYear ? <h2>{post.frontmatter.year}</h2> : null}
              </div>
              <div className="col-xs-12 col-sm-10">
                <article>
                  <h1>
                    <Link to={post.fields.slug} >{post.frontmatter.title}</Link>
                    <small><time dateTime={post.frontmatter.isoDate} pubdate='true'>{post.frontmatter.date}</time></small>
                    { post.frontmatter.tags ?
                        <small><span className="categories">posted in {(post.frontmatter.tags).map(tag => [<Link key={tag} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>, <span key={tag + '1'}> </span>])}</span></small>
                        : null }
                  </h1>
                </article>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}

export default ArchivePage
