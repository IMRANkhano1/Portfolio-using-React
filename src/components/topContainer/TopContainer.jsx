import React from "react";
import { Element } from "react-scroll";
import Topcontent from "./topcontent/topcontent";
import "./TopContaner.css";
const TopContainer = () => {
  return (
    <>
      <Element name="about" className="top-container">
        <Topcontent />
      </Element>
    </>
  );
};

export default TopContainer;
