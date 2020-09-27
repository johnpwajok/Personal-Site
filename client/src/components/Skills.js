import React, { Component } from "react";
import styles from "./sytles/styles.css";
import FadeIn from "react-fade-in";

import data from "../images/data.jpg";

import artificialIntelligence from "../images/artificialIntelligence.jpg";
import database from "../images/database.jpg";

export default class Skills extends Component {
  render() {
    return (
      <FadeIn>
        <div class="skills">
          <FadeIn>
            <h2>My Skills</h2>
            <div class="skill-row">
              <img class="web-design" src={data} alt="web-design" />
              <h3>Web&nbsp;Development and Design</h3>
              <p>
                I studied web development both during my time in university as
                well as for my own personal projects, and have gained experience
                working with HTML, CSS, JavaScript, React, Node.js and Flask. I
                also have experience with deployment to cloud services including
                Heroku and AWS. Along with development, I have experience
                creating wireframes and prototypes for web applications (with
                Justinmind) and also API testing with Postman.
              </p>
            </div>
            <div class="skill-row">
              <br></br>
              <img
                class="machine-learning "
                src={artificialIntelligence}
                alt="machine-learning"
              />
              <h3>Systems Software</h3>
              <p>
                I have gained experience working with C (this was my first
                programming language and is what got me interested in
                programming), Python which I used extensively on the backend for
                my final year project with the Pandas and Scikit-earn libraries,
                and Java which was the language in which I was introduced to
                OOP. I also have some exposure to R which I have used to do some
                data visualisation projects.
              </p>
            </div>
            <div class="skill-row">
              <img class="web-design " src={database} alt="web-design" />
              <h3>Infrastructure</h3>
              <p>
                I studied Computer Science (Infrastructure) which has given me a
                solid foundation in networking technologies and principles
                (primarily Cisco Systems), databases (MySQL, Oracle Database and
                PostgreSQL which I learned on my own) as well as configuring and
                managing Linux Systems. I have development experience with
                MacOS, Windows, Linux and Android.
              </p>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    );
  }
}
