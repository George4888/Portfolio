import React from "react";
import "./MySkills.css";
import Progress from "./Progress";
import { useOnScreen } from "./useOnScreen";

export default function MySkills() {
  const [setRef, visible] = useOnScreen({ treshold: 0.2 });

  return (
    <div ref={setRef} className="skillsPage" id="skillsPage">
      <h1>I have experience working with</h1>

      {visible ? (
        <div id="logo">
          <div className="list1">
            <div className="section1">
              <div className="html5">
                <p>HTML 5</p>
                <img
                  src="/photos/HTML5.png"
                  style={{ height: 35 }}
                  alt="HTML5"
                />
              </div>
              <div className="prog">
                <Progress done="90" />
              </div>
            </div>
            <div className="section2">
              <div className="css3">
                <p>CSS 3</p>
                <img src="/photos/CSS3.png" style={{ height: 35 }} alt="CSS3" />
              </div>
              <div className="prog">
                <Progress done="90" />
              </div>
            </div>
            <div className="section3">
              <div className="js">
                <p>JavaScript</p>
                <img src="/photos/JS.png" style={{ height: 35 }} alt="JS" />
              </div>
              <div className="prog">
                <Progress done="80" />
              </div>
            </div>
            <div className="section4">
              <div className="re">
                <p>React JS</p>
                <img
                  src="/photos/ReactJS.png"
                  style={{ height: 35 }}
                  alt="ReactJS"
                />
              </div>
              <div className="prog">
                <Progress done="70" />
              </div>
            </div>
          </div>

          <div className="list2">
            <div className="section5">
              <div className="node">
                <p>Node JS</p>
                <img
                  src="/photos/NodeJS.png"
                  style={{ height: 35 }}
                  alt="Node JS"
                />
              </div>
              <div className="prog">
                <Progress done="70" />
              </div>
            </div>
            <div className="section6">
              <div className="web">
                <p>Webpack</p>
                <img
                  src="/photos/Webpack.png"
                  style={{ height: 35 }}
                  alt="Webpack"
                />
              </div>
              <div className="prog">
                <Progress done="70" />
              </div>
            </div>
            <div className="section7">
              <div className="git">
                <p>GitHub</p>
                <img
                  src="/photos/Git2.png"
                  style={{ height: 35 }}
                  alt="GitHub"
                />
              </div>
              <div className="prog">
                <Progress done="85" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>empty</h1>
        </div>
      )}
    </div>
  );
}
