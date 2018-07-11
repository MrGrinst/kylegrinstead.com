import React from 'react'
import Link from 'gatsby-link'
import profilePic from '../img/kylegrinstead2018-500-minified.jpg'

const IndexPage = () => (
  <div className="container-fluid">
    <div className="container">
      <span id="top" className="anchor-tanker"></span>
      <div className="row top">
        <div className="col-sm-4 image-holder">
          <span className="me image image-full"><img src={profilePic} alt="" /></span>
        </div>
        <div className="col-sm-8">
          <div className="hello-box">
            <h1>Hi. I’m <strong>Kyle Grinstead</strong>.</h1>
            <a href="#work" className="button button-big">Find out more about me</a>
          </div>
        </div>
      </div>
    </div>

    <span id="work" className="anchor-tanker"></span>
    <div className="wrapper wrapper-style2">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <header>
              <h2>I am a...</h2>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <section className="box box-style1">
              <span className="fa featured fa-code"></span>
              <h3>Developer</h3>
              <p>Passionate about writing clean code, constant learning, and helping others. Currently working at <a href="https://instructure.com">Instructure</a>.</p>
            </section>
          </div>
          <div className="col-sm-4">
            <section className="box box-style1">
              <span className="fa featured fa-building-o"></span>
              <h3>Entrepreneur</h3>
              <p>Always brainstorming new ideas, building cool stuff with technology, and starting new ventures.</p>
            </section>
          </div>
          <div className="col-sm-4">
            <section className="box box-style1">
              <span className="fa featured utah-icon"></span>
              <h3>Utahn</h3>
              <p>Excited to be living in a state that has so much to offer, from beautiful hikes to amazing skiing and beyond.</p>
            </section>
          </div>
        </div>
        <br />
        <footer>
          <a href="#portfolio" className="button button-big">See some of my projects</a>
        </footer>
      </div>
    </div>

    <span id="portfolio" className="anchor-tanker"></span>
    <div className="wrapper wrapper-style3">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <header>
              <h2>Projects</h2>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <section className="box box-style1">
              <a className="no-dec" href="http://mrgrinst.github.io/rivet-archived-site/"><h3>Rivet</h3></a>
              <p>Although <a href="http://mrgrinst.github.io/rivet-archived-site/">Rivet is no more</a>, I’m very proud of the product I co-founded and built. If you’re interested, you can check out the <a href="https://github.com/MrGrinst/Rivet-iOS">iOS</a> or <a href="https://github.com/MrGrinst/Rivet-Android">Android</a> source code.</p>
            </section>
          </div>
          <div className="col-sm-4">
            <section className="box box-style1">
              <a className="no-dec" href="http://gamestridestudios.com"><h3>Gamestride Studios</h3></a>
              <p>A side project/company that I developed <a href="http://gamestridestudios.com/ahhh-round">Ahhh-round</a> under. It’s been a while since I’ve done anything with it, but I’ll revive it someday.</p>
            </section>
          </div>
          <div className="col-sm-4">
            <section className="box box-style1">
              <Link className="no-dec" to="blog"><h3>Blog</h3></Link>
              <p>A place to share my thoughts with anyone willing to listen. It’s something I should update more often; right now it’s a little bare.</p>
            </section>
          </div>
        </div>
        <br />
        <footer>
          <a href="#contact" className="button button-big">Get in touch with me</a>
        </footer>
      </div>
    </div>

    <span id="contact" className="anchor-tanker"></span>
    <div className="wrapper wrapper-style4 contact">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <header>
              <h2>Want to talk? Shoot me an email!</h2>
              <span>Email: <a href="mailto:kyle@kylegrinstead.com">kyle@kylegrinstead.com</a></span>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <h3>Or find me on ...</h3>
            <ul className="social">
              <li className="twitter"><a href="https://twitter.com/mrgrinst" className="fa fa-twitter"><span>Twitter</span></a></li>
              <li className="linkedin"><a href="https://linkedin.com/in/kylegrinstead/" className="fa fa-linkedin"><span>LinkedIn</span></a></li>
              <li className="github"><a href="https://github.com/mrgrinst" className="fa fa-github"><span>Github</span></a></li>
              <li className="googleplus"><a href="https://plus.google.com/+KyleGrinstead?rel=author" className="fa fa-google-plus"><span>Google Plus</span></a></li>
              <li className="rss"><Link to='/blog/rss.xml' className="fa fa-rss-square"><span>RSS</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
