import React from "react"
import { Link } from "gatsby"


const homepageLawyers = () => (
<div className="homepage-lawyers">
    <h2 className="uppercase">Our team</h2>
    <div className="d-flex homepage-team-text">
      <h3 className= "max-500">A team of legal professionals you can trust.</h3>
      <p className="max-500 ml-5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh.</p>
    </div>
    <div className="featured-lawyers">
      <div className="lawyer" />
      <div className="lawyer" />
      <div className="lawyer" />
      <div className="lawyer" />
    </div>
    <Link to="/our-team/" className="uppercase" className="fatlink">Meet the entire Hnatyshyn-Gough team</Link>
</div>
)

export default homepageLawyers
