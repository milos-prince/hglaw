/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./styles/layout.css"
import "./styles/global.scss"
import footerLogo from "../images/hgLogoInverse.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main style={{maxWidth:1440, margin:'auto'}}>{children}</main>
        <footer>
          <div className="footerContent">
            <img src={footerLogo} className="footer-logo" alt="footer logo" />
            <div>
            <p>
            <b>Phone</b>
             <br />
             <a href="tel:306-653-5150">306-653-5150</a>
             </p>
             <p>
            <b>Fax</b>
            <br />
            306-652-5859</p>
            </div>
            <div>
              <p>
                <b>Saskatoon office</b><br />
                1809 Lorne Avenue<br />
                Saskatoon, Saskatchewan <br />
                S7H 1Y5<br />
                <br />
                <b>Watrous office</b><br />
                By appointment only<br />
                Watrous, Saskatchewan
              </p>
            </div>
            <div>
            <ul>
              <Link to="/lawyers/" ><li>Meet the HG Law Team</li></Link>
              <Link to="/areas-of-law/" ><li>Practice Areas</li></Link>
              <Link to="/contact/" ><li>Contact</li></Link>
              <Link to="/about/" ><li>About us</li></Link>
            </ul>
            </div>
          </div>
        </footer>
        <div className="post-foot"></div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
