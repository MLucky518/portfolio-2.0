import React, { useState } from "react";
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
import "./Navbar.scss"

function Side({ animation, direction, visible }) {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>
    </div>
  );
}

function Sidenav() {
  const [state, setState] = useState({
    animation: "overlay",
    direction: "right",
    dimmed: false,
    visible: false,
  });

  return (
    <div>
      <i
        className="outdent icon menu-icon"
        active={state.direction === "right"}
        onClick={() => setState({ ...state, visible: !state.visible })}
      ></i>

      <Side
        animation={state.animation}
        direction={state.direction}
        visible={state.visible}
      />
    </div>
  );
}

export default Sidenav;
