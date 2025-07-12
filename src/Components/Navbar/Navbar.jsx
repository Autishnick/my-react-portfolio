import React from "react";
import { Link as AnchorLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = React.useState("home");

  return (
    <div className="navbar">
      <ul className="nav-menu">
        <li>
          <AnchorLink
            className="anchor-link"
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenu("home")}
          >
            <p className="p">Home</p>
          </AnchorLink>
          {menu === "home" && <div className="active"></div>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={-50}
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setMenu("about")}
          >
            <p className="p">About me</p>
          </AnchorLink>
          {menu === "about" && <div className="active"></div>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={-50}
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => setMenu("portfolio")}
          >
            <p className="p">Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <div className="active"></div>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={-50}
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setMenu("contact")}
          >
            <p className="p">Contact</p>
          </AnchorLink>
          {menu === "contact" && <div className="active"></div>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={-50}
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setMenu("contact")}
        >
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
