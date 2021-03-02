import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby"

const pageStyles = {
    color: "#232129",
    width: '100%',
    height: '100vh',
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
  
  const About = () => (
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

  export default About;