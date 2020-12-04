import React, { Component } from "react";
import Typing from "react-typing-animation";
import { gsap } from "gsap";
import pic from "../lab.jpg"
import { Link } from "react-router-dom";

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
            pic
          }
        />
        <h1 ref={(h1) => (this.myElement = h1)}>Michael Luck</h1>
        <ul className="info">
          <Typing>
            <p>Web Developer</p>
            <p>Indie Game dev</p>
            <p>Full stack web development student at Lambda School</p>
          </Typing>
          <Link to = "/contact"><i className="far fa-id-card"></i></Link>
        </ul>
      </div>
    );
  }
}
