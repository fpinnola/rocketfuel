import * as React from "react"
import Layout from "../components/layout";
import { Link } from "gatsby"

import { Form, FormField, SubmitButton } from "../components/forms";

import * as Yup from "yup";

import launch from '../images/launch.png';
import team from '../images/team.png';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
});

const goButton = {
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 12,
  borderWeight: 2.0,
  border: "2px solid white",
  color: "white",
  // marginRight: 'auto'
}

// styles
const pageStyles = {
    color: "#232129",
    // backgroundColor: "#A32638",
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${team})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }
  const imageCover = {
    width: '100%',
    height: '100%',
    backgroundColor: "rgba(163,38,56,0.65)",
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '2em',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const card = {
    backgroundColor: "white",
    padding: 50,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  const inputLabel = {
    textAlign: "left",
    width: '100%'
  }

// markup
const IndexPage = () => {

    const handleSubmit = (data) => {
        console.log(data);
    }

    return (
        <Layout>
        {/* <SEO title="Home" /> */}
        <main style={pageStyles}>
          <div style={imageCover}>
              <Link 
              style={goButton}
              href="https://forms.gle/EvcnM4kDDyHBCu4dA"
              target="_blank"
              >
                <h4>Go to Application</h4>
              {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaSdNoDzW-gJG2nKhxJhHD-NtbMrwLWEwukEe-2IF3VHChww/viewform?embedded=true" width="640" height="550" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
                {/* <Form 
                    validationSchema={validationSchema}
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={handleSubmit}
                    >
                        <label style={inputLabel}>Your name</label>
                        <FormField name="name" placeholder="Name" />
                        <label style={inputLabel}>Email</label>
                        <FormField name="email" placeholder="Email" />
                        <label style={inputLabel}>Resume</label>
                        <input type="file" onChange={(e) => console.log(e)} />
                        <SubmitButton label="Submit" />
                </Form> */}
              </Link>
              
          </div>
        </main>
      </Layout>
    )
  }
  
  export default IndexPage