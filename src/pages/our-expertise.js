import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Accordian from "../components/accordian"
import "../components/styles/expertise.scss"
import plus from "../images/plus.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Our expertise" />
    <div className="expertise-header">
      <div className="our-expertise-headlines">
        <h2 className="uppercase">Our Expertise</h2>
        <h3>Our lawyers are leading experts across a range of legal fields.</h3>
      </div>
      <div className="our-expertise-header-paragraph">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor scelerisque, porta elit ac, porta nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor.</p>
      </div>
    </div>
    <div className="our-expertise-content">

      <Accordian opener={plus} title="Family Law">
        <div className="accordianContent">
        <p>Aliquam volutpat velit metus, sit amet iaculis orci lobortis sit amet. In ac bibendum eros. Integer feugiat sodales turpis. Phasellus gravida at ante quis scelerisque. Donec sit amet nunc bibendum, vestibulum odio et, porttitor dolor. Suspendisse at nunc in enim aliquam commodo eu vitae felis. Phasellus sed risus risus.</p>
        <p>Nam congue, massa vitae tincidunt tempus, dolor sem varius lectus, at laoreet augue odio sagittis quam. Quisque non dui porta, luctus ante et, porttitor erat. In congue urna et posuere cursus. Mauris ante odio, tempor et elementum at, aliquet et tortor. Cras massa ex, viverra id nulla ut, vestibulum porttitor justo. Vivamus ultrices viverra nulla id tincidunt.</p>
        <p>Ut et tincidunt ligula. Etiam egestas egestas ligula, at volutpat metus blandit ut. Donec suscipit ipsum ligula. Morbi id placerat urna. Sed malesuada nisl orci, gravida pretium nibh pulvinar eget. Mauris at mollis arcu. Morbi molestie libero augue, in volutpat leo venenatis et. In interdum porttitor dui in vehicula. Etiam malesuada tristique volutpat.</p>    
        <h2>Family Law Team</h2>
        <ul>
          <li>Lawyer 1</li>
          <li>Lawyer 2</li>
          <li>Lawyer 3</li>
        </ul>
        </div>
      </Accordian>

      <Accordian opener={plus} title="Real Estate">
        <div className="accordianContent">
        <p>Aliquam volutpat velit metus, sit amet iaculis orci lobortis sit amet. In ac bibendum eros. Integer feugiat sodales turpis. Phasellus gravida at ante quis scelerisque. Donec sit amet nunc bibendum, vestibulum odio et, porttitor dolor. Suspendisse at nunc in enim aliquam commodo eu vitae felis. Phasellus sed risus risus.</p>
        <p>Nam congue, massa vitae tincidunt tempus, dolor sem varius lectus, at laoreet augue odio sagittis quam. Quisque non dui porta, luctus ante et, porttitor erat. In congue urna et posuere cursus. Mauris ante odio, tempor et elementum at, aliquet et tortor. Cras massa ex, viverra id nulla ut, vestibulum porttitor justo. Vivamus ultrices viverra nulla id tincidunt.</p>
        <p>Ut et tincidunt ligula. Etiam egestas egestas ligula, at volutpat metus blandit ut. Donec suscipit ipsum ligula. Morbi id placerat urna. Sed malesuada nisl orci, gravida pretium nibh pulvinar eget. Mauris at mollis arcu. Morbi molestie libero augue, in volutpat leo venenatis et. In interdum porttitor dui in vehicula. Etiam malesuada tristique volutpat.</p>    
        <h2>Real Estate Team</h2>
        <ul>
          <li>Lawyer 1</li>
          <li>Lawyer 2</li>
          <li>Lawyer 3</li>
        </ul>
        </div>
      </Accordian>

      <Accordian opener={plus} title="Whatever else">
        <div className="accordianContent">
        <p>Aliquam volutpat velit metus, sit amet iaculis orci lobortis sit amet. In ac bibendum eros. Integer feugiat sodales turpis. Phasellus gravida at ante quis scelerisque. Donec sit amet nunc bibendum, vestibulum odio et, porttitor dolor. Suspendisse at nunc in enim aliquam commodo eu vitae felis. Phasellus sed risus risus.</p>
        <p>Nam congue, massa vitae tincidunt tempus, dolor sem varius lectus, at laoreet augue odio sagittis quam. Quisque non dui porta, luctus ante et, porttitor erat. In congue urna et posuere cursus. Mauris ante odio, tempor et elementum at, aliquet et tortor. Cras massa ex, viverra id nulla ut, vestibulum porttitor justo. Vivamus ultrices viverra nulla id tincidunt.</p>
        <p>Ut et tincidunt ligula. Etiam egestas egestas ligula, at volutpat metus blandit ut. Donec suscipit ipsum ligula. Morbi id placerat urna. Sed malesuada nisl orci, gravida pretium nibh pulvinar eget. Mauris at mollis arcu. Morbi molestie libero augue, in volutpat leo venenatis et. In interdum porttitor dui in vehicula. Etiam malesuada tristique volutpat.</p>    
        <h2>Associated Team</h2>
        <ul>
          <li>Lawyer 1</li>
          <li>Lawyer 2</li>
          <li>Lawyer 3</li>
        </ul>
        </div>
      </Accordian>
    </div>
  </Layout>
)

export default IndexPage
