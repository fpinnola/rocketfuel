import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
// import { Button } from ".";
// import Lottie from "lottie-react";

// import Hamburger from "../assets/animations/hamburger.json";
import Logo from "../images/logo.png";

function Navbar(props) {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const hamburgerRef = useRef();

  const toggleDrawer = () => {
    if (!drawerOpened) {
      hamburgerRef.current.playSegments([0, 24], true);
      setDrawerOpened(true);
    } else {
      hamburgerRef.current.playSegments([24, 0], true);
      setDrawerOpened(false);
    }
  };

  return (
    <>
      <div className={`navbar ${drawerOpened ? "opened" : null}`}>
        <div className="navbar-container">
          <NavLink className="nav-left" to="/">
            <img src={Logo} alt="Launchpad logo" className="logo" />
            <h2 className="logo-text">launchpad@stevens</h2>
          </NavLink>
          <div className="hamburger-icon">
            {/* <Lottie
              lottieRef={hamburgerRef}
              animationData={Hamburger}
              loop={false}
              autoplay={false}
              onClick={toggleDrawer}
            /> */}
          </div>
          <div className="nav-right">
            <NavLink to="/" className="nav-link">
              Apply
            </NavLink>
            <NavLink to="/" className="nav-link">
              Portfolio
            </NavLink>
            <NavLink to="/" className="nav-link">
              Resources
            </NavLink>
            <NavLink to="/login" className="nav-link last">
              Login
            </NavLink>
            {/* <Button label="Donate" to="/" /> */}
          </div>
        </div>
        <div className={`nav-drawer ${drawerOpened ? "opened" : null}`}>
          <h3 className="nav-title">Navigation</h3>
          <NavLink to="/" className="nav-link">
            Apply
          </NavLink>
          <NavLink to="/" className="nav-link">
            Portfolio
          </NavLink>
          <NavLink to="/" className="nav-link">
            Resources
          </NavLink>
          <NavLink to="/login" className="nav-link last">
            Login
          </NavLink>
          {/* <Button label="Donate" to="/" /> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
