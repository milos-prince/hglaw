import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PureTextHeader from "../components/pureTextHeader"
import "../components/styles/expertise.scss"
import plus from "../images/plus.svg"
import AreasOfPractice from "../components/areasOfPractice"

const IndexPage = () => (
  <Layout>
    <SEO title="Legal Services" />
    <PureTextHeader title="Legal Services" subtitle="Our lawyers are experienced professionals across a range of legal fields."
    paragraph="If you are not sure what type of services you need, please contact us to discuss. To learn more about our services, please click any of our areas of practice." />
    <AreasOfPractice />
  </Layout>
)

export default IndexPage
