import React, { useContext, useEffect, useState } from "react";
import { generalContextProvider } from "../../contexts/generalContextProvider";
import Button from "../Button";
import Grid from "../Grid";
import "./Simulator.scss";

export default function Simulator({ onBack }) {
  const value = useContext(generalContextProvider);
  const {
    columns,
    generatePath,
    resetAll,
    obstructions,
    obstructedCell,
    path,
  } = value;
  const [activeCells, setActiveCells] = useState([]);
  let blueboxes = [];
  for (let i = 0; i < columns; i++) {
    blueboxes.push(
      <div className="Simulator__blueBox" onClick={() => generatePath(i)}></div>
    );
  }
  let timerIds = [];
  useEffect(() => {
    if (path.length) {
      path.forEach((p, index) => {
        const t = setTimeout(() => {
          setActiveCells([p]);
        }, index * 1000);
        timerIds.push(t);
      });
    }
    return () => {
      timerIds.forEach((timer) => clearTimeout(timer));
    };
  }, [path]);

  return (
    <div className="Simulator">
      <h2>
        Select the waterflow start Point by clicking on any of the blue boxes
      </h2>
      {!path.length && (
        <div className="Simulator__starting-point">{blueboxes}</div>
      )}
      <Grid blueCells={activeCells} />
      <Button buttonText="Back" style={{ margin: "16px 0" }} onClick={onBack} />
      <Button
        buttonText="Reset"
        style={{ margin: "16px 2px" }}
        onClick={resetAll}
      />
    </div>
  );
}
