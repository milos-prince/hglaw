import React from "react"
import don1 from "../images/harvey1.png"
import { Link } from "gatsby"


const homepageLawyers = () => (
<div className="homepage-lawyers">
    <h2 className="uppercase">Our team</h2>
    <div className="d-flex">
      <h3 className= "max-500">A team of legal professionals you can trust.</h3>
      <p className="max-500 ml-5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh.</p>
    </div>
    <div className="featured-lawyers">
      <img src={don1} />
      <img src={don1} />
      <img src={don1} />
      <img src={don1} />
    </div>
    <Link to="/our-team/" className="uppercase" class="fatlink">Meet the entire Hnatyshyn-Gough team</Link>
</div>
)

export default homepageLawyers
