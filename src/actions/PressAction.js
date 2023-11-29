import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    //  activeNotes: null, // Note active initialement à null
    activeNotes: [], //tableau vide pour stocker plusieurs notes actives
    //crossOrRound: Array(6).fill(0), //tableau de 6 cases initialisé à 0
    crossOrRound: [0, 0, 0, 0, 0, 0], //tableau de 6 cases initialisé à 0
  },

  reducers: {
    pressAction: (state, action) => {
      //state.activeNote = action.payload; // Définir la note active sur la note cliquée
      state.activeNotes.push(action.payload); //ajouter la note cliquée au tableau des notes actives
    },
    unPressAction: (state, action) => {
      //state.activeNote = null; // Réinitialiser la note active
      state.activeNotes = state.activeNotes.filter(
        (note) => note !== action.payload
      ); //supprimer la note cliquée du tableau des notes actives
    },
    crossOrRoundAction: (state, action) => {
      state.crossOrRound = state.crossOrRound.map((value, index) =>
        index === action.payload ? (value + 1) % 3 : value
      );
      console.log("crossOrRound", state.crossOrRound);
    },
  },
});

export const { pressAction, unPressAction, crossOrRoundAction } =
  notesSlice.actions;
export default notesSlice;
