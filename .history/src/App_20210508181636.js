import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment" });
  };
  return (
    <div className="App">
      <span>{counter}</span>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default App;
