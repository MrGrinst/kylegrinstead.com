import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import favicon from '../img/favicon.ico'
import './bootstrap.css'
import './screen.css'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>
      <link rel="shortcut icon" type="image/ico" href={favicon}/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,600,700" rel="stylesheet" />
      <link href='https://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'/>
    </Helmet>
    <Navbar siteTitle={data.site.siteMetadata.heading} />
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        heading
      }
    }
  }
`
