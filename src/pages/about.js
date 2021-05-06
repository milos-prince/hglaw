import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import "../components/styles/about.scss"
import team from "../images/group.jpg"
import teamMobile from "../images/groupCropped.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="About Hnatyshyn Gough" />
    <section className="about-1">
    <div className="about-1-content">
      <h2 className="uppercase">About us</h2>
      <h3>Hnatyshyn Gough</h3>
      <p>The complexities of today’s world create new legal challenges for people and businesses. From personal issues to corporate matters, many clients require detailed attention to specific issues that can only be supported by a dedicated focus.</p>
      <p>Our firm has been part of the Saskatchewan legal landscape since 1933.  At Hnatyshyn Gough, we have assembled a team of lawyers to ensure that our clients have access to a wide range of services in one location. Our firm is built on a broad foundation of knowledge, solidified by years of experience in key areas of legal practice. Our newest lawyers bring fresh perspective, while those with decades of experience provide mentorship and guidance. At Hnatyshyn Gough, we value all forms of dispute resolution, while retaining the resolve to achieve successful outcomes for clients in litigation as well.</p>
    </div>
    </section>
    <section className="about-2">
    <img src={team} className="team-photo team-photo-desktop" /><img src={teamMobile} className="team-photo team-photo-mobile" />
    </section>
    <section className="about-3">
    <div className="about-3-content">
    <h3>Leaders in the legal community</h3>
    <p>Our commitment to clients goes beyond the practice of law.  The team at Hnatyshyn Gough includes established leaders in legal education, mediation, arbitration and community initiatives. Our community involvement extends to work with an array of boards and organizations, as well as roles of prominence and responsibility within the Law Society of Saskatchewan.</p>
    <Link to="/our-team/" className="fatlink">Learn more about the Hnatyshyn Gough team</Link>
    </div>
    </section>
  </Layout>
)

export default IndexPage
