import { useState } from "react";
import Header from "./components/Header";
import GridCreation from "./components/GridCreation";
import GeneralContextProvider from "./contexts/generalContextProvider";
import "./App.scss";

import constants from "./constant";
import ObstructionSelector from "./components/ObstructionSelector";
import Simulator from "./components/Simulator";
const { ROWS, COLUMNS, OBSTRUCTIONS } = constants;

function App() {
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(1);
  const [obstructions, setObstruction] = useState(1);

  const [obstructedCell, setObstructedCell] = useState([]);
  const [path, setPath] = useState([]);

  const [step, setStep] = useState(1);

  const resetAll = () => {
    setRows(1);
    setColumns(1);
    setObstruction(1);
    setObstructedCell([]);
    setPath([]);
    setStep(1);
  };
  const scaleHandler = (event, type) => {
    switch (type) {
      case ROWS:
        setRows(event.target.value);
        break;
      case COLUMNS:
        setColumns(event.target.value);
        break;
      case OBSTRUCTIONS:
        if (obstructedCell.length) setObstructedCell([]);
        setObstruction(event.target.value);
        break;
      default:
    }
  };
  let mainJsx = null;

  if (step === 1) {
    mainJsx = (
      <GridCreation
        onNext={() => {
          if (obstructions > rows * columns) {
            alert("Obstructions cannot be more than cells");
            return;
          }
          setStep((step) => step + 1);
        }}
      />
    );
  } else if (step === 2) {
    mainJsx = (
      <ObstructionSelector
        onNext={() => {
          setStep((step) => step + 1);
        }}
        onBack={() => setStep((step) => step - 1)}
      />
    );
  } else if (step === 3) {
    mainJsx = <Simulator onBack={() => setStep((step) => step - 1)} />;
  }

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event) => {
    let cellNumber = event.target.dataset.cell;
    if (obstructedCell.includes(cellNumber)) {
      alert("Please place the obstruction in another cell!!");
      return;
    } else {
      setObstructedCell([...obstructedCell, cellNumber]);
      setObstruction(obstructions - 1);
    }
  };

  const generatePath = (initColumn) => {
    let path = [];
    for (let i = 0; i < rows; i++) {
      if (obstructedCell.includes(`${i}-${initColumn}`)) {
      } else path.push(`${i}-${initColumn}`);
      // path.push(`${i}-${initColumn}`);
    }
    setPath(path);
  };

  return (
    <GeneralContextProvider
      value={{
        scaleHandler,
        rows,
        columns,
        obstructions,
        onDragOver,
        onDrop,
        obstructedCell,
        path,
        generatePath,
        resetAll,
      }}
    >
      <div className="App">
        <Header headerText="Waterflow Simulator" />
        {mainJsx}
      </div>
    </GeneralContextProvider>
  );
}

export default App;
