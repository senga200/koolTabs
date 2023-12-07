import React from "react";
import "../pages/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  createCardAction,
  incrementCounterAction,
} from "../actions/CardAction";
import FretBoardGrid from "../components/FretboardGrid";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const fretBoardComponents = useSelector((state) => state.cards.fretBoard);

  const createNewComponent = () => {
    console.log("createNewComponent");
    // dispatch(createCardAction(Math.random()));
    dispatch(incrementCounterAction());
    dispatch(createCardAction());
  };

  return (
    <div className="home">
      <div className="home_header">
        <div className="home_header_title">
          <h1>KOOLTABS</h1>
        </div>
        <div className="home_header_menu">
          <div className="tab-util">
            <h2 className="item_title">Add a Tab</h2>
            <button
              className="tab-util_fontAwesome"
              onClick={createNewComponent}
            >
              <FontAwesomeIcon icon={faCirclePlus} />
            </button>
          </div>
        </div>
      </div>
      <div className="home_container">
        <div className="tab-container">
          {fretBoardComponents.map((fretBoard) => (
            <FretBoardGrid key={fretBoard.key} id={fretBoard.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
