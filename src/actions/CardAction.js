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
      // si cardIndex est différent de -1, alors on ajoute la note à la carte(car si cardIndex est égal à -1, alors la carte n'existe pas)
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
          // si la note est différente de la note à supprimer, alors on la garde
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
          // verifie si la valeur est sup. à 2, si oui, on la remet à 0, sinon on l'incrémente de 1
          i === index ? (value < 2 ? value + 1 : 0) : value
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
