import React, { useState } from "react";

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
  const [sidebar, toggleSidebar] = useState("sidebar-hide");

  return (
    <>
      <div className="hamburger-icon">
        <GiHamburgerMenu
          id="hamburger-toggle"
          onClick={() => toggleSidebar("sidebar")}
        />
      </div>
      <div className={sidebar}>
        <nav className="nav-links">
          <FaRegTimesCircle
            id="sidebar-exit"
            onClick={() => toggleSidebar("sidebar-hide")}
          />
          <ul>
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
          {/* <div id="social-container">
          <a href="https://github.com/Katert">
            <FaGithubSquare />
          </a>
          <FaLinkedin />
        </div> */}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
