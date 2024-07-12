import React from "react";
import { Link } from "react-scroll";
import "../Header/Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <h1>
            <span>
              <ion-icon name="logo-react" className="icon"></ion-icon>
            </span>
            ReactJs <span> Developer</span>
          </h1>
        </div>
        <div className="header-right">
          <Link to="about" smooth={true} duration={500}>
            <h4>About Me</h4>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <h4>Skills</h4>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <h4>Projects</h4>
          </Link>
          <Link to="experience" smooth={true} duration={500}>
            <h4>Experience</h4>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <h4>Contact</h4>
          </Link>
          <h4 className="header-right-btn">Join With Me</h4>
        </div>
      </div>
    </>
  );
}

export default Header;
