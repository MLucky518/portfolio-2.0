import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-icon">
        <NavLink className="nav" to="/">
          <i className="fas fa-home"></i>
        </NavLink>{" "}
        Home
      </div>
      <div className="nav-icon">
        <NavLink className="nav" to="/myGithub" >
          <i className="fab fa-github-square"></i>
        </NavLink>
        Github
      </div>
      <div className="nav-icon">
        <NavLink className="nav" to="/mySkills">
          <i className="fab fa-readme"></i>
        </NavLink>
        MySkills
      </div>

      <div className="nav-icon">
        <NavLink className="nav" to="/projects">
          <i className="fas fa-tasks"></i>
        </NavLink>
        Projects
      </div>
    </div>
  );
}

export default Navbar;
