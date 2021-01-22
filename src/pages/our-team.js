import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lawyer from "../components/lawyer"
import "../components/styles/our-team.scss"

import leslie from "../images/leslie.jpg"
import sheila from "../images/sheila.jpg"
import jenny from "../images/jenny.jpg"
import brent from "../images/brent.jpg"
import gillian from "../images/gillian.jpg"
import adam from "../images/adam.jpg"
import david from "../images/david.jpg"
import don from "../images/don.jpg"
import sarah from "../images/sarah.jpg"


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
        <Lawyer name="Leslie Belloc-Pinder Q.C." email="lbelloc-pinder@hglaw.ca" photo={leslie} />
        <Lawyer name="Sheila Denysiuk Q.C." email="sdenysiuk@hglaw.ca" photo={sheila} />
        <Lawyer name="Jenny English" email="jenglish@hglaw.ca" photo={jenny} />
        <Lawyer name="Brent Gough Q.C." email="bgough@hglaw.ca" photo={brent} />
        <Lawyer name="Gillian Gough" email="ggough@hglaw.ca" photo={gillian} />
        <Lawyer name="Adam Hnatyshyn" email="ahnatyshyn@hglaw.ca" photo={adam} />
        <Lawyer name="David Hnatyshyn Q.C." email="dhnatyshyn@hglaw.ca" photo={david} />
        <Lawyer name="Don McIver Q.C." email="dmciver@hglaw.ca" photo={don} />
        <Lawyer name="Sarah Norton" email="snorton@hglaw.ca" photo={sarah} />
      </div>
    </section>
  </Layout>
)

export default IndexPage
