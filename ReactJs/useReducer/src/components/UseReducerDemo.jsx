import React from "react";
import { useReducer } from "react";

function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    switch (action) {
      case "increment":
        return { count: state.count + 1 };

      case "decrement":
        return { count: state.count - 1 };
    }
  }

  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}

export default UseReducerDemo;
