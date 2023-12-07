import { createSlice } from "@reduxjs/toolkit";
import initialState from "../initialState";

const cardSlice = createSlice({
  name: "cards",
  initialState: initialState.card,

  reducers: {
    incrementCounterAction: (state, action) => {
      state.counter += 1;
      console.log("state counter", state.counter);
    },

    createCardAction: (state) => {
      const newCard = {
        key: state.counter + 1,
        activeNotes: [],
        crossOrRound: Array(6).fill(0),
      };
      state.fretBoard = [...state.fretBoard, newCard];
      state.counter += 1;
    },

    deleteCardAction: (state, action) => {
      const cardKeyToDelete = action.payload;

      state.fretBoard = state.fretBoard.filter(
        (card) => card.key !== cardKeyToDelete
      );

      console.log("id de la carte à supprimer", cardKeyToDelete);
    },

    pressAction: (state, action) => {
      const { cardKey, note } = action.payload;
      const cardIndex = state.fretBoard.findIndex(
        (card) => card.key === cardKey
      );

      if (cardIndex !== -1) {
        state.fretBoard[cardIndex].activeNotes.push(note);
      }
    },

    unPressAction: (state, action) => {
      const { cardKey, note } = action.payload;
      const cardIndex = state.fretBoard.findIndex(
        (card) => card.key === cardKey
      );

      if (cardIndex !== -1) {
        state.fretBoard[cardIndex].activeNotes = state.fretBoard[
          cardIndex
        ].activeNotes.filter((n) => n !== note);
      }
    },

    crossOrRoundAction: (state, action) => {
      const { cardKey, index } = action.payload;
      const cardIndex = state.fretBoard.findIndex(
        (card) => card.key === cardKey
      );

      if (cardIndex !== -1) {
        state.fretBoard[cardIndex].crossOrRound = state.fretBoard[
          cardIndex
        ].crossOrRound.map((value, i) =>
          i === index ? (value + 1) % 3 : value
        );
      }
    },
  },
});

export const {
  incrementCounterAction,
  createCardAction,
  deleteCardAction,
  pressAction,
  unPressAction,
  crossOrRoundAction,
} = cardSlice.actions;
export default cardSlice;
