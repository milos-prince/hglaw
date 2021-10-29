import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "../components/styles/lawyer.scss"

const LawyerTemplate = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter
  return (
  <Layout>
    <SEO title={frontmatter?.name} />
    <div className="lawyer-header">
    <div className="hide-l lawyer-header-text"><h2 className="uppercase">Our Team</h2>
        <h1>{frontmatter?.name}</h1></div>
      <div className="lawyer-photo-section">
        <div className="lawyer-photo-shadow">
        <img src={frontmatter?.image} className="lawyer-photo" alt="lawyer headshot"/>
        </div>
      </div>
      <div className="lawyer-header-text">
        <div className="hide-s"><h2 className="uppercase">Our Team</h2>
        <h1>{frontmatter?.name}</h1></div>
        <p>{frontmatter?.intro}</p>
        <h4 className="uppercase mb-11">Email</h4>
  <a className="assistant-email" href={"mailto:"+frontmatter?.assistantEmail}>{frontmatter?.assistantEmail}</a>
        <h4 className="uppercase mb-11 areas">Practice areas</h4>
        <p className="mb-0">{frontmatter?.practiceAreas}</p>
      </div>
    </div>
    <div className="lawyer-content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
    
    </div>
  </Layout>
  )
  }
export default LawyerTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        intro
        assistant
        assistantEmail
        practiceAreas
        image
        metadata{
          description
          keywords
        }
      }
    }
  }
`