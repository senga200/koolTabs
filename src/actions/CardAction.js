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
      console.log("Action payload: ", action.payload);
      state.fretBoard = state.fretBoard.filter(
        (card) => card.key !== action.payload
      );
      console.log("id de la carte à supprimer", action.payload);
    },

    pressAction: (state, action) => {
      {
        const { cardKey, note } = action.payload;
        const cardIndex = state.fretBoard.findIndex(
          (card) => card.key === cardKey
        );
        console.log("cardIndex", cardIndex);

        state.fretBoard[cardIndex].activeNotes.push(note);
        console.log("note", note);
      }
      console.log(initialState.card.fretBoard[0].activeNotes);
    },

    unPressAction: (state, action) => {
      console.log("Unpressing:", action.payload);
      const { cardKey, note } = action.payload;
      console.log("cardKey", cardKey);
      const cardIndex = state.fretBoard.findIndex(
        (card) => card.key === cardKey
      );
      console.log("cardIndex", cardIndex);
      console.log("note", note);

      state.fretBoard[cardIndex].activeNotes = state.fretBoard[
        cardIndex
      ].activeNotes.filter((note) => note !== action.payload.note);
    },

    crossOrRoundAction: (state, action) => {
      const { cardKey, index } = action.payload;
      console.log("cardKey", cardKey);
      console.log("index", index);

      const cardIndex = state.fretBoard.findIndex(
        (card) => card.key === cardKey
      );
      state.fretBoard[cardIndex].crossOrRound = state.fretBoard[
        cardIndex
      ].crossOrRound.map((value, i) => (i === index ? (value + 1) % 3 : value));

      console.log("crossOrRound", state.fretBoard[cardIndex].crossOrRound);
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
