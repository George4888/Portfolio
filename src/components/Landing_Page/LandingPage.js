import React from "react";
import "./LandingPage.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

const variantsForH1 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const variantsForDesc = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="landingPage">
      <motion.div
        className="landing-page-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={variantsForH1}>
          Hello, my name is George!
        </motion.h1>
        <motion.div variants={variantsForDesc} className="desc">
          <h3>About me</h3>
          <p>
            I enjoy writing code and i like to create web applications because
            it gives me a sense of freedom and accomplishment you can only find
            by building something everyone can use.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
