import React from "react"
import { Link } from "gatsby"
import david from "../../static/img/david.jpg"
import gillian from "../../static/img/gillian.jpg"
import don from "../../static/img/don.jpg"
import sarah from "../../static/img/sarah.jpg"


const homepageLawyers = () => (
<div className="homepage-lawyers">
    <h2 className="uppercase">Our team</h2>
    <div className="d-flex homepage-team-text">
      <h3 className= "max-500">A team of legal professionals you can trust.</h3>
      <p className="max-500 ml-5vw">Our skilled and exceptional lawyers have significant practical experience in a wide variety of legal disciplines. We are well prepared to deliver the best results for our clients.</p>
    </div>
    <div className="featured-lawyers">
      <img src={gillian} className="lawyer" />
      <img src={david} className="lawyer hidden-lawyer1" />
      <img src={don} className="lawyer" />
      <img src={sarah} className="lawyer hidden-lawyer2" />
    </div>
    <Link to="/lawyers/" className="uppercase fatlink">Meet the Hnatyshyn Gough team</Link>
</div>
)

export default homepageLawyers
