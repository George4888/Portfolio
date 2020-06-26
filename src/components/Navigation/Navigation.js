import React from "react";
import NavButton from "./NavButton";
import "./Navigation.css";
import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link
        activeClass="active"
        to="landingPage"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <NavButton name="Home" />
      </Link>

      <Link
        activeClass="active"
        to="skillsPage"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <NavButton name="Skills" />
      </Link>

      <Link
        activeClass="active"
        to="portfolioPage"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <NavButton name="Portfolio" />
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <NavButton name="Contact" />
      </Link>
    </div>
  );
}
