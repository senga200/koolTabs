import React from "react";
import "./FretBoard.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Delete from "./Delete";
import {
  pressAction,
  unPressAction,
  crossOrRoundAction,
} from "../actions/CardAction";

function FretBoard({ id }) {
  console.log("id de fretboard", id);
  const dispatch = useDispatch();
  const [activeNotes, setActiveNotes] = useState([]);
  //débuter avec un tableau de 6 éléments à 0 (vide = 0, croix = 1, rond = 2)
  const [crossOrRound, setCrossOrRound] = useState(Array(6).fill(0));

  const handleNotePress = (note) => {
    if (activeNotes.includes(note)) {
      setActiveNotes(activeNotes.filter((n) => n !== note));
      dispatch(unPressAction({ cardKey: id, note: note }));
    } else {
      setActiveNotes([...activeNotes, note]);
      dispatch(pressAction({ cardKey: id, note: note }));
    }
  };

  const handleCrossOrRound = (index) => {
    if (crossOrRound[index] === 0) {
      setCrossOrRound((prev) => {
        const newState = [...prev];
        newState[index] = 1;
        return newState;
      });
      dispatch(crossOrRoundAction({ cardKey: id, index, value: 1 }));
    } else if (crossOrRound[index] === 1) {
      setCrossOrRound((prev) => {
        const newState = [...prev];
        newState[index] = 2;
        return newState;
      });
      dispatch(crossOrRoundAction({ cardKey: id, index, value: 2 }));
    } else {
      setCrossOrRound((prev) => {
        const newState = [...prev];
        newState[index] = 0;
        return newState;
      });
      dispatch(crossOrRoundAction({ cardKey: id, index, value: 0 }));
    }
  };

  return (
    <div className="tab-container">
      <div className="tab-card">
        <div className="tab-util_card">
          <div className="item_card">
            <Delete id={id} />
          </div>
          <div className="item_card">
            <button className="tab-util_fontAwesome">
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>
        <div className="tab-card_chord-name">
          <input
            type="text"
            id={`chord-name-input-${id}`}
            placeholder="nom de l'accord"
          />
        </div>
        <div className="IdCard">{id}</div>
        <div className="numeroCase">
          <label htmlFor={`case-select-${id}`}>Case :</label>
          <select id={`case-select-${id}`} className="case-select">
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
                {crossOrRound[i] === 0 ? "" : crossOrRound[i] === 1 ? "X" : "O"}
              </button>
            ))}
          </div>
          {/* <div className="crossOrRound">
            {[...Array(6)].map((_, i) => (
              <button
                key={i}
                className="crossOrRound_button"
                onClick={() => handleCrossOrRound(i)}
              >
                {crossOrRound
                  ? crossOrRound[i] === 0
                    ? ""
                    : crossOrRound[i] === 1
                    ? "X"
                    : "O"
                  : ""}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FretBoard;
