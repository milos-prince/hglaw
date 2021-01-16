import React from "react"
import don1 from "../images/don1.png"
import don2 from "../images/don2.gif"
import don3 from "../images/don3.gif"
import don4 from "../images/don4.gif"


const homepageLawyers = () => (
<div className="homepage-lawyers">
    <h2 className="uppercase">Our team</h2>
    <div className="d-flex">
      <h3 className= "max-500">A team of legal professionals you can trust.</h3>
      <p className="max-500 ml-5vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh.</p>
    </div>
    <div className="featured-lawyers">
      <img src={don1} />
      <img src={don3} />
      <img src={don2} />
      <img src={don4} />
    </div>
    <a href="" className="uppercase">Meet the entire Hnatyshyn-Gough team</a>
</div>
)

export default homepageLawyers
