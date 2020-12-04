import React, { useEffect } from "react";
import { gsap } from "gsap";


function About(props) {

  
  useEffect(() => {
    gsap.to(".about-container", 2, {
      startAt: { x: -1000, opacity: 1 },
      x: 10,
      y: 10,
    });
  }, []);
  console.log(props);
  return (
    <div className=" about-container">
      <h2 >{props.header}</h2>

      <p>{props.info.about1}</p>
      <p>{props.info.about2}</p>

      
    </div>
  );
}

export default About;
