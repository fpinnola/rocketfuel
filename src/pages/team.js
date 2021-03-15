import * as React from "react"
import Layout from "../components/layout";

const team = [
  { imageURL: "brianli.jpg", name: "Brian Li", title: "E-Board"},
  { imageURL: "colefelsher.jpg", name: "Cole Felsher", title: "E-Board"},
  { imageURL: "jonsamuel.jpg", name: "Jon Samuel", title: "E-Board"},
  { imageURL: "wallistoscarelli.jpg", name: "Wallis Toscarelli", title: "E-Board"},
  { imageURL: "adamlatif.jpg", name: "Adam Latif", title: "E-Board"},
  { imageURL: "chelseabraithwaite.jpg", name: "Chelsea Braithwaite", title: "E-Board"},
  { imageURL: "justinmurray.jpg", name: "Justin Murray", title: "E-Board"},
  { imageURL: "jocelynragukonis.jpg", name: "Jocelyn Ragukonis", title: "E-Board"},
  { imageURL: "bryankyritz.jpg", name: "Bryan Kyritz", title: "E-Board"},
  { imageURL: "frankpinnola.jpg", name: "Frank Pinnola", title: "Launchpad Advisor"},
  { imageURL: "mukundiyengar.jpg", name: "Mukund Iyengar", title: "Director of Launchpad"},
  { imageURL: "jayposkitt.jpg", name: "Jay Poskitt", title: "Advisory Board"},
  { imageURL: "markkanevsky.jpg", name: "Mark Kanevsky", title: "Community Outreach"},
  { imageURL: "alexismckelvey.jpeg", name: "Alexis McKelvey", title: ""},
  { imageURL: "davidioffe.jpg", name: "David Ioffe", title: ""},
  { imageURL: "edaerdemci.jpg", name: "Eda Erdemci", title: ""},
  { imageURL: "gabetoltus.jpeg", name: "Gabe Toltus", title: ""},
  { imageURL: "madisondejong.jpeg", name: "Madison DeJong", title: ""},
  { imageURL: "ninacaldarone.jpg", name: "Nina Caldarone", title: ""},


]

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
    padding: 25,
    flexDirection: 'column',
  }

  const title = {
    color: "#A32638"
  }

  const list = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2em',
    justifyContent: 'center'
  }

  const item = {
    display: 'flex',
    padding: '0.5em',
    width: '20%',
    minWidth: '25ch',
  }
  


  const TeamMember = function({ imageURl, name, title }){

    var cardStyle = {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: 12,
      backgroundImage: `url(${imageURl})`,
      height: 200,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      overflow: 'hidden'
    }

    return (
      <div style={cardStyle}>
        <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', padding: '1em', color: "white", display: 'flex', flexDirection: 'column', justifyContent: "flex-end" }}>
          <label>{name}</label>
          <label>{title}</label>
        </div>
      </div>
    )
  }
  
  const Team = () => (
    <Layout>
      {/* <SEO title="Home" /> */}
      <main style={pageStyles}>
        <div style={container}>
          <h1 style={title}>Our Team</h1>
          <ul style={list}>
            {team.map((member) => 
              <li style={item}>
                <TeamMember imageURl={member.imageURL} name={member.name} title={member.title} />
              </li>
            )}
          </ul>


        </div>
      </main>
    </Layout>
  )

  export default Team;