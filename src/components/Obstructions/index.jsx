import React from "react";
import PropTypes from "prop-types";

import "./Obstructions.scss";

export default function Obstructions({ obstructions }) {
  let jsx = [];
  for (let i = 0; i < obstructions; i++) {
    jsx.push(<div className="Obstructions--block" draggable={true}></div>);
  }
  return <div>{jsx}</div>;
}
