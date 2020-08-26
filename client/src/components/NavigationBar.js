import React, { Component } from "react";
//hashlink lib from https://github.com/rafgraph/react-router-hash-link
import { HashLink } from "react-router-hash-link";
import styles from "./sytles/styles.css";

export default class NavigationBar extends Component {
  render() {
    return (
      /*<div>
        <div id="navBar">
          <button>
            <HashLink smooth to="/#footer">
              Go to footer div
            </HashLink>
          </button>
          <button>
            <HashLink smooth to="/#footer">
              Go to contact div
            </HashLink>
          </button>
        </div>
      </div>*/
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          John Pwajok
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <HashLink class="HashLink" smooth to="/#header">
                Home
              </HashLink>
            </li>
            <li class="nav-item active">
              <HashLink class="HashLink" smooth to="/#footer">
                Portfolio
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="HashLink" smooth to="/#footer">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
