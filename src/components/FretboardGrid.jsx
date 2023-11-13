import React from "react";
import "./FretBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faCopy,
  faScissors,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

import { pressAction, unPressAction } from "../actions/PressAction";

function FretBoard() {
  const dispatch = useDispatch();
  const activeNotes = useSelector((state) => state.notes.activeNotes);
  const [crossOrRoundState, setCrossOrRoundState] = useState(Array(6).fill(0));

  const handleNotePress = (note) => {
    if (activeNotes.includes(note)) {
      dispatch(unPressAction(note));
    } else {
      dispatch(pressAction(note));
    }
  };

  const handleCrossOrRound = (index) => {
    setCrossOrRoundState((prev) => {
      const newState = [...prev];
      newState[index] = (newState[index] + 1) % 3; // Basculer entre 0, 1 et 2
      return newState;
    });
  };

  // const createNewCard = () => {
  //   console.log("createNewCard");
  //   dispatch(createCardAction());
  // };

  return (
    <div id="tab-container">
      <div className="tab-card">
        <div className="tab-util">
          <div className="delete">
            <button className="tab-util_fontAwesome">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
          <div className="duplicate">
            <button className="tab-util_fontAwesome">
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
          <div className="cut">
            <button className="tab-util_fontAwesome">
              <FontAwesomeIcon icon={faScissors} />
            </button>
          </div>
          <div className="new">
            <button className="tab-util_fontAwesome">
              {" "}
              <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </div>
        </div>
        <div className="tab-card_chord-name">
          <input
            type="text"
            id="chord-name-input"
            placeholder="nom de l'accord"
          />
        </div>
        <div className="numeroCase">
          <label htmlFor="case-select">Case :</label>
          <select id="case-select">
            {Array.from({ length: 22 }, (_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="fretboard-container">
          <div className="fretboard-container_name">
            <div className="stringName">E</div>
            <div className="stringName">B</div>
            <div className="stringName">G</div>
            <div className="stringName">D</div>
            <div className="stringName">A</div>
            <div className="stringName">E</div>
          </div>
          <div className="fretboard">
            <div className="fretboard_string">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="note-fret"></div>
              ))}
            </div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="string">
                {[...Array(5)].map((_, j) => {
                  const note = `${i + 1}${j + 1}`;
                  const isNotePressed = activeNotes.includes(note);

                  return (
                    <div
                      key={j}
                      className={`note-fret ${
                        isNotePressed ? "clicked" : ""
                      } pointer`}
                      onClick={() => handleNotePress(note)}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="crossOrRound">
            {[...Array(6)].map((_, i) => (
              <button
                key={i}
                className="crossOrRound_button"
                onClick={() => handleCrossOrRound(i)}
              >
                {crossOrRoundState[i] === 0
                  ? ""
                  : crossOrRoundState[i] === 1
                  ? "X"
                  : "O"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FretBoard;
