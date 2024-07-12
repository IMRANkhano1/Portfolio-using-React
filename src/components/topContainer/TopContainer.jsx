import React from "react";
import { Element } from "react-scroll";
import Topcontent from "./topcontent/topcontent";
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
