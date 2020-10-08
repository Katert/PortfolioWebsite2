import React from "react";
import { motion } from "framer-motion";
import "../css/Skills.css";

function Skills(props) {
  let skillsArray = props.skillsData;

  const populateSkillList = (type) => {
    return skillsArray.map((skill) => {
      if (skill.type === type) {
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
      }
    });
  };

  return (
    <div id="skills" className="section-container">
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
          <div className="skills-language">
            Programming languages {populateSkillList("language")}
          </div>
          <div className="skills-libfra">
            Libraries & Frameworks {populateSkillList("libfra")}
          </div>
          <div className="skills-topl">
            <h2>Tools & Platforms</h2> {populateSkillList("topl")}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
