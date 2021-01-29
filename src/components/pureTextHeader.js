import React from "react"
import "../components/styles/our-team.scss"


const PureTextHeader = ({title, subtitle, paragraph}) => (

<section className="expertise-header">
  <div className="our-expertise-headlines">
<h2 className="uppercase">{title}</h2>
<h3>{subtitle}</h3>
  </div>
  <div className="our-expertise-header-paragraph">
<p>{paragraph}</p>
  </div>
</section>
)

export default PureTextHeader
