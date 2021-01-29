import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PureTextHeader from "../components/pureTextHeader"
import "../components/styles/expertise.scss"
import plus from "../images/plus.svg"
import AreasOfPractice from "../components/areasOfPractice"

const IndexPage = () => (
  <Layout>
    <SEO title="Our expertise" />
    <PureTextHeader title="Our Expertise" subtitle="Our lawyers are leading experts across a range of legal fields."
    paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor." />
    <AreasOfPractice />
  </Layout>
)

export default IndexPage
