import { useState, useLayoutEffect } from "react";
import List from "./List";


const App = () => {
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    console.log(count);
  }, [count])

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  )
};

export default App;