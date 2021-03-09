import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";
import { ReactTinyLink } from 'react-tiny-link';

const articles = [
  "https://medium.com/business-insider/how-8-billionaires-feel-about-bitcoin-5b40e3dbbd77",
  "https://olgamaslikhova.medium.com/data-shows-women-founded-companies-perform-better-across-the-board-92845360d20"
]


const pageStyles = {
    color: "#232129",
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

  const container = {
    padding: 25,
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1em'
  }

  const title = {
    color: "#A32638"
  }
  
  const Resources = () => (
    <Layout>
      {/* <SEO title="Home" /> */}
      <main style={pageStyles}>
        <div style={container}>
          <h1 style={title}>Resources</h1>
          {articles.map((a) => <ReactTinyLink
            cardSize="small"
            showGraphic={true}
            maxLine={2}
            minLine={1}
            url={a} 
            />)}
        </div>
      </main>
    </Layout>
  )

  export default Resources;