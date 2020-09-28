import React, { Component } from "react";
import { motion } from "framer-motion";
import "../css/Work.css";

class Work extends Component {
  render() {
    return (
      <div id="work">
        <div id="work-container">
          <motion.h1
            className="section-title"
            initial={{ x: -100, opacity: -10 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Work
          </motion.h1>
          <motion.div
            id="work-section"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="project-container">
              <div className="project-item">
                <div className="project-title">
                  <p>COVID-19 Tracker</p>
                </div>
                <div className="project-description">
                  <p>
                    A tool that shows statistics regarding COVID-19 cases
                    worldwide.
                  </p>
                </div>
                <div className="project-buttons-container">
                  <button className="project-button button is-black">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://katert.github.io/covid19-tracker/#"
                      className="project-button-text"
                    >
                      View
                    </a>
                  </button>
                  <button className="project-button button is-black">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Katert/covid19-tracker"
                      className="project-button-text"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="curved"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fillOpacity="1"
              d="M0,160L60,154.7C120,149,240,139,360,149.3C480,160,600,192,720,170.7C840,149,960,75,1080,53.3C1200,32,1320,64,1380,80L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#273036"
              fillOpacity="1"
              d="M0,160L48,186.7C96,213,192,267,288,272C384,277,480,235,576,229.3C672,224,768,256,864,234.7C960,213,1056,139,1152,117.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </motion.div>
      </div>
    );
  }
}

export default Work;
