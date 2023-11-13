import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import FretBoard from "./components/FretboardGrid";
import { useDispatch } from "react-redux";
import {
  createCardAction,
  //deleteCardAction,
  //duplicateCardAction,
} from "./actions/CardAction";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const fretBoardComponents = useSelector((state) => state.cards.fretBoard);

  const createNewComponent = () => {
    console.log("createNewComponent");
    dispatch(createCardAction());
  };

  return (
    <div className="home">
      <div className="home_header">
        <h1>KOOLTABS from home</h1>
        <button className="add-tab" onClick={createNewComponent}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </div>
      <div className="home_container">
        <FretBoard />
      </div>
    </div>
  );
}

export default Home;
