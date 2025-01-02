import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import MobileMenu from "./mobileMenu"

import hamburger from "../images/hamburger.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerDesktop">
    <Link to="/"><img src={logo} className="logo" alt="HG Law logo"/></Link>
    <div className="linkUnderlineWrapper"><Link to="/about/" className="linkUnderline" activeClassName="activeLink">about</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/areas-of-law/" className="linkUnderline" activeClassName="activeLink">Areas of law</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/lawyers/" className="linkUnderline" activeClassName="activeLink">Lawyers</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline" activeClassName="activeLink">Contact us</Link></div>
    </div>
    <div className="headerMobile">
    <MobileMenu opener={hamburger}>
    <div className="linkUnderlineWrapper"><Link to="/" className="linkUnderline l1" activeClassName="activeLink">home</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/about/" className="linkUnderline l2" activeClassName="activeLink">about</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/areas-of-law/" className="linkUnderline l3" activeClassName="activeLink">Areas of law</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/lawyers/" className="linkUnderline l4" activeClassName="activeLink">Lawyers</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline l5" activeClassName="activeLink">Contact us</Link></div>
    </MobileMenu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
