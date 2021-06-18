import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment",, amount:"1" });
  };
  const decrement = () => {
    dispatch({ type: "decrement",, amount:"1" });
  };
  const incrementBy5 = () => {
    dispatch({ type: "increment", amount:"5" });
  };
  const decrementBY5 = () => {
    dispatch({ type: "decrement", amount: "5" });
  };
  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrementBY5}>decrement</button>
      <button onClick={decrement}>decrementBy5</button>
      <button onClick={incrementBy5}>incrementBy5</button>
    </div>
  );
}

export default Counter;
