import React, { useContext } from "react";
import Button from "../Button";
import { generalContextProvider } from "../../contexts/generalContextProvider";
import constants from "../../constant";
import "./GridCreation.scss";
import Scale from "../Scale";

const { ROWS, COLUMNS, OBSTRUCTIONS } = constants;

export default function GridCreation({ onNext }) {
  const value = useContext(generalContextProvider);
  const { rows, columns, obstructions, obstructedCell } = value;
  console.log(obstructedCell.length, obstructions);
  return (
    <div className="GridCreation">
      <h2 className="GridCreation__title">Grid Creation</h2>
      <Scale title="Number of rows" value={rows} type={ROWS} />
      <Scale title="Number of columns" value={columns} type={COLUMNS} />
      <Scale
        title="Number of obstructions"
        value={+obstructions + obstructedCell.length}
        type={OBSTRUCTIONS}
      />
      <Button buttonText="Next" onClick={onNext} />
    </div>
  );
}
