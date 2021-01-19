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
import logo from "../images/logo.png"

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
        <main style={{maxWidth:1800, margin:'auto'}}>{children}</main>
        <footer>
          <div className="footerContent">
            <img src={logo} className="footer-logo" />
            <div>
            <p>601-402 21st Street East 
            <br />Saskatoon, Saskatchewan, Canada <br />S7K 0C3</p>
            <p>Fax: (306) 652-5859<br />
            Phone: <a href="tel:306-653-5150">(306) 653-5150</a><br />
            Email: <a href="mailto:info@hglaw.ca">info@hglaw.ca</a></p>
            </div>
            <div>
            <ul>
              <Link to="/our-team/" ><li>Meet the HG Team</li></Link>
              <Link to="/our-expertise/" ><li>Practice Areas</li></Link>
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
