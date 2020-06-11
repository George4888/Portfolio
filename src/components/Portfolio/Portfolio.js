import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolioPage">
      <h1>My work</h1>
      <div className="projects">
        <div className="yearAPI">
          <img src="/photos/yearAPI.png" alt="year api" />
        </div>
        <div className="bootstrapSite">
          <img src="/photos/bstrap4testing.png" alt="bootstrap site" />
        </div>
        <div className="groupProjct">
          <img src="" alt="group project" />
        </div>
      </div>
    </div>
  );
}
