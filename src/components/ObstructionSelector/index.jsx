import React, { useContext } from "react";
import { generalContextProvider } from "../../contexts/generalContextProvider";
import Button from "../Button";
import Grid from "../Grid";
import Obstructions from "../Obstructions";

import "./ObstructionSelector.scss";

export default function ObstructionSelector({ onNext, onBack }) {
  const value = useContext(generalContextProvider);
  const { obstructions } = value;

  return (
    <div className="ObstructionSelector">
      <h2 className="GridCreation__title">
        Select the obstructions and place it inside the grid
      </h2>
      <div className="ObstructionSelector--container">
        <div className="ObstructionSelector__GridContainer">
          <Grid />
          <div className="ObstructionSelector__buttonContainer">
            <Button
              buttonText="Back"
              style={{ marginRight: "6px" }}
              onClick={onBack}
            />
            <Button buttonText="Start Simulation" onClick={onNext} />
          </div>
        </div>
        <div className="ObstructionSelector__obstructionContainer">
          <Obstructions obstructions={obstructions} />
        </div>
      </div>
    </div>
  );
}
