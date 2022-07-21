import React from "react"
import Accordian from "./accordian"
import "../components/styles/our-team.scss"


const AreasOfPractice = ({title, subtitle, paragraph}) => (

<section className="our-expertise-content">
<Accordian title="Arbitration">
  <div className="accordianContent">
  <p>An arbitrator is a neutral third party who has the authority to make a decision about a dispute.  Arbitration is a cost-effective alternative to court; in fact, people who are self-represented often find that arbitration is a more accessible forum than court.  Hnatyshyn Gough has highly skilled arbitrators with considerable experience in the areas of family law, as well as labour and employment.</p>    
  <h2>Arbitrators at Hnatyshyn Gough:</h2>
  <ul>
    <li>Sheila Denysiuk, QC</li>
    <li>Leslie Belloc-Pinder, QC</li>
    <li>Jenny English</li>
  </ul>
  </div>
</Accordian>

<Accordian title="Civil Litigation">
  <div className="accordianContent">
 <p>At Hnatyshyn Gough, we recognize that a lawsuit can be a stressful experience, however, it is sometimes the best way to resolve a dispute. Our litigators are ready to represent your interests while also providing you with practical guidance to keep costs manageable.   Whether your lawsuit is straightforward or complex, we will work hard to ensure that you understand the process, legal issues, and range of outcomes.</p>
  <h2>Civil litigation lawyers at Hnatyshyn Gough:</h2>
  <ul>
    <li>Brent Gough, QC</li>
    <li>Leslie Belloc-Pinder, QC</li>
    <li>Jenny English</li>
    <li>Adam Hnatyshyn</li>
    <li>Sarah Nordin</li>
    
  </ul>
  </div>
</Accordian>

<Accordian title="Construction Law">
  <div className="accordianContent">
  <p>Hnatyshyn Gough has built a strong team ready to support those in the construction industry with their legal needs.  Whether you are an owner, contractor, subcontractor or supplier, we can help protect your interests on projects and address your legal issues involving financing, contracts, builders’ liens, and litigation.</p>
  <h2>Construction law lawyers at Hnatyshyn Gough:</h2>
  <ul>
    <li>Brent Gough, QC</li>
    <li>Adam Hnatyshyn</li>
    <li>Sarah Nordin</li>
    
  </ul>
  </div>
</Accordian>

<Accordian title="Corporate Commercial">
  <div className="accordianContent">
  <p>Hnatyshyn Gough offers a comprehensive corporate commercial practice, with services targeted to all aspects of business law.  We can support you at every stage of your business: incorporating a new venture, providing ongoing support to established businesses, or winding down an enterprise.  We can also assist you with commercial matters, including partnerships and limited partnerships, mergers and acquisitions, contracts, and organizational planning. Our lawyers are proud to be part of your team and look forward to celebrating your success.</p>
  <h2>The corporate commercial lawyers at Hnatyshyn Gough are:</h2>
  <ul>
    <li>David Hnatyshyn, QC</li>
    <li>Adam Hnatyshyn</li>
    
  </ul>
  </div>
</Accordian>

<Accordian title="Employment Law">
  <div className="accordianContent">
  <p>Hnatyshyn Gough offers an extensive range of services with respect to employment law; we act for diverse clients, including employees, employers and unions, in all types of forums. We are ready to work with you on matters ranging from complaints, terminations, investigations, occupational health and safety, human rights and more.</p>
  <h2>Employment law lawyers at Hnatyshyn Gough:</h2>
  <ul>
    <li>Brent Gough, QC</li>
    <li>Adam Hnatyshyn</li>
    <li>Sarah Nordin</li>
    <li>Labour arbitrators (see arbitration)</li>
  </ul>
  </div>
</Accordian>

<Accordian title="Family Law">
  <div className="accordianContent">
  <p>Hnatyshyn Gough has a long history of helping clients navigate complex family law matters with compassion.  Our lawyers use a client-centered approach, and work with you to determine the best path forward to achieving resolution and closure. We can assist with all areas of family law, including separation, divorce, adoption, property division, parenting, spousal maintenance and child support. We have the training, skills, and experience to guide you through all forms of dispute resolution, including negotiation, mediation, collaborative law, arbitration, or litigation.</p>
  <h2>Family law lawyers at Hnatyshyn Gough:</h2>
  <ul>
  <li>Donald McIver, QC</li>
  <li>Jenny English</li>
  <li>Gillian Gough</li>
  <li>Sarah Nordin</li>
  
  </ul>
  </div>
</Accordian>

<Accordian title="Mediation">
  <div className="accordianContent">
  <p>Mediation is a form of dispute resolution that involves a negotiation between two parties with the assistance of a neutral third party.  Hnatyshyn Gough has a team of highly skilled mediators with experience in a variety of areas of law. Let us help you resolve complex legal problems in areas such as family law, construction, insurance, and other civil disputes.</p>
  <h2> Mediators at Hnatyshyn Gough:</h2>
  <ul>
    <li>Donald McIver, QC</li>
    <li>Brent Gough, QC</li>
    <li>Sarah Nordin</li>
  </ul>
  </div>
</Accordian>

<Accordian title="Real Estate">
  <div className="accordianContent">
  <p>All our lawyers are available to assist you with your real estate transactions, including those involving residential, recreational or commercial property. Whether you are buying, selling, transferring, or mortgaging property, Hnatyshyn Gough has an array of practitioners to handle any real estate transaction on your behalf.</p>
  </div>
</Accordian>

<Accordian title="Trademark">
  <div className="accordianContent">
  <p>A trademark is a unique way of distinguishing your company’s goods and services from that of another. Registering your trademark provides your company with exclusive rights and helps to cement its reputation and brand in a competitive market.</p>
  <h2>Trademark agents at Hnatyshyn Gough:</h2>
  <ul>
    <li>David Hnatyshyn, QC</li>
  </ul>
  </div>
</Accordian>
<Accordian title="Wills and Estates">
  <div className="accordianContent">
  <p>Hnatyshyn Gough will provide guidance, as well as administrative and legal support, for matters ranging from estate planning to estate administration.  If you require a will, power of attorney, or family trust, we can assist with structuring your estate to ensure that your goals are met and your mind is at ease. We maintain a compassionate and client-centred approach, and understand your need for efficiency and support following the death of a loved one.</p>
  <h2>Wills and estates lawyers at Hnatyshyn Gough:</h2>
  <ul>
    <li>David Hnatyshyn, QC</li>
    <li>Brent Gough, QC</li>
    <li>Adam Hnatyshyn</li>
    <li>Gillian Gough</li>
    <li>Sarah Nordin</li>
    
  </ul>
  </div>
</Accordian>
</section>
)

export default AreasOfPractice
