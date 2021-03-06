import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout";
import { Link } from "gatsby";
import { renderStatic } from "react-helmet";
import { Helmet } from "react-helmet";

const articles = [
  "https://medium.com/business-insider/how-8-billionaires-feel-about-bitcoin-5b40e3dbbd77",
  "https://olgamaslikhova.medium.com/data-shows-women-founded-companies-perform-better-across-the-board-92845360d20"
]

const data = [
  {
    url: "https://medium.com/business-insider/how-8-billionaires-feel-about-bitcoin-5b40e3dbbd77",
    image: "https://miro.medium.com/focal/1200/632/49/37/1*A_0wVh620aNYPLx1FUjr6Q.jpeg",
    title: "How 8 billionaires feel about bitcoin",
    desc: "Investing legend Warren Buffett has said that he owns no cryptocurrency and never will."
  },
]

function PreviewCard({ linkData }) {
  return (
    <a style={previewCard} href={linkData.url}>
      <div style={{width: 64, height: 64, backgroundImage: `url(${linkData.image})`, backgroundSize: 'cover', marginRight: 15}}></div>
      <div>
        <h4 style={{ color: "black" }}>{linkData.title}</h4>
        <p style={{color: "#888"}}>{linkData.desc}</p>
      </div>
    </a>
  )
}

const previewCard = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  boxShadow: '0px 3px 6px rgba(0,0,0,0.25)',
  borderRadius: 12,
  width: '100%',
  backgroundColor: '#F8F8F8'
}

const pageStyles = {
    color: "#232129",
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

  const container = {
    padding: '25px 25px 50px 50px',
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '1em'
  }

  const title = {
    color: "#A32638"
  }
  
  const Resources = function(){
    let [articlesData, setArticlesData] = useState([]);

    useEffect(() => {
      let calls = [];
      for (let i = 0; i < articles.length; i++) {
        calls.push(fetch('https://link-preview-scraper.herokuapp.com/previewContent/' + encodeURIComponent(articles[i])))
      }
      Promise.all(calls)
      .then(function (responses) {
        return Promise.all(responses.map(function(response) {
          return response.json()
        }))
      })
      .then((data) => setArticlesData(data))
      .catch((err) => console.log(err))
    }, [])

    return (
      <Layout>
        <Helmet>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Helmet>
        {/* <SEO title="Home" /> */}
        <main style={pageStyles}>
          <div style={container}>
            <h1 style={title}>Resources</h1>
            {data.map((a) => <PreviewCard key={a.desc} linkData={a}/>)}
          </div>
        </main>
      </Layout>
      )
  }

  export default Resources;