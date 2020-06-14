import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="twoPanel homepageSplit">
      <div className="homepageLHS">
        <div className="homepageBusinessCard">
        <h1>Leslie Belloc-Pinder, Q.C.</h1>
          <div className="twoPanel">
            <div>
            <ul><li>Arbitration</li><li>Adjudication</li><li>Decision-making</li></ul>
            </div>
            <div className="verticalSeperator"></div>
            <div className="d-flex align-center">
            <h4>Resolution</h4>
            </div>
          </div>
        <Link to="/about/"><button className="btn dtn-dark">Learn more</button></Link>
        </div>
      </div>
      <div className="homepageRHS d-flex">
        <div className="d-flex column colA">
        <div id="homepagePhoto"></div>
        <div className="lawyersPanel"><h2 className="mb-0"><Link to="/family-arbitration#note-to-lawyers">Information for lawyers</Link></h2></div>
        </div>
        <div className="d-flex column colB">
        <div className="colBTop">
          <p className="mb-0">Arbitration and mediation are forms of Alternate Dispute Resolution (ADR) intended to avoid the high cost and unpredictable outcomes that could result from going to court. Both mediation and arbitration are private. The parties who have a dispute, their issues and evidence, and the decision or agreement are confidential.</p>
        </div>
        <div id="homepagePhoto2"></div>
        </div>
      </div>
      
    </div>
  </Layout>
)

export default IndexPage
