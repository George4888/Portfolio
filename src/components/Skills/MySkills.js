import React from "react";
import "./MySkills.css";

export default function MySkills() {
  return (
    <div className="skillsPage">
      <h1>I have experience working with</h1>
      <div className="logo">
        <div className="section1">
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
        </div>
        <div className="section2">
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
        </div>
        <div className="section3">
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
        </div>
      </div>
    </div>
  );
}
