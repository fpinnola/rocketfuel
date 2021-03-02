import React from "react"
import { Link } from "gatsby"

import launch from '../images/launch.png';
import logo from '../images/Logo.png';

import Layout from "../components/layout"
import Button from "../components/Button"
// import Image from "../components/image"
// import SEO from "../components/seo"

const pageStyles = {
  color: "#232129",
  // width: '100%',
  // height: '100vh',
  // backgroundImage: `url(${launch})`,
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const landing = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${launch})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}
const contentDiv = {
  display: 'flex',
  padding: 25,
  alignItems: 'center',
  justifyContent: 'space-evenly'
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
const goButton = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 12,
  borderWeight: 2.0,
  border: "2px solid white",
  color: "white",
  marginRight: 'auto'
}

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <main style={pageStyles}>
      <div style={landing}>
        <div style={imageCover}>
          <h1 style={{maxWidth: '40ch', color: 'white'}}>A student-led Venture Capital Initiative at Stevens Institute of Technology</h1>
          <Link style={goButton} href="/apply">Let's Go</Link>
        </div>
      </div>
      <div style={contentDiv}>
        <img src={logo} alt="Logo" style={{maxWidth: '12em'}} />
        <div style={{maxWidth: '60ch'}}>
          <h2 style={{color: '#A32638'}}>Created by Students, Powered by LaunchPad @ Stevens</h2>
          <p style={{color: '#5B5B5B'}}>Our goal is to educate students on VC principles and provide analysis recommendations to LaunchPad</p>
          </div>  
      </div>
    </main>
  </Layout>
)

export default IndexPage

// import * as React from "react"

// // styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// // markup
// const IndexPage = () => {
//   return (
//     <main style={pageStyles}>
//       <title>Rocket Fuel Ventures</title>
//       <h1 style={headingStyles}>
//         Rocket Fuel Ventures
//       </h1>  
//     </main>
//   )
// }

// export default IndexPage
