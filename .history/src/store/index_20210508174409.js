import { createStore } from "redux";
const store = createStore();
counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "increment") {
    state.counter += 1;
  } else if (action.type == "decrement") {
    state.counter -= 1;
  }
  return state;
};
