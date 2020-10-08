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
              id="selfie"
              initial={{ x: 50, opacity: -1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <img
                src={require("../img/about/profile.jpeg")}
                alt="selfie"
                style={{ borderRadius: 200 }}
              />
            </motion.div>
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
                <span className="highlight homepage">Wesley Kater</span>
              </motion.span>
              .
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.2 }}
            >
              <span id="greeting-intro">
                I'm a <span className="highlight homepage">front-end</span> web
                developer.
              </span>
            </motion.div>
            <motion.div
            initial={{ opacity: -5 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0.3, y: 0 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ yoyo: Infinity, duration: 1.5 }}
            >
              <a href="#about">
                <img
                  id="scroll-down-icon"
                  alt="scroll-down"
                  src={require("../img/misc/scroll-down-white.png")}
                  href="#about"
                ></img>
              </a>
            </motion.div>
          </motion.div>
          </div>
          <div className='curved'>
            <svg
              style={{backgroundColor: 'black'}}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="svg-top"
              preserveAspectRatio="none"
            >
              <path
                fill="rgb(18, 20, 22)"
                fillOpacity="1"
                d="M0,32L34.3,53.3C68.6,75,137,117,206,138.7C274.3,160,343,160,411,176C480,192,549,224,617,229.3C685.7,235,754,213,823,186.7C891.4,160,960,128,1029,128C1097.1,128,1166,160,1234,186.7C1302.9,213,1371,235,1406,245.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
              ></path>
            </svg>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
