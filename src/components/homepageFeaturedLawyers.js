import React from "react"
import { Link } from "gatsby"
import gillian from "../../static/img/gillian.jpg"
import don from "../../static/img/don.jpg"
import sheila from "../../static/img/sheila.jpg"
import sarah from "../../static/img/sarah.jpg"


const homepageLawyers = () => (
<div className="homepage-lawyers">
    <h2 className="uppercase">Our team</h2>
    <div className="d-flex homepage-team-text">
      <h3 className= "max-500">A team of legal professionals you can trust.</h3>
      <p className="max-500 ml-5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh.</p>
    </div>
    <div className="featured-lawyers">
      <img src={gillian} className="lawyer" />
      <img src={don} className="lawyer hidden-lawyer1" />
      <img src={sheila} className="lawyer" />
      <img src={sarah} className="lawyer hidden-lawyer2" />
    </div>
    <Link to="/our-team/" className="uppercase" className="fatlink">Meet the entire Hnatyshyn Gough team</Link>
</div>
)

export default homepageLawyers
