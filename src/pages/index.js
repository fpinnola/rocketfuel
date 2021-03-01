import React from "react"
import { Link } from "gatsby"

import launch from '../images/launch.png';

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const pageStyles = {
  color: "#232129",
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${launch})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <main style={pageStyles}>
      <div style={imageCover}>
        <h1 style={{maxWidth: '40ch', color: 'white'}}>A student-led Venture Capital Initiative at Stevens Institute of Technology</h1>
        <Link href="/apply">Let's Go</Link>
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
