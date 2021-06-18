import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  console.log("state is =====>>>", state.counter);
  if (action.type === "increment") {
    return {
      counter: state.counter + action.amount,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - action.amount,
    };
  }

  return state;
};
const store = createStore(counterReducer);

export default store;
