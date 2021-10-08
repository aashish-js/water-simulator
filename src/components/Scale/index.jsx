import React, { useContext } from "react";
import { generalContextProvider } from "../../contexts/generalContextProvider";

import "./Scale.scss";

export default function Scale({ title, value: rangeValue, type }) {
  const value = useContext(generalContextProvider);

  const { scaleHandler } = value;

  return (
    <div className="Scale">
      <p className="Scale__title">{title}</p>
      <div className="scale__rangeContainer">
        <input
          className="Scale__line"
          type="range"
          min="1"
          max="10"
          value={rangeValue}
          step="1"
          onChange={(event) => scaleHandler(event, type)}
        />
        <p className="Scale__currentInfo">{rangeValue}</p>
      </div>

      <div className="Scale__value">
        <p>1</p>
        <p>10</p>
      </div>
    </div>
  );
}
