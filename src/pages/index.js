import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import HomepageAboutPanel from "../components/homepageAboutPanel"
import HomepageLawyersPanel from "../components/homepageFeaturedLawyers"
import "../components/styles/homepage.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero title="Serving Saskatchewan since 1933" subtitle="Hnatyshyn Gough Law "/>
    <HomepageAboutPanel />
    <HomepageLawyersPanel />
    <div className="homepageFooterImage">
    </div>
  </Layout>
)

export default IndexPage
