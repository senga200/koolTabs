import React from "react";
import { deleteCardAction } from "../actions/CardAction";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Delete({ id }) {
  const dispatch = useDispatch();

  const deleteComponent = (e) => {
    e.preventDefault();
    if (!id) {
      console.log("error regarde", id);
      return;
    }
    console.log("Card ID to delete: ", id);
    dispatch(deleteCardAction(id));
    console.log("deleted !!");
  };

  return (
    <div className="delete-container">
      <button className="tab-util_fontAwesome" onClick={deleteComponent}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}

export default Delete;
