import React from "react";
import "./MySkills.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.7,
    },
  },
};

const childrenVariants2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1.7,
    },
  },
};

const childrenVariants3 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 4,
      duration: 1.7,
    },
  },
};

export default function MySkills() {
  return (
    <div className="skillsPage">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        I have experience working with
      </motion.h1>

      <div className="logo">
        <motion.div
          className="section1"
          variants={childrenVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="html5">
            <p>HTML 5</p>
            <img src="/photos/HTML5.png" style={{ height: 70 }} alt="HTML5" />
          </div>
          <div className="css3">
            <p>CSS 3</p>
            <img src="/photos/CSS3.png" style={{ height: 70 }} alt="CSS3" />
          </div>
          <div className="js">
            <p>JavaScript</p>
            <img src="/photos/JS.png" style={{ height: 70 }} alt="JS" />
          </div>
        </motion.div>

        <motion.div
          className="section2"
          variants={childrenVariants2}
          initial="hidden"
          animate="visible"
        >
          <div className="re">
            <p>React JS</p>
            <img
              src="/photos/ReactJS.png"
              style={{ height: 70 }}
              alt="ReactJS"
            />
          </div>
          <div className="node">
            <p>Node JS</p>
            <img
              src="/photos/NodeJS.png"
              style={{ height: 70 }}
              alt="Node JS"
            />
          </div>
        </motion.div>
        <motion.div
          className="section3"
          variants={childrenVariants3}
          initial="hidden"
          animate="visible"
        >
          <div className="web">
            <p>Webpack</p>
            <img
              src="/photos/Webpack.png"
              style={{ height: 70 }}
              alt="Webpack"
            />
          </div>
          <div className="git">
            <p>GitHub</p>
            <img src="/photos/Git2.png" style={{ height: 70 }} alt="GitHub" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
