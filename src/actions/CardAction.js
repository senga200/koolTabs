import { createSlice } from "@reduxjs/toolkit";
//import FretBoard from "../components/FretboardGrid";

const initialState = {
  fretBoard: [],
  counter: 0,
};
console.log("initialState", initialState);

const cardSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    incrementCounterAction: (state, action) => {
      state.counter += 1;
    },

    createCardAction: (state, action) => {
      // Action pour ajouter un composant FretboardGrid dans le state fretBoard
      //state.fretBoard.push({ key: Math.floor(Math.random() * 1000) });
      state.fretBoard.push({ key: state.counter });

      console.log("state card action", state.fretBoard);
    },

    deleteCardAction: (state, action) => {
      // Action pour supprimer la carte avec l'id correspondant
      state.fretBoard = state.fretBoard.filter(
        (card) => card.key !== action.payload
      );
      console.log("id de la carte à supprimer", action.payload);
    },
  },
});

export const { incrementCounterAction, createCardAction, deleteCardAction } =
  cardSlice.actions;
export default cardSlice;
