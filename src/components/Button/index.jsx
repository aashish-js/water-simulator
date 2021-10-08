import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

export default function Button({ style, buttonText, onClick }) {
  return (
    <button className="Button" style={{ ...style }} onClick={onClick}>
      {buttonText}
    </button>
  );
}
