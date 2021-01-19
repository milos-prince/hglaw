import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/our-team.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <section className="our-team-1">
      <div className="our-team-1a">
      <h2 className="uppercase">Meet our team</h2>
      <h3>Committed to understanding the diverse needs of our clients.</h3>
      </div>
      <div className="our-team-1b">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor.
      </p>
      </div>
    </section>
    <section className="our-team-content">
      <div className="team-grid-wrapper">
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
        <div className="test"></div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
