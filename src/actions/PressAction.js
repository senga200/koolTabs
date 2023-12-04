// import { createSlice } from "@reduxjs/toolkit";
// import initialState from "../initialState";

// const notesSlice = createSlice({
//   name: "notes",
//   initialState: initialState.card.fretBoard[0].activeNotes,

//   reducers: {
//     pressAction: (state, action) => {},
//     unPressAction: (state, action) => {},
//     crossOrRoundAction: (state, action) => {},
//   },
// });

// export const { pressAction, unPressAction, crossOrRoundAction } =
//   notesSlice.actions;
// export default notesSlice;

// reducers: {
//   pressAction: (state, action) => {
//     //state.activeNote = action.payload; // Définir la note active sur la note cliquée
//     state.activeNotes.push(action.payload); //ajouter la note cliquée au tableau des notes actives
//   },
//   unPressAction: (state, action) => {
//     //state.activeNote = null; // Réinitialiser la note active
//     state.activeNotes = state.activeNotes.filter(
//       (note) => note !== action.payload
//     ); //supprimer la note cliquée du tableau des notes actives
//   },
//   crossOrRoundAction: (state, action) => {
//     state.crossOrRound = state.crossOrRound.map((value, index) =>
//       index === action.payload ? (value + 1) % 3 : value
//     );
//     console.log("crossOrRound", state.crossOrRound);
//   },
// },
// });
