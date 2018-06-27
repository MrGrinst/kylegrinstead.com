import React from 'react'
import Link from 'gatsby-link'

const Navbar = ({ siteTitle }) => (
  <div className='my-navbar'>
    <div className='inner-navbar'>
      <Link
        className='pull-left navbar-title-header'
        to='/'
      >
        {siteTitle}
      </Link>
      <ul className='list-inline text-center pull-right'>
        <li>
          <Link to='/#contact'>Contact</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Navbar
