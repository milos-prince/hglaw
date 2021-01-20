import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/expertise.scss"

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
    
  </Layout>
)

export default IndexPage
