import React, { Component } from "react";
import styles from "./sytles/styles.css";
import data from "../images/data.png";

import artificialIntelligence from "../images/artificialIntelligence.png";
import database from "../images/database.png";

export default class Skills extends Component {
  render() {
    return (
      <div class="skills">
        <h2>My Skills</h2>
        <div class="skill-row">
          <img class="web-design" src={data} alt="web-design-picture" />
          <h3>Web Development and Design</h3>
          <p>
            I studied web development both during my time in university as well
            as for my own personal projects, and have gained experience working
            with HTML, CSS, JavaScript, React, Node.js and Flask. I also have
            experience with deployment to cloud services including Heroku and
            AWS.
          </p>
        </div>
        <div class="skill-row">
          <br></br>
          <img
            class="machine-learning "
            src={artificialIntelligence}
            alt="machine-learning-picture"
          />
          <h3>Systems Software</h3>
          <p>
            I have gained experience working with C (this was my first
            programming language and is what got me interested in programming),
            Python (used on the backend for my final year project with Flask)
            and Java. I also have some exposure to R which I have used to do
            some data visualisation projects.
          </p>
        </div>
        <div class="skill-row">
          <img class="web-design " src={database} alt="web-design-picture" />
          <h3>Infrastructure</h3>
          <p>
            I studied Computer Science (Infrastructure) and have a solid
            foundation in networking technologies and principles (primarily
            Cisco Systems), databases (MySQL, Oracle Database and PostgreSQL
            which I learned on my own) as well as configuring and managing Linux
            Systems.
          </p>
        </div>
      </div>
    );
  }
}
