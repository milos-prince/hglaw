import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Collapsible from "../components/collapsible"
import "../components/styles/expertise.scss"

import plus from "../images/plus.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Our expertise" />
    <div className="expertise-header">
      <div className="our-expertise-headlines">
        <h2 className="uppercase">Our Expertise</h2>
        <h3>Our lawyers are leading experts across a range of legal fields.</h3>
      </div>
      <div className="our-expertise-header-paragraph">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor.</p>
      </div>
    </div>
    <div className="our-expertise-content">
    <Collapsible opener={plus}>
    <h1>Family Law</h1>
    </Collapsible>

    </div>
    
  </Layout>
)

export default IndexPage
