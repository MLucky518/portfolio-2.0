import React from "react";
import { motion } from "framer-motion";

function About(props) {
  return (
    <motion.div
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" about-container"
    >
      <h2>{props.header}</h2>

      <p>{props.info.about1}</p>
      <p>{props.info.about2}</p>
    </motion.div>
  );
}

export default About;
