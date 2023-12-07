import React from "react";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainMenu from "../pages/MainMenu";
import Err404 from "../pages/Err404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MainMenu />
      </>
    ),
  },

  {
    path: "/sheet/:id",
    element: (
      <>
        <Home />
      </>
    ),
  },

  {
    path: "/*",
    element: (
      <>
        <Err404 />
      </>
    ),
  },
]);

export default Router;
