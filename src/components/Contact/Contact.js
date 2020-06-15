import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="contactPage">
      <h1>Contact</h1>
      <div className="conImg">
        <motion.div className="line1" whileHover={{ scale: 1.1 }}>
          <p>Facebook</p>
          <img id="fb-contact" src="/photos/facebook.png" alt="facebook" />
        </motion.div>
        <motion.div className="line2" whileHover={{ scale: 1.1 }}>
          <p>LinkedIn</p>
          <img id="link-contact" src="/photos/LinkedIn.png" alt="linkedin" />
        </motion.div>
        <motion.div className="line3" whileHover={{ scale: 1.1 }}>
          <p>GitHub</p>
          <img id="git-contact" src="photos/Git3.png" alt="github" />
        </motion.div>
      </div>
    </div>
  );
}
