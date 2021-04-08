import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby"

import stevensLogo from '../images/school_logos/stevensLogo.png';
import rutgersLogo from '../images/school_logos/rutgersLogo.png';
import pennStateLogo from '../images/school_logos/pennStateLogo.png';
import columbiaLogo from '../images/school_logos/columbiaLogo.png';
import lehighLogo from '../images/school_logos/lehighLogo.png';
import uniHoustonLogo from '../images/school_logos/uniHoustonLogo.png';
import caseWesternLogo from '../images/school_logos/caseWesternLogo.png';
import uniVirginiaLogo from '../images/school_logos/uniVirginiaLogo.png';
import uncLogo from '../images/school_logos/uncLogo.png';

import "../styles/about.css"


const pageStyles = {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const imageCover = {
    width: '100%',
    height: '100%',
    backgroundColor: "rgba(163,38,56,0.65)",
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '2em',
    flexDirection: 'column'
  }
  const container = {
    display: 'flex',
    flexDirection: 'column',
    padding: 25
  }

  const upcomingContainer = {
    backgroundColor: "#A32638",
    padding: 25,
    color: "#FFFFFF",
    flexDirection: "column"
  }

  const card = {
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    padding: '15px 15px 15px 15px',
    hieght: 400
  }

  const wrapper = {
    width: "20%",
    minWidth: '15rem',
    borderRadius: 12,
    overflow: "hidden"
  }

  const list = {
    display: 'flex',
    flexWrap: 'wrap'
}

  const listItem = {
    display: 'flex',
    padding: '0.5em',
    width: '20%',
    minWidth: '25ch'
  }

  const listContent = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '1em',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 12
  }

  const SchoolCard = function({image, name}){
    return (
      // <div style={wrapper}>
      <li style={listItem}>
        <div style={listContent}>
          <img src={image} style={{width: "55%", height: 'auto'}}/>
          <label style={{color: "black", textAlign: "center", fontWeight: 600}}>{name}</label>
        </div>
      {/* // </div> */}
      </li>
    )
  }
  
  const About = () => (
    <Layout>
      {/* <SEO title="Home" /> */}
      <main style={pageStyles}>
        <div style={container}>
          <h2 style={{color: '#A32638'}}>About</h2>
          <h3>Our mission</h3>
          <p>To educate students on Venture Capital principles and foster the entrepreneurship ecosystems in our community</p>
          <h3>VC Education</h3>
          <p>We run an educational program of all our analysts covering the Fundamentals of Venture Capital</p>
          <h3>Outreach with VCs</h3>
          <p>We invite VCs and founders to speak at our meetings</p>
          <h3>Comprehensive Due Dilligence for Launchpad</h3>
          <p>We partner with LaunchPad to provide analysis recommendations to companies</p>
        </div>
        <div style={upcomingContainer}>
          <h2 className="upcoming">Upcoming</h2>
          <h3>VCC Conference</h3>
          <p>April 2021</p>
          <p>Powered by VC Consortium</p>
          <br/>
          <h4>Schools Attending</h4>
          <ul style={list}>
              <SchoolCard image={stevensLogo} name="Stevens Institute of Technology" />
              <SchoolCard image={rutgersLogo} name="Rutgers University" />
              <SchoolCard image={pennStateLogo} name="Penn State" />
              <SchoolCard image={caseWesternLogo} name="Case Western Reservce University" />
              <SchoolCard image={columbiaLogo} name="Columbia University" />
              <SchoolCard image={lehighLogo} name="Lehigh University" />
              <SchoolCard image={uncLogo} name="University of North Carolina" />
              <SchoolCard image={uniHoustonLogo} name="University of Houston" />
              <SchoolCard image={uniVirginiaLogo} name="University of Virginia" />

          </ul>
        </div>

      </main>
    </Layout>
  )

  export default About;