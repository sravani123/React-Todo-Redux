import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  console.log("counter in component is ===", counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div className="App">
      <div>{counter}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
