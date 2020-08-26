import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./sytles/styles.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div id="testing">
          df <HashLink to="/#bottom">Goto Cool Section</HashLink>
        </div>
      </div>
    );
  }
}
