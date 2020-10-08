import React, { useState } from "react";
import { motion } from "framer-motion";

// Icon imports
import { TiMessages } from "react-icons/ti";
import { MdPersonOutline } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { RiHammerLine } from "react-icons/ri";
import { RiHomeLine } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "../css/Sidebar.css";

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  return (
    <>
      <motion.div
        className="hamburger-icon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <GiHamburgerMenu id="hamburger-toggle" onClick={showSidebar} />
      </motion.div>
      <div className={sidebar ? "sidebar" : "sidebar-hide"}>
        <nav className="nav-links">
          <ul>
            <li >
              <span>
                <FaRegTimesCircle id="sidebar-exit" onClick={showSidebar} />
              </span>
            </li>
            <li className="list-item">
              <a className="nav-item" href="#home">
                <RiHomeLine className="sidebar-icon" />
                home
              </a>
            </li>
            <li className="list-item">
              <a className="nav-item" href="#about">
                <MdPersonOutline className="sidebar-icon" />
                about
              </a>
            </li>
            <li className="list-item">
              <a className="nav-item" href="#skills">
                <FaLaptopCode className="sidebar-icon" />
                skills
              </a>
            </li>
            <li className="list-item">
              <a className="nav-item" href="#work">
                <RiHammerLine className="sidebar-icon" />
                work
              </a>
            </li>
            <li className="list-item">
              <a className="nav-item" href="#contact">
                <TiMessages className="sidebar-icon" />
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </>
  );
}

export default Sidebar;
