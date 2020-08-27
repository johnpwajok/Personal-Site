import React, { Component } from "react";
import FadeIn from "react-fade-in";

import emailIcon from "../images/email.png";
import linkedIn from "../images/Linkedin-Icon.png";

export default class Contact extends Component {
  render() {
    return (
      <FadeIn>
        <div>
          <div class="contact-me">
            <h2>Get In Touch</h2>

            <p class="contact-message">
              Feel free to send me an e-mail if you have any questions or want
              to get in Contact.
            </p>
            <a
              class="btn btn-info btn-lg"
              role="button"
              href="mailto:johnpwajok97@hotmail.com@hotmail.com"
              target="_blank"
            >
              <img
                src={emailIcon}
                alt="git overview image"
                class="contactIcon"
              ></img>
            </a>
            <a
              class="btn btn-warning btn-lg githubLink"
              role="button"
              href="https://www.linkedin.com/in/john-g-pwajok-123762118/"
              target="_blank"
            >
              <img
                src={linkedIn}
                alt="git overview image"
                class="contactIcon"
              ></img>
            </a>
            <br></br>
          </div>
        </div>
      </FadeIn>
    );
  }
}
