import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="md">
        <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
                <Nav.Item as="li">
                    <Link to="/apply" className="nav-link" activeClassName="active">Apply</Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header