import React, { useState, useEffect } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
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
    <div>
      <Sidebar
        as={state.Menu}
        animation={state.animation}
        direction={state.direction}
        icon="labeled"
        visible={state.visible}
        width="thin"
      >
        <Menu.Item className="sidebar">
          <i className="fas fa-home"></i>
          <NavLink
            onClick={() => setState({ ...state, visible: false })}
            className="nav"
            to="/"
          >
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item className="sidebar">
          <i className="fab fa-github-square"></i>
          <NavLink
            onClick={() => setState({ ...state, visible: false })}
            className="nav"
            to="/myGithub"
          >
            Github
          </NavLink>
        </Menu.Item>
        <Menu.Item className="sidebar">
          <i className="fab fa-readme"></i>
          <NavLink
            onClick={() => setState({ ...state, visible: false })}
            className="nav"
            to="/mySkills"
          >
            MySkills
          </NavLink>
        </Menu.Item>
        <Menu.Item className="sidebar">
          <i className="fas fa-tasks"></i>
          <NavLink
            onClick={() => setState({ ...state, visible: false })}
            className="nav"
            to="/projects"
          >
            Projects
          </NavLink>
        </Menu.Item>
        <i
          onClick={() => setState({ ...state, visible: false })}
          className="close icon"
        ></i>
      </Sidebar>
      <div className="menu-icon-visiblity" >
        <i
          className="align justify icon menu-icon"
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
