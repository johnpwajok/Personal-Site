import React, { Component } from "react";
import styles from "./sytles/styles.css";
import FadeIn from "react-fade-in";

import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default class Landing extends Component {
  render() {
    return (
      <FadeIn>
        <div class="mainContainer">
          <div id="introSection">
            <br></br>
            <Intro></Intro>
          </div>
          <div id="skillsSection">
            <Skills></Skills>
          </div>
          <div id="projectsSection">
            <Projects></Projects>
          </div>
          <div id="contactSection">
            <Contact></Contact>
          </div>

          <div id="footer"></div>
          <hr></hr>
          <br></br>
          <p>© John Pwajok 2020</p>
        </div>
      </FadeIn>
    );
  }
}
