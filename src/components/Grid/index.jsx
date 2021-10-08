import React, { useContext } from "react";
import "./Grid.scss";
import { generalContextProvider } from "../../contexts/generalContextProvider";

const Columns = ({ rowNumber, blueCells }) => {
  const { onDragOver, onDrop, obstructedCell, columns } = useContext(
    generalContextProvider
  );
  let cols = [];
  for (let j = 0; j < columns; j++) {
    let className = "Grid__block";
    if (obstructedCell.includes(`${rowNumber}-${j}`)) {
      className += " obstructed";
    }

    if (blueCells.includes(`${rowNumber}-${j}`)) {
      className += " blue-cell";
    }
    cols.push(
      <div
        className={className}
        data-cell={`${rowNumber}-${j}`}
        onDrop={onDrop}
        onDragOver={onDragOver}
      />
    );
  }

  return cols;
};

export default function Grid({ blueCells = [] }) {
  const { rows } = useContext(generalContextProvider);
  let rowsJsx = [];
  for (let i = 0; i < rows; i++) {
    rowsJsx.push(
      <div className="Grid__row">
        <Columns rowNumber={i} blueCells={blueCells} />
      </div>
    );
  }
  return <div className="Grid">{rowsJsx}</div>;
}
