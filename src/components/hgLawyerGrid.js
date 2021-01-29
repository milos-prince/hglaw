import React from "react"
import Lawyer from "./lawyer"
import "../components/styles/our-team.scss"
import { Link } from "gatsby"

import leslie from "../../static/img/leslie.jpg"
import sheila from "../../static/img/sheila.jpg"
import jenny from "../../static/img/jenny.jpg"
import brent from "../../static/img/brent.jpg"
import gillian from "../../static/img/gillian.jpg"
import adam from "../../static/img/adam.jpg"
import david from "../../static/img/david.jpg"
import don from "../../static/img/don.jpg"
import sarah from "../../static/img/sarah.jpg"
import jesse from "../../static/img/jesse.jpg"


const LawyerGrid = () => (

      <div className="team-grid-wrapper">
        <Link to="/our-team/leslie-belloc-pinder/"><Lawyer name="Leslie Belloc-Pinder Q.C." email="lbelloc-pinder@hglaw.ca" photo={leslie} /></Link>
        <Link to="/our-team/sheila-denysiuk/"><Lawyer name="Sheila Denysiuk Q.C." email="sdenysiuk@hglaw.ca" photo={sheila} /></Link>
        <Link to="/our-team/jenny-english/"><Lawyer name="Jenny English" email="jenglish@hglaw.ca" photo={jenny} /></Link>
        <Link to="/our-team/gillian-gough/"><Lawyer name="Brent Gough Q.C." email="bgough@hglaw.ca" photo={brent} /></Link>
        <Link to="/our-team/brent-gough/"><Lawyer name="Gillian Gough" email="ggough@hglaw.ca" photo={gillian} /></Link>
        <Link to="/our-team/jesse-hayward/"><Lawyer name="Jesse Hayward" email="jhayward@hglaw.ca" photo={jesse} /></Link>
        <Link to="/our-team/adam-hnatyshyn/"><Lawyer name="Adam Hnatyshyn" email="ahnatyshyn@hglaw.ca" photo={adam} /></Link>
        <Link to="/our-team/david-hnatyshyn/"><Lawyer name="David Hnatyshyn Q.C." email="dhnatyshyn@hglaw.ca" photo={david} /></Link>
        <Link to="/our-team/don-mciver/"><Lawyer name="Don McIver Q.C." email="dmciver@hglaw.ca" photo={don} /></Link>
        <div className="spacer"></div>
        <Link to="/our-team/sarah-norton/"><Lawyer name="Sarah Norton" email="snorton@hglaw.ca" photo={sarah} /></Link>
      </div>
)

export default LawyerGrid