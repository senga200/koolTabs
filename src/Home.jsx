import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { createCardAction, deleteCardAction } from "./actions/CardAction";
import FretBoardGrid from "./components/FretboardGrid";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const fretBoardComponents = useSelector((state) => state.cards.fretBoard);

  const createNewComponent = () => {
    console.log("createNewComponent");
    dispatch(createCardAction(Math.random()));
  };

  const deleteComponent = () => {
    console.log("deleteComponent");
    dispatch(deleteCardAction());
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
          <div className="tab-util">
            <h2 className="item_title">Delete a Tab</h2>
            <button className="tab-util_fontAwesome" onClick={deleteComponent}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
      <div className="home_container">
        <div className="tab-container">
          {fretBoardComponents.map((component, index) => (
            <FretBoardGrid key={component.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
