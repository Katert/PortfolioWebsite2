import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Component imports
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      skills: [],
      work: [],
    };
  }

  componentDidMount() {
    axios
      .get("./data/skills.json")
      .then((response) => {
        this.setState({
          skills: response.data.skills,
        });
      })
      .catch((error) => {
        Error("Something went wrong.\n" + error);
      });

    axios
      .get("./data/work.json")
      .then((response) => {
        this.setState({
          work: response.data.work,
        });
      })
      .catch((error) => {
        Error("Something went wrong.\n" + error);
      });
  }

  render() {
    return (
      <Router basename="/">
        <div className="app-container">
          <Sidebar />
          <div className="content-container">
            <Home />
            <About />
            <Skills skillsData={this.state.skills} />
            <Work workData={this.state.work} />
            <Contact />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
