import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolioPage">
      <h1>My work</h1>
      <div className="projects">
        <div className="yearAPI">
          <p>Random Year API</p>
          <a href="http://randomyearapi.epizy.com">
            <img src="/photos/yearAPI.png" alt="year api" />
          </a>
          <div className="sources">
            <a href="https://github.com/George4888/random-year-api">
              <img src="/photos/GitHub.png" style={{ height: 35 }} alt="repo" />
            </a>
          </div>
        </div>
        <div className="bootstrapSite">
          <p>Bootstrap 4</p>
          <a href="http://bootst4testing.epizy.com">
            <img src="/photos/bstrap4testing.png" alt="bootstrap site" />
          </a>
          <div className="sources">
            <a href="https://github.com/George4888/Single-page-app">
              <img src="/photos/GitHub.png" style={{ height: 35 }} alt="repo" />
            </a>
          </div>
        </div>
        <div className="groupProjct">
          <p>Team V Project</p>
          <a href="http://">
            <img src="/photos/teamV.png" alt="group project" />
          </a>
          <div className="sources">
            <a href="https://github.com/Boo1122/IMDB">
              <img src="/photos/GitHub.png" style={{ height: 35 }} alt="repo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
