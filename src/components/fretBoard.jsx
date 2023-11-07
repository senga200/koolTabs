import React from "react";
import "./fretBoard.css";
import { useDispatch, useSelector } from "react-redux";
import { pressAction, unPressAction } from "../actions/PressAction";

function FretBoard() {
  const dispatch = useDispatch();
  const activeNote = useSelector((state) => state.notes.activeNote);

  const handleNotePress = (note) => {
    if (activeNote === note) {
      dispatch(unPressAction());
    } else {
      dispatch(pressAction(note));
    }
  };

  return (
    <div>
      <div id="grids-container">
        <div className="maSuperTab">
          <div className="chord-name">
            <label htmlFor="chord-name-input">
              Et l'accord c'est quoi si tu sais :
            </label>
            <input
              type="text"
              id="chord-name-input"
              placeholder="blabla dièse"
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
          <div className="tabContainer">
            <div className="name">
              <div className="stringName">E</div>
              <div className="stringName">B</div>
              <div className="stringName">G</div>
              <div className="stringName">D</div>
              <div className="stringName">A</div>
              <div className="stringName">E</div>
            </div>
            <div className="fretboard">
              <div className="cadre">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="note-fret"></div>
                ))}
              </div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="string">
                  {[...Array(5)].map((_, j) => {
                    const note = `${i}-${j}`;
                    const isNotePressed = activeNote === note;

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
            <div className="croixRond">
              {[...Array(6)].map((_, i) => (
                <button key={i} className="croixRondChoix"></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FretBoard;
