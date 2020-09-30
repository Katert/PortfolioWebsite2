import React from "react";
import { motion } from "framer-motion";
import "../css/About.css";

function About() {
  return (
    <div id="about">
      <div id="about-container">
        <motion.h1
          className="section-title"
          initial={{ x: -100, opacity: -10 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About me
        </motion.h1>
        <motion.div
          id="about-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            id="selfie"
            initial={{ x: 50, opacity: -1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <img
              src={require("../img/profile.jpeg")}
              alt="selfie"
              style={{ borderRadius: 200 }}
            />
          </motion.div>
          <motion.div
            id="about-me-intro"
            initial={{ x: 50, opacity: -1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p>
              I'm a starting{" "}
              <span className="highlight">
                {" "}
                junior front-end web developer
              </span>{" "}
              from The Netherlands with a desire for designing and building
              user-friendly and responsive web applications and websites.
              <br /> In addition to programming as a hobby, I signed up for and
              finished an intensive 14 weeks full-stack developer bootcamp on
              the 24th of April 2020 as a stepping stone to landing my first junior developer job. The bootcamp is organized by{" "}
              <span className="highlight">Code For All_The Netherlands</span>,
              the Dutch branch from the Portuguese organization{" "}
              <span className="highlight">Academia de Codigo</span>.
              <br />
              <br />
              While I've spend a lot of time learning <span className="highlight">full-stack development</span>, I've discovered that <span className="highlight">front-end web development</span> really is what I like and what I want to professionalize in, mainly because I like to work with what the user sees visually and the internet is the platform easiest accessible for everyone.
              That's not to say I don't like back-end programming. I think it's good to maintain knowledge and skills on that part to have as good of an understanding on both sides of development. That's why I also dedicate a part of my learning time to Node.js and the Node.js framework Express.
              <br/>
              <br/>
              I've well invested my time into learning <span className="highlight">JavaScript</span> and <span className="highlight">React</span>, and I'm still investing a lot into this because I believe you <span className="highlight">never stop learning</span> in this field. 
              <span className="highlight">I'm an eager learner and don't stop learning something until I master it</span>. 
              I can't wait to put this to practice professionally.
              <br/>
              I also love coming up with <span className="highlight">simple and beautiful designs</span>, and think <span className="highlight">user experience is equally important</span>. I enjoy sharing thoughts on those aspects.
              <br />
              <br />
                At the moment, <span className="highlight">I'm available for any junior front-end web developer job opportunities</span>. Please don't hesitate to
                contact me about this or any other inquiries you might have.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="curved">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(25, 26, 31)"
            fillOpacity="1"
            d="M0,64L12.6,90.7C25.3,117,51,171,76,170.7C101.1,171,126,117,152,117.3C176.8,117,202,171,227,170.7C252.6,171,278,117,303,85.3C328.4,53,354,43,379,32C404.2,21,429,11,455,53.3C480,96,505,192,531,213.3C555.8,235,581,181,606,160C631.6,139,657,149,682,160C707.4,171,733,181,758,186.7C783.2,192,808,192,834,176C858.9,160,884,128,909,133.3C934.7,139,960,181,985,181.3C1010.5,181,1036,139,1061,128C1086.3,117,1112,139,1137,128C1162.1,117,1187,75,1213,58.7C1237.9,43,1263,53,1288,90.7C1313.7,128,1339,192,1364,186.7C1389.5,181,1415,107,1427,69.3L1440,32L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"
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
            d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,149.3C672,139,768,85,864,96C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>{" "}
      </div>
    </div>
  );
}

export default About;
