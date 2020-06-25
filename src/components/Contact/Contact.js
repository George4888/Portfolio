import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactPage" id="contact">
      <a
        id="downloadFile"
        download=""
        target="_blank"
        href="/Resume/Resume4888.pdf"
      >
        Download resume
      </a>

      <h1>Contact information</h1>

      <div className="address">
        <p id="addr">Address:</p>
        <span>Cluj Napoca, Romania</span>
        <p>Phone:</p>
        <span>+40 742 688 104</span>
        <p>Gmail:</p>
        <span>dangeorge4888@gmail.com</span>
      </div>
      <div className="conImg">
        <div className="line1">
          <p>Facebook</p>
          <a href="https://www.facebook.com/dangeorge.caila.1" target="_blank">
            <img id="fb-contact" src="/photos/facebook.png" alt="facebook" />
          </a>
        </div>
        <div className="line2">
          <p>LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/dan-george-caila-660269191/"
            target="_blank"
          >
            <img id="link-contact" src="/photos/LinkedIn.png" alt="linkedin" />
          </a>
        </div>
        <div className="line3">
          <p>GitHub</p>
          <a href="https://github.com/George4888" target="_blank">
            <img id="git-contact" src="photos/Git3.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}
