import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolioPage">
      <h1>My work</h1>
      <div className="projects">
        <div className="yearAPI">
          <p>Random Year API</p>
          <img src="/photos/yearAPI.png" alt="year api" />
          <div className="sources">
            <p>web</p>
            <p>github</p>
          </div>
        </div>
        <div className="bootstrapSite">
          <p>Bootstrap 4</p>
          <img src="/photos/bstrap4testing.png" alt="bootstrap site" />
          <div className="sources">
            <p>web</p>
            <p>github</p>
          </div>
        </div>
        <div className="groupProjct">
          <p>Team V Project</p>
          <img src="/photos/teamV.png" alt="group project" />
          <div className="sources">
            <p>web</p>
            <p>github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
