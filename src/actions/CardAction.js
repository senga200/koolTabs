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
      state.fretBoard.push({});
      console.log("state", state.fretBoard);
    },

    deleteCardAction: (state, action) => {
      // Action pour supprimer la carte
    },

    duplicateCardAction: (state, action) => {
      // Action pour dupliquer la carte
    },
  },
});

export const { createCardAction, deleteCardAction, duplicateCardAction } =
  cardSlice.actions;
export default cardSlice;
