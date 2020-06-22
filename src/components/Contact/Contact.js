import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 2,
      },
    },
    exit: {
      X: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="contactPage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
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
        <motion.div className="line1" whileHover={{ scale: 1.1 }}>
          <p>Facebook</p>
          <a href="https://www.facebook.com/dangeorge.caila.1" target="_blank">
            <img id="fb-contact" src="/photos/facebook.png" alt="facebook" />
          </a>
        </motion.div>
        <motion.div className="line2" whileHover={{ scale: 1.1 }}>
          <p>LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/dan-george-caila-660269191/"
            target="_blank"
          >
            <img id="link-contact" src="/photos/LinkedIn.png" alt="linkedin" />
          </a>
        </motion.div>
        <motion.div className="line3" whileHover={{ scale: 1.1 }}>
          <p>GitHub</p>
          <a href="https://github.com/George4888" target="_blank">
            <img id="git-contact" src="photos/Git3.png" alt="github" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
