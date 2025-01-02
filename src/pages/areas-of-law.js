import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PureTextHeader from "../components/pureTextHeader"
import "../components/styles/expertise.scss"
import AreasOfPractice from "../components/areasOfPractice"

const IndexPage = () => (
  <Layout>
    <SEO title="Legal Services" />
    <PureTextHeader title="Legal Services" subtitle="Our lawyers are experienced professionals across a range of legal fields."
    paragraph="To learn more about our services, please click any of our areas of practice. If you are not sure what type of services you need, please contact us to discuss." />
    <AreasOfPractice />
  </Layout>
)

export default IndexPage
