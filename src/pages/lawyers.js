import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LawyerGrid from "../components/hgLawyerGrid"
import PureTextHeader from "../components/pureTextHeader"
import "../components/styles/our-team.scss"


const IndexPage = () => (
  <Layout>
    <Seo title="Our Team" />
    <PureTextHeader title="Meet our team" subtitle="Committed to understanding the diverse needs of our clients."
    paragraph="" />
    <section className="our-team-content">
      <LawyerGrid />
    </section>
  </Layout>
)

export default IndexPage
