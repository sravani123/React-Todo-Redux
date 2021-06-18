import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../store/index";

function Counter() {
  let [count, setCount] = useState(0);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment(1));
  };
  const decrement = () => {
    dispatch(actions.decrement(1));
  };
  const incrementBy5 = () => {
    dispatch(actions.increment(5));
  };
  const decrementBy5 = () => {
    dispatch(actions.decrement(5));
  };
  const simpleStateChange = () => {
    setCount(count++);
  }
  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={decrementBy5}>decrementBy5</button>
      <button onClick={incrementBy5}>incrementBy5</button>
      <button onClick={simpleStateChange }>SimpleCounter { count}</button>
    </div>
  );
}

export default Counter;
