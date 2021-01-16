import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/our-team.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Our Team" />
    <section className="our-team-1">
      <div class="our-team-1a">
      <h2 className="uppercase">Meet our team</h2>
      <h3>Committed to understanding the diverse needs of our clients.</h3>
      </div>
      <div class="our-team-1b">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor.
      </p>
      </div>
    </section>
    <section>

    </section>
  </Layout>
)

export default IndexPage