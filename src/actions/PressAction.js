import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    activeNote: null, // Note active initialement à null
  },

  reducers: {
    pressAction: (state, action) => {
      state.activeNote = action.payload; // Définir la note active sur la note cliquée
    },
    unPressAction: (state, action) => {
      state.activeNote = null; // Réinitialiser la note active
    },
  },
});

export const { pressAction, unPressAction } = notesSlice.actions;
export default notesSlice;
