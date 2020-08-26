import React, { Component } from "react";
import styles from "./sytles/styles.css";
import Intro from "./Intro";
import Skills from "./Skills";
import Contact from "./Contact";

export default class Landing extends Component {
  render() {
    return (
      <div class="mainContainer">
        <div id="introSection">
          <br></br>
          <Intro></Intro>
        </div>
        <div id="skillsSection">
          <Skills></Skills>
        </div>
        <div id="contactSection">
          <Contact></Contact>
        </div>

        <div id="footer"></div>
      </div>
    );
  }
}
