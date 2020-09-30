import React from "react";
import { motion } from "framer-motion";
import "../css/Skills.css";

function Skills(props) {
  let skillsArray = props.skillsData;

  const populateSkillList = () => {
    return skillsArray.map((skill) => {
      return (
        <motion.div
          className="skill-tile"
          key={skill.name}
          initial={{ opacity: -10 }}
          animate={{ opacity: 1 }}
          transition={{ duration: skill.animateDuration }}
        >
          <i className={skill.icon} />
        </motion.div>
      );
    });
  };

  return (
    <div id="skills">
      <div id="skills-container">
        <motion.h1
          className="section-title"
          initial={{ x: -100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>
        <motion.div
          id="skills-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="skill-tiles-container">{populateSkillList()}</div>
        </motion.div>
      </div>
      <motion.div
        className="curved"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(25, 26, 31)"
            fillOpacity="1"
            d="M0,160L16,170.7C32,181,64,203,96,218.7C128,235,160,245,192,245.3C224,245,256,235,288,213.3C320,192,352,160,384,144C416,128,448,128,480,149.3C512,171,544,213,576,192C608,171,640,85,672,53.3C704,21,736,43,768,80C800,117,832,171,864,202.7C896,235,928,245,960,240C992,235,1024,213,1056,186.7C1088,160,1120,128,1152,122.7C1184,117,1216,139,1248,170.7C1280,203,1312,245,1344,266.7C1376,288,1408,288,1424,288L1440,288L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
          ></path>
        </svg>
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(25, 26, 31)"
            fillOpacity="1"
            d="M0,128L30,144C60,160,120,192,180,202.7C240,213,300,203,360,176C420,149,480,107,540,122.7C600,139,660,213,720,245.3C780,277,840,267,900,266.7C960,267,1020,277,1080,266.7C1140,256,1200,224,1260,213.3C1320,203,1380,213,1410,218.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}

export default Skills;
