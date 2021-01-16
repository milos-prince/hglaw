/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./custom.scss"

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
            <div>
            <p>601-402 21st Street East 
            <br />Saskatoon, SK S7K 0C3</p>
            <p>Fax: (306) 652-5859<br />
            Phone: phone <br />
            Email: <a href="mailto:lbelloc-pinder@hglaw.ca">lbelloc-pinder@hglaw.ca</a></p>
            </div>
            <div>
            <h2>Call me: <a href="tel:306-653-5154">(306) 653-5154</a></h2>
            <p>Fax: (306) 652-5859</p>
            <p>Email: <a href="mailto:lbelloc-pinder@hglaw.ca">lbelloc-pinder@hglaw.ca</a></p>
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
