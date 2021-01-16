import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/styles/about.scss"
import team from "../images/team.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="About Hnatyshyn Gough" />
    <section className="about-1">
    <div className="about-1-content">
      <h2 className="uppercase">About us</h2>
      <h3>Hnatyshyn &amp; Gough Law: key phrase about the firm.</h3>
      <p>The complexities of today’s legal world are creating new challenges for people and businesses. From personal issues to corporate matters, many clients require detailed attention to specific issues that can only be supported by a dedicated focus.</p>
      <p>At Hnatyshyn Gough, we have assembled a team of lawyers to ensure our clients have access to a wide range of legal expertise in one location. Our firm is built on a broad foundation of knowledge, solidified by years of experience in every key area of legal practice.</p>
      <p>We are problem solvers and strategists. We believe in dispute resolution and alternatives to litigation, while retaining the resolve to achieve successful outcomes for clients in traditional forums as well.</p>
    </div>
    </section>
    <section className="about-2">
    <img src={team} />
    </section>
    <section className="about-3">
    <div className="about-3-content">
    <h3>Leaders in the legal community</h3>
    <p>We are leaders in the legal community, and our members have assumed roles of prominence and responsibility within the Law Society of Saskatchewan.</p>
    <p>Our commitment to clients also goes beyond the practice of law. Members of Hnatyshyn Gough are established leaders in legal education, mediation, and community initiatives. We strongly believe that to represent a community, you must be part of it. That is why the lawyers at Hnatyshyn Gough are actively involved in an array of boards and organizations, as well as enhancing the understanding of legal issues at the University of Saskatchewan, and throughout the community. Our firm has also been recognized as an exceptionally child friendly workplace and our lawyers praised for leadership in balancing work and family life.</p>
    <Link to="/our-team/" className="fatlink">Learn more about the Hnatyshyn Gough team</Link>
    </div>
    </section>
  </Layout>
)

export default IndexPage
