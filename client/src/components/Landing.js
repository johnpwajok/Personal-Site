import React, { Component } from "react";
import styles from "./sytles/styles.css";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div id="header">
          <br></br>
          <br></br>
          <h1>Landing page</h1>
        </div>
        <div id="introSection"></div>
        <div id="portfolioSection">
          <Portfolio></Portfolio>
        </div>
        <div id="contactSection">
          <Contact></Contact>
        </div>

        <div id="footer"></div>
      </div>
    );
  }
}
