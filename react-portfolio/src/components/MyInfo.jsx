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
            "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/89241752_2787365621349369_4261192403328696320_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=jzyzxCNbFJwAX8Dm2DM&_nc_ht=scontent-ort2-2.xx&oh=1fd5697a5e31405e78edce9001a163ba&oe=5F4FCD45"
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
