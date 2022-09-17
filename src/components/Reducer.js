import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      return { count: state.count - 1 };
      break;
    default:
      throw new Error();
  }
};

const UseReduceExample = () => {
  const [state, dispatch] = useReducer(reducer, initialCount);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default UseReduceExample;
