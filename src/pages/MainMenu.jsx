import React from "react";
import Home from "./Home";

function MainMenu() {
  return (
    <div className="main-menu">
      <Home />
      <div className="main-menu_item">
        <h2 className="item_title">Create a Tab</h2>
      </div>
      <div className="main-menu_item">
        <h2 className="item_title">Choose your Tab</h2>
      </div>
    </div>
  );
}

export default MainMenu;
