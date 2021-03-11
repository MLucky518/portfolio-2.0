import React, { useState, useEffect } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function TopNav() {
    return (
        <div className="top-nav">
            <Menu.Item className="topbar">
                
                <NavLink className="nav" to="/">
                    Home
                </NavLink>
            </Menu.Item>
            
            {/* <Menu.Item className="topbar">
        
        <NavLink className="nav" to="/myGithub">
          Github
        </NavLink>
      </Menu.Item> */}
            <Menu.Item className="topbar">
                
                <NavLink className="nav" to="/mySkills">
                    MySkills
                </NavLink>
            </Menu.Item>
            <Menu.Item className="topbar">
                
                <NavLink className="nav" to="/projects">
                    Projects
                </NavLink>
            </Menu.Item>
        </div>
    );
}

export default TopNav;
