import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import Collapsible from "./collapsible"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerDesktop">
    <Link to="/"><img src={logo} className="logo"/></Link>
    <div className="linkUnderlineWrapper"><Link to="/about/" className="linkUnderline" activeClassName="activeLink">about</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/our-expertise/" className="linkUnderline" activeClassName="activeLink">Our expertise</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/our-team/" className="linkUnderline" activeClassName="activeLink">Our team</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline" activeClassName="activeLink">Contact us</Link></div>
    </div>
    <div className="headerMobile">
    <Collapsible>
    <div className="linkUnderlineWrapper"><Link to="/" className="linkUnderline l1" activeClassName="activeLink">home</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/about/" className="linkUnderline l2" activeClassName="activeLink">about</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/our-expertise/" className="linkUnderline l3" activeClassName="activeLink">Our expertise</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/our-team/" className="linkUnderline l4" activeClassName="activeLink">Our team</Link></div>
    <div className="linkUnderlineWrapper"><Link to="/contact/" className="linkUnderline l5" activeClassName="activeLink">Contact us</Link></div>
    </Collapsible>
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
