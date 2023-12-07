const initialState = {
  card: {
    fretBoard: [
      // {
      //   key: 0,
      //   activeNotes: [],
      //   crossOrRound: [0, 0, 0, 0, 0, 0],
      // },
    ],
    counter: 0,
  },
};

export default initialState;

//   tabs: [
//     {
//       id: 0,
//       name: "Tab 1",
//       fretBoard: [
//         {
//           key: 0,
//           activeNotes: [],
//           crossOrRound: [0, 0, 0, 0, 0, 0],
//         },
//       ],
//     },
//   ],
//   activeTab: 0,

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "INCREMENT_COUNTER":
//             return {
//                 ...state,
//                 card: {
//                     ...state.card,
//                     counter: state.card.counter + 1,
//                 },
//             };
//         case "CREATE_CARD":
//             return {
//                 ...state,
//                 card: {
//                     ...state.card,
//                     fretBoard: [
//                         ...state.card.fretBoard,
//                         { key: state.card.counter },
//                     ],
//                 },
//             };
//         case "DELETE_CARD":
//             return {
//                 ...state,
//                 card: {
//                     ...state.card,
//                     fretBoard: state.card.fretBoard.filter(
//                         (card) => card.key !== action.payload
//                     ),
//                 },
//             };
//         case "PRESS":
//             return {
//                 ...state,
//                 card: {
//                     ...state.card,
//                     fretBoard: state.card.fretBoard.map((card) =>
//                         card.key === action.payload
//                             ? {
//                                 ...card,
//                                 activeNotes: [...card.activeNotes, action.note],
//                             }
//                             : card
//                     ),
//                 },
//             };
//         case "UNPRESS":
//             return {
//                 ...state,
//                 card: {
//                     ...state.card,
//                     fretBoard: state.card.fretBoard.map((card) =>
//                         card.key === action.payload
//                             ? {
//                                 ...card,
//                                 activeNotes: card.activeNotes.filter(
//                                     (note) => note !== action.note
//                                 ),
//                             }
//                             : card
//                     ),
//                 },
//             };
//         case "CROSS_OR_ROUND":
//             return {
//                 ...state,
//                 card: {
//                     ...state.card,
//                     fretBoard: state.card.fretBoard.map((card) =>
//                         card.key === action.payload
//                             ? {
//                                 ...card,
//                                 crossOrRound: card.crossOrRound.map(
//                                     (value, index) =>
//                                         index === action.index
//                                             ? (value + 1) % 3
//                                             : value
//                                 ),
//                             }
//                             : card
//                     ),
//                 },
//             };
//         case "CREATE_TAB":
//             return {
//                 ...state,
//                 tabs: [
//                     ...state.tabs,
//                     {
//                         id: state.tabs.length,
//                         name: `Tab ${state.tabs.length + 1}`,
//                         fretBoard: [
//                             {
//                                 key: 0,
//                                 activeNotes: [],
//                                 crossOrRound: [0, 0, 0, 0, 0, 0],
//                             },
//                         ],
//                     },
//                 ],
//             };

//         case "DELETE_TAB":
//             return {
//                 ...state,
//                 tabs: state.tabs.filter((tab) => tab.id !== action.payload),
//             };
//         case "SET_ACTIVE_TAB":
//             return {
//                 ...state,
//                 activeTab: action.payload,
//             };
//         default:
//             return state;
//     }
// }

// export default rootReducer;
