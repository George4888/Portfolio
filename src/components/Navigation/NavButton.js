import React from "react";
import "./NavButton.css";

export default function NavButton(props) {
  return (
    <div className={props.name.toLowerCase()}>
      <input type="button" value={props.name} />
    </div>
  );
}
