import { createSlice } from "@reduxjs/toolkit";
//import FretBoard from "../components/FretboardGrid";

const initialState = {
  fretBoard: [],
};
console.log("initialState", initialState);

const cardSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    createCardAction: (state, action) => {
      // Action pour ajouter un composant FretboardGrid dans le state fretBoard
      state.fretBoard.push({ key: Math.random() });
      console.log("state", state.fretBoard);
    },

    deleteCardAction: (state, action) => {
      // Action pour supprimer la carte
      state.fretBoard.splice(action.payload, 1);
    },
  },
});

export const { createCardAction, deleteCardAction } = cardSlice.actions;
export default cardSlice;
