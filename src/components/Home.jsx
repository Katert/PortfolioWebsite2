import React, { Component } from "react";
import { motion } from "framer-motion";
import "../css/Home.css";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div id="home-container">
          <div id="greeting-container">
            <motion.div
              id="greeting"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Hi, my name is{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.2 }}
              >
                <span className="highlight homepage">
                  Wesley Kater
                </span>
              </motion.span>
              .
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.2 }}
            >
              <span id="greeting-intro">
                I'm a{" "}
                <span className="highlight homepage">
                  junior front-end
                </span>{" "}
                web developer who loves designing <br/> and coding.
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: -5 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0.3, y: 250 }}
              animate={{ opacity: 1, y: 270 }}
              transition={{ yoyo: Infinity, duration: 1.5 }}
            >
              {/* <Link to="/contact">Available for a job!</Link> */}
              <a href='#about'><img
                id="arrow-down"
                alt="scroll-down"
                src={require("../img/arrow-down.png")}
                href="#about"
              ></img></a>
            </motion.div>
          </motion.div>
          <motion.div
            className="curved"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="rgb(25, 26, 31)"
                fillOpacity="1"
                d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,128C840,117,960,107,1080,106.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="rgb(25, 26, 31)"
                fillOpacity="1"
                d="M0,128L21.8,106.7C43.6,85,87,43,131,58.7C174.5,75,218,149,262,176C305.5,203,349,181,393,160C436.4,139,480,117,524,96C567.3,75,611,53,655,58.7C698.2,64,742,96,785,128C829.1,160,873,192,916,192C960,192,1004,160,1047,170.7C1090.9,181,1135,235,1178,256C1221.8,277,1265,267,1309,218.7C1352.7,171,1396,85,1418,42.7L1440,0L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
              ></path>
            </svg>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Home;
