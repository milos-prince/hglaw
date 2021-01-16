import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"


const hero = ({title, subtitle}) => (
<div className="homepage-hero">
  <div className="hero-tint">
  <div className="hero-title-wrapper">
  <h1>{title}</h1>
  </div>
  <h2>{subtitle}</h2>
  </div>
</div>
)

export default hero
