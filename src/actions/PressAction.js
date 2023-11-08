import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    //  activeNotes: null, // Note active initialement à null
    activeNotes: [], //tableau vide pour stocker plusieurs notes actives
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
  },
});

export const { pressAction, unPressAction } = notesSlice.actions;
export default notesSlice;
