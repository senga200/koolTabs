import { createSlice } from "@reduxjs/toolkit";

// function generateUniqueId() {
//   // Générer un identifiant unique
//   return Math.random().toString(36).substring(2, 11);
// }

const cardSlice = createSlice({
  name: "cards",
  initialState: {},

  reducers: {
    createCardAction: (state, action) => {
      // Action pour ajouter un composant FretboardGrid
    },
    deleteCardAction: (state, action) => {
      // Action pour supprimer la carte
      const cardId = action.payload;
      delete state[cardId];
    },
    duplicateCardAction: (state, action) => {
      // Action pour dupliquer la carte
      const { originalCardId, newCardId } = action.payload;
      state[newCardId] = { ...state[originalCardId] };
    },
  },
});

export const { createCardAction, deleteCardAction, duplicateCardAction } =
  cardSlice.actions;

export default cardSlice;
