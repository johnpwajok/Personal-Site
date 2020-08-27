import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.connecToServer = this.connecToServer.bind(this);
  }
  connecToServer() {
    fetch("/");
  }
  componentDidMount() {
    this.connecToServer();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={Landing} />
          <div className="container"></div>
          {/* <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/intro" component={Intro} /> */}
        </div>
      </Router>
    );
  }
}
export default App;
