import "./styles.css";
import useSecondRender from "./customeHook/SecoundRender";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  useSecondRender(() => {
    console.log(count, "Rendered");
  }, [count]);

  const handleClick = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{count}</h2>
      <button onClick={(e) => handleClick(e)}>Click</button>
    </div>
  );
}
