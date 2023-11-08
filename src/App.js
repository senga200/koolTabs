import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Fretboard from "./components/FretboardGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>KOOLTABS</h1>
        <button className="add-tab">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>
      <Fretboard />
    </div>
  );
}

export default App;
