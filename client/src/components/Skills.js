import React, { Component } from "react";
import styles from "./styles/styles.css";
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
                working with:{" "}
              </p>
              <ul className="skillList">
                <li className="skillItem">
                  {" "}
                  <i class="fab fa-html5"></i> HTML
                </li>
                <li className="skillItem">
                  <i class="fab fa-css3-alt"></i> CSS
                </li>
                <li className="skillItem">
                  <i class="fab fa-js-square"></i> JavaScript
                </li>
                <li className="skillItem">
                  <i class="fab fa-bootstrap"></i> Bootstrap
                </li>
              </ul>
              <ul className="skillList">
                <li className="skillItem">
                  <i class="fab fa-react"></i> React
                </li>
                <li className="skillItem">
                  <i class="fab fa-node"></i> Node
                </li>
                <li className="skillItem">
                  <i class="fab fa-node-js"></i> Express
                </li>
                <li className="skillItem">
                  <i class="fas fa-pepper-hot fa-flip-horizontal"></i> Flask
                </li>
              </ul>
              <ul className="skillList">
                <li className="skillItem">
                  <i class="fas fa-database"></i> MongoDB
                </li>
                <li className="skillItem">
                  <i class="fas fa-database"></i> PostgreSQL
                </li>
                <li className="skillItem">
                  <i class="fab fa-aws"></i> AWS RDS
                </li>
                <li className="skillItem">
                  <i class="fas fa-rocket"></i> Postman
                </li>
              </ul>
            </div>
            <div class="skill-row">
              <br></br>
              <img
                class="machine-learning "
                src={artificialIntelligence}
                alt="machine-learning"
              />
              <h3>Desktop Applications & Systems&nbsp;Software</h3>
              <p>
                I have gained experience working with various languages to
                create desktop applications and to handle backend processing for
                web applications.
              </p>
              <p>These include:</p>
              <ul className="skillList">
                <li className="skillItem">
                  {" "}
                  <i class="fab fa-python"></i> Python (+ Pandas & Scikit-learn)
                </li>
                <li className="skillItem">
                  <i class="fab fa-cuttlefish"></i> C (+ Data Display Debugger
                  (DDD))
                </li>
              </ul>

              <ul className="skillList">
                <li className="skillItem">
                  <i class="fab fa-java"></i> Java (+ Exposure to Android)
                </li>
                <li className="skillItem">
                  <i class="fab fa-r-project"></i> R (Data Visualisation)
                </li>
              </ul>
            </div>
            <div class="skill-row">
              <img class="web-design " src={database} alt="web-design" />
              <h3>Infrastructure</h3>
              <p>
                From my time in university and through self-learning, I have
                been able to gain a solid foundation working in multiple
                environments including:
              </p>
              <ul className="skillList">
                <li className="skillItem">
                  <i class="fab fa-windows"></i> Windows
                </li>
                <li className="skillItem">
                  <i class="fab fa-linux"></i> Linux
                </li>
                <li className="skillItem">
                  <i class="fab fa-apple"></i> MacOS
                </li>
              </ul>
              <ul className="skillList">
                <li className="skillItem">
                  <i class="fab fa-android"></i> Android
                </li>
                <li className="skillItem">
                  <i class="fas fa-network-wired"></i> Networking technologies
                  and principles (primarily Cisco Systems)
                </li>
                <li className="skillItem">
                  <i class="fas fa-database"></i> databases (MySQL, Oracle
                  Database and PostgreSQL)
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    );
  }
}
