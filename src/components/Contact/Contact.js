import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactPage">
      <h1>Contact</h1>
      <div className="conImg">
        <div className="line1">
          <p>Facebook</p>
          <img id="fb-contact" src="/photos/facebook.png" alt="facebook" />
        </div>
        <div className="line2">
          <p>LinkedIn</p>
          <img id="link-contact" src="/photos/LinkedIn.png" alt="linkedin" />
        </div>
        <div className="line3">
          <p>GitHub</p>
          <img id="git-contact" src="photos/Git3.png" alt="github" />
        </div>
      </div>
    </div>
  );
}
