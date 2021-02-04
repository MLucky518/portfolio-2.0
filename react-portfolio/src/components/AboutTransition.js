import React, { Component } from "react";
import { Button, Divider, Image, Transition } from "semantic-ui-react";
import About from "./About";
import { aboutInfo } from "./util";

export default class AboutTransition extends Component {
  state = { visible: false };

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  render() {
    const { visible } = this.state;

    return (
      <div className="about-contents">
        <Button
          content={visible ? "X" : "About Me"}
          onClick={this.toggleVisibility}
          className={"about-button"}
        />
        <Divider hidden />
        <Transition
          visible={visible}
          animation="scale"
          duration={700}
          unmountOnHide={true}
        >
          <About info={aboutInfo} header={"Hello World,"} />
        </Transition>
      </div>
    );
  }
}
