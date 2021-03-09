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

  const container = {
    display: 'flex',
    padding: 25
  }

  const title = {
    color: "#A32638"
  }
  
  const Team = () => (
    <Layout>
      {/* <SEO title="Home" /> */}
      <main style={pageStyles}>
        <div style={container}>
          <h1 style={title}>Our Team</h1>
        </div>
      </main>
    </Layout>
  )

  export default Team;