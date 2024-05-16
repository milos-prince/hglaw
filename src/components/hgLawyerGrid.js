import React from "react"
import Lawyer from "./lawyer"
import "../components/styles/our-team.scss"
import { Link } from "gatsby"

import jenny from "../../static/img/jenny.jpg"
import brent from "../../static/img/brent.jpg"
import gillian from "../../static/img/gillian.jpg"
import adam from "../../static/img/adam.jpg"
import david from "../../static/img/david.jpg"
import don from "../../static/img/don.jpg"
import sarah from "../../static/img/sarah.jpg"
import tonya from "../../static/img/tonya.jpg"


const LawyerGrid = () => (

      <div className="team-grid-wrapper">
        <Link to="/lawyers/jenny-english/"><Lawyer name="Jenny English" email="jenglish@hglaw.ca" photo={jenny} /></Link>
        <Link to="/lawyers/brent-gough/"><Lawyer name="Brent Gough, KC" email="bgough@hglaw.ca" photo={brent} /></Link>
        <Link to="/lawyers/gillian-gough/"><Lawyer name="Gillian Gough" email="ggough@hglaw.ca" photo={gillian} /></Link>
        <Link to="/lawyers/adam-hnatyshyn/"><Lawyer name="Adam Hnatyshyn" email="ahnatyshyn@hglaw.ca" photo={adam} /></Link>
        <Link to="/lawyers/david-hnatyshyn/"><Lawyer name="David Hnatyshyn , KC" email="dhnatyshyn@hglaw.ca" photo={david} /></Link>
        <Link to="/lawyers/tonya-lambert/"><Lawyer name="Tonya Lambert" email="tlambert@hglaw.ca" photo={tonya} /></Link>
        <Link to="/lawyers/don-mciver/"><Lawyer name="Don McIver, KC" email="dmciver@hglaw.ca" photo={don} /></Link>
        <Link to="/lawyers/sarah-nordin/"><Lawyer name="Sarah Nordin" email="snordin@hglaw.ca" photo={sarah} /></Link>
      </div>
)

export default LawyerGrid
