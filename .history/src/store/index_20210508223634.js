import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      return state.counter + action.payload;
    },
    decrement(state, action) {
      return state.counter + action.payload;
    },
  },
});
// const counterReducer = (intialState, action) => {
//   console.log("state is =====>>>", state.counter);
//   if (action.type === "increment") {
//     return {
//     counter: state.counter + action.amount,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       counter: state.counter - action.amount,
//     };
//   }

//   return state;
// };
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export const actions = counterSlice.actions;

export default store;
