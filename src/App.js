import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import axios from 'axios';
import "./App.css";

// Component imports
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills"
import Work from './components/Work';
import Contact from './components/Contact';

class App extends Component {

  constructor() {
    super();
    this.state = {
      skills: [],
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
  }

  render () {
    return (
      <Router basename="/">
        <div className="app-container">
          <Sidebar />
          <div className="content-container">
            <Home />
            <About />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fillOpacity="1"
            d="M0,64L12.6,90.7C25.3,117,51,171,76,170.7C101.1,171,126,117,152,117.3C176.8,117,202,171,227,170.7C252.6,171,278,117,303,85.3C328.4,53,354,43,379,32C404.2,21,429,11,455,53.3C480,96,505,192,531,213.3C555.8,235,581,181,606,160C631.6,139,657,149,682,160C707.4,171,733,181,758,186.7C783.2,192,808,192,834,176C858.9,160,884,128,909,133.3C934.7,139,960,181,985,181.3C1010.5,181,1036,139,1061,128C1086.3,117,1112,139,1137,128C1162.1,117,1187,75,1213,58.7C1237.9,43,1263,53,1288,90.7C1313.7,128,1339,192,1364,186.7C1389.5,181,1415,107,1427,69.3L1440,32L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#273036"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,149.3C672,139,768,85,864,96C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>{" "}
            <Skills skillsData={this.state.skills} />
            <Work/>
            <Contact/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
