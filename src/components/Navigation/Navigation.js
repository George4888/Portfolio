import React from "react";
import NavButton from "./NavButton";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <a href="#landingPage">
        <NavButton name="Home" />
      </a>
      <a href="#skillsPage">
        <NavButton name="Skills" />
      </a>
      <a href="#projects">
        <NavButton name="Portfolio" />
      </a>
      <a href="#contact">
        <NavButton name="Contact" />
      </a>
    </div>
  );
}
