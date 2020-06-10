import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolioPage">
      <h1>My work</h1>
      <div className="projects">
        <div className="yearAPI">
          <img src="/photos/yearAPI.png" alt="year api photo" />
        </div>
        <div className="bootstrapSite">
          <img src="" alt="bootstrap site photo" />
        </div>
        <div className="groupProjct">
          <img src="" alt="group project photo" />
        </div>
      </div>
    </div>
  );
}
