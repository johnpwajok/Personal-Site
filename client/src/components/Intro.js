import React, { Component } from "react";
import FadeIn from "react-fade-in";
import profilePicture from "../images/profilePicture.jpg";

export default class Intro extends Component {
  render() {
    return (
      <FadeIn>
        <div>
          <img src={profilePicture} alt="profile" />
          <br></br>
          <h1 class="mainHeading">Hello!</h1>
          <br></br>
          <p class="intro">
            <em>
              I'm John, a programmer and recent Computer Science graduate.
            </em>
            <br></br>
            <br></br>I am currently looking for exciting opportunities within
            the tech industry. I have many interests in the realm of technology
            including software development, web development, networking,
            databases and security. I have had a great passion for technology
            from a very young age and particularly like the idea of working on
            projects that aim to solve real-world problems.
          </p>
        </div>
      </FadeIn>
    );
  }
}
