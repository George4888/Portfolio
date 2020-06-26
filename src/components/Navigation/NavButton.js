import React from "react";
import "./NavButton.css";

export default function NavButton(props) {
  return (
    <div className={props.name.toLowerCase()}>
      <p>{props.name}</p>
    </div>
  );
}
