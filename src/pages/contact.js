import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/styles/contact.scss"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
   <section className="contact-hero">

   </section>
   <section className="contact-content">
    <div className="contact-info">
      <h2 className="uppercase">Contact us</h2>

      <h4 className="uppercase mt-20">Phone</h4>
      <p className="mb-0">306-653-5150</p>

      <h4 className="uppercase mt-20">Fax</h4>
      <p className="mb-0">306-652-5859</p>

      <h4 className="uppercase mt-20">Mailing address</h4>
      <p className="mb-0">Hnatyshyn Gough</p>
      <p className="mb-0">601-402 21st Street East</p>
      <p className="mb-0">Saskatoon, Saskatchewan</p>
      <p className="mb-0">Canada</p>
      <p className="mb-0">S7K 0C3</p>
      
    </div>
    <div className="contact-form">
    <h2 className="uppercase">Online Request</h2>
        <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you/">
        <input type="hidden" name="form-name" value="contact" />
        <p className="d-none">
        <label>This field is not for hum.ans <input name="bot-field" /></label>
      </p>
      <div className="form-group form-group-2">
        <input name="first name" type="name" className="form-control" placeholder="First name" />
        <input name="last   name" type="name" className="form-control" placeholder="Last name" />
      </div>
      <div className="form-group form-group-2">
        <input name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="E-mail address" />
        <input name="phone number" type="tel" className="form-control" aria-describedby="phoneNumber" placeholder="Phone number" />
      </div>
      <div className="form-group">
        <input name="subject" type="text" className="form-control"  placeholder="Subject" />
      </div>
      <div className="form-group">
      <textarea name="message" className="form-control form-message" rows="3" placeholder="Your message"></textarea>
      </div>
      <h5 className="disclaimerHeading">Cautionary note:</h5>
      <p className="disclaimer">If you are not currently a client of Hnatyshyn Gough, any information you communicate in your email is not protected by lawyer/client confidentiality, nor is a lawyer/client relationship established by our receipt of this email. Before we can discuss any legal matter, we must ensure that we do not have a conflict of interest. Please do not send us any confidential information in your e-mail.</p>
      <input type="checkbox" id="disclaimer" name="disclaimer" required />
      <label htmlFor="disclaimer" className="iUnderstand"> I understand</label>
      <div className="submit"><button type="submit">Submit</button></div>
      </form>
    </div>
   </section>
   <h2 className="uppercase officesHeader">Offices</h2>
   <section className="contact-footer-map-wrapper">
    <div className="saskatoon-info">
    <h4 className="uppercase mt-20">Saskatoon Office</h4>
        <p className="mb-0">6<sup>th</sup> Floor</p>
        <p className="mb-0">402 21<sup>st</sup> Street East</p>
        <p className="mb-0">Saskatoon, Saskatchewan</p>
        <br />
      <h4 className="uppercase mt-20">Hours:</h4>
        <p className="mb-0">Monday to Friday</p>
        <p className="mb-0">9:00am &#45; 5:00pm</p>
        <p><i>*Closed over noon hour</i></p>
        </div>
        <div className="watrous-info">
   <h4 className="uppercase mt-20">Watrous Office</h4>
        <p>Hnatyshyn Gough attends Watrous on a weekly basis and providing services by appointment operates out of space rented at the Watrous Manitou Beach Heritage Centre. Please contact our office, 306-653-5150, for our scheduled dates in Watrous.</p>
        <p className="mb-0"><i>*Please note that the Watrous office is <u><b>NOT</b></u> a proper address for service pursuant to Rule 12-9.</i></p>
      <h4 className="uppercase mt-20">Hours:</h4>
        <p className="mb-0">Tuesday &amp; Friday</p>
        <p>10:00am &#45; 2:00pm</p>
        </div>
      <iframe className="contact-footer-map saskatoon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.415345455756!2d-106.66294348432893!3d52.126765779741625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6d6b5ab9bb5%3A0x29755201f56de7af!2sHnatyshyn%20Gough!5e0!3m2!1sen!2sca!4v1611018992583!5m2!1sen!2sca" width="1400" height="500" allowFullScreen="" aria-hidden="false" tabIndex="0" />
      <iframe className="contact-footer-map watrous" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4948.41635371585!2d-105.4668191708547!3d51.67433240875148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531cad4c2eac0b05%3A0x573d44ae835a2051!2s308%20Main%20St%2C%20Watrous%2C%20SK%20S0K%200E1!5e0!3m2!1sen!2sca!4v1739485614137!5m2!1sen!2sca" width="1400" height="500" allowFullScreen="" aria-hidden="false" tabIndex="0" />
   
   </section>
  </Layout>
)

export default Contact
