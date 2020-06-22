import React from "react";
import NavButton from "./NavButton";

export default function Navigation() {
  return (
    <div className="navigation">
      <NavButton name="Home" />
      <NavButton name="Skills" />
      <NavButton name="Portfolio" />
      <NavButton name="Contact" />
    </div>
  );
}
