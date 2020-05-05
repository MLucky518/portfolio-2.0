import React, { Component } from "react";
import Typing from "react-typing-animation";
import { gsap } from "gsap";

export default class MyInfo extends Component {
  constructor(props) {
    super(props);
    this.myTween = null;
    this.myElement = null;
    this.state = {};
  }

  openingAnimation() {
    this.myTween = gsap.to(".info", 2, {
      startAt: { x: -1000, opacity: 1 },
      x: -10,
      y: 10,
    });
    this.myTween = gsap.to(this.myElement, 2, {
      startAt: { x: -1000, opacity: 1 },
      x: -10,
      y: 10,
    });
    this.myTween = gsap.to(".main-image", 2, {
      startAt: { x: 1000, opacity: 1 },
      x: -10,
      y: 10,
    });
  }

  componentDidMount() {
    this.openingAnimation();
  }

  render() {
    return (
      <div className="my-info">
          
        <img
          className="main-image"
          src={
            "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/83762975_2717257261693539_2815335433142009856_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=bD-DPxtTst8AX8QFLH_&_nc_ht=scontent-lga3-1.xx&oh=63c58a0c502ab11dd5eac9a389e5076a&oe=5ECA1852"
          }
        />
        <h1 ref={(h1) => (this.myElement = h1)}>Michael Luck</h1>
        <ul className="info monospace">
          <Typing>
            <li>Web Developer</li>
            <li>Indie Game dev</li>
            <li>Full stack web development student at Lambda School</li>
          </Typing>
        </ul>
      </div>
    );
  }
}
