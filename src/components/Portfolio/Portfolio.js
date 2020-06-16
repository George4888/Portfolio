import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

export default function Portfolio() {
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
    exit: {
      X: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const forH1 = {
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

  const forYear = {
    hidden: {
      x: "-120vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 2,
        duration: 2.5,
      },
    },
  };

  const forBoot4 = {
    hidden: {
      x: "-120vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 3,
        duration: 2.5,
      },
    },
  };

  const forGroupProject = {
    hidden: {
      x: "-120vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 4,
        duration: 2.5,
      },
    },
  };

  return (
    <motion.div
      className="portfolioPage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1 variants={forH1} initial="hidden" animate="visible">
        My work
      </motion.h1>
      <div className="projects">
        <motion.div
          className="yearAPI"
          variants={forYear}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
        >
          <p>Random Year API</p>
          <a href="http://randomyearapi.epizy.com">
            <img src="/photos/yearAPI.png" alt="year api" />
          </a>
          <div className="sources">
            <span>GitHub Repository</span>
            <a href="https://github.com/George4888/random-year-api">
              <img
                src="/photos/GitHub.png"
                style={{ height: 35, width: 35 }}
                alt="repo"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="bootstrapSite"
          variants={forBoot4}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
        >
          <p>Bootstrap 4</p>
          <a href="http://bootst4testing.epizy.com">
            <img src="/photos/bstrap4testing.png" alt="bootstrap site" />
          </a>
          <div className="sources">
            <span>GitHub Repository</span>
            <a href="https://github.com/George4888/Single-page-app">
              <img
                src="/photos/GitHub.png"
                style={{ height: 35, width: 35 }}
                alt="repo"
              />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="groupProjct"
          variants={forGroupProject}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1 }}
        >
          <p>Team V Project</p>
          <a href="http://">
            <img src="/photos/teamV.png" alt="group project" />
          </a>
          <div className="sources">
            <span>GitHub Repository</span>
            <a href="https://github.com/Boo1122/IMDB">
              <img
                src="/photos/GitHub.png"
                style={{ height: 35, width: 35 }}
                alt="repo"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
