import React, { Component } from "react";
import FadeIn from "react-fade-in";

import styles from "./sytles/styles.css";
import gitOverviews from "../images/gitOverviews.png";
import chefPalace from "../images/chefPalace.png";
import IKAP from "../images/IKAP.png";
import fyjal from "../images/fyjal.png";

export default class Projects extends Component {
  render() {
    return (
      <FadeIn>
        <div class="projects">
          <h2>Featured Projects</h2>
          <div class="portfolioContainer">
            <div class="row row-eq-height">
              <div class="col-lg-6 col-md-6 col-sm-12 colItem">
                <div class="jumbotron">
                  <h2 className="projectTitle">Git-Overviews</h2>
                  <img
                    src={gitOverviews}
                    alt="git overview image"
                    class="img-responsive"
                  ></img>
                  <br></br>

                  <p>
                    The git-overview application was built to enable users to
                    search for users on Github and see a concise and
                    straightforward overview of their public projects. The app
                    enables the user to see the GitHub users contact information
                    along with all their repositories with their descriptions
                    and a button to link directly to any project.
                  </p>
                  <br></br>
                  <center>
                    <a
                      href="https://git-overviews.herokuapp.com/"
                      class="btn btn-primary liveBtn"
                      target="_blank"
                    >
                      Live Site
                    </a>
                  </center>
                  <center>
                    <a
                      href="https://github.com/johnpwajok/Utilising-GitHub-API"
                      class="btn btn-primary gitBtn"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </center>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 colItem">
                <div class="jumbotron">
                  <h2 className="projectTitle">Chef Palace</h2>
                  <img
                    src={chefPalace}
                    alt="ChefPalace image"
                    class="img-responsive"
                  ></img>
                  <br></br>
                  <br></br>
                  <br></br>

                  <p>
                    Chef Palace is currently under development and is being
                    built to be an online ordering platform for ordering food
                    from the fictional Chef Palace restaurant chain. The
                    application is being developed with the MERN stack. The base
                    of the front-end has been completed and is now live, being
                    hosted on a Heroku server.
                  </p>
                  <br></br>
                  <center>
                    <a
                      href="https://chefpalace.herokuapp.com/"
                      class="btn btn-primary liveBtn"
                      target="_blank"
                    >
                      Live Site
                    </a>
                  </center>
                  <center>
                    <a
                      href="https://github.com/johnpwajok/Chef-Palace-React"
                      class="btn btn-primary gitBtn"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </center>
                </div>
              </div>
            </div>
            <div class="row row-eq-height">
              <div class="col-lg-6 col-md-6 col-sm-12 colItem">
                <div class="jumbotron">
                  <h2 className="projectTitle">Fyjal</h2>
                  <img
                    src={fyjal}
                    alt="ChefPalace image"
                    class="img-responsive"
                  ></img>
                  <br></br>
                  <br></br>
                  <br></br>

                  <p>
                    Fyjal is a website created to promote a fictional financial
                    management mobile app. The website was created using React,
                    Express as well as Bootstrap and the react-bootstrap
                    libraries. The website is intended only to show the design
                    and isn't functional (download buttons don't perform any
                    action). Fyjal is hosted on Heroku.
                  </p>
                  <br></br>
                  <center>
                    <a
                      href="https://fyjal.herokuapp.com/"
                      class="btn btn-primary liveBtn"
                      target="_blank"
                    >
                      Live Site
                    </a>
                  </center>
                  <center>
                    <a
                      href="https://github.com/johnpwajok/fyjal"
                      class="btn btn-primary gitBtn"
                      target="_blank"
                    >
                      View on GitHub
                    </a>
                  </center>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 colItem">
                <div class="jumbotron">
                  <h2 className="projectTitle">IKnowAPlace (FYP)</h2>
                  <img src={IKAP} alt="munchiebox" class="img-responsive"></img>
                  <br></br>

                  <p>
                    IKnowAPlace was built as my final year project. The project
                    is a recommendation system for bars and restaurants.
                    IKnowAPlace was created using React, Python, Flask and
                    PostgreSQL. It generates recommendations through a
                    combination of content-based (using the users preferences)
                    and collaborative based techniques. Users can also search
                    for locations by name or category.
                  </p>
                  <br></br>
                  <center>
                    <a
                      href="https://youtu.be/ZpA0rp0-JG8"
                      class="btn btn-primary liveBtn"
                      target="_blank"
                    >
                      Video Demo
                    </a>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    );
  }
}
