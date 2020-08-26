import React, { Component } from "react";
import styles from "./sytles/styles.css";
import data from "../images/data.png";
import artificialIntelligence from "../images/artificialIntelligence.png";

export default class Skills extends Component {
  render() {
    return (
      <div class="skills">
        <h2>My Skills.</h2>
        <div class="skill-row">
          <img class="web-design" src={data} alt="web-design-picture" />
          <h3>Web Development and Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="skill-row">
          <img
            class="machine-learning"
            src={artificialIntelligence}
            alt="machine-learning-picture"
          />
          <h3>Machine learning and Aritificial Intelligence (AI)</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
  }
}
