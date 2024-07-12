import React from "react";
import "./topContent.css";
import { Link } from "react-scroll";
function Topcontent() {
  return (
    <div className="topContent">
      <div className="topContent-container">
        <h1>Mr.Imran Shakil</h1>
        <p>ReactJs Developer</p>
        <a href="www.google.com">
          <button>Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button>My Work</button>
        </Link>
      </div>
    </div>
  );
}

export default Topcontent;
