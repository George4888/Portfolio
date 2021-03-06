import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="portfolioPage" id="portfolioPage">
      <h1>My work</h1>
      <div className="projects" id="projects">
        <motion.div className="yearAPI" whileHover={{ scale: 1.1 }}>
          <p>Random Year API</p>
          <a href="http://randomyearapi.epizy.com" target="_blank">
            <img src="/photos/yearAPI.png" alt="year api" />
          </a>
          <div className="sources">
            <span>GitHub Repository</span>
            <a
              href="https://github.com/George4888/random-year-api"
              target="_blank"
            >
              <img
                src="/photos/GitHub.png"
                style={{ height: 35, width: 35 }}
                alt="repo"
              />
            </a>
          </div>
        </motion.div>
        <motion.div className="bootstrapSite" whileHover={{ scale: 1.1 }}>
          <p>Bootstrap 4</p>
          <a href="http://bootst4testing.epizy.com" target="_blank">
            <img src="/photos/bstrap4testing.png" alt="bootstrap site" />
          </a>
          <div className="sources">
            <span>GitHub Repository</span>
            <a
              href="https://github.com/George4888/Single-page-app"
              target="_blank"
            >
              <img
                src="/photos/GitHub.png"
                style={{ height: 35, width: 35 }}
                alt="repo"
              />
            </a>
          </div>
        </motion.div>
        <motion.div className="groupProjct" whileHover={{ scale: 1.1 }}>
          <p>Team V Project</p>
          <a href="http://" target="_blank">
            <img src="/photos/teamV.png" alt="group project" />
          </a>
          <div className="sources">
            <span>GitHub Repository</span>
            <a href="https://github.com/Boo1122/IMDB" target="_blank">
              <img
                src="/photos/GitHub.png"
                style={{ height: 35, width: 35 }}
                alt="repo"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
