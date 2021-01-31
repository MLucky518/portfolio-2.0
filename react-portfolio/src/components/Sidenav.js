import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Sidenav({ animation, direction, visible }) {
  const [state, setState] = useState({
    animation: "overlay",
    direction: "right",
    dimmed: false,
    visible: false,
  });

  return (
    <div className={"side-container"}>
      <Sidebar
        as={state.Menu}
        animation={state.animation}
        direction={state.direction}
        icon="labeled"
        inverted
        vertical
        visible={state.visible}
        width="wide"
        className={"main-bar"}
      >
        <Menu.Item as="a" className="sidebar">
          <div className="nav-icon">
            <NavLink
              onClick={() => setState({ ...state, visible: false })}
              className="nav"
              to="/"
            >
              <i className="fas fa-home"></i>
              Home
            </NavLink>{" "}
            
          </div>
        </Menu.Item>
<Menu.Item className="sidebar">
        <div className="nav-icon">
          <NavLink
            onClick={() => setState({ ...state, visible: false })}
            className="nav"
            to="/myGithub"
          >
            <i className="fab fa-github-square"></i>
            Github
          </NavLink>
          
        </div>
        </Menu.Item>
        <Menu.Item className="sidebar">
        <div className="nav-icon">
          <NavLink
            onClick={() => setState({ ...state, visible: false })}
            className="nav"
            to="/mySkills"
          >
            <i className="fab fa-readme"></i>
            MySkills
          </NavLink>
          
        </div>
        </Menu.Item>
        <Menu.Item className="sidebar">
        <div className="nav-icon">
          <NavLink
            onClick={() => setState({ ...state, visible: false })}
            className="nav"
            to="/projects"
          >
            <i className="fas fa-tasks"></i>
            Projects
          </NavLink>
          
        </div>
        </Menu.Item>
        <i onClick={() => setState({ ...state, visible: false })} className = "close icon"></i>
      </Sidebar>
      <div>
        <i
          className="align justify left icon menu-icon"
          active={state.direction === "right"}
          onClick={() => setState({ ...state, visible: !state.visible })}
        ></i>
      </div>
    </div>
  );
}

// function Sidenav() {
//   const [state, setState] = useState({
//     animation: "overlay",
//     direction: "right",
//     dimmed: false,
//     visible: false,
//   });

//   return (
//     <div>
//       <i
//         className="indent icon menu-icon"
//         active={state.direction === "right"}
//         onClick={() => setState({ ...state, visible: !state.visible })}
//       ></i>

//       <Side
//         animation={state.animation}
//         direction={state.direction}
//         visible={state.visible}
//       />
//     </div>
//   );
// }

export default Sidenav;
