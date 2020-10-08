import React from "react";
import { motion } from "framer-motion";
import "../css/Work.css";

function Work(props) {
  let workData = props.workData;

  const populateWork = () => {
    return workData.map((project) => {
      return (
        <div className="project-item" key={project.title}>
          <div className="project-title">
            <p>{project.title}</p>
          </div>
          <div className="project-image">
            <img src={require('../img/work/' + project.image)} alt='project-thumb'/>
            </div>
          <div className="project-description">
            <p>
              {project.description}
            </p>
          </div>

          <div className="project-buttons-container">
            <button className="project-button button is-white">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.url}
                className="project-button-text"
              >
                View
              </a>
            </button>
            <button className="project-button button is-white">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.repo}
                className="project-button-text"
              >
                Github
              </a>
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="work" className="section-container">
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
            {populateWork()}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Work;
