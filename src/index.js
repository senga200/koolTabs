import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
//import notesActions from "./actions/PressAction";
import cardActions from "./actions/CardAction";

const store = configureStore({
  reducer: {
    // notes: notesActions.reducer,
    cards: cardActions.reducer,
  },
});

console.log("index's store", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={Router}>
      <App />
    </RouterProvider>
    <App />
  </Provider>
);
