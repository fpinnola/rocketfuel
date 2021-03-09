import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header className="bg shadow-sm">
    <Container>
      <Navbar expand="md">
          <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
              <Nav as="ul" className="ml-auto">
                  <Nav.Item as="li">
                      <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                      <Link to="/resources" className="nav-link" activeClassName="active">Resources</Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                      <Link to="/team" className="nav-link" activeClassName="active">Our Team</Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                      <Link to="/apply" className="nav-link" activeClassName="active">Apply</Link>
                  </Nav.Item>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header